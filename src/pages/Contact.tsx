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
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Terrazzo Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Location: ${formData.location}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:marci@marbleperfect.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
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
                    <a href="tel:6033511827" className="text-terrazzo-600 hover:text-terrazzo-700 text-lg">
                      (603) 351-1827
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Call for immediate assistance</p>
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
            href="tel:6033511827"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-terrazzo-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call (603) 351-1827 Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;