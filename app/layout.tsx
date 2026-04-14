import type { Metadata } from "next";
// Import thêm Lora (phông có chân) và thêm subset vietnamese
import { Montserrat, Lora, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppFooter from "./components/footer";
import Header from "./components/headerintro";
import OrderSP from "./components/OrderSP";
import { Card } from "react-bootstrap";
import ShowOrder from "./components/showOrder";
import { CartProvider } from "./components/funOrder";
import Navbar from "@/app/components/Navbar";



// Phông không chân (dùng cho nội dung, menu)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"], // Bắt buộc có vietnamese
});

// Phông CÓ CHÂN (dùng cho Tiêu đề sang trọng)
// const lora = Lora({
//   variable: "--font-lora",
//   subsets: ["latin", "vietnamese"], // Bắt buộc có vietnamese
//   display: "swap",
// });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  subsets: ['latin', 'vietnamese'], // Bắt buộc có vietnamese để hiển thị dấu chuẩn
  display: 'swap',
  weight: ['400', '500', '600', '700'], // Các độ đậm nhạt bạn muốn dùng
  style: ['normal', 'italic'],          // Cho phép dùng chữ nghiêng
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi" // Chuyển sang tiếng Việt
      className={`
        ${geistSans.variable} 
        ${geistMono.variable} 
        h-full antialiased
      `}
    >
      <body className={lora.className}>
        <CartProvider>
        <Header />
        {children}
        
        </CartProvider>
        <AppFooter />

      </body>
    </html>
  );
}