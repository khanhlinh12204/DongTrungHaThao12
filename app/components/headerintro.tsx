"use client";

import { Search, Person, House, Star, Bag, Phone } from "react-bootstrap-icons";
import ShowOrder from "./showOrder";
import OrderSP from "./OrderSP";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAllProducts } from "../data/productsTX";

export default function Header() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [showResults, setShowResults] = useState(false);
    // const searchRef = useRef(null); // Ref dùng để xác định vùng tìm kiếm

    const allData = useMemo(() => {
        try {
            return getAllProducts();
        } catch (e) {
            return [];
        }
    }, []);

    const filteredResults = useMemo(() => {
        if (!searchTerm.trim()) return [];
        return allData.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).slice(0, 6);
    }, [searchTerm, allData]);

    // XỬ LÝ CLICK RA NGOÀI ĐỂ ĐÓNG KẾT QUẢ
    const searchRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target as Node)
            ) {
                setShowResults(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
const handleGoogleLogin = () => {
    const clientId = "YOUR_CLIENT_ID_GOES_HERE.apps.googleusercontent.com";
    const redirectUri = typeof window !== "undefined" ? window.location.origin : "";
    const scope = "email profile openid";
    const responseType = "token";
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
    window.location.href = authUrl;
};

const GoogleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.11c-.22-.67-.35-1.39-.35-2.11s.13-1.44.35-2.11V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.83z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.83c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

return (
    <header className="w-full">
        <div className="max-w-[1500px] mx-auto my-2 md:my-4 px-4 md:px-8 py-3
                flex flex-wrap items-center justify-between gap-4
                rounded-2xl md:rounded-[30px]
                bg-gradient-to-r from-[#fef7f4] via-[#ffe4d6] to-[#ffccb3]
                shadow-sm relative">

            <Link href="/dashboard" className="flex items-center gap-3 md:gap-4 group">
                <img
                    src="/Picture/Logo.jpg"
                    alt="Logo"
                    className="w-16 h-16 md:w-24 md:h-24 object-contain 
                        border-4 border-orange-400 rounded-xl bg-white p-1
                        group-hover:scale-105 transition"
                />
                <div>
                    <h2 className="text-lg md:text-2xl font-black text-[#c41e3a] uppercase">Sấy Thăng Hoa</h2>
                    <h1 className="text-2xl md:text-4xl font-black text-[#c41e3a]">DR TRUNG</h1>
                    <p className="hidden sm:block text-xs md:text-sm text-[#ff8c00] italic font-bold">Đà Nẵng - Chất lượng từ tâm</p>
                </div>
            </Link>

            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
                <img src="/Picture/fruits5.png" alt="Decoration" className="w-50 drop-shadow-lg" />
            </div>

            <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end min-w-[280px] sm:min-w-0">

                <div className="relative flex-grow max-w-[160px] xs:max-w-[200px] md:max-w-[300px]" ref={searchRef}>
                    <div className="flex items-center gap-2 bg-white border-2 border-pink-200 
        rounded-full px-3 py-1.5 focus-within:border-[#ef5a87] shadow-sm transition-all">
                        <Search className="text-[#ef5a87] flex-shrink-0" size={14} />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setShowResults(true);
                            }}
                            onFocus={() => setShowResults(true)}
                            placeholder="Tìm kiếm..."
                            className="outline-none bg-transparent w-full text-xs md:text-sm font-medium"
                        />
                    </div>

                    <AnimatePresence>
                        {showResults && searchTerm.trim() !== "" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-[110%] left-0 right-0 bg-white rounded-2xl shadow-2xl z-[100] border border-gray-100 overflow-hidden"
                            >
                                <div className="p-3 bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                                    Tìm thấy {filteredResults.length} sản phẩm
                                </div>

                                <div className="max-h-[400px] overflow-y-auto">
                                    {filteredResults.map((item) => (
                                        <div key={item.id} className="border-b border-gray-50 last:border-0">
                                            <Link
                                                href={`/products/${item.groupSlug}/${item.categorySlug}/${item.slug}`}
                                                onClick={() => setShowResults(false)}
                                                className="flex items-center gap-3 p-3 hover:bg-orange-50 transition-all group w-full"
                                            >
                                                <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100">
                                                    <img
                                                        src={item.image}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                        alt={item.name}
                                                    />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h5 className="text-[13px] font-bold text-gray-800 line-clamp-1 group-hover:text-[#ef5a87] transition-colors">
                                                        {item.name}
                                                    </h5>
                                                    <p className="text-sm font-black text-[#ef5a87]">
                                                        {item.price}
                                                    </p>
                                                </div>

                                                <div className="text-[10px] font-bold text-orange-500 bg-orange-50 px-2.5 py-1.5 rounded-md border border-orange-100 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                                                    XEM
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>

                                {filteredResults.length === 0 ? (
                                    <div className="p-8 text-center text-gray-400 text-xs italic">Không tìm thấy sản phẩm...</div>
                                ) : (
                                    <Link href="/products/Product1" onClick={() => setShowResults(false)} className="block p-3 bg-white text-center text-[10px] font-black text-orange-500 hover:text-[#ef5a87] transition border-t">
                                        XEM TẤT CẢ
                                    </Link>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="flex items-center gap-2">
                    <div className="relative">
                        <button
                            onClick={() => setIsLoginOpen(!isLoginOpen)}
                            className={`p-2 md:px-4 md:py-2 rounded-full border-2 transition relative z-[60]
                                flex items-center gap-2 shadow-sm font-bold text-sm
                                ${isLoginOpen ? 'bg-[#ef5a87] text-white border-[#ef5a87]' : 'border-[#ef5a87] bg-white text-[#ef5a87] hover:bg-[#ef5a87] hover:text-white'}`}
                        >
                            <Person size={20} />
                            <span className="hidden md:inline">Tài khoản</span>
                        </button>

                        <AnimatePresence>
                            {isLoginOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-[50] bg-black/5"
                                        onClick={() => setIsLoginOpen(false)}
                                    />

                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        /* Responsive logic: 
                                           - Mobile: Cố định giữa màn hình (fixed inset-x-4)
                                           - Desktop: Tuyệt đối theo menu cha (absolute right-0)
                                        */
                                        className="fixed inset-x-4 top-20 mx-auto w-auto max-w-[320px] 
                   md:absolute md:right-0 md:top-full md:mt-3 md:w-72 md:mx-0
                   z-[60] origin-top-right"
                                    >
                                        <div className="bg-white/95 backdrop-blur-xl rounded-[25px] 
                        shadow-[0_20px_50px_rgba(239,90,135,0.2)] 
                        border border-[#ef5a87]/10 p-6">

                                            <div className="text-center mb-5">
                                                <h4 className="text-[#ef5a87] font-black text-xs uppercase tracking-[0.2em] mb-1">
                                                    Chào mừng bạn
                                                </h4>
                                                <p className="text-gray-400 text-[10px] font-bold italic">
                                                    Đăng nhập để tiếp tục
                                                </p>
                                            </div>

                                            <button
                                                onClick={handleGoogleLogin}
                                                className="w-full flex items-center justify-center gap-3 px-4 py-3 
                       bg-white border border-gray-100 rounded-2xl 
                       hover:border-[#ef5a87]/30 hover:shadow-md
                       transition-all duration-300 active:scale-[0.97]"
                                            >
                                                <GoogleIcon />
                                                <span className="text-gray-700 font-bold text-xs">Đăng nhập bằng Google</span>
                                            </button>
                                        </div>
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="flex items-center gap-1">
                        <ShowOrder />
                        <OrderSP />
                    </div>
                </div>
            </div>
        </div>

        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
            <div className="max-w-[1200px] mx-auto px-4">
                <ul className="flex justify-center gap-4 md:gap-12 py-3 md:py-4">
                    {[
                        { icon: <House size={20} />, label: "Trang chủ", href: "/dashboard" },
                        { icon: <Star size={20} />, label: "Giới Thiệu", href: "/Introduction" },
                        { icon: <Bag size={20} />, label: "Sản Phẩm", href: "/products/Product1" },
                        { icon: <Phone size={20} />, label: "Liên Hệ", href: "/Contact" },
                    ].map((item, i) => (
                        <li key={i}>
                            <Link href={item.href} className="group relative flex items-center gap-2 font-bold text-[13px] md:text-[18px] text-gray-700 hover:text-[#ff2d55] transition">
                                <span className="text-orange-400 hidden sm:block group-hover:scale-110 transition">{item.icon}</span>
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff2d55] group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    </header>
);
}