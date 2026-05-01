"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/lib/i18n/context";

import { User, Phone, Mail, Calendar, Users, Send } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  travelDate: z.string().min(1, "Travel date is required"),
  numPeople: z.string().min(1, "Number of people is required"),
});

type FormValues = z.infer<typeof formSchema>;

interface HorizontalLeadFormProps {
  tourSlug: string;
}

export function HorizontalLeadForm({ tourSlug }: HorizontalLeadFormProps) {
  const { t } = useI18n();
  const translations = t.destinations.tour.leadForm;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    const destination = tourSlug === "7n-8d-vietam-tour-package" ? "Vietnam" : "Singapore";
    const additionalMessage = translations.whatsappMessage.replace("{destination}", destination.toLowerCase());
    
    const message = `${additionalMessage}

${translations.fullName}: ${data.fullName}
${translations.phone}: ${data.phone}
${translations.email}: ${data.email}
${translations.travelDate}: ${data.travelDate}
${translations.numPeople}: ${data.numPeople}`;

    const whatsappNumber = "919067972295";
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappLink, "_blank");
  };

  const destinationName = tourSlug === "7n-8d-vietam-tour-package" ? "Vietnam" : "Singapore";

  return (
    <section className="bg-white pb-10 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              {translations.title.replace("{destination}", destinationName)}
            </h2>
          </div>
          
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-end"
          >
            <div className="space-y-2 lg:col-span-1">
              <Label htmlFor="fullName" className="flex items-center gap-2 text-slate-700">
                <User className="w-4 h-4 text-emerald-600" />
                {translations.fullName}
              </Label>
              <Input 
                id="fullName" 
                placeholder={translations.fullNamePlaceholder} 
                {...register("fullName")}
                className={`h-12 bg-white ${errors.fullName ? "border-red-500" : "border-slate-200"}`}
              />
            </div>
            
            <div className="space-y-2 lg:col-span-1">
              <Label htmlFor="phone" className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-emerald-600" />
                {translations.phone}
              </Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder={translations.phonePlaceholder} 
                {...register("phone")}
                className={`h-12 bg-white ${errors.phone ? "border-red-500" : "border-slate-200"}`}
              />
            </div>
            
            <div className="space-y-2 lg:col-span-1">
              <Label htmlFor="email" className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4 text-emerald-600" />
                {translations.email}
              </Label>
              <Input 
                id="email" 
                type="email" 
                placeholder={translations.emailPlaceholder} 
                {...register("email")}
                className={`h-12 bg-white ${errors.email ? "border-red-500" : "border-slate-200"}`}
              />
            </div>
            
            <div className="space-y-2 lg:col-span-1">
              <Label htmlFor="travelDate" className="flex items-center gap-2 text-slate-700">
                <Calendar className="w-4 h-4 text-emerald-600" />
                {translations.travelDate}
              </Label>
              <Input 
                id="travelDate" 
                type="date" 
                {...register("travelDate")}
                className={`h-12 bg-white ${errors.travelDate ? "border-red-500" : "border-slate-200"}`}
              />
            </div>
            
            <div className="space-y-2 lg:col-span-1">
              <Label htmlFor="numPeople" className="flex items-center gap-2 text-slate-700">
                <Users className="w-4 h-4 text-emerald-600" />
                {translations.numPeople}
              </Label>
              <Input 
                id="numPeople" 
                type="number" 
                min="1"
                placeholder={translations.numPeoplePlaceholder} 
                {...register("numPeople")}
                className={`h-12 bg-white ${errors.numPeople ? "border-red-500" : "border-slate-200"}`}
              />
            </div>
            
            <Button type="submit" className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all hover:shadow-lg lg:col-span-1">
              <Send className="w-4 h-4 mr-2" />
              {translations.submit}
            </Button>
          </form>
          
          {(errors.fullName || errors.phone || errors.email || errors.travelDate || errors.numPeople) && (
            <p className="text-red-500 text-sm mt-6 text-center font-medium">
              {translations.error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
