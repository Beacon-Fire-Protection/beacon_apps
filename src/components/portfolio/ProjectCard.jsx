import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Use WordPress mshots - fast and reliable
  const screenshotUrl = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.url)}?w=800&h=500`;

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
      className="group block bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 border border-gray-800 hover:border-cyan-500/50"
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
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black">
            <Globe className="w-12 h-12 text-cyan-400 mb-3" />
            <span className="text-white font-medium">{project.title}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold text-sm">
            Visit Site <ExternalLink className="w-4 h-4" />
          </span>
        </div>

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/80 backdrop-blur-sm text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/30">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mt-1">{project.description}</p>
          </div>
          <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transition-colors" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}