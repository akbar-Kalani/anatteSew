



import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HamburgerMenuIcon from './hamburgerMenuIcon';
import MobileHamburgerMenu from './mobileHamburgerMenu';
const items = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "About",
        url: "/about"
    },
    {
        title: "Wellness",
        url: "/wellness"
    },
    {
        title: "House Clearing",
        url: "/house"
    },
    {
        title: "Pets",
        url: "/pets"
    },
    {
        title: "Events",
        url: "/events"
    },
    {
        title: "Contact",
        url: "/contact"
    }
];
const Navbar = () => {

    /*     const navItems = Object.keys(items); */

    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  
     const [click, setClick] = useState(false)
      const clickMenu = () => {
        setClick(!click)
        
      }
    return (

        <section className='w-full'>

        
        <nav className='flex justify-between   items-center'>
            <figure>
                <Image
                    src="/img/logo.png"
                    width={70}
                    height={70}
                    alt="logo"
                />
            </figure>
            <ul className='hidden md:flex justify-end  '>
                {items.map((item, index) => (
                    <li className='w-auto mx-4 text-center font-medium' key={index}>
                         
                        <Link onClick={clickMenu}  className='' href={item.url}>{item.title}</Link>
                    </li>
                ))}
            </ul>
            <span className='md:hidden '>
                <HamburgerMenuIcon isOpen={isOpen} onClick={toggleMenu} />
            </span>
        </nav>
        {/*  {!isOpen ? (
               ""
         ): <MobileHamburgerMenu items={items} isOpen={isOpen} setIsOpen={setIsOpen}/>} */}
            <MobileHamburgerMenu items={items} isOpen={isOpen} setIsOpen={setIsOpen}/>
         </section>

    )
}

export default Navbar





/*  className='hover:text-[#ff4a26] */