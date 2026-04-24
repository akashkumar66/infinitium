import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO, TechFlow",
    content: "Infinitium transformed our brand's visual identity. Their videos didn't just look amazing—they doubled our conversion rate in 3 months.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Founder, Zenith Media",
    content: "The speed and quality are unmatched. We record, they handle the rest, and the result is always cinematic. Truly a game-changer.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop"
  },
  {
    name: "Marcus Thorne",
    role: "Marketing Director, Nexus",
    content: "Finally an agency that understands the data behind the creative. Every frame is optimized for engagement. High ROI guaranteed.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50/30 shadow-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-4">Wall of Love</p>
          <h2 className="text-4xl md:text-6xl font-black text-textDark mb-4 uppercase tracking-tighter leading-none">Voices of <span className="text-secondary">Success.</span></h2>
          <p className="text-textMuted font-medium max-w-xl mx-auto text-sm">Don't just take our word for it. Hear from the brands we've helped dominate their market.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative group hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-gray-100 group-hover:text-secondary/10 transition-colors">
                <Quote size={40} />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-textDark font-medium leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all" />
                <div>
                  <h4 className="text-sm font-black text-textDark uppercase tracking-tight">{testimonial.name}</h4>
                  <p className="text-[10px] text-textMuted font-bold uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
