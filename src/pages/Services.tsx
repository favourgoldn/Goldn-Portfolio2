import { motion } from 'motion/react';
import { services } from '../data';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: "Starter",
    description: "Perfect for new businesses needing a professional digital presence instantly.",
    features: ["Custom Landing Page", "Mobile Optimization", "Basic SEO Setup", "Contact Form Integration", "1 Week Delivery"],
    primary: false
  },
  {
    name: "Growth",
    description: "Comprehensive website designed to generate leads and scale your brand.",
    features: ["Up to 5 Pages", "CMS Integration", "Advanced Animations", "Lead Magnet Setup", "Analytics Dashboard", "3 Weeks Delivery"],
    primary: true
  },
  {
    name: "Premium",
    description: "Fully custom digital experience with zero limitations.",
    features: ["Unlimited Pages", "Custom Web App Logic", "Complete Branding Kit", "E-commerce/Payments", "Priority Support", "Dedicated Strategist"],
    primary: false
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-24 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8"
          >
            Digital <span className="text-accent">Services.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            From stunning web design to complex creative development, I offer end-to-end digital solutions tailored for growth.
          </motion.p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="p-10 rounded-3xl border border-white/5 bg-primary overflow-hidden relative group hover:border-accent transition-colors duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 group-hover:text-accent group-hover:scale-110 transition-all duration-500 text-gray-600">
                <ArrowUpRight size={48} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 relative z-10">{service.title}</h3>
              <p className="text-gray-400 mb-8 relative z-10">{service.description}</p>
              <ul className="flex flex-col gap-4 relative z-10">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                    <CheckCircle2 size={18} className="text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Engagement Models</h2>
            <p className="text-gray-400 text-xl">Transparent pricing structures designed for different stages of business growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {packages.map((pkg, i) => (
              <div 
                key={i} 
                className={`p-10 rounded-3xl border transition-all ${
                  pkg.primary 
                    ? 'border-accent bg-surface shadow-2xl shadow-accent/10 md:scale-105 z-10 relative py-14' 
                    : 'border-white/10 bg-primary hover:border-white/30'
                }`}
              >
                <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-400 mb-8 min-h-[48px]">{pkg.description}</p>
                <div className="h-px w-full bg-white/10 mb-8" />
                <ul className="flex flex-col gap-5 mb-10">
                  {pkg.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle2 size={18} className={pkg.primary ? "text-accent" : "text-gray-500"} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full py-4 rounded-full text-center font-bold transition-colors ${
                    pkg.primary
                      ? 'bg-accent text-primary hover:bg-amber-400'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  Inquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-3xl mx-auto">
           <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">Frequently Asked</h2>
           <div className="flex flex-col gap-6">
             {[
               { q: "How long does a typical project take?", a: "Depending on the scope, a standard landing page takes 1-2 weeks, while a full custom web application or brand experience can take 4-8 weeks." },
               { q: "Do you offer post-launch support?", a: "Yes, I offer ongoing maintenance and optimization retainers to ensure your platform continues to perform at its peak." },
               { q: "What is your pricing structure?", a: "Projects are typically billed at a flat rate based on the value and scope. We require a 50% deposit to secure your spot in the schedule." },
               { q: "Can I just get design without development?", a: "Absolutely. I often collaborate with in-house development teams, providing them with high-fidelity UI/UX designs and design systems to implement." }
             ].map((faq, i) => (
                <div key={i} className="p-8 rounded-2xl bg-primary border border-white/5">
                  <h3 className="text-xl font-bold mb-4">{faq.q}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
