import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  { step: "01", title: "Strategy", desc: "We deep-dive into your brand's psychology and audience data." },
  { step: "02", title: "Creation", desc: "Ultra-premium production phase led by industry-leading creators." },
  { step: "03", title: "Optimization", desc: "Data-driven tweaks to ensure maximum conversion potential." },
  { step: "04", title: "Scaling", desc: "Rolling out content across all channels for total market domination." },
];

const Process = () => {
  return (
    <section id="process" className="py-20 relative overflow-hidden bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-4">Workflow</p>
          <h2 className="text-4xl md:text-6xl font-black text-textDark mb-4 uppercase tracking-tighter leading-none">The Process</h2>
          <p className="text-textMuted font-medium max-w-2xl text-sm">From concept to conversion, our workflow is engineered for speed and impact.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="w-20 h-20 bg-white border border-gray-100 rounded-3xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-darkBg group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                <span className="text-2xl font-black transition-colors">{step.step}</span>
              </div>
              <h3 className="text-xl font-black text-textDark mb-3 uppercase tracking-tight">{step.title}</h3>
              <p className="text-textMuted leading-relaxed font-medium text-xs max-w-[200px]">{step.desc}</p>
              
              {/* Arrow for next step (except last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-10 -right-4 translate-x-1/2 z-10 text-gray-200 group-hover:text-secondary transition-colors duration-500">
                  <ArrowRight size={24} strokeWidth={3} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
