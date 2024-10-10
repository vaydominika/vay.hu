'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState('')

  const handleLinkClick = (link: string) => {
    setActiveLink(link)
  }

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="m-auto ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-black/90 text-lg font-bold tracking-tight mr-4">
              Vay Dominika
            </Link>
            <div className="flex">
              {['About me', 'My skills', 'Resume', 'My works'].map((item, index) => (
                <Link 
                  key={index}
                  href={item === 'About me' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                  className={`relative text-black/70 font-semibold tracking-wider hover:text-primary transition-all duration-300 px-3 py-2 rounded-md text-sm group ${activeLink === item ? 'text-primary' : ''}`}
                  onClick={() => handleLinkClick(item)}
                >
                  <span className="relative z-10">{item}</span>
                  {activeLink === item && (
                    <>
                      <span className="absolute left-0 bottom-0 w-full h-[0.05rem] bg-primary/80"></span>
                      <span className="absolute right-0 top-0 w-full h-[0.05rem] bg-primary/80"></span>
                    </>
                  )}
                  {activeLink !== item && (
                    <>
                      <span className="absolute left-0 bottom-0 w-0 h-[0.05rem] bg-primary/80 transition-all duration-300 group-hover:w-full"></span>
                      <span className="absolute right-0 top-0 w-0 h-[0.05rem] bg-primary/80 transition-all duration-300 group-hover:w-full"></span>
                    </>
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <Button className="bg-gradient-to-r from-[rgb(255,82,137)] to-[rgb(253,147,181)] hover:bg-gradient-to-r hover:from-[rgb(255,82,137)] hover:to-[rgb(255,108,155)] hover:bg-opacity-90 transition-all duration-300 px-3 py-2 rounded-[0.40rem] text-sm font-medium ml-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_3px_0_rgba(255,_255,_255,_0.1)_inset] relative overflow-hidden group">
              <span className="relative z-10">Work Together</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar