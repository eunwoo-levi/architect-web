import ServiceCard, { ServiceCardProps } from "./ServiceCard";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

interface ServiceGridProps {
  items: ServiceCardProps[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const columnsClass: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-4",
};

export default function ServiceGrid({ items, columns = 4, className = "" }: ServiceGridProps) {
  return (
    <StaggerGroup
      className={`grid ${columnsClass[columns]} gap-px bg-stone-200 ${className}`}
    >
      {items.map((item, index) => (
        <StaggerItem key={index} className="h-full">
          <ServiceCard {...item} />
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
