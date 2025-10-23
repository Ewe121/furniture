import React from "react";
import mencarry from "../assets/menchair.svg";
import vectorfrd from "../assets/veed.svg";

const Risk = () => {
  return (
    <div className="rounded-[16px] flex flex-col md:flex-row items-center justify-between 
                    bg-[#FEF3EF] mx-6 md:mx-[4] lg:mx-[100px] my-[40px] md:py-8 p-6 md:p-0 gap-8 md:gap-12">
      
      {/* Left Image */}
      <div className="md:pl-[24px] flex justify-center">
        <img
          src={mencarry}
          alt="men carrying chair"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>

      {/* Right Text */}
      <div className="lg:pr-[64px] text-[#39302A] md:text-left">
        <p className="text-2xl md:text-3xl font-semibold  pb-[16px]">Risk free</p>
        <p className="max-w-sm md:w-[400px] font-dmSans font-thin text-base md:text-[20px] leading-6 md:leading-[32px] pr-[24px]">
          Furniture three ways. Rent, rent-to-own, or buy. Your furniture is as
          flexible as you need it to be.
        </p>

        <button
          className="flex items-center justify-center md:justify-start gap-2.5 
                     font-medium py-2.5 px-6 md:py-3 md:px-8 rounded-full 
                     text-sm md:text-lg text-[#ED6538] border-2 border-[#ED6538] 
                     transition-all duration-300 hover:scale-105 
                     mt-6 md:mt-[52px]"
        >
          Start shopping
          <img src={vectorfrd} alt="arrow" className="" />
        </button>
      </div>
    </div>
  );
};

export default Risk;
