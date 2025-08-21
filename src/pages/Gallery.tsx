import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: 'St. Peter Parish Church',
      location: 'Auburn, NH',
      website: 'https://stpeteraub.org/',
      image: '/floorAfter.jpg',
      description: 'Restoration and polishing of century-old terrazzo floors in a historic parish, bringing back their original luster while preserving the timeless character of the church interior.'
    },
    {
      id: 2,
      title: 'Church',
      location: 'Dover, NH',
      image: '/churchAfter.jpg',
      description: 'Complete polishing and sealing of church terrazzo flooring, transforming a high-traffic sanctuary into a brilliantly reflective, durable, and easy-to-maintain surface.'
    },
    {
      id: 3,
      title: 'Residential Home Stairs',
      location: 'Portland, ME',
      image: '/stairsAfter.jpg',
      description: 'Restoration of terrazzo stair entryway with precise color matching to seamlessly blend repairs and enhance the durability and appearance of this high-use area.'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-terrazzo-50 to-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Work Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the beautiful results of our terrazzo restoration projects across New England
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <p className="text-lg font-semibold">View Full Size</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.website ? (
                      <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-terrazzo-600 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="text-terrazzo-600 font-medium mb-2">{project.location}</p>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
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

            {/* Floor Restoration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Before Restoration</h3>
                <img
                  src="/floorBefore.jpg"
                  alt="Terrazzo floor before restoration - scratched and dull"
                  className="rounded-lg shadow-lg w-full cursor-pointer"
                  onClick={() => setSelectedImage('/floorBefore.jpg')}
                />
                <p className="mt-4 text-gray-600">
                  Scratched and dull terrazzo floor with visible wear patterns
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">After Restoration</h3>
                <img
                  src="/floorAfter.jpg"
                  alt="Terrazzo floor after restoration - polished and gleaming"
                  className="rounded-lg shadow-lg w-full cursor-pointer"
                  onClick={() => setSelectedImage('/floorAfter.jpg')}
                />
                <p className="mt-4 text-gray-600">
                  Polished to perfection with a mirror-like finish
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

            {/* Wall Restoration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Before Restoration</h3>
                <img
                  src="/wallBefore.jpg"
                  alt="Terrazzo wall before restoration - stained and dull"
                  className="rounded-lg shadow-lg w-full cursor-pointer"
                  onClick={() => setSelectedImage('/wallBefore.jpg')}
                />
                <p className="mt-4 text-gray-600">
                  Stained and dull terrazzo floor surface
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">After Restoration</h3>
                <img
                  src="/wallAfter.jpg"
                  alt="Terrazzo wall after restoration - clean and vibrant"
                  className="rounded-lg shadow-lg w-full cursor-pointer"
                  onClick={() => setSelectedImage('/wallAfter.jpg')}
                />
                <p className="mt-4 text-gray-600">
                  Clean, vibrant terrazzo wall floor restored luster
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