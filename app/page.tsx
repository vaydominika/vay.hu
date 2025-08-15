"use client";

import HomePage from './pages/home';
import AboutPage from './pages/about';
import SkillsPage from './pages/skills';
import ResumePage from './pages/resume';
import WorksPage from './pages/works';
import WorkTogetherPage from './pages/work-together';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="w-full">
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ResumePage />
      <WorksPage />
      <WorkTogetherPage />
      <Footer />
    </main>
  );
}
