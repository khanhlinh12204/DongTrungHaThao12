"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import Link from "next/link";
import { productTra } from "@/app/data/productTra"; 

export default function OrderSection3() {
    const displayProducts = productTra.slice(0, 10);

    return (
        <section className="relative w-full py-[30px] min-h-screen overflow-hidden bg-[#fcfaf7] bg-[url('/Picture/baner-phu-3.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
            <div className="relative z-10 max-w-[1200px] mx-auto px-[30px]">

                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="relative inline-block text-[36px] sm:text-[52px] font-bold tracking-[3px] leading-tight transition-transform duration-300 hover:scale-105 animate-glow bg-gradient-to-br from-[#0f2a1d] to-[#a65a1f] bg-clip-text text-transparent before:content-['🍃'] before:mr-[10px]">
                        TRÀ THẢO DƯỢC <br />
                        <span className="block text-[1rem] sm:text-[1.1rem] text-[#8b5e3c] tracking-[4px] uppercase font-medium mt-2">
                            Sự kết hợp hoàn hảo giữa thiên nhiên và sức khỏe.
                        </span>
                    </h2>
                </div>

                {/* Slider */}
                <div className="py-5 pb-[70px] w-full overflow-hidden">
                    <Swiper
                        modules={[Navigation, Pagination, Mousewheel, Autoplay]}
                        spaceBetween={25}
                        slidesPerView={1.2}
                        navigation
                        pagination={{ clickable: true, dynamicBullets: true }}
                        mousewheel={{ forceToAxis: true }}
                        grabCursor={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 3.5 },
                        }}
                        className="custom-swiper-3 !overflow-visible"
                    >
                        {displayProducts.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="group bg-white/12 backdrop-blur-[16px] rounded-[24px] border border-white/25 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] p-6 transition-all duration-300 hover:-translate-y-[6px]">

                                    {/* ✅ Link toàn bộ card */}
                                    <Link
                                        href={`/products/${item.groupSlug}/${item.categorySlug}/${item.slug}`}
                                        className="flex flex-col h-full"
                                    >
                                        {/* Image Box */}
                                        <div className="relative w-full aspect-[4/3] bg-[#fdfdfd] overflow-hidden rounded-xl">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="pt-6 flex flex-col h-full">
                                            <h3 className="text-[1.3rem] sm:text-[1.7rem] font-semibold text-[#222] leading-tight mb-1">
                                                {item.name}
                                            </h3>
                                            <p className="text-[0.9rem] text-[#777] leading-relaxed min-h-[2rem]">
                                                {item.originalPrice ? `Giá gốc: ${item.originalPrice}` : "Thảo dược cao cấp"}
                                            </p>

                                            <div className="flex justify-between items-center mt-4 pt-[15px] border-t border-[#f5f2ed]">
                                                <span className="text-[1.3rem] text-[#8b5e3c] font-bold">
                                                    {item.price}
                                                </span>

                                                <button className="flex items-center justify-center gap-2 w-full max-w-[140px] mx-auto mb-2 py-[10px] rounded-[25px] bg-gradient-to-b from-[#d97706] to-[#92400e] text-white text-[13px] font-[700] transition-all hover:brightness-115 hover:shadow-[0_4px_10px_rgba(109,74,45,0.4)]">
                                                    🛒 Chọn mua
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* More Button */}
                <Link href="/products/trathaomoc">
                    <button className="relative z-20 block mx-auto px-[28px] py-[12px] rounded-full font-medium text-[1rem] tracking-[0.5px] text-white bg-gradient-to-br from-[#1f3d2b] to-[#c47a2c] shadow-[0_4px_12px_rgba(0,0,0,0.15),0_0_10px_rgba(196,122,44,0.25)] transition-all duration-300 hover:brightness-110 active:scale-95">
                        Khám phá các loại trà →
                    </button>
                </Link>

            </div>

            <style jsx global>{`
                @keyframes glow {
                    from { text-shadow: 0 5px 15px rgba(0,0,0,0.1), 0 0 10px rgba(196,122,44,0.2); }
                    to { text-shadow: 0 10px 30px rgba(0,0,0,0.2), 0 0 25px rgba(196,122,44,0.4); }
                }
                .animate-glow {
                    animation: glow 3s ease-in-out infinite alternate;
                }
                .custom-swiper-3 .swiper-button-next,
                .custom-swiper-3 .swiper-button-prev {
                    color: #1a3a32 !important;
                    background: rgba(255, 255, 255, 0.9) !important;
                    width: 48px !important;
                    height: 48px !important;
                    border-radius: 50% !important;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.08) !important;
                    transition: all 0.3s !important;
                }
                .custom-swiper-3 .swiper-button-next:hover,
                .custom-swiper-3 .swiper-button-prev:hover {
                    background: #1a3a32 !important;
                    color: #fff !important;
                }
                .custom-swiper-3 .swiper-pagination-bullet-active {
                    background: #8b5e3c !important;
                }
                @media (max-width: 640px) {
                    .custom-swiper-3 .swiper-button-next, .custom-swiper-3 .swiper-button-prev { display: none !important; }
                }
            `}</style>
        </section>
    );
}