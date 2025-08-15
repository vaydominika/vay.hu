"use client";

import { Button, Card } from '../components/ui';
import Navbar from '../components/Navbar';

export default function ResumePage() {
  const experience = [
    {
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Led development of enterprise web applications using React, Node.js, and AWS. Managed team of 5 developers and improved application performance by 40%.",
      technologies: ["React", "Node.js", "AWS", "TypeScript", "MongoDB"]
    },
    {
      company: "Digital Innovations Inc",
      position: "Frontend Developer",
      period: "2020 - 2022",
      description: "Developed responsive web applications and mobile-first designs. Collaborated with UX designers to implement user-centered solutions.",
      technologies: ["Angular", "TypeScript", "SCSS", "RxJS", "Angular Material"]
    },
    {
      company: "StartupHub",
      position: "Junior Developer",
      period: "2019 - 2020",
      description: "Built and maintained web applications using modern JavaScript frameworks. Participated in code reviews and agile development processes.",
      technologies: ["JavaScript", "React", "CSS3", "HTML5", "Git"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      period: "2015 - 2019",
      description: "Graduated with honors. Specialized in Software Engineering and Web Development."
    },
    {
      degree: "Web Development Certification",
      school: "Code Academy",
      period: "2018",
      description: "Intensive 6-month program covering modern web development technologies and best practices."
    }
  ];

  const certifications = [
    "AWS Certified Developer Associate",
    "Microsoft Certified: Azure Developer Associate",
    "Google Cloud Professional Developer",
    "Certified Scrum Master (CSM)"
  ];

  return (
    <div id="resume" className="w-[1920px] h-[2250px] bg-gradient-to-br from-primary to-secondary relative">
      <Navbar />
      {/* Header Section */}
      <div className="h-[400px] bg-gradient-to-r from-third to-secondary flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">John Doe</h1>
          <p className="text-2xl mb-6">Full Stack Developer</p>
          <div className="flex gap-4 justify-center">
            <Button 
              color="rgba(255, 255, 255, 0.2)"
              textColor="white"
              borderRadius="0.75rem"
              onClick={() => console.log('Download PDF clicked')}
            >
              Download PDF
            </Button>
            <Button 
              color="rgba(255, 255, 255, 0.2)"
              textColor="white"
              borderRadius="0.75rem"
              onClick={() => console.log('Print clicked')}
            >
              Print Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Contact & Summary Section */}
      <div className="px-16 py-12 mx-auto max-w-[1400px]">
        <div className="grid grid-cols-2 gap-16 w-full">
          {/* Contact Information */}
          <Card 
            backgroundColor="rgba(255, 255, 255, 0.95)"
            borderRadius="1rem"
            padding="2rem"
          >
            <h2 className="text-3xl font-bold text-third mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <span className="text-third">john.doe@email.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <span className="text-third">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span className="text-third">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔗</span>
                <span className="text-third">linkedin.com/in/johndoe</span>
              </div>
            </div>
          </Card>

          {/* Professional Summary */}
          <Card 
            backgroundColor="rgba(255, 255, 255, 0.95)"
            borderRadius="1rem"
            padding="2rem"
          >
            <h2 className="text-3xl font-bold text-third mb-6">Professional Summary</h2>
            <p className="text-third/80 leading-relaxed text-lg">
              Experienced Full Stack Developer with 5+ years of expertise in modern web technologies. 
              Passionate about creating scalable, user-friendly applications and leading development teams. 
              Strong problem-solving skills and commitment to writing clean, maintainable code.
            </p>
          </Card>
        </div>
      </div>

      {/* Experience Section */}
      <div className="px-16 py-12 bg-white/50 mx-auto max-w-[1400px]">
        <div className="w-full">
          <h2 className="text-4xl font-bold text-third text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card 
                key={index}
                backgroundColor="rgba(255, 255, 255, 0.95)"
                borderRadius="1rem"
                padding="2rem"
                className="hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-third">{job.position}</h3>
                    <p className="text-xl text-secondary font-semibold">{job.company}</p>
                  </div>
                  <span className="text-lg text-third/70 bg-secondary/20 px-4 py-2 rounded-full">
                    {job.period}
                  </span>
                </div>
                <p className="text-third/80 text-lg leading-relaxed mb-4">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-third/10 text-third rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="px-16 py-12 mx-auto max-w-[1400px]">
        <div className="grid grid-cols-2 gap-16 w-full">
          {/* Education */}
          <div>
            <h2 className="text-4xl font-bold text-third text-center mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  backgroundColor="rgba(255, 255, 255, 0.95)"
                  borderRadius="1rem"
                  padding="2rem"
                >
                  <h3 className="text-xl font-bold text-third mb-2">{edu.degree}</h3>
                  <p className="text-lg text-secondary font-semibold mb-2">{edu.school}</p>
                  <p className="text-sm text-third/70 mb-3">{edu.period}</p>
                  <p className="text-third/80 leading-relaxed">{edu.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-4xl font-bold text-third text-center mb-8">Certifications</h2>
            <Card 
              backgroundColor="rgba(255, 255, 255, 0.95)"
              borderRadius="1rem"
              padding="2rem"
            >
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-2xl">🏆</span>
                    <span className="text-third font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Skills Summary */}
      <div className="px-16 py-12 bg-white/50 mx-auto max-w-[1400px]">
        <div className="w-full text-center">
          <h2 className="text-4xl font-bold text-third mb-8">Technical Skills</h2>
          <div className="grid grid-cols-4 gap-6">
            {[
              { name: "Frontend", skills: ["React", "Angular", "TypeScript", "HTML5", "CSS3"] },
              { name: "Backend", skills: ["Node.js", "C#", ".NET", "Express.js", "REST APIs"] },
              { name: "Database", skills: ["MongoDB", "SQL Server", "PostgreSQL", "Redis", "Firebase"] },
              { name: "Tools", skills: ["Git", "Docker", "AWS", "Azure", "Figma"] }
            ].map((category, index) => (
              <Card 
                key={index}
                backgroundColor="rgba(255, 255, 255, 0.95)"
                borderRadius="1rem"
                padding="1.5rem"
              >
                <h3 className="text-xl font-bold text-third mb-4">{category.name}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-third/80 text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
