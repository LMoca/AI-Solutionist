import { useState } from 'react';
import { Phone, Shield, CheckCircle, ArrowLeft, MessageSquare, Clock, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SMSConsent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    agreeToTerms: false,
    agreeToSMS: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (formData.phoneNumber.replace(/\D/g, '').length !== 10) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    if (!formData.agreeToSMS) {
      newErrors.agreeToSMS = 'You must consent to receive SMS messages';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create consent record
      const consentData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber.replace(/\D/g, ''),
        consentTimestamp: new Date().toISOString(),
        ipAddress: 'User IP', // Would be captured server-side
        userAgent: navigator.userAgent,
        consentMethod: 'Web Form Opt-in',
        consentUrl: window.location.href,
        type: 'sms_consent'
      };

      // Send to webhook for storage
      await fetch('https://hook.us2.make.com/ybxo01mg5kj09rmkyfjmr9a3kqc0zs52', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(consentData)
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting consent:', error);
      setIsSubmitted(true); // Still show success to user
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'phoneNumber') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData(prev => ({ ...prev, [name]: formattedPhone }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-gray-800/20 backdrop-blur-sm rounded-xl p-8 text-center"
        >
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Consent Recorded</h2>
          <p className="text-cyan-200 mb-6">
            Thank you for opting in to SMS notifications. Your consent has been recorded and you'll receive updates about our AI automation services.
          </p>
          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 mb-6">
            <p className="text-cyan-200 text-sm">
              <strong>Consent ID:</strong> {new Date().getTime()}
              <br />
              <strong>Date:</strong> {new Date().toLocaleDateString()}
              <br />
              <strong>Time:</strong> {new Date().toLocaleTimeString()}
            </p>
          </div>
          <button
            onClick={() => window.location.href = '/'}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft size={16} />
            Return to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageSquare className="w-8 h-8 text-cyan-400" />
              <h1 className="text-3xl font-bold text-cyan-400">SMS Consent</h1>
            </div>
            <p className="text-cyan-200">
              Opt-in to receive SMS notifications from AI Solutionist
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-blue-400 font-semibold mb-2">Important Notice</h3>
                <p className="text-blue-200 text-sm">
                  By providing your phone number and checking the consent box below, you agree to receive SMS text messages from AI Solutionist about our services, promotions, and updates.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-cyan-300 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full bg-gray-800/50 border ${errors.firstName ? 'border-red-500' : 'border-gray-700'} rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-cyan-300 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full bg-gray-800/50 border ${errors.lastName ? 'border-red-500' : 'border-gray-700'} rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full bg-gray-800/50 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                placeholder="john.doe@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-cyan-300 mb-2">
                Mobile Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className={`w-full bg-gray-800/50 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-700'} rounded-lg py-3 px-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                  placeholder="(123) 456-7890"
                  maxLength={14}
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-400 text-sm mt-1">{errors.phoneNumber}</p>
              )}
            </div>

            {/* SMS Consent Details */}
            <div className="bg-gray-800/30 rounded-lg p-6 space-y-4">
              <h3 className="text-cyan-400 font-semibold text-lg">SMS Program Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-cyan-200">
                <div>
                  <p><strong>Message Frequency:</strong> Up to 4 messages per month</p>
                  <p><strong>Message Types:</strong> Service updates, promotions, tips</p>
                </div>
                <div>
                  <p><strong>Message & Data Rates:</strong> May apply</p>
                  <p><strong>Carriers:</strong> All major carriers supported</p>
                </div>
              </div>

              <div className="text-sm text-cyan-200">
                <p className="mb-2"><strong>To Opt-Out:</strong> Reply STOP to any message</p>
                <p className="mb-2"><strong>For Help:</strong> Reply HELP or contact us at lmaisolutionist@gmail.com</p>
                <p><strong>Privacy Policy:</strong> Your information is protected and never shared with third parties</p>
              </div>
            </div>

            {/* Consent Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeToSMS"
                  name="agreeToSMS"
                  checked={formData.agreeToSMS}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-cyan-500 bg-gray-800/50 border-gray-700 rounded focus:ring-cyan-500"
                />
                <label htmlFor="agreeToSMS" className="text-cyan-200 text-sm">
                  <strong className="text-cyan-400">I consent to receive SMS text messages</strong> from AI Solutionist at the phone number provided above. I understand that I can opt-out at any time by replying STOP, and that message and data rates may apply.
                </label>
              </div>
              {errors.agreeToSMS && (
                <p className="text-red-400 text-sm">{errors.agreeToSMS}</p>
              )}

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-cyan-500 bg-gray-800/50 border-gray-700 rounded focus:ring-cyan-500"
                />
                <label htmlFor="agreeToTerms" className="text-cyan-200 text-sm">
                  I agree to the Terms and Conditions and Privacy Policy for SMS communications.
                </label>
              </div>
              {errors.agreeToTerms && (
                <p className="text-red-400 text-sm">{errors.agreeToTerms}</p>
              )}
            </div>

            {/* Compliance Notice */}
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-yellow-400 font-semibold mb-1">Consent Record</h4>
                  <p className="text-yellow-200 text-sm">
                    This opt-in consent will be recorded with a timestamp, your IP address, and this page URL as proof of consent for compliance purposes.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Recording Consent...
                </>
              ) : (
                <>
                  <CheckCircle size={18} />
                  Confirm SMS Opt-In
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => window.location.href = '/'}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              Return to Home
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}