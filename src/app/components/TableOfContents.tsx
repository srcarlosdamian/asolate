import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealTitle } from "./RevealTitle";
import { RevealText } from "./RevealText";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { href: "#what-is-asolate", num: "01", label: "What is Asolate?" },
  { href: "#problem",          num: "02", label: "Problem" },
  { href: "#opportunity",      num: "03", label: "Opportunity" },
  { href: "#audience",         num: "04", label: "Audience" },
  { href: "#competitors",      num: "05", label: "Competitors" },
  { href: "#model",            num: "06", label: "Business model" },
];

export default function TableOfContents() {
  const badgeRef = useRef<HTMLSpanElement>(null);
  const gridRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Badge fade-in
    if (badgeRef.current) {
      gsap.set(badgeRef.current, { opacity: 0, y: 8 });
      ScrollTrigger.create({
        trigger: badgeRef.current,
        start: "top 90%",
        onEnter: () => gsap.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }),
        once: true,
      });
    }

    // Grid items stagger
    if (gridRef.current) {
      const links = gridRef.current.querySelectorAll("a");
      gsap.set(links, { opacity: 0, y: 16 });
      ScrollTrigger.create({
        trigger: gridRef.current,
        start: "top 88%",
        onEnter: () =>
          gsap.to(links, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.07,
          }),
        once: true,
      });
    }
  }, []);

  return (
    <section className="w-full bg-slate-50 py-12 md:py-16">
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 text-left space-y-3">
          <span
            ref={badgeRef}
            className="text-xs font-mono uppercase bg-slate-100 text-slate-400 px-2.5 py-1 rounded inline-block font-bold"
          >
            STRUCTURE
          </span>
          <RevealTitle className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#0A1D37] leading-tight">
            Content table
          </RevealTitle>
          <RevealText className="font-sans text-slate-600 text-sm md:text-base leading-loose" delay={0.1}>
            This presentation covers the strategic foundation of the Asolate business model, addressing the pain points in everyday basic consumer products and redeveloping the model.
          </RevealText>
        </div>

        <div ref={gridRef} className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
          {items.map(({ href, num, label }) => (
            <a
              key={href}
              href={href}
              className="p-3.5 bg-white rounded-xl transition-all flex items-center justify-between group"
            >
              <span className="flex items-center gap-3">
                <span className="font-bold text-slate-400 group-hover:text-[#0052FF]">{num}</span>
                <span className="text-xs font-sans text-slate-700 font-bold group-hover:text-[#0A1D37]">{label}</span>
              </span>
              <span className="text-slate-300 group-hover:text-[#0052FF]">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
