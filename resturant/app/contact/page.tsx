'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-amber-900 mb-12 text-center">
          Get In Touch
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-amber-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-amber-900">Address</h3>
                  <p className="text-gray-600">
                    123 Restaurant Street<br />
                    Galle, Sri Lanka 80000
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-amber-900">Phone</h3>
                  <p className="text-gray-600">+94 91 123 4567</p>
                </div>
                <div>
                  <h3 className="font-bold text-amber-900">Email</h3>
                  <p className="text-gray-600">info@gallerestaurant.com</p>
                </div>
                <div>
                  <h3 className="font-bold text-amber-900">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Sunday<br />
                    11:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-amber-900 font-bold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-amber-200 rounded focus:outline-none focus:border-amber-900"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-amber-900 font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-amber-200 rounded focus:outline-none focus:border-amber-900"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-amber-900 font-bold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-amber-200 rounded focus:outline-none focus:border-amber-900"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-900 text-white py-3 rounded font-bold hover:bg-amber-800 transition"
              >
                Send Message
              </button>
              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
                  Thank you! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
