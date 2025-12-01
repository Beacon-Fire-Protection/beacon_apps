import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Entryway Services",
    description: "Professional service management platform",
    url: "https://entrywayservices.base44.app/",
    category: "Business Services"
  },
  {
    title: "Task Management",
    description: "Comprehensive task and project tracking system",
    url: "https://taskmanagement.base44.app/",
    category: "Productivity"
  },
  {
    title: "AccPro",
    description: "Accounting and financial management solution",
    url: "https://accpro.base44.app/",
    category: "Finance"
  },
  {
    title: "Moda Studio",
    description: "Creative design and studio management platform",
    url: "https://modastudio.base44.app/",
    category: "Creative"
  },
  {
    title: "CodesMaster",
    description: "Code learning and development resource hub",
    url: "https://codesmaster.base44.app/",
    category: "Education"
  },
  {
    title: "Study Buddies",
    description: "Collaborative learning and study platform",
    url: "https://studybuddies.base44.app/",
    category: "Education"
  },
  {
    title: "Company Portal",
    description: "Enterprise portal and internal communications system",
    url: "https://companyportal.base44.app/",
    category: "Enterprise"
  },
  {
    title: "Businesses",
    description: "Business directory and management application",
    url: "https://businesses.base44.app/",
    category: "Business Services"
  },
  {
    title: "Funnel Flows",
    description: "Marketing funnel and conversion optimization tool",
    url: "https://funnelflows.base44.app/",
    category: "Marketing"
  }
];

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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
    >
      {/* Screenshot Preview */}
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
        
        {/* Loading/Fallback state */}
        {(!imageLoaded || imageError) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
            <Globe className="w-12 h-12 text-[#C9A227] mb-3" />
            <span className="text-white font-medium">{project.title}</span>
          </div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227] text-[#0A1628] rounded-full font-semibold text-sm">
            Visit Site <ExternalLink className="w-4 h-4" />
          </span>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0A1628] text-xs font-semibold rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card content */}
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

export default function WorkSection() {
  return (
    <section id="work" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A227] font-semibold text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mt-3 mb-6">My Work</h2>
          <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A collection of web applications demonstrating my capabilities in computer systems design, 
            development, and deployment. Click any project to view the live application.
          </p>
        </motion.div>

        {/* Project count indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#0A1628] rounded-full">
            <span className="text-[#C9A227] font-bold text-2xl">{projects.length}</span>
            <span className="text-white text-sm">Completed Projects</span>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.url} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}