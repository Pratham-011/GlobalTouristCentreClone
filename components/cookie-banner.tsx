"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const CONSENT_KEY = "gtc_cookie_consent";

export function CookieBanner() {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytics: false,
    marketing: false,
    preference: false,
  });

  useEffect(() => {
    const storedConsent = localStorage.getItem(CONSENT_KEY);
    if (!storedConsent) {
      setIsVisible(true);
    } else {
      try {
        setPreferences(JSON.parse(storedConsent));
      } catch (e) {
        // Fallback
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      preference: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem(CONSENT_KEY, JSON.stringify(allAccepted));
    setIsVisible(false);
    setIsModalOpen(false);
  };

  const handleRejectAll = () => {
    const allRejected = {
      essential: true,
      analytics: false,
      marketing: false,
      preference: false,
    };
    setPreferences(allRejected);
    localStorage.setItem(CONSENT_KEY, JSON.stringify(allRejected));
    setIsVisible(false);
    setIsModalOpen(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(preferences));
    setIsVisible(false);
    setIsModalOpen(false);
  };

  const handleToggle = (key: keyof typeof preferences) => {
    if (key === "essential") return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible && !isModalOpen) return null;

  // We need to handle when `t.cookies` is not initially available or hasn't loaded properly
  // Since we ensure it in the context, t.cookies should exist, but let's be safe.
  if (!t.cookies) return null;

  return (
    <>
      {/* ── Cookie Consent Banner ── */}
      {isVisible && (
        <div
          className="fixed z-50 bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto sm:w-[380px] rounded-2xl p-8"
          style={{
            backgroundColor: "#ebe3e1",
            border: "1.5px solid #a6b8bc",
            borderTop: "5px solid #008081",
            boxShadow: "0 15px 50px rgba(0,0,0,0.18)",
          }}
        >
          {/* ── Title (Optional but adds to "Window" feel) ── */}
          <h3 className="text-xl font-bold mb-3" style={{ color: "#064965" }}>
            {t.cookies?.modal?.title || "Cookie Settings"}
          </h3>

          {/* ── Description ── */}
          <p
            className="leading-relaxed"
            style={{ fontSize: "14px", color: "#333333" }}
          >
            {t.cookies.banner.description}
          </p>

          {/* ── Buttons Layout ── */}
          <div className="flex flex-col gap-3 mt-8">
            <button
              onClick={handleAcceptAll}
              className="w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-300 hover:brightness-110 active:scale-[0.98] shadow-md"
              style={{
                backgroundColor: "#d8972f",
                color: "#000000",
              }}
            >
              {t.cookies.banner.acceptAll}
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleRejectAll}
                className="px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 bg-transparent border-2 border-[#008081] text-[#008081] hover:bg-[#008081] hover:text-white active:scale-[0.98]"
              >
                {t.cookies.banner.rejectAll}
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 bg-transparent border-2 border-[#064965] text-[#064965] hover:bg-[#064965] hover:text-white active:scale-[0.98]"
              >
                {t.cookies.banner.settings}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Settings Modal ── */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent
          className="sm:max-w-[600px] max-h-[85vh] overflow-y-auto rounded-xl"
          style={{
            backgroundColor: "#ebe3e1",
            border: "1px solid #a6b8bc",
            borderTop: "3px solid #008081",
            color: "#000000",
          }}
        >
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-2xl font-semibold" style={{ color: "#064965" }}>
              {t.cookies.modal.title}
            </DialogTitle>
            <DialogDescription style={{ color: "#333333", fontSize: "13px", lineHeight: "1.6" }}>
              {t.cookies.modal.intro}
            </DialogDescription>
          </DialogHeader>

          <div className="py-6 space-y-6">
            {/* Essential */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1 mr-4">
                  <Label className="text-base font-medium flex items-center gap-2" style={{ color: "#000000" }}>
                    {t.cookies.modal.essential.title}
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-normal"
                      style={{ backgroundColor: "rgba(0,128,129,0.1)", color: "#008081" }}
                    >
                      {t.cookies.modal.essentialNote}
                    </span>
                  </Label>
                  <p className="text-sm" style={{ color: "#555555" }}>
                    {t.cookies.modal.essential.desc}
                  </p>
                </div>
                <Switch checked disabled className="data-[state=checked]:bg-[#a6b8bc]" />
              </div>
            </div>

            {/* Analytics */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1 mr-4">
                  <Label htmlFor="analytics" className="text-base font-medium" style={{ color: "#000000" }}>
                    {t.cookies.modal.analytics.title}
                  </Label>
                  <p className="text-sm" style={{ color: "#555555" }}>
                    {t.cookies.modal.analytics.desc}
                  </p>
                </div>
                <Switch
                  id="analytics"
                  checked={preferences.analytics}
                  onCheckedChange={() => handleToggle("analytics")}
                  className="data-[state=checked]:bg-[#008081]"
                />
              </div>
            </div>

            {/* Marketing */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1 mr-4">
                  <Label htmlFor="marketing" className="text-base font-medium" style={{ color: "#000000" }}>
                    {t.cookies.modal.marketing.title}
                  </Label>
                  <p className="text-sm" style={{ color: "#555555" }}>
                    {t.cookies.modal.marketing.desc}
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={preferences.marketing}
                  onCheckedChange={() => handleToggle("marketing")}
                  className="data-[state=checked]:bg-[#008081]"
                />
              </div>
            </div>

            {/* Preference */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1 mr-4">
                  <Label htmlFor="preference" className="text-base font-medium" style={{ color: "#000000" }}>
                    {t.cookies.modal.preference.title}
                  </Label>
                  <p className="text-sm" style={{ color: "#555555" }}>
                    {t.cookies.modal.preference.desc}
                  </p>
                </div>
                <Switch
                  id="preference"
                  checked={preferences.preference}
                  onCheckedChange={() => handleToggle("preference")}
                  className="data-[state=checked]:bg-[#008081]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-6" style={{ borderTop: "1px solid #a6b8bc" }}>
            <button
              onClick={handleRejectAll}
              className="w-full sm:w-auto px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 bg-transparent"
              style={{ border: "2px solid #008081", color: "#008081" }}
            >
              {t.cookies.banner.rejectAll}
            </button>
            <button
              onClick={handleSaveSettings}
              className="w-full sm:w-auto px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 bg-transparent"
              style={{ border: "2px solid #064965", color: "#064965" }}
            >
              {t.cookies.modal.saveSettings}
            </button>
            <button
              onClick={handleAcceptAll}
              className="w-full sm:w-auto px-5 py-2.5 rounded-md text-sm font-bold transition-all duration-200 hover:brightness-90"
              style={{ backgroundColor: "#d8972f", color: "#000000" }}
            >
              {t.cookies.banner.acceptAll}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
