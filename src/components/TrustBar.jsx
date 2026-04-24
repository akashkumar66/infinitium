import React from 'react';
import { motion } from 'framer-motion';

// Import local logos
import montraLogo from '../montra_dark_logo.png';
import rockmanLogo from '../rockman.png';
import oxxyLogo from '../oxxyL.png';
import wishtuneLogo from '../wishtuneL.png';

const partners = [
  { name: "MONTRA", logo: montraLogo },
  { name: "ROCKMAN", logo: rockmanLogo },
  { name: "OXXY", logo: oxxyLogo },
  { name: "WISHTUNE", logo: wishtuneLogo },
];

const TrustBar = () => {
  return (
    <section className="py-16 bg-gray-50/50 border-y border-gray-100 overflow-hidden shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <p className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-3">Social Proof</p>
          <h2 className="text-3xl md:text-5xl font-black text-textDark tracking-tighter uppercase leading-none">
            Trusted by Global <br />
            <span className="text-secondary">Storytellers.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group h-24 shadow-sm"
            >
              <img src={partner.logo} alt={partner.name} className="max-h-12 w-auto object-contain transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
