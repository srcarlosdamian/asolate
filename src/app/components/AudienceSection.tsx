import { RevealTitle } from "./RevealTitle";
import { RevealText } from "./RevealText";

export default function AudienceSection() {
  return (
    <section className="max-w-[1300px] mx-auto px-6 text-left">
      <div className="bg-white rounded-3xl p-8 md:p-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-[10px] font-mono">
            <span className="bg-[#0052FF]/15 text-[#0052FF] px-2.5 py-1 rounded font-bold uppercase">TARGET AUDIENCE</span>
          </div>

          <RevealTitle className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#0A1D37] leading-tight">
            Target audience
          </RevealTitle>

          <RevealText className="font-sans text-slate-600 text-sm md:text-base leading-loose max-w-3xl" delay={0.1}>
            The Asolate target audience consists of conscious consumers who value quality, sustainability, and cultural authenticity. They seek minimalist essentials that combine thoughtful design with long-term use, and appreciate the story behind Latin American craftsmanship.
          </RevealText>
        </div>
      </div>
    </section>
  );
}
