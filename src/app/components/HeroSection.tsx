import { useEffect, useRef } from "react";
import imgLogo from "../../imports/centurio-digital-agency-negative_1.png";
import gsap from "gsap";

export default function HeroSection() {
  const orbRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Orb: fade in at 0.3s, no scale
    if (orbRef.current) {
      gsap.set(orbRef.current, { opacity: 0 });
      tl.to(orbRef.current, { opacity: 1, duration: 0.6 }, 0.4);
    }

    // Title: mask reveal bottom → top at 0.1s
    if (titleRef.current) {
      gsap.set(titleRef.current, { yPercent: 110, opacity: 1 });
      tl.to(titleRef.current, { yPercent: 0, duration: 0.7 }, 0.1);
    }

    // Divider line
    if (dividerRef.current) {
      gsap.set(dividerRef.current, { opacity: 0, scaleX: 0, transformOrigin: "left" });
      tl.to(dividerRef.current, { opacity: 1, scaleX: 1, duration: 0.4 }, 0.5);
    }

    // Subtitle: fade in line at 0.6s
    if (subtitleRef.current) {
      gsap.set(subtitleRef.current, { opacity: 0, y: 8 });
      tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.6);
    }

    // Description: fade in at 0.75s
    if (descRef.current) {
      gsap.set(descRef.current, { opacity: 0, y: 8 });
      tl.to(descRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.75);
    }

    // Copyright bar: fade in at 0.9s
    if (copyrightRef.current) {
      gsap.set(copyrightRef.current, { opacity: 0 });
      tl.to(copyrightRef.current, { opacity: 1, duration: 0.5 }, 0.9);
    }
  }, []);

  return (
    <section id="about" className="w-full relative -mt-[64px]">
      <div className="bg-[#0954c4] w-full min-h-[500px] md:h-[720px] md:min-h-[720px] relative overflow-hidden">

        <style>{`
          @keyframes orb-spin {
            from { transform: rotate(-90deg); }
            to { transform: rotate(270deg); }
          }
          .orb-rotate {
            animation: orb-spin 10s linear infinite;
          }
          .hero-title-mask {
            overflow: hidden;
          }
        `}</style>

        {/* Gradient orb */}
        <div
          ref={orbRef}
          className="absolute flex items-center justify-center right-[-100px] md:left-[calc(50%+100px)] size-[500px] md:size-[768px] top-[calc(50%+20px)] -translate-y-1/2"
        >
          <div className="orb-rotate flex-none">
            <div className="relative size-[500px] md:size-[768px]">
              <div className="absolute inset-[-1.15%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 785.6 785.6">
                  <g filter="url(#filter0_f_7_1855)">
                    <ellipse cx="392.8" cy="392.8" fill="#D9D9D9" rx="384" ry="384" />
                    <ellipse cx="392.8" cy="392.8" fill="url(#paint0_radial_7_1855)" rx="384" ry="384" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="785.6" id="filter0_f_7_1855" width="785.6" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_7_1855" stdDeviation="4.4" />
                    </filter>
                    <radialGradient cx="0" cy="0" gradientTransform="translate(408.092 -101.792) rotate(90) scale(878.592 878.592)" gradientUnits="userSpaceOnUse" id="paint0_radial_7_1855" r="1">
                      <stop stopColor="#49C1FF" />
                      <stop offset="0.4" stopColor="#0880FF" />
                      <stop offset="0.85" stopColor="#FF23D3" />
                      <stop offset="1" stopColor="#FF96F2" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Max-width wrapper */}
        <div className="absolute inset-0 max-w-[1300px] mx-auto">

          {/* Main text content */}
          <div className="relative z-10 p-6 md:p-0 md:absolute md:left-[24px] md:top-[210px] md:w-[608px]">

            {/* Title with mask */}
            <div className="hero-title-mask">
              <p
                ref={titleRef}
                className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[48px] md:text-[96px] leading-[1.2] md:leading-[120px] text-white tracking-[-2px] md:tracking-[-4.8px] uppercase"
              >
                ASOLATE
              </p>
            </div>

            <div ref={dividerRef} className="mt-4 md:mt-[16px]">
              <div className="bg-white h-[4px] w-[80px]" />
            </div>

            <div className="mt-4 md:mt-[24px] flex flex-col gap-2 md:gap-[8px]">
              <p
                ref={subtitleRef}
                className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[20px] md:text-[30px] leading-[1.2] md:leading-[36px] text-[#dbeafe]"
              >
                Curated Latin American essentials
              </p>
              <p
                ref={descRef}
                className="font-['Inter',sans-serif] font-normal text-[14px] md:text-[16px] leading-[1.5] md:leading-[20px] text-[#bedbff]"
              >
                Business model presentation
              </p>
            </div>
          </div>

          {/* Bottom copyright bar */}
          <div ref={copyrightRef} className="absolute bottom-0 left-0 right-0 z-10">
            <div className="border-t border-[rgba(255,255,255,0.2)] mx-6 md:mx-[24px]" />
            <div className="px-6 md:px-[24px] py-[18px] flex items-center justify-between">
              <p className="font-['Inter',sans-serif] font-normal text-[10px] md:text-[12px] leading-[16px] text-[#dbeafe]">
                Copyright © 2026 – Centurio Digital Agency AB – All rights reserved.
              </p>
              <img src={imgLogo} alt="Centurio Digital Agency" style={{ height: "40px", width: "auto" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
