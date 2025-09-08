"use client";

import { Carousel } from '../components/ui';
import CardWithDescription from '../components/ui/CardWithDescription';

const dialogImages = [
  { src: "/pic/pic1.png", alt: 'Work 1' },
  { src: "/pic/pic2.png", alt: 'Work 2' },
  { src: "/pic/pic3.png", alt: 'Work 3' },
];

export default function WorksPage() {
  return (
    <div id="works" className="w-full min-h-screen relative bg-primary">
    <h1 className="text-4xl font-bold text-third text-center mb-12">My Works</h1>
    <div className="w-7xl h-full relative mx-auto px-4 flex flex-col gap-12">
        <CardWithDescription bookmarkText="A legelső EvoCampus projekt, amiben részt vettem egy közösségi platformot fejlesztettünk. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" className="mb-12">
          <Carousel images={dialogImages} borderRadius="0.5rem"/>
        </CardWithDescription>
        <CardWithDescription bookmarkText="A második EvoCampus projekt, amiben részt vettem egy civil szervezetnek segítettem a weboldalukat fejlesztettünk. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" className="mb-12" bookmarkSide="left">
          <Carousel images={dialogImages} borderRadius="0.5rem"/>
        </CardWithDescription>
        <CardWithDescription bookmarkText="A harmadik EvoCampus projekt, amiben részt vettem egy civil szervezetnek segítettünk ismételten. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" className="mb-12">
          <Carousel images={dialogImages} borderRadius="0.5rem"/>
        </CardWithDescription>
    </div>
    </div>
  );
}
