"use client";
import Image from "next/image";
import Link from "next/link";
import { allYenXaoProducts, ProductYenXao } from "@/app/data/productYenXao";

export default function OrderSection4() {

    const topProducts = allYenXaoProducts.slice(0, 4);

    const bottomProducts = allYenXaoProducts.slice(4, 7);

    return (
        <section className="relative w-full py-16 px-4 bg-[#d9d3cb] bg-[url('/Picture/banner-phu-3.jpg')] bg-cover bg-center bg-fixed font-sans">
            <div className="text-center mb-10">
                <h2 className="relative inline-block text-[36px] sm:text-[52px] font-bold tracking-[3px] leading-tight transition-transform duration-300 hover:scale-105 animate-glow bg-gradient-to-br from-[#0f2a1d] to-[#a65a1f] bg-clip-text text-transparent before:content-['🥣'] before:mr-[15px]">
                    NƯỚC YẾN XÀO<br />
                    <span className="block font-sans text-[1rem] sm:text-[1.1rem] text-[#8b5e3c] tracking-[4px] uppercase font-medium mt-2">
                        Nguồn dinh dưỡng quý giá cho mọi nhà.
                    </span>
                </h2>
            </div>

            <div className="max-w-[1300px] mx-auto space-y-8">
                <div className="flex flex-wrap justify-center gap-6 lg:grid lg:grid-cols-4 lg:gap-8">
                    {topProducts.map((item: ProductYenXao) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-6 lg:grid lg:grid-cols-3 lg:gap-8 max-w-[980px] mx-auto">
                    {bottomProducts.map((item: ProductYenXao) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>

            <Link href="/products/yensao">
                <div className="mt-16 text-center">
                    <button className="px-10 py-3.5 rounded-full font-bold text-lg text-white bg-gradient-to-r from-[#64b484] to-[#cd9252] shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95">
                        Khám phá thêm sản phẩm →
                    </button>
                </div>
            </Link>

            <style jsx global>{`
        @keyframes glow {
          from { text-shadow: 0 0 10px rgba(166,90,31,0.2); }
          to { text-shadow: 0 0 25px rgba(166,90,31,0.5); }
        }
        .animate-glow { animation: glow 3s ease-in-out infinite alternate; }
      `}</style>
        </section>
    );
}

/* Component Card */
function Card({ item }: { item: ProductYenXao }) {
    return (
        <div className="flex flex-col h-full flex-shrink-0 w-[280px] lg:w-full bg-white/50 backdrop-blur-md rounded-[30px] p-5 border border-white/60 shadow-[0_15px_35px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
            <div>
                <Link
                    href={`/products/${item.groupSlug}/${item.categorySlug}/${item.slug}`}

                >
                    <div>

                      
                        <div className="relative w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-inner mb-4 flex items-center justify-center p-4">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        
                        <div className="text-center space-y-2">
                            <h3 className="text-[15px] font-medium text-gray-700 line-clamp-2 h-11 px-2">
                                {item.name}
                            </h3>

                            <div className="flex flex-col items-center min-h-[44px]">
                                {item.originalPrice && (
                                    <span className="text-xs text-gray-400 line-through mb-0.5">
                                        {item.originalPrice}
                                    </span>
                                )}
                                <span className="text-lg font-bold text-[#ef4444]">{item.price}</span>
                            </div>

                        </div>
                    </div>
                </Link>
            </div>

            <div>
                <Link href={`/products/${item.groupSlug}/${item.categorySlug}/${item.slug}`}>
                    <button className="mt-2 w-full py-2.5 rounded-2xl bg-[#e9d19c] hover:bg-[#dec17a] text-[#5c4a25] font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-95">
                        <span className="text-base">🛒</span> Chọn mua
                    </button>
                </Link>
            </div>
        </div>
    );
}