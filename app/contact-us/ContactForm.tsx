"use client";

import { useState } from "react";
import { Button } from "@/components-eng/ui/button";
import { Input } from "@/components-eng/ui/input";
import { Textarea } from "@/components-eng/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components-eng/ui/select";
import { User, Mail, Phone, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { Card, CardContent } from "@/components-eng/ui/card";

export function ContactForm() {
  const { t } = useI18n();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
*New Contact Inquiry*
--------------------
*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
*Subject:* ${form.subject}
*Message:* ${form.message}
    `.trim();

    const encoded = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919067972295?text=${encoded}`, "_blank");
  };

  return (
    <Card className="max-w-lg min-h-[620px]">
      {/* ⬆ Increased overall form height */}
      <CardContent className="p-8 flex flex-col justify-center">
        <h3 className="font-serif text-xl font-semibold mb-6">
          {t.contact.sendMessage}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
<InputWithIcon
  icon={User}
  placeholder={t.form.name + "*"}
  value={form.name}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value;

    // Allow only alphabets and spaces
    if (/^[A-Za-z\s]*$/.test(value)) {
      setForm({ ...form, name: value });
    }
  }}
/>

<InputWithIcon
  icon={Mail}
  placeholder={t.form.email + "*"}
  type="email"
  value={form.email}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, email: e.target.value })
  }
/>

<InputWithIcon
  icon={Phone}
  placeholder={t.form.phone + "*"}
  type="tel"
  value={form.phone}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow only numbers
    if (/^[0-9]*$/.test(value)) {
      setForm({ ...form, phone: value });
    }
  }}
/>


          <Select
            onValueChange={(value) => setForm({ ...form, subject: value })}
          >
            <SelectTrigger className="h-12">
              <SelectValue placeholder={t.form.subject + "*"} />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="general">
                {t.contact.subjects.general}
              </SelectItem>
              <SelectItem value="booking">
                {t.contact.subjects.booking}
              </SelectItem>
              <SelectItem value="group">{t.contact.subjects.group}</SelectItem>
              <SelectItem value="custom">
                {t.contact.subjects.custom}
              </SelectItem>
              <SelectItem value="feedback">
                {t.contact.subjects.feedback}
              </SelectItem>
            </SelectContent>
          </Select>

          <Textarea
            placeholder={t.form.message + "*"}
            rows={6}
            className="resize-none"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <Button type="submit" className="w-full h-12 text-base">
            <Send className="w-4 h-4 mr-2" />
            {t.form.sendMessage}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

/* ---------- Helper ---------- */

function InputWithIcon({
  icon: Icon,
  ...props
}: {
  icon: any;
  [key: string]: any;
}) {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input {...props} className="pl-10 h-12 text-base" />
    </div>
  );
}
