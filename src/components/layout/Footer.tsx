import { Link } from 'react-router-dom';
import { personalInfo } from '../../data';
import { ArrowUpRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white/40 backdrop-blur-md pt-24 pb-12 border-t border-sky-100 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Ready To Build Something <span className="text-accent">Exceptional?</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-md">
              Let's create a premium digital experience that elevates your brand and drives measurable growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${personalInfo.phone.replace('+', '')}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-accent text-white font-bold hover:bg-sky-700 transition-colors flex items-center gap-2 shadow-md shadow-sky-100"
              >
                WhatsApp Me <ArrowUpRight size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-8 py-4 rounded-full bg-white text-slate-800 border border-sky-100 hover:bg-slate-50 transition-colors font-medium shadow-sm"
              >
                Send Email
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-slate-900 font-semibold mb-6 uppercase tracking-wider text-sm">Navigation</h3>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-slate-600 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-600 hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/work" className="text-slate-600 hover:text-accent transition-colors">Work</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-accent transition-colors">Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-semibold mb-6 uppercase tracking-wider text-sm">Socials</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="text-slate-600 hover:text-accent transition-colors flex items-center gap-2 group">
                  <Twitter size={18} className="group-hover:text-[#1DA1F2] transition-colors" /> Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/favour-goldn/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-600 hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  <Linkedin size={18} className="group-hover:text-[#0A66C2] transition-colors" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-accent transition-colors flex items-center gap-2 group">
                  <Instagram size={18} className="group-hover:text-[#E1306C] transition-colors" /> Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/favourgoldn/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-600 hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  <Github size={18} className="group-hover:text-slate-900 transition-colors" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-sky-100/80 gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} PIXELFORGE STUDIO. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
