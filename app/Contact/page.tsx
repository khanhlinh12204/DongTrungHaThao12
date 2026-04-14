"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPage = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const SocialIcons = {
        Facebook: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        ),
        Instagram: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        ),
        Youtube: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
        ),
        Check: () => (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        )
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#ffd6a5] via-[#fff1e6] to-[#ff9a9e] flex items-center justify-center p-4 md:p-10 lg:p-20 selection:bg-[#2d6a4f] selection:text-white relative overflow-hidden">

            {/* Các khối cầu phát sáng tạo hiệu ứng chiều sâu */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#ff9a9e]/30 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[35%] h-[45%] bg-[#ffd6a5]/30 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl w-full bg-white/80 backdrop-blur-2xl rounded-[40px] shadow-[0_40px_100px_-20px_rgba(255,154,158,0.3)] border border-white/50 flex flex-col lg:flex-row overflow-hidden transition-all duration-500">

                <div className="lg:w-[38%] bg-[#E36A6A] p-10 lg:p-16 text-white flex flex-col justify-between relative">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>

                    <div className="relative z-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#ffd6a5]/20 border border-[#ffd6a5]/30 text-[10px] uppercase tracking-[0.3em] font-black text-[#ffd6a5] mb-8">
                            Premium Identity
                        </span>
                        <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tighter text-white">
                            Tinh hoa <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd6a5] to-[#ff9a9e] italic ">
                                Sức khỏe & Tầm vóc
                            </span>
                        </h2>
                        <p className="text-emerald-100/70 text-base leading-relaxed mb-12 max-w-sm font-medium">
                            Chúng tôi trân quý từng lời nhắn. Đội ngũ chuyên gia sẽ phản hồi yêu cầu của bạn một cách trang trọng nhất.
                        </p>

                        <div className="space-y-10">
                            {[
                                { label: 'Hotline 24/7', value: '+84 98 125 8260', icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' },
                                { label: 'Email Tư vấn', value: 'vinseedbiotech@gmail.com', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6' },
                                { label: 'Showroom', value: '256 Lê Quảng Chí, Đà Nẵng', icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-[#ffd6a5] group-hover:text-[#1b4332] transition-all duration-500 shadow-xl">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={item.icon}></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#ffd6a5] font-black mb-1">{item.label}</p>
                                        <p className="text-lg font-bold text-white tracking-tight">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 pt-12 border-t border-white/10 flex items-center gap-6">
                        <p className="text-[10px] uppercase tracking-widest text-[#ffd6a5] font-black">Follow Us</p>
                        <div className="h-[1px] w-12 bg-[#ffd6a5]/30"></div>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-[#ffd6a5] transition-all"><SocialIcons.Facebook /></a>
                            <a href="#" className="hover:text-[#ffd6a5] transition-all"><SocialIcons.Instagram /></a>
                            <a href="#" className="hover:text-[#ffd6a5] transition-all"><SocialIcons.Youtube /></a>
                        </div>
                    </div>
                </div>

                <div className="lg:w-[62%] p-10 lg:p-20 relative flex flex-col justify-center">
                    <form className="space-y-12 max-w-2xl mx-auto w-full" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <h3 className="text-4xl font-black text-[#E36A6A] tracking-tighter">Gửi yêu cầu tư vấn</h3>
                            <p className="text-gray-500 font-medium italic">Để lại thông tin, chúng tôi sẽ liên hệ trong vòng 15 phút.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {[
                                { label: 'Họ và tên quý khách', placeholder: 'Vd: Nguyễn Anh', type: 'text' },
                                { label: 'Số điện thoại', placeholder: 'Vd: 090 123 4567', type: 'tel' }
                            ].map((field, idx) => (
                                <div key={idx} className="relative group">
                                    <label className="text-[11px] font-black text-[#1b4332] uppercase tracking-widest mb-3 block">{field.label}</label>
                                    <input
                                        required
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        className="w-full py-4 bg-transparent border-b-2 border-gray-200 outline-none focus:border-[#ff9a9e] transition-all duration-500 placeholder:text-gray-300 text-gray-800 font-bold text-lg"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="relative group">
                            <label className="text-[11px] font-black text-[#1b4332] uppercase tracking-widest mb-3 block">Địa chỉ Email</label>
                            <input
                                required
                                type="email"
                                placeholder="example@gmail.com"
                                className="w-full py-4 bg-transparent border-b-2 border-gray-200 outline-none focus:border-[#ff9a9e] transition-all duration-500 placeholder:text-gray-300 text-gray-800 font-bold text-lg"
                            />
                        </div>

                        <div className="relative group">
                            <label className="text-[11px] font-black text-[#1b4332] uppercase tracking-widest mb-3 block">Nội dung yêu cầu</label>
                            <textarea
                                required
                                rows="2"
                                placeholder="Lời nhắn của quý khách..."
                                className="w-full py-4 bg-transparent border-b-2 border-gray-200 outline-none focus:border-[#ff9a9e] transition-all duration-500 placeholder:text-gray-300 text-gray-800 font-bold text-lg resize-none"
                            ></textarea>
                        </div>

                        <div className="pt-8">
                            <button type="submit" className="relative overflow-hidden w-full lg:w-max px-16 py-6 bg-[#E36A6A] text-white font-black text-xs uppercase tracking-[0.4em] rounded-full group transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(227,106,106,0.4)] hover:-translate-y-1">
                                <span className="relative z-10 flex items-center justify-center gap-4">
                                    Gửi yêu cầu ngay
                                    <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#ffd6a5] to-[#ff9a9e] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </button>
                        </div>
                    </form>

                    <div className="mt-20 lg:absolute lg:bottom-12 lg:right-20 flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff9a9e] animate-ping"></div>
                        <span className="text-[10px] font-black text-[#1b4332] uppercase tracking-[0.3em]">Premium Support Active</span>
                    </div>
                </div>
            </div>

         
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
                                <SocialIcons.Check />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tighter">Thành công!</h3>
                            <p className="text-slate-500 mb-8 font-medium italic">Thông tin của bạn đã được gửi. Chúng tôi sẽ liên hệ xác nhận sớm nhất.</p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="w-full py-4 bg-gradient-to-r from-[#ffd6a5] to-[#ff9a9e] text-white font-black rounded-xl hover:opacity-90 transition-all shadow-lg text-[10px] tracking-widest uppercase"
                            >
                                ĐÓNG THÔNG BÁO
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContactPage;