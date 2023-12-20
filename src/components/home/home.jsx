"use client";

import React, { useEffect, useRef } from "react";
import ityped from "ityped";
import Image from "next/image";
import Link from "next/link";
 import TypingAnimation from "./typeingAnimate/typingAnimation";
const TopHome = () => {
  


  return (
    <section>
      <div className="imgbg rounded-xl">
        <section className="flex items-center flex-wrap justify-evenly">
          <div className="w-[700px] p-4 md:p-0 text-[#1c1c1c] ">
            <p className="text-[25px] md:text-[38px]  mt-3 font-bold ">
              Have you tried to heal your body, <br /> and whatever you do is
              not working?
            </p>
            <p className="mt-5 text-lg font-medium">
              Or you can't shut off your negative thoughts no matter what you
              try. Are your symptoms; feeling stressed, tired, anxious, worried,
              or pain and tension in your body?
            </p>
            {/* <h4>
              I am Passionate <span className="ityped text-success"></span>
            </h4> */}
             <TypingAnimation/>
            {/* <span className='flex mt-5 font-semibold'>Create your Dream life. </span>
                         <p><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&width=435&lines=Energy+Coaching+and+Healing" alt="Typing SVG" /></p> */}

            <button className="mt-7 topTitel bg-[#142741] w-[200px] h-14 rounded-xl">
              <Link href="/contact" className="absolute">
                <span  className='h-full w-full flex justify-center items-center'> Book a Sesstion</span>
              </Link>
            </button>
          </div>
          <figure className="w-[400px]  flex justify-center">
            <Image
              className=""
              src="/img/anettes.png"
              width={400}
              height={700}
              alt="image"
            />
          </figure>
        </section>
      </div>
    </section>
  );
};

export default TopHome;
