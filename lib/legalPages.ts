export type LegalContentBlock =
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] }
    | { type: "list-bold"; items: { label: string; text: string }[] };

export type LegalSection = {
    id?: string;
    title: string;
    content: LegalContentBlock[];
};

export type LegalPageTranslation = {
    metadata: {
        title: string,
        description: string
    }
    title: string;
    subtitle: string;
    sectionTitle: string;
    lastUpdated: string;
    sections: LegalSection[];
    contactInfo: {
        address: string;
        phone: string;
        email: string;
    };
};

export type LegalPageData = {
    heroImage: string;
    translations: {
        en: LegalPageTranslation;
        ru?: LegalPageTranslation;
        it?: LegalPageTranslation;
        fr?: LegalPageTranslation;
        de?: LegalPageTranslation;
    };
};

// Shared contact info for different languages
const contactInfoTranslations = {
    en: {
        address: "Address: Benaulim, Goa 403716, India",
        phone: "Phone: +91 9067972295",
        email: "Email: sales@globaltouristcentre.com",
    },
    ru: {
        address: "Адрес: Бенаулим, Гоа 403716, Индия",
        phone: "Телефон: +91 9067972295",
        email: "Электронная почта: sales@globaltouristcentre.com",
    },
    it: {
        address: "Indirizzo: Benaulim, Goa 403716, India",
        phone: "Telefono: +91 9067972295",
        email: "Posta elettronica: sales@globaltouristcentre.com",
    },
    fr: {
        address: "Adresse: Benaulim, Goa 403716, Inde",
        phone: "Téléphone: +91 9067972295",
        email: "Courriel: sales@globaltouristcentre.com",
    },
    de: {
        address: "Adresse: Benaulim, Goa 403716, Indien",
        phone: "Telefon: +91 9067972295",
        email: "E-Mail: sales@globaltouristcentre.com",
    },
};

