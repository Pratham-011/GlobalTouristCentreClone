import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FilterState {
  activeFilters: Record<string, string>;
  setActiveFilter: (slug: string, filter: string) => void;
}

export const useFilterStore = create<FilterState>()(
  persist(
    (set) => ({
      activeFilters: {},
      setActiveFilter: (slug, filter) =>
        set((state) => ({
          activeFilters: {
            ...state.activeFilters,
            [slug]: filter,
          },
        })),
    }),
    {
      name: "destinations-filter-storage",
    }
  )
);

