interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group bg-gray-800/10 rounded-lg backdrop-blur-sm p-6 hover:scale-105 transition-transform duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-cyan-400">{title}</h3>
      <p className="text-cyan-100 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-cyan-200 text-sm flex items-center">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}