import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card"
import '@/app/css/movingborder.css'
import me from '@/app/img/me.jpg'
import { Button } from "@/components/ui/button"

const AboutMe = () => {
  return (
    <>
      <h2 className='text-4xl font-extrabold mb-4 text-center'>Get to know <span className="bg-clip-text text-transparent bg-gradient-to-r from-[rgb(255,82,137)] to-[rgba(255,108,155,0.76)] italic">Me</span></h2>
      <div className="w-full max-w-5xl mx-auto mt-8 movingborder">
        <Card className='border-none shadow-none bg-neutral-50  rounded-[0.40rem]'>
          <CardContent className="p-6 inner">
          <p className="text-gray-700 p-6 text-center font-semibold text-2xl">🌟 Hi there! I’m Dominika 🌟</p>
            <div className="flex flex-col md:flex-row">
              <div className="md:flex-1 md:mr-6">
                <p className="text-gray-700 p-6 text-left tracking-tight text-2xl">
                    Welcome to my little corner of the digital world! I’m a web design enthusiast with a heart that beats for all things tech. When I’m not lost in lines of code or crafting stunning websites, you’ll find me doodling away or dreaming up the next big idea. My life’s mission? To make the internet a more beautiful and functional place, one pixel at a time! ✨💻🎨             
                </p>
                <p className="text-gray-700 p-6 text-left text-2xl tracking-tight">If you're as excited about tech and creativity as I am, let's connect and create something amazing together!</p>
                
                {/* Updated buttons with link */}
                <div className="flex justify-center mt-6 space-x-4">
                  <Link href="https://github.com/vaydominika" target="_blank" rel="noopener noreferrer">
                    <Button className="text-lg p-4 rounded-[0.40rem] bg-gradient-to-r from-[rgb(255,82,137)] to-[rgb(253,147,181)] text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_3px_0_rgba(255,_255,_255,_0.1)_inset] hover:bg-gradient-to-r hover:from-[rgb(255,82,137)] hover:to-[rgb(255,108,155)] hover:bg-opacity-90 transition-all duration-300 relative overflow-hidden group">
                      <span className="relative z-10 flex items-center">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                        Github
                      </span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </Button>
                  </Link>
                  <Button variant="ghost" className="text-lg p-4 rounded-[0.40rem]">View Projects</Button>
                </div>
              </div>
              <div className="md:w-[25rem] md:h-[35.7rem] flex md:mr-6 flex-col items-center justify-center md:items-end mb-4 md:mb-0">
                <div className="relative w-full h-full">
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
