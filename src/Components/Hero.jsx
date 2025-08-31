import React from 'react';
import hero from '../assets/hero.svg';
import ArrowFwd from '../assets/arrowdown.svg';

const FurniturePromo = () => {
  return (
    <section 
      className="py-12 px-5 sm:py-20 sm:px-8 lg:px-[100px] flex flex-col sm:flex-row justify-between items-center gap-10" 
      style={{ backgroundColor: 'rgba(237, 101, 59, 0.08)' }}
    >
      {/* Text Content */}
      <div className="sm:max-w-[50%]">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-snug">
          An innovative way to <br className="hidden sm:block" /> 
          make furniture lighter
        </h1>
        
        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8">
          Discover hassle-free delivery, free assembly and 
          <br className="hidden md:block" /> 
          the flexibility to rent, rent-to-own or buy.
        </p>
        
        {/* CTA Button */}
        <button
          className="flex items-center gap-2 text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: '#ED653B' }}
        >
          Start shopping
          <img 
            src={ArrowFwd}
            alt="Arrow"
            className="w-5 h-5"
          />
        </button>
      </div>
      
      {/* Image */}
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
        <img 
          src={hero} 
          alt="Furniture promo" 
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
        />
      </div>
    </section>
  );
};

export default FurniturePromo;
