import React from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { AboutSection } from '@/components/sections/About';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { CTASection } from '@/components/sections/CTA';
import { ShieldCheck, Award, MapPin, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-8">
      {/* Subpage Header Banner */}
      <section className="bg-[#092C74] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#123EB8]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 border border-white/20 text-xs font-extrabold tracking-wider uppercase mb-4">
            ABOUT C&G INFOTECH
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight">
            Your Trusted Technology & Security Partner
          </h1>
          <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto mt-4">
            Delivering high-reliability CCTV surveillance, structured networking, hardware solutions, cybersecurity, and digital development since 2019.
          </p>
        </div>
      </section>

      {/* Main About Split Section */}
      <AboutSection />

      {/* Corporate Philosophy & Location Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="OUR PHILOSOPHY"
                title="Engineering Security & Stability for Business Growth"
                accentWord="Security & Stability"
                description="At C&G Infotech, we understand that downtime or security lapses directly impact your bottom line. We design turn-key IT & security systems that operate quietly, reliably, and efficiently."
              />

              <div className="space-y-4 pt-2">
                {[
                  'Clean structured cabling standards for effortless maintenance',
                  'Calibrated HD IP CCTV cameras with zero blindspots',
                  'Dedicated Annual Maintenance Contracts (AMC) with guaranteed SLA response times',
                  'Custom software and digital marketing built for practical business lead generation',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-[#17B890] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <span className="text-sm font-semibold text-[#161B27]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#F7F9FC] p-8 rounded-3xl border border-slate-200/80 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#092C74] text-white flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#092C74]">Headquarters & Operations</h3>
                  <p className="text-xs text-[#697386]">Secunderabad, Telangana</p>
                </div>
              </div>

              <div className="text-sm text-[#161B27] leading-relaxed font-medium bg-white p-5 rounded-2xl border border-slate-200/60">
                <strong>Address:</strong> Picket, Opposite Jubilee Bus Station, Akbar Road, Secunderabad, Telangana – 500003
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200/60 text-center">
                  <div className="text-2xl font-black text-[#123EB8]">500+</div>
                  <div className="text-xs text-[#697386] font-bold mt-0.5">Business Deployments</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200/60 text-center">
                  <div className="text-2xl font-black text-[#17B890]">24/7</div>
                  <div className="text-xs text-[#697386] font-bold mt-0.5">AMC Service Desk</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CTASection />
    </div>
  );
};

export default AboutPage;
