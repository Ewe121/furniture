import React from "react";
import mencarry from "../assets/menchair.svg";
import bedroom from "../assets/bedroom.svg";
import vectorfrd from "../assets/veed.svg";

const Hassle = () => {
  return (
    <div className="rounded-[16px] flex flex-col md:flex-row items-center justify-between 
                    gap-8 md:gap-[10px] mx-6 md:mx-[4] lg:mx-[100px]  bg-[#F0F8FA] text-[#39302A] 
                    mt-[80px] mb-[40px] p-6 md:py-6 md:p-0">
      
      {/* Left Content */}
      <div className="lg:pl-[64px] md:pl-[24px] md:text-left">
        <p className="text-2xl md:text-3xl font-semibold pb-[16px]">Hassle free</p>
        <p className="max-w-sm md:w-[400px] font-dmSans font-thin text-base md:text-[20px] leading-6 md:leading-[32px]">
          Furniture three ways. Rent, rent-to-own, or buy. Your furniture is as flexible as you need it to be.
        </p>

        <button
          className="flex items-center justify-center md:justify-start gap-2.5 font-medium 
                     py-2.5 px-6 md:py-3 md:px-8 rounded-full text-sm md:text-lg 
                     text-[#ED6538] border-2 border-[#ED6538] transition-all duration-300 
                     hover:scale-105 mt-6 md:mt-[52px]"
        >
          Learn More
          <img src={vectorfrd} alt="arrow" className="" />
        </button>
      </div>

      {/* Right Image */}
      <div className="md:pr-[24px] flex justify-center">
        <img src={bedroom} alt="men carrying chair" className="w-full max-w-xs md:max-w-md lg:max-w-lg" />
      </div>
    </div>
  );
};

export default Hassle;
