import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Instagram, Clock, CheckCircle, Loader, AlertCircle } from 'lucide-react';
import ComplexSphere3D from '../components/ComplexSphere3D';

const socialLinks = [
  { icon: Github, label: 'GitHub', handle: 'Aryanknitp', href: 'https://github.com/Aryanknitp', color: '#e2e8f0' },
  { icon: Linkedin, label: 'LinkedIn', handle: 'Aryan Kumar', href: 'www.linkedin.com/in/aryan-kumar-064539331', color: '#0a66c2' },
  { icon: Twitter, label: 'Twitter', handle: 'aryan_dev', href: 'https://x.com/aryanroysingh', color: '#1da1f2' },
  { icon: Instagram, label: 'Instagram', handle: 'aryan.insta', href: 'https://www.instagram.com/aryan00942025?igsh=MXMza3JsM3dtZHc1', color: '#e1306c' },
];

const infoCards = [
  { icon: Mail, title: 'Email', value: 'arynkrbjunitp@gmail.com', sub: 'Reply within 24 hours', color: '#8b5cf6', href: 'mailto:arynkrbjunitp@gmail.com' },
  { icon: MapPin, title: 'Location', value: 'India', sub: 'Available for remote work', color: '#3b82f6', href: null },
  { icon: Clock, title: 'Availability', value: 'Open to Work', sub: 'Full-time / Freelance', color: '#10b981', href: null },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setFeedback('Email service is not configured yet. Add your EmailJS credentials in the project environment file.');
      return;
    }

    setStatus('sending');
    setFeedback('');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Aryan',
          to_email: 'arynkrbjunitp@gmail.com',
        },
        publicKey,
      );

      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFeedback('Thanks! Your message has been sent.');
      window.setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error('EmailJS submission failed:', error);
      setStatus('error');
      setFeedback('Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0" style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,0.03) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-28 pb-16 px-4 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          Get In <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg,#06b6d4,#8b5cf6)' }}>Touch</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Have a project in mind? I&apos;d love to hear from you. Let&apos;s build something amazing together.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <div className="w-12 h-1 rounded-full" style={{ background: 'linear-gradient(90deg,#06b6d4,#8b5cf6)' }} />
          <div className="w-3 h-1 rounded-full bg-cyan-400/40" />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 pb-24 relative z-10">
        {/* Info cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl p-5 flex items-start gap-4"
              style={{ background: 'rgba(10,10,32,0.85)', border: `1px solid ${card.color}25` }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = card.color + '50'; (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${card.color}15`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = card.color + '25'; (e.currentTarget as HTMLElement).style.boxShadow = ''; }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${card.color}15` }}>
                <card.icon className="w-5 h-5" style={{ color: card.color }} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">{card.title}</p>
                {card.href ? (
                  <a href={card.href} className="text-white font-medium text-sm hover:text-purple-400 transition-colors">{card.value}</a>
                ) : (
                  <p className="text-white font-medium text-sm">{card.value}</p>
                )}
                <p className="text-gray-500 text-xs mt-0.5">{card.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main grid: form + visual */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Form — takes 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-2xl p-8"
              style={{ background: 'rgba(10,10,32,0.85)', border: '1px solid rgba(139,92,246,0.2)' }}
            >
              <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Send a <span className="text-purple-400">Message</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {(['name', 'email'] as const).map((field) => (
                    <div key={field}>
                      <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">{field}</label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        value={formData[field]}
                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                        placeholder={field === 'name' ? 'Your name' : 'your@email.com'}
                        required
                        className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 focus:ring-1"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)', focusRingColor: '#8b5cf6' } as React.CSSProperties}
                        onFocus={(e) => { e.target.style.borderColor = 'rgba(139,92,246,0.6)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(139,92,246,0.2)'; }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project inquiry / Collaboration"
                    required
                    className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)' }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(139,92,246,0.6)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(139,92,246,0.2)'; }}
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, ideas, or just say hi..."
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 resize-none"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)' }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(139,92,246,0.6)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(139,92,246,0.2)'; }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
                  whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                  className="w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ background: status === 'sent' ? 'linear-gradient(135deg,#10b981,#059669)' : status === 'error' ? 'linear-gradient(135deg,#f59e0b,#ef4444)' : 'linear-gradient(135deg,#8b5cf6,#3b82f6)', boxShadow: '0 0 20px rgba(139,92,246,0.35)' }}
                >
                  {status === 'idle' && <><Send className="w-4 h-4" /> Send Message</>}
                  {status === 'sending' && <><Loader className="w-4 h-4 animate-spin" /> Sending...</>}
                  {status === 'sent' && <><CheckCircle className="w-4 h-4" /> Message Sent!</>}
                  {status === 'error' && <><AlertCircle className="w-4 h-4" /> Try Again</>}
                </motion.button>

                {feedback && (
                  <p className={`text-sm ${status === 'error' ? 'text-red-400' : 'text-emerald-400'}`}>
                    {feedback}
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Right panel: sphere + socials */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Sphere */}
            <div className="flex justify-center">
              <ComplexSphere3D size={220} primaryColor="#06b6d4" secondaryColor="#8b5cf6" accentColor="#3b82f6" />
            </div>

            {/* Social links */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(10,10,32,0.85)', border: '1px solid rgba(139,92,246,0.2)' }}
            >
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Connect With Me
              </h3>
              <div className="space-y-3">
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-3 rounded-xl group transition-all duration-200"
                    style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = s.color + '40'; (e.currentTarget as HTMLElement).style.background = s.color + '08'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.background = ''; }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                      style={{ background: s.color + '15' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 12px ${s.color}40`; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = ''; }}
                    >
                      <s.icon className="w-4 h-4" style={{ color: s.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium">{s.label}</p>
                      <p className="text-gray-500 text-xs truncate">{s.handle}</p>
                    </div>
                    <span className="text-gray-600 group-hover:text-gray-300 transition-colors text-lg">→</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
