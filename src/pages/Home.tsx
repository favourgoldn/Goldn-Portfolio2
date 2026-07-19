import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { services, processSteps, personalInfo } from '../data';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* SECTION 1 — CINEMATIC HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-6 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.12),transparent_70%)] z-0" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto w-full relative z-10 pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-8 max-w-5xl text-slate-900"
          >
            Designing Premium <br className="hidden md:block"/> Digital Experiences <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-800">That Grow Brands.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mb-12 font-light"
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
              className="px-8 py-4 rounded-full bg-accent text-white font-bold hover:bg-sky-700 shadow-lg shadow-sky-100/80 transition-colors"
            >
              Start a Project
            </Link>
            <a
              href={`https://wa.me/${personalInfo.phone.replace('+', '')}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-sky-200 text-slate-800 font-medium hover:bg-sky-50/50 bg-white/40 backdrop-blur-sm transition-colors"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap gap-x-12 gap-y-6 text-sm font-medium tracking-wide uppercase text-slate-500 border-t border-sky-100 pt-8 mt-12"
          >
            <span className="flex items-center gap-2 text-slate-600 font-semibold">✦ Modern Websites</span>
            <span className="flex items-center gap-2 text-slate-600 font-semibold">✦ Conversion Focused</span>
            <span className="flex items-center gap-2 text-slate-600 font-semibold">✦ Mobile Optimized</span>
            <span className="flex items-center gap-2 text-slate-600 font-semibold">✦ Fast Delivery</span>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — CREDIBILITY BAR */}
      <section className="border-y border-sky-100 bg-white/50 backdrop-blur-md py-12 px-6 md:px-12 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { metric: "50+", label: "Projects Completed" },
            { metric: "12", label: "Industries Served" },
            { metric: "100%", label: "Client Satisfaction" },
            { metric: "24/7", label: "Fast Delivery" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-display font-bold text-slate-900">{stat.metric}</span>
              <span className="text-slate-600 text-sm font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — WHAT WE DO */}
      <section className="py-32 px-6 md:px-12 bg-white/40 backdrop-blur-md border-y border-sky-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">What WE Do</h2>
            <p className="text-slate-600 text-xl max-w-xl">Comprehensive digital services designed to turn your vision into a high-performing reality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="p-8 md:p-12 rounded-3xl border border-sky-100 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 flex flex-col items-start group">
                <div className="w-12 h-12 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-accent mb-8 font-display font-bold text-xl">
                  {`0${i + 1}`}
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{service.description}</p>
                <ul className="flex flex-col gap-3">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 bg-accent/50 rounded-full group-hover:bg-accent transition-colors" />
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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">The Process</h2>
            <p className="text-slate-600 text-xl">A proven methodology for delivering exceptional digital products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {processSteps.map((step) => (
              <div key={step.step} className="flex flex-col gap-4 border-t-2 border-sky-200 pt-6 group hover:border-accent transition-colors duration-300">
                <span className="text-accent font-mono text-sm tracking-widest font-bold">{step.step} //</span>
                <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-accent transition-colors">{step.name}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
