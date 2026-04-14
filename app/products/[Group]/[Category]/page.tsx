"use client";
import { use } from "react";
import ProductGrid from "@/app/components/ProductGird/productGird";
import ProductHeader from "../../ProductHeader/productheaders";
import { getProductsByCategory } from "@/app/data/productsTX";
import { getGroupData } from "@/app/data/productTQ";

export default function CategoryPage({ params }: { params: Promise<{ Group: string, Category: string }> }) {
    const { Group, Category } = use(params);

    const products = getProductsByCategory(Group, Category);
    const groupSettings = getGroupData(Group);

    const displayTitle = products.length > 0
        ? products[0].categoryName
        : Category.replace(/-/g, ' ').toUpperCase();

    return (
        <div className="min-h-screen bg-[#fdfaf7] pb-20"
                    style={{ backgroundImage: "url('/Picture/banner-phu.jpg')" }}
>
            <ProductHeader
                title={displayTitle}
                navTabs={groupSettings.navTabs}
                parentCategory={{ name: groupSettings.parentName, path: `/products/${Group}` }}
            />

            <div className="px-4 mt-10 max-w-7xl mx-auto">
                {products.length === 0 ? (
                    <p className="text-center text-gray-400 mt-20">Không có sản phẩm nào</p>
                ) : (
                    <ProductGrid products={products} />
                )}
            </div>
        </div>
    );
}