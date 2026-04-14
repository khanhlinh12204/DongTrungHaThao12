"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, Product } from "@/app/data/productsTX";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/app/components/funOrder";
import { CheckCircle2 } from "lucide-react";

export default function ProductCard(props: Product) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { name, price, originalPrice, image, slug, groupSlug, categorySlug, categoryName, isCombo } = props;

  const parsePrice = (priceStr: string) => {
    return Number(priceStr.replace(/[^0-9]/g, ""));
  };

  const discount = originalPrice
    ? Math.round(
      ((parsePrice(originalPrice) - parsePrice(price)) /
        parsePrice(originalPrice)) * 100
    )
    : 0;

  const product = getProductBySlug(slug);

  const [quantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (product) {
      addToCart(product, quantity);
      setIsSubmitted(true);
    }
  };


  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-full"
      >
        <Link
          href={`/products/${groupSlug}/${categorySlug}/${slug}`}
          className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl border border-gray-100"
        >
          {/* Badge */}
          <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
            {isCombo && (
              <span className="text-white text-[12px] font-bold px-3 py-1 rounded-full shadow-lg"
                style={{
                  background: "linear-gradient(90deg, #f67d4dfe 50%, #ec6868 100%)",
                }}
              >
                Combo
              </span>
            )}

            {discount > 0 && (
              <span className="bg-white text-red-600 text-[10px] font-bold px-3 py-1 rounded-full shadow-md border border-red-200">
                -{discount}%
              </span>
            )}
          </div>

          {/* Image */}
          <div className="relative aspect-square w-full bg-gray-50 overflow-hidden">
            <Image
              src={image || "/placeholder.png"}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col flex-1">
            <div className="text-[10px] text-orange-500 font-bold uppercase mb-1">
              {categoryName}
            </div>

            <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 h-10">
              {name}
            </h3>

            <div className="mt-auto">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-base font-bold text-red-600">
                  {parsePrice(price).toLocaleString("vi-VN")}đ
                </span>

                {originalPrice && (
                  <span className="text-xs text-gray-400 line-through">
                    {parsePrice(originalPrice).toLocaleString("vi-VN")}đ
                  </span>
                )}
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-[#ffd6a5] to-[#ff9a9e] text-white py-2.5 rounded-xl font-bold shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                Thêm giỏ
              </button>
            </div>
          </div>
        </Link>
      </motion.div>



      <AnimatePresence>
        {isSubmitted && (
          <div key="success-container" className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pointer-events-none">
            {/* Backdrop có thể click để đóng */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] pointer-events-auto"
              onClick={() => setIsSubmitted(false)}
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              className="relative bg-white rounded-[2rem] p-8 max-w-[320px] w-full text-center shadow-2xl pointer-events-auto border border-gray-100"
            >
              <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Đã thêm vào giỏ!</h3>
              <p className="text-sm text-slate-500 mb-6">Sản phẩm <b>{name}</b> đã sẵn sàng trong giỏ hàng của bạn.</p>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-all text-sm"
                >
                  TIẾP TỤC MUA SẮM
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>





    </>
  );
}