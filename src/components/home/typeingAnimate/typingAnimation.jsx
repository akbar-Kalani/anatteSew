import React, { useState, useEffect } from 'react';
import './typestyle.css';

function TypingAnimation() {
 

 
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
