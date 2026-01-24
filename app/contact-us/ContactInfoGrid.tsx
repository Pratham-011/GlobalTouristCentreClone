"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export function ContactInfoGrid() {
  const { t } = useI18n();

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.ourOffice,
      content: (
        <>
          <p>Ground Floor, 1492, 3GF5-7,</p>
          <p>Benaulim Beach Road, Goa 403716</p>
        </>
      ),
    },
    {
      icon: Phone,
      title: t.contact.callUs,
      content: <a href="tel:+919067972295">+91 9067972295</a>,
    },
    {
      icon: Mail,
      title: t.contact.emailUs,
      content: (
        <>
          <a href="mailto:info@globaltouristcentre.com">
            info@globaltouristcentre.com
          </a>
          <br />
          <a href="mailto:sales@globaltouristcentre.com">
            sales@globaltouristcentre.com
          </a>
        </>
      ),
    },
    {
      icon: Clock,
      title: t.contact.workingHours,
      content: (
        <>
          <p>Monday – Sunday</p>
          <p>10:00 AM – 9:00 PM</p>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {contactInfo.map((info, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-5">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif font-semibold mb-2">{info.title}</h3>
              <div className="text-sm text-muted-foreground">
                {info.content}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
