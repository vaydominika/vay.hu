"use client"

import { useEffect } from 'react';
import Hero from "./components/hero";
import NavigationBar from "./components/navigationbar";
import AboutMe from "./components/aboutme";
import MySkills from "./components/myskills";

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
   <div id="aboutme" className="scroll-mt-28">
     <AboutMe/>
   </div>
   <div id="myskills" className="scroll-mt-38">
     <MySkills />
   </div>
   </>
  );
}
