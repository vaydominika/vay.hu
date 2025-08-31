"use client";

import { Card } from "../components/ui";
import Divider from "../components/ui/Divider";
import Image from "next/image";
import resumebg from "../../public/svg/resumebg.svg";
import resumepath from "../../public/svg/resumepath.svg";
import Badge from "../components/ui/Badge";

export default function ResumePage() {
  return (
    <div id="resume" className="w-full relative bg-primary">
      <Image src={resumepath} alt="Resume Path" className="w-full h-fit top-0 left-0 absolute scale-90" />
      <Image src={resumebg} alt="Resume Background" className="w-full h-fit top-0 left-0 object-cover" />

      <Card backgroundColor="linear-gradient(135deg, #F5ECEA 0%, #ECEFF8 100%)" borderRadius="1.5rem" padding="1rem" className="max-w-[450px] top-30 left-[10%] absolute z-20 break-words hover:scale-105 transition-transform duration-300">
        <span className="font-bold color-[var(--third-color)]">Telekom - Call Center Technician</span><Badge>Mar 2023 - Mar 2025</Badge>
        <Divider />
        <span className="color-[var(--third-color)]">During my experience as a technical call center agent, I developed problem-solving and communication skills while effectively assisting customers with technical issues. I quickly adapted to new systems and processes to provide accurate and efficient solutions.</span>
      </Card>

      <Card backgroundColor="linear-gradient(200deg, #F5ECEA 0%, #ECEFF8 100%)" borderRadius="2rem" padding="3rem" className="max-w-[450px] top-120 left-[60%] absolute z-20 break-words hover:scale-105 transition-transform duration-300">
        <span className="font-bold color-[var(--third-color)]">Universitiy of Miskolc - Compuer Science Engineering BSC</span><Badge>Sept 2023 - now</Badge>
        <Divider />
        <span className="color-[var(--third-color)]">I am currently studying Computer Science Engineering at the University of Miskolc, where I am gaining a strong foundation in software development, system architecture, and problem-solving skills. My studies have equipped me with the knowledge and skills to build innovative and efficient software solutions.</span>
      </Card>

      <Card backgroundColor="linear-gradient(360deg, #F5ECEA 0%, #ECEFF8 100%)" borderRadius="2rem" padding="3rem" className="max-w-[450px] top-210 left-[5%] absolute z-20 break-words hover:scale-105 transition-transform duration-300">
        <span className="font-bold color-[var(--third-color)]">Evosoft - EvoCampus</span><Badge>Mar 2024 - now</Badge>
        <Divider />
        <span className="color-[var(--third-color)]">As a student full-stack developer, my tasks included designing and developing responsive and user-friendly web applications. I also had the opportunity to work on projects that required me to use modern technologies and frameworks. I also actively participated in team collaboration to create efficient solutions together.</span>
      </Card>

      <Card backgroundColor="linear-gradient(300deg, #F5ECEA 0%, #ECEFF8 100%)" borderRadius="2rem" padding="3rem" className="max-w-[450px] top-360 left-[40%] absolute z-20 break-words hover:scale-105 transition-transform duration-300">
        <span className="font-bold color-[var(--third-color)]">Evosoft - Full-Stack Developer</span><Badge>Mar 2025 - now</Badge>
        <Divider />
        <span className="color-[var(--third-color)]">I am currently working as a full-stack developer at Evosoft.</span>
      </Card>
    </div>
  );
}

