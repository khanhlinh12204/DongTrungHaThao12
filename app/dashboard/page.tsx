"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // 1. Import useRouter
import Image from "next/image";
import { Truck, CreditCard, RotateCcw, BadgePercent } from "lucide-react";
import OrderSection from "./oder1";
import PremiumGiftSet from "./order2";
import OrderSection3 from "./order3";
import OrderSection4 from "./order4";
import OrderSection5 from "./order5";
import TestimonialSlider from "./rate";
import Banner from "./card";
import Link from "next/link";

const slides = [
    {
        title: "Đông Trùng Hạ Thảo",
        image: "/Picture/banner-chinh-1.jpg",
        description: "Tinh túy đông trùng hạ thảo – Chăm sóc sức khỏe từ bên trong, mang đến nguồn năng lượng và sự dẻo dai mỗi ngày.",
        link: "/products/DTHT"
    },
    {
        title: "Nước Đông Trùng",
        image: "/Picture/banner-chinh_2.jpg",
        description: "Chiết xuất từ đông trùng hạ thảo, hỗ trợ tăng cường sức đề kháng, giảm mệt mỏi và nâng cao thể lực.",
        link: "/products/healthy/nuoc-dong-trung"
    },
    {
        title: "Trà Đông Trùng",
        image: "/Picture/banner-chinh-3.jpg",
        description: "Kết hợp đông trùng hạ thảo cùng thảo mộc tự nhiên, hỗ trợ tăng cường sức đề kháng và mang lại cảm giác thư thái.",
        link: "/products/trathaomoc"
    },
];

const features = [
    { icon: BadgePercent, title: "KHÁCH HÀNG THÂN THIẾT", desc: "Mua hàng tích điểm và nhận ưu đãi đặc biệt" },
    { icon: Truck, title: "GIAO HÀNG UY TÍN", desc: "Giao hàng nhanh chóng theo yêu cầu, tiết kiệm và chính xác" },
    { icon: CreditCard, title: "THANH TOÁN TIỆN LỢI", desc: "Tiện lợi, an toàn, trả tiền khi nhận hàng hoặc chuyển khoản" },
    { icon: RotateCcw, title: "ĐỔI TRẢ MIỄN PHÍ", desc: "Kiểm tra khi nhận hàng và hoàn trả nếu không hài lòng" },
];

function Appdarkboard() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const router = useRouter(); // 2. Khai báo router

    const handleNext = () => {
        setFade(false);
        setTimeout(() => {
            setIndex((prev) => (prev + 1) % slides.length);
            setFade(true);
        }, 200);
    };

    const handlePrev = () => {
        setFade(false);
        setTimeout(() => {
            setIndex((prev) => (prev - 1 + slides.length) % slides.length);
            setFade(true);
        }, 200);
    };

    return (
        <div className="relative overflow-hidden">
            {/* HERO SECTION */}
            <div className="relative h-[70vh] w-full overflow-hidden text-white">
                <div className={`absolute inset-0 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
                    <Image
                        src={slides[index].image}
                        alt="background"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/20" />

                <div className="absolute top-[30%] left-[5%] max-w-[400px] z-10">
                    <h1 className="text-5xl font-bold leading-tight">{slides[index].title}</h1>
                    <p className="my-5 text-gray-200">{slides[index].description}</p>
                    <Link href={slides[index].link || "#"}>
                        <button className="px-8 py-2.5 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors">
                            Khám phá ngay
                        </button>
                    </Link>
                </div>

                {/* Slider Cards */}
                <div className="absolute right-[5%] bottom-[25%] flex gap-5 z-20">
                    {slides.map((item, i) => {
                        const isActive = i === index;
                        const isNext = i === (index + 1) % slides.length;

                        return (
                            <div
                                key={i}
                                onClick={() => router.push(slides[i].link || "#")}
                                className={`relative w-[180px] h-[260px] rounded-[20px] overflow-hidden cursor-pointer transition-all duration-500 
                                    ${isActive ? "scale-115 opacity-100 z-30" : "scale-90 opacity-50"}
                                    ${isNext ? "translate-x-[30px]" : ""} 
                                    ${!isActive && !isNext ? "-translate-x-[30px]" : ""}
                                `}
                            >
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                <h3 className="absolute bottom-[140px] left-2.5 -translate-y-5 text-[#ff6a00] text-[28px] font-bold drop-shadow-[0_2px_2px_rgba(255,255,255,1)]">
                                    {item.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>

                {/* Controls */}
                <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 flex gap-5 z-20">
                    <button onClick={handlePrev} className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/20 transition-all">‹</button>
                    <button onClick={handleNext} className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/20 transition-all">›</button>
                </div>
            </div>

            {/* FEATURES SECTION */}
            <section className="relative z-30 -mt-5 px-4 pb-12">
                <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {features.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className="bg-white/85 backdrop-blur-md rounded-[20px] p-5 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                                <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#ff9a00] to-[#ff6a00] flex items-center justify-center text-white mb-3 shadow-[0_5px_15px_rgba(255,106,0,0.4)]">
                                    <Icon size={20} />
                                </div>
                                <h3 className="text-[15px] font-bold text-gray-800 mb-1.5">{item.title}</h3>
                                <p className="text-[13px] text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <OrderSection />
            <PremiumGiftSet />
            <OrderSection3 />
            <OrderSection4 />
            <OrderSection5 />
            <TestimonialSlider />
        </div>
    );
}

export default Appdarkboard;