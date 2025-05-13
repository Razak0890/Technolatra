import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Advanced Learning Algorithms",
      description: "Our cutting-edge machine learning algorithms adapt and evolve with every interaction, becoming more personalized to your needs.",
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Natural Language Processing",
      description: "Communicate naturally with our AI systems, which understand context, nuance, and even emotional undertones in human language.",
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "Predictive Analytics",
      description: "Harness the power of predictive modeling to anticipate needs, solve problems before they arise, and optimize decision-making.",
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Seamless Integration",
      description: "Easily integrate our AI solutions with your existing systems and workflows, with minimal disruption and maximum efficiency.",
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 relative" id="features">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-background-dark to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background-dark to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Cutting-Edge <span className="gradient-text">AI Features</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our innovative AI technologies can transform the way you work, learn, and live.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
              <div className="mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
