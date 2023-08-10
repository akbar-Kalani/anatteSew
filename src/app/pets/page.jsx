





import React from 'react'
import Link from 'next/link'
import Gallery from './gallery'
const Pets = () => {
  return (
    <section>


      <section className="bgPets flex items-center ">
        <div className="w-full px-16 md:w-[700px] ms-0 md:ms-24">
          <h2 className="font-bold text-4xl ">
            Is something bothering your pet and you don't know how to fix it? Get help and book a session
          </h2>


          <button className='mt-12 topTitel bg-[#142741] w-[200px] h-14 rounded-xl'>
            <Link
              href="/contact"
              className='absolute'
            >
              <span>  Book Session</span>
            </Link>
          </button>
        </div>





      </section>

      <Gallery />
    </section>

  )
}

export default Pets



