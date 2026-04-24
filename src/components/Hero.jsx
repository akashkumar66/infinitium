import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const Hero = ({ onBookClick }) => {
  return (
    <section className="relative h-[calc(100vh)] flex items-center justify-center overflow-hidden bg-white shadow-lg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop"
          alt="Creative Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1 rounded-full bg-darkBg/5 text-darkBg text-[10px] font-black tracking-[0.4em] uppercase mb-6 inline-block">
            Next-Gen Video Agency
          </span>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-textDark mb-6 leading-[1] max-w-4xl mx-auto uppercase">
            We Create Videos That <span className="text-secondary">Sell</span>, Scale & Dominate
          </h1>
          <p className="text-base md:text-lg text-textMuted max-w-xl mx-auto mb-10 leading-relaxed font-medium">
            Stop losing leads with generic content. We engineer high-conversion video assets that crush your competition and multiply your ROI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBookClick}
              className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center py-3 text-sm"
            >
              Book a Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-3 text-textDark font-bold hover:text-secondary transition-colors group py-3">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-secondary transition-colors">
                <Play className="w-3 h-3 fill-current ml-1" />
              </div>
              <span className="text-sm uppercase tracking-widest">Watch Showreel</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
