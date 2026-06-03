import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealTitleProps {
  children: string;
  className?: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4";
  delay?: number;
}

export function RevealTitle({ children, className = "", as: Tag = "p", delay = 0 }: RevealTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLSpanElement>(".reveal-word-inner");

    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 0.88;

    if (alreadyInView) {
      gsap.set(words, { yPercent: 0 });
      return;
    }

    gsap.set(words, { yPercent: 110 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      onEnter: () => {
        gsap.to(words, {
          yPercent: 0,
          duration: 0.65,
          ease: "power2.out",
          stagger: 0.07,
          delay,
        });
      },
      once: true,
    });

    return () => trigger.kill();
  }, [delay]);

  const words = children.split(" ");

  return (
    <div ref={containerRef} className={`flex flex-wrap gap-x-[0.28em] gap-y-0 ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="reveal-word-mask overflow-hidden inline-block" style={{ lineHeight: "inherit", paddingBottom: "0.18em", marginBottom: "-0.18em" }}>
          <span className="reveal-word-inner inline-block" style={{ lineHeight: "inherit" }}>
            {word}
          </span>
        </span>
      ))}
    </div>
  );
}
