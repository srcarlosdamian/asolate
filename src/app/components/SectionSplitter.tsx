import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealTitle } from "./RevealTitle";

gsap.registerPlugin(ScrollTrigger);

const ASTERISK_PATH =
  "M105.809 246V164.222L48.046 222.125L23.6905 197.769L81.2302 140.375H0V105.991H81.7784L23.8754 48.2308L48.046 23.6905L105.809 81.5967V0H140.191V81.2302L197.588 23.6905L222.125 48.2308L164.222 105.991H246V140.375H164.588L222.125 197.769L197.769 222.125L140.191 164.403V246H105.809Z";

interface SectionSplitterProps {
  id?: string;
  number: string;
  title: string;
}

export default function SectionSplitter({ id, number, title }: SectionSplitterProps) {
  const asteriskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = asteriskRef.current;
    if (!el) return;

    gsap.set(el, { opacity: 0 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      onEnter: () => gsap.to(el, { opacity: 1, duration: 0.4, ease: "power2.out" }),
      once: true,
    });

    return () => trigger.kill();
  }, []);

  return (
    <div id={id} className="w-full bg-[#0954c4] text-white py-16 relative overflow-hidden">
      <style>{`
        @keyframes asterisk-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .asterisk-rotate {
          animation: asterisk-spin 20s linear infinite;
          transform-origin: center;
        }
      `}</style>

      {/* Spinning asterisk background */}
      <div ref={asteriskRef} className="absolute left-4 top-2 size-[246px] pointer-events-none">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 246 246"
        >
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="246"
              id={`splitter-filter-${id ?? number}`}
              width="246"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feTurbulence baseFrequency="2 2" numOctaves="3" result="noise" seed="5242" stitchTiles="stitch" type="fractalNoise" />
              <feColorMatrix in="noise" result="alphaNoise" type="luminanceToAlpha" />
              <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                <feFuncA
                  tableValues="0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
                  type="discrete"
                />
              </feComponentTransfer>
              <feComposite in="coloredNoise1" in2="shape" operator="in" result="noise1Clipped" />
              <feFlood floodColor="#0268F3" result="color1Flood" />
              <feComposite in="color1Flood" in2="noise1Clipped" operator="in" result="color1" />
              <feMerge result="effect1_noise">
                <feMergeNode in="shape" />
                <feMergeNode in="color1" />
              </feMerge>
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id={`splitter-grad-${id ?? number}`}
              x1="23.9469"
              x2="222.869"
              y1="69.9358"
              y2="205.726"
            >
              <stop stopColor="#0268F3" />
              <stop offset="1" stopColor="#209FFF" />
            </linearGradient>
          </defs>
          <g filter={`url(#splitter-filter-${id ?? number})`} opacity="0.5">
            <path
              className="asterisk-rotate"
              d={ASTERISK_PATH}
              fill="#83D8FF"
              style={{ transformOrigin: "123px 123px" }}
            />
            <path
              className="asterisk-rotate"
              d={ASTERISK_PATH}
              fill={`url(#splitter-grad-${id ?? number})`}
              style={{ transformOrigin: "123px 123px" }}
            />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-[1300px] mx-auto px-6 flex items-center justify-between relative z-10">
        <div>
          <p className="font-mono text-[18px] leading-[28px] text-[#edf9ff]">SECTION {number}</p>
          <RevealTitle className="font-display font-bold text-[48px] leading-[48px] tracking-[-1.2px] text-white mt-1">
            {title}
          </RevealTitle>
        </div>
        <span
          className="font-display font-bold text-[72px] leading-[72px] text-[#83d8ff] select-none hidden sm:inline"
        >
          {number}
        </span>
      </div>
    </div>
  );
}
