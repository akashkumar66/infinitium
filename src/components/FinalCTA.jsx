import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA = ({ onBookClick }) => {
  return (
    <section className="section-padding relative overflow-hidden bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-[3rem] p-12 md:p-24 border border-gray-100 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-darkBg"></div>

          <h2 className="text-4xl md:text-6xl font-black text-textDark mb-8 leading-[0.95] uppercase tracking-tighter">
            Ready to <span className="text-secondary">Scale</span> <br /> Your Brand?
          </h2>
          <p className="text-xl text-textMuted max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Join 150+ high-growth brands dominating their market with Infinitium. Stop waiting. Start winning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={onBookClick}
              className="btn-primary flex items-center gap-4 group text-xl px-12 py-6"
            >
              Book Your Free Call
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <p className="mt-8 text-textMuted font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Limited Slots Available For Q4
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
