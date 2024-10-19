import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import myworksBackground from "@/app/svg/myworksbg.svg"

const projects = [
  { id: 1, title: "Project 1", image: "/path/to/image1.jpg", description: "Description of Project 1" },
  { id: 2, title: "Project 2", image: "/path/to/image2.jpg", description: "Description of Project 2" },
  { id: 3, title: "Project 3", image: "/path/to/image3.jpg", description: "Description of Project 3" },
]

const MyWorks = () => {
  return (
    <section className="py-12 relative">
      <Image
        src={myworksBackground}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            {/* Left decorative element */}
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-pink-500 mr-4"></div>
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            <div className="w-2 h-2 rounded-full bg-pink-500 mr-4"></div>

            <h2 className="text-5xl font-bold text-center tracking-tight">
              <span className="inline-block tracking-tighter bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
                Crafted Creations
              </span>
            </h2>

            {/* Right decorative element */}
            <div className="w-2 h-2 rounded-full bg-blue-500 ml-4"></div>
            <div className="w-3 h-3 rounded-full bg-pink-500 ml-2"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-blue-500 to-pink-500 ml-4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden rounded-[.40rem] ">
              <CardContent className="p-0 relative">
                <div className="relative h-48 md:h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="inline-block text-md tracking-tighter font-semibold mb-2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-[.40rem]">
                    {project.title}
                  </h3>
                  <p className="text-white drop-shadow-md">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyWorks
