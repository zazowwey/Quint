"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Nav_menu({ isOpen, setIsOpen }) {
  const [hoveredLink, setHoveredLink] = useState(null);
  const menuRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;
    const links = linksRef.current?.querySelectorAll('a');

    if (isOpen) {
      // Pastikan menu visible dulu
      gsap.set(menu, { display: 'flex', height: 0 });
      gsap.timeline()
        // Menu expand dari 0 ke 100vh
        .to(menu, {
          height: '100vh',
          duration: 0.6,
          ease: 'power2.out',
        })
        // Nav links muncul satu-satu
        .fromTo(links,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' },
          '-=0.2'
        );
    } else {
      gsap.timeline()
        // Links hilang dulu
        .to(links, {
          opacity: 0, y: 20,
          duration: 0.2,
          stagger: 0.03,
          ease: 'power2.in',
        })
        // Menu collapse
        .to(menu, {
          height: 0,
          duration: 0.5,
          ease: 'power2.in',
        })
        .set(menu, { display: 'none' });
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      id="nav-menu"
      className="hidden flex-row items-stretch justify-start w-full pt-[80px] px-(--main-padding) overflow-hidden fixed top-0 bottom-0 left-0 right-0 z-[44] bg-(--C300)"
    >
      {/* Nav Menu BG */}
      <div className="flex flex-row items-stretch justify-between w-[100%] h-[100%] relative z-[1]">
        <div className="lg:block md:block hidden w-[1px] h-[100%] bg-(--C200)"></div>
        <div className="w-[1px] h-[100%] bg-(--C200)"></div>
        <div className="w-[1px] h-[100%] bg-(--C200)"></div>
        <div className="w-[1px] h-[100%] bg-(--C200)"></div>
      </div>

      {/* Menu Link */}
      <div ref={linksRef} className="flex flex-row items-stretch justify-between pt-[80px] px-(--main-padding) absolute z-[3] top-0 bottom-0 right-0 left-0">
        <div className="flex flex-col items-stretch justify-between py-[40px] px-[12px] lg:w-[35%] md:w-[35%] w-[50%] h-[100%]">
          <div className="flex flex-col items-stretch justify-start gap-[40px] w-[100%]">
            <a href="#" className="text-nav-link font-Primary leading-lh01 tracking-ls02 transition-all duration-500" onMouseEnter={() => setHoveredLink('home')} onMouseLeave={() => setHoveredLink(null)} style={{ color: hoveredLink === 'home' ? 'blue' : 'white' }}>Home</a>
            <a href="#" className="text-nav-link font-Primary leading-lh01 tracking-ls02 transition-all duration-500" onMouseEnter={() => setHoveredLink('about')} onMouseLeave={() => setHoveredLink(null)} style={{ color: hoveredLink === 'about' ? 'blue' : 'white' }}>About</a>
            <a href="#" className="text-nav-link font-Primary leading-lh01 tracking-ls02 transition-all duration-500" onMouseEnter={() => setHoveredLink('works')} onMouseLeave={() => setHoveredLink(null)} style={{ color: hoveredLink === 'works' ? 'blue' : 'white' }}>Works</a>
            <a href="#" className="text-nav-link font-Primary leading-lh01 tracking-ls02 transition-all duration-500" onMouseEnter={() => setHoveredLink('service')} onMouseLeave={() => setHoveredLink(null)} style={{ color: hoveredLink === 'service' ? 'blue' : 'white' }}>Service</a>
          </div>
          <div>
            <p className="text-b003 color-(--C100) font-Secondary leading-lh02 tracking-ls02">Designed By <a href="#" className="text-(--C100) underline">8AM Design</a></p>
          </div>
        </div>

        <div className="lg:flex md:flex hidden flex-col items-stretch justify-between py-[40px] px-[12px] w-[35%] h-[100%]">
          <div className="flex flex-col items-stretch justify-start gap-[40px] w-[100%]">
            <a href="#" className="text-nav-link font-Primary leading-lh01 tracking-ls02 transition-all duration-500" onMouseEnter={() => setHoveredLink('license')} onMouseLeave={() => setHoveredLink(null)} style={{ color: hoveredLink === 'license' ? 'blue' : 'white' }}>License</a>
            <a href="#" className="text-nav-link font-Primary leading-lh01 tracking-ls02 transition-all duration-500" onMouseEnter={() => setHoveredLink('style-guide')} onMouseLeave={() => setHoveredLink(null)} style={{ color: hoveredLink === 'style-guide' ? 'blue' : 'white' }}>Style Guide</a>
            <a href="#" className="text-nav-link font-Primary leading-lh01 tracking-ls02 transition-all duration-500" onMouseEnter={() => setHoveredLink('404')} onMouseLeave={() => setHoveredLink(null)} style={{ color: hoveredLink === '404' ? 'blue' : 'white' }}>404</a>
            <a href="#" className="text-nav-link font-Primary leading-lh01 tracking-ls02 transition-all duration-500" onMouseEnter={() => setHoveredLink('changelog')} onMouseLeave={() => setHoveredLink(null)} style={{ color: hoveredLink === 'changelog' ? 'blue' : 'white' }}>Changelog</a>
          </div>
          <div>
            <p className="text-b003 color-(--C100) font-Secondary leading-lh02 tracking-ls02">hello@8am.design</p>
          </div>
        </div>

        <div className="flex flex-col items-stretch justify-between py-[40px] px-[12px] lg:w-[35%] md:w-[35%] w-[50%] h-[100%]">
          <div className="flex flex-col items-stretch justify-start gap-[40px] w-[100%]">
            <a href="#" className="text-nav-link font-Primary leading-lh01 tracking-ls02 transition-all duration-500" onMouseEnter={() => setHoveredLink('instagram')} onMouseLeave={() => setHoveredLink(null)} style={{ color: hoveredLink === 'instagram' ? 'blue' : 'white' }}>Instagram</a>
            <a href="#" className="text-nav-link font-Primary leading-lh01 tracking-ls02 transition-all duration-500" onMouseEnter={() => setHoveredLink('linkedin')} onMouseLeave={() => setHoveredLink(null)} style={{ color: hoveredLink === 'linkedin' ? 'blue' : 'white' }}>LinkedIn</a>
            <a href="#" className="text-nav-link font-Primary leading-lh01 tracking-ls02 transition-all duration-500" onMouseEnter={() => setHoveredLink('x')} onMouseLeave={() => setHoveredLink(null)} style={{ color: hoveredLink === 'x' ? 'blue' : 'white' }}>X</a>
          </div>
        </div>
      </div>
    </div>
  );
}