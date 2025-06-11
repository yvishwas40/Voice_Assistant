import React from 'react';
import { Shield, Heart, Plane, Building, ArrowRight, Target, Users, Zap } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Shield,
      title: 'Defense & Security',
      description: 'Advanced photonics solutions for military and security applications requiring the highest levels of precision and reliability.',
      applications: [
        'Military communication systems',
        'Surveillance and reconnaissance',
        'Weapons guidance systems',
        'Secure data transmission',
        'Electronic warfare systems'
      ],
      products: ['QKD Systems', 'FOG Navigation', 'Laser Technology'],
      stats: { projects: '150+', clients: '25+', uptime: '99.95%' },
      color: 'from-red-500 to-red-400',
      bgColor: 'bg-red-500/10'
    },
    {
      icon: Heart,
      title: 'Medical & Healthcare',
      description: 'Precision photonics technology enabling breakthrough medical procedures and diagnostic equipment.',
      applications: [
        'Surgical laser systems',
        'Medical imaging equipment',
        'Diagnostic instruments',
        'Therapeutic devices',
        'Research instrumentation'
      ],
      products: ['Medical Lasers', 'Crystal Optics', 'Precision Components'],
      stats: { projects: '200+', clients: '40+', uptime: '99.9%' },
      color: 'from-green-500 to-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Plane,
      title: 'Aerospace & Aviation',
      description: 'Reliable navigation and communication systems for aircraft, spacecraft, and satellite applications.',
      applications: [
        'Inertial navigation systems',
        'Satellite communications',
        'Spacecraft instrumentation',
        'Aircraft guidance systems',
        'Space exploration equipment'
      ],
      products: ['FOG Systems', 'Communication Links', 'Navigation Equipment'],
      stats: { projects: '75+', clients: '15+', uptime: '99.99%' },
      color: 'from-blue-500 to-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Building,
      title: 'Infrastructure Monitoring',
      description: 'Smart monitoring solutions for critical infrastructure including bridges, pipelines, and power systems.',
      applications: [
        'Structural health monitoring',
        'Pipeline integrity systems',
        'Power grid monitoring',
        'Environmental sensing',
        'Industrial automation'
      ],
      products: ['Sensor Networks', 'Monitoring Systems', 'Data Analytics'],
      stats: { projects: '300+', clients: '60+', uptime: '99.8%' },
      color: 'from-gold-500 to-gold-400',
      bgColor: 'bg-gold-500/10'
    }
  ];

  const capabilities = [
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Delivering exact specifications for mission-critical applications'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 technical support and maintenance services'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick installation and commissioning of systems'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold font-display text-white mb-6">
              Industries <span className="text-gold-500">We Serve</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empowering critical sectors with precision photonics solutions that protect, heal, 
              explore, and monitor our world.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <div key={index} className="relative">
                {/* Background Pattern */}
                <div className={`absolute inset-0 ${industry.bgColor} rounded-3xl opacity-5`}></div>
                
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Industry Info */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} space-y-6`}>
                    <div className="flex items-center space-x-4">
                      <div className={`bg-gradient-to-r ${industry.color} p-4 rounded-xl shadow-lg`}>
                        <industry.icon className="h-10 w-10 text-white" />
                      </div>
                      <h2 className="text-4xl font-bold text-white">{industry.title}</h2>
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {industry.description}
                    </p>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Key Applications</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {industry.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.color}`}></div>
                            <span className="text-gray-300">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Our Solutions</h3>
                      <div className="flex flex-wrap gap-2">
                        {industry.products.map((product, productIndex) => (
                          <span
                            key={productIndex}
                            className={`bg-gradient-to-r ${industry.color} text-white px-4 py-2 rounded-full text-sm font-medium`}
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="bg-gradient-to-r from-gold-500 to-gold-400 text-dark-900 px-6 py-3 rounded-lg font-semibold hover:from-gold-400 hover:to-gold-300 transition-all duration-300 flex items-center space-x-2 group">
                      <span>Learn More</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Industry Stats */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="bg-dark-700 p-8 rounded-2xl border border-gray-600">
                      <div className="text-center mb-8">
                        <industry.icon className="h-24 w-24 text-gold-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-3xl font-bold text-gold-500 mb-1">
                            {industry.stats.projects}
                          </div>
                          <div className="text-sm text-gray-400">Projects</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-gold-500 mb-1">
                            {industry.stats.clients}
                          </div>
                          <div className="text-sm text-gray-400">Clients</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-gold-500 mb-1">
                            {industry.stats.uptime}
                          </div>
                          <div className="text-sm text-gray-400">Uptime</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Phoqtek Labs</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence across all industries we serve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-dark-800 p-8 rounded-xl border border-gray-700 hover:border-gold-500 transition-all duration-300 group hover:transform hover:scale-105 text-center"
              >
                <div className="bg-gradient-to-r from-gold-500 to-gold-400 p-4 rounded-xl w-fit mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-gold-500/25 transition-all duration-300">
                  <capability.icon className="h-8 w-8 text-dark-900" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-gradient-to-r from-gold-500/10 to-gold-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Global Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '750+', label: 'Total Projects' },
                { number: '140+', label: 'Global Clients' },
                { number: '4', label: 'Key Industries' },
                { number: '99.9%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-dark-900 mb-4">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-dark-800 mb-8 max-w-2xl mx-auto">
            Let's discuss how our photonics solutions can address your specific industry challenges.
          </p>
          <a
            href="/contact"
            className="bg-dark-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark-800 transition-colors inline-flex items-center space-x-2 group"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Industries;