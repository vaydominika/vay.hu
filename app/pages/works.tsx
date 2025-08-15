"use client";

import { Button, Card } from '../components/ui';
import Navbar from '../components/Navbar';

export default function WorksPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full Stack",
      description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      color: "var(--react-color)",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Frontend",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "📋",
      technologies: ["Angular", "TypeScript", "Firebase", "RxJS", "Angular Material"],
      color: "var(--angular-color)",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Design",
      description: "A responsive portfolio website showcasing creative work with smooth animations and modern design principles.",
      image: "🎨",
      technologies: ["HTML5", "CSS3", "JavaScript", "Figma", "GSAP"],
      color: "var(--figma-color)",
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "API Gateway Service",
      category: "Backend",
      description: "A microservices API gateway built with C# and .NET Core, featuring authentication, rate limiting, and request routing.",
      image: "🔌",
      technologies: ["C#", ".NET Core", "Docker", "Redis", "JWT"],
      color: "var(--csharp-color)",
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      category: "Frontend",
      description: "A weather application with interactive maps, real-time data, and beautiful visualizations using modern web technologies.",
      image: "🌤️",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "OpenWeather API"],
      color: "var(--typescript-color)",
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Social Media Analytics",
      category: "Full Stack",
      description: "A comprehensive analytics platform for social media management with data visualization and reporting features.",
      image: "📊",
      technologies: ["React", "Node.js", "PostgreSQL", "D3.js", "AWS"],
      color: "var(--tailwind-color)",
      link: "#",
      github: "#"
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Design"];

  return (
    <div id="works" className="w-screen h-[3340px] bg-gradient-to-br from-primary to-secondary relative">
      <Navbar />
      {/* Hero Section */}
      <div className="h-[500px] bg-gradient-to-r from-third to-secondary flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-16 w-40 h-40 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-16 right-16 w-32 h-32 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-6">My Works</h1>
          <p className="text-2xl mb-8 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in web development, 
            design, and problem-solving
          </p>
          <Button 
            color="rgba(255, 255, 255, 0.2)"
            textColor="white"
            borderRadius="1rem"
            onClick={() => console.log('Contact clicked')}
          >
            Let's Work Together
          </Button>
        </div>
      </div>

      {/* Filter Categories */}
      <div className="py-12 px-16 mx-auto max-w-[1400px]">
        <div className="w-full">
          <div className="flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                color={category === "All" ? "var(--third-color)" : "rgba(255, 255, 255, 0.8)"}
                textColor={category === "All" ? "var(--primary-color)" : "var(--third-color)"}
                borderRadius="2rem"
                onClick={() => console.log(`${category} filter clicked`)}
                className="px-8 py-3"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-16 py-12 mx-auto max-w-[1400px]">
        <div className="w-full">
          <div className="grid grid-cols-2 gap-12">
            {projects.map((project) => (
              <Card
                key={project.id}
                backgroundColor="rgba(255, 255, 255, 0.95)"
                borderRadius="1.5rem"
                padding="2rem"
                className="hover:scale-[1.02] transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-8xl">{project.image}</div>
                </div>
                
                {/* Project Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span 
                      className="px-3 py-1 rounded-full text-sm font-medium text-white"
                      style={{ backgroundColor: project.color }}
                    >
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <Button
                        color="rgba(0, 0, 0, 0.1)"
                        textColor="var(--third-color)"
                        borderRadius="0.5rem"
                        onClick={() => console.log(`Live demo for ${project.title}`)}
                        className="px-3 py-1 text-sm"
                      >
                        Live Demo
                      </Button>
                      <Button
                        color="rgba(0, 0, 0, 0.1)"
                        textColor="var(--third-color)"
                        borderRadius="0.5rem"
                        onClick={() => console.log(`GitHub for ${project.title}`)}
                        className="px-3 py-1 text-sm"
                      >
                        GitHub
                      </Button>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-third group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-third/80 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-third/10 text-third rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Project Section */}
      <div className="px-16 py-16 bg-white/50 mx-auto max-w-[1400px]">
        <div className="w-full">
          <h2 className="text-5xl font-bold text-third text-center mb-16">Featured Project</h2>
          
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Project Details */}
            <div className="space-y-8">
              <div>
                <span className="px-4 py-2 bg-third text-white rounded-full text-sm font-medium">
                  Featured
                </span>
                <h3 className="text-4xl font-bold text-third mt-4 mb-6">
                  AI-Powered Learning Platform
                </h3>
                <p className="text-xl text-third/80 leading-relaxed">
                  An innovative educational platform that uses artificial intelligence to personalize 
                  learning experiences for students. Features include adaptive content, progress tracking, 
                  and intelligent recommendations.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-third">Key Features:</h4>
                <ul className="space-y-2 text-third/80">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    AI-powered content recommendations
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    Real-time progress tracking
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    Interactive learning modules
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    Mobile-responsive design
                  </li>
                </ul>
              </div>
              
              <div className="flex gap-4">
                <Button
                  color="var(--third-color)"
                  textColor="var(--primary-color)"
                  borderRadius="1rem"
                  onClick={() => console.log('View project clicked')}
                >
                  View Project
                </Button>
                <Button
                  color="var(--secondary-color)"
                  textColor="var(--third-color)"
                  borderRadius="1rem"
                  onClick={() => console.log('Case study clicked')}
                >
                  Read Case Study
                </Button>
              </div>
            </div>
            
            {/* Project Mockup */}
            <div className="relative">
              <Card
                backgroundColor="rgba(255, 255, 255, 0.95)"
                borderRadius="2rem"
                padding="2rem"
                className="text-center"
              >
                <div className="w-full h-80 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-6xl">🤖</div>
                </div>
                <h4 className="text-xl font-semibold text-third">AI Learning Platform</h4>
                <p className="text-third/70 text-sm">React • Node.js • TensorFlow • MongoDB</p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="px-16 py-16 mx-auto max-w-[1400px]">
        <div className="w-full">
          <h2 className="text-5xl font-bold text-third text-center mb-16">What Clients Say</h2>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Product Manager",
                company: "TechStart Inc",
                text: "John delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "CEO",
                company: "InnovateLab",
                text: "Working with John was a game-changer for our startup. He built a robust backend system that scaled perfectly with our growth.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Design Director",
                company: "Creative Studio",
                text: "John's frontend development skills are top-notch. He brought our designs to life with pixel-perfect implementation and smooth animations.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card
                key={index}
                backgroundColor="rgba(255, 255, 255, 0.95)"
                borderRadius="1.5rem"
                padding="2rem"
                className="text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-yellow-400">⭐</span>
                  ))}
                </div>
                
                <p className="text-third/80 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <h4 className="font-semibold text-third">{testimonial.name}</h4>
                  <p className="text-secondary text-sm">{testimonial.role}</p>
                  <p className="text-third/60 text-sm">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-16 py-20 bg-gradient-to-r from-third to-secondary mx-auto max-w-[1400px]">
        <div className="w-full text-center text-white">
          <h2 className="text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's collaborate to bring your ideas to life with cutting-edge technology and creative design.
          </p>
          <div className="flex gap-6 justify-center">
            <Button
              color="rgba(255, 255, 255, 0.2)"
              textColor="white"
              borderRadius="1rem"
              onClick={() => console.log('Get quote clicked')}
              className="px-8 py-4 text-lg"
            >
              Get a Quote
            </Button>
            <Button
              color="rgba(255, 255, 255, 0.2)"
              textColor="white"
              borderRadius="1rem"
              onClick={() => console.log('Schedule call clicked')}
              className="px-8 py-4 text-lg"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
