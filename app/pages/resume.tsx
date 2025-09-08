"use client";

import { Card } from "../components/ui";
import Image from "next/image";
import Badge from "../components/ui/Badge";
import resumebg from "../../public/pic/resumebg.jpg";

export default function ResumePage() {
  return (
    <div
      id="resume"
      className="w-full bg-third/50"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(250, 249, 246,1)), url(${resumebg.src})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="h-full min-h-[460px] border-b-8 border-transparent hover:-translate-y-2 hover:border-secondary">
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <ul className="space-y-3">
                <li>
                  <p className="font-medium mb-2">Telekom - Call Center Technician  <Badge>Mar 2023 - Mar 2025</Badge> </p>
                  <p className="text-sm text-third">I developed problem-solving and communication skills while effectively assisting customers with technical issues. I quickly adapted to new systems and processes to provide accurate and efficient solutions.</p>
                </li>
                <li>
                  <p className="font-medium mb-2">Universitiy of Miskolc - Compuer Science Engineering BSC <Badge>Sept 2023 - now</Badge> </p>
                  <p className="text-sm text-third">I am currently studying Computer Science Engineering at the University of Miskolc, where I am gaining a strong foundation in software development, system architecture, and problem-solving skills. My studies have equipped me with the knowledge and skills to build innovative and efficient software solutions.</p>
                </li>
                  <li>
                    <p className="font-medium mb-2">Evosoft - EvoCampus <Badge>Mar 2024 - now</Badge> </p>
                    <p className="text-sm text-third">As a student full-stack developer, my tasks included designing and developing responsive and user-friendly web applications. I also had the opportunity to work on projects that required me to use modern technologies and frameworks. I also actively participated in team collaboration to create efficient solutions together.</p>
                  </li>
                  <li>
                    <p className="font-medium mb-2">Evosoft - Full-Stack Developer <Badge>Mar 2025 - now</Badge> </p>
                    <p className="text-sm text-third">I am currently working as a full-stack developer at Evosoft.</p>
                  </li>
              </ul>
            </Card>
          </div>
          <div>
            <Card className="flex flex-col items-center gap-4 min-h-[460px] border-b-8 border-transparent hover:-translate-y-2 hover:border-secondary">
              <Image
                src="/svg/pic/me.png"
                alt="Portrait"
                width={160}
                height={160}
                className="rounded-full object-cover"
                priority
              />
              <div className="w-full">
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <div className="space-y-1 text-sm">
                  <p>Email: vaydominika@gmail.com</p>
                  <p>Location: Miskolc, Hungary</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="lg:col-span-3">
            <Card className="w-full border-b-8 border-transparent hover:-translate-y-2 hover:border-secondary">
              <p className="text-center text-base">
                I build thoughtful, performant interfaces and love collaborating with motivated teams. Open to new opportunities and projects.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

