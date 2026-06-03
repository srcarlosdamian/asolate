import imgFrame1 from "../../imports/AboutSectionMargin-3/52f8d2c538920a81a50bd0f076fa78f6831a3146.png";
import imgFrame2 from "../../imports/AboutSectionMargin-3/6f36827f34ba743eaf9fabc555975b55531447aa.png";
import imgFrame3 from "../../imports/AboutSectionMargin-3/f834ff99b8d6befbc2d431b7b1debc6c76807745.png";
import { RevealTitle } from "./RevealTitle";
import { RevealText } from "./RevealText";
import { RevealImageBlock } from "./RevealImage";

export default function OpportunitySection() {
  return (
    <section className="w-full bg-white text-left">
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-[80px] h-auto lg:h-[583px]">

        {/* Text column */}
        <div className="w-full lg:w-[calc(50%-40px)] shrink-0 flex flex-col gap-[24px] py-12 lg:py-0">
          <RevealTitle className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[40px] md:text-[48px] leading-[45px] tracking-[-0.9px] text-[#0a1d37]">
            Opportunity
          </RevealTitle>
          <RevealText className="font-['Inter',sans-serif] font-normal text-[18px] md:text-[20px] leading-[32px] text-black" delay={0.1}>
            Consumers particularly Gen Z and Millennials are increasingly seeking fewer, more versatile products with stronger aesthetic identity, clearer curation, sustainability and better long-term value.
          </RevealText>
          <RevealText className="font-['Inter',sans-serif] font-normal text-[18px] md:text-[20px] leading-[32px] text-black" delay={0.2}>
            This creates an opportunity for Asolate to position itself as a culturally distinctive essentials brand that combines accessible pricing, strong visual identity and versatile premium basics within one cohesive system.
          </RevealText>
        </div>

        {/* Image column — 3 layers */}
        <RevealImageBlock containerClassName="w-full lg:w-[calc(50%-40px)] shrink-0 self-stretch min-h-[400px] lg:min-h-[583px] relative overflow-hidden">
          <img alt="" className="absolute inset-0 w-full h-full object-cover max-w-none" src={imgFrame1} />
          <img alt="" className="absolute inset-0 w-full h-full object-cover max-w-none" src={imgFrame2} />
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute max-w-none"
              src={imgFrame3}
              style={{ height: "139.04%", left: "-82.24%", top: "-39.04%", width: "206.49%" }}
            />
          </div>
        </RevealImageBlock>
      </div>
    </section>
  );
}
