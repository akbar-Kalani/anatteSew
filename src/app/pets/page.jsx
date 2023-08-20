





import React from 'react'
import Link from 'next/link'
import Gallery from './gallery'
import Image from 'next/image'
const Pets = () => {
  return (
    <section>


      <section className="bgPets flex max-sm:px-3 items-center ">
        <div className="w-full md:px-12 md:w-[700px] ms-0 md:ms-24 pt-7  border-[5px]  p-4">
          <h2 className="font-bold mt-3 md:mt-0 text-4xl text-[#e3e3e3] ">
            Is something bothering your pet and you don't know how to fix it? Get help and book a session
          </h2>


          <button className='mt-24 topTitel bg-[#142741] w-[230px] h-16 rounded-xl'>
            <Link
              href="/contact"
              className='absolute'
            >
              <span>  Book a Session</span>
            </Link>
          </button>
        </div>
  




      </section>

      <Gallery />
    </section>

  )
}

export default Pets



