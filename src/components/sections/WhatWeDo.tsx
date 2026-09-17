import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/common/SectionHeading';

// Purple/Violet Glass Slab SVG (Left Ambient)
const PurpleGlassSlab: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 260 }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A855F7" stopOpacity="0.45" />
        <stop offset="60%" stopColor="#6366F1" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#4338CA" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="purpleRim" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="150" height="200" rx="32" fill="url(#purpleGlow)" stroke="url(#purpleRim)" strokeWidth="1.5" />
    <rect x="50" y="50" width="130" height="170" rx="26" fill="url(#purpleGlow)" opacity="0.6" stroke="url(#purpleRim)" strokeWidth="1" />
  </svg>
);

// Fuchsia/Rose Glass Slab with Specular Lens Flare SVG (Right Ambient)
const FuchsiaGlassSlab: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 280 }) => (
  <svg width={size} height={size * 1.3} viewBox="0 0 220 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="fuchsiaGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E086D3" stopOpacity="0.55" />
        <stop offset="50%" stopColor="#D946EF" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#C084FC" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="fuchsiaRim" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.25" />
      </linearGradient>
      <radialGradient id="flareLight" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
        <stop offset="40%" stopColor="#F472B6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#E086D3" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect x="25" y="25" width="170" height="230" rx="36" fill="url(#fuchsiaGlow)" stroke="url(#fuchsiaRim)" strokeWidth="1.5" />
    <rect x="55" y="65" width="140" height="190" rx="30" fill="url(#fuchsiaGlow)" opacity="0.6" stroke="url(#fuchsiaRim)" strokeWidth="1" />
    <circle cx="145" cy="205" r="28" fill="url(#flareLight)" />
  </svg>
);

export const WhatWeDo: React.FC = () => {
  const categories = [
    {
      id: 'security',
      title: 'Security & Surveillance',
      desc: 'Commercial CCTV systems, 24/7 video monitoring, and smart perimeter access control.',
      imageSrc: '/images/solution-security.png',
      alt: '3D CCTV Camera Security Icon',
    },
    {
      id: 'networking',
      title: 'Networking & Infrastructure',
      desc: 'Structured Cat6 cabling, enterprise Wi-Fi mesh, router switches, and server racks.',
      imageSrc: '/images/solution-networking.png',
      alt: '3D Server Stack & Router Icon',
    },
    {
      id: 'it-support',
      title: 'IT Support & AMC Care',
      desc: 'Workstation supply, laptop fleet care, troubleshooting, and 24/7 AMC support.',
      imageSrc: '/images/solution-it-support.png',
      alt: '3D Laptop & Support Headset Icon',
    },
    {
      id: 'digital',
      title: 'Digital & Web Solutions',
      desc: 'Corporate web development, cross-platform mobile apps, and business digital growth.',
      imageSrc: '/images/solution-digital.png',
      alt: '3D Web & Mobile Development Icon',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#FAFAFD] relative overflow-hidden font-sans">
      
      {/* Studio Ambient Layered Glass Glow Slabs (Matching Mockup Image Left Purple & Right Fuchsia Flare Glass) */}
      <div className="absolute bottom-0 left-0 opacity-80 pointer-events-none z-0 translate-y-8 -translate-x-4">
        <PurpleGlassSlab size={340} />
      </div>
      <div className="absolute top-8 right-0 opacity-80 pointer-events-none z-0 translate-x-6">
        <FuchsiaGlassSlab size={360} />
      </div>

      {/* Warm Background Ambient Light Spotlights */}
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-purple-400/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-fuchsia-400/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="ref-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Studio Tag, Title, Description & Pill Button (Matching Mockup Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-black tracking-widest text-slate-400 uppercase block mb-1">
              7DC / WHAT WE DO
            </span>

            <SectionHeading
              eyebrow=""
              title="Smart Technology Solutions For Modern Businesses"
              accentWord="Technology"
              accentColor="light-orange"
              noUnderline={true}
              description="We help businesses stay secure, connected and productive through reliable technology, infrastructure and digital solutions."
            />

            {/* Pill CTA Button (Matching "Explore Tool ↗" button from mockup image) */}
            <div className="pt-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-between gap-4 px-6 py-3.5 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200/80 text-[#0F172A] font-bold text-sm shadow-md hover:border-purple-300 hover:shadow-lg transition-all duration-300 group"
              >
                <span>Explore All Services</span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Specular Glassmorphism Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {categories.map((cat, index) => {
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
                  className="relative bg-white/80 backdrop-blur-2xl rounded-[2.2rem] p-7 border border-white shadow-[0_20px_50px_rgba(15,23,42,0.06),_inset_0_1.5px_2px_rgba(255,255,255,0.95)] flex flex-col justify-between group hover:-translate-y-2 hover:bg-white/95 hover:shadow-[0_30px_60px_rgba(168,85,247,0.14)] transition-all duration-400 overflow-hidden"
                >
                  {/* Specular Sheen Sweep Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none rounded-[2.2rem]" />

                  <div className="flex items-start justify-between gap-4 mb-5">
                    {/* 3D Illustration Icon Box */}
                    <div className="w-20 h-20 sm:w-22 sm:h-22 shrink-0 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                      <img
                        src={cat.imageSrc}
                        alt={cat.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <span className="text-[10px] font-extrabold font-mono tracking-widest text-purple-600 bg-purple-50 px-2.5 py-1 rounded-xl border border-purple-100 shadow-2xs uppercase">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-[#0F172A] group-hover:text-purple-600 transition-colors leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] font-medium leading-relaxed mt-2">
                      {cat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Footer Divider Bar (Matching Bottom Bar in Mockup Image) */}
        <div className="mt-20 pt-6 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span>ENTERPRISE SOLUTIONS</span>
          </div>
          <div>cginfotech.in</div>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;

