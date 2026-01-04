import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const recentNews = [
    {
      title: "Exigences d'Installation d'Alarme Incendie",
      link: "#"
    },
    {
      title: "Guide de Maintenance d'Alarme", 
      link: "#"
    },
    {
      title: "BS 5839-1 : 2025 — Mises à Jour Clés",
      link: "#"
    },
    {
      title: "Maintenance d'Alarme Incendie",
      link: "#"
    }
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Contactez-nous aujourd'hui pour des services experts de protection incendie et de sécurité
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un Message</h3>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                    type="tel"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service d'Intérêt
                </label>
                <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base">
                  <option value="">Sélectionnez un service</option>
                  <option value="fire-risk-assessment">Évaluation des Risques</option>
                  <option value="fire-alarms">Alarmes Incendie</option>
                  <option value="extinguishers">Extincteurs</option>
                  <option value="emergency-lighting">Éclairage de Secours</option>
                  <option value="fire-training">Formation Incendie</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                Envoyer le Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-red-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Siège Social</h4>
                    <p className="text-red-100">
                      Walker Fire (Siège Social)<br />
                      Unité 81 Roman Way Industrial Estate<br />
                      Preston, Lancashire, PR2 5BB
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Téléphone</h4>
                    <a href="tel:08007313630" className="text-xl font-bold hover:text-red-200 transition-colors">
                      0800 731 3630
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:helpdesk@novasafety.com" className="hover:text-red-200 transition-colors">
                      helpdesk@novasafety.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Heures d'Ouverture</h4>
                    <p className="text-red-100">
                      Lundi - Vendredi : 8:00 - 17:00<br />
                      Samedi - Dimanche : Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent News */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Actualités Récentes</h3>
              <div className="space-y-4">
                {recentNews.map((news, index) => (
                  <a key={index} href={news.link} className="block hover:text-red-600 transition-colors">
                    <h4 className="font-semibold text-gray-900 hover:text-red-600">
                      {news.title}
                    </h4>
                  </a>
                ))}
              </div>
              <a href="#" className="inline-block mt-6 text-red-600 font-semibold hover:text-red-700">
                Voir toutes les actualités →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
