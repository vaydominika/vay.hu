"use client";

import { Button, Card } from '../components/ui';
import Navbar from '../components/Navbar';

export default function SkillsPage() {
  const skills = [
    {
      bgColor: "var(--react-color)",
      svg: "/svg/reacticon.svg",
      description: "Modern React with Hooks, Context, and TypeScript"
    },
    {
      bgColor: "var(--angular-color)",
      svg: "/svg/angularicon.svg",
      description: "Angular 17+, RxJS, and Angular Material"
    },
    {
      bgColor: "var(--tailwind-color)",
      svg: "/svg/tailwindicon.svg",
      description: "Utility-first CSS framework for rapid UI development"
    },
    {
      bgColor: "var(--typescript-color)",
      svg: "/svg/typescripticon.svg",
      description: "Typed JavaScript for better development experience"
    },
    {
      bgColor: "var(--csharp-color)",
      svg: "/svg/csharpicon.svg",
      description: ".NET Core, ASP.NET, and C# development"
    },
    {
      bgColor: "var(--figma-color)",
      svg: "/svg/figmaicon.svg",
      description: "UI/UX design and prototyping"
    }
  ];

  return (
    <div id="skills" className="w-screen h-[1080px] relative overflow-hidden bg-primary">
      <Navbar />   
      {/* Header */}
      <div className="relative z-10 m-8 text-center" style={{ backgroundImage: 'url(/svg/skillsinactiontextbg.svg)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <h1 className="text-6xl font-bold text-primary p-6">
          Skills in <span className="italic" style={{ fontFamily: 'Quicky Nick, cursive' }}>Action</span>
        </h1>
      </div>
      
      {/* Skills Grid */}
      <div className="relative z-10 px-16 mx-auto max-w-[1400px]">
        <div className="grid grid-cols-3 gap-8 w-full">
          {skills.map((skill) => (
            <Card
              backgroundColor={skill.bgColor}
              borderRadius="1.5rem"
              padding="2rem"
              className="text-center hover:scale-105 transition-transform duration-300 relative"
            >
              {/* SVG Icon positioned at top left */}
              <div className="absolute top-4 left-4 w-12 h-12">
                <img 
                  src={skill.svg} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <p className="text-third/80 text-sm leading-relaxed">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
