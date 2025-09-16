import React from 'react';
import { Sparkles, Wrench, Shield, Zap, CheckCircle, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Terrazzo Polishing',
      description: 'Professional diamond polishing to restore the natural shine and luster of your terrazzo floors.',
      features: [
        'Diamond polishing system',
        'Multiple grit progression',
        'Natural shine restoration',
      ]
    },
    {
      icon: Wrench,
      title: 'Terrazzo Repair',
      description: 'Expert repair of cracks, chips, and damaged areas to restore structural integrity.',
      features: [
        'Crack filling and sealing',
        'Chip and gouge repair',
        'Color matching',
        'Seamless integration'
      ]
    },
    {
      icon: Shield,
      title: 'Sealing & Protection',
      description: 'Professional sealing services to protect your terrazzo from stains and wear.',
      features: [
        'Penetrating sealers',
        'Stain protection',
        'Enhanced durability',
        'Easy maintenance'
      ]
    },
    {
      icon: Zap,
      title: 'Wax Removal',
      description: 'Complete removal of old wax buildup that yellows and dulls terrazzo surfaces.',
      features: [
        'Safe wax stripping',
        'Complete removal',
        'Surface preparation'
      ]
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Free Evaluation',
      description: 'We assess your terrazzo floors and provide a detailed restoration plan.'
    },
    {
      step: '2',
      title: 'Surface Preparation',
      description: 'Thorough cleaning and preparation, including wax removal if necessary.'
    },
    {
      step: '3',
      title: 'Diamond Polishing',
      description: 'Multi-step diamond polishing process to restore shine and smoothness.'
    },
    {
      step: '4',
      title: 'Sealing & Protection',
      description: 'Application of protective sealers to maintain your floors long-term.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-terrazzo-50 to-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Terrazzo Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive terrazzo restoration, polishing, and repair services to bring your floors back to life
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-terrazzo-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-terrazzo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-terrazzo-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Restoration Process</h2>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Our Method is Superior</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  When selecting your restoration contractor, watch out for those who use chemical shortcuts 
                  to achieve results. Your terrazzo may look gorgeous right after such a process, but a finish 
                  created with topical coatings is not as cost-effective, long-lasting, or environmentally 
                  friendly as our natural approach.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our process uses diamond-encrusted pads of increasingly finer grit to achieve a beautiful, 
                  natural shine that doesn't require waxes or other topical finishes.
                </p>
              </div>
              <div>
                <div className="bg-terrazzo-50 p-6 rounded-lg border border-terrazzo-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Professional Repairs</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    In experienced hands, chips and holes can be repaired by carefully matching both the 
                    color of the existing binder and the type of aggregate present. This ensures repairs 
                    blend seamlessly with your existing floor rather than becoming unsatisfactory eyesores.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-terrazzo-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Where We Serve</h2>
              <p className="text-lg text-gray-600 mb-6">
                Boston Terrazzo proudly serves residential and commercial clients throughout:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-terrazzo-50 p-4 rounded-lg border border-terrazzo-200">
                  <h3 className="font-semibold text-gray-900 mb-2">New Hampshire</h3>
                  <p className="text-sm text-gray-600">Statewide coverage</p>
                </div>
                <div className="bg-terrazzo-50 p-4 rounded-lg border border-terrazzo-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Maine</h3>
                  <p className="text-sm text-gray-600">Southern regions</p>
                </div>
                <div className="bg-terrazzo-50 p-4 rounded-lg border border-terrazzo-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Massachusetts</h3>
                  <p className="text-sm text-gray-600">Eastern areas</p>
                </div>
              </div>
              <p className="text-gray-600">
                Whether your terrazzo floors are in a historic church, commercial building, or residential home, 
                we have the expertise and equipment to restore them to their original beauty.
              </p>
            </div>
            <div>
              <img
                src="\churchOpening.jpg"
                alt="Professional terrazzo restoration work"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-terrazzo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-terrazzo-100 mb-8 max-w-2xl mx-auto">
            Contact us today for your free terrazzo floor evaluation and discover how we can 
            restore your floors to their original beauty.
          </p>
          <a
            href="tel:6033511827"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-terrazzo-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call (603) 351-1827 Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;