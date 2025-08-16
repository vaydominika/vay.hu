"use client";

import { Button, Card } from '../components/ui';

export default function AboutPage() {
  return (
    <div id="about" className="w-screen h-[1080px] relative overflow-hidden bg-primary" style={{ backgroundImage: 'url(/svg/gettoknowmebg.svg)' }}>
      <div className="pt-[19px] text-center">
        <h1 className="text-[64px] font-bold text-third text-center mb-6">
          Get to know <span className="italic bg-gradient-to-br from-secondary to-[#4A55A1] bg-clip-text text-transparent pr-1">me</span>
        </h1>
        
        <Card
          backgroundColor="linear-gradient(135deg, #F5ECEA 0%, #ECEFF8 100%)"
          borderRadius="2rem"
          padding="3rem"
          className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-third to-[#4A55A1] bg-clip-text text-transparent mb-6">
            Hi there! I'm Dominika
          </h3>

          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4 text-2xl text-third/80 leading-relaxed text-left bg-gradient-to-b from-third to-[#4A55A1] bg-clip-text">
                <p>
                  Welcome to my little corner of the digital world! I'm a web design enthusiast with a heart that beats for all things tech. When I'm not lost in lines of code or crafting stunning websites, you'll find me doodling away or dreaming up the next big idea. My life's mission? To make the internet a more beautiful and functional place, one pixel at a time! ✨💻🎨
                </p>
                <p>
                  If you're as excited about tech and creativity as I am, let's connect and create something amazing together!
                </p>
              </div>
              
              <div className="flex gap-8 mt-8 justify-center">
                <Button 
                  color="var(--secondary-color)"
                  textColor="var(--third-color)"
                  borderRadius="1rem"
                  onClick={() => console.log('GitHub clicked')}
                  className="px-6 py-3 cursor-pointer flex items-center gap-2">
                    GitHub
                </Button>

                <Button 
                  color="var(--primary-color)"
                  textColor="var(--third-color)"
                  borderRadius="1rem"
                  onClick={() => console.log('View Projects clicked')}
                  className="px-6 py-3 cursor-pointer">
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
        </Card>
      </div>
    </div>
  );
}
