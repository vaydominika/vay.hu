"use client";

import { Button } from '../components/ui';
import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <div id="about" className="w-screen h-[1080px] relative overflow-hidden bg-primary" style={{ backgroundImage: 'url(/svg/gettoknowmebg.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <Navbar />
      
      {/* Get to know me Section */}
      <div className="pt-[19px] text-center">
        <h1 className="text-[64px] font-bold text-third text-center mb-6">
          Get to know <span className="italic bg-gradient-to-br from-secondary to-[#4A55A1] bg-clip-text text-transparent">me</span>
        </h1>
        
        <div
          className="backdrop-blur-sm max-w-6xl mx-auto rounded-[2rem] p-12"
          style={{
            background: 'linear-gradient(135deg, #F5ECEA 0%, #ECEFF8 100%)',
            boxShadow: '0 8px 5px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), inset 0 2px 2px 0 rgba(255, 255, 255, 0.9)'
          }}
        >
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-third to-[#4A55A1] bg-clip-text text-transparent">
                Hi there! I'm Dominika
              </h3>
              
              <div className="space-y-4 text-lg text-third/80 leading-relaxed text-left bg-gradient-to-b from-third to-[#4A55A1] bg-clip-text">
                <p>
                  Welcome to my little corner of the digital world! I'm a web design enthusiast with a heart that beats for all things tech. When I'm not lost in lines of code or crafting stunning websites, you'll find me doodling away or dreaming up the next big idea. My life's mission? To make the internet a more beautiful and functional place, one pixel at a time! ✨💻🎨
                </p>
                <p>
                  If you're as excited about tech and creativity as I am, let's connect and create something amazing together!
                </p>
              </div>
              
              {/* Buttons */}
              <div className="flex gap-8 mt-8 justify-center">
                <button 
                  className="px-6 py-3 cursor-pointer flex items-center gap-2 rounded-[1rem] font-medium hover:scale-105 active:scale-95 transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--secondary-color)',
                    color: 'var(--third-color)',
                    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.35), inset 0 2px 2px 0 rgba(255, 255, 255, 0.9)'
                  }}
                  onClick={() => console.log('GitHub clicked')}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </button>
                <Button 
                  color="var(--primary-color)"
                  textColor="var(--third-color)"
                  borderRadius="1rem"
                  onClick={() => console.log('View Projects clicked')}
                  className="px-6 py-3 cursor-pointer"
                >
                  View Projects
                </Button>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="flex justify-center">
              <img 
                src="/svg/gettoknowmeframe.svg" 
                alt="Dominika" 
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
