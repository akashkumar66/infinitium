import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Results', href: '#results' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <span className="text-xl font-black tracking-tighter text-textDark uppercase">INFINITIUM</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs font-black text-textMuted hover:text-textDark transition-colors uppercase tracking-widest"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            onClick={onBookClick}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2.5 bg-darkBg text-white font-black rounded-full text-xs hover:scale-105 transition-all uppercase tracking-widest shadow-lg shadow-blue-900/10"
          >
            Book a Call
          </motion.button>
        </div>

        {/* Mobile View: Just the CTA */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={onBookClick}
            className="px-5 py-2 bg-darkBg text-white font-black rounded-full text-[10px] uppercase tracking-widest shadow-lg"
          >
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
