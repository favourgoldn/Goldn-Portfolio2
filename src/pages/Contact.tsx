import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { ArrowUpRight, MessageCircle, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto md:text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8 text-slate-900"
          >
            Let's Talk <span className="text-accent">Business.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Ready to elevate your digital presence? Reach out directly via WhatsApp for the fastest response, or fill out the inquiry form below.
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 bg-white/40 backdrop-blur-md border-y border-sky-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="p-8 rounded-2xl bg-accent text-white flex flex-col items-center text-center gap-4 shadow-lg shadow-sky-100/50"
          >
            <MessageCircle size={32} />
            <div>
              <h3 className="font-bold text-xl mb-1">WhatsApp</h3>
              <p className="font-medium opacity-85 text-sm">Fastest Response</p>
            </div>
            <div className="flex flex-col gap-2.5 w-full mt-2">
              <a
                href={`https://wa.me/${personalInfo.phone.replace('+', '')}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-mono font-bold text-sm block text-center"
              >
                Line 1: {personalInfo.formattedPhone}
              </a>
              <a
                href={`https://wa.me/${personalInfo.phone2.replace('+', '')}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-mono font-bold text-sm block text-center"
              >
                Line 2: {personalInfo.formattedPhone2}
              </a>
            </div>
          </div>
          
          <div
            className="p-8 rounded-2xl bg-white border border-sky-100 flex flex-col items-center text-center gap-4 hover:border-accent transition-all shadow-sm"
          >
            <Phone size={32} className="text-slate-400" />
            <div>
              <h3 className="font-bold text-xl text-slate-900 mb-1">Phone</h3>
              <p className="text-slate-500 font-medium text-sm">Direct Call</p>
            </div>
            <div className="flex flex-col gap-2.5 w-full mt-2">
              <a
                href={`tel:${personalInfo.phone}`}
                className="px-4 py-2.5 rounded-xl bg-sky-50/50 hover:bg-sky-50 border border-sky-100/70 transition-all font-mono text-slate-700 text-sm block text-center font-medium"
              >
                Line 1: {personalInfo.formattedPhone}
              </a>
              <a
                href={`tel:${personalInfo.phone2}`}
                className="px-4 py-2.5 rounded-xl bg-sky-50/50 hover:bg-sky-50 border border-sky-100/70 transition-all font-mono text-slate-700 text-sm block text-center font-medium"
              >
                Line 2: {personalInfo.formattedPhone2}
              </a>
            </div>
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className="p-8 rounded-2xl bg-white border border-sky-100 flex flex-col items-center text-center gap-4 hover:border-accent transition-all shadow-sm"
          >
            <Mail size={32} className="text-slate-400" />
            <div>
              <h3 className="font-bold text-xl text-slate-900 mb-1">Email</h3>
              <p className="text-slate-500 font-medium text-sm">Detailed Inquiries</p>
            </div>
            <span className="mt-2 font-mono text-slate-700 font-semibold">{personalInfo.email}</span>
          </a>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-16 rounded-3xl bg-white/80 backdrop-blur-sm border border-sky-100 shadow-md">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Project Inquiry Form</h2>
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-500 tracking-wide uppercase">Name</label>
                  <input type="text" id="name" className="bg-white border border-sky-100 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="business" className="text-sm font-semibold text-slate-500 tracking-wide uppercase">Business / Company</label>
                  <input type="text" id="business" className="bg-white border border-sky-100 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm" placeholder="Acme Corp" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-500 tracking-wide uppercase">Email</label>
                  <input type="email" id="email" className="bg-white border border-sky-100 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm" placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-500 tracking-wide uppercase">Phone</label>
                  <input type="tel" id="phone" className="bg-white border border-sky-100 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm" placeholder="+1 234 567 890" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="text-sm font-semibold text-slate-500 tracking-wide uppercase">Budget Range</label>
                  <div className="relative">
                    <select id="budget" className="w-full bg-white border border-sky-100 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm appearance-none">
                      <option>Select Budget</option>
                      <option>$1,000 - $3,000</option>
                      <option>$3,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000+</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="type" className="text-sm font-semibold text-slate-500 tracking-wide uppercase">Project Type</label>
                  <div className="relative">
                    <select id="type" className="w-full bg-white border border-sky-100 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm appearance-none">
                      <option>Select Type</option>
                      <option>Landing Page</option>
                      <option>Business Website</option>
                      <option>Brand Experience</option>
                      <option>Web App / Custom</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-500 tracking-wide uppercase">Project Details & Goals</label>
                <textarea id="message" rows={5} className="bg-white border border-sky-100 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm" placeholder="Tell me about your vision..."></textarea>
              </div>

              <button type="submit" className="self-start px-10 py-5 rounded-full bg-accent hover:bg-sky-700 text-white font-bold shadow-md shadow-sky-100 transition-all flex items-center gap-2">
                Submit Inquiry <ArrowUpRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
