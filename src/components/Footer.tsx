import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Zap, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-gold-500 to-gold-400 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-dark-900" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Phoqtek Labs</span>
                <div className="text-xs text-gold-500 font-medium">Private Limited</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Cutting-edge photonics and engineering solutions for defense, medical, aerospace, 
              and infrastructure monitoring sectors. Delivering precision components with innovation.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p><strong>CIN:</strong> U30305TS2025PTC193612</p>
              <p><strong>Industry:</strong> Photonics, Defense, Medical, Aerospace</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-500 font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Industries', path: '/industries' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-gold-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold-500 font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Hyderabad, Telangana<br />
                  India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+91 (Coming Soon)</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@phoqteklabs.com</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-gold-500 font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Github, href: '#', label: 'GitHub' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-dark-800 p-2 rounded-lg text-gray-400 hover:text-gold-500 hover:bg-dark-700 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Phoqtek Labs Private Limited. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;