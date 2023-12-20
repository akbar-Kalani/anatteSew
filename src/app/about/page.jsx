import React from 'react'
import Link from 'next/link'
import Accordion from './accordion'
import Image from 'next/image'
const About = () => {
  return (
    <section className=' '>
      <section className='aboutBgImg flex items-center'>

        <article className=' px-10 md:ps-36 text-[#d2d5db] '>
          <h1 className='text-[34px] font-bold'>
            Joy and Freedom to live.
          </h1>
          <p className='mt-6 font-semibold text-[20px]'>It's possible to reset your health your life. Find out how!</p>

          <button className='mt-20 topTitel bg-[#142741] w-[230px] h-16 rounded-xl'>
            <Link
              href="/contact"
              className='absolute'
            >
              <span className='h-full w-full flex justify-center items-center'>  Book a Session</span>
            </Link>
          </button>
        </article>

      </section>

      <div className='mt-12 flex justify-between flex-wrap   px-16'>
        <figure className='w-[450px]'>
          <Image
            className='rounded-lg object-cover'
            src="/img/abouts.jpg"
            width={450}
            height={400}
            alt='image'
          />
        </figure>
        <section className='w-full md:w-[60%]'>
          <h1 className='text-[34px]  font-bold'>
          Anette Stjärnhjärta
          </h1>
           <Accordion/>
        </section>
      </div>
    </section>
  )
}

export default About
