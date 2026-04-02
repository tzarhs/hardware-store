export default function Services() {
  const services = [
    {
      title: "Χρώματα & Βερνίκια",
      description:
        "Εσωτερικά και εξωτερικά χρώματα, αστάρια, βερνίκια ξύλου και ειδικά προϊόντα επίστρωσης.",
      badge: "Μεγάλη ποικιλία",
      badgeStyle: "bg-blue-50 text-blue-700",
      image:
        "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80",
    },
    {
      title: "Εργαλεία χειρός",
      description:
        "Κατσαβίδια, κλειδιά, σφυριά, πένσες και πλήρεις σειρές εργαλείων για κάθε εργασία.",
      badge: "Επαγγελματικά",
      badgeStyle: "bg-amber-50 text-amber-800",
      image:
        "https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?w=600&q=80",
    },
    {
      title: "Ηλεκτρικά εργαλεία",
      description:
        "Τρυπάνια, τριβεία, κυκλικά πριόνια και επαναφορτιζόμενα εργαλεία κορυφαίων brands.",
      badge: "Επώνυμα brands",
      badgeStyle: "bg-green-50 text-green-800",
      image:
        "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80",
    },
    {
      title: "Οικοδομικά υλικά",
      description:
        "Κόλλες, στόκοι, σφραγιστικά, μονωτικά και υλικά για κάθε φάση κατασκευής ή ανακαίνισης.",
      badge: "Για επαγγελματίες",
      badgeStyle: "bg-orange-50 text-orange-800",
      image: "../src/assets/materials.jpg",
    },
  ];

  return (
    <section id="services" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium tracking-widest text-orange-500 uppercase mb-2">
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
              className="bg-white border border-stone-200 rounded-xl overflow-hidden hover:border-stone-300 hover:shadow-md transition-all"
            >
              {/* Image */}
              <div className="w-full h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-stone-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {service.description}
                </p>
                <span
                  className={`inline-block text-xs font-medium px-3 py-1 rounded-full mt-4 ${service.badgeStyle}`}
                >
                  {service.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
