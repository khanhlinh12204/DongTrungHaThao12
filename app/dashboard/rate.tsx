"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles (Bắt buộc)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
    {
        id: 1,
        name: "Chị Hồng Hạnh",
        location: "Đà Nẵng",
        comment: "Đông trùng hạ thảo thơm, vị dễ uống hơn tưởng tượng. Dùng 2 tuần bắt đầu thấy có hiệu quả khi ngủ ngon hơn, người dễ chịu, giảm được tình trạng hay mệt mỏi.",
        img: "/Picture/dongtrung.jpg",
        stars: 5
    },
    {
        id: 2,
        name: "Anh Minh Tuấn",
        location: "Hà Nội",
        comment: "Sản phẩm đóng gói rất sang trọng, thích hợp làm quà tặng. Về chất lượng thì không có gì để chê, uống vào thấy tinh thần sảng khoái hẳn ra.",
        img: "/Picture/yen3.jpg",
        stars: 5
    },
    {
        id: 3,
        name: "Cô Lan Hương",
        location: "TP. Hồ Chí Minh",
        comment: "Tôi đã dùng nhiều loại nhưng loại này vị rất thanh. Đặc biệt là sau khi dùng huyết áp của tôi ổn định hơn. Sẽ tiếp tục ủng hộ shop lâu dài.",
        img: "/Picture/tra2.jpg",
        stars: 5
    }
];

export default function TestimonialSlider() {
    return (
        <section className="relative py-2.5 px-2.5 bg-[#f0f2f5] overflow-hidden z-10">
            {/* Background Blobs (Hiệu ứng khối màu chạy nền) */}
            <div className="absolute -top-[100px] -right-[100px] w-[600px] h-[600px] blur-[80px] rounded-full opacity-40 z-[-1] animate-move-blob bg-gradient-to-r from-[#fef7f4] via-[#f2b394] to-[#f3a077]"></div>
            <div className="absolute -bottom-[100px] -left-[100px] w-[600px] h-[600px] blur-[80px] rounded-full opacity-40 z-[-1] animate-move-blob bg-gradient-to-r from-[#fef7f4] via-[#f2b394] to-[#f3a077]"></div>

            <div className="text-center mb-5 relative">
                <span className="text-[#ff9f43] font-extrabold tracking-[3px] text-[0.9rem] uppercase">Feedback</span>
                <h2 className="text-[2.8rem] text-[#1a1a1a] mt-2.5 font-extrabold leading-tight max-sm:text-3xl">
                    Khách hàng nói gì về chúng tôi
                </h2>
            </div>

            <Swiper
                spaceBetween={50}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="max-w-[1100px] !pb-20 !pt-5 testimonial-swiper"
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="group flex flex-row items-center gap-[50px] p-[60px] bg-white/40 backdrop-blur-[15px] border border-white/50 rounded-[40px] shadow-2xl transition-all duration-300 hover:bg-white/60 hover:border-[#ff9f43] hover:-translate-y-1.5 h-auto lg:h-[400px] max-md:flex-col-reverse max-md:p-8 max-md:gap-8"
                        >
                            <div className="flex-[1.2] text-left relative z-10">
                                <div className="absolute -top-[70px] -left-[30px] text-[10rem] text-[#ff9f43] opacity-10 leading-none select-none">
                                    “
                                </div>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(item.stars)].map((_, i) => (
                                        <span key={i} className="text-[#f1c40f] text-xl drop-shadow-[0_0_5px_rgba(241,196,15,0.5)]">★</span>
                                    ))}
                                </div>
                                <p className="text-[1.3rem] leading-[1.7] text-[#2d3436] italic font-medium mb-6">
                                    {item.comment}
                                </p>
                                <div>
                                    <h4 className="text-2xl font-extrabold text-[#1a1a1a]">{item.name}</h4>
                                    <p className="text-[#636e72] font-semibold">{item.location}</p>
                                </div>
                            </div>

                            <div className="flex-[0.8] w-full h-[320px] relative max-md:h-[280px]">
                                <div className="w-full h-full rounded-[30px] overflow-hidden relative border-[5px] border-white shadow-lg">
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}