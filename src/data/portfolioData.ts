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
        imageUrl: "https://static.wixstatic.com/media/e4a203_378475ee1142410fb3a56ba73d39db72~mv2.png"
      },
      {
        title: "Cumberland Roots Coffee",
        description: "A warm, friendly, modern coffee site",
        imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80",
        link: "https://benevolent-bienenstitch-510b71.netlify.app/"
      },
      {
        title: "RJ's Beginner Crypto Services 101",
        description: "A service by RJ to teach newcomers about the crypto space",
        imageUrl: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/473079271_3932064817071165_4944420438080042017_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=a6CVz0pXjsYQ7kNvgFJLl_B&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=Ax-aeXYpC9fEI7KrHPhYF5j&oh=00_AYD0_xdXbxh3W6rqkgfPzT7xSlPvJMKXsh6WN34llbQgqA&oe=678BE6FD",
        link: "https://reliable-brioche-4dced6.netlify.app/"
      },
      {
        title: "Rebecca's Bakery",
        description: "Local, bakery restaurant",
        imageUrl: "https://static.wixstatic.com/media/e4a203_ca8794669bed4c4ba0939869a8c13646~mv2.png",
        link: "https://joyful-sherbet-5237d6.netlify.app/"
      },
      {
        title: "Space Explorer",
        description: "A space exploration agency",
        imageUrl: "https://static.wixstatic.com/media/e4a203_182b2cd8055e4abd9a654d4201fb5e5f~mv2.png",
        link: "https://luxury-malabi-cb24d8.netlify.app/"
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
        imageUrl: "https://static.wixstatic.com/media/e4a203_378475ee1142410fb3a56ba73d39db72~mv2.png",
      },
      {
        title: "Giuseppe FAQ Bot",
        description: "24/7 chatbot assistant for basic customer FAQ",
        imageUrl: "https://static.wixstatic.com/media/559bd5_803711cd15bf4e5dbc5424a859018e6e~mv2.png",
        link: "https://www.europeanforeignmotorworks.com/"
      },
      {
        title: "Physical Needs Bot",
        description: "24/7 chatbot assistant for basic customer FAQ",
        imageUrl: "https://whizardapi.com/wp-content/uploads/2022/04/download-2.png",
        link: "https://creator.voiceflow.com/prototype/674e720b2e9e997326daa67a"
      }
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
  }
];