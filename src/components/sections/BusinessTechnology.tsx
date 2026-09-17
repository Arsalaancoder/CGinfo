import React from 'react';
import { Shield, Clock, Wifi } from 'lucide-react';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { SectionHeading } from '@/components/common/SectionHeading';
import { AnalyticsFloatingCard } from '@/components/common/FloatingInfoCard';

export const BusinessTechnology: React.FC = () => {
  const points = [
    {
      title: 'Prevent Downtime',
      desc: 'Proactive maintenance and support help reduce unexpected system failures.',
      icon: Clock,
      color: 'bg-blue-50 text-[#123EB8]',
    },
    {
      title: 'Improve Security',
      desc: 'Professional surveillance, networking and cybersecurity solutions help protect business operations.',
      icon: Shield,
      color: 'bg-emerald-50 text-[#17B890]',
    },
    {
      title: 'Stay Connected',
      desc: 'Reliable infrastructure keeps teams, systems and devices connected.',
      icon: Wifi,
      color: 'bg-cyan-50 text-[#16A7C9]',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Decorative floating geometric accent */}
      <div className="absolute top-12 right-[8%] w-5 h-5 rounded-full border-2 border-emerald-400 opacity-40 hidden lg:block pointer-events-none" />

      <div className="ref-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading & 3 Compact Advantage Points */}
          <div className="lg:col-span-6 space-y-7">
            <SectionHeading
              eyebrow="BUSINESS TECHNOLOGY"
              title="Save Time, Reduce Risk & Keep Your Business Running"
              accentWord="Keep Your Business Running"
              description="Technology should simplify your business, not slow it down. We help organisations prevent downtime, strengthen security and maintain dependable infrastructure."
            />

            <div className="space-y-3.5 pt-1">
              {points.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F9FC] border border-slate-100 hover:border-blue-100 transition-colors">
                    <div className={`w-10 h-10 rounded-xl ${p.color} flex items-center justify-center shrink-0 mt-0.5`}>
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#092C74]">
                        {p.title}
                      </h3>
                      <p className="text-xs text-[#697386] font-normal leading-relaxed mt-0.5">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Placeholder Image + Organic Orange SVG Blob + Floating Card */}
          <div className="lg:col-span-6 relative">
            
            {/* Organic Orange SVG Blob behind photo matching reference */}
            <div className="absolute -top-10 -right-10 w-[115%] h-[115%] -z-10 pointer-events-none hidden sm:block">
              <svg viewBox="0 0 500 500" className="w-full h-full fill-[#FFF3E0] opacity-90">
                <path d="M410,310Q350,430,230,420Q110,410,70,290Q30,170,150,100Q270,30,380,120Q490,210,410,310Z" />
              </svg>
            </div>

            <div className="relative mx-auto max-w-[500px] lg:max-w-none">
              <ImagePlaceholder
                label="Business Security Image"
                width={650}
                height={720}
                futureSrc="/images/business-security.webp"
                className="w-full shadow-lg rounded-3xl"
                aspectRatio="650/720"
              />

              {/* Floating Analytics Card (Overlapping Bottom Left) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 z-20 animate-float-slow max-w-[270px] sm:max-w-sm">
                <AnalyticsFloatingCard />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
