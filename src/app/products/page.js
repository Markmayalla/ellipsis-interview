import { getProducts } from '@/api/fakestoreapi'
import AddedToCart from '@/components/addedtocart';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div>
        <h1 className='text-xl font-bold'>Products</h1>

        <div className='grid grid-cols-4'>
            {products.map(product => (
                <Link href={`/product/${product.id}`}>
                    <div className="w-full relative pt-[100%]">
                        <Image
                        src={product.image}
                        alt="profile"
                        objectFit="contain"
                        fill
                        className="w-full h-full top-0 left-0 object-cover rounded-2xl"
                        />
                    </div>
                    <AddedToCart product={product} />
                    <p>{product.title}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                </Link>
            ))}
        </div>
        </div>
    )
}