import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n/getTranslations";
import BlogClient from "./BlogClient";

type PageProps = {
  params: {
    locale: string;
  };
};

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const t = getTranslations(params.locale);

  const image ="/assets/hero/blog-hero.webp";

  return {
    title: t.metadata?.blog?.title || "Blog | Global Tourist Centre",
    description: t.metadata?.blog?.description || "Discover our travel blog with inspiring travel stories, destination guides, and travel tips.",
    alternates: {
      canonical: `https://globaltouristcentre.com/${params.locale}/blog`,
    },
    openGraph: {
      title: t.metadata?.blog?.title || "Blog | Global Tourist Centre",
      description: t.metadata?.blog?.description || "Discover our travel blog with inspiring travel stories, destination guides, and travel tips.",
      images: [image],
      siteName: t.metadata?.brandname,
      type: "website",
      url: `https://globaltouristcentre.com/${params.locale}/blog`,
    },
    twitter: {
      title: t.metadata?.blog?.title || "Blog | Global Tourist Centre",
      description: t.metadata?.blog?.description || "Discover our travel blog with inspiring travel stories, destination guides, and travel tips.",
      card: "summary_large_image",
      images: [ 
        {
          url: image,
          width: 1200,
          height: 630,
          alt: t.metadata?.blog?.title || "Blog | Global Tourist Centre",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function BlogPage() {
  return <BlogClient />;
}
