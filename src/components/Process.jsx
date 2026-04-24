import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { step: "01", title: "Strategy", desc: "We deep-dive into your brand's psychology and audience data." },
  { step: "02", title: "Creation", desc: "Ultra-premium production phase led by industry-leading creators." },
  { step: "03", title: "Optimization", desc: "Data-driven tweaks to ensure maximum conversion potential." },
  { step: "04", title: "Scaling", desc: "Rolling out content across all channels for total market domination." },
];

const Process = () => {
  return (
    <section id="process" className="section-padding relative overflow-hidden bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="text-xs font-black text-secondary uppercase tracking-[0.4em] mb-4">Workflow</p>
          <h2 className="text-4xl md:text-7xl font-black text-textDark mb-6 uppercase tracking-tighter">The Process</h2>
          <p className="text-textMuted font-medium max-w-2xl">From concept to conversion, our workflow is engineered for speed and impact.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gray-100 -z-10"></div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="w-24 h-24 bg-white border border-gray-100 rounded-[2rem] flex items-center justify-center mb-8 shadow-sm group-hover:bg-darkBg group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                <span className="text-3xl font-black transition-colors">{step.step}</span>
              </div>
              <h3 className="text-2xl font-black text-textDark mb-4 uppercase tracking-tight">{step.title}</h3>
              <p className="text-textMuted leading-relaxed font-medium text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
