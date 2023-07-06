"use client"

import CardBox from '@/components/cardbox'
import Input from '@/components/input'
import { useCartContext } from '@/contexts/cart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartPage = () => {

    const { cart, setCart } = useCartContext();

    // handlers
    const increment = (item) => {
        setCart({
            ...cart,
            items: cart.items.map(_item => {
                if (item.id == _item.id) {
                    return {
                        ..._item,
                        quantity: _item.quantity + 1
                    }
                } else {
                    return _item
                }
            })
        })
    }
    const decrement = (item) => {
        if (item.quantity > 1) {
            setCart({
                ...cart,
                items: cart.items.map(_item => {
                    if (item.id == _item.id) {
                        return {
                            ..._item,
                            quantity: _item.quantity - 1
                        }
                    } else {
                        return _item
                    }
                })
            })
        }
    }

    const remove = (item) => {
        setCart({
            ...cart,
            items: cart.items.filter(_item => _item.id != item.id)
        });
    }

  return (
    <div>
      <div className='grid grid-cols-3 gap-5'>
        <div className='col-span-2'>
            <Link href="/products">Back</Link>
            <h1 className='mb-2'>Continue Shopping</h1>
            <hr />
            <h1>Shopping Cart</h1>
            <p>You have {cart.items.length} items in your cart</p>

            <div className='mt-5'>
                {cart.items.map(item => (
                    <div key={item.id} className='flex gap-3 border items-center p-3 rounded'>
                        <Image
                            src={item.product.image}
                            height={50}
                            width={50}
                         />
                         <div>
                            <h2>{item.product.title}</h2>
                            {/* <p>{item.product.description}</p> */}
                         </div>

                         <div className='flex items-center gap-2'>
                            <span onClick={() => increment(item)} className='p-2 bg-slate-300 rounded-full'>+</span>
                            <strong>{item.quantity}</strong>
                            <span onClick={() => decrement(item)} className='p-2 bg-slate-300 rounded-full'>-</span>
                         </div>
                         <div>
                            ${item.price * item.quantity}
                         </div>
                         <div>
                            <button className='bg-red-500 text-slate-100 text-xs' onClick={() => remove(item)}>Delete</button>
                         </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='col-span-1'>
            <div className="p-3 rounded-2xl" style={{ background: "#565ABB" }}>
                <h3 className="text-slate-100 font-bold text-lg">Card Details</h3>
                <p className='text-sm text-white mt-3'>Cart Type</p>
                <div className='grid grid-cols-4 gap-2'>
                    <CardBox src="/mastercard.png" />
                    <CardBox src="/mastercard.png" />
                    <CardBox src="/mastercard.png" />
                    <div className='bg-white bg-opacity-30 p-3 rounded'>
                        <div className='h-10 text-sm font-bold text-slate-100 h-full w-full flex items-center justify-content-center'>
                            <span>See All</span>
                        </div>
                    </div>
                </div>

                <div className='my-3'>
                    <Input label="Name on card" name="name" placeholder="Name" />
                    <div className='py-1'></div>
                    <Input label="Card Number" name="card_number" placeholder="4242 4242 4242 4242" />
                    <div className='py-1'></div>
                    <div className='grid grid-cols-2 gap-2'>
                        <Input label="Expiration Date" name="expiration_date" placeholder="mm/yy" />
                        <Input label="CVV" name="expiration_date" placeholder="123" />
                    </div>
                </div>

                <hr />
                <div className='mb-2 text-slate-100 text-sm py-2'>
                    <div className='flex justify-between w-full'>
                        <span>Subtotal</span>
                        <span>$1,660</span>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Shipping</span>
                        <span>$4</span>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span>Total (Tax Inc)</span>
                        <span>$4</span>
                    </div>
                </div>

                <button className='bg-green-500 py-2 px-3 text-slate-100 block w-full rounded flex justify-between'>
                    <span>$1,660</span>
                    <span>Checkout</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
