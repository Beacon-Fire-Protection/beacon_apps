import React from 'react';
import { ArrowUp, Shield } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050D18] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C9A227] rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#0A1628]" />
            </div>
            <div>
              <p className="text-white font-semibold">Walter Johnson</p>
              <p className="text-slate-500 text-sm">NAICS 5415 Contractor</p>
            </div>
          </div>

          {/* Center - Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-slate-300 hover:text-[#C9A227] hover:border-[#C9A227]/30 transition-all group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </button>

          {/* Right side - Copyright */}
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Walter Johnson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}