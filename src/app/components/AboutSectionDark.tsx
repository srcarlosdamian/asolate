import imgFrame1 from "../../imports/image-4.png";
import { RevealTitle } from "./RevealTitle";
import { RevealText } from "./RevealText";
import { RevealImageBlock } from "./RevealImage";

export default function AboutSectionDark() {
  return (
    <section className="w-full bg-[#0f3063] text-left">
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-[80px]">

        <div className="w-full lg:w-[calc(50%-40px)] shrink-0 h-[400px] lg:h-[583px] p-[32px]">
          <RevealImageBlock containerClassName="relative w-full h-full overflow-hidden">
            <img alt="" className="absolute inset-0 w-full h-full object-cover max-w-none" src={imgFrame1} />
          </RevealImageBlock>
        </div>

        <div className="w-full lg:w-[calc(50%-40px)] shrink-0 flex flex-col gap-[24px] py-12 lg:py-0">
          <RevealTitle className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[40px] md:text-[48px] leading-[45px] tracking-[-0.9px] text-[#99d3fd]">
            The core idea behind Asolate
          </RevealTitle>
          <RevealText className="font-['Inter',sans-serif] font-normal text-[18px] leading-[1.5] text-white" delay={0.1}>
            Asolate is built on a simple idea: essentials should be well made, culturally relevant, and accessible. The brand combines curation, quality, and Latin American identity to create value beyond the product itself. Its focus is on thoughtful design, consistency, and long-term use (slow fashion made easy).
          </RevealText>
        </div>
      </div>
    </section>
  );
}
