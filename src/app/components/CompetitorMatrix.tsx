import { useState } from 'react';

interface CompetitorData {
  title: string;
  philosophy: string;
  price: string;
  material: string;
  origin: string;
}

const competitors: Record<string, CompetitorData> = {
  asolate: {
    title: "Equilibrium: High Quality & Direct Honest Cost",
    philosophy: "Design beautiful, functional staples using local LATAM fibers that perform beautifully for a decade.",
    price: "$25.00 - $48.00 USD",
    material: "100% Peruvian Pima / Argentine Merino blend",
    origin: "Peru & Chile (Locally sourced)"
  },
  fastfashion: {
    title: "Volume Supremacy & Disposable Lifespans",
    philosophy: "Produce maximum product velocity utilizing short-staple synthetic petrochemical blends.",
    price: "$9.00 - $18.00 USD",
    material: "80% Polyester / 20% Non-org Cotton",
    origin: "Offshore Hubs (Vast ocean routes)"
  },
  luxury: {
    title: "Status Branding: High Premium Retail Legacy",
    philosophy: "Market identity and heritage attributes at an average markup multiple of 12x above mill gate price.",
    price: "$180.00 - $350.00 USD",
    material: "Organic cotton with heavy metal dyes",
    origin: "Western European mills (High carbon shipment)"
  }
};

export default function CompetitorMatrix() {
  const [activeCompetitor, setActiveCompetitor] = useState<string>('asolate');
  const data = competitors[activeCompetitor];

  return (
    <section className="max-w-[1300px] mx-auto px-6 text-left space-y-6">
      <div>
        <span className="text-xs font-mono uppercase bg-[#0052FF]/10 text-[#0052FF] px-2.5 py-1 rounded inline-block font-bold mb-2">
          COMPETITIVE MATRIX
        </span>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-[#0A1D37]">
          Where Asolate Position Fits
        </h3>
      </div>

      <div className="bg-[#FAF9F6] rounded-3xl overflow-hidden border border-slate-200/40">
        <div className="p-2 bg-slate-100/50 flex flex-wrap gap-1 border-b border-slate-200/40">
          <button
            onClick={() => setActiveCompetitor('asolate')}
            className={`px-4 py-2 font-sans text-xs font-bold rounded-lg transition-all ${
              activeCompetitor === 'asolate'
                ? 'bg-[#0052FF] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Asolate (Latin America)
          </button>
          <button
            onClick={() => setActiveCompetitor('fastfashion')}
            className={`px-4 py-2 font-sans text-xs font-bold rounded-lg transition-all ${
              activeCompetitor === 'fastfashion'
                ? 'bg-[#0052FF] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Fast Fashion (Global)
          </button>
          <button
            onClick={() => setActiveCompetitor('luxury')}
            className={`px-4 py-2 font-sans text-xs font-bold rounded-lg transition-all ${
              activeCompetitor === 'luxury'
                ? 'bg-[#0052FF] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Traditional Luxury
          </button>
        </div>

        <div className="p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono bg-blue-100 text-[#0052FF] px-2.5 py-1 rounded font-bold uppercase">
                  {activeCompetitor === 'asolate' ? 'ASOLATE SYSTEM' : activeCompetitor === 'fastfashion' ? 'FAST FASHION' : 'LUXURY MARKET'}
                </span>
                <span className="text-xs font-sans text-slate-400">Position 01</span>
              </div>
              <h4 className="text-2xl font-display font-bold text-[#0A1D37]">
                {data.title}
              </h4>
              <p className="font-sans text-slate-600 text-sm md:text-base leading-loose">
                {activeCompetitor === 'asolate'
                  ? "Asolate sits securely in the \"Honest Luxury\" coordinate space—offering raw material choices that equal European houses, but priced transparently by excluding legacy wholesale intermediaries and retail margins."
                  : activeCompetitor === 'fastfashion'
                  ? "Fast fashion prioritizes rapid turnover and maximum volume, often at the expense of quality and sustainability. Low production costs and synthetic materials enable aggressive pricing but create environmental and durability concerns."
                  : "Traditional luxury brands command premium pricing through heritage branding and status signaling. While quality may be high, markup ratios often exceed 12x production costs due to extensive marketing and retail overhead."}
              </p>

              <div className="border-t border-slate-200/50 pt-4">
                <div className="text-[10px] font-sans text-[#0052FF] mb-1 font-semibold">Core Philosophy</div>
                <p className="font-sans text-slate-700 text-xs md:text-sm leading-relaxed">
                  {data.philosophy}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-100 space-y-4">
              <div>
                <div className="text-[10px] font-sans text-slate-400">Average Unit Price</div>
                <div className="text-xl font-display font-bold text-[#0A1D37]">{data.price}</div>
              </div>
              <div>
                <div className="text-[10px] font-sans text-slate-400">Material Standard</div>
                <div className="text-sm font-semibold text-slate-800">{data.material}</div>
              </div>
              <div>
                <div className="text-[10px] font-sans text-slate-400">Production Location</div>
                <div className="text-sm font-semibold text-slate-800">{data.origin}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
