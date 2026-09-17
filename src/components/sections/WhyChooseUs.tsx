import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Headphones, ShieldCheck, Wrench, RefreshCw } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';

// Warm Amber Glass Slab SVG for left ambient corner (matching left orange glass slab in image)
const AmberGlassSlab: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 260 }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="amberGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.45" />
        <stop offset="60%" stopColor="#EA580C" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="amberRim" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="150" height="200" rx="30" fill="url(#amberGlow)" stroke="url(#amberRim)" strokeWidth="1.5" />
    <rect x="50" y="50" width="130" height="170" rx="24" fill="url(#amberGlow)" opacity="0.6" stroke="url(#amberRim)" strokeWidth="1" />
  </svg>
);

// Rose Crimson Glass Slab SVG for right ambient corner (matching right crimson glass slab in image)
const CrimsonGlassSlab: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 260 }) => (
  <svg width={size} height={size * 1.3} viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="crimsonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.5" />
        <stop offset="50%" stopColor="#E11D48" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#BE123C" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="crimsonRim" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="160" height="220" rx="32" fill="url(#crimsonGlow)" stroke="url(#crimsonRim)" strokeWidth="1.5" />
    <rect x="45" y="60" width="130" height="180" rx="26" fill="url(#crimsonGlow)" opacity="0.55" stroke="url(#crimsonRim)" strokeWidth="1" />
  </svg>
);

export const WhyChooseUs: React.FC = () => {
  const advantages = [
    {
      stat: '500+ CLIENTS',
      title: '500+ Active Clients',
      tagline: 'PROVEN TRUST',
      desc: 'Trusted by over 500+ business organizations across Secunderabad, Hyderabad & Telangana.',
      icon: Users,
    },
    {
      stat: '8+ YEARS',
      title: '8+ Years Leadership',
      tagline: 'INDUSTRY EXPERIENCE',
      desc: 'Dedicated expertise in IT infrastructure, surveillance setups & enterprise networking since 2019.',
      icon: Award,
    },
    {
      stat: '24/7 SLA',
      title: '24/7 Rapid SLA Support',
      tagline: 'ROUND-THE-CLOCK',
      desc: 'Responsive ongoing maintenance, rapid incident resolution & Annual Maintenance Contracts (AMC).',
      icon: Headphones,
    },
    {
      stat: '100% UNIFIED',
      title: 'End-to-End Solutions',
      tagline: 'COMPLETE HARDWARE',
      desc: 'Single reliable point of contact for CCTV surveillance, networking, hardware supply & web apps.',
      icon: ShieldCheck,
    },
    {
      stat: 'QUALITY CABLE',
      title: 'Precision Infrastructure',
      tagline: 'CERTIFIED SETUP',
      desc: 'Clean structured Cat6 cabling, organized server rack enclosures & precision-calibrated camera positioning.',
      icon: Wrench,
    },
    {
      stat: 'AMC UPTIME',
      title: 'Guaranteed After-Sales',
      tagline: 'SLAS & WARRANTY',
      desc: 'Transparent SLAs, hardware warranty coverage, periodic health checkups & dedicated on-site technicians.',
      icon: RefreshCw,
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#FAFAFD]">
      {/* Studio Ambient Layered Glass Glow Slabs (Matching Mockup Image Left Amber & Right Crimson Glass) */}
      <div className="absolute bottom-0 left-0 opacity-80 pointer-events-none z-0 translate-y-12 -translate-x-6">
        <AmberGlassSlab size={340} />
      </div>
      <div className="absolute top-12 right-0 opacity-80 pointer-events-none z-0 translate-x-8">
        <CrimsonGlassSlab size={360} />
      </div>

      {/* Warm Background Ambient Light Spotlights */}
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-400/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-rose-400/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="ref-container relative z-10">
        
        {/* Top Header Tag (Matching "7DC" / "Asteroid" Studio Title Style) */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-black tracking-widest text-slate-400 uppercase mb-4">
            C&G INFOTECH
          </span>

          <SectionHeading
            eyebrow=""
            title="A Technology Partner You Can Depend On"
            accentWord="You Can Depend On"
            accentColor="light-orange"
            noUnderline={true}
            description="Built on transparent SLAs, certified engineering expertise, and robust 24/7 client support."
            centered
            className="max-w-3xl"
          />
        </div>

        {/* 3x2 Grid of Specular Clean Glass Cards (Matching Mockup Image Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;

            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="relative bg-white/75 backdrop-blur-2xl rounded-[2.5rem] p-8 border border-white shadow-[0_20px_50px_rgba(15,23,42,0.05),_inset_0_1.5px_2px_rgba(255,255,255,0.95)] flex flex-col justify-between group hover:-translate-y-2 hover:bg-white/90 hover:shadow-[0_30px_60px_rgba(255,159,67,0.12)] transition-all duration-400 overflow-hidden"
              >
                {/* Subtle Specular Top Sheen Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none rounded-[2.5rem]" />

                <div>
                  {/* Top Bar: Icon Box & Stat Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 p-2.5 flex items-center justify-center text-[#FF9F43] shadow-2xs group-hover:scale-110 group-hover:bg-[#FF9F43] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <span className="text-xs font-black font-mono tracking-wider text-[#FF9F43] bg-orange-50/80 px-3 py-1 rounded-xl border border-orange-100 shadow-2xs">
                      {adv.stat}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-3">
                    <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase block mb-1">
                      {adv.tagline}
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#0F172A] group-hover:text-[#FF9F43] transition-colors leading-snug">
                      {adv.title}
                    </h3>
                  </div>

                  {/* Body Text */}
                  <p className="text-xs sm:text-sm text-[#64748B] font-medium leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Info Line (Matching Bottom Footer Bar from Mockup Image) */}
        <div className="mt-20 pt-6 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
          <div>ENTERPRISE SLA OPTIONS</div>
          <div>cginfotech.in</div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;




