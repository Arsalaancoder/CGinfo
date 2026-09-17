import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { IndustryStrip } from '@/components/sections/IndustryStrip';
import { WhatWeDo } from '@/components/sections/WhatWeDo';
import { AboutSection } from '@/components/sections/About';
import { ServicesSection } from '@/components/sections/Services';
import { CoreSolutions } from '@/components/sections/CoreSolutions';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ProcessSection } from '@/components/sections/Process';
import { IndustriesSection } from '@/components/sections/Industries';
import { CTASection } from '@/components/sections/CTA';

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <IndustryStrip />
      <WhatWeDo />
      <AboutSection />
      <ServicesSection />
      <CoreSolutions />
      <WhyChooseUs />
      <ProcessSection />
      <IndustriesSection />
      <CTASection />
    </main>
  );
};

export default HomePage;
