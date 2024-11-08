import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BiLogoTypescript, BiLogoJavascript, BiLogoReact, BiLogoNodejs } from 'react-icons/bi'
import { MdViewQuilt } from "react-icons/md"
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { SiNextdotjs } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { cn } from '@/lib/utils';

const MySkills = () => {
  const skills = [
    {
      icon: HiOutlineDevicePhoneMobile,
      color: "#EADBC8",
      title: "Web Development",
      description: "I specialize in creating responsive websites that adapt seamlessly across devices, ensuring optimal user experiences on any screen size. With a focus on clean, efficient code, I build modern interfaces that are both visually appealing and highly functional. My goal is to deliver performance-driven designs that enhance usability and engagement.",
    },
    {
      icon: BiLogoJavascript,
      color: "#EADBC8",
      title: "JavaScript & TypeScript",
      description: "I focus on using JavaScript to create dynamic and interactive web applications, enhancing user experiences with responsive interfaces. Additionally, I leverage TypeScript to improve code quality and maintainability by utilizing static typing and advanced features. This combination allows me to develop scalable applications while ensuring flexibility and robustness in my code.",
    },
    {
      icon: FaFigma,
      color: "#EADBC8",
      title: "UI/UX Design",
      description: "I focus on UI/UX design to create intuitive and engaging user experiences. By understanding user behavior and applying design principles, I develop visually appealing interfaces that prioritize usability and accessibility. My aim is to blend aesthetics with functionality, ensuring that every interaction is seamless and enhances the overall user journey.",
    },
  ]

  const languages = [
    { name: "JavaScript", icon: BiLogoJavascript},
    { name: "TypeScript", icon: BiLogoTypescript},
    { name: "React", icon: BiLogoReact},
    { name: "Next.js", icon: SiNextdotjs},
    { name: "Node.js", icon: BiLogoNodejs},
    { name: "Tailwind", icon: BiLogoNodejs},
    { name: "Figma", icon: BiLogoNodejs}
  ]

  return (
    <div className="container mx-auto px-4 py-12 sm:py-24 md:py-36 max-w-6xl">
      <div className="relative flex justify-center">
        <div className="flex items-center gap-4">
          <div className="h-[.2rem] w-16 rounded-full bg-gradient-to-r from-transparent to-[#584d42]"></div>
          <h2 className="text-2xl px-4 sm:text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-r from-[#584d42] via-[#978779] to-[#d1c2ae] text-transparent bg-clip-text">
            Skills in <span className="italic">Action</span>
          </h2>
          <div className="h-[.2rem] w-16 rounded-full bg-gradient-to-l from-transparent to-[#978779]"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
        {skills.map((skill, index) => {
          const shadowColor = "shadow-gray-500/50";
          return (
            <Card key={index} className={`rounded-[.40rem] overflow-hidden w-full mx-auto h-auto flex flex-col bg-[#EADBC8] border-none shadow-md hover:shadow-xl transition-shadow duration-300 ${shadowColor}`}>
              <div className='bg-[#F5E8D8] w-full h-[40%]'>
                <div className={cn("w-full h-full rounded-br-[1rem] flex items-center justify-center bg-[#EADBC8]")}>
                  <div className='flex flex-col items-center justify-center'>
                  <skill.icon className={`text-3xl sm:text-4xl md:text-6xl mb-2 sm:mb-3 text-[#978779] text-center `} />
                  <p className="text-[#978779] text-xs sm:text-sm md:text-2xl font-bold text-center">{skill.title}</p>
                  </div>
                </div>
              </div>
              <div className={cn("w-full h-[60%] bg-[#EADBC8]")}>
                <div className='bg-[#F5E8D8] rounded-tl-[1rem] w-full h-full'>
                  <p className="text-[#978779] text-xs sm:text-sm md:text-base p-4 pt-8 pb-48">{skill.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="flex items-center justify-center mt-16 mb-8">
        <div className="flex-grow h-px bg-gray-300 max-w-[100px] sm:max-w-[200px]"></div>
        <h3 className="text-2xl sm:text-3xl tracking-tighter font-bold mx-4 text-center text-[#584d42]">Technologies I Use</h3>
        <div className="flex-grow h-px bg-gray-300 max-w-[100px] sm:max-w-[200px]"></div>
      </div>
      <div className="grid grid-cols-7 gap-6 justify-items-center items-center mx-auto">
        {languages.map((lang, index) => {
          const shadowColor = "shadow-gray-500/50";
          
          return (
            <Card key={index} className={`${index % 7 === 0 ? 'rounded-tr-[4rem] rounded-bl-[4rem]' : 
              index % 7 === 1 ? 'rounded-tr-[3rem] rounded-bl-[3rem]' :
              index % 7 === 2 ? 'rounded-tr-[2rem] rounded-bl-[2rem]' :
              index % 7 === 3 ? 'rounded-[.40rem]' :
              index % 7 === 4 ? 'rounded-tl-[2rem] rounded-br-[2rem]' :
              index % 7 === 5 ? 'rounded-tl-[3rem] rounded-br-[3rem]' :
              index % 7 === 6 ? 'rounded-tl-[4rem] rounded-br-[4rem]' :
              'rounded-[1.5rem]'} w-full h-24 sm:h-32 md:h-30 flex flex-col items-center justify-center bg-[#F5E8D8] border-none shadow-md ${shadowColor} hover:shadow-lg transition-shadow duration-300`}>
              <lang.icon className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 text-[#978779]" />
              <p className="text-xs sm:text-sm md:text-base text-[#978779]">{lang.name}</p>
            </Card>
          );
        })}
      </div>
    </div>
  )
}

export default MySkills
