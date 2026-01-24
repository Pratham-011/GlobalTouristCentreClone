// app/[locale]/loading.tsx
"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f9fafb]">
      <div className="flex flex-col items-center gap-6">
        {/* Brand Logo */}
        <img
          src="/assets/logo.png"
          alt="Global Tourist Centre"
          className="w-24 h-24"
        />

        {/* Elegant Loader Ring */}
        <div className="relative h-12 w-12">
          <span className="absolute inset-0 rounded-full border-2 border-[#d4af37]/30" />
          <span className="absolute inset-0 rounded-full border-t-2 border-[#0f766e] animate-spin" />
        </div>

        {/* Brand Text */}
        <p className="text-sm tracking-wide text-gray-600 font-medium">
          Crafting your journey…
        </p>
      </div>
    </div>
  );
}
