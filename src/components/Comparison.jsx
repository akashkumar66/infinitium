import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, ShieldCheck, Sparkles } from 'lucide-react';

const Comparison = () => {
  return (
    <section className="py-16 bg-white relative shadow-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-4">The Edge</p>
          <h2 className="text-3xl md:text-5xl font-black text-textDark mb-4 uppercase tracking-tighter leading-none">Why We <span className="text-secondary">Win.</span></h2>
          <p className="text-textMuted font-medium max-w-xl mx-auto text-[10px] uppercase tracking-widest">Beyond Editing. Strategic Growth Engineering.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-auto md:grid-rows-2 gap-4 h-auto md:h-[450px]">
          {/* Big Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" md:col-span-3 md:row-span-2 bg-gray-50 rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group hover:bg-darkBg transition-all duration-700"
          >
            <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <TrendingUp size={100} />
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 text-darkBg shadow-sm">
                <Target size={20} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-textDark uppercase mb-2 group-hover:text-white transition-colors md:mt-6 md:mb-8">Strategic Depth</h3>
              <p className="text-sm text-textMuted font-medium leading-relaxed group-hover:text-white/60 transition-colors max-w-sm">
                We analyze your audience's psychological triggers to engineer content that doesn't just get views—it gets sales.
              </p>
            </div>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 md:row-span-1 bg-secondary rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute -right-2 -top-2 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Zap size={120} />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-black text-white uppercase mb-1 flex items-center gap-3">
                <Sparkles size={20} />
                Rapid Execution
              </h3>
              <p className="text-white/80 font-medium text-xs leading-relaxed max-w-xs">
                Ultra-premium assets delivered in record time using our AI-enhanced production pipeline.
              </p>
            </div>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 bg-darkBg rounded-3xl p-4 flex flex-col items-center justify-center text-center group"
          >
            <ShieldCheck size={32} className="text-accent mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-[8px] font-black text-white uppercase tracking-widest">Guaranteed</span>
            <span className="text-lg font-black text-white uppercase">Quality</span>
          </motion.div>

          {/* Small Card 3 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 md:row-span-1 bg-gray-50 rounded-3xl p-6 flex flex-col justify-center border border-gray-100 group hover:border-secondary transition-all"
          >
            <div className="text-3xl font-black text-secondary mb-1">98%</div>
            <p className="text-textDark font-bold uppercase tracking-widest text-[8px]">Client Satisfaction Rate</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
