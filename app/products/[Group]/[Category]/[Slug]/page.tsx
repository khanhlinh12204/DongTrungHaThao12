"use client";
import { use, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { getProductBySlug, getAllProducts } from "@/app/data/productsTX";
import { getGroupData } from "@/app/data/productTQ";
import { useCart } from "@/app/components/funOrder";

export default function ProductDetailPage({
    params,
}: {
    params: Promise<{ Group: string; Category: string; Slug: string }>;
}) {
    const { Group, Category, Slug } = use(params);

    const product = getProductBySlug(Slug);
    if (!product) return notFound();

    const groupSettings = getGroupData(Group);

    const [quantity, setQuantity] = useState(1);
    const [openDesc, setOpenDesc] = useState(false);

    const relatedProducts = getAllProducts().filter(
        (p) => p.categoryName === product.categoryName && p.slug !== product.slug
    );

    const increase = () => setQuantity((prev) => prev + 1);
    const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    const { addToCart } = useCart();

    const descriptionLines = product.description || [];

    return (
        <main className="bg-[#fdf6f0] min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Breadcrumb */}
                <nav className="text-sm text-gray-500 mb-6 flex gap-2 flex-wrap">
                    <Link href="/" className="hover:text-[#ff8a80]">Trang chủ</Link>
                    <span>›</span>
                    <Link href={`/products/${Group}`} className="hover:text-[#ff8a80]">
                        {groupSettings?.parentName || Group}
                    </Link>
                    <span>›</span>
                    <Link href={`/products/${Group}/${Category}`} className="hover:text-[#ff8a80]">
                        {product.categoryName}
                    </Link>
                    <span>›</span>
                    <span className="text-[#7a3b2e] font-semibold">{product.name}</span>
                </nav>

                {/* MAIN */}
                <div className="bg-white rounded-3xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* IMAGE */}
                    <div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#fff3d6]">
                            <Image
                                src={product.image || "/placeholder.png"}
                                alt={product.name}
                                fill
                                className="object-contain p-6 hover:scale-105 transition"
                                priority
                            />
                        </div>

                        {/* THUMB */}
                        <div className="flex gap-3 mt-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="w-20 h-20 bg-white rounded-xl border hover:border-[#ff9a9e] cursor-pointer overflow-hidden"
                                >
                                    <Image
                                        src={product.image || "/placeholder.png"}
                                        alt=""
                                        width={80}
                                        height={80}
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* INFO */}
                    <div className="flex flex-col gap-5">
                        <h1 className="text-3xl font-bold text-[#7a3b2e] uppercase">{product.name}</h1>
                        <p className="text-3xl font-bold text-[#ff8a80]">{product.price}</p>

                        {/* COMBO */}
                        <div className="bg-[#fff3d6] p-4 rounded-xl">
                            {/* <p className="font-semibold mb-3 text-[#7a3b2e]">Combo 7 sản phẩm</p> */}
                            <div className="flex gap-3 overflow-x-auto">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div
                                        key={i}
                                        className="w-16 h-16 bg-white rounded-lg border flex items-center justify-center"
                                    >
                                        <Image
                                            src={product.image || "/placeholder.png"}
                                            alt=""
                                            width={50}
                                            height={50}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* OPTION */}
                        <div>
                            <p className="font-medium mb-2 text-[#7a3b2e]">Đơn vị</p>
                            <button className="border border-[#ff9a9e] text-[#ff8a80] px-4 py-1 rounded-lg">
                                Set
                            </button>
                        </div>

                        {/* QUANTITY */}
                        <div>
                            <p className="font-medium mb-2 text-[#7a3b2e]">Số lượng</p>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={decrease}
                                    className="w-10 h-10 bg-[#fff3d6] rounded-lg font-bold"
                                >
                                    -
                                </button>
                                <span className="w-10 text-center font-semibold text-[#7a3b2e]">{quantity}</span>
                                <button
                                    onClick={increase}
                                    className="w-10 h-10 bg-[#fff3d6] rounded-lg font-bold"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* BUTTON THÊM GIỎ HÀNG */}
                        <div className="flex gap-4 mt-4">
                            <button
                                onClick={() => addToCart(product, quantity)}
                                className="
                  flex-1
                  bg-gradient-to-r from-[#ffd6a5] to-[#ff9a9e]
                  text-white
                  py-3
                  rounded-xl
                  font-bold
                  shadow-md
                  hover:scale-105
                  transition
                "
                            >
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>

                {/* DESCRIPTION NÂNG CẤP */}
                {descriptionLines.length > 0 && (
                    <div className="mt-6">
                        <motion.button
                            onClick={() => setOpenDesc(!openDesc)}
                            className="w-full flex justify-between items-center bg-[#fff3d6] rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-all"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="font-semibold text-lg text-[#7a3b2e] tracking-wide">
                                Mô tả sản phẩm
                            </span>
                            <span className="text-xl">{openDesc ? "▲" : "▼"}</span>
                        </motion.button>

                        <AnimatePresence>
                            {openDesc && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-2xl shadow-lg p-6 mt-3 space-y-3 text-gray-700 border-l-4 border-[#ff9a9e]"
                                >
                                    {descriptionLines.map((line, index) => (
                                        <motion.p
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-[#ff8a80] before:rounded-full"
                                        >
                                            {line}
                                        </motion.p>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                {/* RELATED PRODUCTS CARD */}
                {relatedProducts.length > 0 && (
                    <div className="mt-10">
                        <h2 className="text-xl font-semibold mb-6 text-[#7a3b2e]">
                            Các sản phẩm liên quan
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {relatedProducts.slice(0, 4).map((item) => (

                                <div
                                    key={item.slug}
                                    className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition"
                                >
                                    <Link href={`/products/${item.groupSlug}/${item.categorySlug}/${item.slug}`}>
                                        <div className="relative aspect-square mb-3">
                                            <Image
                                                src={item.image || "/placeholder.png"}
                                                alt={item.name}
                                                fill
                                                className="object-cover rounded-xl"
                                            />
                                        </div>

                                        <p className="font-medium text-[#7a3b2e]">{item.name}</p>
                                        <p className="text-[#ff8a80] font-semibold mb-2">{item.price}đ</p>
                                    </Link>
                                    <div className="flex gap-4 mt-4">
                                        <button
                                            onClick={() => addToCart(product, quantity)}
                                            className="
                                            flex-1
                                            bg-gradient-to-r from-[#ffd6a5] to-[#ff9a9e]
                                            text-white
                                            py-3
                                            rounded-xl
                                            font-bold
                                            shadow-md
                                            hover:scale-105
                                            transition
                "
                                        >
                                            Thêm giỏ 
                                        </button>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                )}

            </div>
        </main>
    );
}