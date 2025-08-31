import React from "react";
import aboutFirst from "../assets/aboutFirst.svg";
import aboutSecond from "../assets/aboutSecond.svg";
import aboutThird from "../assets/aboutThird.svg";

const AboutProduct = () => {
  const features = [
    {
      icon: aboutFirst,
      text: "We provide a high quality rental at an affordable price",
    },
    {
      icon: aboutSecond,
      text: "Feather has made furniture rentals cool again.",
    },
    {
      icon: aboutThird,
      text: "Ease the pain of moving from apartment to apartment.",
    },
  ];

  return (
    <section className="w-full pt-[80px] pb-[56px]">
      {/* Section heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
        About our product
      </h2>

      {/* Responsive grid with padding */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full px-4 sm:px-6 lg:px-24 mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-8 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="mb-4 flex items-center justify-center rounded-full bg-gray-100 w-14 h-14">
              <img src={feature.icon} alt="feature icon" className="w-7 h-7" />
            </div>
            {/* Text */}
            <p className="text-gray-700 text-base md:text-lg">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutProduct;
