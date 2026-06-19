import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import { LangProvider } from "@/lib/lang";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "מפת שירת הים | מפות שולחן פשתן",
  description: "מפות שולחן פשתן טהור עם קפלים, נתפרות ביד — לשבתות, לחגים, לכל שישי.",
  openGraph: {
    title: "מפת שירת הים | מפות שולחן פשתן",
    description: "מפות שולחן פשתן טהור עם קפלים, נתפרות ביד — לשבתות, לחגים, לכל שישי.",
    url: "https://www.mapatshirathayam.com",
    siteName: "מפת שירת הים",
    images: [
      {
        url: "https://www.mapatshirathayam.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "מפת שירת הים — מפות שולחן פשתן",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "מפת שירת הים | מפות שולחן פשתן",
    description: "מפות שולחן פשתן טהור עם קפלים, נתפרות ביד.",
    images: ["https://www.mapatshirathayam.com/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YESQPHK8WM" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YESQPHK8WM');
        `}} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">דלג לתוכן הראשי</a>
        <LangProvider>
          <CartProvider>
            <Header />
            <main id="main-content" tabIndex={-1}>{children}</main>
            <Footer />
            <CartDrawer />
            <a
              href="https://wa.me/972528433338"
              target="_blank"
              rel="noreferrer"
              aria-label="שלח הודעה בוואטסאפ"
              style={{
                position: "fixed",
                bottom: "24px",
                left: "24px",
                zIndex: 999,
                backgroundColor: "#25D366",
                borderRadius: "50%",
                width: "56px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.523 5.845L.057 23.886a.5.5 0 00.611.61l6.101-1.459A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.498-5.223-1.368l-.374-.214-3.878.928.944-3.782-.234-.389A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
            </a>
          </CartProvider>
        </LangProvider>
      </body>
    </html>
  );
}
