import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const ProblemSolution = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const problems = [
    "Editing takes me forever.",
    "I miss uploads trying to finish videos.",
    "I hate editing. I just want to record.",
    "My videos don't look pro enough.",
    "Captions are a pain to add."
  ];

  const solutions = [
    "Done-for-you edits, always on time.",
    "Fast turnaround",
    "You record. We handle the rest.",
    "Cinematic, clean, and branded.",
    "Burned-in, style-matched captions."
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-textDark mb-6 tracking-tighter uppercase leading-tight">
            Why Most Creators Burn Out
          </h2>
          <p className="text-textMuted max-w-xl mx-auto font-medium">
            A quick side-by-side of the struggles you shouldn't have to deal with and how we make sure you don't.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Creator's Problem */}
          <div
            onMouseEnter={() => setHoveredCard('problem')}
            onMouseLeave={() => setHoveredCard(null)}
            className={`p-10 rounded-[2.5rem] border transition-all duration-500 cursor-default flex flex-col items-center text-center ${hoveredCard === 'problem'
                ? 'bg-darkBg border-darkBg scale-[1.02]'
                : 'bg-gray-50 border-gray-100'
              }`}
          >
            <h3 className={`text-xs font-black uppercase tracking-[0.4em] mb-12 transition-colors ${hoveredCard === 'problem' ? 'text-accent' : 'text-textMuted'
              }`}>Creators Problem</h3>
            <ul className="space-y-6 text-left w-full">
              {problems.map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${hoveredCard === 'problem' ? 'bg-white/10 text-red-400' : 'bg-red-50 text-red-400'
                    }`}>
                    <X size={12} strokeWidth={4} />
                  </div>
                  <span className={`text-sm font-bold transition-colors ${hoveredCard === 'problem' ? 'text-white/80' : 'text-textMuted/80'
                    }`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Solution */}
          <div
            onMouseEnter={() => setHoveredCard('solution')}
            onMouseLeave={() => setHoveredCard(null)}
            className={`p-10 rounded-[2.5rem] border transition-all duration-500 cursor-default flex flex-col items-center text-center ${hoveredCard === 'solution'
                ? 'bg-white border-gray-100 scale-[1.02] shadow-2xl'
                : 'bg-darkBg border-darkBg'
              }`}
          >
            <h3 className={`text-xs font-black uppercase tracking-[0.4em] mb-12 transition-colors ${hoveredCard === 'solution' ? 'text-darkBg' : 'text-accent'
              }`}>Our Solution</h3>
            <ul className="space-y-6 text-left w-full">
              {solutions.map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-colors ${hoveredCard === 'solution' ? 'bg-darkBg text-white' : 'bg-accent text-darkBg'
                    }`}>
                    <Check size={12} strokeWidth={4} />
                  </div>
                  <span className={`text-sm font-bold transition-colors ${hoveredCard === 'solution' ? 'text-darkBg' : 'text-white'
                    }`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
