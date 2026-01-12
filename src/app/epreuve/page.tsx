'use client'

import { Phone, FileText, ArrowRight, Shield, Clock, Award, Users, CheckCircle, TestTube, Gauge, Zap } from 'lucide-react'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function EpreuveService() {
  const [showContact, setShowContact] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Main Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Service Details */}
          <div className="lg:col-span-2">
            {/* Service Image - Improved Design */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
              <div className="relative w-full h-80 md:h-96 lg:h-[500px]">
                <img 
                  src="/services/epreuve.png" 
                  alt="Épreuve - Protection Incendie"
                  className="w-full h-full object-contain bg-gradient-to-br from-red-50 to-white p-8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8 md:p-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">ÉPREUVE</h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Épreuve hydraulique des extincteurs pour vérifier leur résistance et fiabilité
                </p>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6 py-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Description Complète</h3>
                    <p className="text-gray-600 leading-relaxed">
                      L'épreuve hydraulique est un test obligatoire qui vérifie la résistance et la fiabilité de vos extincteurs. 
                      Nous réalisons cette épreuve conformément aux normes NF S 61-900 pour garantir que vos équipements 
                      peuvent supporter la pression en cas d'utilisation et assurer la sécurité des utilisateurs.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6 py-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Types d'Épreuves</h3>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Épreuve hydraulique extincteurs à eau</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Épreuve hydraulique extincteurs à poudre</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Épreuve hydraulique extincteurs à CO2</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Test d'étanchéité des réservoirs</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-600 pl-6 py-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Processus d'Intervention</h3>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Démontage complet de l'extincteur</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Test de pression hydraulique</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Inspection visuelle des composants</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Remplacement des pièces défectueuses</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Remontage et certification</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Avantages</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-red-50 transition-colors">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TestTube className="w-7 h-7 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Fiabilité Testée</h4>
                    <p className="text-gray-600">Résistance garantie sous pression</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-green-50 transition-colors">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Sécurité Maximale</h4>
                    <p className="text-gray-600">Protection des utilisateurs assurée</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Gauge className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Conformité Normes</h4>
                    <p className="text-gray-600">Respect NF S 61-900</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-orange-50 transition-colors">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-7 h-7 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Longévité</h4>
                    <p className="text-gray-600">Prolongation durée de vie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:sticky lg:top-24 self-start">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contactez-nous</h3>
              
              <div className="space-y-4">
                <a 
                  href="tel:0607117838"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 group shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>Parler à un expert</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a href="/devis" className="w-full bg-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-green-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 group shadow-lg">
                  <FileText className="w-5 h-5" />
                  <span>Faire un devis</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Informations de Contact</h4>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="text-sm">06 07 11 78 38</span>
                  </p>
                  <p className="text-sm">Disponible 24/7 pour les urgences</p>
                  <p className="text-sm">Email: contact@nova-ssi.fr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowContact(false)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-8" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Parler à un expert Épreuve</h3>
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
      <Footer />
    </main>
  )
}
