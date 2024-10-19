"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Typewriter } from 'react-simple-typewriter'
import backgroundimage from '@/app/img/aaabstract.png'
import Link from 'next/link'

const Hero = () => {
  const scrollToAboutMe = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const aboutMeSection = document.getElementById('aboutme');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8)), url(${backgroundimage.src})`, backgroundSize: "cover"}}>
    <div className="hero min-h-screen flex items-center max-w-6xl m-auto" >
      <div className="hero-content">
        <div className="max-w-6xl -translate-y-12">
          <h1 className="text-8xl font-bold text-black/90">Vay Dominika</h1>
          <p className="py-8 text-3xl text-primary/70 tracking-tighter">A digital explorer turning <Typewriter
            words={['ideas into interactive web experiences with a touch of creativity.']}
            cursor
            cursorStyle='_'
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </p>
          <Link href="#aboutme" onClick={scrollToAboutMe}>
            <Button className="mr-4 text-xl p-6 rounded-[0.40rem] bg-gradient-to-r from-[rgb(255,82,137)] to-[rgb(253,147,181)] text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_3px_0_rgba(255,_255,_255,_0.1)_inset] hover:bg-gradient-to-r hover:from-[rgb(255,82,137)] hover:to-[rgb(255,108,155)] hover:bg-opacity-90 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Get to know me</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Button>
          </Link>
          <Button variant="ghost" className="text-xl p-6 rounded-[0.40rem]">Build together</Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
