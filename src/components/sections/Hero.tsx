import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  Calendar,
  Headphones,
  ShieldCheck,
} from 'lucide-react';

export interface HeroSlide {
  id: string;
  imageSrc: string;
  title: string;
  alt: string;
  caption?: string;
}

// 5 Editable Carousel Slides for Hero Background Showcase
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    imageSrc: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80',
    title: 'CCTV Surveillance & Commercial Security Installation',
    alt: 'Technician installing CCTV dome camera in office',
    caption: '24/7 Video Monitoring & Smart Access Control',
  },
  {
    id: 'slide-2',
    imageSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    title: 'Enterprise Networking & Structured Cabling Racks',
    alt: 'Data center server rack with organized Cat6 cabling',
    caption: 'High-Speed LAN/WAN Connectivity & AMC Uptime',
  },
  {
    id: 'slide-3',
    imageSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
    title: 'Dedicated IT Support & Systems Engineering Team',
    alt: 'Technology team collaborating in modern office',
    caption: '8+ Years of Proven On-Site Excellence',
  },
  {
    id: 'slide-4',
    imageSrc: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80',
    title: 'Custom Web Applications & Mobile Platform Engineering',
    alt: 'Software development workspace and code analysis',
    caption: 'Modern React & Next.js Scalable Solutions',
  },
  {
    id: 'slide-5',
    imageSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',
    title: 'Cybersecurity, Firewall Defense & Off-Site Data Backups',
    alt: 'Security monitoring dashboard and firewall racks',
    caption: 'Multi-Layer Corporate Data Protection',
  },
  {
    id: 'slide-6',
    imageSrc: '/images/hero-carousel-6.jpg',
    title: 'Interactive Boardroom Solution Demos & Digital Products',
    alt: 'Team presenting digital solutions and mobile applications on boardroom screen',
    caption: 'Strategic Digital Strategy & Product Showcase',
  },
  {
    id: 'slide-7',
    imageSrc: '/images/hero-carousel-7.jpg',
    title: 'On-Site IT Consulting & Workstation Fleet Upgrades',
    alt: 'IT consultants reviewing laptop infrastructure and hardware configuration',
    caption: 'Collaborative Technology Consulting & Maintenance',
  },
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play timer (5s per slide)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative min-h-[620px] lg:min-h-[700px] bg-[#0D1527] text-white font-sans overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic 5-Slide Carousel Background Showcase */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.imageSrc}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
            />
            {/* Dark Translucent Glass Gradient Overlay matching screenshot */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1527]/95 via-[#0D1527]/80 to-[#0D1527]/40" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        );
      })}

      {/* Main Container Content */}
      <div className="ref-container relative z-10 pt-16 pb-24 lg:pt-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Authentic Content Matching Screenshot */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-slate-300">
              <span className="w-6 h-0.5 bg-[#E76F51] inline-block rounded-full" />
              TRUSTED IT & SECURITY PARTNER SINCE 2019
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[66px] font-black text-white leading-[1.10] tracking-tight">
              Securing & Powering <br />
              Your Business With <br />
              <span className="text-[#E76F51]">Smart Technology</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-xl font-medium">
              From CCTV surveillance and networking to IT infrastructure, web development, mobile apps and digital marketing — C&G Infotech is your end-to-end technology partner.
            </p>

            {/* Action Buttons Matching Screenshot */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#E76F51] hover:bg-[#D05A3C] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-wide border border-white/30 backdrop-blur-xs transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>

          </div>

          {/* Right Column: Watermark Text Accent Matching Screenshot */}
          <div className="lg:col-span-5 relative hidden sm:flex flex-col items-end justify-end min-h-[260px]">
            {/* Watermark Vertical Text matching screenshot */}
            <div className="text-right select-none pr-2">
              <div className="text-3xl lg:text-4xl font-extrabold text-white/30 tracking-tight leading-tight uppercase font-display">
                Safer <br />
                Smarter <br />
                Stronger <br />
                Together
              </div>
              <div className="w-14 h-1 bg-[#E76F51] ml-auto mt-3 rounded-full shadow-md" />
            </div>
          </div>

        </div>

        {/* Floating Glassmorphism Trust Statistics Bar Matching Screenshot */}
        <div className="mt-14 lg:mt-16 bg-[#0D1527]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            
            {/* Stat 1: 500+ Clients */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#2A9D8F] shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white leading-none">
                  500+
                </div>
                <div className="text-xs text-slate-300 font-medium mt-1">
                  Clients
                </div>
              </div>
            </div>

            {/* Stat 2: 8+ Years of Experience */}
            <div className="flex items-center gap-4 sm:border-l border-white/10 sm:pl-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#E9C46A] shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white leading-none">
                  8+
                </div>
                <div className="text-xs text-slate-300 font-medium mt-1">
                  Years of Experience
                </div>
              </div>
            </div>

            {/* Stat 3: 24/7 Support */}
            <div className="flex items-center gap-4 lg:border-l border-white/10 lg:pl-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#E76F51] shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white leading-none">
                  24/7
                </div>
                <div className="text-xs text-slate-300 font-medium mt-1">
                  Support
                </div>
              </div>
            </div>

            {/* Stat 4: Trusted Banner text */}
            <div className="lg:border-l border-white/10 lg:pl-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E76F51]/20 border border-[#E76F51]/40 flex items-center justify-center text-[#E76F51] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-white leading-snug">
                Trusted by 500+ Businesses Across Industries
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
