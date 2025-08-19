import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Historic Church Restoration',
      location: 'Portsmouth, NH',
      image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete restoration of 100-year-old terrazzo floors in a historic church.'
    },
    {
      id: 2,
      title: 'Commercial Office Building',
      location: 'Boston, MA',
      image: 'https://images.pexels.com/photos/6474468/pexels-photo-6474468.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Polishing and sealing of terrazzo floors in a busy commercial space.'
    },
    {
      id: 3,
      title: 'Residential Home Entrance',
      location: 'Portland, ME',
      image: 'https://images.pexels.com/photos/6474469/pexels-photo-6474469.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Restoration of terrazzo entryway with custom color matching.'
    },
    {
      id: 4,
      title: 'School Hallway Renovation',
      location: 'Manchester, NH',
      image: 'https://images.pexels.com/photos/6474470/pexels-photo-6474470.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Large-scale terrazzo restoration in high-traffic educational facility.'
    },
    {
      id: 5,
      title: 'Art Deco Building Lobby',
      location: 'Cambridge, MA',
      image: 'https://images.pexels.com/photos/6474472/pexels-photo-6474472.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Careful restoration preserving original Art Deco terrazzo patterns.'
    },
    {
      id: 6,
      title: 'Medical Facility Floors',
      location: 'Nashua, NH',
      image: 'https://images.pexels.com/photos/6474473/pexels-photo-6474473.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Hygienic terrazzo restoration for healthcare environment.'
    }
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
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
                  Stained and dull terrazzo wall surface
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
                  Clean, vibrant terrazzo wall with restored luster
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