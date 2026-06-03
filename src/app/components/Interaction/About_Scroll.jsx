// components/ScrollAnimator.jsx
'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutScroll() {
  useEffect(() => {
    const aboutSection = document.querySelector('#about-section');

    gsap.fromTo(
      aboutSection,
      {
        rotate: 360,
        scale: 0.25,
        y:60,
      },
      {
        rotate: 0,
        scale: 1,
        y:0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5, // smooth follow scroll
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null; // tidak render apapun, hanya jalankan animasi
}