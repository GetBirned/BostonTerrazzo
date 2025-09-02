import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const caseStudyImages = [
    {
      id: 1,
      title: 'Initial Assessment',
      image: '/floorBefore.jpg',
      description: 'The original terrazzo floors showing decades of wear, surface scratches, etching, and loss of original luster from heavy foot traffic and improper maintenance over the years.'
    },
    {
      id: 2,
      title: 'Structural Damage',
      image: '/broken-church-floor.jpg',
      description: 'Areas of significant damage including cracks and chips that required specialized repair techniques to restore structural integrity.'
    },
    {
      id: 3,
      title: 'Repair Process',
      image: '/church-fix-1.jpg',
      description: 'Professional repair work in progress, showing our meticulous approach to matching original materials and restoring damaged sections.'
    },
    {
      id: 4,
      title: 'Final Result',
      image: '/floorAfter.jpg',
      description: 'The completed restoration showcasing the natural beauty and mirror-like finish achieved through our diamond polishing process.'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-terrazzo-50 to-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Case Study: Historic Church Restoration
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A detailed look at our comprehensive terrazzo restoration project at{' '}
            <a 
              href="https://stpeteraub.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-terrazzo-600 hover:text-terrazzo-700 font-semibold underline transition-colors duration-200"
            >
              St. Peter Parish Church
            </a>
            {' '}in Auburn, New Hampshire
          </p>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Restoration Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow the complete transformation of this historic church's terrazzo floors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudyImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image.image)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <p className="text-lg font-semibold">View Full Size</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-terrazzo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  This historic church's terrazzo floors had endured decades of heavy foot traffic, improper cleaning methods, and general wear. The original beauty was hidden beneath years of accumulated damage, requiring a comprehensive restoration approach.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Solution</h3>
                <p className="text-gray-700 leading-relaxed">
                  Using our specialized diamond polishing process and expert repair techniques, we restored these floors to their original glory while preserving their historic character. The result is a durable, beautiful surface that will serve the congregation for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Before & After</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the dramatic transformation our restoration process can achieve
            </p>
          </div>
          <div className="space-y-16">
            {/* Church Restoration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Before Restoration</h3>
                <img
                  src="/churchBefore.jpg"
                  alt="Church terrazzo floor before restoration - dull and worn"
                  className="rounded-lg shadow-lg w-full cursor-pointer"
                  onClick={() => setSelectedImage('/churchBefore.jpg')}
                />
                <p className="mt-4 text-gray-600">
                  Historic church terrazzo showing years of wear and dullness
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">After Restoration</h3>
                <img
                  src="/churchAfter.jpg"
                  alt="Church terrazzo floor after restoration - beautiful and shiny"
                  className="rounded-lg shadow-lg w-full cursor-pointer"
                  onClick={() => setSelectedImage('/churchAfter.jpg')}
                />
                <p className="mt-4 text-gray-600">
                  Restored to original beauty with natural shine and protection
                </p>
              </div>
            </div>

            {/* Stairs Restoration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Before Restoration</h3>
                <img
                  src="/stairsBefore.jpg"
                  alt="Terrazzo stairs before restoration - worn and damaged"
                  className="rounded-lg shadow-lg w-full cursor-pointer"
                  onClick={() => setSelectedImage('/stairsBefore.jpg')}
                />
                <p className="mt-4 text-gray-600">
                  Worn terrazzo stairs with chips and surface damage
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">After Restoration</h3>
                <img
                  src="/stairsAfter.jpg"
                  alt="Terrazzo stairs after restoration - smooth and polished"
                  className="rounded-lg shadow-lg w-full cursor-pointer"
                  onClick={() => setSelectedImage('/stairsAfter.jpg')}
                />
                <p className="mt-4 text-gray-600">
                  Smooth, polished stairs ready for years of use
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for full-size images */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Full size view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;