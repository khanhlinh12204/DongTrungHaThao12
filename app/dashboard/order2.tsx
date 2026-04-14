"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import Link from 'next/link';
import { productsDTHT } from "@/app/data/productDTHT";

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const tabs = [
    { id: 'dong-trung-tuoi', label: 'Đông trùng tươi' },
    { id: 'dong-trung-mat-ong', label: 'Đông trùng mật ong' },
    { id: 'dong-trung-de', label: 'Đông trùng đế' },
    { id: 'dong-trung-kho', label: 'Đông trùng khô' },
    { id: 'dong-trung-bot', label: 'Đông trùng bột' }
];

export default function PremiumGiftSet() {
    const [activeTab, setActiveTab] = useState('dong-trung-tuoi');

    const displayProducts = productsDTHT.slice(0, 10);

    return (
        <section className="relative w-full py-[30px] overflow-hidden text-center bg-[#fdf8f1] bg-[url('/Picture/banner-phu-2.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
            <div className="max-w-[1200px] mx-auto px-5">

                {/* Header */}
                <div className="mb-[30px]">
                    <h2 className="text-[32px] md:text-[42px] font-[800] tracking-[3px] uppercase mb-[25px] text-[#451a03] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                        ĐÔNG TRÙNG HẠ THẢO
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.id}
                                href={`/products/DTHT/${tab.id}`}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    relative px-6 py-[10px] rounded-[30px] text-[14px] font-[600] cursor-pointer overflow-hidden transition-all duration-500 ease-out border shadow-sm group
                                    ${activeTab === tab.id
                                        ? 'bg-gradient-to-b from-[#92400e] to-[#451a03] text-white border-none shadow-[0_5px_15px_rgba(69,26,3,0.4)]'
                                        : 'bg-white text-[#8a5a00] border-[#eee] hover:text-white hover:-translate-y-[3px] hover:border-transparent hover:bg-gradient-to-br hover:from-[#d4af37] hover:via-[#f1c40f] hover:to-[#b8860b] hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)]'}
                                `}
                            >
                                <span className="relative z-10">{tab.label}</span>
                                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-500 group-hover:left-full" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Slider */}
                <div className="relative px-0 sm:px-[60px] ">
                    <Swiper
                        modules={[Navigation, Pagination, Mousewheel]}
                        spaceBetween={20}
                        slidesPerView={1.5}
                        navigation
                        pagination={{ clickable: true }}
                        mousewheel={{ forceToAxis: true }}
                        grabCursor={true}
                        breakpoints={{
                            640: { slidesPerView: 2.2 },
                            1024: { slidesPerView: 3.5 },
                            1280: { slidesPerView: 4.5 },
                        }}
                        className="!pb-12 !overflow-visible custom-swiper [&>.swiper-pagination]:!relative [&>.swiper-pagination]:!mt-8"

                    >
                        {displayProducts.map((product) => (
                            <SwiperSlide key={product.id} className="h-auto">
                                <div className="flex flex-col h-full bg-transparent rounded-[30px] overflow-hidden border-b border-[#604c4c] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)]">

                                    {/* CLICK */}
                                    <Link href={`/products/${product.groupSlug}/${product.categorySlug}/${product.slug}`}>

                                        {/* IMAGE */}
                                        <div className="relative w-full h-[220px] overflow-hidden border-b border-[#f3f3f3] p-0">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full p-[15px] object-contain"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white via-white/50 to-transparent z-[1]" />
                                        </div>

                                        {/* INFO */}
                                        <div className="relative z-[2] px-4 pt-[5px] -mt-[10px] mb-5 border-b border-[#f3f3f3]">
                                            <h3 className="text-[15px] font-[700] text-[#451a03] uppercase min-h-[40px] flex items-center justify-center mt-[15px]">
                                                {product.name}
                                            </h3>

                                            <div className="text-[16px] font-[800] text-[#c2410c] mb-[15px]">
                                                {product.price}đ
                                            </div>
                                        </div>

                                    </Link>

                                    {/* BUTTON */}
                                    <Link href={`/products/${product.groupSlug}/${product.categorySlug}/${product.slug}`}>
                                        <button className="flex items-center justify-center gap-2 w-full max-w-[140px] mx-auto mb-2 py-[10px] rounded-[25px] bg-gradient-to-b from-[#d97706] to-[#92400e] text-white text-[13px] font-[700] transition-all hover:brightness-115 hover:shadow-[0_4px_10px_rgba(109,74,45,0.4)]">
                                            🛒 Chọn mua
                                        </button>
                                    </Link>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* BUTTON MORE */}
                <Link href="/products/DTHT">
                    <button className="px-7 py-[14px] rounded-full font-[700] text-[15px] text-[#8a5a00] bg-gradient-to-br from-[#fff6cc] via-[#ffe9a8] to-[#fff9e6] border-2 border-yellow-500/40 shadow-[0_0_6px_rgba(255,215,0,0.4),0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_0_10px_rgba(255,215,0,0.6),0_8px_20px_rgba(0,0,0,0.12)]">
                        Xem thêm 20 sản phẩm khác →
                    </button>
                </Link>

            </div>
        </section>
    );
}