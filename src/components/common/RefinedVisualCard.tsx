import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Camera, Network, Server, Globe, Activity, ArrowRight, CheckCircle2 } from 'lucide-react';

interface RefinedVisualCardProps {
  title: string;
  description: string;
  categoryTag?: string;
  variant?: 'security' | 'network' | 'it' | 'digital';
  features?: string[];
  actionLink?: string;
  actionText?: string;
  delay?: number;
  imageSrc?: string;
}

export const RefinedVisualCard: React.FC<RefinedVisualCardProps> = ({
  title,
  description,
  categoryTag,
  variant = 'security',
  features = [],
  actionLink,
  actionText = 'Learn More',
  delay = 0,
  imageSrc,
}) => {
  // Pastel gradient variants matching the visual reference image
  const getGradient = () => {
    switch (variant) {
      case 'security':
        return 'from-[#EFF5FF] via-[#E0F7FA] to-[#EBF3FF]';
      case 'network':
        return 'from-[#EBF3FF] via-[#EFF5FF] to-[#E0F7FA]';
      case 'it':
        return 'from-[#F0FDF4] via-[#EFF5FF] to-[#E0F7FA]';
      case 'digital':
        return 'from-[#FFF3E0] via-[#EFF5FF] to-[#F3E8FF]';
      default:
        return 'from-[#EFF5FF] via-[#E0F7FA] to-[#EBF3FF]';
    }
  };

  // Floating micro UI visual preview elements matching reference image layout
  const renderVisualPreview = () => {
    if (imageSrc) {
      return (
        <div className="relative w-full h-[145px] rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-500 z-10">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
          
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
            <span className="text-[10px] font-extrabold text-white bg-slate-900/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {variant === 'security' && 'CCTV Surveillance'}
              {variant === 'network' && 'Global Network'}
              {variant === 'it' && '24/7 IT Rack Care'}
              {variant === 'digital' && 'Growth Strategy'}
            </span>
          </div>
        </div>
      );
    }

    switch (variant) {
      case 'security':
        return (
          <div className="w-full space-y-3 relative z-10">
            {/* Mini floating status bar */}
            <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-md border border-white/60 flex items-center justify-between transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#123EB8] flex items-center justify-center">
                  <Camera className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#092C74]">CCTV Feed #04</div>
                  <div className="text-[9px] font-semibold text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live 1080p Stream
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded">Active</span>
            </div>

            {/* Mini analytics widget */}
            <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-md border border-white/60 flex items-center justify-between ml-6 transform rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#16A7C9]" />
                <span className="text-[10px] font-bold text-slate-700">Perimeter Motion</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-12 h-1.5 bg-blue-100 rounded-full overflow-hidden">
                  <span className="block h-full bg-[#123EB8] w-4/5" />
                </span>
                <span className="text-[9px] font-mono font-bold text-[#123EB8]">Protected</span>
              </div>
            </div>
          </div>
        );

      case 'network':
        return (
          <div className="w-full space-y-3 relative z-10">
            <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-md border border-white/60 flex items-center justify-between transform rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-cyan-50 text-[#16A7C9] flex items-center justify-center">
                  <Network className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#092C74]">Enterprise Router</div>
                  <div className="text-[9px] font-semibold text-slate-500">1 Gbps Fiber Link</div>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold bg-blue-50 text-[#123EB8] px-2 py-0.5 rounded">99.9% Up</span>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-md border border-white/60 mr-6 flex items-center justify-around text-center">
              <div>
                <div className="text-[8px] font-bold text-slate-400 uppercase">LAN Ports</div>
                <div className="text-[11px] font-black text-[#092C74]">48 Active</div>
              </div>
              <div className="w-px h-6 bg-slate-100" />
              <div>
                <div className="text-[8px] font-bold text-slate-400 uppercase">Wi-Fi APs</div>
                <div className="text-[11px] font-black text-[#17B890]">12 Connected</div>
              </div>
            </div>
          </div>
        );

      case 'it':
        return (
          <div className="w-full space-y-3 relative z-10">
            <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-md border border-white/60 flex items-center justify-between transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#17B890] flex items-center justify-center">
                  <Server className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#092C74]">NAS Backup Rack</div>
                  <div className="text-[9px] font-semibold text-emerald-600">Encrypted Raid-5</div>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded">Synced</span>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-md border border-white/60 ml-6 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-700">AMC Maintenance</span>
              <span className="text-[9px] font-mono font-bold bg-blue-50 text-[#123EB8] px-2 py-0.5 rounded">24/7 Ready</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full space-y-3 relative z-10">
            <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-md border border-white/60 flex items-center justify-between transform rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Globe className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#092C74]">Web App Portal</div>
                  <div className="text-[9px] font-semibold text-slate-500">React & Next.js</div>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold bg-purple-50 text-purple-700 px-2 py-0.5 rounded">Deployed</span>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: delay * 0.1, ease: 'easeOut' }}
      className="bg-white rounded-3xl p-6 border border-slate-200/80 ref-card-shadow ref-card-shadow-hover flex flex-col justify-between group overflow-hidden"
    >
      <div>
        {/* Top Soft Pastel Gradient Header Box (Matching Pinterest Reference Image) */}
        <div className={`relative rounded-2xl bg-gradient-to-tr ${getGradient()} p-6 mb-6 overflow-hidden flex items-center justify-center min-h-[175px]`}>
          
          {/* Subtle Grid Dot Background Pattern */}
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#123eb8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Sparkle decorative icons in upper corner */}
          <div className="absolute top-3 right-3 text-[#16A7C9]/40 pointer-events-none">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          </div>

          {/* Render Visual Preview Elements */}
          {renderVisualPreview()}
        </div>

        {/* Content Title & Paragraph (Centered & Clean matching reference) */}
        <div className="text-center space-y-2 px-1">
          {categoryTag && (
            <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#123EB8] bg-blue-50 px-2.5 py-0.5 rounded-full mb-1">
              {categoryTag}
            </span>
          )}

          <h3 className="text-xl font-bold text-[#092C74] group-hover:text-[#123EB8] transition-colors leading-snug">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-[#697386] font-normal leading-relaxed">
            {description}
          </p>

          {/* Optional bullet points */}
          {features.length > 0 && (
            <ul className="pt-3 border-t border-slate-100 space-y-1.5 text-left text-xs text-slate-700 font-medium">
              {features.map((feat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#17B890] shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Footer Action Link */}
      {actionLink && (
        <div className="pt-5 mt-4 border-t border-slate-100 text-center">
          <a
            href={actionLink}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123EB8] group-hover:text-[#092C74] transition-colors"
          >
            {actionText}
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      )}
    </motion.div>
  );
};
