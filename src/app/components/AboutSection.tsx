import imgAbout from "../../imports/image-3.png";
import { RevealTitle } from "./RevealTitle";
import { RevealText } from "./RevealText";
import { RevealImageBlock } from "./RevealImage";

export default function AboutSection() {
  return (
    <section className="w-full bg-white text-left">
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-[80px] min-h-[583px]">
        <div className="w-full lg:w-[calc(50%-40px)] shrink-0 flex flex-col gap-[24px] py-12 lg:py-0">
          <RevealTitle className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[40px] md:text-[48px] leading-[45px] tracking-[-0.9px] text-[#0a1d37]">
            Asolate
          </RevealTitle>
          <div className="font-['Inter',sans-serif] font-normal text-[18px] leading-[32px] text-black flex flex-col gap-[32px]">
            <RevealText className="text-[20px]" delay={0.1}>
              Asolate is a brand focused on sustainable Latin American essentials that combines timeless design, quality materials, and accessibility.
            </RevealText>
            <RevealText className="text-[20px]" delay={0.2}>
              Inspired by the philosophy of essential wear and high value for money, the brand seeks to redefine how consumers experience everyday basics through a more conscious, durable, and culturally connected approach.
            </RevealText>
          </div>
        </div>

        <RevealImageBlock containerClassName="w-full lg:w-[calc(50%-40px)] shrink-0 self-stretch min-h-[400px] lg:min-h-[583px] relative overflow-hidden">
          <img alt="Asolate brand" className="absolute inset-0 w-full h-full object-cover" src={imgAbout} />
        </RevealImageBlock>
      </div>
    </section>
  );
}
