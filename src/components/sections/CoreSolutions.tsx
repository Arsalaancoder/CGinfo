import React from 'react';
import ArcRainbowShowcase from '@/components/ui/carousel-07';

export const CoreSolutions: React.FC = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white/70 backdrop-blur-xs relative">
      {/* Background radial dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#092c74_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="ref-container relative z-10">
        {/* Arc Curved Rainbow Showcase matching reference image design */}
        <ArcRainbowShowcase />
      </div>
    </section>
  );
};

export default CoreSolutions;
