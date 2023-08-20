




import React from 'react'
import Image from 'next/image'

const ServicesOffered = () => {
    return (
        <section className='flex flex-wrap-reverse justify-center items-center  mt-8'>
            {/* <figure className='mt-5 md:mt-0 '>
                <Image
                    className='rounded-lg '
                    src="/img/img1.jpg"
                    width={500}
                    height={200}
                    alt='image'
                />
            </figure> */}
            <div className=" ">
                <p className='text-[39px] mt-5 md:mt-0 font-extrabold'>Services Offered</p>

                
                <ol className='mt-7 leading-  olList '>
                    <li className=''>
                        Energy Restoration & Clearings
                    </li>
                    <li> 
                        Restoration & activation of your unique Blueprint for optimal health</li>
                    <li>
                        Correction & release of trauma in your spine and head by lightly touching
                    </li>
                    <li>
                        points on your head
                    </li>
                    <li>
                        Access Energetic Facelift for a smooth and glowing face
                    </li>
                    <li>
                        Energy Coaching and Healing.
                    </li>
                </ol>
            </div>
        </section>
    )
}

export default ServicesOffered
