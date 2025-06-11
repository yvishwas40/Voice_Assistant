import React from 'react';
import { Users, Target, Lightbulb, Award, MapPin, Building } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously pushing the boundaries of photonics technology'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Delivering exact solutions for critical applications'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards in everything we do'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to achieve their goals'
    }
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Company Incorporation',
      description: 'Phoqtek Labs Private Limited was established with a vision to revolutionize photonics technology'
    },
    {
      year: '2025',
      title: 'Technology Development',
      description: 'Focused on developing cutting-edge laser technology and quantum key distribution systems'
    },
    {
      year: '2025',
      title: 'Market Expansion',
      description: 'Expanding our reach across defense, medical, aerospace, and infrastructure sectors'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold font-display text-white mb-6">
              About <span className="text-gold-500">Phoqtek Labs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of photonics technology with precision-engineered solutions 
              for the world's most critical applications.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Phoqtek Labs Private Limited is a cutting-edge photonics and engineering company 
                based in Hyderabad, India. We specialize in developing and manufacturing precision 
                photonics components and systems for critical applications across multiple industries.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our expertise spans laser technology, quantum key distribution (QKD), fiber optic 
                gyroscopes (FOG), and crystal processing. We serve the defense, medical, aerospace, 
                and infrastructure monitoring sectors with solutions that demand the highest levels 
                of precision and reliability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5 text-gold-500" />
                  <span className="text-gray-300">CIN: U30305TS2025PTC193612</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gold-500" />
                  <span className="text-gray-300">Hyderabad, Telangana</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-gold-500/20 to-gold-400/20 p-8 rounded-xl">
                <div className="bg-dark-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">Our Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To be the global leader in photonics technology, enabling breakthrough 
                    innovations that secure nations, heal patients, explore space, and monitor 
                    critical infrastructure worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-dark-800 p-6 rounded-xl border border-gray-700 hover:border-gold-500 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="bg-gradient-to-r from-gold-500 to-gold-400 p-3 rounded-lg w-fit mb-4 group-hover:shadow-lg group-hover:shadow-gold-500/25 transition-all duration-300">
                  <value.icon className="h-6 w-6 text-dark-900" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones in our mission to advance photonics technology
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gold-500"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-dark-700 p-6 rounded-xl border border-gray-600 hover:border-gold-500 transition-all duration-300">
                    <div className="text-gold-500 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-dark-900"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries driving innovation at Phoqtek Labs
            </p>
          </div>

          <div className="text-center">
            <div className="bg-dark-800 p-8 rounded-xl border border-gray-700 max-w-2xl mx-auto">
              <div className="w-32 h-32 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="h-16 w-16 text-dark-900" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Our Expert Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Our leadership team brings together decades of experience in photonics, 
                engineering, and technology innovation. We're committed to building a world-class 
                organization that delivers exceptional value to our clients and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-dark-900 mb-4">
            Partner With Us
          </h2>
          <p className="text-xl text-dark-800 mb-8 max-w-2xl mx-auto">
            Join us in shaping the future of photonics technology. Let's discuss how we can work together.
          </p>
          <a
            href="/contact"
            className="bg-dark-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark-800 transition-colors inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;