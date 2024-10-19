import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import myworksBackground from "@/app/svg/myworksbg.svg"

import EvoCampusLoginPage from '@/app/img/EvoCampusLoginPage.png';
import EvoCampusRegisterPage from '@/app/img/EvoCampusRegisterPage.png';
import EvoCampusFeedPage from '@/app/img/EvoCampusFeedPage.png';
import EvoCampusProfilePage from '@/app/img/EvoCampusProfilePage.png';

const projects = [
  { id: 1, title: "Login page design", image: EvoCampusLoginPage, description: "" },
  { id: 2, title: "Register page design", image: EvoCampusRegisterPage, description: "" },
  { id: 3, title: "Feed design", image: EvoCampusFeedPage, description: "" },
  { id: 4, title: "Profile design", image: EvoCampusProfilePage, description: "" }
];

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
            <Card key={project.id} className="overflow-hidden rounded-[.40rem] flex flex-col">
              <CardContent className="p-0 relative flex-grow">
                <div className="relative w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    layout="responsive"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <h3 className="text-md tracking-tighter font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-white text-sm">{project.description}</p>
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
