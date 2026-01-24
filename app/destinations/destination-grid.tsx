import { DestinationCard } from "@/components/destination-card";

interface Props {
  items: any[];
}

export function DestinationGrid({ items }: Props) {
  return (
    <div
      className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6"
      role="list"
    >
      {items.map((item, index) => (
        <div key={index} role="listitem">
          <DestinationCard {...item} />
        </div>
      ))}
    </div>
  );
}
