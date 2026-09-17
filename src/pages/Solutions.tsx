import React from 'react';
import { CoreSolutions } from '@/components/sections/CoreSolutions';
import { CTASection } from '@/components/sections/CTA';
import { CheckCircle2, Shield, Share2, HardDrive, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-8">
      {/* Header Banner */}
      <section className="bg-[#092C74] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#123EB8]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 border border-white/20 text-xs font-extrabold tracking-wider uppercase mb-4">
            INTEGRATED SOLUTIONS
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Smart & Secure Business Technology Solutions
          </h1>
          <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto mt-4">
            Structured security, high-availability networking, reliable IT support, and modern digital development built into cohesive business packages.
          </p>
        </div>
      </section>

      <CoreSolutions />

      {/* Solutions Architectural Blueprint Section */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#123EB8]">
                TURN-KEY IMPLEMENTATION
              </span>
              <h2 className="text-3xl font-extrabold text-[#092C74] mt-2">
                Why Integrated Technology Bundles Work Best
              </h2>
              <p className="text-sm text-[#697386] mt-3 leading-relaxed">
                Rather than managing separate vendors for CCTV camera wiring, router setups, computer hardware purchase, and web development, C&G Infotech acts as your unified technology department.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
                <div className="text-sm font-extrabold text-[#092C74]">Single Point of Contact</div>
                <p className="text-xs text-[#697386]">One dedicated hotline for all hardware, network, surveillance & software issues.</p>
              </div>
              <div className="p-5 rounded-2xl bg-cyan-50/60 border border-cyan-100 space-y-2">
                <div className="text-sm font-extrabold text-[#092C74]">Optimized Hardware Compatibility</div>
                <p className="text-xs text-[#697386]">Switches, routers, NVR storage and workstations selected for maximum synergy.</p>
              </div>
              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
                <div className="text-sm font-extrabold text-[#092C74]">Cost Efficiency</div>
                <p className="text-xs text-[#697386]">Combined procurement and maintenance bundles lower overall expenditure.</p>
              </div>
              <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-100 space-y-2">
                <div className="text-sm font-extrabold text-[#092C74]">Guaranteed AMC Coverage</div>
                <p className="text-xs text-[#697386]">Proactive preventive checks ensuring high uptime for cameras & networks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default SolutionsPage;
