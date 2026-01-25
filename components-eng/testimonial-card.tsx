"use client";
import { useState } from "react";
import { Star, ImageIcon } from "lucide-react";
import { Card, CardContent } from "@/components-eng/ui/card";
import { Avatar, AvatarFallback } from "@/components-eng/ui/avatar";
import { Button } from "@/components-eng/ui/button";


interface TestimonialCardProps {
  name: string;
  initials: string;
  timeAgo: string;
  rating: number;
  text: string;
  photoCount?: number;
  readmoreText: string;
  showlessText: string
}

export function TestimonialCard({
  name,
  initials,
  timeAgo,
  rating,
  text,
  photoCount,
  readmoreText,
  showlessText
}: TestimonialCardProps) {
  const [expanded, setExpanded] = useState(false);


  return (
    <Card
      className="
    group
    min-w-[280px] xs:min-w-[300px] sm:min-w-[360px]
    max-w-[400px]
    shrink-0
    rounded-2xl
    border border-border/60
    bg-background/80
    backdrop-blur
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-xl
  "
    >
      <CardContent className="p-5 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="w-10 h-10">
            <AvatarFallback
              className="
            bg-primary/15
            text-primary
            text-base
            font-semibold
          "
            >
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="text-left">
            <h4 className="text-base font-semibold text-card-foreground leading-tight">
              {name}
            </h4>
            <p className="text-xs text-muted-foreground">{timeAgo}</p>
          </div>
        </div>

        {/* Rating */}
        <div
          className="flex items-center gap-1 mb-3"
          role="img"
          aria-label={`${name} gave ${rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating
                  ? "text-yellow-500 fill-yellow-500"
                  : "text-muted-foreground/30"
                }`}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Review text */}
        <p
          className={`text-sm text-muted-foreground leading-relaxed mb-4 transition-all duration-300 ${expanded ? "" : "line-clamp-3"
            }`}
        >
          {text}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between">
          {photoCount ? (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <ImageIcon className="w-4 h-4" />
              <span>{photoCount} photos</span>
            </div>
          ) : (
            <span />
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setExpanded((prev) => !prev)}
            className="
          text-primary
          px-2
          text-sm
          opacity-80
          group-hover:opacity-100
        "
          >
            {expanded ? showlessText : readmoreText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
