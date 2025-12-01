import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    
    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { url, title } = await req.json();
    
    if (!url) {
      return Response.json({ error: 'URL is required' }, { status: 400 });
    }

    // Use thum.io to get screenshot
    const screenshotApiUrl = `https://image.thum.io/get/width/800/crop/500/wait/10/${url}`;
    
    // Fetch the screenshot
    const response = await fetch(screenshotApiUrl);
    
    if (!response.ok) {
      return Response.json({ error: 'Failed to capture screenshot' }, { status: 500 });
    }

    const imageBlob = await response.blob();
    
    // Convert blob to File for upload
    const file = new File([imageBlob], `${title.replace(/\s+/g, '-').toLowerCase()}.png`, { type: 'image/png' });
    
    // Upload to Base44 storage
    const { file_url } = await base44.integrations.Core.UploadFile({ file });

    return Response.json({ 
      success: true, 
      title,
      url,
      screenshot_url: file_url 
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});