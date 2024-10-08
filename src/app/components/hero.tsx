"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 flex items-center max-w-6xl m-auto">
      <div className="hero-content">
        <div className="max-w-6xl -translate-y-12">
          <h1 className="text-8xl font-bold text-primary">Vay Dominika</h1>
          <p className="py-8 text-3xl text-primary/70 tracking-tighter">A digital explorer turning <Typewriter
            words={['ideas into interactive web experiences with a touch of creativity.']}
            cursor
            cursorStyle='_'
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          /></p>
          <Button className="mr-4 text-xl p-6 rounded-[0.40rem] bg-primary text-white">Get to know me</Button>
          <Button variant="ghost" className="text-xl p-6 rounded-[0.40rem]">Build together</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero

  