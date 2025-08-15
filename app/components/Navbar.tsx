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
      className="fixed top-[30px] left-[260px] right-[260px] z-50 h-[4rem] bg-primary rounded-full"
      style={{
        boxShadow:
          "0 2px 2px 0 rgba(0, 0, 0, 0.05), inset 0 2px 2px 0 rgba(255, 255, 255, 0.9)",
      }}
    >
      <div className="flex items-center h-full px-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/svg/signature.svg" alt="Signature" className="h-12 w-auto" />
        </div>

        {/* Navigation Links */}
        <div
          ref={navLinksRef}
          className="flex-1 flex items-center justify-center gap-8 relative nav-links"
        >
          <span
            className="absolute bottom-2 h-[2px] bg-third/50 transition-all duration-300 ease-out"
            style={indicatorStyle}
          />

          {navItems.map((item, index) =>
            item.isButton ? (
              <Button
                key={index}
                onClick={(e) =>
                  scrollToSection(item.href, index, e.currentTarget)
                }
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
                onClick={(e) =>
                  scrollToSection(item.href, index, e.currentTarget)
                }
                className="px-4 text-third font-medium relative group nav-item cursor-pointer"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-third/50 transition-all duration-300 ease-out group-hover:w-full"></span>
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
}