import React from 'react'
import Link from "next/link";
import Image from "next/image";
const House = () => {
    return (
        <div>
            <section className="bgHouse flex items-center ">
                <div className="w-full px-16 md:w-[700px] ms-0 md:ms-24">
                    <h2 className="font-bold text-4xl text-[#343434] ">
                        Do you wish your home & your property would energize you?
                    </h2>
                    <p className="text-[18px]  text-[#343434] mt-4 text-2xl font-medium">It's possible to reset the energy in your house! Find out how!</p>

                    <button className='mt-12 topTitel bg-[#142741] w-[230px] h-16 rounded-xl'>
                        <Link
                            href="/contact"
                            className='absolute'
                        >
                            <span>  Book a Session</span>
                        </Link>
                    </button>
                </div>





            </section>

            <article className="flex flex-wrap items-center justify-between px-10 md:px-16 mt-12">

                <figure className="flex flex-wrap justify-evenly">
                    <Image src="/img/houseClient.jpg"
                        alt="house"
                        width="600"
                        height="400"
                        className='rounded-lg object-cover'

                    />


                    <figcaption className="w-[48%] mt-3 md:mt-0 ">
                        <h3 className="font-bold text-4xl">House Clearing</h3>
                        <p className='leading-8 mt-4 text-lg '>
                            Is your home and property haunted or infested with negative energy? <br />
                            Do you ever get that feeling when things are out of sorts in your home? <br />
                            It’s nothing you can put your finger on, it’s just uncomfortable and your pets are acting nervous and out of character.  <br />
                            Have you ever gotten the chills because you felt that there was someone in the room but there was nobody there? <br />
                            Or, had the feeling like you’re being watched? <br />
                            You could have a ghost in your house and sometimes these ghosts (or entities) can manipulate the energy so that you actually feel their restless presence. <br /> You are not imagining these circumstances and you are NOT going crazy. <br />
                            Those entities don’t belong in your house! <br /> <br />

                            You need a House Clearing to remove the entity, so you can have your quiet, cozy home back to yourself.<br /> <br />
                        </p>



                    </figcaption >
                </figure>
            </article>


            <article className="flex flex-wrap items-center justify-between px-10 md:px-16 mt-12">

                <figure className="flex flex-wrap justify-evenly">

                    <figcaption className="w-[48%] mt-3 md:mt-0">
                        <span className='text-[40px] font-medium'>
                            Signs that your home could be haunted:
                        </span>
                        <ul className='list-disc text-lg mt-3'>
                            <li> You feel scared to be there</li>
                            <li> You feel depressed or anxious for no reason</li>
                            <li>
                                Your child wakes up screaming in the middle of the night saying there’s a monster in their room and it’s increasingly more difficult to comfort them.
                            </li>
                            <li>
                                Your pets are standing in the corners, scratching at the wall and barking or meowing, at what seems like nothing, yet night after night they do the same thing.

                            </li>

                        </ul>
                        <p className='mt-2 text-lg'>
                            Your home might not be haunted – perhaps you have Negative Imprints. Negative energy can be left over from the people who’ve lived in your house in the past.
                            Anette has walked the battle fields in the Fredericksburg area, helping ghosts who were stuck to move on. <br />
                            She also helped a young couple to clear their grandfather’s house which would not sell because the ghost of the grandfather did not want the house to sell. Shortly after her work, the house sold.
                        </p>
                        <button className='mt-12 border shadow-md topTitel bg-[#142741] w-[230px] h-16 rounded-xl'>
                        <Link
                            href="/contact"
                            className='absolute'
                        >
                            <span>  Book a Session</span>
                        </Link>
                    </button>

                    </figcaption>
                      
                    <Image src="/img/aboutimg.jpg"
                        alt="house"
                        width="600"
                        height="400"
                        className='mt-3 rounded-lg object-cover'


                    />

                

                </figure>

            </article>





        </div>
    )
}

export default House
