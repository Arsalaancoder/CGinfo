import React from 'react';
import {
  Factory,
  Activity,
  GraduationCap,
  ShoppingBag,
  Hotel,
  Building2,
  Landmark,
  Briefcase,
} from 'lucide-react';

export const IndustryStrip: React.FC = () => {
  const industries = [
    { name: 'Manufacturing', icon: Factory },
    { name: 'Healthcare', icon: Activity },
    { name: 'Education', icon: GraduationCap },
    { name: 'Retail', icon: ShoppingBag },
    { name: 'Hospitality', icon: Hotel },
    { name: 'Real Estate', icon: Building2 },
    { name: 'Finance', icon: Landmark },
    { name: 'Corporate Offices', icon: Briefcase },
  ];

  // Duplicated list to create a 100% seamless infinite loop track on the rail
  const railItems = [...industries, ...industries];

  return (
    <section className="bg-[#F7F9FC] py-7 border-y border-slate-200/60 overflow-hidden relative">
      
      {/* Left and Right Soft Fade Gradient Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#F7F9FC] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#F7F9FC] to-transparent z-10 pointer-events-none" />

      <div className="ref-container">
        
        {/* Centered Label */}
        <div className="text-center mb-4">
          <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#092C74]">
            Trusted by Businesses Across Industries
          </p>
        </div>

        {/* Continuous Infinite Rail Scroll Track */}
        <div className="overflow-hidden w-full py-1">
          <div className="animate-rail-scroll flex items-center gap-4 sm:gap-6">
            {railItems.map((ind, index) => {
              const Icon = ind.icon;
              return (
                <div
                  key={`${ind.name}-${index}`}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-[#123EB8]/50 hover:shadow-sm transition-all duration-200 shrink-0 group cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#123EB8] group-hover:bg-[#123EB8] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#161B27] group-hover:text-[#092C74] whitespace-nowrap">
                    {ind.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
