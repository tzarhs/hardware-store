export default function PrivacyPolicy() {
  return (
    <main className="bg-stone-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium tracking-widest text-orange-400 uppercase mb-2">
            Νομικά
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-3">
            Πολιτική Απορρήτου
          </h1>
          <p className="text-stone-400 text-sm">
            Τελευταία ενημέρωση: Απρίλιος 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-stone-600 leading-relaxed">
          {/* Section 1 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-stone-800 mb-3">
              1. Εισαγωγή
            </h2>
            <p className="text-sm sm:text-base">
              Η εταιρεία{" "}
              <span className="font-semibold text-stone-700">ΤΖΑΡΗΣ</span>{" "}
              σέβεται την ιδιωτικότητά σας και δεσμεύεται να προστατεύει τα
              προσωπικά σας δεδομένα. Η παρούσα Πολιτική Απορρήτου περιγράφει
              τον τρόπο με τον οποίο συλλέγουμε, χρησιμοποιούμε και
              προστατεύουμε τις πληροφορίες σας όταν επισκέπτεστε τον ιστότοπό
              μας ή επικοινωνείτε μαζί μας.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-stone-800 mb-3">
              2. Ποια δεδομένα συλλέγουμε
            </h2>
            <p className="text-sm sm:text-base mb-4">
              Ενδέχεται να συλλέγουμε τα παρακάτω είδη προσωπικών δεδομένων:
            </p>
            <div className="space-y-3">
              {[
                {
                  label: "Στοιχεία επικοινωνίας",
                  desc: "Όνομα, αριθμός τηλεφώνου, διεύθυνση email.",
                },
                {
                  label: "Δεδομένα χρήσης",
                  desc: "Πληροφορίες σχετικά με τον τρόπο που χρησιμοποιείτε τον ιστότοπό μας.",
                },
                {
                  label: "Τεχνικά δεδομένα",
                  desc: "Διεύθυνση IP, τύπος προγράμματος περιήγησης, ρυθμίσεις γλώσσας.",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0 mt-2" />
                  <p className="text-sm sm:text-base">
                    <span className="font-medium text-stone-700">
                      {item.label}:
                    </span>{" "}
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-stone-800 mb-3">
              3. Πώς χρησιμοποιούμε τα δεδομένα σας
            </h2>
            <p className="text-sm sm:text-base mb-4">
              Χρησιμοποιούμε τα δεδομένα σας αποκλειστικά για τους παρακάτω
              σκοπούς:
            </p>
            <div className="space-y-3">
              {[
                "Για να απαντάμε στα αιτήματα και τις ερωτήσεις σας.",
                "Για να βελτιώνουμε τον ιστότοπο και τις υπηρεσίες μας.",
                "Για να επικοινωνούμε μαζί σας σχετικά με προσφορές ή νέα του καταστήματος, εφόσον έχετε συναινέσει.",
                "Για να συμμορφωνόμαστε με τις νομικές μας υποχρεώσεις.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0 mt-2" />
                  <p className="text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-stone-800 mb-3">
              4. Κοινοποίηση δεδομένων σε τρίτους
            </h2>
            <p className="text-sm sm:text-base">
              Δεν πωλούμε, δεν ενοικιάζουμε και δεν κοινοποιούμε τα προσωπικά
              σας δεδομένα σε τρίτους, εκτός εάν αυτό απαιτείται από το νόμο ή
              είναι απαραίτητο για την παροχή των υπηρεσιών μας (π.χ. παροχείς
              φιλοξενίας ιστοτόπου).
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-stone-800 mb-3">
              5. Cookies
            </h2>
            <p className="text-sm sm:text-base">
              Ο ιστότοπός μας ενδέχεται να χρησιμοποιεί cookies για τη βελτίωση
              της εμπειρίας πλοήγησής σας. Τα cookies είναι μικρά αρχεία
              κειμένου που αποθηκεύονται στη συσκευή σας. Μπορείτε να
              απενεργοποιήσετε τα cookies μέσα από τις ρυθμίσεις του
              προγράμματος περιήγησής σας, αν και αυτό ενδέχεται να επηρεάσει
              ορισμένες λειτουργίες του ιστοτόπου.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-stone-800 mb-3">
              6. Ασφάλεια δεδομένων
            </h2>
            <p className="text-sm sm:text-base">
              Λαμβάνουμε κατάλληλα τεχνικά και οργανωτικά μέτρα για την
              προστασία των προσωπικών σας δεδομένων από μη εξουσιοδοτημένη
              πρόσβαση, απώλεια ή καταστροφή. Ωστόσο, κανένα σύστημα μετάδοσης
              δεδομένων μέσω διαδικτύου δεν είναι απολύτως ασφαλές.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-stone-800 mb-3">
              7. Τα δικαιώματά σας
            </h2>
            <p className="text-sm sm:text-base mb-4">
              Σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR), έχετε
              τα εξής δικαιώματα:
            </p>
            <div className="space-y-3">
              {[
                {
                  label: "Πρόσβαση",
                  desc: "Δικαίωμα να γνωρίζετε ποια δεδομένα σας τηρούμε.",
                },
                {
                  label: "Διόρθωση",
                  desc: "Δικαίωμα να ζητήσετε διόρθωση ανακριβών δεδομένων.",
                },
                {
                  label: "Διαγραφή",
                  desc: "Δικαίωμα να ζητήσετε τη διαγραφή των δεδομένων σας.",
                },
                {
                  label: "Εναντίωση",
                  desc: "Δικαίωμα να αντιταχθείτε στην επεξεργασία των δεδομένων σας.",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0 mt-2" />
                  <p className="text-sm sm:text-base">
                    <span className="font-medium text-stone-700">
                      {item.label}:
                    </span>{" "}
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 8 — Contact */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-stone-800 mb-3">
              8. Επικοινωνία
            </h2>
            <p className="text-sm sm:text-base mb-4">
              Για οποιοδήποτε ερώτημα σχετικά με την παρούσα Πολιτική Απορρήτου
              ή για την άσκηση των δικαιωμάτων σας, επικοινωνήστε μαζί μας:
            </p>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                <span className="font-medium text-stone-700">Email: </span>
                <a
                  href="mailto:giorgos7ier@yahoo.gr"
                  className="text-orange-500 hover:text-orange-600 transition-colors"
                >
                  giorgos7ier@yahoo.gr
                </a>
              </p>
              <p>
                <span className="font-medium text-stone-700">Τηλέφωνο: </span>
                <a
                  href="tel:2842024691"
                  className="text-orange-500 hover:text-orange-600 transition-colors"
                >
                  2842 024691
                </a>
              </p>
              <p>
                <span className="font-medium text-stone-700">Διεύθυνση: </span>
                Οδός Εμμανουήλ Λαμπράκη 25, Ιεράπετρα 72200
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
