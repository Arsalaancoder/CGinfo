import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Wrench, ShieldAlert, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Consultation',
      desc: 'Understand your business requirements, site topology, security needs, and hardware scope through an in-depth audit.',
      icon: MessageSquare,
      badge: 'Step 1',
      gradient: 'from-blue-500/10 to-indigo-500/10',
    },
    {
      step: '02',
      title: 'Planning',
      desc: 'Recommend suitable technology architecture, hardware specifications, camera positioning blueprints, and transparent cost estimates.',
      icon: FileText,
      badge: 'Step 2',
      gradient: 'from-cyan-500/10 to-blue-500/10',
    },
    {
      step: '03',
      title: 'Installation',
      desc: 'Professional Cat6 structured cabling, NVR camera positioning, managed switch router configuration and thorough testing.',
      icon: Wrench,
      badge: 'Step 3',
      gradient: 'from-emerald-500/10 to-cyan-500/10',
    },
    {
      step: '04',
      title: 'Support & AMC',
      desc: 'Continuous assistance, scheduled Annual Maintenance Contract (AMC) visits, warranty management, and rapid breakdown support.',
      icon: ShieldAlert,
      badge: 'Step 4',
      gradient: 'from-amber-500/10 to-emerald-500/10',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="ref-container">
        
        <SectionHeading
          eyebrow="OUR WORKFLOW"
          title="From Requirement To Reliable Solution"
          accentWord="Reliable Solution"
          centered
          className="mb-16"
        />

        {/* Stacked Interactive Card Scroll Experience */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 ref-card-shadow hover:border-[#123EB8]/40 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group relative overflow-hidden"
              >
                {/* Left Step Number & Icon */}
                <div className="flex items-center gap-5 shrink-0">
                  <span className="w-14 h-14 rounded-2xl bg-[#092C74] text-white font-black text-xl font-mono flex items-center justify-center shadow-md group-hover:bg-[#123EB8] transition-colors">
                    {s.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#123EB8] flex items-center justify-center">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                </div>

                {/* Center Content */}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#16A7C9] bg-cyan-50 px-2.5 py-0.5 rounded-full">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#092C74] group-hover:text-[#123EB8] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#697386] font-normal leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* Right Arrow indicator */}
                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-[#123EB8] transition-colors shrink-0">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
