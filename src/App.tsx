/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { MessageCircle, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { personalInfo } from "./data";

export default function App() {
  const [showCallMenu, setShowCallMenu] = useState(false);
  const [showWhatsappMenu, setShowWhatsappMenu] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-primary text-foreground selection:bg-accent selection:text-primary overflow-x-hidden">
      <ScrollRestoration />
      <Navbar />
      <main className="flex-grow flex flex-col pt-20">
        <Outlet />
      </main>
      <Footer />
      
      {/* Persistent Floating CTAs */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
        {/* Call Menu Options */}
        <AnimatePresence>
          {showCallMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="bg-surface border border-white/10 p-4 rounded-2xl shadow-xl flex flex-col gap-2.5 min-w-[220px]"
            >
              <div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest flex justify-between items-center mb-1">
                <span>Select Phone line</span>
                <button onClick={() => setShowCallMenu(false)} className="hover:text-white transition-colors">
                  <X size={12} />
                </button>
              </div>
              <a
                href={`tel:${personalInfo.phone}`}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-sm transition-colors flex items-center justify-between text-white"
                onClick={() => setShowCallMenu(false)}
              >
                <div className="flex flex-col text-left">
                  <span className="font-medium text-[10px] text-gray-400">Line 1</span>
                  <span className="font-mono text-xs">{personalInfo.formattedPhone}</span>
                </div>
                <Phone size={14} className="text-accent" />
              </a>
              <a
                href={`tel:${personalInfo.phone2}`}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-sm transition-colors flex items-center justify-between text-white"
                onClick={() => setShowCallMenu(false)}
              >
                <div className="flex flex-col text-left">
                  <span className="font-medium text-[10px] text-gray-400">Line 2</span>
                  <span className="font-mono text-xs">{personalInfo.formattedPhone2}</span>
                </div>
                <Phone size={14} className="text-accent" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Menu Options */}
        <AnimatePresence>
          {showWhatsappMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="bg-surface border border-white/10 p-4 rounded-2xl shadow-xl flex flex-col gap-2.5 min-w-[220px]"
            >
              <div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest flex justify-between items-center mb-1">
                <span>Chat Line</span>
                <button onClick={() => setShowWhatsappMenu(false)} className="hover:text-white transition-colors">
                  <X size={12} />
                </button>
              </div>
              <a
                href={`https://wa.me/${personalInfo.phone.replace('+', '')}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-accent hover:bg-amber-400 text-primary transition-colors flex items-center justify-between font-bold"
                onClick={() => setShowWhatsappMenu(false)}
              >
                <div className="flex flex-col text-left">
                  <span className="font-bold text-[9px] uppercase opacity-80">Line 1</span>
                  <span className="font-mono text-xs">{personalInfo.formattedPhone}</span>
                </div>
                <MessageCircle size={14} />
              </a>
              <a
                href={`https://wa.me/${personalInfo.phone2.replace('+', '')}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-accent hover:bg-amber-400 text-primary transition-colors flex items-center justify-between font-bold"
                onClick={() => setShowWhatsappMenu(false)}
              >
                <div className="flex flex-col text-left">
                  <span className="font-bold text-[9px] uppercase opacity-80">Line 2</span>
                  <span className="font-mono text-xs">{personalInfo.formattedPhone2}</span>
                </div>
                <MessageCircle size={14} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggles */}
        <div className="flex flex-col gap-4">
          <button
            onClick={() => {
              setShowCallMenu(!showCallMenu);
              setShowWhatsappMenu(false);
            }}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg border ${
              showCallMenu ? 'bg-accent border-accent text-primary' : 'bg-surface border-white/10 text-white hover:bg-white/5'
            }`}
            aria-label="Call PixelForge Studio"
          >
            {showCallMenu ? <X size={20} /> : <Phone size={20} />}
          </button>
          
          <button
            onClick={() => {
              setShowWhatsappMenu(!showWhatsappMenu);
              setShowCallMenu(false);
            }}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-xl ${
              showWhatsappMenu 
                ? 'bg-surface border border-white/10 text-white' 
                : 'bg-accent text-primary hover:bg-amber-400 shadow-accent/20'
            }`}
            aria-label="Chat on WhatsApp"
          >
            {showWhatsappMenu ? <X size={24} /> : <MessageCircle size={29} />}
          </button>
        </div>
      </div>
    </div>
  );
}

