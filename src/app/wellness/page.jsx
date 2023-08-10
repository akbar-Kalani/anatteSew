import React from 'react'
import Link from 'next/link'
import Slider from "@/components/session/slider";
import Image from "next/image";

const Wellness = () => {
  return (
    <section className=' px-16' >
      <div className='wellnessBg flex items-center'>
        <section className='md:w-2/5 max-sm:px-8  ms-0 md:ms-24'>
          <h1 className='font-bold text-[26px]'>Anette Stjärnhjärta is a Body Whisperer and are able to provide naturally healing sessions customized for each individual.</h1>
          <p className="mt-7 font-medium text-[20px ]">She combines science and the Healing Arts. The basic understanding is that contraction like stress creates pain and illnesses, where expansion and deep relaxation creates healing.</p>

          <span className='mt-6 flex'>
          <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=21&pause=1000&color=020709&width=435&lines=It's+possible+to+reset+your+health+your+life.+Find+out+how!" alt="Typing SVG" /></a>
          </span>

          <button className='mt-20 topTitel bg-[#142741] w-[200px] h-14 rounded-xl'>
            <Link
              href="/contact"
              className='absolute'
            >
              <span>  Book New</span>
            </Link>
          </button>
        </section>


      </div>

         <div className="mt-8">
           <p className="font-bold text-center text-4xl">Wellness, Healing and Access Bars®</p>
            <p className=" w-full mx-auto mt-4 md:w-[600px]">
              Do you want to have peace of mind? <br/>

              Do you want to be stress and pain free? <br/>

              Through her own experiences Anette has been able to heal herself from the injuries she had as a result of five car accidents and one deadly spider bite. She will be able to help you to recover and heal.</p>
         </div>
      <Slider />


         <div className="my-8 ">
             <h2 className="text-3xl font-extrabold text-center">Here is what her clients are saying</h2>
             <p className="text-center mt-8">"I feel so relaxed, I feel focused, My monkey mind is still, My pain is gone"
                 See what people post on GOOGLE Review
                 <Link
                     className=" mx-1  text-cyan-500"
                     target="_blank"
                     href="https://g.page/r/CT4PIF2FbV7SEB0/review">
                     here
                 </Link></p>
         </div>


        <section className="flex mt-12 flex-wrap justify-evenly">
               <article className="w-[500px] mt-2">
                    <figure className="">
                        <Image src="/img/wellness1.jpg"
                               alt=""
                               height="300"
                               width="500"
                               className="rounded-2xl"
                        />
                         <figcaption className="">
                             <h2 className="text-3xl py-4  after:border ">Donna Hetrick</h2>
                             <p className="leading-8">
                                 I've worked with Anette on balancing my feminine and masculine energies and have such a greater understanding
                                 of how they impact my communication with others. She provides lists, exercises and homework that really put
                                 what you are learning into action. I've read and been told "Do LESS Be MORE" for many years but admittedly
                                 simply didn't know how to "do" that. After working with Anette - I now "get it!" The work I've done with her has
                                 impacted my relationship with my husband, my children and my clients. I HIGHLY recommend this work.
                             </p>
                         </figcaption>
                    </figure>
               </article>

            <article className="w-[500px] mt-2">
                <figure className="">
                    <Image src="/img/wellness2.jpg"
                           alt=""
                           height="300"
                           width="500"
                           className="rounded-2xl"
                    />
                    <figcaption className="">
                        <h2 className="text-3xl py-4">Steven Mitchell</h2>
                        <p className="leading-8">
                            "My first session with her took about 3 hours. The best way I can explain what this is, is an energy
                            transforming session on steroids! Through this session I began to let go of the trauma in past lives and present.
                            ! I was feeling free not only emotionally but spiritually! I didn't need to keep searching to find myself because
                            I could truly feel from my heart and not my stomach!My bowel and bladder function continues to improve.
                            Uti`s are a problem I deal with being paralyzed but when I get one Anette does the energy work and it clears up!
                            I keep it away for about a month and it comes back and she does some energy healing and  I'm keeping it away longer each time!
                            If you are failing at something or feeling like you have no where to run or desperate for change, I urge you to please contact her and talk
                            to her! It might be the best thing you ever did! It is for me! Thank you Anette! I'm blessed for your help!
                        </p>
                  
                    </figcaption>
                </figure>
            </article>
        </section>
    </section>
  )
}

export default Wellness
