"use client";

import { Button, Card } from '../components/ui';
import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <div id="about" className="w-[1920px] h-[1080px] bg-gradient-to-br from-secondary to-primary relative overflow-hidden">
      <Navbar />
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-third rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-third rounded-full"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-16 mx-auto max-w-[1400px]">
        <div className="grid grid-cols-2 gap-16 items-center w-full">
          {/* Left Side - Image/Profile */}
          <div className="text-center">
            <div className="w-80 h-80 bg-gradient-to-br from-third to-secondary rounded-full mx-auto mb-8 flex items-center justify-center">
              <div className="text-8xl">👨‍💻</div>
            </div>
            <h2 className="text-4xl font-bold text-third mb-4">John Doe</h2>
            <p className="text-xl text-third/70">Full Stack Developer</p>
          </div>
          
          {/* Right Side - About Text */}
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-third mb-6">
              About Me
            </h1>
            
            <div className="space-y-6">
              <p className="text-xl text-third/80 leading-relaxed">
                I'm a passionate developer with over 5 years of experience creating 
                innovative web solutions. I love turning complex problems into simple, 
                beautiful, and intuitive designs.
              </p>
              
              <p className="text-xl text-third/80 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button 
                color="var(--third-color)"
                textColor="var(--primary-color)"
                borderRadius="0.75rem"
                onClick={() => console.log('Download CV clicked')}
              >
                Download CV
              </Button>
              
              <Button 
                color="var(--secondary-color)"
                textColor="var(--third-color)"
                borderRadius="0.75rem"
                onClick={() => console.log('View Skills clicked')}
              >
                View Skills
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Stats */}
      <div className="absolute top-20 right-[calc(20px+130px)]">
        <Card 
          backgroundColor="rgba(255, 255, 255, 0.15)"
          borderRadius="1.5rem"
          padding="1.5rem"
          className="backdrop-blur-sm"
        >
          <div className="text-center text-third">
            <div className="text-3xl font-bold">5+</div>
            <div className="text-sm">Years Experience</div>
          </div>
        </Card>
      </div>
      
      <div className="absolute bottom-20 left-[calc(20px+130px)]">
        <Card 
          backgroundColor="rgba(255, 255, 255, 0.15)"
          borderRadius="1.5rem"
          padding="1.5rem"
          className="backdrop-blur-sm"
        >
          <div className="text-center text-third">
            <div className="text-3xl font-bold">50+</div>
            <div className="text-sm">Projects Completed</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
