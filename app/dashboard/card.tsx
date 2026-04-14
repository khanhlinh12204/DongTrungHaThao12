"use client";
import React from 'react';

const Banner = () => {
  return (
    <div className="w-full py-10 bg-[#f0f0f0] bg-[url('/Picture/banner-product.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">

      <div className="flex flex-col lg:flex-row lg:overflow-x-auto lg:snap-x lg:snap-mandatory lg:scroll-smooth gap-8 lg:gap-6 px-5 lg:px-20 py-5 no-scrollbar items-center lg:justify-center">

        {/* Banner 1 */}
        <div className="w-full max-w-[450px] lg:w-[650px] lg:min-w-[750px] h-[350px] lg:h-[260px] snap-center rounded-[30px] lg:rounded-[40px] relative flex items-center justify-center overflow-hidden bg-[url('/Picture/product1.jpg')] bg-center bg-cover group flex-shrink-0 shadow-lg">
          <div className="w-[90%] h-[85%] bg-white/10 border border-white/20 rounded-[25px] lg:rounded-[35px] flex items-end lg:items-center px-6 lg:px-12 pb-8 lg:pb-0 relative">
            <div className="z-10 w-full flex justify-center lg:justify-start">
              <button className="lg:mt-[140px] px-8 lg:px-10 py-3 lg:py-3 rounded-full font-bold bg-[#2d6a4f] text-white transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm lg:text-base">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="w-full max-w-[450px] lg:w-[650px] lg:min-w-[750px] h-[350px] lg:h-[260px] snap-center rounded-[30px] lg:rounded-[40px] relative flex items-center justify-center overflow-hidden bg-[url('/Picture/product2.jpg')] bg-center bg-cover group flex-shrink-0 shadow-lg">
          <div className="w-[90%] h-[85%] bg-white/10 border border-white/20 rounded-[25px] lg:rounded-[35px] flex items-end lg:items-center px-6 lg:px-12 pb-8 lg:pb-0 relative">
            <div className="z-10 w-full flex justify-center lg:justify-start">
              <button className="lg:mt-[140px] px-8 lg:px-10 py-3 lg:py-3 rounded-full font-bold bg-[#ff4d6d] text-white transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm lg:text-base">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;