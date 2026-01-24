import { notFound } from "next/navigation";
import LegalHero from "@/components/LegalHero";
import LegalPageContent from "@/components/LegalPageContent";
import { legalPages } from "@/lib/legalPages";
import type { Metadata } from "next";
import { locales } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n/getTranslations";

type Props = {
    params: {
        locale: string;
        slug: string;
    };
};

export function generateStaticParams() {
    const params = [];
    for (const locale of locales) {
        for (const slug of Object.keys(legalPages)) {
            params.push({ locale, slug });
        }
    }
    return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = params;
    const pageData = legalPages[slug as keyof typeof legalPages];
    const t = getTranslations(locale);

    if (!pageData) {
        return {
            title: "Legal | Global Tourist Centre",
            description: "Legal information and resources for Global Tourist Centre.",
        };
    }

    const translation = pageData.translations[locale as keyof typeof pageData.translations] || pageData.translations.en;
        
    const image = pageData.heroImage;

    const canonical = `https://globaltouristcentre.com/${locale}/legal/${slug}`;

    return {
        title: translation.metadata.title,
        description: translation.metadata.description,
        alternates: {
            canonical,
        },  
        openGraph: {
            title: translation.metadata.title,
            description: translation.metadata.description,
            images: [image],
            siteName: t.metadata.brandname,
            type: "website",
            url: canonical,
        },
        twitter: {
            title: translation.metadata.title,
            description: translation.metadata.description,
            card: "summary_large_image",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: translation.metadata.title,
                },
            ],
            site: t.metadata.brandname,
        },
        // keywords: t.metadata.keywords,
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default function LegalPage({ params }: Props) {
    const { locale, slug } = params;
    const pageData = legalPages[slug as keyof typeof legalPages];

    if (!pageData) {
        notFound();
    }

    // Fallback to English if translation is missing
    // @ts-ignore
    const translation = pageData.translations[locale as keyof typeof pageData.translations] || pageData.translations.en;

    return (
        <main>
            <LegalHero
                title={translation.title}
                subtitle={translation.subtitle}
                heroImage={pageData.heroImage}
            />
            <LegalPageContent
                sectionTitle={translation.sectionTitle}
                lastUpdated={translation.lastUpdated}
                sections={translation.sections}
                contactInfo={translation.contactInfo}
            />
        </main>
    );
}
