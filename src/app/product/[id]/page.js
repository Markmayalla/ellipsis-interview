import { getProduct } from '@/api/fakestoreapi'
import AddedToCart from '@/components/addedtocart';
import AddToCartButton from '@/components/addtocart';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function ProductPage({ params }) {
    console.log(params.id);
    const product = await getProduct(params.id);
    return (
        <div>

        <div className='grid grid-cols-2 '>
            <div className='w-full'>
                <div className='w-96 h-96 rounded-full p-20 mx-auto' style={{ backgroundColor: "#D5FAFC"}}>
                    <div className="w-full relative pt-[100%] rounded-2xl">
                        <Image
                            src={product.image}
                            alt="profile"
                            objectFit="contain"
                            fill
                            className="w-full h-full top-0 left-0 object-cover rounded-2xl"
                        />
                    </div>
                </div>
                <p className='text-center mt-5 font-bold'>Price: ${product.price}</p>
            </div>

            <div className=''>
                <p style={{ color: "#2EC5CE"}}>Description</p>
                <h1>{product.title}</h1>
                <div className='mt-3'></div>
                <p>Category: {product.category}</p>
                <p>Rate: {product.rating.rate}</p>
                <p className='mt-2'>{product.description}</p>
                <div className='my-2'>
                    <AddedToCart product={product} /> <br />
                </div>
                <AddToCartButton product={product} />
            </div>
        </div>
        </div>
    )
}