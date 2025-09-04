import React, { useState } from 'react';
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '../components/icons/SocialIcons';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000); // Reset message after 5 seconds
  };

  return (
    <div className="bg-white">
      <header className="bg-leo-maroon text-center py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
          <p className="mt-4 text-xl text-leo-gold">We'd love to hear from you. Let's connect and build something great together!</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-leo-maroon mb-4">Contact Details</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-leo-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span>contact@roaringstars.org</span>
                </p>
                <p className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-leo-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span>+1 (234) 567-890</span>
                </p>
                <p className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-leo-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>Community City, USA</span>
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-leo-maroon mb-4">Follow Us</h2>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-leo-maroon"><FacebookIcon /></a>
                <a href="#" className="text-gray-600 hover:text-leo-maroon"><InstagramIcon /></a>
                <a href="#" className="text-gray-600 hover:text-leo-maroon"><LinkedInIcon /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-leo-maroon mb-2">Send us a Message</h2>
            <p className="text-gray-600 mb-6">Interested in joining or have a question? Drop us a line!</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-leo-maroon focus:border-leo-maroon" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-leo-maroon focus:border-leo-maroon" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message / Interest in Joining</label>
                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-leo-maroon focus:border-leo-maroon"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-leo-maroon hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-leo-maroon transition-colors duration-300">
                  Send Message
                </button>
              </div>
              {isSubmitted && (
                <p className="text-center text-green-600 font-medium">Thank you for your message! We'll get back to you soon.</p>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
