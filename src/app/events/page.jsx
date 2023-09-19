import React from "react";
import Image from "next/image";
 import "./style.css"
const coursesData = [
  {
    imageSrc: "/img/event1.jpg",
    title: "Stress release and burnout prevention, Access Bars®",
    description:
      "Become stress and pain free NOW! Access Bars® which is a gentle, non-invasive technique that works on releasing both Physical and Mental blocks stored in the Body and help facilitate greater ease in all different areas of life.",
  },
  {
    imageSrc: "/img/wellnessBg.jpg",
    title: "Body Processes",
    description:
      "Within Access Consciousness there are 60 different body processes covering your whole body. From boosting your immune system to correcting eyesight.",
  },
  {
    imageSrc: "/img/molecyles.jpg",
    title:
      "How to play with the molecules to change the energies to manifest a different physical reality.",
    description:
      "Are you willing to change anything in your life? Health, Relationship, and Money? Then this workshop is for you.",
  },
  {
    imageSrc: "/img/event2.png",
    title: "Be more Do less",
    description:
      "How do you just BE when your life has been all about DOING? Do you feel lazy and non productive by just being? Learn how to create more without going into stress.",
  },
  {
    imageSrc: "/img/yanig.jpg",
    title: "Access Energetic Facelift",
    description:
      "Access Energetic facelift is a hands-on process to rejuvenate the face and reverse the appearance of aging, plus a great technique to create similar effects throughout the body.",
  },
  {
    imageSrc: "/img/quantum.jpg",
    title: "Healing and Quantum Physics",
    description:
      "This is not another workshop about positive thinking or attraction. This is how creation and energy work. You will learn hands-on tools on how to work with the energy of a problem and when you change the energy you can have another result.",
  },
];

const Events = () => {
  /* img1.jpg */

  return (
    <section className="w-full">
      <div>
        <h1 className="text-center tex-ab  relative font-bold text-4xl">
          Six Separate Courses
        </h1>

        <p className=" text-center w-full md:w-2/5 mx-auto mt-7 text-lg ">
          There are a number of different paths you can take with all of them
          leading to the same place. To Access All of YOU
        </p>
      </div>
      <section className="w-full">
        <div className="px-[16px] max-sm:w-[95%] lg:w-[90%] mx-auto mt-11">
          <section className="flex  flex-wrap md:justify-evenly">
            {coursesData.map((course, index) => (
              <figure
                key={index}
                className=" boxEvent overflow-hidden relative my-2  mx-1 max-sm:w-full rounded-lg md:w-2/5 lg:w-[400px]"
              >
                <img
                  height={400}
                  width={400}
                  src={course.imageSrc}
                  alt="Wellness Background"
                  className="w-[400px] rounded-lg h-[300px] object-cover"
                />
                <figcaption className="absolute flex flex-wrap justify-center items-center h-full rounded-lg translate-x-[-100%] boxVents bg-[#121c2aaf] top-0 left-0">
                  <div className="px-3">
                  <h2 className="text-3xl  font-bold text-white ">{course.title}</h2>
                  <p className="text-lg  text-white mt-2 ">{course.description}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </section>
        </div>
      </section>
    </section>
  );
};

export default Events;
