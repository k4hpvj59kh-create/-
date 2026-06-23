export default function AccessibilityPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-10 py-32 pt-40">
      <h1 className="font-serif text-3xl md:text-4xl text-espresso mb-12">הצהרת נגישות</h1>

      <section className="mb-10">
        <p className="text-taupe leading-relaxed mb-4">
          אתר "מפת שירת הים" רואה חשיבות רבה במתן שירות שוויוני לכלל הלקוחות, ופועל להנגשת האתר
          לאנשים עם מוגבלות בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ״ח-1998, ולתקנות
          הנגישות (תקן ישראלי 5568 המבוסס על הנחיות WCAG 2.0 ברמת AA).
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-serif text-xl text-espresso mb-4">מה הונגש באתר</h2>
        <ul className="text-taupe leading-relaxed space-y-2 list-disc list-inside">
          <li>תפריט נגישות צף המאפשר הגדלת טקסט, ניגודיות גבוהה, הדגשת קישורים ועצירת אנימציות.</li>
          <li>ניווט מלא באמצעות מקלדת (מקש Tab) עם סימון ברור של מוקד המיקוד.</li>
          <li>קישור "דלג לתוכן הראשי" בתחילת כל עמוד.</li>
          <li>תיאורים חלופיים (alt) לתמונות עבור קוראי מסך.</li>
          <li>מבנה כותרות סמנטי ותוויות ARIA על כפתורים ואלמנטים אינטראקטיביים.</li>
          <li>תאימות לקוראי מסך נפוצים (NVDA, JAWS).</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-serif text-xl text-espresso mb-4">החרגות והסתייגויות</h2>
        <p className="text-taupe leading-relaxed">
          אנו ממשיכים לפעול לשיפור הנגישות באתר באופן שוטף. אם נתקלתם בעמוד או רכיב שאינו נגיש,
          נשמח שתעדכנו אותנו ונפעל לתקן בהקדם.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-serif text-xl text-espresso mb-4">רכז הנגישות</h2>
        <p className="text-taupe leading-relaxed mb-3">
          בכל פנייה בנושא נגישות ניתן ליצור קשר עם רכז הנגישות שלנו:
        </p>
        <ul className="text-taupe leading-relaxed space-y-2 list-disc list-inside">
          <li>שם: אדם שמואל</li>
          <li>אימייל: <a href="mailto:adamsh6@gmail.com" className="underline hover:text-espresso">adamsh6@gmail.com</a></li>
          <li>טלפון: <a href="tel:0528433338" className="underline hover:text-espresso">052-843-3338</a></li>
        </ul>
      </section>

      <section>
        <p className="text-sm text-taupe">הצהרת נגישות זו עודכנה לאחרונה ביוני 2026.</p>
      </section>
    </div>
  );
}
