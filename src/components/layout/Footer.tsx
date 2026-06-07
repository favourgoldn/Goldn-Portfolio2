import { Link } from 'react-router-dom';
import { personalInfo } from '../../data';
import { ArrowUpRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready To Build Something <span className="text-accent">Exceptional?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Let's create a premium digital experience that elevates your brand and drives measurable growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${personalInfo.phone.replace('+', '')}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-accent text-primary font-bold hover:bg-amber-400 transition-colors flex items-center gap-2"
              >
                WhatsApp Me <ArrowUpRight size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-8 py-4 rounded-full bg-white/5 text-white font-medium hover:bg-white/10 transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Navigation</h3>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/work" className="text-gray-400 hover:text-white transition-colors">Work</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Socials</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <Twitter size={18} className="group-hover:text-[#1DA1F2] transition-colors" /> Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/favour-goldn/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <Linkedin size={18} className="group-hover:text-[#0A66C2] transition-colors" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <Instagram size={18} className="group-hover:text-[#E1306C] transition-colors" /> Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/favourgoldn/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <Github size={18} className="group-hover:text-white transition-colors" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PIXELFORGE STUDIO. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
