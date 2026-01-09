import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {

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
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Téléphone</h4>
                    <a href="tel:0607117838" className="text-xl font-bold hover:text-red-200 transition-colors">
                      06 07 11 78 38
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:contact@nova-ssi.fr" className="hover:text-red-200 transition-colors">
                      contact@nova-ssi.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Heures d'Ouverture</h4>
                    <p className="text-red-100">
                      Lundi - Samedi : 8h - 18h<br />
                      Dimanche : Fermé<br />
                      Jour férié ouvert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  )
}
