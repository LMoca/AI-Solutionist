import Section from './Section';
import ServiceCard from './ServiceCard';
import WebsiteScroll from './WebsiteScroll';
import NewChatbotIcon from './NewChatbotIcon';
import WorkflowAnimation from './WorkflowAnimation';
import { portfolioItems } from '../data/portfolioData';

const services = [
  {
    icon: <WebsiteScroll />,
    title: "Website Creation",
    description: "Custom-built, responsive websites that capture your brand's essence and drive results",
    features: ["Modern Design", "Mobile Responsive", "SEO Optimized", "Fast Loading", "Individually Customized"],
    projects: portfolioItems[0].projects
  },
  {
    icon: <NewChatbotIcon />,
    title: "AI Chatbot Agents",
    description: "AI-powered chatbots that enhance customer engagement and support",
    features: ["24/7 Customer Support", "Automatic Appointment Setups", "Product Recommendations", "Ticket / Issue Submission", "Automated Responses"],
    projects: portfolioItems[1].projects
  },
  {
    icon: <WorkflowAnimation />,
    title: "AI Workflow Automation",
    description: "AI Automated systems handling business tasks",
    features: ["24/7 Customer Support", "Lead Generation", "Restaurant Reservations", "Product Recommendations", "Ticket / Issue Submission", "Automated Responses"],
    projects: portfolioItems[2].projects
  }
];

export default function Services() {
  return (
    <Section id="services" title="Services">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </Section>
  );
}