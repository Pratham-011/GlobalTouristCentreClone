# Global Tourist Centre Clone

A high-performance, multilingual travel and tourism website built with Next.js 14, featuring advanced internationalization, dynamic routing, and a modern UI/UX for the "Global Tourist Centre".

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Internationalization**: Custom i18n implementation with localized routing
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Animations**: [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Project Structure

## 📁 Project Structure

The project follows a modular architecture using the Next.js 14 App Router.

### `app/ ` - Routing & Pages
This directory contains the main application routes and layouts.
- **`[locale]/`**: Dynamic route segment for internationalization.
  - **`layout.tsx`**: The main application shell. Configures fonts (Montserrat, Playfair Display), sets up the `I18nProvider`, and includes global components like `Header`, `Footer`, and `WhatsAppButton`.
  - **`page.tsx`**: The localized home page component.
  - **`(home)/`**: Route group for the home page logic.
  - **`about/`**: Company profile and history.
  - **`blog/`**: Travel guides, tips, and destination articles.
  - **`contact-us/`**: Inquiry forms and branch information.
  - **`destinations/`**:
    - `page.tsx`: Listing of all available destinations.
    - `destinations-section.tsx`: The main grid display for travel spots.
    - `get-destination.ts`: Data fetching logic for specific locations.
    - `[category]/`: Further categorization of destinations (e.g., domestic vs. international).
  - **`luxury-trips/`**:
    - `page.tsx`: Showcase of premium tour packages.
    - `luxury-client.tsx`: Interactive client-side component for luxury trip browsing.
    - `[destinationSlug]/`: Dynamic routes for specific high-end tour itineraries.
  - **`services/`**: Various travel-related services (Forex, Visa, Insurance).
  - **`legal/`**: Privacy Policy, Terms & Conditions, etc.

### `components/` - UI & Feature Components
Modular components used throughout the application.
- **`ui/`**: Low-level, reusable primitives powered by [Radix UI](https://www.radix-ui.com/) and [shadcn/ui](https://ui.shadcn.com/).
  - `button.tsx`, `dialog.tsx`, `input.tsx`, `sheet.tsx`, `card.tsx`, etc.
- **`tours/`**: Specialized components for the travel experience.
  - `tour-itinerary.tsx`: Displays day-by-day schedules.
  - `booking-form.tsx`: Handles tour inquiries and reservations.
- **Shared Components**:
  - `header.tsx` & `footer.tsx`: Global navigation and site-wide links.
  - `language-switcher.tsx`: Provides the dropdown for switching between supported languages.
  - `whatsapp-button.tsx`: Floating CTA for instant customer support.
  - `promo-popup.tsx` & `offer-banner.tsx`: Components for displaying active deals and marketing messages.
  - `destination-card.tsx` & `tour-card.tsx`: Standardized cards for listing locations and packages.

### `lib/` - Logic & Data
Centralized utilities, data providers, and business logic.
- **`i18n/`**: The heart of the multi-language system.
  - **`translations/`**: Contains dictionary files (`en.ts`, `de.ts`, `fr.ts`, `it.ts`, `ru.ts`) as the source of truth for all text.
  - `config.ts`: Defines supported locales and default settings.
  - `context.tsx`: React Context API implementation for translations.
  - `getTranslations.ts`: Helper to fetch specific translation keys.
- **`data/`**: Static datasets that drive the dynamic content.
  - `destinations.ts`: Detailed information on cities and countries.
  - `tour-slugs.ts`: Registry of valid URLs for tour pages.
  - `seodata.ts`: SEO metadata (titles, descriptions, OG tags) for various routes.
  - `galleryData.ts`: Centralized image references for galleries.
  - `legalPages.ts`: Content for privacy and terms pages.
- **`utils.ts`**: Common utility functions, including the `cn` helper for Tailwind class merging.

### `public/` - Static Assets
- **`assets/`**: Highly organized asset storage.
  - `/hero/`: High-resolution background images.
  - `/destinations/`: Images specific to travel locations.
  - `/Luxury/`: Assets for premium tour packages.
- **Root Assets**: `favicon.ico`, `og-default.jpg`, etc.

### `styles/` - Global Styling
- **`globals.css`**: Contains Tailwind CSS directives, global variables, and custom CSS resets.

### ⚙️ Core Configuration
- **`middleware.ts`**: Handles redirection based on user language preferences.
- **`next.config.mjs`**: Configuration for image optimization and build settings.
- **`tailwind.config.ts`**: Custom theme definitions, color palettes, and animations.
- **`tsconfig.json`**: TypeScript path aliases for cleaner imports (e.g., `@/components/...`).

---

## 🛠️ Getting Started

1. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   # or
   pnpm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the results.

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🌐 Localization Workflow

The project uses a structured synchronization system for translations:
1. **Source of Truth**: `lib/i18n/translations/en.ts`
2. **Sync Process**: Automated scripts ensure that for every entry in `tourData`, `luxuryPages`, and `luxuryTourPackages`, corresponding translations and metadata exist in all target languages.

---

## 📄 License

This project is a private clone for the Global Tourist Centre.
