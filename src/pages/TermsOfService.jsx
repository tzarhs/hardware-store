export default function TermsOfService() {
  return (
    <main className="bg-stone-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium tracking-widest text-orange-400 uppercase mb-2">
            Νομικά
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-3">
            Όροι Χρήσης
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
              1. Αποδοχή Όρων
            </h2>
            <p className="text-sm sm:text-base">
              Με την πρόσβαση και τη χρήση του ιστοτόπου της εταιρείας{" "}
              <span className="font-semibold text-stone-700">ΤΖΑΡΗΣ</span>,
              αποδέχεστε πλήρως και ανεπιφύλακτα τους παρόντες Όρους Χρήσης. Εάν
              δεν συμφωνείτε με οποιονδήποτε από τους παρόντες όρους,
              παρακαλούμε να μην χρησιμοποιείτε τον ιστότοπό μας.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-stone-800 mb-3">
              2. Χρήση του Ιστοτόπου
            </h2>
            <p className="text-sm sm:text-base mb-4">
              Συμφωνείτε να χρησιμοποιείτε τον ιστότοπο αποκλειστικά για
              νόμιμους σκοπούς και με τρόπο που δεν παραβιάζει τα δικαιώματα
              τρίτων. Απαγορεύεται:
            </p>
            <div className="space-y-3">
              {[
                "Η χρήση του ιστοτόπου για παράνομες ή απατηλές δραστηριότητες.",
                "Η αποστολή ανεπιθύμητης αλληλογραφίας (spam) ή κακόβουλου λογισμικού.",
                "Η απόπειρα μη εξουσιοδοτημένης πρόσβασης στα συστήματά μας.",
                "Η αναπαραγωγή ή διανομή περιεχομένου χωρίς γραπτή άδεια.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0 mt-2" />
                  <p className="text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-stone-800 mb-3">
              3. Πνευματική Ιδιοκτησία
            </h2>
            <p className="text-sm sm:text-base">
              Όλο το περιεχόμενο του ιστοτόπου — συμπεριλαμβανομένων κειμένων,
              εικόνων, λογοτύπων και γραφικών — αποτελεί πνευματική ιδιοκτησία
              της εταιρείας ΤΖΑΡΗΣ και προστατεύεται από την ισχύουσα νομοθεσία
              περί πνευματικής ιδιοκτησίας. Απαγορεύεται η αναπαραγωγή,
              τροποποίηση ή διανομή χωρίς προηγούμενη γραπτή άδεια.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-stone-800 mb-3">
              4. Περιορισμός Ευθύνης
            </h2>
            <p className="text-sm sm:text-base mb-4">
              Η εταιρεία ΤΖΑΡΗΣ καταβάλλει κάθε δυνατή προσπάθεια για την
              ακρίβεια και επικαιρότητα των πληροφοριών του ιστοτόπου, ωστόσο
              δεν φέρει ευθύνη για:
            </p>
            <div className="space-y-3">
              {[
                "Τυχόν ανακρίβειες ή παραλείψεις στο περιεχόμενο.",
                "Προσωρινή μη διαθεσιμότητα του ιστοτόπου λόγω τεχνικών προβλημάτων.",
                "Ζημίες που προκύπτουν από τη χρήση ή αδυναμία χρήσης του ιστοτόπου.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0 mt-2" />
                  <p className="text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-stone-800 mb-3">
              5. Σύνδεσμοι προς Τρίτους
            </h2>
            <p className="text-sm sm:text-base">
              Ο ιστότοπός μας ενδέχεται να περιέχει συνδέσμους προς εξωτερικούς
              ιστοτόπους τρίτων. Οι σύνδεσμοι αυτοί παρέχονται για διευκόλυνσή
              σας και δεν συνεπάγονται έγκριση ή ευθύνη εκ μέρους μας για το
              περιεχόμενο των εν λόγω ιστοτόπων.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-stone-800 mb-3">
              6. Τροποποίηση Όρων
            </h2>
            <p className="text-sm sm:text-base">
              Διατηρούμε το δικαίωμα να τροποποιούμε τους παρόντες Όρους Χρήσης
              οποιαδήποτε στιγμή. Οι αλλαγές τίθενται σε ισχύ άμεσα μετά τη
              δημοσίευσή τους στον ιστότοπο. Η συνέχιση χρήσης του ιστοτόπου
              μετά από τυχόν αλλαγές συνεπάγεται αποδοχή των νέων όρων.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-stone-800 mb-3">
              7. Εφαρμοστέο Δίκαιο
            </h2>
            <p className="text-sm sm:text-base">
              Οι παρόντες Όροι Χρήσης διέπονται από το ελληνικό δίκαιο. Για
              οποιαδήποτε διαφορά προκύψει από τη χρήση του ιστοτόπου, αρμόδια
              ορίζονται τα δικαστήρια της Ιεράπετρας.
            </p>
          </div>

          {/* Section 8 — Contact */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-stone-800 mb-3">
              8. Επικοινωνία
            </h2>
            <p className="text-sm sm:text-base mb-4">
              Για οποιοδήποτε ερώτημα σχετικά με τους παρόντες Όρους Χρήσης,
              επικοινωνήστε μαζί μας:
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
