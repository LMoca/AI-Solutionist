import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, MessageSquare, Send } from 'lucide-react';
import { fadeInUpVariant } from '../utils/animations';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const cleaned = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    const match = cleaned.substring(0, 10).match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    
    if (match) {
      let formatted = '';
      if (match[1]) {
        formatted += `(${match[1]}`;
        if (match[1].length === 3) {
          formatted += ') ';
        }
      }
      if (match[2]) {
        formatted += match[2];
        if (match[2].length === 3) {
          formatted += '-';
        }
      }
      if (match[3]) {
        formatted += match[3];
      }
      return formatted;
    }
    
    return value;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send data to webhook
      const webhookData = {
        name: formData.name,
        email: formData.email,
        number: formData.phone,
        message: formData.message,
        type: 'contact',
      };

      await fetch('https://hook.us2.make.com/ybxo01mg5kj09rmkyfjmr9a3kqc0zs52', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData)
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success message to user
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData(prev => ({ ...prev, [name]: formattedPhone }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-cyan-400 mb-4">Message Sent!</h3>
        <p className="text-cyan-200">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeInUpVariant}
      className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-8"
    >
      <h3 className="text-2xl font-bold text-cyan-400 mb-6">Get In Touch</h3>
      <p className="text-cyan-200 mb-6">
        Ready to transform your business with AI? Let's discuss your project.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-cyan-300 mb-2">
            Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
              placeholder="Your full name"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-2">
            Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-cyan-300 mb-2">
            Phone Number <span className="text-gray-400">(Optional)</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
              placeholder="(123) 456-7890"
              maxLength={14}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-cyan-300 mb-2">
            Message *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors resize-none"
              placeholder="Tell us about your project and how we can help..."
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              Send Message
            </>
          )}
        </button>
      </form>

      <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-200 text-sm">(317) 712-0452</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-200 text-sm">lmaisolutionist@gmail.com</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}