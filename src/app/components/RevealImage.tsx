import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealImageBlockProps {
  children: React.ReactNode;
  containerClassName?: string;
}

export function RevealImageBlock({ children, containerClassName = "" }: RevealImageBlockProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const imgs = el.querySelectorAll("img");

    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 0.88;

    if (alreadyInView) {
      gsap.set(el, { opacity: 1 });
      gsap.set(imgs, { scale: 1 });
      return;
    }

    gsap.set(el, { opacity: 0 });
    gsap.set(imgs, { scale: 1.1, transformOrigin: "center center" });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      onEnter: () => {
        gsap.to(el, { opacity: 1, duration: 0.6, ease: "power2.out" });
        gsap.to(imgs, { scale: 1, duration: 1.2, ease: "power2.out", delay: 0.08 });
      },
      once: true,
    });

    return () => trigger.kill();
  }, []);

  return (
    <div ref={ref} className={containerClassName}>
      {children}
    </div>
  );
}
