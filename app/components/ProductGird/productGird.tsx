"use client";
import { useState, useEffect } from "react";
import ProductCard from "../productprenium/ProductCard/productsCard";
import { Product } from "@/app/data/productsTX";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Cài đặt: npm install lucide-react

export default function ProductGrid({ products }: { products: Product[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  const totalPages = Math.ceil(products.length / productsPerPage) || 1;
  const currentItems = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full space-y-10">
     
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {currentItems.map((item) => (
          <ProductCard key={`${item.groupSlug}-${item.slug}`} {...item} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-12 py-4">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-full border border-gray-200 text-gray-500 hover:bg-[#7a3e00] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-500 transition-all duration-200 shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => {
              const pageNumber = i + 1;
              const isActive = currentPage === pageNumber;

              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`
                    min-w-[40px] h-10 px-3 rounded-lg font-semibold transition-all duration-200
                    ${isActive
                      ? "bg-[#7a3e00] text-white shadow-md shadow-orange-900/20 scale-110"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-[#7a3e00] hover:text-[#7a3e00]"
                    }
                  `}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full border border-gray-200 text-gray-500 hover:bg-[#7a3e00] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-500 transition-all duration-200 shadow-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}