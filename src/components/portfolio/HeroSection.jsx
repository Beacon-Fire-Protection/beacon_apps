import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Rocket, ChevronDown, Workflow } from 'lucide-react';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,255,255,.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,255,255,.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />
        
      </div>

      {/* Glowing accents */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }} />
      

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-12 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
            <Workflow className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">
              Small Business Strategy
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Clarity, Momentum,<br />
            <span className="bg-gradient-to-r from-yellow-300 via teal-500 to-grey- bg-clip-text text-transparent">and Working Software

            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            I help small businesses make smart decisions, move fast, and get done things that matter—
            from strategic roadmaps to custom software and rapid prototypes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-200 hover:bg-cyan-500/25 transition-colors backdrop-blur-sm">
              
              Book a Free Discovery Call
            </a>
          </div>

          {/* Trust indicators / service pillars */}
          <div className="flex flex-wrap gap-6 justify-center mt-12">
            <div className="flex items-center gap-2 text-gray-300">
              <Rocket className="w-5 h-5 text-cyan-400" />
              <span>Strategic Consulting</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Code2 className="w-5 h-5 text-purple-400" />
              <span>Custom Development</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Zap className="w-5 h-5 text-pink-400" />
              <span>Workflow & Automation</span>
            </div>
          </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center mt-3">
         {/* Optional micro-proof line */}
          <p className="text-sm text-gray-500 mt-6">
            Practical, results driven work • Clear timelines • No fluff
          </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center mt-3">
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-5">

        </div>
        </div>
                  </motion.div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
      `}</style>
    </section>);

}