import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { ArrowUpRight, MessageCircle, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-24 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto md:text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8"
          >
            Let's Talk <span className="text-accent">Business.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Ready to elevate your digital presence? Reach out directly via WhatsApp for the fastest response, or fill out the inquiry form below.
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 bg-surface border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href={`https://wa.me/${personalInfo.phone.replace('+', '')}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-2xl bg-accent text-primary flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform"
          >
            <MessageCircle size={32} />
            <div>
              <h3 className="font-bold text-xl mb-1">WhatsApp</h3>
              <p className="font-medium opacity-80 text-sm">Fastest Response</p>
            </div>
            <span className="mt-2 font-mono font-bold">{personalInfo.formattedPhone}</span>
          </a>
          
          <a
            href={`tel:${personalInfo.phone}`}
            className="p-8 rounded-2xl bg-primary border border-white/10 flex flex-col items-center text-center gap-4 hover:border-white/30 transition-colors"
          >
            <Phone size={32} className="text-gray-400" />
            <div>
              <h3 className="font-bold text-xl text-white mb-1">Phone</h3>
              <p className="text-gray-500 font-medium text-sm">Direct Call</p>
            </div>
            <span className="mt-2 font-mono text-gray-300">{personalInfo.formattedPhone}</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="p-8 rounded-2xl bg-primary border border-white/10 flex flex-col items-center text-center gap-4 hover:border-white/30 transition-colors"
          >
            <Mail size={32} className="text-gray-400" />
            <div>
              <h3 className="font-bold text-xl text-white mb-1">Email</h3>
              <p className="text-gray-500 font-medium text-sm">Detailed Inquiries</p>
            </div>
            <span className="mt-2 font-mono text-gray-300">{personalInfo.email}</span>
          </a>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-16 rounded-3xl bg-surface border border-white/5">
            <h2 className="text-3xl font-display font-bold mb-8">Project Inquiry Form</h2>
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400 tracking-wide uppercase">Name</label>
                  <input type="text" id="name" className="bg-primary border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="business" className="text-sm font-medium text-gray-400 tracking-wide uppercase">Business / Company</label>
                  <input type="text" id="business" className="bg-primary border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Acme Corp" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400 tracking-wide uppercase">Email</label>
                  <input type="email" id="email" className="bg-primary border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-400 tracking-wide uppercase">Phone</label>
                  <input type="tel" id="phone" className="bg-primary border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="+1 234 567 890" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="text-sm font-medium text-gray-400 tracking-wide uppercase">Budget Range</label>
                  <select id="budget" className="bg-primary border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option>Select Budget</option>
                    <option>$1,000 - $3,000</option>
                    <option>$3,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="type" className="text-sm font-medium text-gray-400 tracking-wide uppercase">Project Type</label>
                  <select id="type" className="bg-primary border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option>Select Type</option>
                    <option>Landing Page</option>
                    <option>Business Website</option>
                    <option>Brand Experience</option>
                    <option>Web App / Custom</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 tracking-wide uppercase">Project Details & Goals</label>
                <textarea id="message" rows={5} className="bg-primary border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Tell me about your vision..."></textarea>
              </div>

              <button type="submit" className="self-start px-10 py-5 rounded-full bg-white text-primary font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                Submit Inquiry <ArrowUpRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
