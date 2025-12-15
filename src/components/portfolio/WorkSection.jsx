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
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mt-3 mb-6">Featured Work</h2>
          <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A selection of web applications demonstrating our capabilities in computer systems design, 
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
          <button
            onClick={handleViewAll}
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#0A1628] rounded-full hover:bg-[#1E3A5F] transition-all cursor-pointer"
          >
            <span className="text-[#C9A227] font-bold text-2xl">50+</span>
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
            className="bg-[#0A1628] hover:bg-[#1E3A5F] text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group"
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