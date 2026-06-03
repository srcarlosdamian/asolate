import imgFrame1 from "../../imports/AboutSection-5/1a00234dad77fc8e650307c48c6486ffa4b3d798.png";
import { RevealTitle } from "./RevealTitle";
import { RevealText } from "./RevealText";
import { RevealImageBlock } from "./RevealImage";

export default function TargetAudienceSection() {
  return (
    <section className="w-full bg-white text-left">
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-[80px] min-h-[500px]">

        {/* Left: text */}
        <div className="w-full lg:w-[calc(50%-40px)] shrink-0 flex flex-col gap-[24px] py-12 lg:py-0">
          <RevealTitle className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[40px] md:text-[48px] leading-[45px] tracking-[-0.9px] text-[#0a1d37]">
            Target audience
          </RevealTitle>
          <RevealText className="font-['Inter',sans-serif] font-normal text-[18px] leading-[32px] text-black" delay={0.1}>
            Asolate is designed for the conscious Gen Z and Millennial consumer who actively avoids ultra-fast fashion and looks for durable, ethical, and well-designed alternatives. This audience values minimalism, quality, transparency, and a strong brand story. They want fewer, better products that fit both their lifestyle and their values.
          </RevealText>
        </div>

        {/* Right: image */}
        <RevealImageBlock containerClassName="w-full lg:w-[calc(50%-40px)] shrink-0 self-stretch min-h-[400px] lg:min-h-[500px] relative overflow-hidden">
          <img alt="Target audience" className="absolute inset-0 w-full h-full object-cover" src={imgFrame1} />
        </RevealImageBlock>
      </div>
    </section>
  );
}
