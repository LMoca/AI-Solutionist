import Section from './Section';
import ServiceCard from './ServiceCard';
import WebsiteScroll from './WebsiteScroll';
import NewChatbotIcon from './NewChatbotIcon';
import WorkflowAnimation from './WorkflowAnimation';
import PhoneAnimation from './PhoneAnimation';
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
    icon: <NewChatbotIcon />,
    title: "AI Chatbot Agents",
    description: "AI-powered chatbots that enhance customer engagement and support",
    features: ["24/7 Customer Support", "Multi-Lingual Chat Support", "Automatic Appointment Setups", "Product Recommendations", "Ticket / Issue Submission", "Automated Responses"],
    projects: portfolioItems[1].projects
  },
  {
    icon: <PhoneAnimation />,
    title: "AI Phone Calls",
    description: "AI phone assistants that streamline customer interactions & provide instant support",
    features: ["24/7 Call Handling", "Multi-Lingual Chat Support", "Appointment Check-Ins + Confirmations", "Customer Support", "Client Acquisitions"],
    projects: portfolioItems[2].projects
  },
  {
    icon: <WorkflowAnimation />,
    title: "AI Workflow Automation",
    description: "AI Automated systems handling business tasks",
    features: ["Social Media Automation", "Concurrent Personalized Email Outreaches", "Streamline Data Entries", "Automate Data Collection to Spreadsheets/Databases", "Automated Scheduled Tasks"],
    projects: portfolioItems[3].projects
  }
];

export default function Services() {
  return (
    <Section id="services" title="Services">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </Section>
  );
}