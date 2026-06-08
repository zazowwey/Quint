"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Primary from "./Primary_button/Primary";

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.timeline()
        .to(line1Ref.current, { rotate: 45, y: 7, duration: 0.3, ease: 'power2.out' })
        .to(line2Ref.current, { rotate: -45, duration: 0.3, ease: 'power2.out' }, '<');
    } else {
      gsap.timeline()
        .to(line1Ref.current, { rotate: 0, y: 0, duration: 0.3, ease: 'power2.in' })
        .to(line2Ref.current, { rotate: 0, duration: 0.3, ease: 'power2.in' }, '<');
    }
  }, [isMenuOpen]);

  return (
    <nav style={{ opacity: 0, animationName: "slideDown", animationDuration: "1.2s", animationTimingFunction: "ease-out", animationFillMode: "forwards", animationDelay: "3.1s" }} className="w-full h-auto bg-transparent fixed z-[999] top-0 bottom-auto right-0 left-0 backdrop-blur-md mix-blend-difference">
      <div className="w-full h-full px-auto">
        <div className="w-full h-full flex flex-col items-center justify-between relative">
          <div className="w-full h-full flex flex-row items-center justify-between py-[20px] border-b border-solid border-(--C500) relative">

            <div className="lg:w-[50%] md:w-auto w-auto h-[40px] flex flex-row items-center justify-start gap-[83px] pl-(--main-padding)">
              <div className="lg:w-[105px] md:w-[105px] w-auto h-auto p-[4px] overflow-hidden relative z-3 bg-white rounded-full flex items-center justify-start">
                <div className="w-[32px] h-[32px] rounded-full py-[4px] px-[8px] bg-(--C300) cursor-pointer flex flex-row items-center">
                  <img src="/images/logo.svg" alt="logo" className="w-[16px] h-[16px] animate-loopBrand" />
                </div>
                <h6 className="text-(--C300) absolute right-[16px] blend-difference flex flex-row items-start z-3 italic fw-bold md:block hidden lg:block">
                  Quint
                </h6>
              </div>
              <div className="lg:flex md:hidden hidden flex-row items-center justify-start gap-[8px]">
                <p className="text-(--C100) font-Secondary size-(--b002) w-auto">Quint®</p>
                <p className="text-(--C100) font-Secondary size-(--b002) opacity-50 w-auto no-break">Design Studio</p>
              </div>
            </div>

            <div className="w-[50%] h-[40px] lg:flex md:hidden hidden flex-row items-center justify-end gap-[83px] pr-(--main-padding)">
              <div className="flex flex-row items-center justify-start gap-[24px]">
                <div className="lg:flex md:hidden hidden flex-row items-center justify-start gap-[8px]">
                  <p className="text-(--C100) font-Secondary size-(--b002) w-auto">ID</p>
                  <p className="text-(--C100) font-Secondary size-(--b002) opacity-50 w-auto no-break">10:00 AM</p>
                </div>
                <div className="lg:flex md:hidden hidden flex flex-row items-center justify-start gap-[8px]">
                  <p className="text-(--C100) font-Secondary size-(--b002) w-auto">US</p>
                  <p className="text-(--C100) font-Secondary size-(--b002) opacity-50 w-auto no-break">10:00 AM</p>
                </div>
              </div>
              <div className="lg:block md:hidden hidden">
                <Primary primary_button_text="Let's Talk" />
              </div>
            </div>

            <div className="lg:w-[100%] md:w-auto w-auto h-full lg:absolute md:static static gap-[10px] px-(--main-padding) z-[2]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="flex flex-col items-center justify-center h-full w-full px-[16px] relative cursor-pointer gap-[6px]">
                <div ref={line1Ref} className="w-[32px] h-[2px] bg-white rounded-full"></div>
                <div ref={line2Ref} className="w-[32px] h-[2px] bg-white rounded-full"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}