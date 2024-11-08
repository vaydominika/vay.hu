'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const sections = ['home', 'aboutme', 'myskills', 'resume', 'myworks']

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            setActiveLink(sectionId === 'home' ? 'Home' : 
                          sectionId === 'aboutme' ? 'About me' :
                          sectionId === 'myskills' ? 'My skills' :
                          sectionId === 'resume' ? 'Resume' :
                          sectionId === 'myworks' ? 'My works' : '')
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach(section => {
      const element = document.getElementById(section)
      if (element) {
        sectionRefs.current[section] = element
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach(section => {
        const element = sectionRefs.current[section]
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  const handleLinkClick = (link: string) => {
    setActiveLink(link)
    setIsMenuOpen(false)
    const element = document.getElementById(link.toLowerCase().replace(' ', ''))
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = ['Home', 'About me', 'My skills', 'Resume', 'My works']

  return (
    <nav className="bg-[#FFF8F0]/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-[#382d23] text-lg font-bold tracking-tight mr-4">
              Vay Dominika
            </Link>
            {/* Desktop menu */}
            <div className="hidden md:flex">
              {navItems.map((item, index) => (
                <Link 
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '')}`} 
                  className={`relative text-[#584d42] font-semibold tracking-wider hover:text-[#382d23] transition-all duration-300 px-3 py-2 rounded-md text-sm group ${activeLink === item ? 'text-primary' : ''}`}
                  onClick={() => handleLinkClick(item)}
                >
                  <span className="relative z-10">{item}</span>
                  <span className={`absolute left-0 bottom-0 h-[0.05rem] bg-[#584d42] hover:bg-[#382d23] transition-all duration-300 ${activeLink === item ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  <span className={`absolute right-0 top-0 h-[0.05rem] bg-[#584d42] hover:bg-[#382d23] transition-all duration-300 ${activeLink === item ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-[#584d42] to-[#978779] hover:bg-gradient-to-r hover:from-[#584d42] hover:to-[#978779] hover:bg-opacity-90 transition-all duration-300 px-3 py-2 rounded-[0.40rem] text-sm font-medium ml-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_3px_0_rgba(255,_255,_255,_0.1)_inset] relative overflow-hidden group">
              <span className="relative z-10">Work Together</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase().replace(' ', '')}`}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeLink === item ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
              onClick={() => handleLinkClick(item)}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <Button className="w-full bg-gradient-to-r from-[#584d42] to-[#978779] hover:bg-gradient-to-r hover:from-[#978779] hover:to-[#584d42] hover:bg-opacity-90 transition-all duration-300 px-3 py-2 rounded-[0.40rem] text-sm font-medium shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_3px_0_rgba(255,_255,_255,_0.1)_inset] relative overflow-hidden group">
            <span className="relative z-10">Work Together</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
