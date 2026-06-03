import { useState } from 'react';

interface GarmentItem {
  id: string;
  name: string;
  quantity: number;
  wholesalePrice: number;
  retailPrice: number;
}

const garments: GarmentItem[] = [
  {
    id: 'pima_crew',
    name: 'Pima Cotton Crew-Neck',
    quantity: 300,
    wholesalePrice: 11,
    retailPrice: 32
  },
  {
    id: 'merino_knit',
    name: 'Argentine Merino Knit Sweater',
    quantity: 200,
    wholesalePrice: 24,
    retailPrice: 78
  },
  {
    id: 'pima_heavy',
    name: 'Heavypima Heavyweight Pocket Tee',
    quantity: 250,
    wholesalePrice: 15,
    retailPrice: 45
  },
  {
    id: 'linen_pant',
    name: 'Structured Flax Linen Trousers',
    quantity: 200,
    wholesalePrice: 19,
    retailPrice: 62
  }
];

export default function CapsulePlanner() {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const calculateMetrics = () => {
    let totalUnits = 0;
    let totalWholesale = 0;
    let totalRetail = 0;

    garments.forEach(item => {
      if (selectedItems.has(item.id)) {
        totalUnits += item.quantity;
        totalWholesale += item.quantity * item.wholesalePrice;
        totalRetail += item.quantity * item.retailPrice;
      }
    });

    const totalProfit = totalRetail - totalWholesale;
    const marginPercentage = totalRetail > 0 ? Math.round((totalProfit / totalRetail) * 100) : 0;

    return { totalUnits, totalWholesale, totalRetail, totalProfit, marginPercentage };
  };

  const handleSimulate = () => {
    if (selectedItems.size === 0) {
      alert('Please select at least one garment starter pack from the grid first!');
      return;
    }
    alert('Draft Invoice Simulated Successfully! Keep this document or query custom mill volume specs via Centurio Lab under the contact section.');
  };

  const metrics = calculateMetrics();

  return (
    <section id="planner" className="max-w-[1300px] mx-auto px-6 text-left space-y-6">
      <div>
        <span className="text-xs font-mono uppercase bg-[#0052FF]/10 text-[#0052FF] px-2.5 py-1 rounded inline-block font-bold mb-2">
          FINANCIAL STUDY DECK
        </span>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-[#0A1D37]">
          Interactive Wholesale Capsule Planner
        </h3>
        <p className="font-sans text-slate-500 text-sm max-w-2xl mt-1 leading-relaxed">
          Simulate a small-scale wholesale partnership with regional mills. Select custom items below to build your basic brand starter pack and check margins.
        </p>
      </div>

      <div className="bg-[#FAF9F6] rounded-3xl p-6 md:p-10 border border-slate-200/40">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="flex-1 space-y-4">
            <h4 className="text-xs font-sans text-slate-500 font-bold">Select Starter Pack Garments</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {garments.map(item => {
                const isSelected = selectedItems.has(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`p-4 bg-white rounded-xl border transition-all cursor-pointer flex justify-between items-center select-none ${
                      isSelected ? 'border-[#0052FF] bg-blue-50/20' : 'border-slate-100 hover:border-[#0052FF]'
                    }`}
                  >
                    <div>
                      <h5 className="font-sans text-xs font-bold text-slate-800">{item.name}</h5>
                      <p className="text-[11px] text-[#0052FF] font-sans mt-0.5">
                        Wholesale: ${item.wholesalePrice}.00 USD / Retail: ${item.retailPrice}.00
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1 font-sans">Pack MOQ: {item.quantity} units</p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded border flex items-center justify-center text-xs font-bold ${
                        isSelected
                          ? 'bg-[#0052FF] border-[#0052FF] text-white'
                          : 'bg-white border-slate-300 text-white'
                      }`}
                    >
                      ✓
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:w-[400px] bg-white border border-slate-200/50 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="text-[10px] font-sans text-[#7A7F87] font-bold mb-1">Summary Deck Metrics</div>
              <h4 className="font-display text-lg font-bold text-[#0A1D37] mb-4">Invoice Simulation</h4>

              <div className="space-y-4 text-xs font-sans">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Total Units Selected:</span>
                  <span className="font-bold text-slate-800">{metrics.totalUnits.toLocaleString()} units</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Total Factory Cost (Wholesale):</span>
                  <span className="font-bold text-[#0052FF]">${metrics.totalWholesale.toLocaleString()}.00 USD</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Estimated Retail Revenue:</span>
                  <span className="font-bold text-emerald-600">${metrics.totalRetail.toLocaleString()}.00 USD</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Gross Project Profitability:</span>
                  <span className="font-bold text-slate-800">${metrics.totalProfit.toLocaleString()}.00 USD</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-slate-500">Brand Margin Index:</span>
                  <span className="font-bold text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded">{metrics.marginPercentage}%</span>
                </div>
              </div>

              {metrics.totalUnits > 0 && (
                <div className="text-xs font-sans bg-blue-50 border border-blue-100 p-3 rounded-lg text-slate-700 leading-relaxed mt-6">
                  👉 Usable fashion index:{' '}
                  <span className="text-[#0052FF] font-bold">8.5 years of life cycle guarantee</span> owing to pristine long-staple fibers.
                </div>
              )}
            </div>

            <div className="mt-8">
              <button
                onClick={handleSimulate}
                className="w-full py-3 bg-[#0052FF] hover:bg-blue-700 text-white font-sans font-bold text-xs rounded-xl transition-all"
              >
                Simulate Wholesale Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
