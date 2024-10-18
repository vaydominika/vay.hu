import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BiLogoTypescript, BiLogoJavascript, BiLogoReact, BiLogoNodejs } from 'react-icons/bi'
import { MdViewQuilt } from "react-icons/md"
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { SiNextdotjs } from "react-icons/si";

const MySkills = () => {
  const skills = [
    {
      title: "Responsive Design & Development",
      description: "I specialize in creating responsive websites that adapt seamlessly across devices, ensuring optimal user experiences on any screen size. With a focus on clean, efficient code, I build modern interfaces that are both visually appealing and highly functional. My goal is to deliver performance-driven designs that enhance usability and engagement.",
      icon: HiOutlineDevicePhoneMobile
    },
    {
      title: "Empowering Web Applications",
      description: "I focus on using JavaScript to create dynamic and interactive web applications, enhancing user experiences with responsive interfaces. Additionally, I leverage TypeScript to improve code quality and maintainability by utilizing static typing and advanced features. This combination allows me to develop scalable applications while ensuring flexibility and robustness in my code.",
      icon: BiLogoTypescript
    },
    {
      title: "Designing Seamless User Interfaces",
      description: "I focus on UI/UX design to create intuitive and engaging user experiences. By understanding user behavior and applying design principles, I develop visually appealing interfaces that prioritize usability and accessibility. My aim is to blend aesthetics with functionality, ensuring that every interaction is seamless and enhances the overall user journey.",
      icon: MdViewQuilt
    },
  ]

  const languages = [
    { name: "JavaScript", icon: BiLogoJavascript, color: "text-yellow-500" },
    { name: "TypeScript", icon: BiLogoTypescript, color: "text-blue-500"},
    { name: "React", icon: BiLogoReact,color: "text-cyan-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800" },
    { name: "Node.js", icon: BiLogoNodejs, color: "text-green-500"},
  ]

  return (
    <div className="container mx-auto px-4 py-12 sm:py-24 md:py-36 max-w-6xl">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center tracking-tighter text-gray-700">Skills in <span className='italic'>Action</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <Card key={index} className="rounded-[.40rem] text-gray-700 w-full sm:w-11/12 md:w-10/12 lg:w-full mx-auto h-auto flex flex-col bg-neutral-50 border-none shadow-md shadow-[rgb(255,82,137)]/70 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center">
              <skill.icon className="text-gray-700 text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] mt-4 sm:mt-6 md:mt-8" />
              <CardTitle className="text-lg sm:text-xl text-center justify-center pt-8 sm:pt-12 md:pt-16 tracking-tight">{skill.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex items-center">
              <p className="text-gray-600 text-sm sm:text-base">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex items-center justify-center mt-16 mb-8">
        <div className="flex-grow h-px bg-gray-300 max-w-[100px] sm:max-w-[200px]"></div>
        <h3 className="text-2xl sm:text-3xl tracking-tighter font-bold mx-4 text-center text-gray-700">Technologies I Use</h3>
        <div className="flex-grow h-px bg-gray-300 max-w-[100px] sm:max-w-[200px]"></div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {languages.map((lang, index) => (
          <Card key={index} className="rounded-[.40rem] w-full h-32 sm:h-40 flex flex-col items-center justify-center bg-neutral-50 border-none shadow-md shadow-[rgb(255,82,137)]/50 hover:shadow-lg transition-shadow duration-300">
            <lang.icon className={`text-4xl sm:text-5xl mb-3 ${lang.color}`} />
            <p className="text-sm sm:text-base text-gray-600">{lang.name}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default MySkills
