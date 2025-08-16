"use client";

import { Typewriter } from '../components/ui';

export default function HomePage() {
  return (
    <div id="home" className="w-screen h-[1080px] relative overflow-hidden" style={{ backgroundImage: 'url(/svg/herobg.svg)', backgroundSize: 'fill' }}>      
      <div className="absolute inset-0 flex items-center">
        <div className="ml-[280px] transform -translate-y-18">
        <h1 className="text-[200px] bg-gradient-to-tr from-[#4A55A1] via-third to-[#4A55A1] bg-clip-text text-transparent" style={{ fontFamily: 'Des Montilles' }}>
            Vay Dominika
        </h1>
          <Typewriter 
            text="A digital explorer turning ideas into interactive web experiences with a touch of creativity."
            speed={40}
            className="text-2xl font-medium text-third leading-relaxed max-w-4xl drop-shadow-lg opacity-75"
          />
        </div>
      </div>
    </div>
  );
}
