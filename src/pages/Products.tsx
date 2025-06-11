import React from 'react';
import { Zap, Shield, Target, Gem, ArrowRight, CheckCircle } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Zap,
      title: 'Laser Technology',
      subtitle: 'Precision Laser Systems',
      description: 'Advanced laser systems engineered for precision applications across multiple industries.',
      features: [
        'High-power fiber lasers',
        'Ultrafast pulsed lasers',
        'Laser beam shaping systems',
        'Custom laser solutions',
        'Precision laser processing'
      ],
      applications: ['Material Processing', 'Medical Procedures', 'Defense Systems', 'Research & Development'],
      color: 'from-blue-500 to-blue-400'
    },
    {
      icon: Shield,
      title: 'Quantum Key Distribution',
      subtitle: 'Secure Communications',
      description: 'Next-generation quantum cryptography solutions for ultra-secure communications.',
      features: [
        'Quantum-safe encryption',
        'Point-to-point QKD systems',
        'Network QKD solutions',
        'Key management systems',
        'Quantum random number generators'
      ],
      applications: ['Government Communications', 'Financial Services', 'Critical Infrastructure', 'Defense Networks'],
      color: 'from-purple-500 to-purple-400'
    },
    {
      icon: Target,
      title: 'Fiber Optic Gyroscopes',
      subtitle: 'Precision Navigation',
      description: 'High-precision fiber optic gyroscopes for navigation and positioning systems.',
      features: [
        'High-accuracy sensing',
        'Compact design',
        'Environmental resistance',
        'Long-term stability',
        'Multi-axis configurations'
      ],
      applications: ['Aerospace Navigation', 'Marine Systems', 'Defense Platforms', 'Industrial Automation'],
      color: 'from-green-500 to-green-400'
    },
    {
      icon: Gem,
      title: 'Crystal Processing',
      subtitle: 'Precision Optics',
      description: 'Specialized optical crystal manufacturing and processing for photonics applications.',
      features: [
        'Custom crystal growth',
        'Precision polishing',
        'Anti-reflective coatings',
        'Quality assurance testing',
        'Specialized geometries'
      ],
      applications: ['Laser Components', 'Optical Instruments', 'Research Equipment', 'Medical Devices'],
      color: 'from-gold-500 to-gold-400'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold font-display text-white mb-6">
              Products & <span className="text-gold-500">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge photonics technology engineered for precision applications 
              across defense, medical, aerospace, and infrastructure sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {products.map((product, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Product Info */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`bg-gradient-to-r ${product.color} p-3 rounded-lg`}>
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{product.title}</h2>
                      <p className="text-gold-500 font-medium">{product.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                    <div className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Applications</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {product.applications.map((app, appIndex) => (
                        <div
                          key={appIndex}
                          className="bg-dark-700 px-3 py-2 rounded-lg text-sm text-gray-300 border border-gray-600"
                        >
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="bg-gradient-to-r from-gold-500 to-gold-400 text-dark-900 px-6 py-3 rounded-lg font-semibold hover:from-gold-400 hover:to-gold-300 transition-all duration-300 flex items-center space-x-2 group">
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Product Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${product.color} p-1 rounded-xl`}>
                      <div className="bg-dark-700 p-8 rounded-lg">
                        <div className="text-center">
                          <product.icon className="h-32 w-32 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                          <p className="text-gray-300">{product.subtitle}</p>
                        </div>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-500/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold-400/10 rounded-full blur-xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Excellence</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our products meet the most demanding technical specifications and industry standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Precision',
                value: '±0.001°',
                description: 'Angular accuracy for gyroscope systems'
              },
              {
                title: 'Security',
                value: '256-bit',
                description: 'Quantum key distribution encryption'
              },
              {
                title: 'Reliability',
                value: '99.9%',
                description: 'System uptime guarantee'
              }
            ].map((spec, index) => (
              <div key={index} className="bg-dark-800 p-6 rounded-xl border border-gray-700 text-center">
                <div className="text-4xl font-bold text-gold-500 mb-2">{spec.value}</div>
                <div className="text-xl font-semibold text-white mb-2">{spec.title}</div>
                <div className="text-gray-300">{spec.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-dark-900 mb-4">
            Ready to Discuss Your Requirements?
          </h2>
          <p className="text-xl text-dark-800 mb-8 max-w-2xl mx-auto">
            Our technical team is ready to help you find the perfect photonics solution for your application.
          </p>
          <a
            href="/contact"
            className="bg-dark-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark-800 transition-colors inline-flex items-center space-x-2 group"
          >
            <span>Contact Our Experts</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;