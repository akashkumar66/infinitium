import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is your typical turnaround time?",
    answer: "For standard edits, we deliver within 48-72 hours. For larger campaign assets, we provide a customized timeline based on the project depth, typically ranging from 5-10 business days."
  },
  {
    question: "How do you handle revisions?",
    answer: "We offer unlimited revisions within the first 14 days of delivery. Our goal is 100% satisfaction, and we'll work with you until the vision is perfectly realized."
  },
  {
    question: "Do you offer sound design and color grading?",
    answer: "Yes, every video we produce includes professional sound design, royalty-free music licensing, and premium color grading to ensure a high-end cinematic look."
  },
  {
    question: "What platforms do you specialize in?",
    answer: "We specialize in high-conversion assets for Meta (FB/IG), TikTok, YouTube, and LinkedIn, as well as premium website hero backgrounds and commercial spots."
  }
];

const FAQItem = ({ faq, isOpen, toggle }) => {
  return (
    <div className={`border-b border-gray-100 transition-all duration-300 ${isOpen ? 'bg-gray-50/50 rounded-2xl' : ''}`}>
      <button 
        onClick={toggle}
        className="w-full py-6 px-8 flex justify-between items-center text-left group"
      >
        <span className="text-lg font-black text-textDark uppercase tracking-tight group-hover:text-secondary transition-colors">
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-darkBg text-white' : 'bg-gray-100 text-textDark group-hover:bg-gray-200'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 text-textMuted font-medium leading-relaxed max-w-3xl">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-4">Support</p>
          <h2 className="text-4xl md:text-6xl font-black text-textDark mb-4 uppercase tracking-tighter leading-none">Frequently Asked <span className="text-secondary">Questions.</span></h2>
          <p className="text-textMuted font-medium max-w-xl mx-auto text-sm">Everything you need to know about partnering with Infinitium.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem 
              key={i} 
              faq={faq} 
              isOpen={openIndex === i} 
              toggle={() => setOpenIndex(openIndex === i ? null : i)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
