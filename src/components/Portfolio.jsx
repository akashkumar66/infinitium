import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const works = [
  { title: "Cyber-Motion", category: "Commercial", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800" },
  { title: "Quantum", category: "Product Launch", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800" },
  { title: "Visual Flow", category: "Music Video", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800" },
  { title: "Digital Edge", category: "Brand Story", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-16 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-textDark mb-4 uppercase tracking-tighter leading-none">Selected Works</h2>
            <p className="text-textMuted max-w-xl font-medium text-xs">A glimpse into the visual strategies that have generated millions in revenue for our clients.</p>
          </div>
          <button className="text-darkBg font-black uppercase tracking-widest text-[10px] hover:text-secondary transition-colors flex items-center gap-2 group">
            View All Projects <Play className="w-2.5 h-2.5 fill-current group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-video bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-darkBg/5 group-hover:bg-darkBg/40 transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-accent font-black text-[8px] uppercase tracking-[0.4em] mb-1.5">{work.category}</p>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">{work.title}</h3>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100">
                <Play className="text-white fill-current ml-0.5" size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
