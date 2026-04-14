"use client";

import React from 'react';
import ProductGrid from "@/app/components/ProductGird/productGird";
import ProductHeader from "../ProductHeader/productheaders";
import { getAllProducts } from "@/app/data/productsTX";

export default function AllProductsPage() {
    const products = getAllProducts();

  
    return (
        <div className="min-h-screen pb-20 bg-[#fdfaf7] relative transition-all duration-300 bg-cover bg-center"
        >
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] pointer-events-none" />

            <div className="relative z-10">
                 <div className="px-4 mt-10 max-w-7xl mx-auto">
                    <ProductGrid products={products} />
                </div>
            </div>
        </div>
    );
}