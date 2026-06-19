export interface Product {
  slug: string;
  name: string;
  nameEn: string;
  color: string;
  colorEn: string;
  tagline: string;
  taglineEn: string;
  description: string;
  descriptionEn: string;
  price: number; // in agorot
  images: string[];
  details: string[];
  detailsEn: string[];
  dimensions: string;
}

export const products: Product[] = [
  {
    slug: "shirat-hayam-200",
    name: "מפת שירת הים",
    nameEn: "Shirat HaYam",
    color: "טבעי",
    colorEn: "Natural",
    tagline: "הקפל הרך. הפינוק השקט.",
    taglineEn: "The gathered edge. The quiet luxury.",
    description:
      "פשתן טבעי, קפלים רכים, תפירה ביד. המפה שהופכת כל ארוחה לרגע.",
    descriptionEn:
      "Our signature ruffled tablecloth in pure stonewashed linen. The gentle gather at the hem creates a softness that transforms any table. Gets better with every wash.",
    price: 39900,
    images: ["/images/hero-table.jpg", "/images/product-ruffle.jpg"],
    details: [
      "תערובת פשתן ופוליאסטר איכותי",
      "שוליים מקופלים, תפר משולש",
      "כביסה במכונה עד 30°C, תוכנית עדינה",
      "מתרכך בכל כביסה",
      "מכובס מראש — מוכן לשימוש",
    ],
    detailsEn: [
      "Linen & quality polyester blend",
      "Gathered ruffle hem, triple-stitched",
      "Machine wash up to 30°C, delicate cycle",
      "Softens with every wash",
      "Pre-shrunk — ready to use",
    ],
    dimensions: "200 × 150 ס\"מ",
  },
  {
    slug: "shirat-hayam-250",
    name: "מפת שירת הים",
    nameEn: "Shirat HaYam",
    color: "טבעי",
    colorEn: "Natural",
    tagline: "לשולחנות שמכנסים אנשים.",
    taglineEn: "For tables that gather people.",
    description:
      "מפת שירת הים המלבנית בפשתן טבעי לא צבוע. החמימות הארצית והממדים הנדיבים הופכים אותה למוקד של כל ארוחה — מארוחות יומיות ועד חגיגות.",
    descriptionEn:
      "The rectangular Shirat HaYam in undyed natural linen. Its earthy warmth makes it the centrepiece of any dining occasion.",
    price: 44900,
    images: ["/images/product-shabbat.jpg", "/images/product-flowers.jpg"],
    details: [
      "תערובת פשתן ופוליאסטר איכותי",
      "שוליים מקופלים, תפר משולש",
      "כביסה במכונה עד 30°C, תוכנית עדינה",
      "מתרכך בכל כביסה",
      "מתאים ל-6 סועדים",
    ],
    detailsEn: [
      "Linen & quality polyester blend",
      "Gathered ruffle hem, triple-stitched",
      "Machine wash up to 30°C, delicate cycle",
      "Softens beautifully with each wash",
      "Seats 6 comfortably",
    ],
    dimensions: "250 × 150 ס\"מ",
  },
  {
    slug: "shirat-hayam-300",
    name: "מפת שירת הים",
    nameEn: "Shirat HaYam",
    color: "טבעי",
    colorEn: "Natural",
    tagline: "טקס בכל קפל.",
    taglineEn: "Ceremony in every fold.",
    description:
      "הגרסה הלבנה מביאה תחושת חגיגה לשולחנות ארוכים. רוחצת לרכות זוהרת — לעולם לא נוקשה, לעולם לא שטוחה.",
    descriptionEn:
      "The White Shirat HaYam brings a sense of occasion to long celebration tables. Washed to a luminous softness — never stiff.",
    price: 49900,
    images: ["/images/product-flowers.jpg", "/images/product-shabbat.jpg"],
    details: [
      "תערובת פשתן ופוליאסטר איכותי",
      "שוליים מקופלים, תפר משולש",
      "כביסה במכונה עד 30°C, תוכנית עדינה",
      "שטיפת אנזים לרכות מיידית",
      "מתאים ל-8 סועדים",
    ],
    detailsEn: [
      "Linen & quality polyester blend",
      "Gathered ruffle hem, triple-stitched",
      "Machine wash up to 30°C, delicate cycle",
      "Enzyme-washed for immediate softness",
      "Seats 8 comfortably",
    ],
    dimensions: "300 × 150 ס\"מ",
  },
  {
    slug: "shirat-hayam-350",
    name: "מפת שירת הים",
    nameEn: "Shirat HaYam",
    color: "טבעי",
    colorEn: "Natural",
    tagline: "לשולחן הגדול, הלחם שמגיע לו.",
    taglineEn: "For the long table that deserves it.",
    description:
      "הגרסה הגדולה ביותר — למשפחות גדולות, שבתות ארוכות, וחגים שנזכרים בהם. כל קפל תפור ביד, כל מטר מורגש.",
    descriptionEn:
      "Our largest size — for big families, long Shabbat tables, and holidays to remember. Every ruffle hand-stitched.",
    price: 54900,
    images: ["/images/product-ruffle.jpg", "/images/product-natural-rect.jpg"],
    details: [
      "תערובת פשתן ופוליאסטר איכותי",
      "שוליים מקופלים, תפר משולש",
      "כביסה במכונה עד 30°C, תוכנית עדינה",
      "מתרכך בכל כביסה",
      "מתאים ל-10 סועדים",
    ],
    detailsEn: [
      "Linen & quality polyester blend",
      "Gathered ruffle hem, triple-stitched",
      "Machine wash up to 30°C, delicate cycle",
      "Softens with every wash",
      "Seats 10 comfortably",
    ],
    dimensions: "350 × 150 ס\"מ",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(agorot: number): string {
  return `₪${(agorot / 100).toLocaleString("he-IL")}`;
}
