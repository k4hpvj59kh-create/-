export default function PolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-10 py-32 pt-40">
      <h1 className="font-serif text-3xl md:text-4xl text-espresso mb-12">מדיניות החנות</h1>

      <section className="mb-12">
        <h2 className="font-serif text-xl text-espresso mb-4">ביטול עסקה</h2>
        <p className="text-taupe leading-relaxed mb-3">
          בהתאם לחוק הגנת הצרכן, התשמ״א-1981, ותקנות הגנת הצרכן (ביטול עסקה), התשע״א-2010:
        </p>
        <ul className="text-taupe leading-relaxed space-y-2 list-disc list-inside">
          <li>ניתן לבטל עסקה תוך <strong>14 יום</strong> מיום קבלת המוצר.</li>
          <li>הביטול יתבצע בפנייה בכתב לאימייל: <a href="mailto:adamsh6@gmail.com" className="underline">adamsh6@gmail.com</a> או בטלפון <a href="tel:0528433338" className="underline">052-843-3338</a>.</li>
          <li>המוצר יוחזר באריזתו המקורית, ללא שימוש וללא פגם.</li>
          <li>בביטול עסקה יחויב הלקוח בדמי ביטול של <strong>5%</strong> ממחיר העסקה או 100 ₪ — הנמוך מביניהם.</li>
          <li>דמי המשלוח להחזרת המוצר יחולו על הלקוח.</li>
          <li>לקוח עם מוגבלות, אזרח ותיק (מעל 65) או עולה חדש — זכאי לביטול עסקה תוך <strong>4 חודשים</strong>.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-xl text-espresso mb-4">משלוחים</h2>
        <ul className="text-taupe leading-relaxed space-y-2 list-disc list-inside">
          <li>משלוח לכל רחבי ישראל.</li>
          <li>זמן אספקה: <strong>5–7 ימי עסקים</strong> מיום אישור ההזמנה.</li>
          <li>עלות משלוח: <strong>30 ₪</strong>.</li>
          <li>הזמנות מעל <strong>800 ₪</strong> — משלוח חינם.</li>
          <li>לאחר שליחת ההזמנה ישלח מספר מעקב לאימייל שהזנת.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-xl text-espresso mb-4">פרטיות ואבטחת מידע</h2>
        <ul className="text-taupe leading-relaxed space-y-2 list-disc list-inside">
          <li>פרטיך האישיים ישמשו אך ורק לצורך עיבוד ההזמנה ומשלוחה.</li>
          <li>לא נעביר פרטים לצד שלישי ללא הסכמתך, למעט חברת השליחויות לצורך המסירה.</li>
          <li>מידע על כרטיסי אשראי מוצפן ומאובטח ומעובד ישירות על ידי חברת הסליקה.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-xl text-espresso mb-4">יצירת קשר</h2>
        <p className="text-taupe leading-relaxed">
          לכל שאלה ניתן לפנות אלינו:
        </p>
        <ul className="text-taupe leading-relaxed space-y-2 mt-3 list-disc list-inside">
          <li>אימייל: <a href="mailto:adamsh6@gmail.com" className="underline hover:text-espresso">adamsh6@gmail.com</a></li>
          <li>טלפון: <a href="tel:0528433338" className="underline hover:text-espresso">052-843-3338</a></li>
          <li>אינסטגרם: <a href="https://instagram.com/mapatshirathayam" target="_blank" rel="noreferrer" className="underline hover:text-espresso">@mapatshirathayam</a></li>
        </ul>
      </section>
    </div>
  );
}
