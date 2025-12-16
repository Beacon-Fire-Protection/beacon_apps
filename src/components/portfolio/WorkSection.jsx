import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils';
import ProjectCard from './ProjectCard';
import { featuredProjects } from './projectData';

export default function WorkSection() {
  const handleViewAll = () => {
    window.open(createPageUrl('Portfolio'), '_blank');
  };

  return (
    <section id="work" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Built & Deployed</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real applications, shipped to production. From SaaS tools to e-commerce platforms, 
            each one built from scratch.
          </p>
        </motion.div>

        {/* Project count indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <button
            onClick={handleViewAll}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800 border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 transition-all cursor-pointer"
          >
            <span className="text-cyan-400 font-bold text-2xl">50+</span>
            <span className="text-white text-sm">Completed Projects</span>
          </button>
        </motion.div>

        {/* Featured projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.url} project={project} index={index} />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={handleViewAll}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all group"
          >
            <span className="flex items-center gap-3">
              See All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}