'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutScroll({ project }) {
  useEffect(() => {

    const staticAnimations = [
      // {
      //   target: '#horizontal-move',
      //   from: { scale: 0.25, rotate: 240 },
      //   to: { scale: 1, rotate: 0 },
      //   ease: 'power1.out',
      //   scrollTrigger: {
      //     trigger: '#horizontal-move',
      //     start: 'top bottom',
      //     end: 'top top',
      //     scrub: 2,
      //   },
      // },
      {
        target: '#horizontal-move-wrapper',
        from: { x: '0vw' },
        to: { x: '-100vw' },
        ease: 'power1.out',
        scrollTrigger: {
          trigger: '#hero-about-wrapper',
          start: '30% top',
          end: '60% bottom',
          scrub: 2,
        },
      },
      {
        target: '#dm-project',
        from: { x: 0 },
        to: { x: -350 },
        ease: 'linear',
        scrollTrigger: {
          trigger: '#hero-about-wrapper',
          start: '40% top',
          end: '65% bottom',
          scrub: 2,
        },
      },
      // {
      //   target: '#horizontal-move',
      //   from: { scale: 1, rotate: 0 },
      //   to: { scale: 0.3, rotate: 350 },
      //   ease: 'power1.out',
      //   scrollTrigger: {
      //     trigger: '#hero-about-wrapper',
      //     start: '88% top',
      //     end: '105% bottom',
      //     scrub: 2,
      //   },
      // },
    ];
    const workAnimations = (project ?? []).map((item, i) => ({
      target: `#work-item-${item.order_index}`,
      from: { width: '3%' },
      to: { width: '100%' },
      ease: 'linear',
      scrollTrigger: {
        trigger: '#hero-about-wrapper',
        start: `${60 + i * 8}% top`,
        end: `${68 + i * 8}% bottom`,
        scrub: 2,
      },
    }));

    const animations = [...staticAnimations, ...workAnimations];

    animations.forEach(({ target, from, to, ease, scrollTrigger: st }) => {
      gsap.fromTo(target, from, {
        ...to,
        ease,
        immediateRender: false, // ← tambah ini
        scrollTrigger: st,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };

  }, [project]);

  return null;
}