import React from 'react';
import { ShieldCheck, CheckCircle2, Activity, Wifi } from 'lucide-react';

export const StatusFloatingCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-100 floating-card-shadow text-left ${className}`}>
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
        <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
          System Status
        </span>
        <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live
        </span>
      </div>
      <div className="space-y-2.5 text-xs font-semibold">
        <div className="flex items-center justify-between gap-6">
          <span className="text-slate-600 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            CCTV Monitoring
          </span>
          <span className="text-emerald-600 font-bold bg-emerald-50/60 px-2 py-0.5 rounded">Active</span>
        </div>
        <div className="flex items-center justify-between gap-6">
          <span className="text-slate-600 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Network
          </span>
          <span className="text-emerald-600 font-bold bg-emerald-50/60 px-2 py-0.5 rounded">Secure</span>
        </div>
        <div className="flex items-center justify-between gap-6">
          <span className="text-slate-600 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            IT Support
          </span>
          <span className="text-emerald-600 font-bold bg-emerald-50/60 px-2 py-0.5 rounded">Online</span>
        </div>
      </div>
    </div>
  );
};

export const ProtectedFloatingCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-100 floating-card-shadow flex items-center gap-3.5 ${className}`}>
      <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center text-[#17B890] shrink-0">
        <ShieldCheck className="w-6 h-6 stroke-[2]" />
      </div>
      <div>
        <h4 className="text-xs font-extrabold text-[#092C74] tracking-tight">Business Protected</h4>
        <p className="text-[11px] font-semibold text-slate-500 flex items-center gap-1 mt-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          24/7 Surveillance Monitoring
        </p>
      </div>
    </div>
  );
};

export const TagsFloatingCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-slate-100 floating-card-shadow text-left ${className}`}>
      <div className="text-[10px] font-extrabold text-[#092C74] uppercase tracking-wider mb-2">
        C&G INFOTECH
      </div>
      <div className="flex flex-wrap gap-1.5">
        {['CCTV', 'Networking', 'IT', 'Security', 'Digital'].map((tag) => (
          <span key={tag} className="text-[10px] font-semibold bg-blue-50 text-[#123EB8] px-2 py-0.5 rounded-md border border-blue-100">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export const StatsFloatingCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-100 floating-card-shadow flex items-center gap-4 ${className}`}>
      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#123EB8] shrink-0">
        <Activity className="w-6 h-6 stroke-[2]" />
      </div>
      <div>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Reliable Solutions</div>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-sm font-extrabold text-[#092C74]">500+ Clients</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="text-xs font-bold text-emerald-600">24/7 Support</span>
        </div>
      </div>
    </div>
  );
};

export const AnalyticsFloatingCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-100 floating-card-shadow ${className}`}>
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">System Overview</span>
        <Wifi className="w-3.5 h-3.5 text-[#16A7C9]" />
      </div>
      <div className="grid grid-cols-3 gap-3 text-center">
        <div>
          <div className="text-[10px] text-slate-400 font-semibold">Uptime</div>
          <div className="text-sm font-black text-[#123EB8]">99.9%</div>
        </div>
        <div className="border-x border-slate-100 px-1">
          <div className="text-[10px] text-slate-400 font-semibold">Protected</div>
          <div className="text-sm font-black text-[#17B890]">24/7</div>
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-semibold">Support</div>
          <div className="text-sm font-black text-[#092C74]">Ready</div>
        </div>
      </div>
    </div>
  );
};
