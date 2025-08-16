"use client";

export default function Footer() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "My Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "My Works", href: "#works" },
    { name: "Work Together", href: "#work-together" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="w-screen h-[350px] bg-gradient-to-br from-third to-secondary relative overflow-hidden"> 
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-16">
        <div className="mb-12">
          <img 
            src="/svg/signature.svg" 
            alt="Vay Dominika Signature" 
            className="h-24 w-auto filter brightness-0 invert"
          />
        </div>
        
        <div className="mb-12">
          <div className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-white/80 hover:text-white transition-colors text-lg font-medium px-4 py-2"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="w-4xl h-px bg-white/30 mb-8"></div>
        <div className="text-center">
          <p className="text-white/60 text-sm">
            © 2025 Vay Dominika
          </p>
        </div>
      </div>
    </footer>
  );
}
