'use client';

import TestimonialsGrid from '@/components/sections/testimonials';
import HomeHero from '@/components/sections/homehero';
import Skills from '@/components/sections/skills';
import Logos from '@/components/sections/logos';
import Portfolio from '@/components/sections/portfolio';
export default function Home() {
  return (
    <main>
      <HomeHero />
      <TestimonialsGrid />
      <Skills />
      <Logos />
      <Portfolio />
    </main >
  );
}