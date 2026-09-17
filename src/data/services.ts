export interface ServiceItemData {
  id: string;
  code: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  placeholderSrc?: string;
  recommendedSize?: string;
  category: 'Security' | 'Infrastructure' | 'IT Support' | 'Digital';
}

export const SERVICES_DATA: ServiceItemData[] = [
  {
    id: 'cctv-surveillance',
    code: '01',
    title: 'CCTV Surveillance',
    category: 'Security',
    shortDesc: 'Installation and configuration of reliable CCTV surveillance systems for businesses, offices and commercial properties.',
    fullDesc: 'End-to-end commercial security solutions including IP cameras, HD analog systems, Network Video Recorders (NVR), remote mobile viewing setup, perimeter protection, and 24/7 video monitoring infrastructure designed for complete business safety.',
    iconName: 'Camera',
    features: [
      'High-Definition IP & Analog Camera Systems',
      'Remote Smartphone & Desktop Video Access',
      'Night Vision & Motion Analytics',
      'Centralized NVR / DVR Storage Setup',
      'Regular Maintenance & Camera Calibration'
    ],
    placeholderSrc: '/images/services-showcase-1.webp',
    recommendedSize: '540 × 360px'
  },
  {
    id: 'networking',
    code: '02',
    title: 'Networking',
    category: 'Infrastructure',
    shortDesc: 'Professional network setup, structured cabling, Wi-Fi and connectivity solutions.',
    fullDesc: 'Reliable networking infrastructure for enterprise facilities and SMBs. We design, deploy, and support high-speed LAN/WAN networks, structured Cat6 cabling, rack patching, managed switches, routers, firewall security, and seamless campus Wi-Fi access points.',
    iconName: 'Network',
    features: [
      'Structured Cat6 / Cat6A & Fiber Cabling',
      'Managed Switch & Router Configurations',
      'Enterprise Wi-Fi Access Point Deployment',
      'VLAN Segmentation & Firewall Security',
      'Network Testing, Labeling & Troubleshooting'
    ]
  },
  {
    id: 'it-infrastructure',
    code: '03',
    title: 'IT Infrastructure',
    category: 'Infrastructure',
    shortDesc: 'Computers, servers, peripherals and technology infrastructure required for daily business operations.',
    fullDesc: 'Comprehensive setup of office IT backbones including server racks, uninterrupted power supplies (UPS), NAS storage drives, workstation deployments, and centralized data cabling to keep operations running smoothly with zero bottlenecking.',
    iconName: 'Server',
    features: [
      'Workstation & Office Hardware Setup',
      'Server Rack Enclosures & Cable Management',
      'Uninterrupted Power Supply (UPS) Protection',
      'Network Attached Storage (NAS) Backup Racks',
      'Hardware Procurement & Lifecycle Management'
    ],
    placeholderSrc: '/images/services-showcase-2.webp',
    recommendedSize: '540 × 360px'
  },
  {
    id: 'computer-laptop-solutions',
    code: '04',
    title: 'Computer & Laptop Solutions',
    category: 'IT Support',
    shortDesc: 'Supply, configuration, maintenance and support for desktops, laptops and related equipment.',
    fullDesc: 'Custom workstation procurement, OS provisioning, hardware upgrades, RAM and SSD installations, peripheral integration, driver updates, and diagnostic repair for business laptop fleets and desktop suites.',
    iconName: 'Laptop',
    features: [
      'Business Desktop & Laptop Sales / Leasing',
      'OS Configuration, Formatting & Imaging',
      'Hardware Upgrades (RAM, SSD, Graphics)',
      'Peripheral & Multi-Monitor Configuration',
      'On-site Hardware Repair & Component Swap'
    ]
  },
  {
    id: 'cybersecurity',
    code: '05',
    title: 'Cybersecurity',
    category: 'Security',
    shortDesc: 'Security solutions designed to help protect systems, networks and business information.',
    fullDesc: 'Multi-layer defense strategies protecting your organization from malware, ransomware, unauthorized access, and data leaks. Includes endpoint antivirus protection, hardware firewalls, encrypted backups, and secure VPN channels for remote workers.',
    iconName: 'ShieldCheck',
    features: [
      'Enterprise Endpoint Antivirus & EDR',
      'Hardware Firewall Setup & Rule Optimization',
      'Automated Off-site Data Backup Systems',
      'Secure Remote Access VPN Networks',
      'Vulnerability Assessments & Security Audits'
    ]
  },
  {
    id: 'web-development',
    code: '06',
    title: 'Web Development',
    category: 'Digital',
    shortDesc: 'Fast, responsive and professional websites designed for modern businesses.',
    fullDesc: 'Custom business website design and modern front-end development tailored to showcase your corporate capabilities, engage clients, drive lead generation, and provide lightning-fast loading speeds on mobile and desktop devices.',
    iconName: 'Globe',
    features: [
      'Custom Corporate & Business Websites',
      'Responsive Mobile-First UI/UX Design',
      'High-Speed Next.js & React Frameworks',
      'Content Management System (CMS) Integration',
      'SEO-Optimized Structure & Fast Loading'
    ]
  },
  {
    id: 'mobile-app-development',
    code: '07',
    title: 'Mobile App Development',
    category: 'Digital',
    shortDesc: 'Business-focused mobile applications built around practical requirements.',
    fullDesc: 'Cross-platform iOS and Android mobile app development engineered for business utility, customer portals, field workforce management, and internal operational workflows.',
    iconName: 'Smartphone',
    features: [
      'iOS & Android Cross-Platform Apps',
      'User-Friendly Dashboard & Interfaces',
      'API Integration & Cloud Synchronization',
      'Real-Time Push Notifications',
      'App Store & Play Store Deployment Support'
    ]
  },
  {
    id: 'digital-marketing',
    code: '08',
    title: 'Digital Marketing',
    category: 'Digital',
    shortDesc: 'Digital marketing services that help businesses strengthen their online presence and reach customers.',
    fullDesc: 'Targeted digital campaigns including Search Engine Optimization (SEO), Google Business Profile management, social media marketing, pay-per-click advertising, and lead generation funnels engineered for commercial growth.',
    iconName: 'TrendingUp',
    features: [
      'Search Engine Optimization (Local & Regional SEO)',
      'Google Maps & Business Profile Optimization',
      'Social Media Branding & Lead Campaigns',
      'PPC Search & Display Advertising',
      'Performance Analytics & Reporting'
    ]
  },
  {
    id: 'it-support-amc',
    code: '09',
    title: 'IT Support & AMC',
    category: 'IT Support',
    shortDesc: 'Reliable ongoing IT maintenance, troubleshooting and Annual Maintenance Contract services.',
    fullDesc: 'Proactive Annual Maintenance Contracts (AMC) providing rapid technician response, scheduled preventative maintenance, emergency breakdown troubleshooting, system optimization, and phone/remote support to maintain 99.9% operational uptime.',
    iconName: 'Headphones',
    features: [
      'Comprehensive Annual Maintenance Contracts (AMC)',
      'Dedicated On-Site & Remote Technical Support',
      'Scheduled Preventive Hardware Health Checks',
      'Rapid Incident Response & Troubleshooting',
      'Spare Parts Replacement & Warranty Support'
    ]
  }
];

export const CORE_SOLUTIONS_DATA = [
  {
    title: 'SMART SECURITY',
    subtitle: 'Commercial surveillance & access protection',
    icon: 'Shield',
    items: ['CCTV surveillance', 'Monitoring solutions', 'Access solutions']
  },
  {
    title: 'CONNECTED BUSINESS',
    subtitle: 'Seamless, high-availability connectivity',
    icon: 'Share2',
    items: ['Network infrastructure', 'Wi-Fi solutions', 'Structured cabling']
  },
  {
    title: 'RELIABLE IT',
    subtitle: 'Dependable hardware & preventative care',
    icon: 'HardDrive',
    items: ['Hardware solutions', 'IT maintenance', 'AMC & support']
  },
  {
    title: 'DIGITAL GROWTH',
    subtitle: 'Modern digital web & mobile presence',
    icon: 'Layout',
    items: ['Website development', 'Mobile applications', 'Digital marketing']
  }
];
