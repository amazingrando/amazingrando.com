'use client';

import { MotionConfig } from 'motion/react';
import { Testimonial } from '@/components/ui/testimonials';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsGrid() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="px-8 py-4 md:px-16 md:py-8 mt-16 items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials
          .filter((testimonial) => testimonial.showQuote !== false)
          .map((testimonial, index) => {
          // Deterministic pseudo-random tilt so server and client render match
          const rotation = (((Math.sin(index * 12.9898) * 43758.5453) % 1 + 1) % 1) * 3 - 1.5;
          const adjustedRotation = Math.round(
            (rotation > -0.25 && rotation < 0.25
              ? rotation + (rotation >= 0 ? 0.25 : -0.25)
              : rotation) * 100
          ) / 100;
          
          return (
            <Testimonial 
              key={index} 
              {...testimonial} 
              rotation={adjustedRotation}
              index={index}
              className={index >= 3 ? 'hidden md:flex' : ''}
            />
          );
        })}
      </div>
    </MotionConfig>
  );
} 