"use client"

import React from 'react'
import { useCartContext } from '@/contexts/cart';


const AddToCartButton = ({ product }) => {
    const { cart, setCart } = useCartContext();

    const addToCart = () => {
        if (cart.items.some(item => item.id == product.id)) {
            setCart({
                ...cart,
                items: cart.items.map(item => {
                    if (item.id == product.id) {
                        return {...item, quantity: item.quantity + 1 }
                    } else {
                        return item;
                    }
                })
            });
        } else {
            setCart({
                ...cart,
                items: [...cart.items, {
                    id: product.id,
                    quantity: 1,
                    price: product.price,
                    product: product,
                }]
            });
        }
    }

    return (
        <button className='bg-purple-500 hover:bg-purple-400 cursor-pointer px-5 py-2 rounded text-white' onClick={addToCart}>Add to Cart</button>
    );
}

export default AddToCartButton
