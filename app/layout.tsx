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
    url: "https://mapat-shirat-hayam.vercel.app",
    siteName: "מפת שירת הים",
    images: [
      {
        url: "https://mapat-shirat-hayam.vercel.app/images/og-image.jpg",
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
    images: ["https://mapat-shirat-hayam.vercel.app/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
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
          </CartProvider>
        </LangProvider>
      </body>
    </html>
  );
}
