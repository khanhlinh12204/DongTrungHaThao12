"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Dữ liệu mẫu (Giữ nguyên)
const HUE_ARTS = [
    {
        id: 1,
        title: "Nguồn gốc sản phẩm",
        description: "Mỗi sản phẩm của Dr. Trung được nuôi trồng và chế biến nghiêm ngặt, giữ nguyên dược chất quý giá. Không chất bảo quản, không hàng kém chất lượng, mang đến sự an tâm tuyệt đối.",
        image: "/Picture/dongtrung9.jpg"
    },
    {
        id: 2,
        title: "Công dụng sức khỏe",
        description: "Đông trùng hạ thảo Dr. Trung giúp tăng cường miễn dịch, cải thiện sức khỏe tổng thể, hỗ trợ giấc ngủ sâu, giảm mệt mỏi và bảo vệ chức năng phổi, thận, tim mạch. Lựa chọn hoàn hảo cho sức khỏe lâu dài.",
        image: "/Picture/anhtet/ankhang.jpg"
    },
    {
        id: 3,
        title: "Chứng nhận & uy tín",
        description: "Sản phẩm được kiểm nghiệm chất lượng nghiêm ngặt, đạt chứng nhận OCOP và các tiêu chuẩn an toàn thực phẩm. Khách hàng hoàn toàn yên tâm về nguồn gốc và chất lượng.",
        image: "/Picture/nuocdongtrung1.jpg"
    },
    {
        id: 4,
        title: "Dòng sản phẩm đa dạng",
        description: "Chúng tôi cung cấp đa dạng sản phẩm: tươi, khô, bột, mật ong kết hợp đông trùng, cùng set quà sức khỏe và Tết đặc biệt. Phù hợp mọi nhu cầu chăm sóc sức khỏe và làm quà tặng.",
        image: "/Picture/tra2.jpg"
    },
    {
        id: 5,
        title: "Liên hệ & mua hàng",
        description: "Đặt hàng dễ dàng qua website, hotline hoặc Fanpage. Chúng tôi tư vấn tận tình và giao hàng nhanh chóng, đảm bảo trải nghiệm mua sắm tiện lợi và an toàn.",
        image: "/Picture/tra4.jpg"
    },
];

export default function HueArtSection() {
    const [index, setIndex] = useState(0);

    const nextCard = () => {
        setIndex((prev) => (prev + 1) % HUE_ARTS.length);
    };
    const BACKGROUND_IMAGE_URL = '/Picture/banner-phu-3.jpg';
    return (
        <div
            className="min-h-screen bg-[#0f0814] text-white flex items-center justify-center p-8 overflow-hidden relative" // Thêm 'relative'
            style={{
                backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,

                backgroundSize: 'cover',      
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> {/* Tăng max-w của container để chứa card to hơn */}

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10"
                >
               
                    <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight italic text-[#3d1a1a]">
                        <span className="text-[#c58940]">Dr. Trung</span> – Tinh hoa thiên nhiên cho sức khỏe của bạn
                    </h1>

                   
                    <p className="text-zinc-800 text-lg leading-relaxed max-w-md font-medium">
                        Dr. Trung là thương hiệu uy tín chuyên cung cấp <span className="text-[#a0522d] font-bold">đông trùng hạ thảo</span> và các dược liệu thiên nhiên chất lượng cao.
                        Sứ mệnh của chúng tôi là mang tinh hoa của thiên nhiên đến với từng gia đình, giúp nâng cao sức khỏe và mang lại cuộc sống tràn đầy năng lượng.
                    </p>
                </motion.div>

                <div className="relative h-[600px] flex items-center justify-center cursor-pointer" onClick={nextCard}>
                    <AnimatePresence mode="popLayout">
                        {HUE_ARTS.map((art, i) => {
                            const position = (i - index + HUE_ARTS.length) % HUE_ARTS.length;

                            if (position > 3) return null; 

                            return (
                                <motion.div
                                    key={art.id}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{
                                        opacity: 1 - position * 0.2, 
                                        x: position * 50,            
                                        z: -position * 50,          
                                        scale: 1 - position * 0.05,  
                                    }}
                                    exit={{ opacity: 0, x: -200, scale: 0.8 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    
                                    className="absolute w-[380px] h-[530px] rounded-3xl overflow-hidden shadow-2xl border border-white/10" // rounded-3xl cho bo góc mềm hơn khi to
                                    style={{
                                        zIndex: HUE_ARTS.length - position,
                                        backdropFilter: `blur(${position * 4}px)` 
                                    }}
                                >
                        
                                    <div className="relative h-full w-full">
                                        <img
                                            src={art.image}
                                            alt={art.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

 
                                        <div className="absolute bottom-0 p-8"> 
                                            <h3 className="text-2xl  text-yellow-200 mb-3 italic"> 
                                                {art.title}
                                            </h3>
                                            <p className="text-sm text-gray-300 line-clamp-5 leading-relaxed bg-black/50 p-4 rounded-xl backdrop-blur-sm"> 
                                                {art.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>


                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 animate-pulse"> 
                        <ChevronRight size={56} className="text-white/20" /> 
                    </div>
                </div>

            </div>
        </div>
    );
}