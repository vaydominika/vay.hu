import  { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};

const Typewriter = ({ text, speed }: { text: string, speed: number }) => {
    const displayText = useTypewriter(text, speed);
  
    return <p className="py-8 text-3xl text-primary/70 tracking-tighter">{displayText}</p>;

  };
  
  export default Typewriter;