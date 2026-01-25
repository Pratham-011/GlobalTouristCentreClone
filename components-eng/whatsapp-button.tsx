"use client"

/**
 * WhatsAppButton Component
 * ------------------------
 * A floating WhatsApp contact button that stays fixed at bottom-right
 * Opens WhatsApp with a pre-filled message when clicked
 *
 * Features:
 * - Fixed position, always visible
 * - Animated pulse effect to draw attention
 * - Mobile-friendly touch target (min 44px)
 * - Accessible with proper ARIA labels
 * - Tooltip on hover (desktop)
 */

import { useState, useEffect } from "react"

interface WhatsAppButtonProps {
  /** WhatsApp phone number (without + or country code formatting issues) */
  phoneNumber?: string
  /** Pre-filled message when opening WhatsApp */
  message?: string
  /** Tooltip text shown on hover */
  tooltipText?: string
}

export function WhatsAppButton({
  phoneNumber = "918421012788", // India country code + number
  message = "Hi! I am planning a trip, can you help me out?",
  tooltipText = "Chat with us on WhatsApp",
}: WhatsAppButtonProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Don't render until mounted
  if (!isMounted) return null

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message)

  // WhatsApp API URL - works on both mobile and desktop
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Tooltip - shown on hover (desktop only) */}
      <div
        className={`
          absolute bottom-full right-0 mb-2 px-3 py-2 
          bg-foreground text-background text-sm rounded-lg shadow-lg
          whitespace-nowrap transition-all duration-200
          ${showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
          hidden sm:block
        `}
        role="tooltip"
        aria-hidden={!showTooltip}
      >
        {tooltipText}
        {/* Tooltip arrow */}
        <div className="absolute top-full right-4 border-8 border-transparent border-t-foreground" />
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="
          group flex items-center justify-center
          w-14 h-14 sm:w-16 sm:h-16
          bg-[#25D366] hover:bg-[#20BD5A] 
          rounded-full shadow-lg hover:shadow-xl
          transition-all duration-300 ease-in-out
          hover:scale-110 active:scale-95
          focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50
        "
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulse animation ring */}
        <span
          className="
            absolute w-full h-full rounded-full 
            bg-[#25D366] animate-ping opacity-30
          "
          aria-hidden="true"
        />

        {/* WhatsApp Icon - using custom SVG for brand accuracy */}
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 sm:w-8 sm:h-8 relative z-10" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Mobile label - visible only on small screens */}
      <span className="sr-only sm:not-sr-only sm:hidden">Contact us on WhatsApp</span>
    </div>
  )
}
