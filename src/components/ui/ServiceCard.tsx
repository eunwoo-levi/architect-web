import { IconType } from "react-icons";

export interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="h-full bg-white p-6 md:p-8 flex flex-col items-center text-center group hover:bg-stone-900 transition-colors duration-300">
      <div className="w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="text-3xl text-accent group-hover:text-accent-light transition-colors" />
      </div>
      <h3 className="text-sm md:text-base font-semibold text-stone-900 group-hover:text-white transition-colors mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-stone-500 group-hover:text-stone-300 transition-colors leading-relaxed">
        {description}
      </p>
    </div>
  );
}
