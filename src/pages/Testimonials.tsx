import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <div className="flex flex-col pt-32 min-h-[80vh] items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-slate-900">
          Client <span className="text-accent">Stories.</span>
        </h1>
        <p className="text-slate-600 text-xl font-light mb-12">
          Social proof hub. This page is architected to scale into a dynamic feed of written and video testimonials as the portfolio expands.
        </p>
        <div className="p-8 md:p-12 border border-sky-100 rounded-3xl bg-white/70 backdrop-blur-md shadow-lg shadow-sky-100/50 relative">
           <div className="absolute top-0 right-10 -translate-y-1/2 text-6xl text-accent font-display leading-none">"</div>
           <p className="text-xl md:text-2xl font-light italic text-slate-700 leading-relaxed mb-8">
             "PixelForge Studio completely transformed our digital presence. The attention to detail and conversion strategy resulted in a 40% increase in digital bookings."
           </p>
           <div className="flex items-center justify-center gap-4">
             <div className="w-12 h-12 rounded-full bg-sky-50 border border-sky-100 shadow-sm"></div>
             <div className="text-left">
               <div className="font-bold text-slate-900">Operations Director</div>
               <div className="text-slate-500 text-sm">Velvet Bloom Spa</div>
             </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
