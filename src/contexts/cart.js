"use client"

import { createContext, useContext, useState } from "react";

const CartContext = createContext({})

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState({
        items: [],
        total: 0.0
    });

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext);