          interface Project {
  title: string;
  description: string;
  imageUrl: string;
  links?: Array<{ label: string; url: string }>;
}

interface PortfolioItem {
  icon: keyof typeof PortfolioIcons;
  title: string;
  description: string;
  projects: Project[];
}

export const portfolioData: PortfolioItem[] = [
  {
    icon: 'Globe',
    title: "Website Design",
    description: "Create customized, elegant, sleek website design with seamless user experience",
    projects: [
      {
        title: "FitByMi, LLC",
        description: "FitByMi's official website for fitness coaching services",
        imageUrl: "/assets/tempLogoFitByMi.png",
        links: [{ label: "View Website", url: "https://fitbymi.com/" }]
      },
      {
        title: "Mateo Insurance Agency",
        description: "Jose Mateo's Insurance Agency",
        imageUrl: "/assets/MateoInsuranceAgencyLogo.png",
        links: [{ label: "View Project", url: "#" }]
      },
      {
        title: "RJ's Beginner Crypto Services 101",
        description: "Educational platform for cryptocurrency beginners",
        imageUrl: "/assets/RJCryptoLogo.jpg",
        links: [{ label: "View Project", url: "#" }]
      },
      {
        title: "A Plus Services Corp",
        description: "Professional services company website",
        imageUrl: "/assets/APlusServicesLogo.jpg",
        links: [{ label: "View Project", url: "#" }]
      },
      {
        title: "European Foreign Motor Works",
        description: "Automotive repair and maintenance services",
        imageUrl: "/assets//EFMW Logo.png",
        links: [{ label: "View Website", url: "https://www.europeanforeignmotorworks.com/" }]
      }
    ]
  },
  {
    icon: 'MessageSquare',
    title: "AI Chatbots",
    description: "24/7 chatbot assistant, made for AI Solutionist",
    projects: [
      {
        title: "LM Chatbot",
        description: "AI assistant for customer support and lead generation",
        imageUrl: "/LM Logo Black BG.png",
        links: [{ label: "View Project", url: "#" }]
      },
      {
        title: "FitByMi Bot",
        description: "Chatbot assistant for FAQ, Subscription, & appt. scheduling",
        imageUrl: "/assets/tempLogoFitByMi.png",
        links: [{ label: "View Project", url: "#" }]
      },
      {
        title: "A.E.D. Metal Products",
        description: "AI chatbot for custom metal fabrication inquiries & quotes",
        imageUrl: "/assets/aed-metal-logo.png",
        links: [{ label: "View Project", url: "#" }]
      }
    ]
  },
  {
    icon: 'MessageSquare',
    title: "AI Phone Calls",
    description: "Intelligent voice assistants for customer service and sales",
    projects: []
  },
  {
    icon: 'Cog',
    title: "Business Workflow Automation", 
    description: "AI-powered systems to automate your daily tasks",
    projects: [
      {
        title: "A.E.D. Metal Products",
        description: "AI-powered social media automation for Facebook & LinkedIn with generated content and images for motorsport metal fabrication that elicits user activity",
        imageUrl: "/assets/aed-metal-logo.png",
        links: [
          { label: "View Facebook", url: "https://www.facebook.com/AEDMotorsport" },
          { label: "View LinkedIn", url: "https://www.linkedin.com/company/aed-motorsport-products/" }
        ]
      }
    ]
  },
  {
    icon: 'MessageSquare',
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    projects: [
      {
        title: "LoanSimple",
        description: "Powell Home Mortgage's exclusive app linking mortgage realtors & brokers",
        imageUrl: "/assets/LoanSimple.png",
        links: [{ label: "View App", url: "https://powellhomemtg.netlify.app/" }]
      }
    ]
  }
];

export const painPoints = [
  {
    category: "Social Media Management",
    problems: [
      { text: 'Inconsistent Posts' },
      { text: 'Manual Content' },
      { text: 'Delayed Response' },
      { text: 'Data Entry' },
      { text: 'Manual Tasks' },
      { text: 'Mixed Voice' },
      { text: 'Missing Mentions' },
      { text: 'Bad Timing' },
      { text: 'Human Errors' },
      { text: 'Inconsistent' },
      { text: 'No Analytics' },
      { text: 'Account Chaos' },
      { text: 'Poor Engage' },
      { text: 'High Costs' },
      { text: 'Staff Burnout' },
      { text: 'Growth Blocks' }
    ],
    solutions: [
      { text: 'Perfect Timing' },
      { text: 'AI Content' },
      { text: 'Instant Reply' },
      { text: 'Instant Process' },
      { text: 'Auto Workflow' },
      { text: 'Unified Voice' },
      { text: 'Real-time Watch' },
      { text: 'Optimized Strategy' },
      { text: '99.9% Accuracy' },
      { text: 'Standardized' },
      { text: 'Action Insights' },
      { text: 'Central Control' },
      { text: 'High Engage' },
      { text: '80% Savings' },
      { text: 'Happy Staff' },
      { text: 'Instant Scale' }
    ]
  },
  {
    category: "Mobile Apps",
    problems: [
      { text: 'Missing Mobile' },
      { text: 'Low Engage' },
      { text: 'Poor Retention' },
      { text: 'Outdated Design' },
      { text: 'Poor Mobile' },
      { text: 'Behind Rivals' },
      { text: 'No Push Notify' },
      { text: 'Limited Data' },
      { text: 'Low Rankings' },
      { text: 'No Capture' },
      { text: 'No Offline' },
      { text: 'High Dev Cost' },
      { text: 'Long Timeline' },
      { text: 'Generic Look' },
      { text: 'Lost Sales' }
    ],
    solutions: [
      { text: 'Reach Mobile' },
      { text: 'High Engage' },
      { text: 'Keep Users' },
      { text: 'Modern Design' },
      { text: 'Mobile Perfect' },
      { text: 'Lead Market' },
      { text: 'Direct Connect' },
      { text: 'Rich Insights' },
      { text: 'Top Rankings' },
      { text: 'Lead Capture' },
      { text: 'Offline Ready' },
      { text: 'Cost Effective' },
      { text: 'Rapid Deploy' }
    ]
  },
  {
    category: "Website Design",
    problems: [
      { text: 'Slow Loading' },
      { text: 'Poor Mobile' },
      { text: 'Outdated Look' },
      { text: 'Hard Navigate' },
      { text: 'No SEO' },
      { text: 'Security Risk' },
      { text: 'High Bounce' },
      { text: 'Low Convert' }
    ],
    solutions: [
      { text: 'Fast Loading' },
      { text: 'Mobile Ready' },
      { text: 'Modern Design' },
      { text: 'Easy Navigate' },
      { text: 'SEO Optimized' },
      { text: 'Secure Site' },
      { text: 'Low Maintain' },
      { text: 'Unique Brand' },
      { text: 'More Customers' },
      { text: 'Accurate Info' },
      { text: 'Multi-Language' },
      { text: 'Satisfied Users' }
    ]
  }
];