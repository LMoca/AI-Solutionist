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
        title: "AI Solutionist's Website",
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
      /*{
        title: "EJ's Health Clinic",
        description: "A local health clinic startup",
        imageUrl: "https://media.istockphoto.com/photos/outpatient-surgery-center-picture-id181553727?k=6&m=181553727&s=612x612&w=0&h=Bd39bHji-railfqOaxA2CsO-sP6jIiibCoQe8RTzuX4=",
        link: "https://lustrous-marshmallow-fca067.netlify.app"
      },*/
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
    projects: [
      /*{
        title: "European & Foreign Motor Works",
        description: "24/7 chatbot assistant for basic customer FAQ",
        imageUrl: "https://static.wixstatic.com/media/559bd5_803711cd15bf4e5dbc5424a859018e6e~mv2.png",
        link: "https://www.europeanforeignmotorworks.com/"
      }*/
    ]
  }
];