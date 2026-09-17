import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/common/SectionHeading';
import { RadialBackground } from '@/components/ui/light-theme-tailwind-css-background-snippet';



export const AboutSection: React.FC = () => {
  const benefits = [
    {
      title: 'Reliable Team',
      desc: 'We provide practical technology solutions with professional installation, configuration and support.',
    },
    {
      title: 'Affordable Solutions',
      desc: 'Solutions are designed around your requirements and budget without compromising reliability.',
    },
    {
      title: 'End-to-End Service',
      desc: 'From consultation and installation to maintenance and support, you can work with one technology partner.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <RadialBackground />
      
      {/* Small floating geometric shape */}
      <div className="absolute top-16 left-[6%] w-4 h-4 rounded-full border-2 border-rose-400 opacity-40 hidden lg:block pointer-events-none" />

      <div className="ref-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image Placeholder + Organic Cyan SVG Blob + Floating Cards */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            
            {/* Organic Cyan SVG Blob behind photo matching reference */}
            <div className="absolute -top-10 -left-10 w-[115%] h-[115%] -z-10 pointer-events-none hidden sm:block">
              <svg viewBox="0 0 500 500" className="w-full h-full fill-[#E0F7FA] opacity-90">
                <path d="M430,300Q380,420,260,430Q140,440,85,320Q30,200,140,115Q250,30,370,110Q490,190,430,300Z" />
              </svg>
            </div>

            <div className="relative mx-auto max-w-[500px] lg:max-w-none">
              <div className="overflow-hidden rounded-3xl shadow-xl border-4 border-white bg-white">
                <img
                  src="/images/about-company.jpg"
                  alt="C&G Infotech Security & IT Engineering Team"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: About Content & Benefits */}
          <div className="lg:col-span-6 space-y-7 order-1 lg:order-2">
            <SectionHeading
              eyebrow="ABOUT C&G INFOTECH"
              title="Technology That Helps Your Business Move Forward"
              accentWord="Move Forward"
              description="C&G Infotech provides professional IT and security solutions designed around the real requirements of businesses. From securing your premises to building reliable digital infrastructure, our team focuses on dependable implementation, responsive support and long-term relationships."
            />

            {/* Benefits List */}
            <div className="space-y-3.5 pt-1">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/60 ref-card-shadow">
                  <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center text-[#17B890] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#092C74]">
                      {b.title}
                    </h3>
                    <p className="text-xs text-[#697386] font-normal leading-relaxed mt-0.5">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#092C74] hover:bg-[#123EB8] text-white font-bold text-xs tracking-wide shadow-md transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
