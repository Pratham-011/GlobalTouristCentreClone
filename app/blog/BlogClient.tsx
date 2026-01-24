"use client";

import { useI18n } from "@/lib/i18n/context";
import { useParams } from "next/navigation";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function BlogClient() {
    const { t } = useI18n();
    const params = useParams();
    const locale = params.locale as string;

    const blogPosts = [
        {
            slug: "andaman",
            title: t.blog.andamanTitle,
            excerpt: t.blog.andamanSubtitle,
            category: t.blog.photography,
            date: t.blog.julyDate,
            author: t.blog.globalTeam,
            image: "/assets/destinations/Thumbnails/Andaman.webp",
        },
        {
            slug: "kerala",
            title: t.blog.keralaTitle,
            excerpt: t.blog.keralaSubtitle,
            category: t.blog.groupTours,
            date: t.blog.juneDate,
            author: t.blog.globalTeam,
            image: "/assets/destinations/Thumbnails/Kerala.webp",
        },
        {
            slug: null,
            title: t.blog.comingSoonTitle,
            excerpt: t.blog.comingSoonSubtitle,
            category: t.blog.comingSoon,
            date: "",
            author: "",
            image: "/assets/blog/coming-soon.webp",
            isComingSoon: true,
        },
    ];

    return (
        <div>
            <HeroSection
                title={t.blog.heroTitle}
                backgroundQuery="blog-hero"
            />

            <section className="py-12 sm:py-16" aria-labelledby="blog-heading">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <header className="mb-8 sm:mb-12">
                        <h2
                            id="blog-heading"
                            className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2"
                        >
                            {t.blog.mainTitle}
                        </h2>
                        <div
                            className="w-12 sm:w-16 h-1 bg-teal-600 mb-3 sm:mb-4"
                            aria-hidden="true"
                        />
                        <p className="text-muted-foreground text-sm sm:text-base">
                            {t.blog.mainSubtitle}
                        </p>
                    </header>

                    <div
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                        role="list"
                    >
                        {blogPosts.map((post, index) => (
                            <Card
                                key={index}
                                className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 bg-white rounded-lg p-0"
                                role="listitem"
                            >
                                <article className="h-full flex flex-col">
                                    <div className="relative aspect-video overflow-hidden rounded-t-lg">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <Badge className="absolute top-3 right-3 z-10 bg-teal-600 hover:bg-teal-700 text-white">
                                            {post.category}
                                        </Badge>
                                    </div>

                                    <CardContent className="p-5 flex-grow flex flex-col">
                                        {!post.isComingSoon && (
                                            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3.5 h-3.5 text-teal-600" />
                                                    <time>{post.date}</time>
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <User className="w-3.5 h-3.5 text-teal-600" />
                                                    {post.author}
                                                </span>
                                            </div>
                                        )}

                                        <h3 className="font-serif font-bold text-lg mb-2 line-clamp-2 text-gray-900">
                                            {post.title}
                                        </h3>

                                        <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                            {post.excerpt}
                                        </p>

                                        {!post.isComingSoon && post.slug && (
                                            <div className="mt-auto">
                                                <Link href={`/${locale}/blog/${post.slug}`}>
                                                    <Button
                                                        variant="outline"
                                                        className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white group/btn"
                                                    >
                                                        <span className="font-semibold">
                                                            {t.blog.readMore}
                                                        </span>
                                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        )}
                                    </CardContent>
                                </article>

                                {post.isComingSoon && (
                                    <div className="absolute inset-0 z-30 flex items-center justify-center">
                                        <div className="absolute inset-0 bg-white/70 backdrop-blur-[3px]" />
                                        <Button
                                            variant="default"
                                            className="relative z-40 shadow-2xl font-semibold uppercase tracking-wider px-8 py-6 text-lg bg-teal-600 hover:bg-teal-700"
                                        >
                                            {t.blog.comingSoon}
                                        </Button>
                                    </div>
                                )}
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
