import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, Rocket, Briefcase } from 'lucide-react';

export default function AboutSection() {
  const milestones = [
    {
      icon: GraduationCap,
      title: "Academic Foundation",
      description: "Double major in Accounting and Finance, providing a strong analytical foundation and attention to detail essential for government contract compliance."
    },
    {
      icon: Building2,
      title: "Federal Experience",
      description: "One year at the Federal Deposit Insurance Corporation (FDIC), gaining firsthand experience with federal operations, compliance standards, and government workflows."
    },
    {
      icon: Rocket,
      title: "Entrepreneurial Drive",
      description: "Transitioned to independent contracting to deliver specialized technology solutions with the agility and dedication that government agencies require."
    },
    {
      icon: Briefcase,
      title: "Industry Expertise",
      description: "Six months of dedicated work in Computer Systems Design and Related Services (NAICS 5415), building a portfolio of functional, scalable web applications."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A227] font-semibold text-sm tracking-widest uppercase">Background</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mt-3 mb-6">About Our Founder</h2>
          <div className="w-16 h-1 bg-[#C9A227] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              I am a technology professional with a unique blend of financial acumen and technical expertise. 
              My background in accounting and finance, combined with federal government experience at the FDIC, 
              has instilled in me a deep appreciation for precision, compliance, and accountability.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Today, I operate as an independent contractor specializing in computer systems design and 
              related services. My mission is to deliver high-quality, reliable technology solutions that 
              meet the rigorous standards expected by government agencies.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every project I undertake reflects my commitment to excellence, transparency, and delivering 
              measurable value to my clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] p-8 rounded-2xl shadow-2xl"
          >
            <h3 className="text-white text-xl font-semibold mb-6">Core Qualifications</h3>
            <ul className="space-y-4">
              {[
                "B.S. in Accounting & Finance",
                "Former FDIC Federal Employee",
                "NAICS 5415 Specialization",
                "Full-Stack Web Development",
                "Database Design & Management",
                "Compliance-Focused Approach"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-200">
                  <div className="w-2 h-2 bg-[#C9A227] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-[#0A1628] rounded-lg flex items-center justify-center mb-4">
                <milestone.icon className="w-6 h-6 text-[#C9A227]" />
              </div>
              <h4 className="text-lg font-semibold text-[#0A1628] mb-2">{milestone.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{milestone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}