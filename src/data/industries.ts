export interface IndustryItem {
  id: string;
  name: string;
  desc: string;
  iconName: string;
  solutions: string[];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    desc: 'Surveillance across shop floors, robust industrial wireless networks, and ruggedized IT setups.',
    iconName: 'Factory',
    solutions: ['Perimeter Security', 'Shop-floor Wi-Fi', 'Industrial IT Support']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    desc: '24/7 video monitoring for patient safety, secure patient data networks, and compliant IT care.',
    iconName: 'Activity',
    solutions: ['IP CCTV Systems', 'HIPAA Secure Storage', 'High-Uptime AMC']
  },
  {
    id: 'education',
    name: 'Education',
    desc: 'Campus-wide Wi-Fi, classroom audio/video cabling, and multi-building surveillance systems.',
    iconName: 'GraduationCap',
    solutions: ['Campus Wi-Fi', 'Auditorium & Class Cabling', 'Student Safety CCTV']
  },
  {
    id: 'retail',
    name: 'Retail',
    desc: 'POS workstation support, store CCTV surveillance, customer Wi-Fi, and multi-location networking.',
    iconName: 'ShoppingBag',
    solutions: ['Store CCTV Monitoring', 'POS Hardware AMC', 'Customer Portal Setup']
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    desc: 'High-density guest Wi-Fi networks, hotel surveillance cameras, and front-desk IT setup.',
    iconName: 'Hotel',
    solutions: ['Guest High-Speed Wi-Fi', 'Hotel Security CCTV', 'Intercom & LAN Cabling']
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    desc: 'Commercial property access control, site surveillance monitoring, and smart office networks.',
    iconName: 'Building2',
    solutions: ['Site Video Monitoring', 'Gated Access Control', 'Property Tech Networks']
  },
  {
    id: 'finance',
    name: 'Finance',
    desc: 'High-security banking branch surveillance, firewall protection, and redundant network connections.',
    iconName: 'Landmark',
    solutions: ['Vault Security Cameras', 'Firewall & VPN Setup', 'Data Encryption Hardware']
  },
  {
    id: 'corporate-offices',
    name: 'Corporate Offices',
    desc: 'End-to-end structured Cat6 cabling, workstation leasing, cybersecurity, and full-service AMC.',
    iconName: 'Briefcase',
    solutions: ['Structured Server Racks', 'Corporate AMC Support', 'Web & Digital Services']
  }
];
