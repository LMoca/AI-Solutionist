import { Globe, MessageSquare } from 'lucide-react';
import Section from './Section';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: <Globe className="text-cyan-400" size={32} />,
    title: "Website Creation",
    description: "Custom-built, responsive websites that capture your brand's essence and drive results",
    features: ["Modern Design", "Mobile Responsive", "SEO Optimized", "Fast Loading", "Individually Customized"]
  },
  {
    icon: <MessageSquare className="text-cyan-400" size={32} />,
    title: "Website Chatbots",
    description: "AI-powered chatbots that enhance customer engagement and support",
    features: ["24/7 Customer Support", "Lead Generation", "Product Recommendations", "Ticket / Issue Submission", "Automated Responses"]
  },
  {
    icon: <MessageSquare className="text-cyan-400" size={32} />,
    title: "Business Workflow Automation",
    description: "AI Automated systems handling business tasks",
    features: ["24/7 Customer Support", "Lead Generation", "Product Recommendations", "Ticket / Issue Submission", "Automated Responses"]
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