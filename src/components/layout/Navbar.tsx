import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Shield,
  Camera,
  Network,
  Server,
  Laptop,
  Globe,
  Smartphone,
  TrendingUp,
  Headphones,
  ArrowRight,
} from 'lucide-react';
import { SERVICES_DATA } from '@/data/services';

const SERVICE_3D_ICONS: Record<string, string> = {
  'cctv-surveillance': '/images/nav-dropdown/nav-cctv.jpg',
  'networking': '/images/nav-dropdown/nav-networking.jpg',
  'it-infrastructure': '/images/nav-dropdown/nav-infrastructure.jpg',
  'computer-laptop-solutions': '/images/nav-dropdown/nav-hardware.jpg',
  'cybersecurity': '/images/nav-dropdown/nav-security.jpg',
  'web-development': '/images/nav-dropdown/nav-web.jpg',
  'mobile-app-development': '/images/nav-dropdown/nav-mobile.jpg',
  'digital-marketing': '/images/nav-dropdown/nav-growth.jpg',
  'it-support-amc': '/images/nav-dropdown/nav-support.jpg',
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera': return <Camera className="w-4 h-4 text-[#16A7C9]" />;
      case 'Network': return <Network className="w-4 h-4 text-[#123EB8]" />;
      case 'Server': return <Server className="w-4 h-4 text-[#092C74]" />;
      case 'Laptop': return <Laptop className="w-4 h-4 text-indigo-600" />;
      case 'ShieldCheck': return <Shield className="w-4 h-4 text-[#17B890]" />;
      case 'Globe': return <Globe className="w-4 h-4 text-[#16A7C9]" />;
      case 'Smartphone': return <Smartphone className="w-4 h-4 text-purple-600" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-[#FF9F1C]" />;
      default: return <Headphones className="w-4 h-4 text-[#123EB8]" />;
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${isScrolled
          ? 'py-3.5 shadow-xs border-b border-slate-100'
          : 'py-5 border-b border-slate-100/70'
        }`}
    >
      <div className="ref-container">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-2 group focus:outline-hidden py-1">
            <img
              src="/images/site-logo.png"
              alt="C&G INFOTECH Logo"
              className="h-14 sm:h-16 lg:h-20 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-xs"
            />
          </Link>



          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#264653]">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                const isDropdownActive = location.pathname.startsWith('/services');
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 hover:text-[#E76F51] transition-colors py-2 ${
                        isDropdownActive ? 'text-[#E76F51] font-bold' : ''
                      }`}
                    >
                      Services
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-[#E76F51]' : 'text-slate-400'}`} />
                    </Link>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[660px] bg-white rounded-2xl p-6 shadow-2xl border border-slate-100/80 grid grid-cols-2 gap-3.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        <div className="col-span-2 pb-3 mb-1 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Our Specialized Services</span>
                          <Link to="/services" className="text-xs font-bold text-[#E76F51] hover:underline flex items-center gap-1">
                            View All Services <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                        {SERVICES_DATA.map((service) => {
                          const iconSrc = SERVICE_3D_ICONS[service.id];
                          return (
                            <Link
                              key={service.id}
                              to={`/services#${service.id}`}
                              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#E8F4F3]/70 border border-transparent hover:border-[#2A9D8F]/20 transition-all group/item"
                            >
                              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 p-1 flex items-center justify-center shrink-0 group-hover/item:scale-105 group-hover/item:bg-white group-hover/item:shadow-sm transition-all overflow-hidden">
                                {iconSrc ? (
                                  <img
                                    src={iconSrc}
                                    alt={service.title}
                                    className="w-full h-full object-contain rounded-lg"
                                  />
                                ) : (
                                  getServiceIcon(service.iconName)
                                )}
                              </div>
                              <div>
                                <div className="text-xs font-bold text-[#264653] group-hover/item:text-[#E76F51] transition-colors">
                                  {service.title}
                                </div>
                                <div className="text-[11px] text-[#527982] line-clamp-1 mt-0.5">
                                  {service.shortDesc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`hover:text-[#E76F51] transition-colors py-2 relative ${
                    isActive ? 'text-[#E76F51] font-bold' : ''
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E76F51] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#E76F51] hover:bg-[#D05A3C] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-6 border-t border-slate-100 bg-white rounded-2xl p-4 shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className={`block py-2 px-3 rounded-lg text-base font-semibold ${
                    location.pathname === link.path
                      ? 'bg-orange-50 text-[#E76F51]'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-3 mt-2 space-y-2 border-l-2 border-slate-100 ml-3">
                    {SERVICES_DATA.slice(0, 6).map((s) => {
                      const iconSrc = SERVICE_3D_ICONS[s.id];
                      return (
                        <Link
                          key={s.id}
                          to={`/services#${s.id}`}
                          className="flex items-center gap-2.5 py-1 px-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#E76F51] hover:bg-slate-50 transition-colors"
                        >
                          {iconSrc && (
                            <img
                              src={iconSrc}
                              alt={s.title}
                              className="w-5 h-5 object-contain rounded-md shrink-0 bg-slate-100 p-0.5"
                            />
                          )}
                          <span>{s.title}</span>
                        </Link>
                      );
                    })}
                    <Link to="/services" className="block py-1 pl-2 text-xs font-bold text-[#E76F51] hover:underline">
                      + View all 9 services
                    </Link>
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#E76F51] text-white font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4" /> Get Free Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
