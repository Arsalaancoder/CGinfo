import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  label: string;
  width: number | string;
  height: number | string;
  futureSrc: string;
  className?: string;
  aspectRatio?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  width,
  height,
  futureSrc,
  className = '',
  aspectRatio = 'auto',
}) => {
  return (
    <div
      className={`relative group overflow-hidden rounded-2xl image-placeholder-dev flex flex-col items-center justify-center text-center p-6 transition-all duration-300 ${className}`}
      style={{
        aspectRatio: aspectRatio !== 'auto' ? aspectRatio : undefined,
        minHeight: typeof height === 'number' ? `${height}px` : height,
      }}
      data-future-src={futureSrc}
    >
      {/* Subtle organic grid background pattern inside placeholder */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#123eb8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Center content container */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-3 p-4 bg-white/80 backdrop-blur-xs rounded-xl shadow-xs border border-slate-200/60 max-w-[85%]">
        <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-[#123EB8]">
          <ImageIcon className="w-6 h-6 stroke-[1.75]" />
        </div>
        
        <div>
          <span className="inline-block px-2.5 py-0.5 mb-1.5 text-[11px] font-bold tracking-wider text-[#092C74] uppercase bg-blue-100/70 rounded-full">
            Image Placeholder
          </span>
          <h4 className="text-sm font-bold text-[#161B27] uppercase tracking-wide">
            {label}
          </h4>
          <p className="text-xs font-semibold text-[#123EB8] mt-1 font-mono">
            Recommended: {width} × {height}px
          </p>
        </div>

        <div className="text-[11px] text-slate-500 font-mono bg-slate-100 px-3 py-1 rounded border border-slate-200/80 truncate max-w-full">
          {futureSrc}
        </div>
      </div>

      {/* Hover tooltip hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-slate-400 bg-slate-900/90 text-white px-2.5 py-1 rounded-full font-sans shadow-md pointer-events-none whitespace-nowrap z-20">
        Replace with your webp image at {futureSrc}
      </div>
    </div>
  );
};
