import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xl font-black tracking-tighter text-textDark uppercase">INFINITIUM</span>
            </div>
            <p className="text-textMuted max-w-sm leading-relaxed font-medium text-sm">
              Architecting the future of visual storytelling. We combine data-driven creative strategies with ultra-premium aesthetics to scale brands globally.
            </p>
          </div>

          <div>
            <h4 className="text-textDark font-black mb-8 uppercase tracking-[0.2em] text-[10px]">Navigation</h4>
            <ul className="space-y-4 text-textMuted font-black text-xs uppercase tracking-widest">
              <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-secondary transition-colors">Case Studies</a></li>
              <li><a href="#process" className="hover:text-secondary transition-colors">Workflow</a></li>
              <li><a href="#results" className="hover:text-secondary transition-colors">ROI Stats</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-textDark font-black mb-8 uppercase tracking-[0.2em] text-[10px]">Connect</h4>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-textMuted hover:bg-darkBg hover:text-white transition-all shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-textMuted text-[10px] font-black uppercase tracking-[0.3em]">
          <p>&copy; 2026 INFINITIUM CREATIVE AGENCY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-textDark transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-textDark transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
