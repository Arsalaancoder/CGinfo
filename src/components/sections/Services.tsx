import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Camera,
  Network,
  Server,
  Laptop,
  ShieldCheck,
  Globe,
  Smartphone,
  TrendingUp,
  Headphones,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { SERVICES_DATA } from '@/data/services';
import { SectionHeading } from '@/components/common/SectionHeading';

const SERVICE_3D_ICONS: Record<string, string> = {
  'cctv-surveillance': '/images/nav-dropdown/nav-cctv.jpg',
  'networking': '/images/nav-dropdown/nav-networking.jpg',
  'it-infrastructure': '/images/nav-dropdown/nav-infrastructure.jpg',
  'computer-laptop-solutions': '/images/nav-dropdown/nav-hardware.jpg',
  'cybersecurity': '/images/nav-dropdown/nav-security.jpg',
  'web-development': '/images/nav-dropdown/nav-web.jpg',
  'mobile-app-development': '/images/nav-dropdown/nav-mobile.jpg',
  'digital-marketing': '/images/nav-dropdown/nav-growth.jpg',
  'it-support-amc': '/images/nav-dropdown/nav-support.jpg',
};

// 3D Glassmorphism Torus SVG shape component
const Torus3D: React.FC<{ className?: string; size?: number; rot?: number }> = ({
  className = '',
  size = 140,
  rot = 25,
}) => {
  const id = React.useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: `rotate(${rot}deg)` }}
    >
      <defs>
        <radialGradient id={`torusGrad_${id}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#F1F5F9" />
          <stop offset="75%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </radialGradient>
        <filter id={`torusShadow_${id}`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="3" dy="12" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.12" />
        </filter>
      </defs>
      <g filter={`url(#torusShadow_${id})`}>
        <path
          d="M70 15 C39.6 15 15 39.6 15 70 C15 100.4 39.6 125 70 125 C100.4 125 125 100.4 125 70 C125 39.6 100.4 15 70 15 Z M70 44 C84.3 44 96 55.7 96 70 C96 84.3 84.3 96 70 96 C55.7 96 44 84.3 44 70 C44 55.7 55.7 44 70 44 Z"
          fill={`url(#torusGrad_${id})`}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

// 3D Glassmorphism Sphere SVG shape component
const Sphere3D: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 48 }) => {
  const id = React.useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id={`sphereGrad_${id}`} cx="30%" cy="25%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#F8FAFC" />
          <stop offset="70%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#94A3B8" />
        </radialGradient>
        <filter id={`sphereShadow_${id}`} x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="2" dy="8" stdDeviation="7" floodColor="#0F172A" floodOpacity="0.14" />
        </filter>
      </defs>
      <circle cx="30" cy="30" r="23" fill={`url(#sphereGrad_${id})`} filter={`url(#sphereShadow_${id})`} />
    </svg>
  );
};

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera': return Camera;
      case 'Network': return Network;
      case 'Server': return Server;
      case 'Laptop': return Laptop;
      case 'ShieldCheck': return ShieldCheck;
      case 'Globe': return Globe;
      case 'Smartphone': return Smartphone;
      case 'TrendingUp': return TrendingUp;
      default: return Headphones;
    }
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#F4F7FA] via-[#ECEEF4] to-[#F4F7FA]" id="services">
      {/* Studio 3D Background Lighting & Floating Geometry Ambient Elements */}
      <div className="absolute top-12 left-10 opacity-30 pointer-events-none animate-float-slow">
        <Torus3D size={220} rot={-15} />
      </div>
      <div className="absolute bottom-16 right-8 opacity-25 pointer-events-none animate-float-reverse">
        <Torus3D size={260} rot={40} />
      </div>
      <div className="absolute top-1/3 right-12 opacity-40 pointer-events-none animate-float-slow">
        <Sphere3D size={70} />
      </div>
      <div className="absolute bottom-1/3 left-16 opacity-35 pointer-events-none animate-float-reverse">
        <Sphere3D size={56} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-blue-200/20 via-cyan-100/30 to-purple-100/20 blur-3xl pointer-events-none rounded-full" />

      <div className="ref-container relative z-10">
        
        {/* Glassmorphism Section Header Badge & Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full glass-morphism-pill text-[#123EB8] border border-white/90 text-xs font-black tracking-widest uppercase mb-4 shadow-sm">
            <span>OUR SERVICES</span>
          </div>

          <SectionHeading
            eyebrow=""
            title="Quality Technology Services Your Business Really Needs"
            accentWord="Quality Technology"
            description="Complete security, infrastructure, IT and digital solutions engineered into premium, high-reliability services."
            centered
            className="max-w-3xl"
          />
        </div>

        {/* 3x3 Glassmorphism Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SERVICES_DATA.map((service, index) => {
            const Icon = getIcon(service.iconName);
            const iconSrc = SERVICE_3D_ICONS[service.id];

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="glass-morphism-card rounded-[2rem] p-7 flex flex-col justify-between relative overflow-hidden group border border-white/80"
              >
                {/* 3D Floating Geometry Behind Glass Card */}
                <div className="absolute -top-10 -right-10 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none group-hover:scale-110 duration-500">
                  <Torus3D size={150} rot={index * 35 + 15} />
                </div>
                <div className="absolute -bottom-6 -left-6 opacity-15 group-hover:opacity-30 transition-opacity pointer-events-none">
                  <Sphere3D size={64} />
                </div>

                {/* Light Specular Sheen Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Bar: Code Badge & 3D Glass Icon Container */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-black font-mono tracking-wider text-[#092C74] bg-white/70 backdrop-blur-md px-3 py-1 rounded-xl border border-white/90 shadow-xs">
                      {service.code}
                    </span>
                    
                    {/* 3D Icon Box */}
                    <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-md border border-white p-2.5 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                      {iconSrc ? (
                        <img
                          src={iconSrc}
                          alt={service.title}
                          className="w-full h-full object-contain rounded-xl"
                        />
                      ) : (
                        <Icon className="w-6 h-6 text-[#123EB8]" />
                      )}
                    </div>
                  </div>

                  {/* Title & Category Tag */}
                  <div className="mb-3">
                    <span className="text-[10px] font-extrabold tracking-widest text-[#16A7C9] uppercase bg-cyan-50/80 px-2.5 py-0.5 rounded-full border border-cyan-100/60 inline-block mb-2">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-extrabold text-[#092C74] group-hover:text-[#123EB8] transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed mb-6 min-h-[44px]">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables Specs List */}
                  <ul className="space-y-2 border-t border-slate-200/60 pt-4 mb-6">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#334155] font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#17B890] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action CTA Link */}
                <div className="relative z-10 pt-2">
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white/70 hover:bg-[#123EB8] text-[#092C74] hover:text-white font-extrabold text-xs tracking-wide border border-white/90 shadow-xs hover:shadow-md transition-all duration-300 group/btn"
                  >
                    <span>View Specifications</span>
                    <div className="w-6 h-6 rounded-lg bg-[#123EB8]/10 group-hover/btn:bg-white/20 flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-[#123EB8] group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;

