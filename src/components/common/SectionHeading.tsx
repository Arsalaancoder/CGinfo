import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  accentWord?: string;
  className?: string;
  light?: boolean;
  accentColor?: string;
  noUnderline?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  centered = false,
  accentWord,
  className = '',
  light = false,
  accentColor,
  noUnderline = false,
}) => {
  const renderTitle = () => {
    if (!accentWord) {
      return title;
    }
    const parts = title.split(accentWord);

    let textColorClass = 'text-[#123EB8]';
    if (accentColor === 'orange' || accentColor === 'light-orange') {
      textColorClass = 'text-[#FF9F43]';
    } else if (accentColor) {
      textColorClass = accentColor;
    }

    const underlineClass = noUnderline ? '' : 'highlight-pill-cyan';

    return (
      <>
        {parts[0]}
        <span className={`inline-block ${textColorClass} ${underlineClass}`}>
          {accentWord}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`space-y-4 ${centered ? 'text-center max-w-4xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-black tracking-wider uppercase ${
          light ? 'bg-white/10 text-cyan-300 border border-white/20' : 'bg-blue-50 text-[#123EB8] border border-blue-100'
        }`}>
          {eyebrow}
        </div>
      )}

      <h2 className={`text-4xl sm:text-5xl md:text-[46px] lg:text-[52px] font-black leading-[1.14] tracking-tight ${
        light ? 'text-white' : 'text-[#092C74]'
      }`}>
        {renderTitle()}
      </h2>

      {description && (
        <p className={`text-base sm:text-lg md:text-[19px] font-medium leading-relaxed ${
          light ? 'text-blue-100/90' : 'text-[#697386]'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};
