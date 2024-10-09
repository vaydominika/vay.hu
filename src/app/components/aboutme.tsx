import React from 'react'
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card"
import '@/app/css/movingborder.css'
import me from '@/app/img/me.jpg'

const AboutMe = () => {
  return (
    <>
      <h2 className='text-4xl font-extrabold mb-4 text-center'>Get to know <span className="text-gray-700 italic">Me</span></h2>
      <div className="w-full max-w-5xl mx-auto mt-8 movingborder">
        <Card className='border-none shadow-none'>
          <CardContent className="p-6 inner">
          <p className="text-gray-700 p-6 text-center font-semibold text-2xl">🌟 Hi there! I’m Dominika 🌟</p>
            <div className="flex flex-col md:flex-row">
              <div className="md:flex-1 md:mr-6">
                <p className="text-gray-700 p-6 text-left tracking-tight text-2xl">
                    Welcome to my little corner of the digital world! I’m a web design enthusiast with a heart that beats for all things tech. When I’m not lost in lines of code or crafting stunning websites, you’ll find me doodling away or dreaming up the next big idea. My life’s mission? To make the internet a more beautiful and functional place, one pixel at a time! ✨💻🎨             
                </p>
                <p className="text-gray-700 p-6 text-left text-2xl tracking-tight">If you’re as excited about tech and creativity as I am, let’s connect and create something amazing together!</p>
              </div>
              <div className="md:w-1/2 flex md:mr-6 flex-col items-center justify-center md:items-end mb-4 md:mb-0">
                <div className="relative w-full h-[400px]">
                  <div className="inner">
                    <Image
                      src={me}
                      alt="Profile Picture"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-[0.25rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>

  )
}

export default AboutMe