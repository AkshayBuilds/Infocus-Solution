import React from 'react';
import { Globe2 ,Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <Globe2 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
              <span className="text-lg sm:text-2xl font-bold">INFOCUS SOLUTION</span>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-xs sm:text-sm">
              Your trusted partner for global immigration solutions. We help individuals and families 
              navigate the complex world of international visas with expertise and care.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="bg-blue-600 p-2 sm:p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="bg-pink-600 p-2 sm:p-3 rounded-full hover:bg-pink-700 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="bg-blue-800 p-2 sm:p-3 rounded-full hover:bg-blue-900 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-0.5" />
                <div className="text-gray-300 text-xs sm:text-sm">
                      212 Vitthal Plaza Naroda Dehgam Road<br />
                      Nr. Geb office Naroda Ahmedabad<br />
                      Gujarat, India.
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                <div className="text-gray-300 text-xs sm:text-sm">+91 7383888088</div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                <div className="text-gray-300 text-xs sm:text-sm">info@infocussolution.services</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-xs sm:text-sm mb-3 md:mb-0">
            © {currentYear} INFOCUS SOLUTION. All rights reserved.
          </div>
          <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;