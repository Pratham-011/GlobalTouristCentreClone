"use client";
import {
  Users,
  Car,
  Utensils,
  Camera,
  Hotel,
  Plane,
  Ship,
  Map,
  Mountain,
  Compass,
  Clock,
  Ticket,
  Leaf,
  HeartPulse,
  Waves,
} from "lucide-react";

type QuickInfoItem = {
  title: string;
  description: string;
};

type IconData = {
  icon: keyof typeof ICONS;
};

interface TourQuickInfoProps {
  data: QuickInfoItem[];
  icondata: IconData[];
}

const ICONS = {
  GROUP: <Users className="w-6 h-6" />,
  TRANSPORT: <Car className="w-6 h-6" />,
  MEALS: <Utensils className="w-6 h-6" />,
  PHOTO: <Camera className="w-6 h-6" />,
  HOTEL: <Hotel className="w-6 h-6" />,
  FLIGHT: <Plane className="w-6 h-6" />,
  CRUISE: <Ship className="w-6 h-6" />,
  LOCATION: <Map className="w-6 h-6" />,
  NATURE: <Leaf className="w-6 h-6" />,
  MOUNTAIN: <Mountain className="w-6 h-6" />,
  ACTIVITY: <Compass className="w-6 h-6" />,
  TIME: <Clock className="w-6 h-6" />,
  TICKET: <Ticket className="w-6 h-6" />,
  WELLNESS: <HeartPulse className="w-6 h-6" />,
  WATER: <Waves className="w-6 h-6" />,
};

export function TourQuickInfo({ data, icondata }: TourQuickInfoProps) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div
          className="
    flex gap-4 overflow-x-auto pb-4
    snap-x snap-mandatory
    sm:grid sm:grid-cols-2
    lg:grid lg:grid-cols-4
    sm:overflow-visible
    scrollbar-hide
  "
        >
          {data.map((item, index) => {
            const iconKey = icondata?.[index]?.icon;
            const IconComponent = ICONS[iconKey] || <Camera className="w-6 h-6" />;
            
            return (
              <div
                key={item.title}
                className="
          flex items-center gap-4
          min-w-[85%] sm:min-w-0
          snap-center
          rounded-xl
          border
          bg-slate-50
          px-5 py-4
          transition-all
          hover:shadow-md
        "
              >
                <div className="text-emerald-600 shrink-0">
                  {IconComponent}
                </div>

                <div>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
