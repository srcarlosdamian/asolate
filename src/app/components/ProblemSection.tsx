import imgFrame1 from "../../imports/image-2.png";
import { RevealTitle } from "./RevealTitle";
import { RevealText } from "./RevealText";
import { RevealImageBlock } from "./RevealImage";

export default function ProblemSection() {
  return (
    <section className="w-full bg-white text-left">
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-[80px] h-auto lg:h-[583px]">

        <RevealImageBlock containerClassName="w-full lg:w-[calc(50%-40px)] shrink-0 self-stretch min-h-[400px] lg:min-h-[583px] relative overflow-hidden">
          <img alt="" className="absolute inset-0 w-full h-full object-cover max-w-none" src={imgFrame1} />
        </RevealImageBlock>

        <div className="w-full lg:w-[calc(50%-40px)] shrink-0 flex flex-col gap-[24px] py-12 lg:py-0">
          <RevealTitle className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[40px] md:text-[48px] leading-[45px] tracking-[-0.9px] text-[#0a1d37]">
            Pain point
          </RevealTitle>
          <RevealText className="font-['Inter',sans-serif] font-normal text-[18px] md:text-[20px] leading-[32px] text-black" delay={0.1}>
            Today's market forces consumers to choose between overpriced international brands and low-quality fast fashion that wears out quickly. In the middle, there is a lack of reliable options for high-quality everyday essentials that are both accessible and meaningful. The result is a fragmented market with too many choices and too little clarity.
          </RevealText>
        </div>
      </div>
    </section>
  );
}
