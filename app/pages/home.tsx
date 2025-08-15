"use client";

import { Button, Card, Typewriter } from '../components/ui';
import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <div id="home" className="w-screen h-[1080px] relative overflow-hidden" style={{ backgroundImage: 'url(/svg/herobg.svg)', backgroundSize: 'fill' }}>
      <Navbar />
      
      {/* Typewriter Text Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="ml-[190px] px-16 transform translate-y-24">
          <Typewriter 
            text="A digital explorer turning ideas into interactive web experiences with a touch of creativity."
            speed={40}
            className="text-2xl font-medium text-third leading-relaxed max-w-4xl drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
