import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-terrazzo-800 text-terrazzo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/bostonTerrazoSmall.png" 
                alt="Boston Terrazzo Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-terrazzo-100 mb-4 max-w-md">
              Professional terrazzo restoration, polishing, and repair services across New Hampshire, 
              Maine, and eastern Massachusetts. Bringing your terrazzo floors back to life with 
              expert care and attention to detail.
            </p>
            <div className="flex items-center space-x-2 text-terrazzo-100 mb-2">
              <a 
                href="https://marbleperfect.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <img 
                  src="/MPlogoShort.png" 
                  alt="Marble Perfect Logo" 
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-terrazzo-50">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-terrazzo-100 hover:text-terrazzo-50 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-terrazzo-100 hover:text-terrazzo-50 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-terrazzo-100 hover:text-terrazzo-50 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-terrazzo-100 hover:text-terrazzo-50 transition-colors">
                  Terrazzo Care
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-terrazzo-100 hover:text-terrazzo-50 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-terrazzo-50">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-terrazzo-300" />
                <a href="tel:6033932776" className="text-terrazzo-100 hover:text-terrazzo-50 transition-colors">
                  (603) 393-2776
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-terrazzo-300" />
                <a href="mailto:info@bostonterrazzo.com" className="text-terrazzo-100 hover:text-terrazzo-50 transition-colors">
                  info@bostonterrazzo.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-terrazzo-300 mt-1" />
                <div className="text-terrazzo-100">
                  <p>Serving:</p>
                  <p className="text-sm">New Hampshire</p>
                  <p className="text-sm">Maine</p>
                  <p className="text-sm">Eastern Massachusetts</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-terrazzo-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-terrazzo-200 text-sm">
            © 2024 Boston Terrazzo. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="https://dartbirnie.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <img 
                src="/DBDgradientFLAT.png" 
                alt="DBD Logo" 
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;