"use client"

import { useI18n } from "@/lib/i18n/context"
import { HeroSection } from "@/components/hero-section"
import { ServiceCard } from "@/components/service-card"
import { Card, CardContent } from "@/components/ui/card"
import {
    Globe,
    Package,
    FileText,
    Building,
    Plane,
    Users,
    MapPin,
    User,
    IndianRupee,
    Headphones,
    Map,
    Handshake,
} from "lucide-react"

export default function ServicesClient() {
    const { t, locale } = useI18n()

    const services = [
        { icon: Globe, title: t.services.domesticInternational, description: t.services.domesticInternationalDesc, link: 'services/domestic-international-trips' },
        { icon: Package, title: t.services.customizedHolidays, description: t.services.customizedHolidaysDesc, link: 'services/customize-trip-package' },
        { icon: FileText, title: t.services.visaDocumentation, description: t.services.visaDocumentationDesc, link: 'services/visa-agent' },
        { icon: Building, title: t.services.hotelBookings, description: t.services.hotelBookingsDesc, link: 'services/hotel-booking' },
        { icon: Plane, title: t.services.airTicketing, description: t.services.airTicketingDesc, link: 'services/flight-booking' },
        { icon: Users, title: t.services.groupTours, description: t.services.groupToursDesc, link: 'services/customized-group-tours' },
    ]

    const whyChooseUs = [
        { icon: MapPin, title: t.whyChoose.experience, description: t.whyChoose.experienceDesc },
        { icon: User, title: t.whyChoose.personalized, description: t.whyChoose.personalizedDesc },
        { icon: IndianRupee, title: t.whyChoose.pricing, description: t.whyChoose.pricingDesc },
        { icon: Headphones, title: t.whyChoose.support, description: t.whyChoose.supportDesc },
        { icon: Map, title: t.whyChoose.localExpertise, description: t.whyChoose.localExpertiseDesc },
        { icon: Handshake, title: t.whyChoose.trustedPartners, description: t.whyChoose.trustedPartnersDesc },
    ]

    return (
        <div>
            <HeroSection title={t.services.title} backgroundQuery="Service-hero" />

            {/* Our Services */}
            <section className="py-12 sm:py-16" aria-labelledby="services-heading">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <header className="mb-8 sm:mb-12">
                        <h2
                            id="services-heading"
                            className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2"
                        >
                            {t.services.title}
                        </h2>
                        <div
                            className="w-12 sm:w-16 h-1 bg-primary mb-3 sm:mb-4"
                            aria-hidden="true"
                        />
                        <p className="text-muted-foreground text-sm sm:text-base">
                            {t.services.subtitle}
                        </p>
                    </header>

                    <div
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                        role="list"
                    >
                        {services.map((service, index) => (
                            <div key={index} role="listitem">
                                <ServiceCard
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                    link={service.link}
                                    locale={locale}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section
                className="py-12 sm:py-16 bg-muted/50"
                aria-labelledby="why-choose-heading"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <header className="mb-8 sm:mb-12">
                        <h2
                            id="why-choose-heading"
                            className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2"
                        >
                            {t.whyChoose.title}
                        </h2>
                        <p className="text-muted-foreground text-sm sm:text-base">
                            {t.whyChoose.subtitle}
                        </p>
                    </header>

                    <div
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                        role="list"
                    >
                        {whyChooseUs.map((item, index) => (
                            <Card
                                key={index}
                                className="bg-secondary/20 hover:bg-secondary/30 transition-colors"
                                role="listitem"
                            >
                                <CardContent className="p-4 sm:p-6 text-center">
                                    <div
                                        className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-full bg-secondary/50 flex items-center justify-center"
                                        aria-hidden="true"
                                    >
                                        <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-secondary-foreground" />
                                    </div>
                                    <h3 className="font-serif font-semibold text-foreground mb-1.5 sm:mb-2 text-sm sm:text-base">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground text-xs sm:text-sm">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
