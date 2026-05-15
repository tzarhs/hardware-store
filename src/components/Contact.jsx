export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium tracking-widest text-orange-400 uppercase mb-2">
            Βρείτε μας
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-3">
            Επικοινωνία
          </h2>
          <p className="text-stone-500 text-base max-w-xl leading-relaxed">
            Επισκεφθείτε μας στο κατάστημα ή επικοινωνήστε μαζί μας για
            οποιαδήποτε απορία.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT — Info Cards */}
          <div className="flex flex-col gap-4">
            {/* Address */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">
                  Διεύθυνση
                </p>
                <p className="text-stone-700 font-medium">
                  Οδός Εμμανουήλ Λαμπράκη 25
                </p>
                <p className="text-stone-500 text-sm">Ιεράπετρα, 72200</p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">
                  Τηλέφωνο
                </p>
                <a
                  href="tel:+302842024691"
                  className="text-stone-700 font-medium hover:text-orange-500 transition-colors"
                >
                  2842 024691
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href="mailto:giorgos7ier@yahoo.gr"
                  className="text-stone-700 font-medium hover:text-orange-500 transition-colors"
                >
                  giorgos7ier@yahoo.gr
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="w-full">
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-3">
                  Ωράριο Λειτουργίας
                </p>
                <div className="space-y-2">
                  {[
                    {
                      day: "Δευτέρα, Τετάρτη, Σάββατο",
                      hours: "07:00 – 15:00",
                    },
                    {
                      day: "Τρίτη, Πέμπτη, Παρασκευή",
                      hours: "07:00 – 15:00  |  17:00 – 21:00",
                    },
                    { day: "Κυριακή", hours: "Κλειστά" },
                  ].map((row) => (
                    <div
                      key={row.day}
                      className="flex justify-between items-center text-sm border-b border-stone-100 pb-2 last:border-0 last:pb-0"
                    >
                      <span className="text-stone-500">{row.day}</span>
                      <span
                        className={`font-medium ${row.hours === "Κλειστά" ? "text-red-400" : "text-stone-700"}`}
                      >
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Google Map */}
          <div className="w-full h-[340px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
            <iframe
              title="Τζάρης Paints — Τοποθεσία"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1498.3030578828625!2d25.745154770881225!3d35.011157145894465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14907967f9291d6b%3A0xa1fc6af2407ca4e!2zzpXOvM68zrHOvc6_z4XOrs67IM6bzrHOvM-Az4HOrM66zrcgMjUsIM6ZzrXPgc6sz4DOtc-Ez4HOsSA3MjIgMDA!5e0!3m2!1sel!2sgr!4v1775059772873!5m2!1sel!2sgr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
