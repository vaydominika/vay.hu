"use client"

import { useEffect } from 'react';
import Hero from "./components/hero";
import NavigationBar from "./components/navigationbar";
import AboutMe from "./components/aboutme";
import MySkills from "./components/myskills";
import Resume from "./components/resume";
import MyWorks from './components/myworks';
import Worktogether from './components/worktogether';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   <>
   <NavigationBar/>
   <div id="home" className="scroll-mt-28">
     <Hero/>
   </div>
   <div id="aboutme" className="scroll-mt-28 mb-32">
     <AboutMe/>
   </div>
   <div id="myskills" className="scroll-mt-28 mb-32">
     <MySkills />
   </div>
   <div id="resume" className="scroll-mt-28 mb-32">
     <Resume />
   </div>
   <div id="myworks" className="scroll-mt-28">
    <MyWorks />
   </div>
   <div id="worktogether" className="scroll-mt-28">
    <Worktogether />
   </div>
   </>
  );
}
