import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="pt-24 pb-20 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8"
            >
              Creative Designer.<br/>Developer.<br/>
              <span className="text-accent">Entrepreneur.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 font-light max-w-lg mb-10"
            >
              We build premium digital experiences that bridge the gap between aesthetic brilliance and business performance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/contact" className="px-8 py-4 rounded-full bg-white text-primary font-bold hover:bg-gray-200 transition-colors inline-block">
                Let's Build Your Next Project
              </Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 aspect-[4/5] bg-gradient-to-br from-surface to-primary border border-white/10 rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 relative group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,185,66,0.1)_0%,transparent_60%)] group-hover:scale-110 transition-transform duration-700" />
            <div className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white select-none z-10 flex items-center">
              PIXELFORGE<span className="text-accent font-display">.</span>
            </div>
            <div className="text-xs font-mono tracking-widest text-gray-500 mt-4 uppercase z-10">
              Creative Digital Studio
            </div>
          </motion.div>
        </div>
      </section>
      {/* Story */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-accent mb-8 uppercase tracking-widest text-sm">The Journey</h2>
          <div className="prose prose-invert prose-lg max-w-none text-gray-300 font-light leading-relaxed">
            <p className="mb-6">
              We operate at the intersection of design, technology, and business strategy. My focus is not just on making things look "pretty," but on architecting systems that function flawlessly as lead generation engines and trust-building platforms.
            </p>
            <p className="mb-6">
              Over the years, I've honed my skills traversing UI/UX design, modern frontend development, and branding. This full-stack creative approach allows me to maintain a project's original vision from the first wireframe to the final deployed line of code.
            </p>
            <p>
              We partner directly with founders, agencies, and ambitious brands to establish their authority online through distinctive design and fast, reliable software.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Core Expertise</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {['UI Design', 'UX Design', 'Frontend Development', 'Branding', 'Motion Design', 'Conversion Optimization'].map((skill, index) => (
              <div key={index} className="p-8 border border-white/10 rounded-2xl bg-primary flex items-center justify-between group hover:border-accent transition-colors">
                <span className="font-display text-xl font-medium">{skill}</span>
                <ArrowUpRight size={24} className="text-gray-600 group-hover:text-accent transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Values & Philosophy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { title: "Quality", text: "Uncompromising attention to detail in every pixel and line of code." },
              { title: "Creativity", text: "Unique solutions that stand out rather than blend in." },
              { title: "Performance", text: "Fast, accessible, and optimized platforms." },
              { title: "Communication", text: "Transparent process and reliable partnership." },
              { title: "Innovation", text: "Always embracing modern, scalable technologies." }
            ].map((value, i) => (
              <div key={i} className="flex flex-col items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent text-sm font-mono">{i+1}</div>
                <h3 className="text-xl font-display font-bold text-white">{value.title}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
