import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Send, CheckCircle, Building, User, MessageSquare } from 'lucide-react';

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
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#0A1628] via-[#0F2341] to-[#1E3A5F] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E3A5F]/30 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A227] font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Contact</h2>
          <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-6" />
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Interested in discussing a government contract opportunity? 
            I welcome inquiries from federal and local agencies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Received</h3>
                  <p className="text-slate-300 mb-6">
                    Thank you for your inquiry. I will review your message and respond promptly.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0A1628]"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-200 flex items-center gap-2">
                        <User className="w-4 h-4 text-[#C9A227]" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-[#C9A227]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-200 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#C9A227]" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@agency.gov"
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-[#C9A227]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-slate-200 flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#C9A227]" />
                      Organization / Agency
                    </Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Agency or organization name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-[#C9A227]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-200 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#C9A227]" />
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Please describe your project requirements or inquiry..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-[#C9A227] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C9A227] hover:bg-[#E8C547] text-[#0A1628] font-semibold py-6 text-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-[#0A1628]/30 border-t-[#0A1628] rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Submit Inquiry
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Direct Contact</h3>
                <p className="text-slate-300 mb-6">
                  For direct communication, you may also reach me via email:
                </p>
                <a
                  href="mailto:johnsonecommercellc@gmail.com"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#C9A227]/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#C9A227]" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="text-white font-medium group-hover:text-[#C9A227] transition-colors">
                      johnsonecommercellc@gmail.com
                    </p>
                  </div>
                </a>
              </div>

              <div className="p-6 bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-xl">
                <h4 className="text-[#C9A227] font-semibold mb-2">Response Time</h4>
                <p className="text-slate-300 text-sm">
                  I aim to respond to all inquiries within 24-48 business hours. 
                  Urgent matters are given priority attention.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}