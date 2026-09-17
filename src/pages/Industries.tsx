import React from 'react';
import { IndustriesSection } from '@/components/sections/Industries';
import { CTASection } from '@/components/sections/CTA';
import { ArrowRight, Factory, Activity, GraduationCap, ShoppingBag, Hotel, Landmark, Building2, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

// 3D Geometric Abstract Architectural Pattern Graphics (Matching Bottom-Right Card Graphics in Mockup Image)
const PatternGreen: React.FC = () => (
  <svg width="110" height="85" viewBox="0 0 110 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 pointer-events-none">
    <circle cx="80" cy="60" r="22" fill="#E6F4F1" opacity="0.3" />
    <circle cx="80" cy="60" r="14" fill="#FFFFFF" opacity="0.4" />
    <circle cx="52" cy="65" r="14" fill="#B2DFD6" opacity="0.4" />
    <circle cx="65" cy="40" r="10" fill="#E6F4F1" opacity="0.4" />
    <circle cx="92" cy="35" r="8" fill="#B2DFD6" opacity="0.5" />
    <rect x="25" y="50" width="22" height="30" rx="6" fill="#FFFFFF" opacity="0.3" />
  </svg>
);

const PatternGold: React.FC = () => (
  <svg width="110" height="85" viewBox="0 0 110 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 pointer-events-none">
    <path d="M45 80 C45 55 65 35 90 35 C115 35 115 80 115 80 Z" fill="#F59E0B" opacity="0.75" />
    <circle cx="60" cy="65" r="16" fill="#FDE68A" />
    <rect x="70" y="25" width="28" height="38" rx="8" fill="#D97706" opacity="0.5" />
  </svg>
);

const PatternPink: React.FC = () => (
  <svg width="110" height="85" viewBox="0 0 110 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 pointer-events-none">
    <path d="M40 80 C40 40 70 40 100 40 L100 80 Z" fill="#F43F5E" opacity="0.75" />
    <circle cx="35" cy="65" r="16" fill="#FECDD3" />
    <rect x="65" y="20" width="28" height="48" rx="10" fill="#FB7185" opacity="0.55" />
  </svg>
);

const PatternPurple: React.FC = () => (
  <svg width="110" height="85" viewBox="0 0 110 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 pointer-events-none">
    <path d="M30 80 C30 45 60 45 90 45 L90 80 Z" fill="#9333EA" opacity="0.75" />
    <circle cx="90" cy="35" r="15" fill="#DDD6FE" />
    <rect x="40" y="25" width="26" height="42" rx="8" fill="#C084FC" opacity="0.5" />
  </svg>
);

const PatternBlue: React.FC = () => (
  <svg width="110" height="85" viewBox="0 0 110 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 pointer-events-none">
    <circle cx="45" cy="65" r="16" fill="#93C5FD" />
    <rect x="60" y="30" width="42" height="48" rx="8" fill="#2563EB" opacity="0.75" />
    <path d="M25 80 L60 45 L60 80 Z" fill="#3B82F6" opacity="0.55" />
  </svg>
);

const PatternAmber: React.FC = () => (
  <svg width="110" height="85" viewBox="0 0 110 85" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 pointer-events-none">
    <rect x="50" y="30" width="42" height="48" rx="10" fill="#D97706" opacity="0.75" />
    <circle cx="40" cy="60" r="15" fill="#FDE68A" />
    <path d="M70 20 C85 20 100 35 100 50 L70 50 Z" fill="#F59E0B" opacity="0.55" />
  </svg>
);

export const IndustriesPage: React.FC = () => {
  const sectorCards = [
    {
      id: 'manufacturing',
      title: 'Manufacturing & Plant',
      desc: 'Surveillance across shop floors, robust industrial wireless mesh networks & ruggedized IT setups.',
      icon: Factory,
      featured: true,
      pattern: PatternGreen,
      shadow: 'shadow-[0_20px_45px_-12px_rgba(15,138,111,0.3)]',
      iconBg: 'bg-emerald-700/60 text-emerald-200 border border-emerald-500/30',
    },
    {
      id: 'healthcare',
      title: 'Healthcare & HIPAA',
      desc: '24/7 video monitoring for patient safety, secure patient data networks & high-uptime AMC care.',
      icon: Activity,
      featured: false,
      pattern: PatternGold,
      shadow: 'shadow-[0_20px_45px_-12px_rgba(245,158,11,0.18)]',
      iconBg: 'bg-amber-50 text-amber-600 border border-amber-100',
    },
    {
      id: 'education',
      title: 'Education & Campus',
      desc: 'Campus-wide Wi-Fi mesh, classroom audio/video cabling & multi-building surveillance systems.',
      icon: GraduationCap,
      featured: false,
      pattern: PatternPink,
      shadow: 'shadow-[0_20px_45px_-12px_rgba(244,63,94,0.18)]',
      iconBg: 'bg-rose-50 text-rose-600 border border-rose-100',
    },
    {
      id: 'retail',
      title: 'Retail Store POS & CCTV',
      desc: 'POS workstation support, store CCTV surveillance, customer Wi-Fi & multi-location networking.',
      icon: ShoppingBag,
      featured: false,
      pattern: PatternPurple,
      shadow: 'shadow-[0_20px_45px_-12px_rgba(147,51,234,0.18)]',
      iconBg: 'bg-purple-50 text-purple-600 border border-purple-100',
    },
    {
      id: 'finance',
      title: 'Finance & Banking',
      desc: 'High-security banking branch surveillance, vault protection, firewalls & VPN connections.',
      icon: Landmark,
      featured: false,
      pattern: PatternBlue,
      shadow: 'shadow-[0_20px_45px_-12px_rgba(37,99,235,0.18)]',
      iconBg: 'bg-blue-50 text-blue-600 border border-blue-100',
    },
    {
      id: 'corporate',
      title: 'Corporate Offices',
      desc: 'End-to-end structured Cat6 cabling, workstation leasing, cybersecurity & full-service AMC care.',
      icon: Briefcase,
      featured: false,
      pattern: PatternAmber,
      shadow: 'shadow-[0_20px_45px_-12px_rgba(217,119,6,0.18)]',
      iconBg: 'bg-amber-50 text-amber-600 border border-amber-100',
    },
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Header Banner */}
      <section className="bg-[#092C74] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#123EB8]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 border border-white/20 text-xs font-extrabold tracking-wider uppercase mb-4">
            INDUSTRY SOLUTIONS
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Tailored Technology for Every Industry Sector
          </h1>
          <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto mt-4">
            Whether securing a factory floor, powering a retail store chain, or managing corporate server networks, C&G Infotech delivers specialized deployment.
          </p>
        </div>
      </section>

      <IndustriesSection />

      {/* Sector Deployment Specifications (Matching 3D Geometric Dashboard Mockup Image) */}
      <section className="py-20 lg:py-28 bg-[#F4F7F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-black tracking-widest text-[#0F8A6F] uppercase bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-100">
              SECTOR DEPLOYMENT
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#092C74] mt-3">
              Sector Deployment Specifications
            </h2>
            <p className="text-base text-[#697386] font-medium mt-3 leading-relaxed">
              Custom security, networking, and IT infrastructure architecture engineered for enterprise business requirements.
            </p>
          </div>

          {/* 3-Column Square Grid Cards with Ambient Shadows & Bottom-Right 3D Geometric Graphics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
            {sectorCards.map((card) => {
              const Icon = card.icon;
              const PatternSVG = card.pattern;

              if (card.featured) {
                // 1. Featured Rich Emerald Green Card (Matching 1st Card "Dashboard" in Mockup Image)
                return (
                  <div
                    key={card.id}
                    className={`rounded-[2rem] bg-[#0F8A6F] p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[300px] group transition-all duration-300 hover:-translate-y-1.5 ${card.shadow}`}
                  >
                    {/* Top Bar: Title & Right Top Icon Badge */}
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-[10px] font-extrabold tracking-widest uppercase text-emerald-200 font-mono">
                          FEATURED SECTOR
                        </span>
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${card.iconBg} shadow-xs`}>
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-extrabold text-white leading-snug mb-3">
                        {card.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-emerald-100/90 font-medium leading-relaxed max-w-xs">
                        {card.desc}
                      </p>
                    </div>

                    {/* Bottom Bar: Left Arrow & Right 3D Geometric Pattern */}
                    <div className="pt-8 flex items-center justify-between relative z-10">
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#0F8A6F] transition-all">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>

                    {/* 3D Geometric Graphic in Bottom-Right */}
                    <PatternSVG />
                  </div>
                );
              }

              // Clean White Cards with Colored Ambient Shadow & Bottom-Right 3D Pattern Graphics
              return (
                <div
                  key={card.id}
                  className={`rounded-[2rem] bg-white p-8 text-[#0F172A] relative overflow-hidden flex flex-col justify-between min-h-[300px] group border border-slate-100/90 transition-all duration-300 hover:-translate-y-1.5 ${card.shadow}`}
                >
                  {/* Top Bar: Title & Right Top Icon Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 font-mono">
                        SECTOR ARCHITECTURE
                      </span>
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${card.iconBg} shadow-xs`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-extrabold text-[#0F172A] group-hover:text-[#0F8A6F] transition-colors leading-snug mb-3">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#64748B] font-medium leading-relaxed max-w-xs">
                      {card.desc}
                    </p>
                  </div>

                  {/* Bottom Bar: Left Arrow & Right 3D Geometric Pattern */}
                  <div className="pt-8 flex items-center justify-between relative z-10">
                    <div className="w-9 h-9 rounded-full bg-slate-100 text-[#0F172A] flex items-center justify-center group-hover:bg-[#0F8A6F] group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* 3D Geometric Graphic in Bottom-Right */}
                  <PatternSVG />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default IndustriesPage;

