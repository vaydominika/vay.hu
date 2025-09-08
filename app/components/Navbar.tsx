"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "./ui";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "My Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "My Works", href: "#works" },
    { name: "Work Together", href: "#work-together", isButton: true },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: "0px", width: "0px" });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinksRef = useRef<HTMLDivElement>(null);

  const moveIndicator = (target: HTMLElement) => {
    if (!navLinksRef.current) return;
    const navContainer = navLinksRef.current;
    const targetRect = target.getBoundingClientRect();
    const containerRect = navContainer.getBoundingClientRect();
    setIndicatorStyle({
      left: `${targetRect.left - containerRect.left}px`,
      width: `${targetRect.width}px`,
    });
  };

  const scrollToSection = (
    href: string,
    index: number,
    target: HTMLElement,
    silent: boolean = false
  ) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (!silent) {
      setActiveIndex(index);
      moveIndicator(target);
    }
  };

  // Inicializálás
  useEffect(() => {
    const activeEl = document.querySelector(".nav-links > .nav-item") as HTMLElement;
    if (activeEl) moveIndicator(activeEl);
  }, []);

  // Scroll figyelés
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // offset kicsit lejjebb

      let currentIndex = 0;
      navItems.forEach((item, index) => {
        const section = document.querySelector(item.href) as HTMLElement;
        if (section) {
          if (scrollPosition >= section.offsetTop) {
            currentIndex = index;
          }
        }
      });

      if (currentIndex !== activeIndex) {
        setActiveIndex(currentIndex);
        const targetButton = navLinksRef.current?.querySelectorAll<HTMLElement>(".nav-item")[currentIndex];
        if (targetButton) {
          moveIndicator(targetButton);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, navItems]);

  return (
    <nav
      className="fixed z-50 bg-primary rounded-full top-4 left-4 right-4 h-[3.25rem] md:top-[30px] md:left-[260px] md:right-[260px] md:h-[4rem]"
      style={{
        boxShadow:
          "0 2px 2px 0px rgba(0, 0, 0, 0.05), inset 0 2px 2px 0 rgba(255, 255, 255, 0.9)",
      }}
    >
      <div className="flex items-center h-full px-4 md:px-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/svg/signature.svg" alt="Signature" className="h-9 w-auto md:h-12" />
        </div>

        {/* Desktop Navigation Links */}
        <div
          ref={navLinksRef}
          className="hidden md:flex flex-1 items-center justify-center gap-8 relative nav-links"
        >
          <span
            className="absolute bottom-2 h-[2px] bg-third/50 transition-all duration-300 ease-out"
            style={indicatorStyle}
          />

          {navItems.map((item, index) =>
            item.isButton ? (
              <Button
                key={index}
                onClick={(e) => {
                  scrollToSection(item.href, index, e.currentTarget);
                }}
                color="var(--secondary-color)"
                textColor="var(--third-color)"
                borderRadius="3rem"
                className="font-semibold h-[3rem] translate-y-[-2px] nav-item relative cursor-pointer"
              >
                {item.name}
              </Button>
            ) : (
              <button
                key={index}
                onClick={(e) => {
                  scrollToSection(item.href, index, e.currentTarget);
                }}
                className="px-4 text-third font-medium relative group nav-item cursor-pointer"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-third/50 transition-all duration-300 ease-out group-hover:w-full"></span>
              </button>
            )
          )}
        </div>

        {/* Mobile hamburger */}
        <div className="ml-auto md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="h-9 w-9 inline-flex items-center justify-center rounded-full text-third hover:bg-white/30"
          >
            <span className="block w-5 h-0.5 bg-third relative">
              <span className={`absolute left-0 top-[-6px] w-5 h-0.5 bg-third transition-transform ${isMobileMenuOpen ? 'translate-y-[6px] rotate-45' : ''}`}></span>
              <span className={`absolute left-0 top-[6px] w-5 h-0.5 bg-third transition-transform ${isMobileMenuOpen ? '-translate-y-[6px] -rotate-45' : ''}`}></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full mt-2 px-4">
          <div className="rounded-2xl bg-primary/95 backdrop-blur p-3 shadow-lg border border-white/30">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) =>
                item.isButton ? (
                  <Button
                    key={index}
                    onClick={(e) => {
                      scrollToSection(item.href, index, e.currentTarget);
                      setIsMobileMenuOpen(false);
                    }}
                    color="var(--secondary-color)"
                    textColor="var(--third-color)"
                    borderRadius="1.5rem"
                    className="font-semibold h-[2.5rem] nav-item text-sm"
                  >
                    {item.name}
                  </Button>
                ) : (
                  <button
                    key={index}
                    onClick={(e) => {
                      scrollToSection(item.href, index, e.currentTarget);
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-3 py-2 text-left text-third font-medium nav-item rounded-lg hover:bg-white/20"
                  >
                    {item.name}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}