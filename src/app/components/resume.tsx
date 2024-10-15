import React from 'react'
import { motion } from "framer-motion"
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa'

const Resume = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">My Resume</h1>
        
        <div className="space-y-6">
          <ResumeSection
            icon={<FaGraduationCap className="w-6 h-6" />}
            title="Education"
            items={[
              {
                title: "Bachelor of Science in Computer Science",
                subtitle: "University of Technology",
                date: "2016 - 2020"
              }
            ]}
          />

          <ResumeSection
            icon={<FaBriefcase className="w-6 h-6" />}
            title="Work Experience"
            items={[
              {
                title: "Software Engineer",
                subtitle: "Tech Solutions Inc.",
                date: "2020 - Present",
                description: "Developed web applications using React and Node.js. Collaborated with cross-functional teams."
              },
              {
                title: "Junior Web Developer",
                subtitle: "WebCraft Studios",
                date: "2018 - 2020",
                description: "Assisted in the development of responsive websites. Gained experience in HTML, CSS, and JavaScript."
              }
            ]}
          />

          <ResumeSection
            icon={<FaCode className="w-6 h-6" />}
            title="Skills"
            items={[
              { title: "Frontend", subtitle: "React, TypeScript, HTML, CSS" },
              { title: "Backend", subtitle: "Node.js, Express, MongoDB" },
              { title: "Other", subtitle: "Git, Docker, AWS" }
            ]}
          />
        </div>
      </motion.div>
    </div>
  )
}

const ResumeSection = ({ icon, title, items }: {
  icon: React.ReactNode;
  title: string;
  items: any[];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-[.40rem] overflow-hidden transform transition duration-300 hover:scale-105 hover:-translate-y-1"
    >
      <div className="bg-[rgb(255,82,137)]/40 px-4 py-3 flex items-center">
        <div className="text-white">{icon}</div>
        <h2 className="ml-2 text-xl font-semibold text-white">{title}</h2>
      </div>
      <div className="p-4 space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-200 dark:border-gray-600 last:border-b-0 pb-4 last:pb-0">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.subtitle}</p>
            {item.date && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.date}</p>}
            {item.description && <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{item.description}</p>}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Resume
