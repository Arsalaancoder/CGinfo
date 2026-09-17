"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type PanInfo,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface CarouselSlide {
  image: string;
  title: string;
  description: string;
  badge: string;
}

export const defaultArcSlides: CarouselSlide[] = [
  {
    image: "/images/solution-smart-security.jpg",
    title: "SMART SECURITY",
    description: "Commercial CCTV surveillance systems, 24/7 video recording, and perimeter access control.",
    badge: "CCTV & Security",
  },
  {
    image: "/images/solution-connected-business.jpg",
    title: "CONNECTED BUSINESS",
    description: "Structured Cat6 cabling, high-speed Wi-Fi access points, managed network switches, and firewalls.",
    badge: "Networking",
  },
  {
    image: "/images/solution-reliable-it.jpg",
    title: "RELIABLE IT",
    description: "Workstation procurement, laptop fleet maintenance, server hardware setup, and 24/7 AMC support.",
    badge: "IT Support & AMC",
  },
  {
    image: "/images/solution-digital-growth.jpg",
    title: "DIGITAL GROWTH",
    description: "Fast corporate web development, cross-platform mobile apps, and business digital marketing.",
    badge: "Web & Mobile",
  },
  {
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    title: "CYBERSECURITY",
    description: "Multi-layer firewall defense, off-site data backups, endpoint security, and zero-trust monitoring.",
    badge: "Cyber Defense",
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    title: "HARDWARE RACKS",
    description: "High-speed server rack enclosures, NAS backup storage, workstation fleet supply, and AMC care.",
    badge: "Hardware Racks",
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    title: "IT CONSULTING",
    description: "Strategic technology planning, infrastructure audits, and custom software engineering.",
    badge: "IT Consulting",
  },
  {
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    title: "ACCESS CONTROL",
    description: "Smart biometric doors, RFID card entry systems, and automated gate security.",
    badge: "Smart Access",
  },
];

/* -------------------------------------------------------------------------- */
/* 1. Arc Rainbow Showcase (Used in SMART - SECURE BUSINESS TECHNOLOGY SOLUTIONS) */
/* -------------------------------------------------------------------------- */

export interface ArcRainbowShowcaseProps {
  slides?: CarouselSlide[];
}

export const ArcRainbowShowcase: React.FC<ArcRainbowShowcaseProps> = ({
  slides = defaultArcSlides,
}) => {
  const scrollProgress = useMotionValue(0);
  const startProgress = useRef(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const total = slides.length;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const radiusX = windowWidth < 640 ? 290 : windowWidth < 1024 ? 440 : 560;
  const radiusY = windowWidth < 640 ? 150 : windowWidth < 1024 ? 210 : 240;

  useEffect(() => {
    const timer = setInterval(() => {
      animate(scrollProgress, scrollProgress.get() + 0.0025, {
        duration: 0.1,
        ease: "linear",
      });
    }, 50);
    return () => clearInterval(timer);
  }, [scrollProgress]);

  const handleDragStart = () => {
    startProgress.current = scrollProgress.get();
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const dragDistance = info.offset.x;
    const velocity = info.velocity.x;

    const shift = -dragDistance / 240 - velocity / 900;
    const target = Math.round(startProgress.current + shift);

    animate(scrollProgress, target, {
      type: "spring",
      stiffness: 180,
      damping: 25,
    });
  };

  return (
    <div className="relative w-full max-w-[1400px] mx-auto flex flex-col items-center justify-center pt-2 pb-4 select-none overflow-hidden">
      
      {/* Upper Arc Semicircle Deck */}
      <div className="relative w-full h-[190px] sm:h-[230px] lg:h-[260px] flex items-center justify-center">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDrag={(_, info) => {
            const delta = -info.delta.x / 240;
            scrollProgress.set(scrollProgress.get() + delta);
          }}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing"
        />

        {slides.map((slide, i) => (
          <ArcCard
            key={i}
            slide={slide}
            index={i}
            total={total}
            progress={scrollProgress}
            radiusX={radiusX}
            radiusY={radiusY}
          />
        ))}
      </div>

      {/* Center Content Section */}
      <div className="relative z-30 text-center max-w-2xl px-4 mt-2 sm:mt-4 lg:mt-6 space-y-3 pointer-events-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#092C74] font-display leading-[1.10] tracking-tight">
          SMART — SECURE <br />
          <span className="text-[#123EB8]">Business Technology Solutions</span>
        </h2>

        <p className="text-xs sm:text-sm text-[#697386] max-w-lg mx-auto font-medium leading-relaxed">
          C&G Infotech delivers professional CCTV, networking, IT infrastructure, cybersecurity, and digital solutions that keep businesses secure, connected and productive.
        </p>

        <div className="pt-2 flex items-center justify-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#161B27] hover:bg-[#092C74] text-white text-xs font-bold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Start Exploring Solutions
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Bottom 3 Feature Columns */}
      <div className="w-full max-w-4xl mx-auto mt-6 sm:mt-8 lg:mt-10 pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
        <div className="px-4 py-1.5 space-y-1">
          <h4 className="text-sm sm:text-base font-bold text-[#092C74] font-display">Realistic Results</h4>
          <p className="text-xs text-[#697386] font-normal leading-relaxed">
            Practical technology solutions designed for zero downtime & maximum security.
          </p>
        </div>
        <div className="px-4 py-2 space-y-1">
          <h4 className="text-sm sm:text-base font-bold text-[#092C74] font-display">Fast Deployment</h4>
          <p className="text-xs text-[#697386] font-normal leading-relaxed">
            Rapid installation times, SLA guarantees, and 24/7 dedicated AMC technician support.
          </p>
        </div>
        <div className="px-4 py-2 space-y-1">
          <h4 className="text-sm sm:text-base font-bold text-[#092C74] font-display">Diverse Solutions</h4>
          <p className="text-xs text-[#697386] font-normal leading-relaxed">
            Single reliable partner for CCTV surveillance, networking, hardware, and web apps.
          </p>
        </div>
      </div>

    </div>
  );
};

