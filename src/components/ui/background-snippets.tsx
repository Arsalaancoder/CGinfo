import React from 'react';
import { cn } from '@/lib/utils';

interface BackgroundSnippetsProps {
  className?: string;
}

export const Component: React.FC<BackgroundSnippetsProps> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 -z-10 h-full w-full bg-[#f4f8ff] bg-[linear-gradient(to_right,#e2ecfc_1px,transparent_1px),linear-gradient(to_bottom,#e2ecfc_1px,transparent_1px)] bg-[size:6rem_4rem]", className)}>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#a2d2ff,transparent)]"></div>
    </div>
  );
};

export default Component;
