import React from 'react';

const Applications = () => {
  const applications = [
    {
      title: "AI in Healthcare",
      description: "Revolutionary diagnostic tools, personalized treatment plans, and medical research acceleration through AI-powered analytics.",
      image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31",
      alt: "AI in Healthcare"
    },
    {
      title: "AI in Education",
      description: "Personalized learning experiences, intelligent tutoring systems, and educational analytics to enhance student outcomes.",
      image: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1",
      alt: "AI in Education"
    },
    {
      title: "AI in Business",
      description: "Automated workflows, predictive customer insights, and enhanced decision-making tools for business transformation.",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643",
      alt: "AI in Business"
    }
  ];

  return (
    <section className="py-20 relative" id="applications">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Real-World <span className="gradient-text">Applications</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore how AI technology is revolutionizing various industries and improving lives.
          </p>
        </div>
        
        <div className="space-y-24">
          {applications.map((app, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-accent opacity-20 blur-xl"></div>
                  <div className="relative glass-card overflow-hidden rounded-2xl aspect-video">
                    <img 
                      src={app.image} 
                      alt={app.alt} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4">{app.title}</h3>
                <p className="text-xl text-gray-300 mb-6">{app.description}</p>
                <div className="glass-card p-6">
                  <h4 className="text-accent font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {[1, 2, 3].map((item) => (
                      <li key={item} className="flex items-start">
                        <svg className="w-6 h-6 text-accent mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>
                          {index === 0 && item === 1 && "Early disease detection and prevention"}
                          {index === 0 && item === 2 && "Optimized healthcare resource allocation"}
                          {index === 0 && item === 3 && "Reduced medical errors and improved patient outcomes"}
                          
                          {index === 1 && item === 1 && "Personalized learning paths for every student"}
                          {index === 1 && item === 2 && "24/7 accessible educational resources and support"}
                          {index === 1 && item === 3 && "Democratized access to quality education globally"}
                          
                          {index === 2 && item === 1 && "Enhanced customer experience through personalization"}
                          {index === 2 && item === 2 && "Automated routine tasks to free human creativity"}
                          {index === 2 && item === 3 && "Data-driven decision making for strategic advantage"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
