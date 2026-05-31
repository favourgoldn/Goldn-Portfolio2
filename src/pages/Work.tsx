import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { Link } from 'react-router-dom';

const categories = ["All", "Websites", "Landing Pages", "Brand Experiences", "Fintech", "Wellness"];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(project => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Websites" && project.category === "Website") return true;
    if (activeFilter === "Landing Pages" && project.category === "Landing Page") return true;
    if (activeFilter === "Brand Experiences" && project.category === "Brand Experience") return true;
    if (activeFilter === "Fintech" && project.industry === "Fintech") return true;
    if (activeFilter === "Wellness" && project.industry === "Luxury Wellness") return true;
    return false;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-24 pb-12 px-6 md:px-12 bg-surface border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8"
          >
            Selected <span className="text-accent">Work.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl"
          >
            A collection of digital experiences designed to elevate brands and drive measurable business impact.
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 sticky top-[80px] z-40 bg-primary/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === cat 
                  ? 'bg-white text-primary border-white' 
                  : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group flex flex-col gap-6"
                >
                  <Link to={`/work/${project.id}`} className="block relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
                    <img 
                      src={project.thumbnail} 
                      alt={project.name} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                  </Link>
                  <div>
                    <div className="flex gap-3 mb-3">
                      <span className="text-xs font-mono text-accent">{project.category}</span>
                      <span className="text-xs font-mono text-gray-500">// {project.industry}</span>
                    </div>
                    <Link to={`/work/${project.id}`}>
                      <h3 className="text-2xl md:text-3xl font-display font-bold group-hover:text-accent transition-colors">{project.name}</h3>
                    </Link>
                    <div className="flex gap-2 flex-wrap mt-4">
                      {project.technologies.slice(0,3).map(tech => (
                         <span key={tech} className="px-3 py-1 bg-surface border border-white/5 rounded-md text-xs text-gray-400">
                           {tech}
                         </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredProjects.length === 0 && (
              <div className="col-span-full py-20 text-center text-gray-500">
                <p>No projects found for this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
