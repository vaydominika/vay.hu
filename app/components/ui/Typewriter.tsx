"use client";

import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
  onComplete?: () => void;
}

export default function Typewriter({
  text,
  speed = 50,
  delay = 0,
  loop = false,
  className = "",
  onComplete
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const texts = Array.isArray(text) ? text : [text];

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(true);
    }
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    const currentText = texts[currentTextIndex];
    
    if (currentIndex < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      
      return () => clearTimeout(timer);
    } else {
      // Text completed
      if (onComplete) onComplete();
      
      if (loop) {
        // Wait a bit before starting the next text or looping
        const timer = setTimeout(() => {
          if (currentTextIndex < texts.length - 1) {
            setCurrentTextIndex(currentTextIndex + 1);
            setCurrentIndex(0);
            setDisplayText("");
          } else {
            // Loop back to first text
            setCurrentTextIndex(0);
            setCurrentIndex(0);
            setDisplayText("");
          }
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [currentIndex, currentTextIndex, isTyping, speed, loop, texts, onComplete]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
