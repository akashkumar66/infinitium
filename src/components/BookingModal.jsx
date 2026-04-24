import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  // Auto-dismiss success message
  useEffect(() => {
    let timeout;
    if (isSubmitted && isOpen) {
      timeout = setTimeout(() => {
        onClose();
        // Reset form after closing
        setTimeout(() => setIsSubmitted(false), 500);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [isSubmitted, isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-darkBg/60 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-textMuted hover:text-darkBg transition-colors z-10"
          >
            <X size={20} />
          </button>

          <div className="p-6 md:p-10 overflow-y-auto">
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-black text-textDark uppercase tracking-tighter mb-1 leading-tight">Book Your Call</h2>
                <p className="text-sm text-textMuted font-medium mb-6">Let's scale your brand with high-conversion video assets.</p>
                
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-black text-textMuted uppercase tracking-widest mb-1.5 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-secondary transition-colors font-medium text-sm"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-textMuted uppercase tracking-widest mb-1.5 ml-1">Work Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@business.com"
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-secondary transition-colors font-medium text-sm"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-textMuted uppercase tracking-widest mb-1.5 ml-1">Business Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Agency Inc."
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-secondary transition-colors font-medium text-sm"
                      onChange={(e) => setFormData({...formData, business: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-textMuted uppercase tracking-widest mb-1.5 ml-1">Message (Optional)</label>
                    <textarea 
                      placeholder="Tell us about your project..."
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-secondary transition-colors font-medium h-24 resize-none text-sm"
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-base mt-2">
                    Send Request
                  </button>
                </form>
              </>
            ) : (
              <div className="py-6 text-center">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <CheckCircle size={32} strokeWidth={3} />
                </div>
                <h2 className="text-2xl font-black text-textDark uppercase tracking-tighter mb-3">Received!</h2>
                <p className="text-sm text-textMuted font-medium mb-8 max-w-xs mx-auto">
                  Thank you, {formData.name}. Our expert will reach out to {formData.email} within 24 hours.
                </p>
                <div className="text-[10px] text-textMuted font-bold uppercase tracking-widest animate-pulse">
                  Closing in 3 seconds...
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
