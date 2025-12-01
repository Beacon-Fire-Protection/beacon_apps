import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { allProjects } from '@/components/portfolio/projectData';
import { Camera, CheckCircle, XCircle, Loader2, Download } from 'lucide-react';

export default function AdminScreenshots() {
  const [results, setResults] = useState({});
  const [isCapturing, setIsCapturing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const captureAll = async () => {
    setIsCapturing(true);
    const newResults = {};

    for (let i = 0; i < allProjects.length; i++) {
      const project = allProjects[i];
      setCurrentIndex(i);

      try {
        const response = await base44.functions.invoke('captureScreenshots', {
          url: project.url,
          title: project.title
        });

        newResults[project.url] = {
          success: true,
          screenshot_url: response.data.screenshot_url
        };
      } catch (error) {
        newResults[project.url] = {
          success: false,
          error: error.message
        };
      }

      setResults({ ...newResults });
      
      // Small delay between captures to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    setIsCapturing(false);
  };

  const exportData = () => {
    const projectsWithScreenshots = allProjects.map(project => ({
      ...project,
      screenshot: results[project.url]?.screenshot_url || null
    }));

    const dataStr = JSON.stringify(projectsWithScreenshots, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'projects-with-screenshots.json';
    a.click();
  };

  const successCount = Object.values(results).filter(r => r.success).length;
  const failCount = Object.values(results).filter(r => !r.success).length;

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Screenshot Capture Admin</h1>
        
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-slate-600">Total Projects: {allProjects.length}</p>
              {Object.keys(results).length > 0 && (
                <p className="text-sm text-slate-500">
                  <span className="text-green-600">{successCount} captured</span>
                  {failCount > 0 && <span className="text-red-600 ml-2">{failCount} failed</span>}
                </p>
              )}
            </div>
            <div className="flex gap-3">
              <Button 
                onClick={captureAll} 
                disabled={isCapturing}
                className="bg-[#0A1628] hover:bg-[#1E3A5F]"
              >
                {isCapturing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Capturing {currentIndex + 1}/{allProjects.length}
                  </>
                ) : (
                  <>
                    <Camera className="w-4 h-4 mr-2" />
                    Capture All Screenshots
                  </>
                )}
              </Button>
              {successCount > 0 && (
                <Button onClick={exportData} variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
              )}
            </div>
          </div>

          {isCapturing && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-700">
                Currently capturing: <strong>{allProjects[currentIndex]?.title}</strong>
              </p>
              <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${((currentIndex + 1) / allProjects.length) * 100}%` }}
                />
              </div>
            </div>
          )}
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          {allProjects.map((project, index) => (
            <Card key={project.url} className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-slate-800">{project.title}</h3>
                  <p className="text-sm text-slate-500">{project.category}</p>
                </div>
                {results[project.url] && (
                  results[project.url].success ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )
                )}
              </div>
              {results[project.url]?.screenshot_url && (
                <img 
                  src={results[project.url].screenshot_url} 
                  alt={project.title}
                  className="mt-3 rounded-lg w-full h-32 object-cover"
                />
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}