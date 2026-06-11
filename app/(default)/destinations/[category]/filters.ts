export const FILTERS_BY_SLUG = {
  domestic: [
    { key: "all" },
    { key: "north" },
    { key: "south" },
    { key: "east" },
    { key: "west" },
    { key: "island" },
  ],
  international: [
    { key: "all" },
    { key: "asia" },
    { key: "europe" },
    { key: "southeast-asia" },
  ],
  "day-trips": null,
} as const;
