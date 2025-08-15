"use client";

import { Button, Card } from './ui';

export default function Footer() {
  const socialLinks = [
    { name: "LinkedIn", icon: "💼", url: "#", color: "#0077B5" },
    { name: "GitHub", icon: "🐙", url: "#", color: "#333" },
    { name: "Twitter", icon: "🐦", url: "#", color: "#1DA1F2" },
    { name: "Dribbble", icon: "🏀", url: "#", color: "#EA4C89" },
    { name: "Behance", icon: "🎨", url: "#", color: "#1769FF" }
  ];

  const quickLinks = [
    { name: "Home", url: "#" },
    { name: "About", url: "#" },
    { name: "Skills", url: "#" },
    { name: "Resume", url: "#" },
    { name: "Works", url: "#" },
    { name: "Contact", url: "#" }
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Consulting",
    "Maintenance"
  ];

  return (
    <footer className="w-[1920px] h-[250px] bg-gradient-to-r from-third to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-8 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute top-16 right-12 w-12 h-12 border border-white rounded-full"></div>
        <div className="absolute bottom-12 left-16 w-10 h-10 border border-white rounded-full"></div>
      </div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 h-full flex items-center px-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4">John Doe</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Full Stack Developer passionate about creating innovative digital solutions that make a difference.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    color="rgba(255, 255, 255, 0.2)"
                    textColor="white"
                    borderRadius="0.5rem"
                    onClick={() => console.log(`${social.name} clicked`)}
                    className="w-10 h-10 p-0 flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(`${link.name} clicked`);
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div className="col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-white/80 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact & CTA */}
            <div className="col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-3 mb-6">
                <p className="text-white/80 text-sm">📧 john.doe@email.com</p>
                <p className="text-white/80 text-sm">📱 +1 (555) 123-4567</p>
                <p className="text-white/80 text-sm">📍 San Francisco, CA</p>
              </div>
              
              <Button
                color="rgba(255, 255, 255, 0.2)"
                textColor="white"
                borderRadius="0.75rem"
                onClick={() => console.log('Start project clicked')}
                className="w-full"
              >
                Start a Project
              </Button>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-8 pt-6">
            <div className="flex justify-between items-center">
              <p className="text-white/60 text-sm">
                © 2024 John Doe. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a 
                  href="#" 
                  className="text-white/60 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Privacy Policy clicked');
                  }}
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  className="text-white/60 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Terms of Service clicked');
                  }}
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
