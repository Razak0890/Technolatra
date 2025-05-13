import React from 'react';

const CTA = () => {
  return (
    <section className="py-24 relative" id="contact">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4" 
          alt="Abstract Technology Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark to-transparent opacity-90"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 backdrop-blur-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Start Your <span className="gradient-text">AI Journey</span> Today</h2>
            <p className="text-xl text-gray-300 mb-12 text-center">
              Join the thousands of forward-thinking organizations harnessing the power of AI with Technolatra.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-gray-600 focus:border-accent focus:ring-1 focus:ring-accent text-white placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-gray-600 focus:border-accent focus:ring-1 focus:ring-accent text-white placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-gray-600 focus:border-accent focus:ring-1 focus:ring-accent text-white placeholder-gray-400"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">How can we help?</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-gray-600 focus:border-accent focus:ring-1 focus:ring-accent text-white placeholder-gray-400"
                  placeholder="Tell us about your AI needs..."
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input 
                  id="privacy" 
                  type="checkbox" 
                  className="h-4 w-4 border-gray-300 rounded text-accent focus:ring-accent"
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-300">
                  I agree to Technolatra's Privacy Policy and Terms of Service
                </label>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="cta-button w-full md:w-auto md:px-12"
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
