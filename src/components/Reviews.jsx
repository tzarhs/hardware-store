import { useEffect, useRef } from "react";

export default function Reviews() {
  const reviews = [
    {
      name: "Stavros J. Stavrakakis",
      rating: 5,
      time: "πριν από 3 χρόνια",
      text: "Πολύ ενημερωμένο κατάστημα με άριστη εξυπηρέτηση και ευγενική συμπεριφορά των υπευθύνων. Ποικιλία εργαλείων, αναλώσιμων και πάρα πολλά άλλα υλικά.",
    },
    {
      name: "Kostis Katsirntakis",
      rating: 5,
      time: "πριν από 3 χρόνια",
      text: "Δεν υπάρχει περίπτωση να θελεις κάτι να επισκευάσεις και να μην το βρεις εδώ! Τεράστια ποικιλία, επαγγελματίες, ευγενικοί, οι καλύτεροι στην Ιεράπετρα!",
    },
    {
      name: "XRYSA STAVRAKAKI",
      rating: 5,
      time: "πριν από 2 χρόνια",
      text: "Ενημερωμένο κατάστημα, πολλά είδη, άριστη εξυπηρέτηση.",
    },
    {
      name: "Sabine Mix",
      rating: 5,
      time: "πριν από 2 χρόνια",
      text: "Παίρνεις όλα όσα χρειάζεσαι, το νούμερο 1 μου είναι το πιο εξυπηρετικό προσωπικό.",
    },
    {
      name: "GERRY DELFOS-VAN DIJK",
      rating: 4,
      time: "πριν από 2 χρόνια",
      text: "Καλό κατάστημα με ποικιλία προϊόντων.",
    },
    {
      name: "Νίκος Καμαριτης",
      rating: 5,
      time: "πριν από έναν χρόνο",
      text: "Άριστη εξυπηρέτηση και μεγάλη ποικιλία!",
    },
    {
      name: "Γιάννης Καούρης",
      rating: 5,
      time: "πριν από 2 χρόνια",
      text: "Πολύ καλό κατάστημα, θα το συνιστούσα ανεπιφύλακτα.",
    },
    {
      name: "ΘΟΔΩΡΗΣ ΜΑΝΟΥΣΑΚΗΣ",
      rating: 5,
      time: "πριν από 3 χρόνια",
      text: "Εξαιρετική εξυπηρέτηση και τεράστια ποικιλία προϊόντων.",
    },
    {
      name: "Yiannis Liratzakis",
      rating: 5,
      time: "πριν από 3 χρόνια",
      text: "Πολύ καλοί επαγγελματίες, βρήκα ό,τι χρειαζόμουν.",
    },
  ];

  const scrollRef = useRef(null);

  const StarRating = ({ rating }) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= rating ? "text-yellow-400" : "text-stone-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  const Avatar = ({ name }) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
    const colors = [
      "bg-blue-100 text-blue-700",
      "bg-orange-100 text-orange-700",
      "bg-green-100 text-green-700",
      "bg-pink-100 text-pink-700",
      "bg-purple-100 text-purple-700",
      "bg-teal-100 text-teal-700",
    ];
    const color = colors[name.charCodeAt(0) % colors.length];
    return (
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${color}`}
      >
        {initials}
      </div>
    );
  };

  const GoogleIcon = () => (
    <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );

  // Duplicate reviews for seamless loop
  const doubled = [...reviews, ...reviews];

  return (
    <section id="reviews" className="bg-stone-100 py-16 overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-xs font-medium tracking-widest text-orange-400 uppercase mb-2">
          Τι λένε οι πελάτες μας
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800">
            Κριτικές Google
          </h2>
          <div className="flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-xl px-4 py-2 w-fit">
            <GoogleIcon />
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg
                  key={s}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-stone-700">5.0</span>
            <span className="text-sm text-stone-400">
              · {reviews.length} κριτικές
            </span>
          </div>
        </div>
      </div>

      {/* Scrolling Track */}
      <div className="relative max-w-7xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-36 bg-gradient-to-r from-stone-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-36 bg-gradient-to-l from-stone-100 to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-4 w-max"
          style={{
            animation: "scroll-left 80s linear infinite",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.animationPlayState = "paused")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.animationPlayState = "running")
          }
        >
          {doubled.map((review, index) => (
            <div
              key={index}
              className="w-64 sm:w-72 flex-shrink-0 bg-stone-50 border border-stone-200 rounded-2xl p-5 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <Avatar name={review.name} />
                <div>
                  <p className="text-sm font-semibold text-stone-700 leading-tight">
                    {review.name}
                  </p>
                  <p className="text-xs text-stone-400">{review.time}</p>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="text-sm text-stone-600 leading-relaxed flex-1">
                {review.text}
              </p>
              <div className="flex items-center gap-1.5 mt-auto pt-2 border-t border-stone-100">
                <GoogleIcon />
                <span className="text-xs text-stone-400">
                  Αξιολόγηση από Google
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