export const legalPages: Record<string, LegalPageData> = {
    "privacy-policy": {
        heroImage: "/assets/hero/policy-hero.webp",
        translations: {
            en: {
                metadata: {
                    title: "Privacy Policy | Global Tourist Centre",
                    description: "Learn how Global Tourist Centre protects your personal information and respects your privacy when you use our tour services."
                },
                title: "Privacy Policy",
                subtitle: "Your privacy is important to us",
                sectionTitle: "Our Commitment to Your Privacy",
                lastUpdated: "Last updated: December 2023",
                contactInfo: contactInfoTranslations.en,
                sections: [
                    {
                        title: "1. Information We Collect",
                        content: [
                            { type: "paragraph", text: 'Global Tourist Centre ("we," "us," or "our") is committed to protecting the privacy of our customers. We may collect personal information from you in a variety of ways, including when you book a tour, request a quote, or contact us for information. The types of personal information we may collect include:' },
                            {
                                type: "list-bold", items: [
                                    { label: "Personal Identification Information:", text: "Your name, date of birth, and nationality." },
                                    { label: "Contact Information:", text: "Your address, email address, and phone number." },
                                    { label: "Travel and Booking Details:", text: "Passport details, visa information, booking history, travel preferences, and frequent flyer numbers." },
                                    { label: "Technical Information:", text: "IP address, browser type, and browsing data collected through cookies when you visit our website." },
                                    { label: "Other Information:", text: "Any other information you voluntarily provide to us, such as dietary requirements or medical conditions relevant to your travel plans." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "2. How We Use Your Information",
                        content: [
                            { type: "paragraph", text: "We use the information we collect for the following purposes:" },
                            {
                                type: "list", items: [
                                    "To provide and manage our services: process bookings, manage travel arrangements",
                                    "To communicate with you: send confirmations, itineraries, and important updates",
                                    "For customer support: respond to inquiries and resolve issues",
                                    "For marketing and promotions: send information about products and services (only with your consent)",
                                    "To improve our services: analyze usage and enhance our offerings",
                                    "For legal and security purposes: comply with obligations and protect rights",
                                ]
                            },
                        ],
                    },
                    {
                        title: "3. Sharing and Disclosure of Your Information",
                        content: [
                            { type: "paragraph", text: "We do not sell or rent your personal information to third parties. We may share your information with:" },
                            {
                                type: "list-bold", items: [
                                    { label: "Third-party service providers:", text: "airlines, hotels, transport operators essential to your travel" },
                                    { label: "Visa facilitation services:", text: "embassies or consulates when providing visa assistance" },
                                    { label: "Business partners:", text: "trusted partners for joint services or promotions" },
                                    { label: "Legal authorities:", text: "when required by law or valid government request" },
                                ]
                            },
                            { type: "paragraph", text: "These third parties are obligated to protect your information and are not authorized to use it for any other purpose." },
                        ],
                    },
                    {
                        title: "4. Data Security",
                        content: [
                            { type: "paragraph", text: "We are committed to protecting your information. We have implemented appropriate administrative, technical, and physical security measures to protect your personal data from unauthorized access, use, alteration, or destruction. However, please be aware that no method of transmission over the internet is 100% secure." },
                        ],
                    },
                    {
                        title: "5. Use of Cookies",
                        content: [
                            { type: "paragraph", text: 'Our website uses "cookies" to enhance your browsing experience. Cookies are small data files stored on your device that help us understand your preferences and tailor our website content for you. You can choose to accept or decline cookies through your browser settings.' },
                        ],
                    },
                    {
                        title: "6. Your Rights and Choices",
                        content: [
                            { type: "paragraph", text: "You have certain rights regarding your personal information:" },
                            {
                                type: "list-bold", items: [
                                    { label: "Access and Correction:", text: "You have the right to access and update the personal information we hold about you." },
                                    { label: "Opt-Out:", text: "You can opt-out of receiving marketing communications from us at any time." },
                                    { label: "Withdrawal of Consent:", text: "You may withdraw your consent for us to use your personal information." },
                                ]
                            },
                            { type: "paragraph", text: "Please note that withdrawing consent may prevent us from providing you with certain services." },
                        ],
                    },
                    {
                        title: "7. Changes to This Privacy Policy",
                        content: [
                            { type: "paragraph", text: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.' },
                        ],
                    },
                    {
                        id: "contact",
                        title: "8. Contact Us",
                        content: [
                            { type: "paragraph", text: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:" },
                        ],
                    },
                ],
            },
            ru: {
                metadata: {
                    title: "Политика конфиденциальности | Global Tourist Centre",
                    description: "Узнайте, как Global Tourist Centre защищает вашу личную информацию и уважает вашу конфиденциальность при использовании наших туристических услуг."
                },
                title: "Политика конфиденциальности",
                subtitle: "Ваша конфиденциальность важна для нас",
                sectionTitle: "Наши обязательства по защите вашей конфиденциальности",
                lastUpdated: "Последнее обновление: Декабрь 2023",
                contactInfo: contactInfoTranslations.ru,
                sections: [
                    {
                        title: "1. Какую информацию мы собираем",
                        content: [
                            { type: "paragraph", text: 'Global Tourist Centre («мы» или «наш») стремится защитить конфиденциальность наших клиентов. Мы можем собирать личную информацию о вас различными способами, в том числе когда вы бронируете тур, запрашиваете цену или связываетесь с нами для получения информации.' },
                            {
                                type: "list-bold", items: [
                                    { label: "Персональные данные:", text: "Ваше имя, дата рождения и гражданство." },
                                    { label: "Контактная информация:", text: "Ваш адрес, электронная почта и номер телефона." },
                                    { label: "Данные о путешествиях:", text: "Данные паспорта, информация о визе, история бронирований." },
                                    { label: "Техническая информация:", text: "IP-адрес, тип браузера и данные просмотра." },
                                    { label: "Другая информация:", text: "Любая информация, которую вы добровольно предоставляете." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "2. Как мы используем вашу информацию",
                        content: [
                            { type: "paragraph", text: "Мы используем собранную информацию для следующих целей:" },
                            {
                                type: "list", items: [
                                    "Для предоставления услуг: обработка бронирований, организация путешествий",
                                    "Для связи с вами: отправка подтверждений и обновлений",
                                    "Для поддержки клиентов: ответы на запросы",
                                    "Для маркетинга: отправка информации (только с вашего согласия)",
                                    "Для улучшения услуг: анализ использования",
                                    "Для юридических целей: соблюдение обязательств",
                                ]
                            },
                        ],
                    },
                    {
                        title: "3. Передача вашей информации",
                        content: [
                            { type: "paragraph", text: "Мы не продаём вашу личную информацию третьим лицам. Мы можем делиться информацией с:" },
                            {
                                type: "list-bold", items: [
                                    { label: "Поставщики услуг:", text: "авиакомпании, отели, транспортные операторы" },
                                    { label: "Визовые услуги:", text: "посольства при оказании визовой помощи" },
                                    { label: "Партнёры:", text: "доверенные партнёры для совместных услуг" },
                                    { label: "Правовые органы:", text: "когда это требуется по закону" },
                                ]
                            },
                        ],
                    },
                    {
                        title: "4. Безопасность данных",
                        content: [
                            { type: "paragraph", text: "Мы стремимся защитить вашу информацию с помощью соответствующих мер безопасности." },
                        ],
                    },
                    {
                        title: "5. Использование файлов cookie",
                        content: [
                            { type: "paragraph", text: "Наш сайт использует файлы cookie для улучшения вашего опыта просмотра." },
                        ],
                    },
                    {
                        title: "6. Ваши права",
                        content: [
                            { type: "paragraph", text: "У вас есть права в отношении вашей личной информации:" },
                            {
                                type: "list-bold", items: [
                                    { label: "Доступ:", text: "Право доступа к вашей информации." },
                                    { label: "Отказ:", text: "Отказ от маркетинговых сообщений." },
                                    { label: "Отзыв согласия:", text: "Отзыв согласия на использование данных." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "7. Изменения политики",
                        content: [
                            { type: "paragraph", text: "Мы можем обновлять эту политику. Изменения будут опубликованы на этой странице." },
                        ],
                    },
                    {
                        id: "contact",
                        title: "8. Свяжитесь с нами",
                        content: [
                            { type: "paragraph", text: "Если у вас есть вопросы, свяжитесь с нами:" },
                        ],
                    },
                ],
            },
            it: {
                metadata: {
                    title: "Informativa sulla Privacy | Global Tourist Centre",
                    description: "Scopri come Global Tourist Centre protegge le tue informazioni personali e rispetta la tua privacy quando utilizzi i nostri servizi di viaggio."
                },
                title: "Informativa sulla Privacy",
                subtitle: "La tua privacy è importante per noi",
                sectionTitle: "Il nostro impegno per la tua privacy",
                lastUpdated: "Ultimo aggiornamento: Dicembre 2023",
                contactInfo: contactInfoTranslations.it,
                sections: [
                    {
                        title: "1. Informazioni che raccogliamo",
                        content: [
                            { type: "paragraph", text: "Global Tourist Centre (\"noi\" o \"nostro\") si impegna a proteggere la privacy dei nostri clienti. Possiamo raccogliere informazioni personali in vari modi, incluso quando prenoti un tour, richiedi un preventivo o ci contatti per informazioni. I tipi di informazioni personali che possiamo raccogliere includono:" },
                            {
                                type: "list-bold", items: [
                                    { label: "Dati di identificazione personale:", text: "Il tuo nome, data di nascita e nazionalità." },
                                    { label: "Informazioni di contatto:", text: "Il tuo indirizzo, indirizzo email e numero di telefono." },
                                    { label: "Dettagli di viaggio e prenotazione:", text: "Dettagli del passaporto, informazioni sul visto, cronologia delle prenotazioni, preferenze di viaggio e numeri frequent flyer." },
                                    { label: "Informazioni tecniche:", text: "Indirizzo IP, tipo di browser e dati di navigazione raccolti tramite cookie quando visiti il nostro sito web." },
                                    { label: "Altre informazioni:", text: "Qualsiasi altra informazione che ci fornisci volontariamente, come requisiti dietetici o condizioni mediche rilevanti per i tuoi piani di viaggio." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "2. Come utilizziamo le tue informazioni",
                        content: [
                            { type: "paragraph", text: "Utilizziamo le informazioni che raccogliamo per i seguenti scopi:" },
                            {
                                type: "list", items: [
                                    "Per fornire e gestire i nostri servizi: elaborare prenotazioni, gestire accordi di viaggio",
                                    "Per comunicare con te: inviare conferme, itinerari e aggiornamenti importanti",
                                    "Per il supporto clienti: rispondere alle richieste e risolvere i problemi",
                                    "Per marketing e promozioni: inviare informazioni su prodotti e servizi (solo con il tuo consenso)",
                                    "Per migliorare i servizi: analizzare l'utilizzo e migliorare le nostre offerte",
                                    "Per scopi legali e di sicurezza: rispettare gli obblighi e proteggere i diritti",
                                ]
                            },
                        ],
                    },
                    {
                        title: "3. Condivisione delle informazioni",
                        content: [
                            { type: "paragraph", text: "Non vendiamo né affittiamo le tue informazioni personali a terzi. Possiamo condividere le tue informazioni con:" },
                            {
                                type: "list-bold", items: [
                                    { label: "Fornitori di servizi terzi:", text: "compagnie aeree, hotel, operatori di trasporto essenziali per il tuo viaggio" },
                                    { label: "Servizi di facilitazione visti:", text: "ambasciate o consolati quando forniamo assistenza per i visti" },
                                    { label: "Partner commerciali:", text: "partner fidati per servizi congiunti o promozioni" },
                                    { label: "Autorità legali:", text: "quando richiesto dalla legge o da una valida richiesta governativa" },
                                ]
                            },
                            { type: "paragraph", text: "Questi terzi sono obbligati a proteggere le tue informazioni e non sono autorizzati a utilizzarle per altri scopi." },
                        ],
                    },
                    {
                        title: "4. Sicurezza dei dati",
                        content: [
                            { type: "paragraph", text: "Ci impegniamo a proteggere le tue informazioni. Abbiamo implementato misure di sicurezza amministrative, tecniche e fisiche appropriate per proteggere i tuoi dati personali da accesso, uso, alterazione o distruzione non autorizzati. Tuttavia, tieni presente che nessun metodo di trasmissione su Internet è sicuro al 100%." },
                        ],
                    },
                    {
                        title: "5. Uso dei cookie",
                        content: [
                            { type: "paragraph", text: "Il nostro sito web utilizza \"cookie\" per migliorare la tua esperienza di navigazione. I cookie sono piccoli file di dati memorizzati sul tuo dispositivo che ci aiutano a comprendere le tue preferenze e personalizzare il contenuto del nostro sito web per te. Puoi scegliere di accettare o rifiutare i cookie tramite le impostazioni del tuo browser." },
                        ],
                    },
                    {
                        title: "6. I tuoi diritti e le tue scelte",
                        content: [
                            { type: "paragraph", text: "Hai determinati diritti riguardo alle tue informazioni personali:" },
                            {
                                type: "list-bold", items: [
                                    { label: "Accesso e correzione:", text: "Hai il diritto di accedere e aggiornare le informazioni personali che conserviamo su di te." },
                                    { label: "Opt-Out:", text: "Puoi scegliere di non ricevere comunicazioni di marketing da noi in qualsiasi momento." },
                                    { label: "Revoca del consenso:", text: "Puoi ritirare il tuo consenso all'utilizzo delle tue informazioni personali." },
                                ]
                            },
                            { type: "paragraph", text: "Tieni presente che la revoca del consenso potrebbe impedirci di fornirti determinati servizi." },
                        ],
                    },
                    {
                        title: "7. Modifiche a questa informativa sulla privacy",
                        content: [
                            { type: "paragraph", text: "Potremmo aggiornare questa Informativa sulla Privacy di tanto in tanto. Ti informeremo di eventuali modifiche pubblicando la nuova politica su questa pagina e aggiornando la data di \"Ultimo aggiornamento\". Ti incoraggiamo a rivedere periodicamente questa politica." },
                        ],
                    },
                    {
                        id: "contact",
                        title: "8. Contattaci",
                        content: [
                            { type: "paragraph", text: "Se hai domande o dubbi riguardo a questa Informativa sulla Privacy o alle nostre pratiche sui dati, contattaci:" },
                        ],
                    },
                ],
            },
            fr: {
                metadata: {
                    title: "Politique de Confidentialité | Global Tourist Centre",
                    description: "Découvrez comment Global Tourist Centre protège vos informations personnelles et respecte votre vie privée lorsque vous utilisez nos services de voyage."
                },
                title: "Politique de Confidentialité",
                subtitle: "Votre vie privée est importante pour nous",
                sectionTitle: "Notre engagement envers votre vie privée",
                lastUpdated: "Dernière mise à jour: Décembre 2023",
                contactInfo: contactInfoTranslations.fr,
                sections: [
                    {
                        title: "1. Informations que nous collectons",
                        content: [
                            { type: "paragraph", text: "Global Tourist Centre (\"nous\" ou \"notre\") s'engage à protéger la vie privée de nos clients. Nous pouvons collecter des informations personnelles de diverses manières, notamment lorsque vous réservez un voyage, demandez un devis ou nous contactez pour des informations. Les types d'informations personnelles que nous pouvons collecter comprennent:" },
                            {
                                type: "list-bold", items: [
                                    { label: "Informations d'identification personnelle:", text: "Votre nom, date de naissance et nationalité." },
                                    { label: "Coordonnées:", text: "Votre adresse, adresse e-mail et numéro de téléphone." },
                                    { label: "Détails de voyage et de réservation:", text: "Détails du passeport, informations de visa, historique de réservation, préférences de voyage et numéros de fidélité." },
                                    { label: "Informations techniques:", text: "Adresse IP, type de navigateur et données de navigation collectées via des cookies lorsque vous visitez notre site web." },
                                    { label: "Autres informations:", text: "Toute autre information que vous nous fournissez volontairement, comme les exigences alimentaires ou les conditions médicales pertinentes pour vos projets de voyage." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "2. Comment nous utilisons vos informations",
                        content: [
                            { type: "paragraph", text: "Nous utilisons les informations que nous collectons aux fins suivantes:" },
                            {
                                type: "list", items: [
                                    "Pour fournir et gérer nos services: traiter les réservations, gérer les arrangements de voyage",
                                    "Pour communiquer avec vous: envoyer des confirmations, des itinéraires et des mises à jour importantes",
                                    "Pour le support client: répondre aux demandes et résoudre les problèmes",
                                    "Pour le marketing et les promotions: envoyer des informations sur les produits et services (uniquement avec votre consentement)",
                                    "Pour améliorer nos services: analyser l'utilisation et améliorer nos offres",
                                    "Pour des fins légales et de sécurité: respecter les obligations et protéger les droits",
                                ]
                            },
                        ],
                    },
                    {
                        title: "3. Partage et divulgation de vos informations",
                        content: [
                            { type: "paragraph", text: "Nous ne vendons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations avec:" },
                            {
                                type: "list-bold", items: [
                                    { label: "Prestataires de services tiers:", text: "compagnies aériennes, hôtels, opérateurs de transport essentiels à votre voyage" },
                                    { label: "Services de facilitation de visa:", text: "ambassades ou consulats lors de l'assistance visa" },
                                    { label: "Partenaires commerciaux:", text: "partenaires de confiance pour des services ou promotions conjoints" },
                                    { label: "Autorités légales:", text: "lorsque requis par la loi ou une demande gouvernementale valide" },
                                ]
                            },
                            { type: "paragraph", text: "Ces tiers sont tenus de protéger vos informations et ne sont pas autorisés à les utiliser à d'autres fins." },
                        ],
                    },
                    {
                        title: "4. Sécurité des données",
                        content: [
                            { type: "paragraph", text: "Nous nous engageons à protéger vos informations. Nous avons mis en place des mesures de sécurité administratives, techniques et physiques appropriées pour protéger vos données personnelles contre l'accès, l'utilisation, l'altération ou la destruction non autorisés. Cependant, veuillez noter qu'aucune méthode de transmission sur Internet n'est sécurisée à 100%." },
                        ],
                    },
                    {
                        title: "5. Utilisation des cookies",
                        content: [
                            { type: "paragraph", text: "Notre site web utilise des \"cookies\" pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers de données stockés sur votre appareil qui nous aident à comprendre vos préférences et à personnaliser le contenu de notre site web pour vous. Vous pouvez choisir d'accepter ou de refuser les cookies via les paramètres de votre navigateur." },
                        ],
                    },
                    {
                        title: "6. Vos droits et vos choix",
                        content: [
                            { type: "paragraph", text: "Vous avez certains droits concernant vos informations personnelles:" },
                            {
                                type: "list-bold", items: [
                                    { label: "Accès et correction:", text: "Vous avez le droit d'accéder et de mettre à jour les informations personnelles que nous détenons vous concernant." },
                                    { label: "Désabonnement:", text: "Vous pouvez vous désabonner des communications marketing de notre part à tout moment." },
                                    { label: "Retrait du consentement:", text: "Vous pouvez retirer votre consentement à l'utilisation de vos informations personnelles." },
                                ]
                            },
                            { type: "paragraph", text: "Veuillez noter que le retrait du consentement peut nous empêcher de vous fournir certains services." },
                        ],
                    },
                    {
                        title: "7. Modifications de cette politique de confidentialité",
                        content: [
                            { type: "paragraph", text: "Nous pouvons mettre à jour cette Politique de Confidentialité de temps en temps. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page et en mettant à jour la date de \"Dernière mise à jour\". Nous vous encourageons à consulter périodiquement cette politique." },
                        ],
                    },
                    {
                        id: "contact",
                        title: "8. Nous contacter",
                        content: [
                            { type: "paragraph", text: "Si vous avez des questions ou des préoccupations concernant cette Politique de Confidentialité ou nos pratiques en matière de données, veuillez nous contacter:" },
                        ],
                    },
                ],
            },
            de: {
metadata: {
  title: "Datenschutzerklärung | Global Tourist Centre",
  description: "Erfahren Sie, wie Global Tourist Centre Ihre persönlichen Daten schützt und Ihre Privatsphäre respektiert, wenn Sie unsere Reisedienstleistungen nutzen."
},

                title: "Datenschutzrichtlinie",
                subtitle: "Ihre Privatsphäre ist uns wichtig",
                sectionTitle: "Unser Engagement für Ihre Privatsphäre",
                lastUpdated: "Letzte Aktualisierung: Dezember 2023",
                contactInfo: contactInfoTranslations.de,
                sections: [
                    {
                        title: "1. Informationen, die wir sammeln",
                        content: [
                            { type: "paragraph", text: "Global Tourist Centre (\"wir\" oder \"unser\") verpflichtet sich, die Privatsphäre unserer Kunden zu schützen. Wir können personenbezogene Daten auf verschiedene Weise von Ihnen erfassen, unter anderem wenn Sie eine Tour buchen, ein Angebot anfordern oder uns um Informationen bitten. Zu den Arten von personenbezogenen Daten, die wir erfassen können, gehören:" },
                            {
                                type: "list-bold", items: [
                                    { label: "Persönliche Identifikationsdaten:", text: "Ihr Name, Geburtsdatum und Nationalität." },
                                    { label: "Kontaktinformationen:", text: "Ihre Adresse, E-Mail-Adresse und Telefonnummer." },
                                    { label: "Reise- und Buchungsdetails:", text: "Passdaten, Visainformationen, Buchungshistorie, Reisepräferenzen und Vielfliegernummern." },
                                    { label: "Technische Informationen:", text: "IP-Adresse, Browsertyp und Browsing-Daten, die durch Cookies gesammelt werden, wenn Sie unsere Website besuchen." },
                                    { label: "Andere Informationen:", text: "Alle anderen Informationen, die Sie uns freiwillig zur Verfügung stellen, wie z. B. Ernährungsbedürfnisse oder medizinische Bedingungen, die für Ihre Reisepläne relevant sind." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "2. Wie wir Ihre Informationen verwenden",
                        content: [
                            { type: "paragraph", text: "Wir verwenden die von uns gesammelten Informationen für folgende Zwecke:" },
                            {
                                type: "list", items: [
                                    "Um unsere Dienstleistungen bereitzustellen und zu verwalten: Buchungen bearbeiten, Reisearrangements verwalten",
                                    "Um mit Ihnen zu kommunizieren: Bestätigungen, Reiserouten und wichtige Updates senden",
                                    "Für den Kundensupport: Anfragen beantworten und Probleme lösen",
                                    "Für Marketing und Werbung: Informationen über Produkte und Dienstleistungen senden (nur mit Ihrer Zustimmung)",
                                    "Um unsere Dienstleistungen zu verbessern: Nutzung analysieren und unsere Angebote verbessern",
                                    "Für rechtliche und sicherheitsrelevante Zwecke: Verpflichtungen einhalten und Rechte schützen",
                                ]
                            },
                        ],
                    },
                    {
                        title: "3. Weitergabe und Offenlegung Ihrer Informationen",
                        content: [
                            { type: "paragraph", text: "Wir verkaufen oder vermieten Ihre personenbezogenen Daten nicht an Dritte. Wir können Ihre Informationen teilen mit:" },
                            {
                                type: "list-bold", items: [
                                    { label: "Drittanbieter:", text: "Fluggesellschaften, Hotels, Transportunternehmen, die für Ihre Reise unerlässlich sind" },
                                    { label: "Visa-Erleichterungsdienste:", text: "Botschaften oder Konsulate bei der Visahilfe" },
                                    { label: "Geschäftspartner:", text: "vertrauenswürdige Partner für gemeinsame Dienstleistungen oder Werbeaktionen" },
                                    { label: "Rechtsbehörden:", text: "wenn gesetzlich vorgeschrieben oder auf gültige behördliche Anfrage" },
                                ]
                            },
                            { type: "paragraph", text: "Diese Dritten sind verpflichtet, Ihre Informationen zu schützen und dürfen sie nicht für andere Zwecke verwenden." },
                        ],
                    },
                    {
                        title: "4. Datensicherheit",
                        content: [
                            { type: "paragraph", text: "Wir verpflichten uns, Ihre Informationen zu schützen. Wir haben angemessene administrative, technische und physische Sicherheitsmaßnahmen implementiert, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Nutzung, Änderung oder Zerstörung zu schützen. Bitte beachten Sie jedoch, dass keine Übertragungsmethode über das Internet zu 100% sicher ist." },
                        ],
                    },
                    {
                        title: "5. Verwendung von Cookies",
                        content: [
                            { type: "paragraph", text: "Unsere Website verwendet \"Cookies\", um Ihr Surferlebnis zu verbessern. Cookies sind kleine Daten, die auf Ihrem Gerät gespeichert werden und uns helfen, Ihre Präferenzen zu verstehen und unseren Website-Inhalt für Sie anzupassen. Sie können wählen, ob Sie Cookies über Ihre Browsereinstellungen akzeptieren oder ablehnen möchten." },
                        ],
                    },
                    {
                        title: "6. Ihre Rechte und Wahlmöglichkeiten",
                        content: [
                            { type: "paragraph", text: "Sie haben bestimmte Rechte in Bezug auf Ihre personenbezogenen Daten:" },
                            {
                                type: "list-bold", items: [
                                    { label: "Zugriff und Korrektur:", text: "Sie haben das Recht, auf die personenbezogenen Daten, die wir über Sie speichern, zuzugreifen und diese zu aktualisieren." },
                                    { label: "Opt-Out:", text: "Sie können sich jederzeit von unseren Marketingmitteilungen abmelden." },
                                    { label: "Widerruf der Einwilligung:", text: "Sie können Ihre Einwilligung zur Nutzung Ihrer personenbezogenen Daten widerrufen." },
                                ]
                            },
                            { type: "paragraph", text: "Bitte beachten Sie, dass der Widerruf der Einwilligung uns daran hindern kann, Ihnen bestimmte Dienstleistungen anzubieten." },
                        ],
                    },
                    {
                        title: "7. Änderungen dieser Datenschutzrichtlinie",
                        content: [
                            { type: "paragraph", text: "Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über Änderungen informieren, indem wir die neue Richtlinie auf dieser Seite veröffentlichen und das Datum der \"Letzten Aktualisierung\" aktualisieren. Wir empfehlen Ihnen, diese Richtlinie regelmäßig zu überprüfen." },
                        ],
                    },
                    {
                        id: "contact",
                        title: "8. Kontaktieren Sie uns",
                        content: [
                            { type: "paragraph", text: "Wenn Sie Fragen oder Bedenken zu dieser Datenschutzrichtlinie oder unseren Datenpraktiken haben, kontaktieren Sie uns bitte:" },
                        ],
                    },
                ],
            },
        },
    },
    "terms-and-conditions": {
        heroImage: "/assets/hero/terms-hero.webp",
        translations: {
            en: {
                metadata: {
                    title: "Terms & Conditions | Global Tourist Centre",
                    description: "Read the terms and conditions for using Global Tourist Centre's tour services and booking tours with us." 
                },
                title: "Terms & Conditions",
                subtitle: "Please read these terms carefully before using our services",
                sectionTitle: "Booking Terms & Conditions",
                lastUpdated: "Last updated: December 2023",
                contactInfo: contactInfoTranslations.en,
                sections: [
                    {
                        title: "1. Our Services",
                        content: [
                            { type: "paragraph", text: "Global Tourist Centre is a travel and tourism company based in Goa, India. We specialize in providing personalized domestic and international tour packages, flight booking, visa assistance, and currency exchange services." },
                        ],
                    },
                    {
                        title: "2. Booking and Payment",
                        content: [
                            {
                                type: "list-bold", items: [
                                    { label: "Booking Confirmation:", text: "A booking is considered confirmed only after we receive the initial deposit or full payment." },
                                    { label: "Payment Schedule:", text: "The payment schedule will be provided at the time of booking." },
                                    { label: "Payment Methods:", text: "We accept bank transfer, credit/debit cards, and online payment methods." },
                                    { label: "Pricing:", text: "All prices are quoted per-person and include all applicable taxes." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "3. Cancellation and Refunds",
                        content: [
                            { type: "paragraph", text: "If you wish to cancel your booking, you must notify us in writing. Cancellation charges apply:" },
                            {
                                type: "list", items: [
                                    "90+ days before departure: Loss of booking deposit",
                                    "60-89 days: 25% of total cost",
                                    "30-59 days: 50% of total cost",
                                    "Less than 30 days: 100% (no refund)",
                                    "No Show: 100% (no refund)",
                                ]
                            },
                            { type: "paragraph", text: "Visa fees and flight tickets are non-refundable once booked. Refunds are processed within 15-30 working days." },
                        ],
                    },
                    {
                        title: "4. Itinerary Changes",
                        content: [
                            { type: "paragraph", text: "We reserve the right to modify itineraries due to unforeseen circumstances. Additional costs from such changes are your responsibility." },
                        ],
                    },
                    {
                        title: "5. Your Responsibilities",
                        content: [
                            {
                                type: "list-bold", items: [
                                    { label: "Passport and Visa:", text: "Ensure valid passport (6+ months validity) and obtain necessary visas." },
                                    { label: "Travel Insurance:", text: "We recommend comprehensive travel insurance." },
                                    { label: "Health and Fitness:", text: "Ensure you are fit for your chosen tour." },
                                    { label: "Conduct:", text: "Behave appropriately without disrupting other travelers." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "6. Our Liability",
                        content: [
                            {
                                type: "list-bold", items: [
                                    { label: "Third-Party Suppliers:", text: "We are not liable for acts of third-party suppliers." },
                                    { label: "Limitation of Liability:", text: "Our liability is limited to the cost of your tour." },
                                    { label: "Force Majeure:", text: "We are not liable for events beyond our control." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "7. Jurisdiction",
                        content: [
                            { type: "paragraph", text: "These Terms are governed by the laws of India. Disputes are subject to courts in Goa." },
                        ],
                    },
                    {
                        id: "contact",
                        title: "8. Contact Us",
                        content: [
                            { type: "paragraph", text: "For questions about these Terms, please contact us:" },
                        ],
                    },
                ],
            },
            ru: {
metadata: {
  title: "Условия и положения | Global Tourist Centre",
  description: "Ознакомьтесь с условиями использования туристических услуг Global Tourist Centre и бронирования туров у нас."
},
                title: "Условия и положения",
                subtitle: "Пожалуйста, внимательно прочитайте условия",
                sectionTitle: "Условия бронирования",
                lastUpdated: "Последнее обновление: Декабрь 2023",
                contactInfo: contactInfoTranslations.ru,
                sections: [
                    {
                        title: "1. Наши услуги",
                        content: [
                            { type: "paragraph", text: "Global Tourist Centre — туристическая компания в Гоа, Индия. Мы специализируемся на турпакетах, бронировании рейсов и визовой поддержке." },
                        ],
                    },
                    {
                        title: "2. Бронирование и оплата",
                        content: [
                            {
                                type: "list-bold", items: [
                                    { label: "Подтверждение:", text: "Бронирование подтверждено после получения депозита или полной оплаты." },
                                    { label: "График оплаты:", text: "Предоставляется при бронировании." },
                                    { label: "Способы оплаты:", text: "Банковский перевод, карты, онлайн-платежи." },
                                    { label: "Цены:", text: "Указаны на человека, включая налоги." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "3. Отмена и возврат",
                        content: [
                            { type: "paragraph", text: "При отмене уведомите нас письменно. Применяются сборы:" },
                            {
                                type: "list", items: [
                                    "90+ дней: потеря депозита",
                                    "60-89 дней: 25% стоимости",
                                    "30-59 дней: 50% стоимости",
                                    "Менее 30 дней: 100% (без возврата)",
                                ]
                            },
                        ],
                    },
                    {
                        title: "4. Изменения маршрута",
                        content: [
                            { type: "paragraph", text: "Мы можем изменять маршрут из-за непредвиденных обстоятельств." },
                        ],
                    },
                    {
                        title: "5. Ваши обязанности",
                        content: [
                            {
                                type: "list-bold", items: [
                                    { label: "Паспорт и виза:", text: "Обеспечьте действующий паспорт и визы." },
                                    { label: "Страховка:", text: "Рекомендуем туристическую страховку." },
                                    { label: "Здоровье:", text: "Убедитесь в физической готовности." },
                                    { label: "Поведение:", text: "Ведите себя уважительно." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "6. Наша ответственность",
                        content: [
                            {
                                type: "list-bold", items: [
                                    { label: "Поставщики:", text: "Мы не несём ответственности за действия поставщиков." },
                                    { label: "Ограничение:", text: "Ответственность ограничена стоимостью тура." },
                                    { label: "Форс-мажор:", text: "Не отвечаем за события вне контроля." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "7. Юрисдикция",
                        content: [
                            { type: "paragraph", text: "Условия регулируются законами Индии. Споры — в судах Гоа." },
                        ],
                    },
                    {
                        id: "contact",
                        title: "8. Свяжитесь с нами",
                        content: [
                            { type: "paragraph", text: "Вопросы? Свяжитесь с нами:" },
                        ],
                    },
                ],
            },
            it: {
metadata: {
  title: "Termini e condizioni | Global Tourist Centre",
  description: "Leggi i termini e le condizioni per l’utilizzo dei servizi turistici di Global Tourist Centre e per la prenotazione dei tour con noi."
},
                title: "Termini e Condizioni",
                subtitle: "Si prega di leggere attentamente questi termini prima di utilizzare i nostri servizi",
                sectionTitle: "Termini e Condizioni di Prenotazione",
                lastUpdated: "Ultimo aggiornamento: Dicembre 2023",
                contactInfo: contactInfoTranslations.it,
                sections: [
                    {
                        title: "1. I nostri servizi",
                        content: [
                            { type: "paragraph", text: "Global Tourist Centre è una società di viaggi e turismo con sede a Goa, India. Siamo specializzati nella fornitura di pacchetti turistici personalizzati nazionali e internazionali, prenotazione di voli, assistenza visti e servizi di cambio valuta." },
                        ],
                    },
                    {
                        title: "2. Prenotazione e pagamento",
                        content: [
                            {
                                type: "list-bold", items: [
                                    { label: "Conferma della prenotazione:", text: "Una prenotazione è considerata confermata solo dopo aver ricevuto il deposito iniziale o il pagamento completo." },
                                    { label: "Piano di pagamento:", text: "Il piano di pagamento sarà fornito al momento della prenotazione." },
                                    { label: "Metodi di pagamento:", text: "Accettiamo bonifici bancari, carte di credito/debito e metodi di pagamento online." },
                                    { label: "Prezzi:", text: "Tutti i prezzi sono quotati per persona e includono tutte le tasse applicabili." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "3. Cancellazione e rimborsi",
                        content: [
                            { type: "paragraph", text: "Se desideri cancellare la tua prenotazione, devi informarci per iscritto. Si applicano le spese di cancellazione:" },
                            {
                                type: "list", items: [
                                    "90+ giorni prima della partenza: Perdita del deposito di prenotazione",
                                    "60-89 giorni: 25% del costo totale",
                                    "30-59 giorni: 50% del costo totale",
                                    "Meno di 30 giorni: 100% (nessun rimborso)",
                                    "No Show: 100% (nessun rimborso)",
                                ]
                            },
                            { type: "paragraph", text: "Le spese per i visti e i biglietti aerei non sono rimborsabili una volta prenotati. I rimborsi vengono elaborati entro 15-30 giorni lavorativi." },
                        ],
                    },
                    {
                        title: "4. Modifiche all'itinerario",
                        content: [
                            { type: "paragraph", text: "Ci riserviamo il diritto di modificare gli itinerari a causa di circostanze impreviste. I costi aggiuntivi derivanti da tali modifiche sono a tuo carico." },
                        ],
                    },
                    {
                        title: "5. Le tue responsabilità",
                        content: [
                            {
                                type: "list-bold", items: [
                                    { label: "Passaporto e Visto:", text: "Assicurati di avere un passaporto valido (validità 6+ mesi) e ottieni i visti necessari." },
                                    { label: "Assicurazione di viaggio:", text: "Raccomandiamo un'assicurazione di viaggio completa." },
                                    { label: "Salute e forma fisica:", text: "Assicurati di essere idoneo per il tour scelto." },
                                    { label: "Condotta:", text: "Comportati in modo appropriato senza disturbare gli altri viaggiatori." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "6. La nostra responsabilità",
                        content: [
                            {
                                type: "list-bold", items: [
                                    { label: "Fornitori terzi:", text: "Non siamo responsabili per gli atti di fornitori terzi." },
                                    { label: "Limitazione di responsabilità:", text: "La nostra responsabilità è limitata al costo del tuo tour." },
                                    { label: "Forza maggiore:", text: "Non siamo responsabili per eventi al di fuori del nostro controllo." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "7. Giurisdizione",
                        content: [
                            { type: "paragraph", text: "Questi Termini sono regolati dalle leggi dell'India. Le controversie sono soggette ai tribunali di Goa." },
                        ],
                    },
                    {
                        id: "contact",
                        title: "8. Contattaci",
                        content: [
                            { type: "paragraph", text: "Per domande su questi Termini, contattaci:" },
                        ],
                    },
                ],
            },
            fr: {
metadata: {
  title: "Conditions générales | Global Tourist Centre",
  description: "Consultez les conditions générales d’utilisation des services de voyage de Global Tourist Centre et de réservation de circuits avec nous."
},
                title: "Conditions Générales",
                subtitle: "Veuillez lire attentivement ces conditions avant d'utiliser nos services",
                sectionTitle: "Conditions de Réservation",
                lastUpdated: "Dernière mise à jour: Décembre 2023",
                contactInfo: contactInfoTranslations.fr,
                sections: [
                    {
                        title: "1. Nos Services",
                        content: [
                            { type: "paragraph", text: "Global Tourist Centre est une agence de voyage et de tourisme basée à Goa, en Inde. Nous sommes spécialisés dans la fourniture de forfaits touristiques nationaux et internationaux personnalisés, la réservation de vols, l'assistance visa et les services de change." },
                        ],
                    },
                    {
                        title: "2. Réservation et Paiement",
                        content: [
                            {
                                type: "list-bold", items: [
                                    { label: "Confirmation de réservation:", text: "Une réservation n'est considérée comme confirmée qu'après réception de l'acompte initial ou du paiement intégral." },
                                    { label: "Calendrier de paiement:", text: "Le calendrier de paiement sera fourni au moment de la réservation." },
                                    { label: "Modes de paiement:", text: "Nous acceptons les virements bancaires, les cartes de crédit/débit et les paiements en ligne." },
                                    { label: "Tarification:", text: "Tous les prix sont indiqués par personne et incluent toutes les taxes applicables." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "3. Annulation et Remboursements",
                        content: [
                            { type: "paragraph", text: "Si vous souhaitez annuler votre réservation, vous devez nous en informer par écrit. Des frais d'annulation s'appliquent:" },
                            {
                                type: "list", items: [
                                    "90+ jours avant le départ: Perte de l'acompte de réservation",
                                    "60-89 jours: 25% du coût total",
                                    "30-59 jours: 50% du coût total",
                                    "Moins de 30 jours: 100% (pas de remboursement)",
                                    "Non-présentation: 100% (pas de remboursement)",
                                ]
                            },
                            { type: "paragraph", text: "Les frais de visa et les billets d'avion ne sont pas remboursables une fois réservés. Les remboursements sont traités dans un délai de 15 à 30 jours ouvrables." },
                        ],
                    },
                    {
                        title: "4. Modifications d'itinéraire",
                        content: [
                            { type: "paragraph", text: "Nous nous réservons le droit de modifier les itinéraires en raison de circonstances imprévues. Les coûts supplémentaires résultant de tels changements sont à votre charge." },
                        ],
                    },
                    {
                        title: "5. Vos Responsabilités",
                        content: [
                            {
                                type: "list-bold", items: [
                                    { label: "Passeport et Visa:", text: "Assurez-vous d'avoir un passeport valide (validité de 6+ mois) et obtenez les visas nécessaires." },
                                    { label: "Assurance voyage:", text: "Nous recommandons une assurance voyage complète." },
                                    { label: "Santé et forme physique:", text: "Assurez-vous d'être apte pour le tour choisi." },
                                    { label: "Conduite:", text: "Comportez-vous de manière appropriée sans perturber les autres voyageurs." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "6. Notre Responsabilité",
                        content: [
                            {
                                type: "list-bold", items: [
                                    { label: "Fournisseurs tiers:", text: "Nous ne sommes pas responsables des actes des fournisseurs tiers." },
                                    { label: "Limitation de responsabilité:", text: "Notre responsabilité est limitée au coût de votre tour." },
                                    { label: "Force Majeure:", text: "Nous ne sommes pas responsables des événements indépendants de notre volonté." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "7. Juridiction",
                        content: [
                            { type: "paragraph", text: "Ces Conditions sont régies par les lois de l'Inde. Les litiges sont soumis aux tribunaux de Goa." },
                        ],
                    },
                    {
                        id: "contact",
                        title: "8. Nous Contacter",
                        content: [
                            { type: "paragraph", text: "Pour toute question concernant ces Conditions, veuillez nous contacter:" },
                        ],
                    },
                ],
            },
            de: {
metadata: {
  title: "Allgemeine Geschäftsbedingungen | Global Tourist Centre",
  description: "Lesen Sie die Allgemeinen Geschäftsbedingungen für die Nutzung der Reisedienstleistungen von Global Tourist Centre und die Buchung von Touren bei uns."
},
                title: "Allgemeine Geschäftsbedingungen",
                subtitle: "Bitte lesen Sie diese Bedingungen sorgfältig durch, bevor Sie unsere Dienste nutzen",
                sectionTitle: "Buchungsbedingungen",
                lastUpdated: "Letzte Aktualisierung: Dezember 2023",
                contactInfo: contactInfoTranslations.de,
                sections: [
                    {
                        title: "1. Unsere Dienstleistungen",
                        content: [
                            { type: "paragraph", text: "Global Tourist Centre ist ein Reise- und Tourismusunternehmen mit Sitz in Goa, Indien. Wir sind spezialisiert auf die Bereitstellung personalisierter nationaler und internationaler Reisepakete, Flugbuchungen, Visahilfe und Geldwechseldienste." },
                        ],
                    },
                    {
                        title: "2. Buchung und Zahlung",
                        content: [
                            {
                                type: "list-bold", items: [
                                    { label: "Buchungsbestätigung:", text: "Eine Buchung gilt erst als bestätigt, wenn wir die Anzahlung oder die vollständige Zahlung erhalten haben." },
                                    { label: "Zahlungsplan:", text: "Der Zahlungsplan wird bei der Buchung bereitgestellt." },
                                    { label: "Zahlungsmethoden:", text: "Wir akzeptieren Banküberweisungen, Kredit-/Debitkarten und Online-Zahlungsmethoden." },
                                    { label: "Preisgestaltung:", text: "Alle Preise verstehen sich pro Person und beinhalten alle anwendbaren Steuern." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "3. Stornierung und Rückerstattungen",
                        content: [
                            { type: "paragraph", text: "Wenn Sie Ihre Buchung stornieren möchten, müssen Sie uns dies schriftlich mitteilen. Es fallen Stornierungsgebühren an:" },
                            {
                                type: "list", items: [
                                    "90+ Tage vor Abreise: Verlust der Buchungsanzahlung",
                                    "60-89 Tage: 25% der Gesamtkosten",
                                    "30-59 Tage: 50% der Gesamtkosten",
                                    "Weniger als 30 Tage: 100% (keine Rückerstattung)",
                                    "Nichterscheinen: 100% (keine Rückerstattung)",
                                ]
                            },
                            { type: "paragraph", text: "Visagebühren und Flugtickets sind nach der Buchung nicht erstattungsfähig. Rückerstattungen werden innerhalb von 15-30 Werktagen bearbeitet." },
                        ],
                    },
                    {
                        title: "4. Reiseroutenänderungen",
                        content: [
                            { type: "paragraph", text: "Wir behalten uns das Recht vor, Reiserouten aufgrund unvorhergesehener Umstände zu ändern. Zusätzliche Kosten, die durch solche Änderungen entstehen, liegen in Ihrer Verantwortung." },
                        ],
                    },
                    {
                        title: "5. Ihre Verantwortlichkeiten",
                        content: [
                            {
                                type: "list-bold", items: [
                                    { label: "Reisepass und Visum:", text: "Stellen Sie sicher, dass Sie einen gültigen Reisepass (Gültigkeit 6+ Monate) haben und die erforderlichen Visa erhalten." },
                                    { label: "Reiseversicherung:", text: "Wir empfehlen eine umfassende Reiseversicherung." },
                                    { label: "Gesundheit und Fitness:", text: "Stellen Sie sicher, dass Sie für Ihre gewählte Tour fit sind." },
                                    { label: "Verhalten:", text: "Verhalten Sie sich angemessen, ohne andere Reisende zu stören." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "6. Unsere Haftung",
                        content: [
                            {
                                type: "list-bold", items: [
                                    { label: "Drittanbieter:", text: "Wir haften nicht für Handlungen von Drittanbietern." },
                                    { label: "Haftungsbeschränkung:", text: "Unsere Haftung ist auf die Kosten Ihrer Tour beschränkt." },
                                    { label: "Höhere Gewalt:", text: "Wir haften nicht für Ereignisse, die außerhalb unserer Kontrolle liegen." },
                                ]
                            },
                        ],
                    },
                    {
                        title: "7. Gerichtsstand",
                        content: [
                            { type: "paragraph", text: "Diese Bedingungen unterliegen den Gesetzen Indiens. Streitigkeiten unterliegen den Gerichten in Goa." },
                        ],
                    },
                    {
                        id: "contact",
                        title: "8. Kontaktieren Sie uns",
                        content: [
                            { type: "paragraph", text: "Bei Fragen zu diesen Bedingungen kontaktieren Sie uns bitte:" },
                        ],
                    },
                ],
            },
        },
    },
};
