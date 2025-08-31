import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Design Experts.
        </h1>
        
        {/* Subheading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
          Helping Mission-Focused B2B SaaS Companies.
        </h2>
        
        {/* Description */}
        <p className="text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
          Halal Lab is a world-class UI/UX design team that specializes <br /> in B2B SaaS UI/UX design projects.
        </p>
        
        {/* Divider */}
        <div className="border-t border-gray-200 w-16 mx-auto mb-12"></div>
        
        {/* Dribbble Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <div className="text-lg font-medium text-gray-700">Dribbble</div>
          <div className="text-2xl font-bold text-gray-900">Hugelcons</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;