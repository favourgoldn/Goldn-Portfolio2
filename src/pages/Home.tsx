import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects, services, processSteps } from '../data';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* SECTION 1 — CINEMATIC HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-6 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface via-primary to-primary opacity-60 z-0" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto w-full relative z-10 pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-8 max-w-5xl"
          >
            Designing Premium <br className="hidden md:block"/> Digital Experiences <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">That Grow Brands.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 font-light"
          >
            Web Designer, Creative Developer, Graphic Designer, and Digital Entrepreneur helping businesses launch memorable digital experiences that convert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 mb-20"
          >
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-white text-primary font-bold hover:bg-gray-200 transition-colors"
            >
              Start a Project
            </Link>
            <a
              href="https://wa.me/2348126385458"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap gap-x-12 gap-y-6 text-sm font-medium tracking-wide uppercase text-gray-500 border-t border-white/10 pt-8 mt-12"
          >
            <span className="flex items-center gap-2">✦ Modern Websites</span>
            <span className="flex items-center gap-2">✦ Conversion Focused</span>
            <span className="flex items-center gap-2">✦ Mobile Optimized</span>
            <span className="flex items-center gap-2">✦ Fast Delivery</span>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — CREDIBILITY BAR */}
      <section className="border-y border-white/10 bg-surface/50 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { metric: "50+", label: "Projects Completed" },
            { metric: "12", label: "Industries Served" },
            { metric: "100%", label: "Client Satisfaction" },
            { metric: "24/7", label: "Fast Delivery" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-display font-bold text-white">{stat.metric}</span>
              <span className="text-gray-400 text-sm font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — FEATURED WORK */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Selected Work</h2>
              <p className="text-gray-400 text-xl max-w-xl">A showcase of recent premium digital experiences built to elevate brands and drive results.</p>
            </div>
            <Link to="/work" className="group flex items-center gap-2 text-white font-medium pb-2 border-b border-white/30 hover:border-accent transition-colors">
              View All Projects <ArrowUpRight size={20} className="group-hover:text-accent transition-colors group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
            </Link>
          </div>

          <div className="flex flex-col gap-32">
            {projects.slice(0, 3).map((project, index) => (
              <div key={project.id} className="group flex flex-col md:grid md:grid-cols-12 gap-12 items-center">
                <div className={`col-span-7 overflow-hidden rounded-2xl ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                  <Link to={`/work/${project.id}`} className="block relative aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-surface">
                    <img 
                      src={project.thumbnail} 
                      alt={project.name} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                  </Link>
                </div>
                <div className="col-span-5 flex flex-col gap-6">
                  <div className="flex gap-3 mb-2">
                    <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider border border-white/20 rounded-full text-gray-300">{project.category}</span>
                    <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider border border-white/20 rounded-full text-gray-300">{project.industry}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold">{project.name}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{project.shortOverview}</p>
                  
                  <ul className="flex flex-col gap-2 mt-2">
                    {project.keyResults.map(result => (
                      <li key={result} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {result}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <Link
                      to={`/work/${project.id}`}
                      className="px-6 py-3 rounded-full bg-white text-primary font-medium hover:bg-gray-200 transition-colors"
                    >
                      View Case Study
                    </Link>
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors flex items-center gap-2"
                    >
                      Live Demo <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT WE DO */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">What WE Do</h2>
            <p className="text-gray-400 text-xl max-w-xl">Comprehensive digital services designed to turn your vision into a high-performing reality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="p-8 md:p-12 rounded-3xl border border-white/5 bg-primary/50 hover:bg-primary transition-colors duration-500 flex flex-col items-start group">
                <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-accent mb-8 font-display font-bold text-xl">
                  {`0${i + 1}`}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 flex-grow">{service.description}</p>
                <ul className="flex flex-col gap-3">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-1 h-1 bg-accent/50 rounded-full group-hover:bg-accent transition-colors" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PROCESS */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The Process</h2>
            <p className="text-gray-400 text-xl">A proven methodology for delivering exceptional digital products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {processSteps.map((step) => (
              <div key={step.step} className="flex flex-col gap-4 border-t-2 border-white/10 pt-6 group hover:border-accent transition-colors duration-300">
                <span className="text-accent font-mono text-sm tracking-widest">{step.step} //</span>
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-accent transition-colors">{step.name}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
