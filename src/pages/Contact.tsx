import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import ServiceAreaMap from '../components/ServiceAreaMap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', location: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-terrazzo-50 to-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Boston Terrazzo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to restore your terrazzo floors? Get in touch for your free evaluation
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-terrazzo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-terrazzo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:6033932776" className="text-terrazzo-600 hover:text-terrazzo-700 text-lg">
                      (603) 393-2776
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Call for immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-terrazzo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-terrazzo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@bostonterrazzo.com" className="text-terrazzo-600 hover:text-terrazzo-700">
                      info@bostonterrazzo.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-terrazzo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-terrazzo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <div className="text-gray-700">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Emergency calls only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-terrazzo-50 rounded-lg border border-terrazzo-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Evaluation</h3>
                <p className="text-gray-700">
                  Don't disregard the potential of terrazzo just because it seems neglected or covered 
                  by unsightly coatings. Our qualified restoration professionals, experienced with terrazzo, 
                  can turn that potential into a beautiful treasure. We offer free, no-obligation evaluations 
                  for all projects.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800">Thank you! We'll be in touch soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terrazzo-600 focus:border-terrazzo-600 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terrazzo-600 focus:border-terrazzo-600 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terrazzo-600 focus:border-terrazzo-600 transition-colors"
                    placeholder="(603) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Location/City *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terrazzo-600 focus:border-terrazzo-600 transition-colors"
                    placeholder="City, State (e.g., Manchester, NH)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terrazzo-600 focus:border-terrazzo-600 transition-colors resize-vertical"
                    placeholder="Tell us about your terrazzo floors and what services you're interested in..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-terrazzo-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-terrazzo-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Area</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve residential and commercial clients throughout New England
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Coverage Areas</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-terrazzo-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">New Hampshire</h4>
                      <p className="text-gray-600">Statewide coverage including Manchester, Nashua, Concord, Portsmouth, and surrounding areas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-terrazzo-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Maine</h4>
                      <p className="text-gray-600">Southern Maine including Portland, Biddeford, Sanford, and York County</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-terrazzo-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Massachusetts</h4>
                      <p className="text-gray-600">Eastern Massachusetts including Boston, Cambridge, Lowell, Lawrence, and Essex County</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-terrazzo-50 rounded-lg border border-terrazzo-200">
                  <p className="text-terrazzo-800 text-sm">
                    <strong>Not sure if we serve your area?</strong> Give us a call! We may be able to 
                    accommodate special requests or recommend trusted partners in your region.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <ServiceAreaMap />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-terrazzo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Emergency Terrazzo Repairs
          </h2>
          <p className="text-xl text-terrazzo-100 mb-8 max-w-2xl mx-auto">
            Water damage or urgent repairs? We offer emergency services for critical terrazzo restoration needs.
          </p>
          <a
            href="tel:6033932776"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-terrazzo-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call (603) 393-2776 Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;