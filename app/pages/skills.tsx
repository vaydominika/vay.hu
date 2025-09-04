"use client";

import { Card } from "../components/ui";

export default function SkillsPage() {
  const skills = [
    {
      borderColor: "var(--react-color)",
      bgColor: "var(--fourth-color)",
      svg: "/svg/reacticon.svg",
      description:
        "Met React rebuilding a side project into a SPA.",
    },
    {
      borderColor: "var(--angular-color)",
      bgColor: "var(--fourth-color)",
      svg: "/svg/angularicon.svg",
      description:
        "I met Angular on a large admin dashboard at work.",
    },
    {
      borderColor: "var(--tailwind-color)",
      bgColor: "var(--fourth-color)",
      svg: "/svg/tailwindicon.svg",
      description:
        "Picked up Tailwind while prototyping UI ideas.",
    },
    {
      borderColor: "var(--typescript-color)",
      bgColor: "var(--fourth-color)",
      svg: "/svg/typescripticon.svg",
      description:
        "I adopted TypeScript after a few painful runtime bugs.",
    },
    {
      borderColor: "var(--csharp-color)",
      bgColor: "var(--fourth-color)",
      svg: "/svg/csharpicon.svg",
      description:
        "Learned C# building backend APIs and tools.",
    },
    {
      borderColor: "var(--figma-color)",
      bgColor: "var(--fourth-color)",
      svg: "/svg/figmaicon.svg",
      description:
        "Started using Figma to sync design and dev.",
    },
  ];

  return (
    <div
      id="skills"
      className="w-screen relative overflow-hidden bg-primary pb-16"
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

      <div className="relative z-10 px-16 mx-auto max-w-[1400px]"
      >
        <div className="grid grid-cols-6 gap-6 w-full relative z-10">
          {skills.map((skill) => (
            <div key={skill.svg} className="relative group">
              <div className="-z-10 relative group">
                <div className="absolute w-full h-full top-0 left-0 overflow-hidden scale-100 group-hover:scale-[1.06] rounded-[1.5rem] transition-all duration-300">
                <div className="absolute opacity-0 group-hover:opacity-100 w-full h-full top-0 left-0 rounded-full scale-[2] animate-[spin_5s_linear_infinite]"
                  style={{
                    background: `conic-gradient(from var(--gradient-rotation, 0deg), ${skill.borderColor}, ${skill.borderColor}, white, white, ${skill.borderColor}, ${skill.borderColor}, white, white, ${skill.borderColor}, ${skill.borderColor})`,
                  }}
                
                ></div>
                </div>
              <Card
                backgroundColor={skill.bgColor}
                borderRadius="1.5rem"
                padding=".2rem"
                className="relative peer group-hover:scale-104 transition-transform duration-300 z-10 overflow-visible h-65 flex items-center justify-center"
              >
                <div className="absolute inset-0 rounded-2xl border-animation opacity-0 group-hover:opacity-100 z-0"></div>

                <div className="absolute -top-3 -left-3 w-16 h-16 z-20">
                  <img
                    src={skill.svg}
                    className="w-full h-full object-contain"
                    alt={skill.description}
                  />
                </div>

                <div className="relative z-10 h-full w-full flex px-2 py-14">
                  <p className="text-third/90 text-md leading-relaxed max-w-[90%]">
                    {skill.description}
                  </p>
                </div>
              </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
