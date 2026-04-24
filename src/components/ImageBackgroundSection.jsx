import React from 'react';
import { motion } from 'framer-motion';

const ImageBackgroundSection = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop" 
          alt="Video Agency Workspace" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-darkBg/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-tight mb-8">
            Dominate Every Platform With <br />
            <span className="text-accent underline decoration-4 underline-offset-8">Data-Backed</span> Creativity.
          </h2>
          <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto">
            We don't just make videos; we engineer visual psychological triggers that drive massive user action.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageBackgroundSection;
