



import Link from 'next/link';



import React from 'react'

const data = [
    {
        ulr: "wellness",
        title: "Wellness and Healing",
        pgra: "Become stress and pain free NOW! Access Bars® which is a gentle, non-invasive technique that works on releasing both Physical and Mental blocks stored in the Body and help facilitate greater ease in all different areas of life.",
        img: "https://i.ontraport.com/10651.2e0b599d2e3a3cf94171d82bf89dfcb7.JPEG"
    },
    {
        ulr: "house",
        title: "House & Property Clearing",
        pgra: "Is your home and property haunted or infested with negative energy? Then you probably need a House Clearing to remove the entity, so you can have your quiet, cozy home back to yourself.",
        img: "https://i.ontraport.com/10651.1952b4bdb2bf0213d7ef3da6c395c375.PNG"
    },
    {
        ulr: "pet",
        title: "Intuitive Pet Sessions",
        pgra: "Anette has the gift of telepathically communicating with animals and they show her what they need to get well so she can help them to heal.",
        img: "https://i.ontraport.com/10651.8fa757f775f193cdcc9e292d6dab9279.PNG"
    },
    {
        ulr: "events",
        title: "Events",
        pgra: "Body processes classes Stress release & Burnout prevention classes Healing & Quantum Physic classes How to play with the molecules to change energies and physical reality workshops",
        img: "https://i.ontraport.com/10651.4b955c8656f93dd5dedc2e2d60e42fe5.PNG"
    },
    {
        ulr: "events",
        title: "Access Energetic Facelift",
        pgra: "Access Energetic facelift is a hands-on process to rejuvenate the face and reverse the appearance of aging, plus a great technique to create similar effects throughout the body.",
        img: "https://i.ontraport.com/10651.98a9666088af9471834d960e821367d2.JPEG"
    },
    {
        ulr: "contact",
        title: "Contact",
        pgra: "Anette Stjärnhjärta",
        Phone: "+1 540-760-6875",
        Email: "anettestjarnhjarta@gmail.com",
        img: "https://i.ontraport.com/181547.7a27c5ef32d8ddfeb0321f12fa9ff4ec.JPEG"
    }
];





const Contant = () => {
    return (
        <section className='flex mt-16 flex-wrap justify-between'>
            {data.map((item, index) => (
                <div className='w-[420px] mx-4  box mt-6 rounded-xl  ' key={index}>
                    <img className='w-[100%] rounded-t-xl h-[300px] object-cover' src={item.img} alt="img" />
                    <Link
                        className='p-3 text-[25px] mt-5 font-bold hover:text-[#267dff] '
                        href={item.ulr}
                    >

                        {item.title}
                    </Link>
                    <p className=' p-3 w-full'>{item.pgra}</p>

                    {item.Phone && <p className=' px-3 w-full'>Phone: {item.Phone}</p>}
                    {item.Email && <p className=' px-3 w-full'>Email: {item.Email}</p>}
                </div>
            ))}
        </section>
    )
}

export default Contant
