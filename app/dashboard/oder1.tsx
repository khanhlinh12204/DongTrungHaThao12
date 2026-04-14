"use client";
import Image from "next/image";
import Link from "next/link";

import { productsTET } from "@/app/data/productTET";

export default function OrderSection() {
    const displayProducts = productsTET.slice(0, 8);

    return (
        <section
            className="w-full min-h-screen py-[60px] px-[20px] text-center mt-[20px] bg-fixed bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/Picture/banner-phu.jpg')" }}
        >
            {/* Title */}
            <h2 className="text-[42px] font-[800] text-center mb-[25px] tracking-[2px] bg-gradient-to-br from-[#0f2a1d] to-[#a65a1f] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(212,163,115,0.3)] ">
                SET QUÀ TẶNG
            </h2>

            <div className="flex justify-center gap-[12px] mb-[30px] flex-wrap">
                <Link href="/products/TET/tet-2026">
                    <button className="px-[18px] py-[8px] rounded-full text-[16px] md:text-[20px] font-[600] transition-all duration-300 bg-gradient-to-br from-[#ffb347] to-[#ff7a00] text-white shadow-[0_4px_12px_rgba(255,122,0,0.4)] hover:-translate-y-[2px]">
                        Tết 2026
                    </button>
                </Link>
                <Link href="/products/TET/qua-suc-khoe">
                    <button className="px-[18px] py-[8px] rounded-full text-[16px] md:text-[20px] font-[500] text-[#555] bg-[#f1f1f1] transition-all duration-300 hover:-translate-y-[2px] hover:bg-gradient-to-br hover:from-[#ffd194] hover:to-[#ff7a00] hover:text-white">
                        Quà sức khỏe
                    </button>
                </Link>
                <Link href="/products/TET/set-qua-ocop">
                    <button className="px-[18px] py-[8px] rounded-full text-[16px] md:text-[20px] font-[500] text-[#555] bg-[#f1f1f1] transition-all duration-300 hover:-translate-y-[2px] hover:bg-gradient-to-br hover:from-[#ffd194] hover:to-[#ff7a00] hover:text-white">
                        Set quà OCOP
                    </button>
                </Link>
            </div>

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                {displayProducts.map((item) => (
                    <div
                        key={item.id}
                        className="group relative bg-gradient-to-b from-white to-[#fff3e9] rounded-[24px] p-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] overflow-hidden"
                    >
                        <Link href={`/products/${item.groupSlug}/${item.categorySlug}/${item.slug}`}>
                            {/* Badge */}
                            {item.isCombo && (
                                <span className="absolute top-[12px] left-[12px] z-[2] bg-gradient-to-br from-[#e73b41] to-[#ff2d2d] text-white text-[10px] px-[10px] py-[4px] rounded-full font-[600] border-[1.5px] border-white/70 shadow-[0_0_8px_rgba(255,80,80,0.6)]">
                                    COMBO
                                </span>
                            )}

                            {/* Image Container */}
                            <div className="relative w-full h-[220px] mb-[10px] rounded-[15px] overflow-hidden border-2 border-[#ecde91]">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="text-left px-[4px] py-[6px]">
                                <span className="text-[10px] text-orange-600 font-bold uppercase">
                                    {item.categoryName}
                                </span>
                                <h3 className="text-[18px] font-[700] text-[#333] mb-[8px] line-clamp-1">
                                    {item.name}
                                </h3>

                                <div className="flex items-center gap-[8px] mb-[12px]">
                                    <span className="text-[18px] font-[800] text-[#b71c14]">
                                        {item.price}đ
                                    </span>
                                    {item.originalPrice && (
                                        <span className="text-[13px] text-[#999] line-through">
                                            {item.originalPrice}đ
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>

                        <Link href={`/products/${item.groupSlug}/${item.categorySlug}/${item.slug}`}>
                            <button className="w-full p-[10px] rounded-[12px] bg-[#ffe9d6] text-[#ff7a00] font-[600] transition-colors duration-200 hover:bg-[#ff7a00] hover:text-white">
                                🛒 Xem chi tiết
                            </button>
                        </Link>
                    </div>
                ))}
            </div>

            <Link href="/products/TET">
                <button className="px-7 py-[14px] mt-10 rounded-full font-[700] text-[15px] text-[#8a5a00] bg-gradient-to-br from-[#fff6cc] via-[#ffe9a8] to-[#fff9e6] border-2 border-yellow-500/40 shadow-[0_0_6px_rgba(255,215,0,0.4),0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-[4px] hover:bg-gradient-to-br hover:from-[#fff9e6] hover:via-[#ffe9a8] hover:to-[#fff6cc] hover:shadow-[0_0_10px_rgba(255,215,0,0.6),0_8px_20px_rgba(0,0,0,0.12)]">
                    Xem thêm 20 sản phẩm khác →
                </button>
            </Link>
        </section>
    );
}