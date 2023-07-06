"use client"

import { useCartContext } from '@/contexts/cart'
import React from 'react'

const AddedToCart = ({ product}) => {
    const { cart } = useCartContext();

    if (cart.items.some(item => item.id == product.id)) {
        let _item = cart.items.find(item => item.id == product.id)
        return (
            <span className='bg-green-500 text-white p-1 rounded text-xs'>
                Added to Cart ({_item.quantity})
            </span>
        )
    } else {
        return <span></span>
    }
    
}

export default AddedToCart
