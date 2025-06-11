import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Shield, Award, ChevronDown } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'Laser Technology',
      description: 'Advanced laser systems for precision applications'
    },
    {
      icon: Shield,
      title: 'Quantum Key Distribution',
      description: 'Secure quantum communication solutions'
    },
    {
      icon: Target,
      title: 'Fiber Optic Gyroscopes',
      description: 'High-precision navigation instruments'
    },
    {
      icon: Award,
      title: 'Crystal Processing',
      description: 'Specialized crystal manufacturing and processing'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years of Innovation' },
    { number: '500+', label: 'Projects Delivered' },
    { number: '4', label: 'Key Industries' },
    { number: '24/7', label: 'Technical Support' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gold-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gold-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
              <span className="text-white">Precision</span>
              <br />
              <span className="bg-gradient-to-r from-gold-500 to-gold-300 bg-clip-text text-transparent">
                Photonics
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Delivering cutting-edge photonics and engineering solutions for defense, medical, 
              aerospace, and infrastructure monitoring sectors with unmatched precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/products"
                className="bg-gradient-to-r from-gold-500 to-gold-400 text-dark-900 px-8 py-4 rounded-lg font-semibold hover:from-gold-400 hover:to-gold-300 transition-all duration-300 flex items-center space-x-2 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-gold-500 text-gold-500 px-8 py-4 rounded-lg font-semibold hover:bg-gold-500 hover:text-dark-900 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gold-500" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Technologies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading the industry with innovative photonics solutions tailored for critical applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-dark-700 p-6 rounded-xl border border-gray-600 hover:border-gold-500 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="bg-gradient-to-r from-gold-500 to-gold-400 p-3 rounded-lg w-fit mb-4 group-hover:shadow-lg group-hover:shadow-gold-500/25 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-dark-900" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500/10 to-gold-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gold-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              To revolutionize the photonics industry by delivering precision-engineered solutions 
              that empower critical sectors including defense, medical, aerospace, and infrastructure 
              monitoring. We are committed to advancing technology that protects, heals, explores, 
              and monitors our world.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-gold-500 hover:text-gold-400 font-semibold transition-colors group"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-dark-900 mb-4">
            Ready to Transform Your Project?
          </h2>
          <p className="text-xl text-dark-800 mb-8 max-w-2xl mx-auto">
            Contact our team of experts to discuss how our photonics solutions can meet your specific requirements.
          </p>
          <Link
            to="/contact"
            className="bg-dark-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark-800 transition-colors inline-flex items-center space-x-2 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;