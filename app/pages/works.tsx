"use client";

import { Carousel } from '../components/ui';
import CardWithDescription from '../components/ui/CardWithDescription';

export default function WorksPage() {
  return (
    <div className="w-full h-full relative bg-primary">
    <h1 className="text-4xl font-bold text-third text-center mb-12">My Works</h1>
    <div className="w-7xl h-full relative mx-auto px-4 flex flex-col gap-12" id="works">
        <CardWithDescription bookmarkText="A legelső EvoCampus projekt, amiben részt vettem egy közösségi platformot fejlesztettünk." className="mb-12">
          <h3>kepjonide</h3>
        </CardWithDescription>
        <CardWithDescription bookmarkText="A második EvoCampus projekt, amiben részt vettem egy civil szervezetnek segítettem a weboldalukat fejlesztettünk." className="mb-12" bookmarkSide="left">
          <h3>kepjonide2</h3>
        </CardWithDescription>
        <CardWithDescription bookmarkText="A harmadik EvoCampus projekt, amiben részt vettem egy civil szervezetnek segítettünk ismételten." className="mb-12">
          <h3>kepjonide3</h3>
        </CardWithDescription>
    </div>
    </div>
  );
}
