'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function HeroAnimation() {
  useEffect(() => {

    gsap.set(['.hero-char-top', '.hero-char-bottom', '.hero-badge', 
             '.hero-scroll-text', '.hero-meta-char'], { opacity: 0 });
    gsap.set(['.hero-line', '.hero-meta-line'], { width: 0 });
    
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.fromTo('.hero-line',
      { width: 0 },
      { width: '100%', duration: 1.7, stagger: 0.05 },
      0
    )
    .fromTo('.hero-char-top',
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
      1.7
    )
    .fromTo('.hero-char-bottom',
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
      1.75
    )
    .fromTo('.hero-badge',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8 },
      2.2
    )
    .fromTo('.hero-scroll-text',
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      2.0
    )
    .fromTo('.hero-meta-line',
      { width: 0 },
      { width: '100%', duration: 1.7, stagger: 0.05 },
      0.1
    )
    .fromTo('.hero-meta-char',
      { opacity: 0 },
      { opacity: 1, duration: 0.8, stagger: 0.03 },
      1.7
    );

    return () => tl.kill();
  }, []); 

  return null;
}