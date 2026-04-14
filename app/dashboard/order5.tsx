"use client";
import Image from "next/image";
import Link from "next/link";
import { healthyProducts, Product } from "../data/productHealthy";
// 1. Nhớ import đúng file chứa data của bạn


export default function OrderSection5() {
    const displayProducts = healthyProducts.slice(0, 8);

    return (
        <section className="relative w-full min-h-[70vh] py-[60px] px-5 text-center bg-[#fdfaf7] bg-[url('/Picture/banner-phu-5.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">

            {/* Title */}
            <div className="text-center mb-10">
                <h2 className="relative inline-block text-[36px] sm:text-[52px] font-bold tracking-[3px] leading-tight transition-transform duration-300 hover:scale-105 animate-glow bg-gradient-to-br from-[#0f2a1d] to-[#a65a1f] bg-clip-text text-transparent before:content-['🍷'] before:mr-[15px]">
                    ĐỒ UỐNG HEALTHY <br />
                    <span className="block font-sans text-[1rem] sm:text-[1.1rem] text-[#8b5e3c] tracking-[4px] uppercase font-medium mt-2">
                        Năng lượng xanh cho cơ thể mỗi ngày
                    </span>
                </h2>
            </div>

            {/* GRID */}
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {displayProducts.map((item: Product) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>

            {/* More Button */}
            <Link href="/products/healthy">
                <button className="mt-[35px] px-[38px] py-5 rounded-full font-bold text-[18px] text-[#8a5a00] bg-gradient-to-br from-[#fff6cc] via-[#ffe9a8] to-[#fff9e6] border-2 border-yellow-500/40 shadow-[0_0_6px_rgba(255,215,0,0.4),0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-br hover:from-[#fff9e6] hover:via-[#ffe9a8] hover:to-[#fff6cc] hover:shadow-[0_0_10px_rgba(255,215,0,0.6),0_8px_20px_rgba(0,0,0,0.12)]">
                    Khám phá các loại đồ uống →
                </button>
            </Link>

            <style jsx global>{`
                @keyframes glow {
                  from { text-shadow: 0 5px 15px rgba(0,0,0,0.1), 0 0 10px rgba(196,122,44,0.2); }
                  to { text-shadow: 0 10px 30px rgba(0,0,0,0.2), 0 0 25px rgba(196,122,44,0.4); }
                }
                .animate-glow { animation: glow 3s ease-in-out infinite alternate; }
            `}</style>
        </section>
    );
}

function Card({ item }: { item: Product }) {
    return (
        <div className="group relative bg-gradient-to-b from-white to-[#fff3e9] rounded-[24px] p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] overflow-hidden text-left flex flex-col">

            {/* Image Box */}
            <Link href={`/products/${item.groupSlug}/${item.categorySlug}/${item.slug}`}>
                <div className="relative w-full h-[180px] rounded-[15px] overflow-hidden border-2 border-[#ecde91] shadow-[0_0_12px_rgba(255,215,0,0.4)] mb-2.5">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {item.isCombo && (
                        <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
                            COMBO
                        </span>
                    )}
                </div>
            </Link>

            {/* Content */}
            <div className="px-1 py-1.5 flex-1 flex flex-col">
                <span className="text-[10px] text-orange-600 font-bold uppercase mb-1">
                    {item.categoryName}
                </span>
                
                <Link href={`/products/${item.groupSlug}/${item.categorySlug}/${item.slug}`}>
                    <h3 className="text-[19px] font-bold text-[#333] mb-2 line-clamp-2 min-h-[54px] hover:text-[#ff7a00] transition-colors">
                        {item.name}
                    </h3>
                </Link>

                <div className="flex items-center gap-2 mb-4">
                    <span className="text-[18px] font-extrabold text-[#b71c14]">
                        {item.price}
                    </span>
                    {item.originalPrice && (
                        <span className="text-[13px] text-gray-400 line-through">
                            {item.originalPrice}
                        </span>
                    )}
                </div>

                <Link href={`/products/${item.groupSlug}/${item.categorySlug}/${item.slug}`} className="mt-auto">
                    <button className="w-full py-2.5 rounded-[12px] border-none bg-[#ffe9d6] text-[#ff7a00] font-bold cursor-pointer transition-all hover:bg-[#ff7a00] hover:text-white flex items-center justify-center gap-2 active:scale-95">
                        🛒 Chọn mua
                    </button>
                </Link>
            </div>
        </div>
    );
}