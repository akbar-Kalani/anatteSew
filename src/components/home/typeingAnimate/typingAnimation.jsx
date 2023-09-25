import React, { useState, useEffect } from 'react';
import './typestyle.css';

function TypingAnimation() {
  /* const [text, setText] = useState('');
  const message = '  Energy Coaching and Healing.';
  const typingSpeed = 100; // Milliseconds per character
  const repeatDelay = 2000; // Delay before repeating (in milliseconds)

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (currentIndex < message.length) {
          setText((prevText) => prevText + message[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setText('');
            currentIndex = 0;
            startTyping();
          }, repeatDelay);
        }
      }, typingSpeed);
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
    };
  }, []);
 */
 /*  const [text, setText] = useState('');
  const message = 'Hello, World!'; // The message you want to type

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (currentIndex < message.length == 1) {
          setText((prevText) => prevText + message[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setText(''); // Clear the text
            currentIndex = 0;
            startTyping(); // Start over
          }, 2000); // Delay before starting over (1 second in this example)
        }
      }, 100); // Adjust the typing speed (milliseconds per character)
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
    };
  }, []); */



 
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const phrase = 'Energy Coaching and Healing';
  const typingDelay = 100; // Delay between each character
  const erasingDelay = 100; // Delay between erasing characters
  const newTextDelay = 2000; // Delay before typing next word

  useEffect(() => {
    const type = () => {
      if (isTyping) {
        // Typing
        setText(phrase.substring(0, text.length + 1));
        if (text === phrase) {
          setIsTyping(false);
          setTimeout(() => {
            setText('');
            setIsTyping(true);
          }, newTextDelay);
        }
      } else {
        // Erasing
        setText(phrase.substring(0, text.length - 1));
        if (text === '') {
          setIsTyping(true);
        }
      }
    };

    const typingTimer = setTimeout(type, isTyping ? typingDelay : erasingDelay);

    return () => clearTimeout(typingTimer);
  }, [text, isTyping, phrase]);

  return (
    <div className="typing-animation">
      <p className='flex  mt-5 font-semibold'>{text}</p>
    </div>
  );
}

export default TypingAnimation;