interface ArcCardProps {
  slide: CarouselSlide;
  index: number;
  total: number;
  progress: MotionValue<number>;
  radiusX: number;
  radiusY: number;
}

const ArcCard: React.FC<ArcCardProps> = ({
  slide,
  index,
  total,
  progress,
  radiusX,
  radiusY,
}) => {
  const offset = useTransform(progress, (p) => {
    let diff = (index - p) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  });

  const angleDeg = useTransform(offset, (o) => o * 18.5);
  const angleRad = useTransform(angleDeg, (deg) => (deg * Math.PI) / 180);

  const x = useTransform(angleRad, (rad) => radiusX * Math.sin(rad));
  const y = useTransform(angleRad, (rad) => -radiusY * Math.cos(rad) + 120);
  const rotate = useTransform(angleDeg, (deg) => deg * 0.85);
  const scale = useTransform(angleDeg, (deg) => 1 - Math.abs(deg) * 0.0018);
  const opacity = useTransform(angleDeg, [-80, -70, -60, 60, 70, 80], [0, 0.8, 1, 1, 0.8, 0]);
  const zIndex = useTransform(angleDeg, (deg) => Math.round(100 - Math.abs(deg)));

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        scale,
        opacity,
        zIndex,
      }}
      className={cn(
        "absolute rounded-[28px] sm:rounded-[34px] overflow-hidden bg-white shadow-xl border-4 border-white group pointer-events-none transition-shadow duration-300",
        "w-32 h-40 sm:w-44 sm:h-[210px] lg:w-48 lg:h-[235px]",
      )}
    >
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent text-left pointer-events-none">
        <span className="inline-block px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[8px] font-extrabold uppercase text-white mb-0.5 border border-white/30">
          {slide.badge}
        </span>
        <h3 className="text-xs font-black text-white leading-tight drop-shadow-md">
          {slide.title}
        </h3>
      </div>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/* 2. Interactive Stacked Card Carousel (Used in Technology Solutions Across Industries) */
/* -------------------------------------------------------------------------- */

export interface CarouselStackedProps {
  slides?: CarouselSlide[];
}

