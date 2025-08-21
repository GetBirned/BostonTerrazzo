import React from 'react';
import { CheckCircle, AlertTriangle, Droplets, Brush, Shield, Clock } from 'lucide-react';

const Care = () => {
  const dailyCare = [
    'Sweep or vacuum regularly to remove dirt and debris',
    'Clean spills immediately to prevent staining',
    'Use a damp mop with neutral pH cleaner',
    'Avoid acidic cleaners (vinegar, lemon juice)',
    'Place mats at entrances to reduce tracked dirt'
  ];

  const weeklyMaintenance = [
    'Deep clean with terrazzo-specific cleaner',
    'Check for any new chips or cracks',
    'Inspect high-traffic areas for wear',
    'Clean and maintain entrance mats'
  ];

  const avoidList = [
    'Acidic cleaners (can etch the surface)',
    'Abrasive scrubbers or steel wool',
    'Wax-based products (trap dirt and yellow)',
    'Bleach or ammonia-based cleaners',
    'Steam cleaning without proper sealing'
  ];

  const dosList = [
    'Use neutral pH cleaners designed for natural stone',
    'Clean spills immediately to prevent staining',
    'Use soft microfiber mops and cloths',
    'Test any new cleaner in an inconspicuous area first',
    'Use furniture pads to prevent scratches',
    'Maintain consistent humidity levels',
    'Address issues promptly to prevent damage'
  ];

  const professionalSigns = [
    'Loss of shine or dull appearance',
    'Visible scratches or etching',
    'Stains that won\'t come out',
    'Cracks or chips in the surface',
    'Yellowing from old wax buildup'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-terrazzo-50 to-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terrazzo Care Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how to maintain your terrazzo floors and keep them looking beautiful for years to come
          </p>
        </div>
      </section>

      {/* Understanding Terrazzo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Your Terrazzo</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Terrazzo is incredibly easy and cost-effective to maintain when properly restored. Daily dust 
                mopping and regular wet mopping with warm water or a neutral cleaner formulated for natural 
                stone is all you need. You don't need harsh chemicals. In many cases, they can actually damage your terrazzo.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Properly finished terrazzo is non-porous, doesn't support microbial growth, and contains no 
                VOC materials, making it an excellent "green" flooring choice that supports indoor air quality.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-terrazzo-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Environmentally Friendly</h3>
                    <p className="text-gray-600">Non-porous, no VOCs, supports healthy indoor air quality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Droplets className="w-6 h-6 text-terrazzo-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Easy Maintenance</h3>
                    <p className="text-gray-600">Simple cleaning with water or neutral stone cleaner</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-terrazzo-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Acid Sensitive</h3>
                    <p className="text-gray-600">Avoid harsh chemicals and acidic cleaners</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/terrazzoClean.webp"
                alt="Beautiful terrazzo floor showing proper maintenance"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sealing Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Terrazzo Sealing</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Once your terrazzo is restored, you may wish to have it sealed to help protect against 
                  staining, but this is not the same as applying a coating. A sealer guards against staining 
                  by filling the pores of both aggregate and binder, making it more difficult for staining 
                  agents to sink in.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Remember though, even if you have your terrazzo sealed, a sealer will not protect against 
                  etching caused by harsh chemicals or acidic liquids. It's important to clean up spills 
                  right away. This is good practice regardless of your flooring type.
                </p>
              </div>
              <div className="bg-terrazzo-50 p-6 rounded-lg border border-terrazzo-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sealer vs. Coating</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">Sealer (Recommended)</h4>
                    <p className="text-gray-700 text-sm">Penetrates pores to prevent staining while maintaining natural appearance</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Topical Coating (Avoid)</h4>
                    <p className="text-gray-700 text-sm">Surface layer that can yellow, scratch, and require frequent maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Care */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Brush className="w-8 h-8 text-terrazzo-600" />
                <h2 className="text-3xl font-bold text-gray-900">Daily Care</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Terrazzo is incredibly easy to maintain with these simple daily practices:
              </p>
              <ul className="space-y-3">
                {dailyCare.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-terrazzo-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-8 h-8 text-terrazzo-600" />
                <h2 className="text-3xl font-bold text-gray-900">Weekly Maintenance</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Weekly deep cleaning and inspection helps prevent problems:
              </p>
              <ul className="space-y-3">
                {weeklyMaintenance.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-terrazzo-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Avoid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Do's and Don'ts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential guidelines for proper terrazzo floor care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Do's - Safe Practices:</h3>
              <ul className="space-y-2">
                {dosList.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-green-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-red-900 mb-4">Don'ts - Never Use These:</h3>
              <ul className="space-y-2">
                {avoidList.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-red-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When to Call Professionals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Call the Professionals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Some issues require professional restoration to prevent permanent damage
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Signs You Need Professional Help:</h3>
              <ul className="space-y-4">
                {professionalSigns.map((sign, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-terrazzo-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-terrazzo-100 rounded-lg border border-terrazzo-200">
                <h4 className="font-semibold text-gray-900 mb-2">Don't Wait Too Long!</h4>
                <p className="text-gray-700">
                  Early intervention can prevent minor issues from becoming major problems. 
                  Regular professional maintenance every 3-5 years can extend the life of your terrazzo significantly.
                </p>
              </div>
            </div>
            <div>
              <img
                src="\dirtyterrazzo.jpg"
                alt="Professional terrazzo restoration in progress"
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
            Need Professional Terrazzo Care?
          </h2>
          <p className="text-xl text-terrazzo-100 mb-8 max-w-2xl mx-auto">
            Our experts can assess your terrazzo floors and provide the professional care they need 
            to look their best for years to come.
          </p>
          <a
            href="tel:6033511827"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-terrazzo-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Call (603) 351-1827 for Expert Care
          </a>
        </div>
      </section>
    </div>
  );
};

export default Care;