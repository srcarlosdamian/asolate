import { RevealTitle } from "./RevealTitle";
import { RevealText } from "./RevealText";

export default function BusinessModel() {
  return (
    <section className="max-w-[1300px] mx-auto px-6 text-left">
      <div className="bg-[#0A1D37] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-12 space-y-5">
            <div className="flex justify-between items-center text-[10px] font-mono text-[#60A5FA]">
              <span>BUSINESS VALUE LAYER DECK</span>
            </div>

            <RevealTitle className="font-display font-bold text-2xl md:text-4xl text-white leading-tight">
              Curated essentials aligned with Latin American makers
            </RevealTitle>

            <RevealText className="font-sans text-slate-300 text-sm md:text-base leading-loose" delay={0.1}>
              Asolate operates as a brand built around curated essentials and strategic partnerships with Latin American makers. Its model is designed to create value through product curation, retail margins, and a future digital commerce ecosystem that will extend the brand experience. The brand grows by building trust, consistency, and strong product value before scaling the e-commerce layer.
            </RevealText>

            <div className="pt-6 border-t border-slate-700 text-[11px] font-mono text-slate-400">
              FINAL PRESENTATION PLAN • CREATIVE STAGE • 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
