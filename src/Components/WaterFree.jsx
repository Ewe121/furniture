import React from 'react';
import vectorfrd from "../assets/veed.svg";
import waterFree from "../assets/WaterFree.svg";

const WaterFree = () => {
  return (
    <div className=" rounded-[16px] flex flex-col md:flex-row items-center justify-between 
                    gap-8 md:gap-[10px] mx-6 md:mx-[4] lg:mx-[100px]  bg-[#F0F8FA] text-[#39302A] 
                    mt-[80px] mb-[40px] p-6 md:py-6 md:p-0">
      
      {/* LEFT TEXT CONTENT */}
      <div className="lg:pl-[64px] md:pl-[24px] md:text-left">
        <p className="text-2xl md:text-3xl font-semibold  pb-[16px]">Waste free</p>
        <p className="max-w-sm md:w-[400px] font-dmSans font-medium text-base md:text-[22px] leading-6 md:leading-[32px]">
          Last year we saved 522 tons of furniture from landfills. With your help, we can do even more
        </p>

        {/* BUTTON */}
        <button
          className="flex items-center justify-center lg:justify-start gap-2.5 font-medium py-2.5 px-6 rounded-full text-base sm:text-lg text-[#ED6538] transition-all duration-300 hover:scale-105 mt-6 lg:mt-[52px] border-[#ED6538] border-2"
        >
          Start shopping
          <img src={vectorfrd} alt="arrow" className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center md:pr-[24px]">
        <img src={waterFree} alt="waste free" className="max-h-[300px] sm:max-h-[350px] lg:max-h-[400px]" />
      </div>
    </div>
  );
};

export default WaterFree;