export const CarouselStacked: React.FC<CarouselStackedProps> = ({
  slides = defaultArcSlides,
}) => {
  const scrollProgress = useMotionValue(0);
  const startProgress = useRef(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const total = slides.length;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const config = React.useMemo(() => {
    if (windowWidth < 640) {
      return {
        distanceDivisor: 120,
        velocityDivisor: 500,
        sensitivity: 180,
        xMultiplier: 90,
        yMultiplier: 20,
        rotationMultiplier: 8,
        scaleReduction: 0.06,
      };
    }
    if (windowWidth < 1024) {
      return {
        distanceDivisor: 160,
        velocityDivisor: 650,
        sensitivity: 220,
        xMultiplier: 130,
        yMultiplier: 30,
        rotationMultiplier: 10,
        scaleReduction: 0.09,
      };
    }
    return {
      distanceDivisor: 200,
      velocityDivisor: 800,
      sensitivity: 250,
      xMultiplier: 170,
      yMultiplier: 40,
      rotationMultiplier: 12,
      scaleReduction: 0.12,
    };
  }, [windowWidth]);

  const handleDragStart = () => {
    startProgress.current = scrollProgress.get();
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const dragDistance = info.offset.x;
    const velocity = info.velocity.x;

    const distanceShift = -dragDistance / config.distanceDivisor;
    const velocityShift = -velocity / config.velocityDivisor;

    let totalShift = Math.round(distanceShift + velocityShift);
    totalShift = Math.max(-3, Math.min(3, totalShift));

    const target = Math.round(startProgress.current) + totalShift;

    animate(scrollProgress, target, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      mass: 1,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-4 bg-transparent overflow-hidden select-none">
      <div className="relative w-full max-w-7xl h-80 sm:h-[420px] lg:h-[460px] flex items-center justify-center">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDrag={(_, info) => {
            const delta = -info.delta.x / config.sensitivity;
            scrollProgress.set(scrollProgress.get() + delta);
          }}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing"
        />

        {slides.map((slide, i) => (
          <StackedCard
            key={i}
            slide={slide}
            index={i}
            total={total}
            progress={scrollProgress}
            config={config}
          />
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs font-bold text-slate-500">
        <span className="w-2 h-2 rounded-full bg-[#123EB8] animate-pulse" />
        <span>Drag or swipe cards horizontally to explore industry solutions</span>
      </div>
    </div>
  );
};

interface StackedCardProps {
  slide: CarouselSlide;
  index: number;
  total: number;
  progress: MotionValue<number>;
  config: {
    xMultiplier: number;
    yMultiplier: number;
    rotationMultiplier: number;
    scaleReduction: number;
  };
}

const StackedCard: React.FC<StackedCardProps> = ({
  slide,
  index,
  total,
  progress,
  config,
}) => {
  const offset = useTransform(progress, (p) => {
    let diff = (index - p) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  });

  const x = useTransform(offset, (o) => o * config.xMultiplier);
  const rotate = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return o * config.rotationMultiplier;
  });
  const y = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return absO * config.yMultiplier;
  });
  const scale = useTransform(
    offset,
    (o) => 1 - Math.abs(o) * config.scaleReduction,
  );
  const opacity = useTransform(
    offset,
    [-total / 2, -total / 2 + 0.5, 0, total / 2 - 0.5, total / 2],
    [0, 1, 1, 1, 0],
  );
  const zIndex = useTransform(offset, (o) =>
    Math.round(100 - Math.abs(o) * 10),
  );

  return (
    <motion.div
      style={{
        x,
        rotate,
        y,
        scale,
        opacity,
        zIndex,
      }}
      className={cn(
        "absolute rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-200/80 group pointer-events-none",
        "w-52 h-72 sm:w-64 sm:h-[360px] lg:w-72 lg:h-[410px]",
      )}
    >
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#092C74]/95 via-[#092C74]/40 to-transparent" />

      <span className="absolute top-3 right-3 sm:top-5 sm:right-5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-extrabold uppercase tracking-widest text-[#092C74] border border-white/60 shadow-xs">
        {slide.badge}
      </span>

      <div className="absolute bottom-5 left-4 right-4 sm:bottom-8 sm:left-5 sm:right-5 text-white text-left">
        <motion.p
          style={{
            opacity: useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]),
          }}
          className="text-base sm:text-xl lg:text-2xl font-black leading-tight mb-1 text-white drop-shadow-md font-display"
        >
          {slide.title}
        </motion.p>
        <motion.p
          style={{
            opacity: useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]),
          }}
          className="text-xs text-blue-100/90 line-clamp-3 font-normal leading-relaxed"
        >
          {slide.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ArcRainbowShowcase;
