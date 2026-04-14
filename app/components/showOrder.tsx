"use client"

import { FaShoppingCart } from "react-icons/fa"
import { motion } from 'framer-motion';
import { useCart } from "./funOrder";

export default function ShowOrder() {
    const { cart, setIsCartOpen } = useCart();

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCartOpen(true)}
            className="
                group
                bg-gradient-to-r from-[#fff3d6] via-[#ffd6a5] to-[#ff9a9e]
                text-[#7a3b2e]
                px-6 py-3
                rounded-2xl
                shadow-md hover:shadow-xl
                transition-all duration-300
                flex items-center gap-3
            "
        >
            {/* ICON */}
            <div className="relative flex items-center justify-center">
                <div className="bg-white/60 p-2 rounded-xl group-hover:bg-white transition">
                    <FaShoppingCart size={20} className="text-[#ff7a5c]" />
                </div>

                {totalItems > 0 && (
                    <span className="
                        absolute -top-2 -right-2
                        bg-[#ff8a80]
                        text-white
                        min-w-[18px] h-[18px]
                        text-[10px]
                        rounded-full
                        flex items-center justify-center
                        font-bold
                        shadow
                    ">
                        {totalItems}
                    </span>
                )}
            </div>

            {/* TEXT */}
            <div className="flex flex-col leading-tight">
                <span className="text-lg font-black   ">
                    Giỏ hàng
                </span>
            </div>
        </motion.button>
    );
}