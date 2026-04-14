"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
    id: string | number;
    name: string;
    price: number | string;
    image: string;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Omit<CartItem, 'quantity'>, quantity?: number) => void;
    updateQuantity: (id: string | number, delta: number) => void;
    removeFromCart: (id: string | number) => void;
    clearCart: () => void;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const savedData = localStorage.getItem('sang_cart');
        if (!savedData) return;

        try {
            const data = JSON.parse(savedData);
            if (Array.isArray(data)) {
                setCart(data as CartItem[]);
            }
        } catch (error) {
            console.error("Lỗi parse dữ liệu giỏ hàng:", error);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('sang_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (
        product: Omit<CartItem, 'quantity'>,
        quantity: number = 1
    ) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...prev, { ...product, quantity }];
        });
    };

    const updateQuantity = (id: string | number, delta: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const removeFromCart = (id: string | number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            updateQuantity,
            removeFromCart,
            clearCart,
            isCartOpen,
            setIsCartOpen
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart phải nằm trong CartProvider");
    return context;
};