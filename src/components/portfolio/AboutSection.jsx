import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Zap, Database } from 'lucide-react';

export default function AboutSection() {
  const techStack = [
  {
    icon: Layers,
    title: "Strategic Clarity",
    description:
    "Goals, priorities, roadmaps, and decision support — turning “too many ideas” into a focused plan."
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
    "Web apps, internal tools, integrations, and dashboards — software built around how your business actually runs."
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description:
    "Fast prototypes to test workflows, validate ideas, and reduce risk before investing in a full build."
  },
  {
    icon: Database,
    title: "Systems & Automation",
    description:
    "Data cleanup, reporting, process automation, and reliable backends — less manual work, more consistency."
  }];


  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">WHAT I DO

          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Strategy + Workflow + Automation
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Beacon Projects helps small businesses get unstuck and make progress fast.
              If your team is juggling too many priorities, relying on messy spreadsheets,
              or repeating manual work every week — I help you simplify, systemize, and ship improvements.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Sometimes that looks like strategic consulting: clarifying goals, mapping operations,
              and building a practical plan. Other times it’s custom software: internal tools,
              automation, dashboards, integrations, or a customer-facing product.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My approach is hands-on and end-to-end — from discovery and planning through
              build, launch, and iteration — so you get clear decisions and working deliverables,
              not just a report.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }} className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-teal-500/20 shadow-2xl">
            
            
            <h3 className="text-white text-xl font-semibold mb-6">How We Work</h3>
            <ul className="space-y-4">
              {[
              "Discovery Call (goals, constraints, timeline)",
              "Quick Audit (processes, tools, pain points)",
              "Plan & Prioritize (roadmap + success metrics)",
              "Prototype (prove the workflow or concept)",
              "Build (software, automation, or system improvements)",
              "Test With Real Users / Real Data",
              "Launch + Documentation",
              "Iterate & Support (small improvements over time)"].
              map((item, index) =>
              <li key={index} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-yellow-300 rounded-full" />
                  {item}
                </li>
              )}
            </ul>
          </motion.div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((item, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all group">
            
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}