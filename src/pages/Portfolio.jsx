import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Shield, Search, Globe } from 'lucide-react';
import { Input } from '@/components/ui/input';
import ProjectCard from '@/components/portfolio/ProjectCard';
import ContactSection from '@/components/portfolio/ContactSection';
import { allProjects, categories } from '@/components/portfolio/projectData';

export default function Portfolio() {
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
              <span className="text-[#C9A227] text-sm font-medium">Johnson Ecommerce LLC — NAICS 5415</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Work</h1>
            <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-6" />
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              A comprehensive showcase of all our 50+ web applications demonstrating expertise in 
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

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-[#050D18] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C9A227] rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#0A1628]" />
              </div>
              <div>
                <p className="text-white font-semibold">Johnson Ecommerce LLC</p>
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
              © {new Date().getFullYear()} Johnson Ecommerce LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}