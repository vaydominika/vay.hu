import React from 'react'
import { motion } from "framer-motion"
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa'
import { TracingBeam } from '@/components/ui/tracing-beam';
import { Separator } from "@/components/ui/separator"

const Resume = () => {
  const items = [
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "Bachelor of Science in Computer Science",
      subtitle: "University of Technology",
      date: "2016 - 2020",
    },
    {
      icon: <FaBriefcase className="w-6 h-6" />,
      title: "Software Engineer",
      subtitle: "Tech Solutions Inc.",
      date: "2020 - Present",
      description: "Developed web applications using React and Node.js. Collaborated with cross-functional teams.",
    },
    {
      icon: <FaBriefcase className="w-6 h-6" />,
      title: "Junior Web Developer",
      subtitle: "WebCraft Studios",
      date: "2018 - 2020",
      description: "Assisted in the development of responsive websites. Gained experience in HTML, CSS, and JavaScript.",
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Frontend Skills",
      subtitle: "React, TypeScript, HTML, CSS",
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Backend Skills",
      subtitle: "Node.js, Express, MongoDB",
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Other Skills",
      subtitle: "Git, Docker, AWS",
    },
  ];

  const years = [2022, 2023, 2024];

  return (
    <TracingBeam className="px-6">
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">My Resume</h1>
          
          <div className="relative">
            {years.map((year, index) => (
              <YearNode key={index} year={year} index={index} total={years.length} />
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

const YearNode = ({ year, index, total }: { year: number, index: number, total: number }) => {
  const topPosition = (index / (total - 1)) * 100;
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: `${topPosition}%` }}>
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
      <div className={`bg-white dark:bg-gray-800 shadow-lg rounded-[.40rem] overflow-hidden transform transition duration-300 hover:scale-105 hover:-translate-y-1 w-5/12 ${position === 'left' ? 'mr-8' : 'ml-8'}`}>
        <div className="px-4 py-3 flex items-center">
          <div className="text-[rgb(255,82,137)]/80">{icon}</div>
          <h2 className="ml-2 text-xl font-semibold text-[rgb(255,82,137)]/80">{title}</h2>
        </div>
        <Separator className="w-[90%] mx-auto"/>
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
