import React from 'react';
import { Code2, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Code1 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold">Beacon Projects</p>
              <p className="text-gray-500 text-sm">Small Business Consulting</p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-800 rounded-full text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </button>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Beacon Project Partners All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}