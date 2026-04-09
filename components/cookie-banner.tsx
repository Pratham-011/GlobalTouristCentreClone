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
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 md:p-8 bg-zinc-950/95 backdrop-blur-md border-t border-amber-500/20 shadow-2xl animate-in slide-in-from-bottom">
          <div className="max-w-7xl mx-auto flex flex-col gap-5">
            <div className="space-y-2 text-center sm:text-left">
              <h2 className="text-xl font-semibold text-white">
                {t.cookies.banner.title}
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed max-w-5xl">
                {t.cookies.banner.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto text-zinc-300 border-zinc-700 hover:bg-zinc-800"
                  onClick={() => setIsModalOpen(true)}
                >
                  {t.cookies.banner.settings}
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto text-zinc-300 border-zinc-700 hover:bg-zinc-800"
                  onClick={handleRejectAll}
                >
                  {t.cookies.banner.rejectAll}
                </Button>
                <Button
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-zinc-950 font-semibold transition-all hover:scale-105 active:scale-95"
                  onClick={handleAcceptAll}
                >
                  {t.cookies.banner.acceptAll}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] bg-zinc-950 border-zinc-800 text-zinc-100 max-h-[85vh] overflow-y-auto">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-2xl font-semibold text-white">
              {t.cookies.modal.title}
            </DialogTitle>
            <DialogDescription className="text-zinc-400">
              {t.cookies.modal.intro}
            </DialogDescription>
          </DialogHeader>

          <div className="py-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1 mr-4">
                  <Label className="text-base font-medium text-white flex items-center gap-2">
                    {t.cookies.modal.essential.title}
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 font-normal">
                      {t.cookies.modal.essentialNote}
                    </span>
                  </Label>
                  <p className="text-sm text-zinc-400">
                    {t.cookies.modal.essential.desc}
                  </p>
                </div>
                <Switch checked disabled className="data-[state=checked]:bg-zinc-600" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1 mr-4">
                  <Label htmlFor="analytics" className="text-base font-medium text-white">
                    {t.cookies.modal.analytics.title}
                  </Label>
                  <p className="text-sm text-zinc-400">
                    {t.cookies.modal.analytics.desc}
                  </p>
                </div>
                <Switch
                  id="analytics"
                  checked={preferences.analytics}
                  onCheckedChange={() => handleToggle("analytics")}
                  className="data-[state=checked]:bg-amber-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1 mr-4">
                  <Label htmlFor="marketing" className="text-base font-medium text-white">
                    {t.cookies.modal.marketing.title}
                  </Label>
                  <p className="text-sm text-zinc-400">
                    {t.cookies.modal.marketing.desc}
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={preferences.marketing}
                  onCheckedChange={() => handleToggle("marketing")}
                  className="data-[state=checked]:bg-amber-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1 mr-4">
                  <Label htmlFor="preference" className="text-base font-medium text-white">
                    {t.cookies.modal.preference.title}
                  </Label>
                  <p className="text-sm text-zinc-400">
                    {t.cookies.modal.preference.desc}
                  </p>
                </div>
                <Switch
                  id="preference"
                  checked={preferences.preference}
                  onCheckedChange={() => handleToggle("preference")}
                  className="data-[state=checked]:bg-amber-500"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-6 border-t border-zinc-800">
            <Button
              variant="outline"
              onClick={handleRejectAll}
              className="w-full sm:w-auto text-zinc-300 border-zinc-700 hover:bg-zinc-800"
            >
              {t.cookies.banner.rejectAll}
            </Button>
            <Button
              onClick={handleSaveSettings}
              className="w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 text-white font-semibold"
            >
              {t.cookies.modal.saveSettings}
            </Button>
            <Button
              onClick={handleAcceptAll}
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-zinc-950 font-semibold"
            >
              {t.cookies.banner.acceptAll}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
