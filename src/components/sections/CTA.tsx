import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, ShieldCheck, MessageSquare } from 'lucide-react';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#092C74] text-white relative overflow-hidden">
      {/* Subtle organic SVG accent geometry */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#123EB8]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#16A7C9]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="ref-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Text & Buttons */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-cyan-300 border border-white/20 text-xs font-extrabold tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4 text-[#17B890]" />
              LET'S POWER YOUR BUSINESS
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              Ready to Upgrade Your Business Technology?
            </h2>

            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl font-normal">
              Talk to C&G Infotech about your CCTV, networking, IT infrastructure, cybersecurity or digital requirements. Our engineers are ready to evaluate your site and provide a transparent consultation.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#123EB8] hover:bg-white hover:text-[#092C74] text-white font-bold text-sm tracking-wide shadow-xl transition-all duration-200 active:scale-[0.98]"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm tracking-wide transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Optional CTA Image Placeholder */}
          <div className="lg:col-span-4 mt-6 lg:mt-0">
            <ImagePlaceholder
              label="CTA Business Image"
              width={500}
              height={300}
              futureSrc="/images/cta-business.webp"
              className="w-full shadow-2xl rounded-2xl border-white/20 bg-blue-900/50 text-white"
              aspectRatio="500/300"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
