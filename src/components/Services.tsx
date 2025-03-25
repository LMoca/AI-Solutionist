import Section from './Section';
import ServiceCard from './ServiceCard';
import WebsiteScroll from './WebsiteScroll';
import NewChatbotIcon from './NewChatbotIcon';
import WorkflowAnimation from './WorkflowAnimation';
import PhoneAnimation from './PhoneAnimation';
import MobileAppAnimation from './MobileAppAnimation';
import { portfolioItems } from '../data/portfolioData';

const services = [
  {
    icon: <WebsiteScroll />,
    title: "Website Creation",
    description: "Custom-built, responsive websites that capture your brand's essence and drive results",
    features: ["Modern, Sleek Design", "Mobile Responsive", "SEO Optimized", "Fast Loading", "Individually Customized"],
    projects: portfolioItems[0].projects
  },
  {
    icon: <MobileAppAnimation />,
    title: "Mobile App Development",
    description: "Custom mobile applications that deliver exceptional user experiences",
    features: [
      "Real Estate & Property Listing Apps",
      "Fitness & Wellness Tracking Apps",
      "E-Commerce & Mobile Shopping",
      "Healthcare & Telemedicine Apps",
      "Finance & Mobile Banking"
    ],
  },
  {
    icon: <PhoneAnimation />,
    title: "AI Phone Calls",
    description: "AI phone assistants that streamline customer interactions & provide instant support",
    features: ["24/7 Call Handling", "Multi-Lingual Chat Support", "Appointment Check-Ins + Confirmations", "Customer Support", "Client Acquisitions"],
    projects: portfolioItems[2].projects
  },
  {
    icon: <NewChatbotIcon />,
    title: "AI Chatbot Agents",
    description: "AI-powered chatbots that enhance customer engagement and support",
    features: ["24/7 Customer Support", "Multi-Lingual Chat Support", "Automatic Appointment Setups", "Product Recommendations", "Ticket / Issue Submission", "Automated Responses"],
    projects: portfolioItems[1].projects
  },
  {
    icon: <WorkflowAnimation />,
    title: "Workflow Automation",
    description: "AI + Automated systems handling business tasks",
    features: ["Automated Administrative Tasks", "Concurrent Personalized Email Outreaches", "Streamline Data Entries", "Automate Data Collection to Spreadsheets/Databases", "Automated Scheduled Tasks"],
    projects: portfolioItems[3].projects
  }
];

export default function Services() {
  // Separate the last service for the tall card
  const squareCards = services.slice(0, 4);
  const tallCard = services[4];

  return (
    <Section id="services" title="Services">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Left side - 2x2 grid of square cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {squareCards.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        {/* Right side - tall card */}
        <div className="lg:row-span-2">
          <ServiceCard {...tallCard} />
        </div>
      </div>
    </Section>
  );
}