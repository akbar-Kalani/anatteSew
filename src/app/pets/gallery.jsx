import React from 'react';
import './Gallery.css'


const GridComponent = () => {
  /*   const imgs = [
      'https://i.ontraport.com/10651.33524e4fdf8503c71e23708603d69c5c.PNG',
      'https://i.ontraport.com/10651.d58ad6bcd5826f82470e8bf56ddb2518.PNG',
      'https://i.ontraport.com/10651.5c20cc9a840ba2b2e3127eb88f5aebbe.PNG',
      // Add more img URLs here...
    ]; */

  return (
    <section className='py-3 px-16'>
      <ul class="img-list flex flex-wrap">

        <li><img

          alt="Picture of the author"
          className='w-full' src="/img/cat.png" /></li>
        <li><img

          alt="Picture of the author"
          className='w-full' src="/img/dog.png" /></li>
        <li><img

          alt="Picture of the author"
          className='w-full' src="/img/hasit.png" /></li>

        <li><img

          alt="Picture of the author"
          className='w-full' src="/img/roe-deer.jpg" /></li>

        <li><img

          alt="Picture of the author"
          className='w-full' src="/img/elephant.jpg" /></li>

        <li><img

          alt="Picture of the author"
          className='w-full' src="/img/lion.jpg" /></li>



      </ul>

       <p className='my-5 first-letter:text-4xl first-letter:font-semibold'>Anette has the gift of telepathically communicating with animals and they show her, using pictures, how she can help them to heal.

Anette’s neighbor’s dog stopped eating and drinking and was lying in the forest to die. The neighbor asked Anette for help. She intuitively communicated with the dog who told her, that he was not going to go through another change of owner. Anette promised the dog that she would talk to the owner and asked the dog to drink some water from the puddle in a rock to get some strength to walk back down to his house.

Anette talked to the owner and when she heard the reason he wanted to die, she decided that he would go with her. The dog wagged his tail and went to the kitchen to eat and drink water. He decided to live and was his happy self again.

On another occasion, Anette’s daughter called and asks for healing for her riding teacher's horse Shadon, who was three years old. He had volvulus, the vet looked at him and said he had to be operated. The owner and horse were on their way to a vet clinic, a five-hour drive.

Anette did distant healing and was able to energetically connect with both the horse and the owner.  The horse received healing and Anette saw how he laid down to rest and then got up and started running in a meadow. The healing was complete.

The next morning Anette got a message that the stomach pains ended during the transport and they did not have to operate on the horse. That made Anette really happy and grateful. She is grateful for this God-given gift!</p>
    </section>
  );
};

export default GridComponent;



/*  <div className="grid">
      {imgs.map((img, index) => (
        <img className="item" key={index} src={img} alt={`img ${index + 1}`} />
      ))}
    </div>  */