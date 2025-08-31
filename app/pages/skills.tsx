"use client";

import { Card } from "../components/ui";

export default function SkillsPage() {
  const skills = [
    {
      bgColor: "var(--react-color)",
      svg: "/svg/reacticon.svg",
      description:
        "A flexible JavaScript library for building fast, modern web apps through reusable components. It makes crafting interactive UIs straightforward and enjoyable, while its huge ecosystem and active community make it easy to scale from small projects to complex, production-ready applications.",
    },
    {
      bgColor: "var(--angular-color)",
      svg: "/svg/angularicon.svg",
      description:
        "A full-featured framework built by Google that comes with everything you need—routing, state management, testing, and more—already included. It’s designed for building large, structured, and reliable applications where consistency, scalability, and long-term maintainability really matter.",
    },
    {
      bgColor: "var(--tailwind-color)",
      svg: "/svg/tailwindicon.svg",
      description:
        "A utility-first CSS framework that lets you style your applications using small, composable classes instead of writing custom CSS for everything. It makes designing responsive, consistent, and customizable interfaces much faster, while still giving you the flexibility to create unique designs when needed.",
    },
    {
      bgColor: "var(--typescript-color)",
      svg: "/svg/typescripticon.svg",
      description:
        "JavaScript’s strongly typed superset that brings safety, structure, and clarity to your code. It catches errors early, improves collaboration on larger projects, and makes it easier to maintain and refactor applications as they grow in size and complexity.",
    },
    {
      bgColor: "var(--csharp-color)",
      svg: "/svg/csharpicon.svg",
      description:
        "A versatile programming language developed by Microsoft that’s used to build everything from enterprise web apps and desktop software to cloud solutions. With strong typing, modern features, and powerful frameworks, it offers reliability, productivity, and flexibility for developers.",
    },
    {
      bgColor: "var(--figma-color)",
      svg: "/svg/figmaicon.svg",
      description:
        "A collaborative, browser-based design tool that helps teams turn ideas into sleek, interactive prototypes. Its real-time collaboration, easy sharing, and plugin ecosystem make it ideal for creating design systems and bridging the gap between designers and developers.",
    },
  ];

  return (
    <div
      id="skills"
      className="w-screen h-[1000px] relative overflow-hidden bg-primary"
    >
      <div
        className="relative z-10 m-8 text-center"
        style={{
          backgroundImage: "url(/svg/skillsinactiontextbg.svg)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-6xl font-bold text-primary p-6">
          Skills in{" "}
          <span
            className="italic"
            style={{ fontFamily: "Quicky Nick, cursive" }}
          >
            Action
          </span>
        </h1>
      </div>

      <div className="relative z-10 px-16 mx-auto max-w-[1400px]">
        <div className="grid grid-cols-3 gap-8 w-full relative z-10">
          {skills.map((skill) => (
            <div key={skill.svg} className="relative group">
              <div className="-z-10 relative group">
                <div className="absolute w-full h-full top-0 left-0 overflow-hidden scale-100 group-hover:scale-[1.07] rounded-[1.7rem] transition-all duration-300">
                <div className="absolute opacity-0 group-hover:opacity-100 w-full h-full top-0 left-0 rounded-full scale-[2] animate-[spin_5s_linear_infinite]"
                  style={{
                    background: `conic-gradient(from var(--gradient-rotation, 0deg), ${skill.bgColor}, ${skill.bgColor}, white, white, ${skill.bgColor}, ${skill.bgColor}, white, white, ${skill.bgColor}, ${skill.bgColor})`,
                  }}
                
                ></div>
                </div>
              <Card
                backgroundColor={skill.bgColor}
                borderRadius="1.5rem"
                padding=".8rem"
                className="relative peer text-left group-hover:scale-105 transition-transform duration-300 flex items-start gap-4 z-10 h-84 overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl border-animation opacity-0 group-hover:opacity-100"></div>

                <div className="w-20 h-20 flex-shrink-0">
                  <img
                    src={skill.svg}
                    className="w-full h-full object-contain"
                    alt={skill.description}
                  />
                </div>

                <p className="text-third/90 text-lg leading-relaxed flex-1 py-1">
                  {skill.description}
                </p>
              </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
