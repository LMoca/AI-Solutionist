import { PortfolioIcons } from '../components/icons/PortfolioIcons';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface PortfolioItem {
  icon: keyof typeof PortfolioIcons;
  title: string;
  description: string;
  projects: Project[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    icon: 'Globe',
    title: "Website Design",
    description: "Create customized, elegant, sleek website design with seamless user experience",
    projects: [
      {
        title: "AI Solutionist",
        description: "Luigi Moca's portfolio with about & provided services",
        imageUrl: "/LM Logo Black BG.png"
      },
      {
        title: "FitByMi, LLC",
        description: "Personal fitness training & wellness coaching platform",
        imageUrl: "/assets/tempLogoFitByMi.png",
        link: "https://fitbymi.netlify.app/"
      },
      {
        title: "Mateo Insurance Agency",
        description: "Jose Mateo's Insurance Agency",
        imageUrl: "/assets/MateoInsuranceAgencyLogo.png",
        link: "https://mateoinsurance.com/"
      },
      {
        title: "RJ's Beginner Crypto Services 101",
        description: "A service by RJ to teach newcomers about the crypto space",
        imageUrl: "/assets/RJCryptoLogo.jpg",
        link: "https://reliable-brioche-4dced6.netlify.app/"
      }
    ]
  },
  {
    icon: 'MessageSquare',
    title: "AI Chatbot Agents",
    description: "AI conversational chatbot agents",
    projects: [
      {
        title: "AI Solutionist Chatbot",
        description: "24/7 chatbot assistant, made for AI Solutionist",
        imageUrl: "/LM Logo Black BG.png",
      },
      {
        title: "Giuseppe FAQ Bot",
        description: "24/7 chatbot assistant for basic customer FAQ & sending emails",
        imageUrl: "/assets//EFMW Logo.png",
        link: "https://www.europeanforeignmotorworks.com/"
      },
      {
        title: "FitByMi Bot",
        description: "Chatbot assistant for FAQ, Subscription, & appt. scheduling",
        imageUrl: "/assets/tempLogoFitByMi.png",
        link: "https://fitbymi.netlify.app/"
      },
      {
        title: "A.E.D. Metal Products",
        description: "AI chatbot for custom metal fabrication inquiries & quotes",
        imageUrl: "/assets/aed-metal-logo.png",
        link: "https://www.aedmetals.com/"
      },
    ]
  },
  {
    icon: 'MessageSquare',
    title: "AI Phone Calls",
    description: "Intelligent voice assistants handling your business calls 24/7",
    projects: []
  },
  {
    icon: 'MessageSquare',
    title: "Business Workflow Automation", 
    description: "AI-powered systems to automate your daily tasks",
    projects: [
      {
        title: "A.E.D. Metal Products",
        description: "Automated social media posting & customer engagement",
        imageUrl: "/assets/aed-metal-logo.png",
        link: "https://www.facebook.com/AEDMotorsport/"
      }
    ]
  },
  {
    icon: 'MessageSquare',
    title: "Mobile App Development",
    description: "Custom mobile applications for iOS and Android",
    projects: [
      {
        title: "Powell Home Mortgage",
        description: "Powell Home Mortgage's exclusive app linking mortgage realtors & brokers",
        imageUrl: "/assets/LoanSimple.png",
        link: "https://powellhomemtg.netlify.app/"
      }/*,
      {
        title: "EcoTracker",
        description: "Sustainable living and carbon footprint tracking app",
        imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&q=80",
        link: "#"
      }*/
    ]
  }
];