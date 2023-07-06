import Image from 'next/image'
import React from 'react'

const CardBox = ({ src }) => {
  return (
    <div className='bg-white bg-opacity-30 p-3 rounded'>
                        <Image
                            src={src}
                            height="60"
                            width="60"
                        />
                    </div>
  )
}

export default CardBox
