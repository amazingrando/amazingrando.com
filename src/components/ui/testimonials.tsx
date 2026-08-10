'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Pin from '@/components/graphics/pin';

export interface TestimonialProps {
  style?: React.CSSProperties;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  linkedin: string;
  rotation?: number;
  className?: string;
  showQuote?: boolean;
}

export function Testimonial({ quote, author, role, avatar, linkedin, style, rotation = 0, className = '' }: TestimonialProps) {
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const highlights: HTMLElement[] = [];
    if (quoteRef.current) {
      quoteRef.current.querySelectorAll('.highlight').forEach((el) => {
        highlights.push(el as HTMLElement);
      });

      const annotations = highlights.map((highlight) =>
        annotate(highlight, {
          type: 'highlight',
          color: '#fed7aa',
          animationDuration: 800,
          multiline: true,
        })
      );

      annotations.forEach(annotation => annotation.show());

      // Cleanup annotations on unmount
      return () => {
        annotations.forEach(annotation => annotation.remove());
      };
    }
  }, []);

  return (
    <div 
      className={`flex flex-col gap-4 p-6 bg-white rounded-lg shadow-lg ${className}`}
      style={{ 
        ...style,
        transform: rotation ? `rotate(${rotation}deg)` : undefined
      }}
    >
      <Pin 
        className="absolute -top-4 left-1/2 -translate-x-1/2 text-red-700" 
        style={{ transform: rotation ? `rotate(${-rotation}deg)` : undefined }}
        aria-hidden="true"
      />
      <div>
        <FontAwesomeIcon 
          icon={faQuoteLeft} 
          className="text-ash-600"
          aria-hidden="true"
        />
        <blockquote 
          ref={quoteRef}
          className="text-sm md:text-base lg:text-xl relative" 
          dangerouslySetInnerHTML={{ __html: quote }}
        />
      </div>
      <footer className="flex items-center gap-2 md:gap-3 -ml-1">
        <Avatar className="w-8 h-8 md:w-10 md:h-10">
          <AvatarImage src={avatar} alt={`${author}'s profile picture`} />
          <AvatarFallback>{author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm lg:text-base font-medium text-balance hover:text-blue-600"
            aria-label={`${author}'s LinkedIn profile`}
          >
            {author}
          </a>
          <p className="text-xs lg:text-sm text-ash-700 text-balance">{role}</p>
        </div>
      </footer>
    </div>
  );
} 