import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, ArrowRight, ArrowUp, Shield, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const allProjects = [
  { title: "Entryway Services", description: "Professional service management platform", url: "https://entrywayservices.base44.app/", category: "Business Services" },
  { title: "Task Management", description: "Comprehensive task and project tracking system", url: "https://taskmanagement.base44.app/", category: "Productivity" },
  { title: "AccPro", description: "Accounting and financial management solution", url: "https://accpro.base44.app/", category: "Finance" },
  { title: "Moda Studio", description: "Creative design and studio management platform", url: "https://modastudio.base44.app/", category: "Creative" },
  { title: "CodesMaster", description: "Code learning and development resource hub", url: "https://codesmaster.base44.app/", category: "Education" },
  { title: "Study Buddies", description: "Collaborative learning and study platform", url: "https://studybuddies.base44.app/", category: "Education" },
  { title: "Company Portal", description: "Enterprise portal and internal communications system", url: "https://companyportal.base44.app/", category: "Enterprise" },
  { title: "Businesses", description: "Business directory and management application", url: "https://businesses.base44.app/", category: "Business Services" },
  { title: "Funnel Flows", description: "Marketing funnel and conversion optimization tool", url: "https://funnelflows.base44.app/", category: "Marketing" },
  { title: "Math Solve", description: "Mathematical problem solving and learning tool", url: "https://mathsolve.base44.app/", category: "Education" },
  { title: "Financial", description: "Financial planning and analysis platform", url: "https://financial.base44.app/", category: "Finance" },
  { title: "Finance Flows", description: "Financial workflow automation system", url: "https://financeflows.base44.app/", category: "Finance" },
  { title: "Marketing Flow", description: "Marketing campaign management platform", url: "https://marketingflow.base44.app/", category: "Marketing" },
  { title: "Shopify Template", description: "E-commerce template and design system", url: "https://shopifytemplate.base44.app/", category: "E-commerce" },
  { title: "Logistic", description: "Logistics and supply chain management", url: "https://logistic.base44.app/", category: "Business Services" },
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

const categories = ["All", ...new Set(allProjects.map(p => p.category))].sort();

function ProjectCard({ project, index }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`;

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
      className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
    >
      <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
        {!imageError && (
          <img
            src={screenshotUrl}
            alt={`${project.title} preview`}
            className={`w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}
        
        {(!imageLoaded || imageError) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
            <Globe className="w-12 h-12 text-[#C9A227] mb-3" />
            <span className="text-white font-medium">{project.title}</span>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227] text-[#0A1628] rounded-full font-semibold text-sm">
            Visit Site <ExternalLink className="w-4 h-4" />
          </span>
        </div>

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0A1628] text-xs font-semibold rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-[#0A1628] group-hover:text-[#1E3A5F] transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-500 text-sm mt-1">{project.description}</p>
          </div>
          <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-[#C9A227] transition-colors">
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0A1628] transition-colors" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function MyWork() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0A1628] via-[#0F2341] to-[#1E3A5F] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#C9A227]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-full mb-6">
              <Shield className="w-4 h-4 text-[#C9A227]" />
              <span className="text-[#C9A227] text-sm font-medium">Walter Johnson — NAICS 5415</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">My Work</h1>
            <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-6" />
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              A comprehensive showcase of all my 50+ web applications demonstrating expertise in 
              Computer Systems Design and Related Services.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Filters */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-50 border-slate-200"
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-[#0A1628] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <p className="text-slate-600">
            Showing <span className="font-semibold text-[#0A1628]">{filteredProjects.length}</span> projects
            {selectedCategory !== "All" && <span> in <span className="font-semibold">{selectedCategory}</span></span>}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.url} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <Globe className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 mb-2">No projects found</h3>
            <p className="text-slate-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#050D18] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C9A227] rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#0A1628]" />
              </div>
              <div>
                <p className="text-white font-semibold">Walter Johnson</p>
                <p className="text-slate-500 text-sm">NAICS 5415 Contractor</p>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-slate-300 hover:text-[#C9A227] hover:border-[#C9A227]/30 transition-all group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </button>

            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Walter Johnson. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}