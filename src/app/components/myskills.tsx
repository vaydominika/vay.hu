import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BiLogoTypescript } from 'react-icons/bi'
import { MdViewQuilt } from "react-icons/md"
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

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

  return (
    <div className="container mx-auto p-36">
      <h2 className="text-4xl tracking-tight font-extrabold mb-8 text-center">Skills in Action</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <Card key={index} className="rounded-[.40rem] text-gray-700 w-[20rem] h-[37rem] flex flex-col bg-neutral-50 border-none shadow-md shadow-[rgb(255,82,137)]/70 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center">
              <skill.icon className="text-gray-700 text-[7rem] mt-8" />
              <CardTitle className="text-xl text-center justify-center pt-16 tracking-tight">{skill.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex items-center">
              <p className="text-gray-600">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default MySkills
