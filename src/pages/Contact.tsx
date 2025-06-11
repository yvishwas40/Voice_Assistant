import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    industry: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const SERVICE_ID = 'service_sc8omu7';       // 🔁 Replace with your EmailJS service ID
    const TEMPLATE_ID = 'template_ie5o4tc';     // 🔁 Replace with your EmailJS template ID
    const PUBLIC_KEY = 'P_BhHsUsBzeMp_LIL';       // 🔁 Replace with your EmailJS public key

    // const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    // const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    // const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        industry: formData.industry,
        project_type: formData.projectType,
      }, PUBLIC_KEY);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        industry: '',
        projectType: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['Hyderabad, Telangana', 'India - 500001'],
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+91 (Coming Soon)', 'Available 24/7'],
      color: 'text-green-400'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@phoqteklabs.com', 'support@phoqteklabs.com'],
      color: 'text-gold-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      color: 'text-purple-400'
    }
  ];

  const industries = [
    'Defense & Security',
    'Medical & Healthcare',
    'Aerospace & Aviation',
    'Infrastructure Monitoring',
    'Research & Development',
    'Other'
  ];

  const projectTypes = [
    'Laser Technology',
    'Quantum Key Distribution',
    'Fiber Optic Gyroscopes',
    'Crystal Processing',
    'Custom Solution',
    'Consultation',
    'other'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold font-display text-white mb-6">
              Contact <span className="text-gold-500">Our Experts</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your photonics requirements? Our team of experts is here to help 
              you find the perfect solution for your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-dark-700 p-6 rounded-xl border border-gray-600 hover:border-gold-500 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className={`${info.color} mb-4`}>
                  <info.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-300 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-dark-800 p-8 rounded-2xl border border-gray-700">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <p className="text-green-400">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <p className="text-red-400">Sorry, there was an error sending your message. Please try again.</p>
              </div>
            )}

            {/* Form JSX remains the same */}
            {/* ... keep your form JSX unchanged here ... */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Name */}
  <div className="col-span-1">
    <label className="block text-sm text-gray-400 mb-1">Full Name</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      className="w-full p-3 rounded-lg bg-dark-700 text-white border border-gray-600 focus:outline-none focus:border-gold-500"
      placeholder="Your name"
    />
  </div>

  {/* Email */}
  <div className="col-span-1">
    <label className="block text-sm text-gray-400 mb-1">Email</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full p-3 rounded-lg bg-dark-700 text-white border border-gray-600 focus:outline-none focus:border-gold-500"
      placeholder="you@example.com"
    />
  </div>

  {/* Company */}
  <div className="col-span-1">
    <label className="block text-sm text-gray-400 mb-1">Company</label>
    <input
      type="text"
      name="company"
      value={formData.company}
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-dark-700 text-white border border-gray-600 focus:outline-none focus:border-gold-500"
      placeholder="Company name"
    />
  </div>

  {/* Phone */}
  <div className="col-span-1">
    <label className="block text-sm text-gray-400 mb-1">Phone</label>
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-dark-700 text-white border border-gray-600 focus:outline-none focus:border-gold-500"
      placeholder="Phone number"
    />
  </div>

  {/* Subject */}
  <div className="col-span-1 md:col-span-2">
    <label className="block text-sm text-gray-400 mb-1">Subject</label>
    <input
      type="text"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      required
      className="w-full p-3 rounded-lg bg-dark-700 text-white border border-gray-600 focus:outline-none focus:border-gold-500"
      placeholder="Brief subject of your message"
    />
  </div>

  {/* Industry */}
  <div className="col-span-1">
    <label className="block text-sm text-gray-400 mb-1">Industry</label>
    <select
      name="industry"
      value={formData.industry}
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-dark-700 text-white border border-gray-600 focus:outline-none focus:border-gold-500"
    >
      <option value="">Select Industry</option>
      {industries.map((industry, idx) => (
        <option key={idx} value={industry}>{industry}</option>
      ))}
    </select>
  </div>

  {/* Project Type */}
  <div className="col-span-1">
    <label className="block text-sm text-gray-400 mb-1">Project Type</label>
    <select
      name="projectType"
      value={formData.projectType}
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-dark-700 text-white border border-gray-600 focus:outline-none focus:border-gold-500"
    >
      <option value="">Select Project Type</option>
      {projectTypes.map((type, idx) => (
        <option key={idx} value={type}>{type}</option>
      ))}
    </select>
  </div>

  {/* Message */}
  <div className="col-span-1 md:col-span-2">
    <label className="block text-sm text-gray-400 mb-1">Message</label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      rows={5}
      required
      className="w-full p-3 rounded-lg bg-dark-700 text-white border border-gray-600 focus:outline-none focus:border-gold-500"
      placeholder="Your message"
    ></textarea>
  </div>

  {/* Submit Button */}
  <div className="col-span-1 md:col-span-2 text-center mt-6">
    <button
      type="submit"
      disabled={isSubmitting}
      className="inline-flex items-center justify-center px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-medium rounded-xl transition-all duration-300"
    >
      {isSubmitting ? 'Sending...' : (
        <>
          <Send className="w-4 h-4 mr-2" />
          Send Message
        </>
      )}
    </button>
  </div>
</form>

          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Company Information</h2>
            <p className="text-xl text-gray-300">
              Official details and registration information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-dark-700 p-6 rounded-xl border border-gray-600">
              <h3 className="text-xl font-semibold text-gold-500 mb-4">Company Details</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>Name:</strong> Phoqtek Labs Private Limited</p>
                <p><strong>CIN:</strong> U30305TS2025PTC193612</p>
                <p><strong>Type:</strong> Private Limited Company</p>
              </div>
            </div>

            <div className="bg-dark-700 p-6 rounded-xl border border-gray-600">
              <h3 className="text-xl font-semibold text-gold-500 mb-4">Industry Focus</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Photonics Technology</p>
                <p>• Defense Systems</p>
                <p>• Medical Equipment</p>
                <p>• Aerospace Solutions</p>
              </div>
            </div>

            <div className="bg-dark-700 p-6 rounded-xl border border-gray-600">
              <h3 className="text-xl font-semibold text-gold-500 mb-4">Location</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>Headquarters:</strong></p>
                <p>Hyderabad, Telangana</p>
                <p>India</p>
                <p><strong>Pin Code:</strong> 500001</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
