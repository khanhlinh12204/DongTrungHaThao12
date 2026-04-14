"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";


const itemVars = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

type Tab = {
    name: string;
    path: string;
};

interface ProductHeaderProps {
    title: string;
    navTabs: Tab[];
    parentCategory?: {
        name: string;
        path: string;
    };
}

export default function ProductHeader({ title, navTabs, parentCategory }: ProductHeaderProps) {
    const pathname = usePathname();

    return (

        <div className="w-full max-w-7xl mx-auto px-4 pt-6 pb-8 bg-transparent tracking-tight font-Lora">

            {/* 1. BREADCRUMB */}
            <motion.nav
                variants={itemVars}
                initial="hidden"
                animate="visible"
                className="flex items-center flex-wrap gap-x-3 gap-y-2 text-[15px] md:text-[20px] mb-8 border-b border-[#a35a1f]/10 pb-5 font-Lora"
            >

                <Link
                    href="/"
                    className="text-[#8e735b] hover:text-[#a35a1f] transition-all duration-300 tracking-tight font-medium flex items-center gap-5 group "
                >
                    <span className="text-[20px]"> ✦ </span>
                    Trang chủ
                </Link>

                {parentCategory && (
                    <>
                        <span className="text-[#a35a1f]/30 font-light mx-0 text-[15px]"> / </span>

                        <Link
                            href={parentCategory.path}
                            className="text-[#8e735b] hover:text-[#a35a1f] transition-all duration-500 font-medium uppercase tracking-[0.2em] text-[px] "
                        >
                            {parentCategory.name}
                        </Link>
                    </>
                )}
                {navTabs.map((tab, i) => (
                    pathname === tab.path && (
                        <div key={i} className="flex items-center gap-2">
                            <span className="text-[#a35a1f]/30 font-light mx-2  "> / </span>
                            <motion.span
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                className="text-[#a35a1f] font-bold tracking-wide relative "
                            >
                                {tab.name}
                                <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#d7c431]/60 rounded-full" />
                            </motion.span>
                        </div>
                    )
                ))}
            </motion.nav>

            {/* 2. TITLE SECTION */}
            <motion.div
                variants={itemVars}
                initial="hidden"
                animate="visible"
                className="text-center mb-10 relative"
            >

                <h1 className="text-4xl md:text-5xl font-bold text-[#a35a1f] uppercase tracking-[2px] leading-tight relative inline-block">
                    {title}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-[#d7c431] rounded-full scale-100 shadow-lg shadow-[#d7c431]/40" />
                </h1>
                <p className="text-[#a35a1f] mt-6 text-sm md:text-base font-medium italic opacity-80">
                    Khám phá tinh hoa quà tặng, trọn vẹn tình thân
                </p>
            </motion.div>

            {/* 3. TABS */}
            <motion.div
                variants={itemVars}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap justify-center items-center gap-4 mb-14"
            >
                {navTabs.map((tab, i) => {
                    const isActive = pathname === tab.path;
                    return (
                        <Link href={tab.path} key={i}>
                            <motion.button
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.96 }}
                                className={`px-7 py-2.5 rounded-full text-[14px] font-bold transition-all duration-300 shadow-sm ${isActive
                                    ? "bg-[#a35a1f] text-white shadow-[#a35a1f]/40 shadow-xl border border-[#a35a1f]"
                                    : "bg-white border border-[#eee] text-[#8e735b] hover:border-[#a35a1f] hover:text-[#a35a1f]"
                                    }`}
                            >
                                {tab.name}
                            </motion.button>
                        </Link>
                    );
                })}
            </motion.div>

            {/* FILTER SECTION */}
            <motion.div
                variants={itemVars}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col md:flex-row items-center gap-4 bg-white/50 backdrop-blur-xl px-7 py-4 rounded-[40px] border border-white/60 shadow-[0_15px_40px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-shadow duration-500"
            >
                <div className="flex items-center gap-4 pr-5 md:border-r border-stone-200">
                    <span className="text-[13px] font-bold text-[#7d5a3c] uppercase tracking-widest">Chọn tiêu chí</span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 font-Lora">
                    <button className="flex items-center gap-2.5 bg-[#a35a1f] text-white px-6 py-2.5 rounded-[15px] text-[13px] font-bold hover:bg-[#824618] transition-all duration-300 active:scale-95 shadow-lg shadow-[#a35a1f]/20">
                        <span className="text-[10px]">▽</span> Bộ lọc
                    </button>

                    <div className="hidden md:block h-5 w-[1px] bg-stone-200 mx-2"></div>

                    {["Danh mục", "Giá", "Thương hiệu"].map((text) => (
                        <button
                            key={text}
                            className="flex items-center gap-2 bg-[#fcf5ef]/60 border border-[#dec9b7] px-5 py-2.5 rounded-[15px] text-[#7d5a3c] text-[13px] font-semibold hover:bg-white hover:border-[#a35a1f] transition-all duration-300 group"
                        >
                            {text}
                            <span className="text-[#eb9b4b] text-[10px] opacity-70 group-hover:rotate-180 transition-transform duration-300">▼</span>
                        </button>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}