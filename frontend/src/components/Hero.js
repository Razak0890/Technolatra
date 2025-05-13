import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center" id="home">
      <div className="hero-glow top-1/4 left-1/4"></div>
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
          alt="AI Technology" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 md:pr-16">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-shadow mb-4">
              Discover the Future of <span className="gradient-text">Technology & AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Explore how artificial intelligence is revolutionizing our world and enhancing human potential across industries.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#features" className="cta-button text-center">
                Explore Features
              </a>
              <a href="#applications" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-background-dark transition-all text-center">
                Learn More
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5 mt-12 md:mt-0 hidden md:block">
            <div className="relative float-animation">
              <div className="absolute -inset-4 rounded-full bg-accent opacity-20 blur-xl"></div>
              <div className="glass-card p-6 relative">
                <div className="flex flex-col space-y-4">
                  <div className="h-2 w-24 bg-accent rounded-full"></div>
                  <div className="h-2 w-36 bg-primary-light rounded-full opacity-70"></div>
                  <div className="h-2 w-16 bg-primary-light rounded-full opacity-50"></div>
                  <div className="flex space-x-3 mt-4">
                    <div className="h-10 w-10 rounded-full bg-accent"></div>
                    <div className="h-10 w-10 rounded-full bg-primary-light"></div>
                    <div className="h-10 w-10 rounded-full bg-white bg-opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a href="#features" className="animate-bounce">
          <svg className="w-10 h-10 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
