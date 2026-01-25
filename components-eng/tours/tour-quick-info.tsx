"use client";
import {
  Users,
  Car,
  Utensils,
  Camera,
  Hotel,
  Plane,
  Ship,
  Map,
  Mountain,
  Compass,
  Clock,
  Ticket,
  Leaf,
  HeartPulse,
  Waves,
} from "lucide-react";

type QuickInfoItem = {
  title: string;
  description: string;
};

interface TourQuickInfoProps {
  items: readonly QuickInfoItem[];
}

const ICONS = {
  GROUP: <Users className="w-6 h-6" />,
  TRANSPORT: <Car className="w-6 h-6" />,
  MEALS: <Utensils className="w-6 h-6" />,
  PHOTO: <Camera className="w-6 h-6" />,
  HOTEL: <Hotel className="w-6 h-6" />,
  FLIGHT: <Plane className="w-6 h-6" />,
  CRUISE: <Ship className="w-6 h-6" />,
  LOCATION: <Map className="w-6 h-6" />,
  NATURE: <Leaf className="w-6 h-6" />,
  MOUNTAIN: <Mountain className="w-6 h-6" />,
  ACTIVITY: <Compass className="w-6 h-6" />,
  TIME: <Clock className="w-6 h-6" />,
  TICKET: <Ticket className="w-6 h-6" />,
  WELLNESS: <HeartPulse className="w-6 h-6" />,
  WATER: <Waves className="w-6 h-6" />,
};

/**
 * Title → Icon intent mapping
 * Supports multilingual + variants
 */
