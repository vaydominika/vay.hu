"use client";

import { Button, Card } from '../components/ui';
import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <div id="home" className="w-[1920px] h-[1080px] relative overflow-hidden" style={{ backgroundImage: 'url(/svg/herobg.svg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <Navbar />
    </div>
  );
}
