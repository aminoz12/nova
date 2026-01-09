'use client'

import { Phone, FileText, ArrowRight, Shield, Clock, Award, Users } from 'lucide-react'
import { useState } from 'react'

export default function ExtincteursService() {
  const [showContact, setShowContact] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Main Content */}
      <div className="container-custom py-16">
        {/* Service Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">EXTINCTEURS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Installation et vérification d'extincteurs pour garantir la sécurité incendie de vos locaux
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Service Details */}
          <div className="lg:col-span-2">
            {/* Service Image */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="relative w-full h-64 md:h-80 mb-6">
                <img 
                  src="/services/extincteurs.png" 
                  alt="Extincteurs - Protection Incendie"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Détails du Service Extincteurs</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Description Complète</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Les extincteurs sont les premiers moyens de lutte contre les incendies. Nous assurons l'installation, 
                    la maintenance, la recharge et la vérification de tous types d'extincteurs conformément aux normes 
                    NF S 61-900 et réglementation ERP/IGH pour garantir leur efficacité en cas d'incendie.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Types d'Extincteurs</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                     Extincteurs d'Eau (gamme sans fluor)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                     Extincteurs à Poudre
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Extincteurs à CO2 (pour feux électriques)
                    </li>
                    
                  </ul>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Processus d'Intervention</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Analyse des risques et dimensionnement
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Installation selon normes NF S 61-900
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Vérification et maintenance annuelle
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Recharge et réépreuve tous les 5 ans
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Formation du personnel à l'utilisation
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Avantages</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Protection Immédiate</h4>
                    <p className="text-gray-600 text-sm">Intervention rapide sur les débuts d'incendie</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Conformité Totale</h4>
                    <p className="text-gray-600 text-sm">Respect de toutes les normes ERP/IGH</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Maintenance Garantie</h4>
                    <p className="text-gray-600 text-sm">Contrat de maintenance annuelle et préventive. préventive</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expertise Technique</h4>
                    <p className="text-gray-600 text-sm">Techniciens certifiés et habilités</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contactez-nous</h3>
              
              <div className="space-y-4">
                <button 
                  onClick={() => setShowContact(true)}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 group"
                >
                  <Phone className="w-5 h-5" />
                  <span>Parler à un expert</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="w-full bg-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 group">
                  <FileText className="w-5 h-5" />
                  <span>Faire un devis</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Informations de Contact</h4>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="text-sm">06 07 11 78 38</span>
                  </p>
                  <p className="text-sm">Disponible 24/7 pour les urgences</p>
                  <p className="text-sm">Email: contact@walkerfire.fr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Parler à un expert Extincteurs</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows={4}></textarea>
              </div>
              <div className="flex space-x-4">
                <button type="submit" className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Envoyer
                </button>
                <button 
                  type="button"
                  onClick={() => setShowContact(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
