import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, HealthTech Innovations",
      quote: "Implementing Technolatra's AI solutions has revolutionized our diagnostic capabilities. We've seen a 40% increase in early detection rates for critical conditions.",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Director of AI Integration, EduFuture",
      quote: "As an educational institution, we've witnessed remarkable improvements in student engagement and learning outcomes since adopting Technolatra's AI systems.",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Operations, Global Enterprises",
      quote: "The predictive analytics features have transformed our decision-making process. We're now able to anticipate market changes with unprecedented accuracy.",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  return (
    <section className="py-20 relative" id="testimonials">
      <div className="absolute inset-0 bg-primary-dark opacity-20 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how Technolatra is empowering organizations to achieve breakthrough results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-8 transition-all duration-300 hover:shadow-glow"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-accent">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                  <p className="text-accent">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              
              <div className="mt-6 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="glass-card py-8 px-6 md:px-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Ready to transform your organization with AI?</h3>
            <a href="#contact" className="cta-button inline-block">Get Started Today</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
