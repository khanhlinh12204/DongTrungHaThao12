"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { Phone, Mail } from 'lucide-react';

const policiesLeft = ["Chính sách thành viên", "Chính sách bảo mật", "Chính sách thanh toán"];
const policiesRight = ["Chính sách giao hàng", "Chính sách bảo hành", "Chính sách đổi trả"];

export default function AppFooter() {
    return (
        <footer className="relative py-[10px] px-[10px] bg-[#fdfaf5] overflow-hidden z-10 bg-fixed bg-center bg-cover bg-no-repeat">
            {/* Blobs Background */}
            <div className="absolute -top-[200px] -right-[100px] h-[500px] w-[500px] rounded-full blur-[100px] opacity-40 z-[-1] animate-float-footer bg-gradient-to-r from-[#fef7f4] via-[#ffe4d6] to-[#ffccb3]"></div>
            <div className="absolute -bottom-[200px] -left-[100px] h-[500px] w-[500px] rounded-full blur-[100px] opacity-40 z-[-1] animate-float-footer bg-[#fdcda1]"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-[2300px] mx-auto bg-white/50 backdrop-blur-[20px] border border-white/40 rounded-[20px] p-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] h-auto lg:h-[320px]"
            >
                <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-5">

                    {/* Image Left */}
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="hidden lg:flex shrink-0 items-center justify-center relative group [mask-image:radial-gradient(circle,black_40%,transparent_97%)]"
                    >
                        <Image
                            src="/Picture/tra3.jpg"
                            alt="Product Left"
                            width={180}
                            height={180}
                            className="object-contain opacity-90 saturate-[1.1] drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] mix-blend-multiply -mt-[50px] w-[200px] transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-[1.2]"
                        />
                    </motion.div>

                    {/* Center Content */}
                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.2fr_1.8fr] gap-[30px] pb-5 border-b border-black/10">

                            {/* Col 1 */}
                            <div className="flex flex-col gap-2">
                                <Image src="/Picture/Logo.jpg" alt="Logo" width={100} height={40} className="mb-2" />
                                <h3 className="text-[1.2rem] font-extrabold text-[#2d3436]">Liên Hệ</h3>
                                <div className="text-[0.9rem] text-[#444]">098 125 8260</div>
                                <div className="text-[0.9rem] text-[#444]">256 Lê Quảng Chí, Đà Nẵng</div>
                            </div>

                            {/* Col 2 */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[1.2rem] font-extrabold text-[#2d3436]">Kết nối</h3>
                                <a href="https://facebook.com/..." className="text-[0.9rem] text-[#444] flex items-center gap-2 hover:text-[#ff9f43] transition-colors">
                                    <FontAwesomeIcon icon={faSquareFacebook} className="text-2xl" />
                                    <span className="truncate">facebook.com/drtrungcordyceps</span>
                                </a>
                                <div className="text-[0.9rem] text-[#444] flex items-center gap-2">
                                    <Phone size={20} /> 098 125 8260
                                </div>
                                <a href="mailto:vinseedbiotech@gmail.com" className="text-[0.9rem] text-[#444] flex items-center gap-2 hover:text-[#ff9f43]">
                                    <Mail size={20} /> vinseedbiotech@gmail.com
                                </a>
                            </div>

                            {/* Col 3 */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[1.2rem] font-extrabold text-[#2d3436]">Chính sách</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
                                    <div className="flex flex-col gap-2">
                                        {policiesLeft.map((p, i) => (
                                            <motion.a key={i} whileHover={{ x: 5 }} href="#" className="text-[0.85rem] text-[#555] hover:text-[#ff9f43] transition-colors">
                                                {p}
                                            </motion.a>
                                        ))}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {policiesRight.map((p, i) => (
                                            <motion.a key={i} whileHover={{ x: 5 }} href="#" className="text-[0.85rem] text-[#555] hover:text-[#ff9f43] transition-colors">
                                                {p}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="flex flex-col sm:flex-row justify-between items-center mt-[15px] gap-4">
                            <div className="text-[0.85rem] text-[#888]">© 2026 Dr. Trung - Cordyceps & Herbs</div>
                            <div className="shrink-0">
                                <Image src="/Picture/logoct.jpg" alt="BCT" width={120} height={45} className="grayscale hover:grayscale-0 transition-all" />
                            </div>
                        </div>
                    </div>

                    {/* Image Right */}
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="hidden lg:flex shrink-0 items-center justify-center relative group [mask-image:radial-gradient(circle,black_40%,transparent_97%)]"
                    >
                        <Image
                            src="/Picture/dongtrung3.jpg"
                            alt="Product Right"
                            width={180}
                            height={180}
                            className="object-contain opacity-90 saturate-[1.1] drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] mix-blend-multiply -mt-[50px] w-[200px] transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-[1.2]"
                        />
                    </motion.div>

                </div>
            </motion.div>
        </footer>
    );
}