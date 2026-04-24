import React from 'react';
import { motion } from 'framer-motion';
import { Video, Zap, Share2, Cpu } from 'lucide-react';

const services = [
  {
    title: "Video Editing",
    desc: "Narrative-driven post-production for high-stakes projects.",
    icon: <Video className="w-8 h-8" />
  },
  {
    title: "Ad Creatives",
    desc: "Direct response videos engineered to drive massive sales.",
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "Social Growth",
    desc: "Short-form content strategies to dominate TikTok & Reels.",
    icon: <Share2 className="w-8 h-8" />
  },
  {
    title: "AI Production",
    desc: "Leveraging cutting-edge AI for hyper-efficient creation.",
    icon: <Cpu className="w-8 h-8" />
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-textDark mb-6 uppercase tracking-tight">Expertise That Scales</h2>
          <p className="text-textMuted max-w-2xl mx-auto font-medium">We don't just edit. We architect visual experiences that drive measurable business growth.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-darkBg transition-all cursor-default"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-darkBg">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-textDark mb-4 uppercase tracking-wide leading-tight">{service.title}</h3>
              <p className="text-textMuted leading-relaxed font-medium text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
