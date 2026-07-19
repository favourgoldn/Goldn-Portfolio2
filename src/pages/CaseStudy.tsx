import { useParams, Navigate } from 'react-router-dom';
import { projects } from '../data';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="flex flex-col bg-transparent">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-end pb-20 px-6 md:px-12 pt-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.coverImage} 
            alt={project.name} 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F0F7FF] via-[#F0F7FF]/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link to="/work" className="inline-flex items-center gap-2 text-slate-500 hover:text-accent transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
             <ArrowLeft size={16} /> Back to Work
          </Link>
          <div className="flex gap-4 mb-6">
            <span className="px-4 py-1.5 border border-sky-100 rounded-full text-sm font-semibold tracking-wide text-slate-700 bg-white/80 backdrop-blur-sm shadow-sm">{project.category}</span>
            <span className="px-4 py-1.5 border border-sky-100 rounded-full text-sm font-semibold tracking-wide text-slate-700 bg-white/80 backdrop-blur-sm shadow-sm">{project.industry}</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8 text-slate-900"
          >
            {project.name}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-bold hover:bg-sky-700 shadow-md shadow-sky-100 transition-all"
            >
              Live Demo <ArrowUpRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 px-6 md:px-12 border-t border-sky-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          <div className="col-span-1 md:col-span-4 flex flex-col gap-12">
            <div>
              <h3 className="text-slate-500 font-mono text-sm tracking-widest mb-4">TECHNOLOGIES</h3>
              <ul className="flex flex-col gap-2">
                {project.technologies.map(tech => (
                  <li key={tech} className="text-slate-800 font-semibold">{tech}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-slate-500 font-mono text-sm tracking-widest mb-4">KEY RESULTS</h3>
              <ul className="flex flex-col gap-2">
                {project.keyResults.map(res => (
                  <li key={res} className="text-accent font-semibold">{res}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-8 flex flex-col gap-16 font-light text-xl text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">The Problem</h2>
              <p>{project.problem}</p>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">The Solution</h2>
              <p>{project.solution}</p>
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">The Outcome</h2>
              <p>{project.outcome}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Highlights (Placeholder for actual images) */}
      <section className="py-24 px-6 md:px-12 bg-white/40 backdrop-blur-md border-y border-sky-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Design Strategy</h2>
            <p className="text-slate-600 text-xl">A visual breakdown of the interface and experience.</p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="aspect-video w-full rounded-2xl bg-white border border-sky-100 shadow-sm flex items-center justify-center p-12">
               <div className="w-full h-full border border-dashed border-sky-200 bg-sky-50/30 flex items-center justify-center rounded-xl">
                 <p className="text-slate-400 font-mono text-sm">Full Interface Screenshot Placeholder</p>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-[4/3] w-full rounded-2xl bg-white border border-sky-100 shadow-sm flex items-center justify-center p-8">
                  <div className="w-full h-full border border-dashed border-sky-200 bg-sky-50/30 flex items-center justify-center rounded-xl">
                    <p className="text-slate-400 font-mono text-sm">Mobile View Placeholder</p>
                  </div>
              </div>
              <div className="aspect-[4/3] w-full rounded-2xl bg-white border border-sky-100 shadow-sm flex items-center justify-center p-8">
                  <div className="w-full h-full border border-dashed border-sky-200 bg-sky-50/30 flex items-center justify-center rounded-xl">
                    <p className="text-slate-400 font-mono text-sm">Interaction Placeholder</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 px-6 md:px-12">
         <div className="max-w-7xl mx-auto">
           <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">Process Snapshot</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
             {['Research', 'Planning', 'Wireframing', 'UI Design', 'Development', 'Testing', 'Launch'].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-sky-100 bg-white/80 shadow-sm flex items-center justify-center text-slate-500 font-mono text-xs">0{idx+1}</div>
                  <span className="text-sm font-medium text-slate-700">{step}</span>
                </div>
             ))}
           </div>
         </div>
      </section>
      
      {/* Footer Demo CTA */}
      <section className="py-32 px-6 md:px-12 bg-slate-900 text-white text-center shadow-lg border-y border-slate-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to see it in action?</h2>
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 rounded-full bg-accent hover:bg-sky-700 text-white font-bold transition-colors text-lg shadow-xl shadow-sky-900/50"
          >
            Visit Live Project
          </a>
        </div>
      </section>

    </div>
  );
}
