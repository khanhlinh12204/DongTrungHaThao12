"use client";
import { use } from "react";

import ProductGrid from "@/app/components/ProductGird/productGird";
import ProductHeader from "../ProductHeader/productheaders";
import { getProductsByGroup } from "@/app/data/productsTX";
import { getGroupData } from "@/app/data/productTQ";

export default function GroupPage({ params }: { params: Promise<{ Group: string }> }) {
    // Phải dùng use(params) để giải nén Promise trong Next.js 15
    const resolvedParams = use(params);
    const groupSlug = resolvedParams.Group;

    const products = getProductsByGroup(groupSlug);
    const groupSettings = getGroupData(groupSlug);

    return (
        <div className="min-h-screen pb-20 bg-[#fdfaf7] transition-all duration-300"
            style={{ backgroundImage: "url('/Picture/banner-phu.jpg')" }}

        >
            <ProductHeader
                title={groupSettings.title}
                navTabs={groupSettings.navTabs}
            />
            <div className="px-4 mt-10 max-w-7xl mx-auto">
                <ProductGrid products={products} />
            </div>
        </div>
    );
}