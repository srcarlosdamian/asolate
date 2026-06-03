import { RevealTitle } from "./RevealTitle";
import { RevealText } from "./RevealText";

export default function AsolateSolutionSection() {
  return (
    <section className="w-full bg-[#0f3063]" style={{ height: '500px' }}>
      <div className="max-w-[1300px] mx-auto px-6 h-full flex flex-row">

        {/* Left: title anchored to top */}
        <div className="w-1/2 flex items-start pt-[40px]">
          <RevealTitle className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[40px] md:text-[48px] leading-[45px] tracking-[-0.9px] text-[#99d3fd]">
            Asolate solution
          </RevealTitle>
        </div>

        {/* Right: paragraph anchored to bottom */}
        <div className="w-1/2 flex items-end pb-[40px]">
          <RevealText className="font-['Inter',sans-serif] font-normal text-[18px] leading-[1.5] text-white" delay={0.1}>
            Asolate proposes a brand experience centered on Latin American essentials designed for daily life. Its key differentiator is the ability to offer superior natural-fiber basics with a traceable story, combining quality, sustainability, and accessibility in a way that stands out from mass-market alternatives. The brand filters, curates, and elevates the essentials category.
          </RevealText>
        </div>
      </div>
    </section>
  );
}
