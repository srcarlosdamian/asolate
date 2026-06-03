import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.3 }
      );
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="h-[64px] max-w-[1300px] mx-auto w-full">
        <div className="flex items-center justify-between px-4 md:px-[24px] size-full">
          <div
            className={`font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[20px] tracking-tight transition-colors duration-300 ${
              scrolled ? "text-[#0D2851]" : "text-white"
            }`}
          >
            ASOLATE
          </div>

          <nav className="hidden lg:flex gap-[24px] items-center">
            {[
              { href: "#what-is-asolate", label: "WHAT IS ASOLATE?" },
              { href: "#problem", label: "PROBLEM" },
              { href: "#opportunity", label: "OPPORTUNITY" },
              { href: "#audience", label: "AUDIENCE" },
              { href: "#competitors", label: "COMPETITORS" },
              { href: "#model", label: "BUSINESS MODEL" },
              { href: "#contact", label: "CONTACT" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`font-['Inter',sans-serif] font-normal text-[12px] leading-[16px] transition-colors duration-300 whitespace-nowrap ${
                  scrolled
                    ? "text-[#45556c] hover:text-[#0D2851]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
