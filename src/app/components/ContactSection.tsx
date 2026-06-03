import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    proposal: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Inquiry Sent! Thank you for contacting Centurio Digital Agency AB.');
    setFormData({ name: '', email: '', organization: '', proposal: '' });
  };

  return (
    <section id="contact" className="max-w-[1300px] mx-auto px-6 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#0052FF] rounded-full"></span>
            <span className="font-display font-bold text-slate-800 tracking-wider text-sm">Centurio Digital Agency AB</span>
          </div>

          <h4 className="text-3xl font-display font-bold text-[#0A1D37] leading-tight">
            Asolate redefines everyday essentials
          </h4>

          <p className="font-sans text-slate-600 text-sm leading-loose">
            Have questions about the brand or want to learn more? Get in touch with our team.
          </p>

          <div className="space-y-3 font-sans text-xs text-slate-500">
            <div>
              <span className="text-slate-800 font-bold block mb-1">Website:</span>
              <a href="https://centuriodigital.agency" className="text-[#0052FF] hover:underline">centuriodigital.agency</a>
            </div>
            <div>
              <span className="text-slate-800 font-bold block mb-1">Email:</span>
              <a href="mailto:hello@centuriodigital.agency" className="text-[#0052FF] hover:underline">hello@centuriodigital.agency</a>
            </div>
            <div>
              <span className="text-slate-800 font-bold block mb-1">Address:</span>
              Catalinabacken 2, 183 68 TÄBY - SWEDEN
            </div>
            <div>
              <span className="text-slate-800 font-bold block mb-1">Phone:</span>
              +46-8-5016 13 00
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-slate-50 border border-slate-200/50 rounded-3xl p-8">
          <h4 className="font-display text-xl font-bold text-[#0A1D37] mb-6">Inquire Regarding Partnership</h4>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-sans text-slate-500 font-bold mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Carlos Damian"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs font-sans focus:ring-1 focus:ring-[#0052FF] focus:border-[#0052FF] outline-none"
                />
              </div>
              <div>
                <label className="block text-[10px] font-sans text-slate-500 font-bold mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs font-sans focus:ring-1 focus:ring-[#0052FF] focus:border-[#0052FF] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-sans text-slate-500 font-bold mb-1">Your Organization</label>
              <input
                type="text"
                placeholder="Asolate Chile Ltda."
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs focus:ring-1 focus:ring-[#0052FF] focus:border-[#0052FF] outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] font-sans text-slate-500 font-bold mb-1">Your Partnership Proposal</label>
              <textarea
                placeholder="Tell us more about your target volume and raw material requirements..."
                rows={4}
                value={formData.proposal}
                onChange={(e) => setFormData({ ...formData, proposal: e.target.value })}
                className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs focus:ring-1 focus:ring-[#0052FF] focus:border-[#0052FF] outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#0052FF] hover:bg-blue-700 text-white font-sans font-bold text-xs rounded-xl transition-colors mt-2"
            >
              Send Inquiry Coordinates
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
