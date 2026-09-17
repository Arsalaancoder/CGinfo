import { cn } from "@/lib/utils";

export const RadialBackground = ({ className }: { className?: string } = {}) => {
  return (
    <div className={cn("absolute inset-0 -z-10 size-full bg-[#f4f8ff] [background:radial-gradient(125%_125%_at_50%_10%,#ffffff_35%,#a2d2ff_100%)]", className)} />
  );
};
