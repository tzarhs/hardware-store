export default function Services() {
  const services = [
    {
      title: "Χρώματα & Βερνίκια",
      description:
        "Εσωτερικά και εξωτερικά χρώματα, αστάρια, βερνίκια ξύλου και ειδικά προϊόντα επίστρωσης.",
      badge: "Μεγάλη ποικιλία",
      iconBg: "bg-blue-50",
      badgeBg: "bg-blue-50 text-blue-700",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#185FA5"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M3 12h2M19 12h2M12 3v2M12 19v2M5.6 5.6l1.4 1.4M16.9 16.9l1.4 1.4M5.6 18.4l1.4-1.4M16.9 7.1l1.4-1.4" />
        </svg>
      ),
    },
    {
      title: "Εργαλεία χειρός",
      description:
        "Κατσαβίδια, κλειδιά, σφυριά, πένσες και πλήρεις σειρές εργαλείων για κάθε εργασία.",
      badge: "Επαγγελματικά",
      iconBg: "bg-amber-50",
      badgeBg: "bg-amber-50 text-amber-800",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#854F0B"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      title: "Ηλεκτρικά εργαλεία",
      description:
        "Τρυπάνια, τριβεία, κυκλικά πριόνια και επαναφορτιζόμενα εργαλεία κορυφαίων brands.",
      badge: "Επώνυμα brands",
      iconBg: "bg-green-50",
      badgeBg: "bg-green-50 text-green-800",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3B6D11"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <line x1="12" y1="12" x2="12" y2="16" />
          <line x1="10" y1="14" x2="14" y2="14" />
        </svg>
      ),
    },
    {
      title: "Οικοδομικά υλικά",
      description:
        "Κόλλες, στόκοι, σφραγιστικά, μονωτικά και υλικά για κάθε φάση κατασκευής ή ανακαίνισης.",
      badge: "Για επαγγελματίες",
      iconBg: "bg-orange-50",
      badgeBg: "bg-orange-50 text-orange-800",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#993C1D"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <rect x="2" y="3" width="7" height="7" />
          <rect x="15" y="3" width="7" height="7" />
          <rect x="15" y="15" width="7" height="7" />
          <rect x="2" y="15" width="7" height="7" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-16 px-6 bg-stone-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium tracking-widest text-orange-400 uppercase mb-2">
            Τι προσφέρουμε
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-3">
            Υπηρεσίες & Προϊόντα
          </h2>
          <p className="text-stone-500 text-base max-w-xl leading-relaxed">
            Ό,τι χρειάζεστε για την κατασκευή, ανακαίνιση ή συντήρηση του χώρου
            σας — το βρίσκετε εδώ.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-stone-200 rounded-xl p-6 hover:border-stone-300 transition-colors"
            >
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 ${service.iconBg}`}
              >
                {service.icon}
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                {service.description}
              </p>
              <span
                className={`inline-block text-xs font-medium px-3 py-1 rounded-full mt-4 ${service.badgeBg}`}
              >
                {service.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
