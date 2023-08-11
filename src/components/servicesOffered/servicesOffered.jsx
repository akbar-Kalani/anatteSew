




import React from 'react'
import Image from 'next/image'

const ServicesOffered = () => {
    return (
        <section className='flex flex-wrap-reverse justify-between items-center  mt-8'>
            <figure className='mt-5 md:mt-0 '>
                <Image
                    className='rounded-lg '
                    src="/img/img1.jpg"
                    width={500}
                    height={200}
                    alt='image'
                />
            </figure>
            <div className=" ">
                <p className='text-[39px] mt-5 md:mt-0 font-extrabold'>Services Offered</p>
                <p className='mt-7 leading-8 '>
                    1- Energy Restoration & Clearings <br />
                    2- Restoration & activation of your unique Blueprint for optimal health <br />
                    3- Correction & release of trauma in your spine and head by lightly touching points on 4- your head <br />
                    5- Access Energetic Facelift for a smooth and glowing face
                    6- Energy Coaching
                </p>
            </div>
        </section>
    )
}

export default ServicesOffered
