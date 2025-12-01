import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Use screenshotmachine API for reliable fully-loaded screenshots
  const apiKey = 'placeholder';
  const screenshotUrl = `https://api.screenshotmachine.com?key=${apiKey}&url=${encodeURIComponent(project.url)}&dimension=1024x768&delay=5000&cacheLimit=0`;

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