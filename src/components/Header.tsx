import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Terrazzo Care', href: '/care' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-terrazzo-700 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-1 sm:mb-0">
            <span className="hidden sm:inline">Professional Terrazzo Restoration</span>
            <span className="sm:hidden">Terrazzo Restoration Experts</span>
            <span className="text-terrazzo-100">•</span>
            <span>Serving NH, ME & Eastern MA</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-3 h-3" />
            <a href="tel:6033511827" className="font-medium hover:text-terrazzo-200 transition-colors">
              (603) 315-1827
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-6">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4">
              <img 
                src="/bostonTerrazoNoBottom.png" 
                alt="Boston Terrazzo Logo" 
                className="h-14 lg:h-16 w-auto transform hover:scale-105 transition-transform duration-200"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 text-base font-medium transition-colors duration-200 rounded-lg relative ${
                    isActive(item.href)
                      ? 'text-terrazzo-600 bg-terrazzo-50 border-l-4 border-terrazzo-600'
                      : 'text-gray-700 hover:text-terrazzo-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-terrazzo-600 rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="bg-terrazzo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-terrazzo-700 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Free Evaluation
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-terrazzo-600 hover:bg-gray-50 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 text-base font-medium transition-colors duration-200 rounded-lg ${
                      isActive(item.href)
                        ? 'text-terrazzo-700 bg-terrazzo-50 border-l-4 border-terrazzo-700'
                        : 'text-gray-700 hover:text-terrazzo-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full bg-terrazzo-700 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-terrazzo-800 transition-colors duration-200"
                  >
                    Free Evaluation
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;