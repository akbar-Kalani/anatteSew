"use client";


import React, { useState } from 'react';

const Accordion = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleAccordion = () => {
    setShowMore(!showMore);
  };

  return (
    <div className=' w-full'>
      <p className='mt-4 font-light  leading-loose text-lg '>
        Anette Stjärnhjärta calls herself a nature woman; her parents introduced her to nature at a very young age. They would bring her out to the forest in the summer when they picked berries. Anette would sleep in her little basket in the comfort of a warm summer’s day. When she got older she would help pick berries. Her family would also take their boat out to the islands in the archipelago of Stockholm and go fishing. When they weren’t fishing Anette and her brother would be like seals, swimming in the water and sunbathing on the rocks.

        {showMore && (
          <>
            Anette, is a Body Whisperer, an intuitive healer and has psychic abilities. Anette is trained in many modalities such as; Scanning and operating bodies energetically, Shamanic healing, Licensed Bars Facilitator, Energy Coach, Cranio-Sacral treatment, Access Body Facilitator, Access Energetic Facelift Facilitator, Horse Coaching and holds the degree of Master of Science, in Chemistry at KTH, The Royal Institute of Technology, Stockholm,
          </>
        )}
       

        {showMore && (
          <>
            She was born a natural healer and has a special connection to nature, horses and dolphins and is capable of communicating telepathically with them.

            Anette’s desire to combine science and the healing arts, led her to study Quantum mechanics & physics and cell biology. She has a deep understanding for the “magic” that happens when you become space.

            She has extensive training in advanced healing and coaching modalities such as:

            Energy Psychology, Craniosacral therapy both for humans and horses, Shamanic Healing, Access Bars® Facilitator, Access Body Facilitator, Access Energetic Facelift and a Licensed Auramediator, performing AuraTransformation™ . She is also a licensed Coach in High Performance Coaching and a licensed Coach in Horse Assisted Education & Coaching, by EAHAE HorseDream International.

            While going through a life-threatening experience from a deadly spider bite in New Zealand, she was healed and trained by a shamanic Maori healer. The shaman taught her to scan bodies and perform psychic surgery.
          </>
        )}
         <br />
        <button  className='mt-8 btn text-gray-700 bg-[#d9dbe0] font-bold rounded-xl h-11 w-32 me-5' onClick={toggleAccordion}>{showMore ? 'Less' : 'Read More'}</button>
      </p>
    </div>
  );
};

export default Accordion;
