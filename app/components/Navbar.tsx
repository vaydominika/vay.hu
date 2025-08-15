"use client";

import { useState, useEffect } from "react";
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

  const scrollToSection = (href: string, index: number, target: HTMLElement, silent: boolean = false) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (!silent) {
      setActiveIndex(index);
    }

    const navContainer = target.closest(".nav-links") as HTMLElement;
    if (navContainer) {
      const targetRect = target.getBoundingClientRect();
      const containerRect = navContainer.getBoundingClientRect();
      if (!silent) {
      setIndicatorStyle({
        left: `${targetRect.left - containerRect.left}px`,
        width: `${targetRect.width}px`,
      });
      }
    }
  };

  useEffect(() => {
    const activeEl = document.querySelector(".nav-links > .nav-item") as HTMLElement;
    if (activeEl) {
      const container = activeEl.parentElement as HTMLElement;
      const rect = activeEl.getBoundingClientRect();
      const contRect = container.getBoundingClientRect();
      setIndicatorStyle({
        left: `${rect.left - contRect.left}px`,
        width: `${rect.width}px`,
      });
    }
  }, []);

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
        <div className="flex-1 flex items-center justify-center gap-8 relative nav-links">
          <span
            className="absolute bottom-2 h-[2px] bg-secondary transition-all duration-300 ease-out"
            style={indicatorStyle}
          />

          {navItems.map((item, index) =>
            item.isButton ? (
              <Button
                key={index}
                onClick={(e) =>
                  scrollToSection(item.href, index, e.currentTarget, true)
                }
                color="var(--secondary-color)"
                textColor="var(--third-color)"
                borderRadius="3rem"
                className="font-semibold h-[3rem] translate-y-[-2px] nav-item relative"
              >
                {item.name}
              </Button>
            ) : (
              <button
                key={index}
                onClick={(e) =>
                  scrollToSection(item.href, index, e.currentTarget)
                }
                className="px-4 text-third font-medium relative group nav-item"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-secondary transition-all duration-300 ease-out group-hover:w-full"></span>
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
