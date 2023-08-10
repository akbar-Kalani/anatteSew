import React from 'react'
import Link from 'next/link'
const MobileHamburgerMenu = ({items , setIsOpen, isOpen}) => {
  return (
    <section  className={`${isOpen ? 'in' : 'out'}  px-16 slide-in-out mobileHamburgerMenu p-3 w-full  left-0 absolute`}>
        <ul >
        {items.map((item, index) => (
                    <li className='w-auto mt-3 text-[#f0f0f0] font-medium' key={index}>
                        <Link className='hover:text-[#267DFF]' href={item.url}>{item.title}</Link>
                    </li>
                ))}

        </ul>
    </section>
  )
}

export default MobileHamburgerMenu
