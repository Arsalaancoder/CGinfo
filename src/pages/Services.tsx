import React, { useState } from 'react';
import { SERVICES_DATA, type ServiceItemData } from '@/data/services';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CTASection } from '@/components/sections/CTA';
import { Link } from 'react-router-dom';

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
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Security', 'Infrastructure', 'IT Support', 'Digital'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

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
    <div className="min-h-screen pt-8">
      {/* Services Header */}
      <section className="bg-[#092C74] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#123EB8]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 border border-white/20 text-xs font-extrabold tracking-wider uppercase mb-4">
            C&G INFOTECH SERVICES
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight">
            Complete Technology & Infrastructure Services
          </h1>
          <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto mt-4">
            From CCTV surveillance setup to enterprise networking, hardware supply, cybersecurity and custom web apps — explore our 9 core business services.
          </p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-10 bg-[#F7F9FC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#123EB8] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat} Services
            </button>
          ))}
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredServices.map((service, idx) => {
            const Icon = getIcon(service.iconName);
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 subtle-card-shadow scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Text Details */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-black font-mono px-3 py-1 bg-blue-50 text-[#123EB8] rounded-lg">
                        {service.code}
                      </span>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#16A7C9] bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
                        {service.category}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092C74]">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#697386] leading-relaxed">
                      {service.fullDesc}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Deliverables & Specs:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs font-semibold text-[#161B27]">
                            <CheckCircle2 className="w-4 h-4 text-[#17B890] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#123EB8] hover:bg-[#092C74] text-white font-bold text-xs tracking-wide shadow-md transition-all"
                      >
                        Request Consultation for {service.title}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Icon / 3D Visual Card Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="bg-[#F7F9FC] rounded-2xl p-8 border border-slate-200/60 flex flex-col items-center justify-center text-center space-y-4 shadow-xs hover:shadow-md transition-all">
                      {SERVICE_3D_ICONS[service.id] ? (
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white p-2 border border-slate-100 shadow-sm flex items-center justify-center">
                          <img
                            src={SERVICE_3D_ICONS[service.id]}
                            alt={service.title}
                            className="w-full h-full object-contain rounded-xl"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-2xl bg-[#E8F4F3] text-[#264653] flex items-center justify-center">
                          <Icon className="w-8 h-8 stroke-[1.75]" />
                        </div>
                      )}
                      <h4 className="text-base font-bold text-[#264653]">{service.title}</h4>
                      <p className="text-xs text-[#527982] max-w-xs">Custom tailored deployment and ongoing engineering support for commercial & enterprise setups.</p>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default ServicesPage;