const TITLE_ICON_MAP: Record<string, React.ReactNode> = {
  // ── GROUPS ─────────────────────────────
  "Small Groups": ICONS.GROUP,
  "Group Tours": ICONS.GROUP,
  "Kleine Gruppen": ICONS.GROUP,

  // ── TRANSPORT ──────────────────────────
  "Private Transport": ICONS.TRANSPORT,
  "Private Transfers": ICONS.TRANSPORT,
  "Privater Transport": ICONS.TRANSPORT,
  Transport: ICONS.TRANSPORT,
  Transportation: ICONS.TRANSPORT,
  Überweisungen: ICONS.TRANSPORT,

  // ── MEALS ──────────────────────────────
  "All Meals": ICONS.MEALS,
  "All Meals Included": ICONS.MEALS,
  "Meals Included": ICONS.MEALS,
  "Most Meals": ICONS.MEALS,
  Breakfast: ICONS.MEALS,
  "Breakfast Included": ICONS.MEALS,
  "Daily Breakfast": ICONS.MEALS,
  "Daily Meals": ICONS.MEALS,
  "Lunch Included": ICONS.MEALS,
  "Gourmet Dinner": ICONS.MEALS,
  "Alle Mahlzeiten": ICONS.MEALS,
  "Mahlzeiten inbegriffen": ICONS.MEALS,

  // ── HOTEL / STAY ───────────────────────
  "Hotel Stay": ICONS.HOTEL,
  Accommodation: ICONS.HOTEL,
  "Comfort Stays": ICONS.HOTEL,
  "Luxury Stays": ICONS.HOTEL,
  "Luxury Cottages": ICONS.HOTEL,
  "Heritage Hotels": ICONS.HOTEL,
  "Houseboat Stay": ICONS.HOTEL,
  "3 Star Hotels": ICONS.HOTEL,
  "3-Star Hotels": ICONS.HOTEL,
  "3 Nights Stay": ICONS.HOTEL,
  "4 Nights Stay": ICONS.HOTEL,
  "5 Nights Stay": ICONS.HOTEL,
  "6 Nights Stay": ICONS.HOTEL,
  "7 Nights Stay": ICONS.HOTEL,
  "8 Nights Stay": ICONS.HOTEL,

  // ── FLIGHTS ────────────────────────────
  Flights: ICONS.FLIGHT,
  "Flight Included": ICONS.FLIGHT,
  "Flights Included": ICONS.FLIGHT,
  "Airfare Included": ICONS.FLIGHT,
  "Domestic Flights": ICONS.FLIGHT,

  // ── CRUISE / WATER ─────────────────────
  "AC Cruise": ICONS.CRUISE,
  "Bosphorus Cruise": ICONS.CRUISE,
  "Ha Long Cruise": ICONS.CRUISE,
  "Sunset Cruise": ICONS.CRUISE,
  "Shikara Ride": ICONS.WATER,
  "Island Hopping": ICONS.WATER,
  "Water Activities": ICONS.WATER,
  "Water Sports": ICONS.WATER,
  Snorkeling: ICONS.WATER,
  Kayaking: ICONS.WATER,

  // ── NATURE / WILDLIFE ──────────────────
  "Naturaktivitäten": ICONS.NATURE,
  "Nature Trek": ICONS.NATURE,
  "Jungle Safari": ICONS.NATURE,
  "Wildlife Safari": ICONS.NATURE,
  "Wildlife Spotting": ICONS.NATURE,
  "Wildlife Encounters": ICONS.NATURE,
  "Tiger Safari": ICONS.NATURE,
  "Dolphin Watching": ICONS.NATURE,
  "River Safari": ICONS.NATURE,

  // ── MOUNTAIN / SCENIC ──────────────────
  "Mountain Views": ICONS.MOUNTAIN,
  "Himalayan Views": ICONS.MOUNTAIN,
  "High Altitude": ICONS.MOUNTAIN,
  "Mountain Adventures": ICONS.MOUNTAIN,
  "Mount Fuji": ICONS.MOUNTAIN,

  // ── CULTURE / LOCATIONS ────────────────
  "Cultural Heritage": ICONS.LOCATION,
  "Cultural Sites": ICONS.LOCATION,
  "Historic Sites": ICONS.LOCATION,
  "Spiritual Sites": ICONS.LOCATION,
  "UNESCO Site": ICONS.LOCATION,
  "UNESCO Sites": ICONS.LOCATION,
  "Iconic Locations": ICONS.LOCATION,
  "Ikonische Orte": ICONS.LOCATION,

  // ── ACTIVITIES / EXTRAS ─────────────────
  "Cable Car Rides": ICONS.ACTIVITY,
  "Horseback Riding": ICONS.ACTIVITY,
  "Ski Lessons": ICONS.ACTIVITY,
  "Bullet Train": ICONS.ACTIVITY,
  "Live DJ": ICONS.ACTIVITY,
  "Wine Tasting": ICONS.ACTIVITY,

  // ── TIME / META ────────────────────────
  Duration: ICONS.TIME,
  Time: ICONS.TIME,
  "Start Time": ICONS.TIME,

  // ── TICKETS / GUIDE ────────────────────
  "All Entry Tickets": ICONS.TICKET,
  "Permits Included": ICONS.TICKET,
  Guide: ICONS.TICKET,
  "English Guide": ICONS.TICKET,
  "Russian Guide": ICONS.TICKET,

  // ── WELLNESS ───────────────────────────
  "Balinese Spa": ICONS.WELLNESS,
  "Wellness Options": ICONS.WELLNESS,

  // ── PHOTO ──────────────────────────────
  "Photo Stops": ICONS.PHOTO,
  "Photo Opportunities": ICONS.PHOTO,
  // ── GRUPPI ─────────────────────────────
  "Piccoli gruppi": ICONS.GROUP,
  "Tour di gruppo": ICONS.GROUP,
  "Gruppi piccoli": ICONS.GROUP,

  // ── TRASPORTO ──────────────────────────
  "Trasporto privato": ICONS.TRANSPORT,
  "Trasferimenti privati": ICONS.TRANSPORT,
  "Trasporto individuale": ICONS.TRANSPORT,
  Trasporto: ICONS.TRANSPORT,
  Trasporti: ICONS.TRANSPORT,
  Transfer: ICONS.TRANSPORT,

  // ── PASTI ──────────────────────────────
  "Tutti i pasti": ICONS.MEALS,
  "Tutti i pasti inclusi": ICONS.MEALS,
  "Pasti inclusi": ICONS.MEALS,
  "La maggior parte dei pasti": ICONS.MEALS,
  Colazione: ICONS.MEALS,
  "Colazione inclusa": ICONS.MEALS,
  "Colazione giornaliera": ICONS.MEALS,
  "Pasti giornalieri": ICONS.MEALS,
  "Pranzo incluso": ICONS.MEALS,
  "Cena gourmet": ICONS.MEALS,
  "Tutti i pasti compresi": ICONS.MEALS,
  "Pasti compresi": ICONS.MEALS,

  // ── HOTEL / SOGGIORNO ──────────────────
  "Soggiorno in hotel": ICONS.HOTEL,
  Alloggio: ICONS.HOTEL,
  "Soggiorni confortevoli": ICONS.HOTEL,
  "Soggiorni di lusso": ICONS.HOTEL,
  "Cottage di lusso": ICONS.HOTEL,
  "Hotel storici": ICONS.HOTEL,
  "Soggiorno su houseboat": ICONS.HOTEL,
  "Hotel 3 stelle": ICONS.HOTEL,
  "Hotel a 3 stelle": ICONS.HOTEL,
  "Soggiorno di 3 notti": ICONS.HOTEL,
  "Soggiorno di 4 notti": ICONS.HOTEL,
  "Soggiorno di 5 notti": ICONS.HOTEL,
  "Soggiorno di 6 notti": ICONS.HOTEL,
  "Soggiorno di 7 notti": ICONS.HOTEL,
  "Soggiorno di 8 notti": ICONS.HOTEL,

  // ── VOLI ───────────────────────────────
  Voli: ICONS.FLIGHT,
  "Volo incluso": ICONS.FLIGHT,
  "Voli inclusi": ICONS.FLIGHT,
  "Biglietto aereo incluso": ICONS.FLIGHT,
  "Voli nazionali": ICONS.FLIGHT,

  // ── CROCIERA / ACQUA ───────────────────
  "Crociera con aria condizionata": ICONS.CRUISE,
  "Crociera sul Bosforo": ICONS.CRUISE,
  "Crociera nella baia di Ha Long": ICONS.CRUISE,
  "Crociera al tramonto": ICONS.CRUISE,
  "Giro in shikara": ICONS.WATER,
  "Tour tra le isole": ICONS.WATER,
  "Attività acquatiche": ICONS.WATER,
  "Sport acquatici": ICONS.WATER,
  Snorkeling: ICONS.WATER,
  Kayak: ICONS.WATER,

  // ── NATURA / FAUNA ─────────────────────
  "Attività nella natura": ICONS.NATURE,
  "Escursione naturalistica": ICONS.NATURE,
  "Safari nella giungla": ICONS.NATURE,
  "Safari nella fauna selvatica": ICONS.NATURE,
  "Osservazione della fauna": ICONS.NATURE,
  "Incontri con la fauna": ICONS.NATURE,
  "Safari delle tigri": ICONS.NATURE,
  "Osservazione dei delfini": ICONS.NATURE,
  "Safari fluviale": ICONS.NATURE,

  // ── MONTAGNE / PAESAGGI ────────────────
  "Vedute montane": ICONS.MOUNTAIN,
  "Vedute himalayane": ICONS.MOUNTAIN,
  "Alta quota": ICONS.MOUNTAIN,
  "Avventure in montagna": ICONS.MOUNTAIN,
  "Monte Fuji": ICONS.MOUNTAIN,

  // ── CULTURA / LUOGHI ───────────────────
  "Patrimonio culturale": ICONS.LOCATION,
  "Siti culturali": ICONS.LOCATION,
  "Siti storici": ICONS.LOCATION,
  "Luoghi spirituali": ICONS.LOCATION,
  "Sito UNESCO": ICONS.LOCATION,
  "Siti UNESCO": ICONS.LOCATION,
  "Luoghi iconici": ICONS.LOCATION,
  "Località famose": ICONS.LOCATION,

  // ── ATTIVITÀ / EXTRA ───────────────────
  "Giri in funivia": ICONS.ACTIVITY,
  "Passeggiate a cavallo": ICONS.ACTIVITY,
  "Lezioni di sci": ICONS.ACTIVITY,
  "Treno proiettile": ICONS.ACTIVITY,
  "DJ dal vivo": ICONS.ACTIVITY,
  "Degustazione di vini": ICONS.ACTIVITY,

  // ── TEMPO / META ───────────────────────
  Durata: ICONS.TIME,
  Orario: ICONS.TIME,
  "Orario di partenza": ICONS.TIME,

  // ── BIGLIETTI / GUIDA ──────────────────
  "Tutti i biglietti d’ingresso": ICONS.TICKET,
  "Permessi inclusi": ICONS.TICKET,
  Guida: ICONS.TICKET,
  "Guida in inglese": ICONS.TICKET,
  "Guida in russo": ICONS.TICKET,

  // ── BENESSERE ──────────────────────────
  "Spa balinese": ICONS.WELLNESS,
  "Opzioni benessere": ICONS.WELLNESS,

  // ── FOTO ───────────────────────────────
  "Soste fotografiche": ICONS.PHOTO,
  "Opportunità fotografiche": ICONS.PHOTO,
  // ── GROUPES ────────────────────────────
  "Petits groupes": ICONS.GROUP,
  "Circuits en groupe": ICONS.GROUP,
  "Petits groupes de voyage": ICONS.GROUP,

  // ── TRANSPORT ──────────────────────────
  "Transport privé": ICONS.TRANSPORT,
  "Transferts privés": ICONS.TRANSPORT,
  "Transport individuel": ICONS.TRANSPORT,
  Transport: ICONS.TRANSPORT,
  Transports: ICONS.TRANSPORT,

  // ── REPAS ──────────────────────────────
  "Tous les repas": ICONS.MEALS,
  "Tous les repas inclus": ICONS.MEALS,
  "Repas inclus": ICONS.MEALS,
  "La plupart des repas": ICONS.MEALS,
  "Petit-déjeuner": ICONS.MEALS,
  "Petit-déjeuner inclus": ICONS.MEALS,
  "Petit-déjeuner quotidien": ICONS.MEALS,
  "Repas quotidiens": ICONS.MEALS,
  "Déjeuner inclus": ICONS.MEALS,
  "Dîner gastronomique": ICONS.MEALS,
  "Tous les repas": ICONS.MEALS,

  // ── HÔTEL / SÉJOUR ─────────────────────
  "Séjour à l’hôtel": ICONS.HOTEL,
  Hébergement: ICONS.HOTEL,
  "Séjours confortables": ICONS.HOTEL,
  "Séjours de luxe": ICONS.HOTEL,
  "Cottages de luxe": ICONS.HOTEL,
  "Hôtels historiques": ICONS.HOTEL,
  "Séjour en péniche": ICONS.HOTEL,
  "Hôtels 3 étoiles": ICONS.HOTEL,
  "3-Star Hotels": ICONS.HOTEL,
  "Séjour de 3 nuits": ICONS.HOTEL,
  "Séjour de 4 nuits": ICONS.HOTEL,
  "Séjour de 5 nuits": ICONS.HOTEL,
  "Séjour de 6 nuits": ICONS.HOTEL,
  "Séjour de 7 nuits": ICONS.HOTEL,
  "Séjour de 8 nuits": ICONS.HOTEL,

  // ── VOLS ───────────────────────────────
  Vols: ICONS.FLIGHT,
  "Vol inclus": ICONS.FLIGHT,
  "Vols inclus": ICONS.FLIGHT,
  "Billet d’avion inclus": ICONS.FLIGHT,
  "Vols intérieurs": ICONS.FLIGHT,

  // ── CROISIÈRE / EAU ────────────────────
  "Croisière climatisée": ICONS.CRUISE,
  "Croisière sur le Bosphore": ICONS.CRUISE,
  "Croisière dans la baie d’Halong": ICONS.CRUISE,
  "Croisière au coucher du soleil": ICONS.CRUISE,
  "Balade en shikara": ICONS.WATER,
  "Saut d’île en île": ICONS.WATER,
  "Activités nautiques": ICONS.WATER,
  "Sports nautiques": ICONS.WATER,
  "Plongée en apnée": ICONS.WATER,
  Kayak: ICONS.WATER,

  // ── NATURE / FAUNE ─────────────────────
  "Activités en pleine nature": ICONS.NATURE,
  "Randonnée nature": ICONS.NATURE,
  "Safari dans la jungle": ICONS.NATURE,
  "Safari animalier": ICONS.NATURE,
  "Observation de la faune": ICONS.NATURE,
  "Rencontres avec la faune": ICONS.NATURE,
  "Safari aux tigres": ICONS.NATURE,
  "Observation des dauphins": ICONS.NATURE,
  "Safari fluvial": ICONS.NATURE,

  // ── MONTAGNES / PAYSAGES ───────────────
  "Vue sur les montagnes": ICONS.MOUNTAIN,
  "Vue sur l’Himalaya": ICONS.MOUNTAIN,
  "Haute altitude": ICONS.MOUNTAIN,
  "Aventures en montagne": ICONS.MOUNTAIN,
  "Mont Fuji": ICONS.MOUNTAIN,

  // ── CULTURE / LIEUX ────────────────────
  "Patrimoine culturel": ICONS.LOCATION,
  "Sites culturels": ICONS.LOCATION,
  "Sites historiques": ICONS.LOCATION,
  "Lieux spirituels": ICONS.LOCATION,
  "Site UNESCO": ICONS.LOCATION,
  "Sites UNESCO": ICONS.LOCATION,
  "Lieux emblématiques": ICONS.LOCATION,
  "Lieux iconiques": ICONS.LOCATION,

  // ── ACTIVITÉS / EXTRAS ─────────────────
  "Balades en téléphérique": ICONS.ACTIVITY,
  Équitation: ICONS.ACTIVITY,
  "Cours de ski": ICONS.ACTIVITY,
  "Train à grande vitesse": ICONS.ACTIVITY,
  "DJ en direct": ICONS.ACTIVITY,
  "Dégustation de vins": ICONS.ACTIVITY,

  // ── TEMPS / MÉTA ───────────────────────
  Durée: ICONS.TIME,
  Heure: ICONS.TIME,
  "Heure de début": ICONS.TIME,

  // ── BILLETS / GUIDE ────────────────────
  "Tous les billets d’entrée": ICONS.TICKET,
  "Permis inclus": ICONS.TICKET,
  Guide: ICONS.TICKET,
  "Guide anglophone": ICONS.TICKET,
  "Guide russophone": ICONS.TICKET,

  // ── BIEN-ÊTRE ──────────────────────────
  "Spa balinais": ICONS.WELLNESS,
  "Formules bien-être": ICONS.WELLNESS,

  // ── PHOTO ──────────────────────────────
  "Arrêts photo": ICONS.PHOTO,
  "Occasions de photos": ICONS.PHOTO,
  // ── GRUPPEN ────────────────────────────
  "Kleine Gruppen": ICONS.GROUP,
  Gruppenreisen: ICONS.GROUP,
  "Kleine Gruppenreisen": ICONS.GROUP,

  // ── TRANSPORT ──────────────────────────
  "Privater Transport": ICONS.TRANSPORT,
  "Private Transfers": ICONS.TRANSPORT,
  Privattransporte: ICONS.TRANSPORT,
  Transport: ICONS.TRANSPORT,
  Beförderung: ICONS.TRANSPORT,
  Transfers: ICONS.TRANSPORT,

  // ── MAHLZEITEN ─────────────────────────
  "Alle Mahlzeiten": ICONS.MEALS,
  "Alle Mahlzeiten inbegriffen": ICONS.MEALS,
  "Mahlzeiten inbegriffen": ICONS.MEALS,
  "Die meisten Mahlzeiten": ICONS.MEALS,
  Frühstück: ICONS.MEALS,
  "Frühstück inbegriffen": ICONS.MEALS,
  "Tägliches Frühstück": ICONS.MEALS,
  "Tägliche Mahlzeiten": ICONS.MEALS,
  "Mittagessen inbegriffen": ICONS.MEALS,
  "Gourmet-Abendessen": ICONS.MEALS,
  "Alle Speisen": ICONS.MEALS,
  "Verpflegung inklusive": ICONS.MEALS,

  // ── HOTEL / AUFENTHALT ─────────────────
  Hotelaufenthalt: ICONS.HOTEL,
  Unterkunft: ICONS.HOTEL,
  "Komfortable Unterkünfte": ICONS.HOTEL,
  Luxusunterkünfte: ICONS.HOTEL,
  "Luxuriöse Cottages": ICONS.HOTEL,
  "Historische Hotels": ICONS.HOTEL,
  "Hausboot-Aufenthalt": ICONS.HOTEL,
  "3-Sterne-Hotels": ICONS.HOTEL,
  "3 Sterne Hotels": ICONS.HOTEL,
  "3 Nächte Aufenthalt": ICONS.HOTEL,
  "4 Nächte Aufenthalt": ICONS.HOTEL,
  "5 Nächte Aufenthalt": ICONS.HOTEL,
  "6 Nächte Aufenthalt": ICONS.HOTEL,
  "7 Nächte Aufenthalt": ICONS.HOTEL,
  "8 Nächte Aufenthalt": ICONS.HOTEL,

  // ── FLÜGE ──────────────────────────────
  Flüge: ICONS.FLIGHT,
  "Flug inbegriffen": ICONS.FLIGHT,
  "Flüge inbegriffen": ICONS.FLIGHT,
  "Flugpreis inbegriffen": ICONS.FLIGHT,
  Inlandsflüge: ICONS.FLIGHT,

  // ── KREUZFAHRT / WASSER ────────────────
  "AC-Kreuzfahrt": ICONS.CRUISE,
  "Bosporus-Kreuzfahrt": ICONS.CRUISE,
  "Ha-Long-Kreuzfahrt": ICONS.CRUISE,
  "Sonnenuntergangs-Kreuzfahrt": ICONS.CRUISE,
  "Shikara-Fahrt": ICONS.WATER,
  Inselhüpfen: ICONS.WATER,
  Wasseraktivitäten: ICONS.WATER,
  Wassersport: ICONS.WATER,
  Schnorcheln: ICONS.WATER,
  Kajakfahren: ICONS.WATER,

  // ── NATUR / WILDTIERE ──────────────────
  Naturaktivitäten: ICONS.NATURE,
  Naturwanderung: ICONS.NATURE,
  "Dschungel-Safari": ICONS.NATURE,
  "Wildtier-Safari": ICONS.NATURE,
  Wildtierbeobachtung: ICONS.NATURE,
  Naturbegegnungen: ICONS.NATURE,
  "Tiger-Safari": ICONS.NATURE,
  Delfinbeobachtung: ICONS.NATURE,
  "Fluss-Safari": ICONS.NATURE,

  // ── BERGE / AUSSICHT ───────────────────
  Bergblicke: ICONS.MOUNTAIN,
  "Himalaya-Blicke": ICONS.MOUNTAIN,
  "Große Höhe": ICONS.MOUNTAIN,
  Bergabenteuer: ICONS.MOUNTAIN,
  "Berg Fuji": ICONS.MOUNTAIN,

  // ── KULTUR / ORTE ──────────────────────
  "Kulturelles Erbe": ICONS.LOCATION,
  Kulturstätten: ICONS.LOCATION,
  "Historische Stätten": ICONS.LOCATION,
  "Spirituelle Orte": ICONS.LOCATION,
  "UNESCO-Stätte": ICONS.LOCATION,
  "UNESCO-Stätten": ICONS.LOCATION,
  "Ikonische Orte": ICONS.LOCATION,
  "Berühmte Orte": ICONS.LOCATION,

  // ── AKTIVITÄTEN / EXTRAS ───────────────
  Seilbahnfahrten: ICONS.ACTIVITY,
  Reiten: ICONS.ACTIVITY,
  Skikurse: ICONS.ACTIVITY,
  Hochgeschwindigkeitszug: ICONS.ACTIVITY,
  "Live-DJ": ICONS.ACTIVITY,
  Weinverkostung: ICONS.ACTIVITY,

  // ── ZEIT / META ────────────────────────
  Dauer: ICONS.TIME,
  Zeit: ICONS.TIME,
  Startzeit: ICONS.TIME,

  // ── TICKETS / REISELEITER ──────────────
  "Alle Eintrittskarten": ICONS.TICKET,
  "Genehmigungen inbegriffen": ICONS.TICKET,
  Reiseführer: ICONS.TICKET,
  "Englischer Reiseführer": ICONS.TICKET,
  "Russischer Reiseführer": ICONS.TICKET,

  // ── WELLNESS ───────────────────────────
  "Balinesisches Spa": ICONS.WELLNESS,
  "Wellness-Angebote": ICONS.WELLNESS,

  // ── FOTO ───────────────────────────────
  Fotostopps: ICONS.PHOTO,
  Fotogelegenheiten: ICONS.PHOTO,
  // ── ГРУППЫ ─────────────────────────────
  "Малые группы": ICONS.GROUP,
  "Групповые туры": ICONS.GROUP,
  "Небольшие группы": ICONS.GROUP,

  // ── ТРАНСПОРТ ──────────────────────────
  "Индивидуальный транспорт": ICONS.TRANSPORT,
  "Индивидуальные трансферы": ICONS.TRANSPORT,
  "Частный транспорт": ICONS.TRANSPORT,
  Транспорт: ICONS.TRANSPORT,
  Перевозка: ICONS.TRANSPORT,
  Трансферы: ICONS.TRANSPORT,

  // ── ПИТАНИЕ ─────────────────────────────
  "Все питание включено": ICONS.MEALS,
  "Все приёмы пищи": ICONS.MEALS,
  "Питание включено": ICONS.MEALS,
  "Большинство приёмов пищи": ICONS.MEALS,
  Завтрак: ICONS.MEALS,
  "Завтрак включён": ICONS.MEALS,
  "Ежедневный завтрак": ICONS.MEALS,
  "Ежедневное питание": ICONS.MEALS,
  "Обед включён": ICONS.MEALS,
  "Ужин гурме": ICONS.MEALS,
  "Все блюда": ICONS.MEALS,
  "Питание предоставляется": ICONS.MEALS,

  // ── ОТЕЛЬ / ПРОЖИВАНИЕ ─────────────────
  "Проживание в отеле": ICONS.HOTEL,
  Размещение: ICONS.HOTEL,
  "Комфортное проживание": ICONS.HOTEL,
  "Роскошное проживание": ICONS.HOTEL,
  "Роскошные коттеджи": ICONS.HOTEL,
  "Исторические отели": ICONS.HOTEL,
  "Проживание на хаусботе": ICONS.HOTEL,
  "Отели 3 звезды": ICONS.HOTEL,
  "3-звёздочные отели": ICONS.HOTEL,
  "Проживание на 3 ночи": ICONS.HOTEL,
  "Проживание на 4 ночи": ICONS.HOTEL,
  "Проживание на 5 ночей": ICONS.HOTEL,
  "Проживание на 6 ночей": ICONS.HOTEL,
  "Проживание на 7 ночей": ICONS.HOTEL,
  "Проживание на 8 ночей": ICONS.HOTEL,

  // ── РЕЙСЫ ──────────────────────────────
  Авиаперелёты: ICONS.FLIGHT,
  "Авиаперелёт включён": ICONS.FLIGHT,
  "Авиарейсы включены": ICONS.FLIGHT,
  "Авиабилеты включены": ICONS.FLIGHT,
  "Внутренние рейсы": ICONS.FLIGHT,

  // ── КРУИЗ / ВОДА ───────────────────────
  "Круиз с кондиционером": ICONS.CRUISE,
  "Круиз по Босфору": ICONS.CRUISE,
  "Круиз по Халонгу": ICONS.CRUISE,
  "Круиз на закате": ICONS.CRUISE,
  "Прогулка на шикара": ICONS.WATER,
  "Островной тур": ICONS.WATER,
  "Водные развлечения": ICONS.WATER,
  "Водные виды спорта": ICONS.WATER,
  Сноркелинг: ICONS.WATER,
  Каякинг: ICONS.WATER,

  // ── ПРИРОДА / ДИКАЯ ПРИРОДА ────────────
  "Природные активности": ICONS.NATURE,
  "Природные походы": ICONS.NATURE,
  "Поход по джунглям": ICONS.NATURE,
  Сафари: ICONS.NATURE,
  "Сафари по дикой природе": ICONS.NATURE,
  "Наблюдение за дикой природой": ICONS.NATURE,
  "Знакомство с дикой природой": ICONS.NATURE,
  "Сафари на тигров": ICONS.NATURE,
  "Наблюдение за дельфинами": ICONS.NATURE,
  "Речное сафари": ICONS.NATURE,

  // ── ГОРЫ / ПЕЙЗАЖИ ─────────────────────
  "Горные виды": ICONS.MOUNTAIN,
  "Виды Гималаев": ICONS.MOUNTAIN,
  "Высокая высота": ICONS.MOUNTAIN,
  "Горные приключения": ICONS.MOUNTAIN,
  "Гора Фудзи": ICONS.MOUNTAIN,

  // ── КУЛЬТУРА / ДОСТОПРИМЕЧАТЕЛЬНОСТИ ───
  "Культурное наследие": ICONS.LOCATION,
  "Культурные объекты": ICONS.LOCATION,
  "Исторические места": ICONS.LOCATION,
  "Священные места": ICONS.LOCATION,
  "Объект ЮНЕСКО": ICONS.LOCATION,
  "Объекты ЮНЕСКО": ICONS.LOCATION,
  "Знаковые места": ICONS.LOCATION,
  "Известные локации": ICONS.LOCATION,

  // ── АКТИВНОСТИ / ДОПОЛНИТЕЛЬНО ─────────
  "Поездка на канатной дороге": ICONS.ACTIVITY,
  "Верховая езда": ICONS.ACTIVITY,
  "Уроки катания на лыжах": ICONS.ACTIVITY,
  "Скоростной поезд": ICONS.ACTIVITY,
  "Живой диджей": ICONS.ACTIVITY,
  "Дегустация вин": ICONS.ACTIVITY,

  // ── ВРЕМЯ / МЕТА ───────────────────────
  Продолжительность: ICONS.TIME,
  Время: ICONS.TIME,
  "Время начала": ICONS.TIME,

  // ── БИЛЕТЫ / ГИД ───────────────────────
  "Все входные билеты": ICONS.TICKET,
  "Разрешения включены": ICONS.TICKET,
  Гид: ICONS.TICKET,
  "Гид на английском": ICONS.TICKET,
  "Гид на русском": ICONS.TICKET,

  // ── ВЕЛНЕС ─────────────────────────────
  "Бали массаж": ICONS.WELLNESS,
  "Программы велнесса": ICONS.WELLNESS,

  // ── ФОТО ───────────────────────────────
  Фотостопы: ICONS.PHOTO,
  Фотопаузы: ICONS.PHOTO,
};

export function TourQuickInfo({ items }: TourQuickInfoProps) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div
          className="
    flex gap-4 overflow-x-auto pb-4
    snap-x snap-mandatory
    sm:grid sm:grid-cols-2
    lg:grid lg:grid-cols-4
    sm:overflow-visible
    scrollbar-hide
  "
        >
          {items.map((item) => (
            <div
              key={item.title}
              className="
        flex items-center gap-4
        min-w-[85%] sm:min-w-0
        snap-center
        rounded-xl
        border
        bg-slate-50
        px-5 py-4
        transition-all
        hover:shadow-md
      "
            >
              <div className="text-emerald-600 shrink-0">
                {TITLE_ICON_MAP[item.title] ?? <Camera className="w-6 h-6" />}
              </div>

              <div>
                <p className="font-medium text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
