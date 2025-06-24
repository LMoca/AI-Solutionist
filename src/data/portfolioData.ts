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
        description: "A warm, friendly, modern coffee site",
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
    ]
  },
  {
    icon: 'MessageSquare',
    title: "Business Workflow Automation",
    description: "AI-powered systems to automate your daily tasks",
    projects: []
  },
  {
    icon: 'MessageSquare',
    title: "AI Phone Calls",
    description: "Intelligent voice assistants handling your business calls 24/7",
    projects: [
      {
        title: "Buffalo Wild Wings",
        description: "AI phone system for handling carryout orders & reservations",
        imageUrl: "https://th.bing.com/th/id/R.854055676e5ccf3713e636b8974f783c?rik=d9r8Jhbfn8vpig&riu=http%3a%2f%2f1.bp.blogspot.com%2f-_ljGwO_InUo%2fUzwe1DM2xvI%2fAAAAAAAAisg%2fJaWh_L72iHw%2fs1600%2fBuffalo-Wild-Wings-logo.png&ehk=ELM2jFuwCApsNr2Shth1OvK%2bRXLS4bN9zAsdAwyLO4I%3d&risl=&pid=ImgRaw&r=0"
      },
      {
        title: "Papa Johns",
        description: "Voice assistant for carryout orders",
        imageUrl: "https://www.bigclassaction.com/images/lawsuit/16997.png"
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