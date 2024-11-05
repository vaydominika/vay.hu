import React from 'react'
import { motion } from "framer-motion"
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa'
import { TracingBeam } from '@/components/ui/tracing-beam';
import { Separator } from "@/components/ui/separator"
import resumeBackground from "@/app/svg/resumebg.svg"

const Resume = () => {
  const items = [
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "IT system operator",
      subtitle: "MSZC Bláthy Ottó Villamosipari Technikum",
      description: "High School Graduation",
      date: "2018 - 2022",
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "IT system operator",
      subtitle: "MSZC Bláthy Ottó Villamosipari Technikum",
      date: "2022 - 2023",
      description: " Technician Certificate (OKJ).",
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "BSC in Computer Science Engineer",
      subtitle: "University of Miskolc.",
      date: "2023 - present",
      description: "Ongoing studies at the University of Miskolc.",
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Student Frontend Developer",
      subtitle: "Evosoft - Evocampus",
      date: "2024 - present",
      description: "As a student frontend developer, my tasks included designing and developing responsive and user-friendly websites using modern technologies. I also actively participated in team collaboration to create efficient solutions together.",
    },
  ];

  const years = [
    { year: 2022, position: 0 },
    { year: 2023, position: 31 },
    { year: 2024, position: 83 }
  ];

  return (
    <TracingBeam>
      <div className="min-h-screen py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: `none`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="hidden sm:block absolute inset-0 z-[-1]" style={{ backgroundImage: `url(${resumeBackground.src})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-center text-gray-700 dark:text-white mb-8 sm:mb-12">My Resume</h1>
          
          <div className="relative">
            {years.map((yearData, index) => (
              <YearNode key={index} year={yearData.year} position={yearData.position} />
            ))}
            {items.map((item, index) => (
              <ResumeItem
                key={index}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                date={item.date}
                description={item.description}
                position={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </TracingBeam>
  )
}

const YearNode = ({ year, position }: { year: number, position: number }) => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: `${position}%` }}>
      <div className="bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md font-bold tracking-tighter">
        {year}
      </div>
    </div>
  );
};

const ResumeItem = ({ icon, title, subtitle, date, description, position }: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  date?: string;
  description?: string;
  position: 'left' | 'right';
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`mb-8 flex ${position === 'left' ? 'justify-start' : 'justify-end'} w-full`}
    >
      <div className={`bg-white dark:bg-gray-800 min-h-48 group mb-12 shadow-lg rounded-[.40rem] overflow-hidden transform transition duration-300 hover:scale-105 hover:-translate-y-1 w-full sm:w-5/12 ${position === 'left' ? 'mr-0 sm:mr-8' : 'ml-0 sm:ml-8'}`}>
        <div className="px-4 py-3 flex items-center group-hover:bg-[rgb(255,82,137)]/60 transition-colors duration-300">
          <div className="text-[rgb(255,82,137)]/80 group-hover:text-white transition-colors duration-300">{icon}</div>
          <h2 className="ml-2 text-xl font-semibold tracking-tighter text-[rgb(255,82,137)]/80 group-hover:text-white transition-colors duration-300">{title}</h2>
        </div>
        <Separator className="group-hover:hidden w-[90%] mx-auto"/>
        <div className="p-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">{subtitle}</p>
          {date && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{date}</p>}
          {description && <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{description}</p>}
        </div>
      </div>
    </motion.div>
  )
}

export default Resume
