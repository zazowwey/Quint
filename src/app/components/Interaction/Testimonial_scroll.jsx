'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialScroll({ testimonials }) {
  useEffect(() => {

    (testimonials ?? []).forEach((item, i) => {
      gsap.fromTo(`#testimonial-image-${item.order_index}`,
        { y: '10%' },
        {
          y: '-10%',
          ease: 'linear',
          scrollTrigger: {
            trigger: `#testimonial-image-${item.order_index}`,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };

  }, [testimonials]);

  return null;
}