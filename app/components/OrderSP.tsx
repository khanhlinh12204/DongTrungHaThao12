"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FaShoppingCart, FaMinus, FaPlus, FaTrash, FaCheckCircle, FaTimes } from "react-icons/fa";
import { useState, useMemo } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useCart } from "./funOrder";

export default function OrderSP() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, clearCart } = useCart();
    const [isEmptyAlert, setIsEmptyAlert] = useState(false);

    // Hàm hỗ trợ chuyển đổi giá từ chuỗi "150.000đ" sang số 150000
    const parsePrice = (priceStr: string) => {
        return Number(priceStr.replace(/[^0-9]/g, ""));
    };

    // Tính tổng tiền tự động dựa trên giỏ hàng
    const totalPrice = useMemo(() => {
        return cart.reduce((total, item) => {
            return total + (parsePrice(item.price) * item.quantity);
        }, 0);
    }, [cart]);

    const handleSubmit = () => {
        if (cart.length === 0) {
            setIsEmptyAlert(true);
            return;
        }
        console.log("Đơn hàng đã gửi:", cart, "Tổng tiền:", totalPrice);
        setIsSubmitted(true);
        setIsCartOpen(false);
        clearCart();
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {isEmptyAlert && (
                    <div key="alert-container" className="fixed inset-0 z-[300] flex items-center justify-center p-4">
                        <motion.div
                            key="empty-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsEmptyAlert(false)}
                            className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
                        />
                        <motion.div
                            key="empty-content-box"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative bg-white rounded-3xl p-8 max-w-xs w-full text-center shadow-2xl border border-amber-100"
                        >
                            <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <AlertCircle size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Giỏ hàng trống!</h3>
                            <p className="text-slate-500 text-sm mb-6">Vui lòng chọn ít nhất một sản phẩm để đặt hàng.</p>
                            <button
                                onClick={() => setIsEmptyAlert(false)}
                                className="w-full py-3 bg-gradient-to-r from-[#ffd6a5] to-[#ff9a9e] text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all"
                            >
                                QUAY LẠI MUA SẮM
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isCartOpen && (
                    <div key="cart-container">
                        <motion.div
                            key="cart-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsCartOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110]"
                        />

                        <motion.div
                            key="cart-drawer"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[120] shadow-2xl p-6 md:p-8 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-2xl font-black text-[#d35400] flex items-center gap-3">
                                    Giỏ hàng <span className="text-sm font-normal text-gray-400">({cart.length} món)</span>
                                </h2>
                                <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-red-500 p-2">
                                    <FaTimes size={20} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto space-y-6 pr-2">
                                {cart.length === 0 ? (
                                    <div className="text-center py-20">
                                        <FaShoppingCart size={64} className="mx-auto text-gray-100 mb-4" />
                                        <p className="text-gray-400 italic">Giỏ hàng trống</p>
                                    </div>
                                ) : (
                                    cart.map(item => (
                                        <div key={`item-${item.id}`} className="flex gap-4 items-center border-b border-gray-50 pb-4">
                                            <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-50 flex-shrink-0 border border-gray-100">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-[#d35400] text-sm mb-1">{item.name}</h4>
                                                <p className="font-black text-xs font-bold mb-3">{item.price}</p>
                                                <div className="flex items-center bg-slate-100 rounded-full w-fit px-2 py-1">
                                                    <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 flex items-center justify-center text-gray-500"><FaMinus size={10} /></button>
                                                    <span className="font-bold text-xs w-8 text-center text-[#005596]">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 flex items-center justify-center text-gray-500"><FaPlus size={10} /></button>
                                                </div>
                                            </div>
                                            <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 p-2"><FaTrash size={16} /></button>
                                        </div>
                                    ))
                                )}
                            </div>

                            <div className="mt-auto pt-8 border-t border-gray-100">
                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-[#ffd6a5]font-bold uppercase text-xs">Tổng cộng:</span>
                                    {/* Hiển thị số tiền đã tính toán */}
                                    <span className="text-[#c0392b] font-black text-2xl">
                                        {totalPrice === 0 ? "0đ" : `${totalPrice.toLocaleString('vi-VN')}đ`}
                                    </span>
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-[#ffd6a5] to-[#ff9a9e] text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl hover:opacity-90 transition-all"
                                >
                                    XÁC NHẬN ĐƠN HÀNG <FaCheckCircle />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isSubmitted && (
                    <div key="success-container" className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                        <motion.div
                            key="success-backdrop"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsSubmitted(false)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />
                        <motion.div
                            key="success-modal"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-white rounded-[2.5rem] p-8 md:p-12 max-w-sm w-full text-center shadow-2xl"
                        >
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase">Thành công!</h3>
                            <p className="text-slate-500 mb-8">Đơn hàng của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ xác nhận sớm nhất.</p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="w-full py-4 bg-gradient-to-r from-[#ffd6a5] to-[#ff9a9e] text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg"
                            >
                                ĐÓNG THÔNG BÁO
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}