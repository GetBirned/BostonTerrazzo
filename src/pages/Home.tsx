import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Clock, Award, ArrowRight, Phone } from 'lucide-react';
import ServiceAreaMap from '../components/ServiceAreaMap';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-terrazzo-50 to-terrazzo-100 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                Restore Your Terrazzo to 
                <span className="text-terrazzo-600"> Perfection</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                Professional terrazzo floor polishing, repair, and restoration for homes and businesses 
                across New Hampshire, Maine, and eastern Massachusetts. We bring dull, scratched terrazzo 
                back to life with expert care.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="tel:6033511827"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-terrazzo-700 text-white font-semibold rounded-lg hover:bg-terrazzo-800 transition-colors duration-200 text-sm sm:text-base"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (603) 351-1827
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-terrazzo-600 text-terrazzo-600 font-semibold rounded-lg hover:bg-terrazzo-600 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                >
                  Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beautiful restored terrazzo floor"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Expert Restoration</p>
                    <p className="text-xs sm:text-sm text-gray-600">Over a Decade of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Terrazzo Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What is Terrazzo?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discovering the hidden treasure beneath your floors
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/6474469/pexels-photo-6474469.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Terrazzo floor close-up showing marble chips"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <div className="bg-terrazzo-50 p-4 sm:p-6 rounded-lg border border-terrazzo-200 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Why Choose Professional Restoration?</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Our diamond polishing process creates a natural shine without topical coatings or harsh 
                  chemicals. This method is more durable, cost-effective, and environmentally friendly than 
                  chemical shortcuts that only provide temporary results.
                </p>
              </div>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Originally developed in the 15th century with marble chips set in clay, terrazzo has evolved 
                significantly. By the 1950s and 60s when it became popular in America, Portland cement replaced 
                clay as the binder. Today's terrazzo can use epoxy binders and diverse aggregates including 
                recycled glass and plastics.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Properly restored terrazzo is non-porous, doesn't support microbial growth, contains no&nbsp;
                <span 
                  className="relative group cursor-help border-b border-dotted border-gray-400"
                  title="Volatile Organic Compounds - chemicals that can evaporate at room temperature and potentially harm indoor air quality"
                >
                  VOC materials
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    Volatile Organic Compounds are chemicals that can evaporate and harm indoor air quality.
                  </span>
                </span>, and is incredibly cost-effective to maintain. It's truly a "green" flooring option 
                that supports excellent indoor air quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 bg-terrazzo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Why Choose Boston Terrazzo?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We're the trusted terrazzo restoration experts in New England
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-terrazzo-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-terrazzo-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Wax-Free Process</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Our natural polishing method eliminates the need for harsh stripping chemicals
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-terrazzo-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-terrazzo-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Expert Care</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Specialized in polishing, sealing, and repairs for all types of terrazzo floors
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-terrazzo-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-terrazzo-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Minimal Disruption</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Efficient process with long-lasting results that minimize future maintenance
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-terrazzo-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 text-terrazzo-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Local Experts</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Serving NH, ME, and MA communities with personalized, professional service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Service Area</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve residential and commercial clients throughout New England
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <ServiceAreaMap />
            </div>
            <div>
              <div className="space-y-6">
                <div className="bg-terrazzo-50 p-6 rounded-lg border border-terrazzo-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">New Hampshire</h3>
                  <p className="text-gray-600">
                    Statewide coverage including Manchester, Nashua, Concord, Portsmouth, and all surrounding communities.
                  </p>
                </div>
                <div className="bg-terrazzo-50 p-6 rounded-lg border border-terrazzo-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Maine</h3>
                  <p className="text-gray-600">
                    Southern Maine including Portland, Biddeford, Sanford, and York County areas.
                  </p>
                </div>
                <div className="bg-terrazzo-50 p-6 rounded-lg border border-terrazzo-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Massachusetts</h3>
                  <p className="text-gray-600">
                    Eastern Massachusetts including Boston, Cambridge, Lowell, Lawrence, and Essex County.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Not sure if we serve your area?</strong> Give us a call at{' '}
                  <a href="tel:6033511827" className="text-terrazzo-600 hover:text-terrazzo-700">
                    (603) 351-1827
                  </a>{' '}
                  - we may be able to accommodate special requests!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-terrazzo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Restore Your Terrazzo Floors?
          </h2>
          <p className="text-lg sm:text-xl text-terrazzo-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get your free terrazzo floor evaluation today. We'd love the opportunity to serve you 
            and bring your floors back to their original beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:6033511827"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-white text-terrazzo-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (603) 351-1827
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-terrazzo-700 transition-colors duration-200 text-sm sm:text-base"
            >
              Get Free Evaluation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;