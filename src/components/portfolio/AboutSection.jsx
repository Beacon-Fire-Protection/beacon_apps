import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Zap, Database } from 'lucide-react';

export default function AboutSection() {
  const techStack = [
    {
      icon: Code2,
      title: "Frontend Mastery",
      description: "React, TypeScript, Tailwind CSS - Building responsive, modern interfaces that users love."
    },
    {
      icon: Database,
      title: "Backend Power",
      description: "Database design, API development, authentication - Robust systems that scale."
    },
    {
      icon: Layers,
      title: "Full-Stack Flow",
      description: "End-to-end development from concept to deployment - One developer, zero handoff delays."
    },
    {
      icon: Zap,
      title: "Rapid Delivery",
      description: "Proven track record shipping MVPs fast - 50+ applications built and deployed."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase">What I Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">MVP Development Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I specialize in turning ideas into working products. Whether you're a startup validating a concept, 
              an entrepreneur launching your first SaaS, or a business modernizing operations - I build MVPs that work.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With over 50 applications under my belt, I've developed a streamlined process that gets your product 
              to market quickly without sacrificing quality. From database architecture to polished UI, I handle every 
              aspect of development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My background in finance and federal systems means I understand data integrity, security, and building 
              applications that handle real-world complexity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-cyan-500/20 shadow-2xl"
          >
            <h3 className="text-white text-xl font-semibold mb-6">Tech Stack</h3>
            <ul className="space-y-4">
              {[
                "React + TypeScript",
                "Tailwind CSS",
                "Database Design",
                "API Development",
                "Authentication Systems",
                "Real-time Features",
                "Payment Integration",
                "Cloud Deployment"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Tech Stack Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}