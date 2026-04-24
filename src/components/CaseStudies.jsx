import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target } from 'lucide-react';

const stats = [
  { label: "Revenue Generated", value: "$12.5M+", icon: <TrendingUp className="text-secondary" /> },
  { label: "Reach Generated", value: "85M+", icon: <Users className="text-darkBg" /> },
  { label: "Brands Scaled", value: "150+", icon: <Target className="text-accent" /> },
];

const CaseStudies = () => {
  return (
    <section id="results" className="section-padding bg-gray-50/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs font-black text-secondary uppercase tracking-[0.4em] mb-4">Case Studies</p>
            <h2 className="text-4xl md:text-6xl font-black text-textDark mb-8 leading-[0.95] uppercase tracking-tighter">
              Proven Results <br />
              Measured In ROI
            </h2>
            <p className="text-xl text-textMuted mb-12 font-medium leading-relaxed">
              We focus on the metrics that matter. More views, more clicks, and most importantly, more revenue for your business.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center"
                >
                  <div className="w-10 h-10 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-textDark mb-1 tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] text-textMuted font-black uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-2xl">
              <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-8">
                <div>
                  <h3 className="text-2xl font-black text-textDark uppercase tracking-tight">Nexus Labs</h3>
                  <p className="text-textMuted font-bold text-xs uppercase tracking-widest mt-1">Q4 Ad Campaign</p>
                </div>
                <div className="px-5 py-2 bg-darkBg text-white rounded-full text-xs font-black uppercase tracking-widest">3.2X ROI</div>
              </div>
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-textDark font-black text-sm uppercase tracking-widest">CTR Improvement</span>
                    <span className="text-secondary font-black">+185%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-secondary"
                    ></motion.div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-textDark font-black text-sm uppercase tracking-widest">Engagement</span>
                    <span className="text-darkBg font-black">+410%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-darkBg"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
