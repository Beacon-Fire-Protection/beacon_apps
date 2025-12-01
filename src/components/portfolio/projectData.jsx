// Project data with static screenshot URLs for the first 15 projects
// Remaining projects use the microlink API for dynamic screenshots

export const allProjects = [
  { 
    title: "Entryway Services", 
    description: "Business formation service for non-U.S. residents", 
    url: "https://entrywayservices.base44.app/", 
    category: "Business Services",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Fentrywayservices.base44.app%2F&screenshot=true&meta=false&embed=screenshot.url"
  },
  { 
    title: "Task Management", 
    description: "Team task and project tracking dashboard", 
    url: "https://taskmanagement.base44.app/", 
    category: "Productivity",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Ftaskmanagement.base44.app%2F&screenshot=true&meta=false&embed=screenshot.url"
  },
  { 
    title: "AccPro", 
    description: "Professional accounting suite with inventory management", 
    url: "https://accpro.base44.app/", 
    category: "Finance",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Faccpro.base44.app%2F&screenshot=true&meta=false&embed=screenshot.url"
  },
  { 
    title: "Moda Studio", 
    description: "Contemporary fashion e-commerce with modern minimalism", 
    url: "https://modastudio.base44.app/", 
    category: "Creative",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Fmodastudio.base44.app%2F&screenshot=true&meta=false&embed=screenshot.url"
  },
  { 
    title: "CodesMaster", 
    description: "Interactive programming education platform", 
    url: "https://codesmaster.base44.app/", 
    category: "Education",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Fcodesmaster.base44.app%2F&screenshot=true&meta=false&embed=screenshot.url"
  },
  { 
    title: "Study Buddies", 
    description: "Collaborative homework and study hub", 
    url: "https://studybuddies.base44.app/", 
    category: "Education",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Fstudybuddies.base44.app%2F&screenshot=true&meta=false&embed=screenshot.url"
  },
  { 
    title: "Company Portal", 
    description: "Enterprise employee portal and communications hub", 
    url: "https://companyportal.base44.app/", 
    category: "Enterprise",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Fcompanyportal.base44.app%2F&screenshot=true&meta=false&embed=screenshot.url"
  },
  { 
    title: "Businesses", 
    description: "AI-powered assistant for lawyers and business professionals", 
    url: "https://businesses.base44.app/", 
    category: "Business Services",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Fbusinesses.base44.app%2F&screenshot=true&meta=false&embed=screenshot.url"
  },
  { 
    title: "Funnel Flows", 
    description: "Sales funnel design and management dashboard", 
    url: "https://funnelflows.base44.app/", 
    category: "Marketing",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Ffunnelflows.base44.app%2F&screenshot=true&meta=false&embed=screenshot.url"
  },
  { 
    title: "Math Solve", 
    description: "AI-powered step-by-step math problem solver", 
    url: "https://mathsolve.base44.app/", 
    category: "Education",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Fmathsolve.base44.app%2F&screenshot=true&meta=false&embed=screenshot.url"
  },
  { 
    title: "Financial", 
    description: "Personal finance tracker with secure data management", 
    url: "https://financial.base44.app/", 
    category: "Finance",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Ffinancial.base44.app%2F&screenshot=true&meta=false&embed=screenshot.url"
  },
  { 
    title: "Finance Flows", 
    description: "Professional accounting dashboard with analytics", 
    url: "https://financeflows.base44.app/", 
    category: "Finance",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Ffinanceflows.base44.app%2F&screenshot=true&meta=false&embed=screenshot.url"
  },
  { 
    title: "Marketing Flow", 
    description: "Digital marketing CRM with sales pipeline", 
    url: "https://marketingflow.base44.app/", 
    category: "Marketing",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Fmarketingflow.base44.app%2F&screenshot=true&meta=false&embed=screenshot.url"
  },
  { 
    title: "Shopify Template", 
    description: "Luxury e-commerce storefront template", 
    url: "https://shopifytemplate.base44.app/", 
    category: "E-commerce",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Fshopifytemplate.base44.app%2F&screenshot=true&meta=false&embed=screenshot.url"
  },
  { 
    title: "Logistic", 
    description: "Global container logistics and shipping platform", 
    url: "https://logistic.base44.app/", 
    category: "Business Services",
    screenshot: "https://api.microlink.io/?url=https%3A%2F%2Flogistic.base44.app%2F&screenshot=true&meta=false&embed=screenshot.url"
  },
  { title: "JSON Generator", description: "JSON data generation and manipulation tool", url: "https://jsongenerator.base44.app/", category: "Developer Tools" },
  { title: "Clients", description: "Client relationship management system", url: "https://clients.base44.app/", category: "Business Services" },
  { title: "ProEdu", description: "Professional education and training platform", url: "https://proedu.base44.app/", category: "Education" },
  { title: "Data Flows", description: "Data pipeline and workflow management", url: "https://dataflows.base44.app/", category: "Developer Tools" },
  { title: "Craft Resume", description: "Professional resume builder and management", url: "https://craftresume.base44.app/", category: "Productivity" },
  { title: "OCR Scan", description: "Optical character recognition scanning tool", url: "https://ocrscan.base44.app/", category: "Developer Tools" },
  { title: "Cryptos", description: "Cryptocurrency tracking and analysis", url: "https://cryptos.base44.app/", category: "Finance" },
  { title: "HealTogether", description: "Healthcare collaboration platform", url: "https://healtogether.base44.app/", category: "Healthcare" },
  { title: "Osteoscope", description: "Medical imaging and diagnostics tool", url: "https://osteoscope.base44.app/", category: "Healthcare" },
  { title: "Financial Hub", description: "Comprehensive financial data and analytics", url: "https://financialhub.base44.app/", category: "Finance" },
  { title: "Calorie Scan", description: "Nutrition tracking and calorie counting app", url: "https://caloriescan.base44.app/", category: "Healthcare" },
  { title: "Shop Management", description: "Retail shop management system", url: "https://shopmanagement.base44.app/", category: "E-commerce" },
  { title: "Academics", description: "Academic management and tracking platform", url: "https://academics.base44.app/", category: "Education" },
  { title: "Planify Pro", description: "Project planning and scheduling tool", url: "https://planifypro.base44.app/", category: "Productivity" },
  { title: "Finance Game", description: "Financial literacy gamification platform", url: "https://financegame.base44.app/", category: "Education" },
  { title: "Notes Craft", description: "Note-taking and organization application", url: "https://notescraft.base44.app/", category: "Productivity" },
  { title: "App Craft", description: "Application development and prototyping", url: "https://appcraft.base44.app/", category: "Developer Tools" },
  { title: "Poker Play", description: "Poker game and strategy platform", url: "https://pokerplay.base44.app/", category: "Entertainment" },
  { title: "Click Speed", description: "Click speed testing and training tool", url: "https://clickspeed.base44.app/", category: "Entertainment" },
  { title: "Clouds", description: "Cloud services and storage management", url: "https://clouds.base44.app/", category: "Developer Tools" },
  { title: "Gazefi", description: "Focus and productivity tracking application", url: "https://gazefi.base44.app/", category: "Productivity" },
  { title: "Lawyer Flow", description: "Legal practice management system", url: "https://lawyerflow.base44.app/", category: "Business Services" },
  { title: "Portfolios", description: "Portfolio creation and showcase platform", url: "https://portfolios.base44.app/", category: "Creative" },
  { title: "Syllabus", description: "Course syllabus management tool", url: "https://syllabus.base44.app/", category: "Education" },
  { title: "Peace", description: "Meditation and mindfulness application", url: "https://peace.base44.app/", category: "Healthcare" },
  { title: "Creative Lab", description: "Creative design workspace and tools", url: "https://creativelab.base44.app/", category: "Creative" },
  { title: "Lock Forge", description: "Security and password management", url: "https://lockforge.base44.app/", category: "Developer Tools" },
  { title: "Wrap Books", description: "Book management and reading tracker", url: "https://wrapbooks.base44.app/", category: "Productivity" },
  { title: "Share File", description: "File sharing and collaboration platform", url: "https://sharefile.base44.app/", category: "Developer Tools" },
  { title: "Build Right", description: "Construction project management", url: "https://buildright.base44.app/", category: "Business Services" },
  { title: "Fit Faith", description: "Fitness and wellness tracking application", url: "https://fitfaith.base44.app/", category: "Healthcare" },
  { title: "Quote Master", description: "Quote generation and management tool", url: "https://quotemaster.base44.app/", category: "Business Services" },
  { title: "Organ Check", description: "Health monitoring and organ tracking", url: "https://organcheck.base44.app/", category: "Healthcare" },
  { title: "Compress Max", description: "File compression and optimization tool", url: "https://compressmax.base44.app/", category: "Developer Tools" },
  { title: "Freedom Path", description: "Personal development and goal tracking", url: "https://freedompath.base44.app/", category: "Productivity" }
];

export const featuredProjects = allProjects.slice(0, 6);

export const categories = ["All", ...new Set(allProjects.map(p => p.category))].sort();