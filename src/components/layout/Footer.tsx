import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#264653] text-white pt-16 pb-10 border-t border-slate-700/80 relative overflow-hidden font-sans">
      <div className="ref-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-700/60">
          
          {/* Column 1: Company Branding & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group">
              <div className="bg-white p-3 sm:p-3.5 rounded-2xl shadow-lg border border-white/20 inline-flex items-center group-hover:scale-105 transition-transform">
                <img
                  src="/images/site-logo.png"
                  alt="C&G INFOTECH Logo"
                  className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
                />
              </div>
            </Link>



            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm font-medium">
              Your single reliable partner for commercial CCTV surveillance, enterprise networking, IT hardware procurement, cybersecurity, AMC contracts, and custom web applications.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E9C46A] shrink-0" />
                <span>+91 98765 43210 / 040-27800000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E9C46A] shrink-0" />
                <a href="mailto:info@cginfotech.in" className="hover:text-[#E76F51] transition-colors">
                  info@cginfotech.in / support@cginfotech.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#E9C46A] shrink-0" />
                <span>Secunderabad & Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-extrabold text-[#E9C46A] uppercase tracking-wider font-mono">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><Link to="/services#cctv-surveillance" className="hover:text-[#E76F51] transition-colors">CCTV & Surveillance</Link></li>
              <li><Link to="/services#networking" className="hover:text-[#E76F51] transition-colors">Networking & Wi-Fi</Link></li>
              <li><Link to="/services#it-infrastructure" className="hover:text-[#E76F51] transition-colors">Server & IT Infrastructure</Link></li>
              <li><Link to="/services#computer-laptop-solutions" className="hover:text-[#E76F51] transition-colors">Computer & Laptop Supply</Link></li>
              <li><Link to="/services#cybersecurity" className="hover:text-[#E76F51] transition-colors">Enterprise Cybersecurity</Link></li>
              <li><Link to="/services#web-development" className="hover:text-[#E76F51] transition-colors">Web Development & Apps</Link></li>
              <li><Link to="/services#it-support-amc" className="hover:text-[#E76F51] transition-colors">IT Support & AMC Contracts</Link></li>
            </ul>
          </div>

          {/* Column 3: Integrated Solutions */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-extrabold text-[#E9C46A] uppercase tracking-wider font-mono">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><Link to="/solutions" className="hover:text-[#E76F51] transition-colors">Commercial Security Package</Link></li>
              <li><Link to="/solutions" className="hover:text-[#E76F51] transition-colors">Office Wi-Fi & Mesh Network</Link></li>
              <li><Link to="/solutions" className="hover:text-[#E76F51] transition-colors">Turnkey IT AMC Support</Link></li>
              <li><Link to="/solutions" className="hover:text-[#E76F51] transition-colors">Custom Software & Web Apps</Link></li>
              <li><Link to="/solutions" className="hover:text-[#E76F51] transition-colors">Connected Business Infra</Link></li>
              <li><Link to="/solutions" className="hover:text-[#E76F51] transition-colors">Structured Cabling Specs</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Company */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-extrabold text-[#E9C46A] uppercase tracking-wider font-mono">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><Link to="/about" className="hover:text-[#E76F51] transition-colors">About C&G Infotech</Link></li>
              <li><Link to="/industries" className="hover:text-[#E76F51] transition-colors">Industries We Serve</Link></li>
              <li><Link to="/services" className="hover:text-[#E76F51] transition-colors">Quality SLA Standards</Link></li>
              <li><Link to="/contact" className="hover:text-[#E76F51] transition-colors">Request Consultation</Link></li>
              <li><Link to="/contact" className="hover:text-[#E76F51] transition-colors">Contact Support Team</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 font-medium">
          <div>
            © {new Date().getFullYear()} C&G INFOTECH. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-[#E76F51] transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#E76F51] transition-colors">Terms of Service</Link>
            <span>•</span>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1 text-[#E76F51] hover:text-[#E9C46A] transition-colors font-bold"
            >
              Back to top <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
