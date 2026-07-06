import {
  domesticTrips,
  internationalTrips,
  dayTrips,
} from "@/lib/data/destinations";




export function getDestinationBySlug(slug: string) {
  switch (slug) {
    case "domestic":
      return {
        title: "Domestic Trips",
        subtitle:
          "From the snow-capped Himalayas to the tropical beaches of the south, explore India's incredible diversity with our expertly crafted domestic tours.",
        herotitle: "Discover Incredible India",
        heroImageQuery: "Domestic-hero",
        items: domesticTrips,
      };

    case "international":
      return {
        title: "International Trips",
        subtitle:
          "From tropical paradises to cultural capitals, explore the world's most amazing destinations with our carefully crafted international tours.",
        herotitle: "Explore The World",
        heroImageQuery: "International-trips-hero",
        items: internationalTrips,
      };

    case "day-trips":
      return {
        title: "Day Trips",
        subtitle:
          "Perfect short getaways from major cities. Experience the best of nearby attractions without the need for overnight stays.",
        herotitle: "Perfect Day Getaways",
        heroImageQuery: "Day-trips-hero",
        items: dayTrips,
      };

    default:
      return null;
  }
}
