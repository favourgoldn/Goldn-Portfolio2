/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { MessageCircle, Phone } from "lucide-react";
import { personalInfo } from "./data";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-foreground selection:bg-accent selection:text-primary overflow-x-hidden">
      <ScrollRestoration />
      <Navbar />
      <main className="flex-grow flex flex-col pt-20">
        <Outlet />
      </main>
      <Footer />
      
      {/* Persistent Floating CTAs */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a
          href={`tel:${personalInfo.phone}`}
          className="w-12 h-12 rounded-full bg-surface border border-white/10 text-white flex items-center justify-center hover:bg-white/5 transition-colors shadow-lg"
          aria-label="Call Goldn"
        >
          <Phone size={20} />
        </a>
        <a
          href={`https://wa.me/${personalInfo.phone.replace('+', '')}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-accent text-primary flex items-center justify-center hover:bg-amber-400 transition-colors shadow-xl shadow-accent/20"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
}

