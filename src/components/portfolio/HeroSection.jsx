import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Shield, Award, FileCheck } from 'lucide-react';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="introduction" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0F2341] to-[#1E3A5F]">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating accent elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#C9A227]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#1E3A5F]/50 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-full mb-8">
            <Shield className="w-4 h-4 text-[#C9A227]" />
            <span className="text-[#C9A227] text-sm font-medium tracking-wide">NAICS 5415 — Computer Systems Design & Related Services</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Johnson Ecommerce LLC
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
            Government Contractor & Technology Solutions Provider
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#C9A227] to-[#E8C547] mx-auto mb-8" />

          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Delivering proven, reliable computer systems design solutions to federal and local government agencies. 
            This portfolio demonstrates our capability, expertise, and commitment to excellence in fulfilling 
            government contract requirements.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="flex items-center gap-3 text-slate-300">
              <div className="p-2 bg-white/5 rounded-lg">
                <FileCheck className="w-5 h-5 text-[#C9A227]" />
              </div>
              <span className="text-sm">Federal Experience</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="p-2 bg-white/5 rounded-lg">
                <Award className="w-5 h-5 text-[#C9A227]" />
              </div>
              <span className="text-sm">50+ Completed Projects</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="p-2 bg-white/5 rounded-lg">
                <Shield className="w-5 h-5 text-[#C9A227]" />
              </div>
              <span className="text-sm">Quality Assured</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-400 hover:text-[#C9A227] transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </div>
    </section>
  );
}