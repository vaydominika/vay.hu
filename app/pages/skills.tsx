"use client";

import { Button, Card } from '../components/ui';
import Navbar from '../components/Navbar';

export default function SkillsPage() {
  const skills = [
    {
      name: "React",
      color: "var(--react-color)",
      icon: "⚛️",
      description: "Modern React with Hooks, Context, and TypeScript"
    },
    {
      name: "Angular",
      color: "var(--angular-color)",
      icon: "🅰️",
      description: "Angular 17+, RxJS, and Angular Material"
    },
    {
      name: "Tailwind CSS",
      color: "var(--tailwind-color)",
      icon: "🎨",
      description: "Utility-first CSS framework for rapid UI development"
    },
    {
      name: "TypeScript",
      color: "var(--typescript-color)",
      icon: "📘",
      description: "Typed JavaScript for better development experience"
    },
    {
      name: "C#",
      color: "var(--csharp-color)",
      icon: "🔷",
      description: ".NET Core, ASP.NET, and C# development"
    },
    {
      name: "Figma",
      color: "var(--figma-color)",
      icon: "🎯",
      description: "UI/UX design and prototyping"
    }
  ];

  return (
    <div id="skills" className="w-[1920px] h-[1080px] bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      <Navbar />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 w-32 h-32 border border-third rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-third rounded-full"></div>
        <div className="absolute bottom-24 left-32 w-28 h-28 border border-third rounded-full"></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 pt-16 pb-12 text-center">
        <h1 className="text-6xl font-bold text-third mb-6">
          My Skills
        </h1>
        <p className="text-2xl text-third/70 max-w-4xl mx-auto px-8">
          A comprehensive overview of the technologies and tools I use to bring ideas to life
        </p>
      </div>
      
      {/* Skills Grid */}
      <div className="relative z-10 px-16 mx-auto max-w-[1400px]">
        <div className="grid grid-cols-3 gap-8 w-full">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              backgroundColor="rgba(255, 255, 255, 0.95)"
              borderRadius="1.5rem"
              padding="2rem"
              className="text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-6xl mb-4">{skill.icon}</div>
              <h3 
                className="text-2xl font-bold mb-3"
                style={{ color: skill.color }}
              >
                {skill.name}
              </h3>
              <p className="text-third/80 text-sm leading-relaxed">
                {skill.description}
              </p>
              
              {/* Skill Level Indicator */}
              <div className="mt-6">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-1000"
                    style={{ 
                      backgroundColor: skill.color,
                      width: `${85 + Math.random() * 15}%`
                    }}
                  ></div>
                </div>
                <p className="text-xs text-third/60 mt-2">Expert Level</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Bottom CTA */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <Button 
          color="var(--third-color)"
          textColor="var(--primary-color)"
          borderRadius="1rem"
          onClick={() => console.log('View Projects clicked')}
        >
          View My Projects
        </Button>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/3 right-8">
        <Card 
          backgroundColor="rgba(255, 255, 255, 0.1)"
          borderRadius="1rem"
          padding="1rem"
          className="backdrop-blur-sm"
        >
          <div className="text-third text-center">
            <div className="text-2xl mb-1">🚀</div>
            <div className="text-xs">Always Learning</div>
          </div>
        </Card>
      </div>
      
      <div className="absolute bottom-1/3 left-8">
        <Card 
          backgroundColor="rgba(255, 255, 255, 0.1)"
          borderRadius="1rem"
          padding="1rem"
          className="backdrop-blur-sm"
        >
          <div className="text-third text-center">
            <div className="text-2xl mb-1">💪</div>
            <div className="text-xs">Expert Level</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
