import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CarouselStacked, type CarouselSlide } from '@/components/ui/carousel-07';

export const IndustriesSection: React.FC = () => {
  const industrySlides: CarouselSlide[] = [
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      title: "Manufacturing",
      description: "Perimeter CCTV surveillance, shop-floor Wi-Fi, and industrial IT infrastructure.",
      badge: "Industrial",
    },
    {
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
      title: "Healthcare",
      description: "24/7 video monitoring for patient safety and compliant secure data storage.",
      badge: "Medical",
    },
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
      title: "Education",
      description: "Campus-wide wireless networking, auditorium cabling, and security surveillance.",
      badge: "Campus",
    },
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
      title: "Retail Stores",
      description: "Store surveillance monitoring, POS workstation setup, and customer Wi-Fi.",
      badge: "Retail",
    },
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
      title: "Hospitality",
      description: "High-density guest Wi-Fi networks, hotel surveillance, and front-desk IT setup.",
      badge: "Hotels",
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      title: "Corporate Offices",
      description: "Structured Cat6 cabling, rack enclosures, cybersecurity, and full-service AMC.",
      badge: "Corporate",
    },
    {
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800&auto=format&fit=crop",
      title: "Finance & Banks",
      description: "Vault security cameras, hardware firewalls, encrypted backups, and VPN channels.",
      badge: "Banking",
    },
    {
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
      title: "Real Estate",
      description: "Commercial property access control, site video monitoring, and smart office networks.",
      badge: "Property",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F9FC] relative overflow-hidden" id="industries">
      <div className="ref-container">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="SECTOR EXPERTISE"
          title="Technology Solutions Across Industries"
          accentWord="Across Industries"
          description="Customized CCTV security, structured networking, hardware support and digital services tailored to specific industry compliance and operational workflows."
          centered
          className="mb-8"
        />

        {/* Stacked Interactive Card Carousel Component (carousel-07.tsx) */}
        <div className="my-8">
          <CarouselStacked slides={industrySlides} />
        </div>

        {/* Bottom Callout & Route Link */}
        <div className="pt-8 text-center">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#092C74] hover:bg-[#123EB8] text-white font-bold text-xs tracking-wide shadow-md transition-all"
          >
            Explore All Industry Solutions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
