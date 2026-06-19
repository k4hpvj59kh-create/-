"use client";

import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Reveal from "@/components/Reveal";
import { products } from "@/lib/products";
import { useLang } from "@/lib/lang";
import Link from "next/link";

export default function HomeContent() {
  const { t } = useLang();
  const featured = products.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-20">
        <Reveal>
          <div className="flex items-baseline justify-between mb-14">
            <h2 className="font-serif text-3xl md:text-4xl">{t("הקולקציה", "The Collection")}</h2>
            <Link href="/collection" className="text-[12px] tracking-[0.16em] uppercase text-taupe border-b border-taupe/40 hover:text-espresso hover:border-espresso transition-colors pb-0.5">
              {t("לכל המוצרים", "View all")}
            </Link>
          </div>
        </Reveal>
        <ProductGrid products={featured} />
      </section>

      <section id="story" className="bg-linen py-32 px-6">
        <div className="mx-auto max-w-7xl lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <div className="aspect-[3/4] bg-cover bg-center bg-linen" style={{ backgroundImage: "url(/images/img4-0.jpg)" }} />
          </Reveal>
          <Reveal delay={120}>
            <div className="max-w-xl">
              <p className="text-[11px] tracking-[0.25em] uppercase text-taupe mb-8">{t("הסיפור שלנו", "Our Story")}</p>
              <p className="text-lg md:text-xl text-taupe leading-relaxed mb-6">
                {t(
                  "אצלנו בבית, שישי לא היה יום — הוא היה טקס. ריח של תבשיל מהתנור, סירים שרשרשו מהבוקר, ודג שמחכה במרכז השולחן כשכולם כבר יושבים.",
                  "At home, Friday wasn't just a day — it was a ritual. The smell of something slow-cooking, pots humming since morning, and a fish waiting at the centre of the table."
                )}
              </p>
              <p className="text-lg md:text-xl text-taupe leading-relaxed mb-6">
                {t(
                  "שירת הים נולדה מהתחושה הזאת — שהשולחן הוא לא רק רהיט. הוא המקום שבו קורים הדברים האמיתיים, בשישי ובחגים.",
                  "Shirat HaYam was born from that feeling — that the table is not just furniture. It's where the real things happen, on Fridays and on holidays."
                )}
              </p>
              <p className="text-lg md:text-xl text-taupe leading-relaxed mb-10">
                {t(
                  "כל מפה שלנו עשויה מפשתן רך ופוליאסטר עמיד — כדי שתישאר יפה ארוחה אחרי ארוחה, שנה אחרי שנה.",
                  "Each tablecloth is made from soft linen and durable polyester — so it stays beautiful meal after meal, year after year."
                )}
              </p>
              <Link href="/collection" className="inline-block border border-espresso text-espresso px-10 py-4 text-[13px] tracking-[0.14em] uppercase hover:bg-espresso hover:text-cream transition-colors">
                {t("לקולקציה", "Explore")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="care" className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Reveal>
          <p className="text-[11px] tracking-[0.25em] uppercase text-taupe mb-3">{t("טיפול במפה", "Care Guide")}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-8">
            {t("נקי. רענן. מוכן.", "Clean. Fresh. Ready.")}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-start">
            {[
              {
                title: t("כביסה במכונה", "Machine Wash"),
                body: t("מים קרים עד 30°C בלבד. תוכנית עדינה (delicate / wool).", "Cold water up to 30°C only. Delicate / wool cycle."),
              },
              {
                title: t("ייבוש", "Drying"),
                body: t("ייבוש שטוח באוויר — לא במייבש מסתובב. אם הכרחי, חום נמוך בלבד.", "Lay flat to air dry — no tumble dryer. Low heat only if needed."),
              },
              {
                title: t("גיהוץ", "Ironing"),
                body: t("חום בינוני (הגדרת כותנה). גהץ כשהבד עדיין לח מעט.", "Medium heat (cotton setting). Iron while slightly damp."),
              },
              {
                title: t("הלבנה", "Bleaching"),
                body: t("אסור — פוגע בסיבי הפשתן ומשנה צבעים.", "Never — damages linen fibres and alters colour."),
              },
              {
                title: t("ניקוי יבש", "Dry Clean"),
                body: t("לא נדרש בדרך כלל.", "Not required in most cases."),
              },
            ].map((tip) => (
              <div key={tip.title} className="border-t border-linen-border pt-5">
                <p className="font-serif text-lg text-espresso mb-2">{tip.title}</p>
                <p className="text-sm text-taupe leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ביקורות */}
      <section className="bg-linen py-24 px-6">
        <div className="mx-auto max-w-7xl lg:px-10">
          <Reveal>
            <p className="text-[11px] tracking-[0.25em] uppercase text-taupe mb-3 text-center">{t("לקוחות מרוצים", "Happy Customers")}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-14 text-center">{t("מה אומרים עלינו", "What they say")}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "מיכל ר.", text: t("קיבלתי את המפה לשבת והשולחן פשוט נראה אחרת. הקפלים מדהימים ובד רך להפליא.", "Received the tablecloth for Shabbat and the table just looks different. The ruffles are stunning and the fabric is incredibly soft."), stars: 5 },
              { name: "דנה כ.", text: t("הזמנתי למתנה ואמרו לי שזה הכי יפה שקיבלו. איכות מושלמת, שירות מהיר.", "Ordered as a gift and they told me it's the most beautiful thing they received. Perfect quality, fast service."), stars: 5 },
              { name: "רחל מ.", text: t("המפה עברה כבר 10 כביסות ועדיין נראית כמו חדשה. שווה כל שקל.", "The tablecloth has gone through 10 washes and still looks like new. Worth every penny."), stars: 5 },
            ].map((r) => (
              <Reveal key={r.name}>
                <div className="bg-warm-white p-8 border border-linen-border">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <span key={i} className="text-gold text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-taupe leading-relaxed mb-6 text-sm">"{r.text}"</p>
                  <p className="font-serif text-espresso">{r.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
        <Reveal>
          <p className="text-[11px] tracking-[0.25em] uppercase text-taupe mb-3 text-center">{t("שאלות נפוצות", "FAQ")}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-14 text-center">{t("יש לך שאלה?", "Got a question?")}</h2>
        </Reveal>
        <div className="space-y-6">
          {[
            {
              q: t("באיזה בד עשויות המפות?", "What fabric are the tablecloths made of?"),
              a: t("תערובת פשתן ופוליאסטר איכותי — רכות של פשתן טבעי עם עמידות שלא מתקמטת.", "A blend of linen and quality polyester — the softness of natural linen with wrinkle-resistant durability."),
            },
            {
              q: t("כמה זמן לוקח המשלוח?", "How long does shipping take?"),
              a: t("5–7 ימי עסקים. הזמנות מעל 800 ₪ — משלוח חינם.", "5–7 business days. Orders over ₪800 — free shipping."),
            },
            {
              q: t("איך לכבס את המפה?", "How do I wash the tablecloth?"),
              a: t("כביסה במכונה עד 30°C, תוכנית עדינה. ייבוש שטוח באוויר.", "Machine wash up to 30°C, delicate cycle. Lay flat to air dry."),
            },
            {
              q: t("אפשר להזמין מידה מיוחדת?", "Can I order a custom size?"),
              a: t("כן! צרו איתנו קשר בוואטסאפ או באימייל ונשמח להתאים.", "Yes! Contact us via WhatsApp or email and we'll be happy to customize."),
            },
            {
              q: t("מה מדיניות הביטול?", "What is the cancellation policy?"),
              a: t("ניתן לבטל עסקה תוך 14 יום מקבלת המוצר. ראו עמוד מדיניות לפרטים.", "You can cancel within 14 days of receiving the product. See our policy page for details."),
            },
          ].map((item) => (
            <Reveal key={item.q}>
              <div className="border-b border-linen-border pb-6">
                <p className="font-serif text-lg text-espresso mb-2">{item.q}</p>
                <p className="text-sm text-taupe leading-relaxed">{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
