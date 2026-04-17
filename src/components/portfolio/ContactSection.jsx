import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Send, CheckCircle, User, MessageSquare, Lightbulb, DollarSign } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await base44.entities.ContactInquiry.create({
      ...formData,
      status: 'new'
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', organization: '', message: '' });

    // Trigger confetti celebration
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black relative overflow-hidden">
      {/* Animated background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="text-cyan-400 font-semibold text-xs sm:text-sm tracking-widest uppercase">Let's Build</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4 sm:mb-6 px-2">Get Your Free Consultation</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-4 sm:mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Share what you're dealing with. In our free consultation, we'll clarify priorities, surface hidden inefficiencies, and map a realistic path forward.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <motion.div
              className="bg-gray-900 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 sm:p-8 shadow-xl"
              whileHover={{ boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
                    className="text-center py-8 sm:py-12"
                  >
                    <motion.div
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2, bounce: 0.6 }}
                    >
                      <motion.div
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
                      </motion.div>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl sm:text-2xl font-bold text-white mb-3"
                    >
                      Request Received!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-300 mb-6 px-4"
                    >
                      I'll review your message and give you a call to schedule your free consultation.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white"
                      >
                        Submit Another Request
                      </Button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5 sm:space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="grid sm:grid-cols-2 gap-5 sm:gap-6"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                    >
                      <motion.div
                        className="space-y-2"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                      >
                        <Label htmlFor="name" className="text-gray-200 flex items-center gap-2 text-sm sm:text-base">
                          <User className="w-4 h-4 text-cyan-400" />
                          Your Name *
                        </Label>
                        <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all h-11 sm:h-12"
                          />
                        </motion.div>
                      </motion.div>
                      <motion.div
                        className="space-y-2"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                      >
                        <Label htmlFor="email" className="text-gray-200 flex items-center gap-2 text-sm sm:text-base">
                          <Mail className="w-4 h-4 text-cyan-400" />
                          Email Address *
                        </Label>
                        <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@company.com"
                            className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all h-11 sm:h-12"
                          />
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Label htmlFor="organization" className="text-gray-200 flex items-center gap-2 text-sm sm:text-base">
                        <Lightbulb className="w-4 h-4 text-cyan-400" />
                        Company / Project Name
                      </Label>
                      <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                        <Input
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="Your company or project name"
                          className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all h-11 sm:h-12"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Label htmlFor="message" className="text-gray-200 flex items-center gap-2 text-sm sm:text-base">
                        <MessageSquare className="w-4 h-4 text-cyan-400" />
                        Describe Your Issue, Opportunity, or Idea: *
                      </Label>
                      <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="What problem does it solve? Who are your users? What are the core features you need? The more detail, the better the estimate."
                          className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 resize-none transition-all"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-5 sm:py-6 text-base sm:text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <motion.div
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              />
                              Submitting...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <Send className="w-5 h-5" />
                              Get Free Consultation
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                className="p-5 sm:p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl"
                whileHover={{ borderColor: "rgba(6, 182, 212, 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  </motion.div>
                  <h4 className="text-cyan-400 font-semibold text-base sm:text-lg">Free Discovery Calls Includes:</h4>
                </div>
                <motion.ul
                  className="space-y-3 text-gray-300 text-sm"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                      }
                    }
                  }}
                >
                  {[
                    { text: "1 Hr Consulting Call", color: "bg-cyan-400" },
                    { text: "Pre-Discovery Questionnaire & Workbook", color: "bg-purple-400" },
                    { text: "Strategic Recommendations based on Goals", color: "bg-pink-400" },
                    { text: "Cost breakdown", color: "bg-cyan-400" },
                    { text: "No commitment required", color: "bg-purple-400" }
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`w-1.5 h-1.5 ${item.color} rounded-full mt-1.5 flex-shrink-0`} />
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Prefer Email?</h3>
                <motion.a
                  href="mailto:deb@beaconprojectpartners.com"
                  className="inline-flex items-center gap-3 px-5 py-4 sm:px-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-colors group w-full sm:w-auto"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  </motion.div>
                  <div className="text-left">
                    <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                    <p className="text-white font-medium group-hover:text-cyan-400 transition-colors text-sm sm:text-base break-all">
                      deb@beaconprojectpartners.com
                    </p>
                  </div>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
