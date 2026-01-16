'use client'

import { Phone, FileText, ArrowRight, Shield, Clock, Award, Users, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import ContactModal from '@/components/ContactModal'

export default function BaesService() {
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
                  src="/services/baes.png" 
                  alt="BAES - Éclairage de Sécurité"
                  className="w-full h-full object-contain bg-gradient-to-br from-blue-50 to-white p-8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8 md:p-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">BAES</h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Éclairage de sécurité et systèmes d'éclairage d'évacuation pour les bâtiments
                </p>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6 py-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Description Complète</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Les BAES (Blocs Autonomes d'Éclairage de Sécurité) sont des dispositifs essentiels pour garantir 
                      l'évacuation sécurisée des personnes en cas d'incendie ou de panne de courant. Nos solutions 
                      comprennent l'installation, la maintenance et la vérification de systèmes d'éclairage de sécurité 
                      conformes aux normes en vigueur.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6 py-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Normes et Réglementations</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Conformité aux normes NF C 71-801, NF EN 1838, et réglementation ERP/IGH. 
                      Installation certifiée par des techniciens habilités et formations obligatoires du personnel.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-600 pl-6 py-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Types de BAES</h3>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>BAES d'évacuation (balisage des chemins d'évacuation)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>BAES d'ambiance (éclairage des locaux)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Systèmes centralisés avec source autonome</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Solutions SATI (Source Autonome à Test Intégré)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6 py-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Processus d'Intervention</h3>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Audit de l'existant et étude de faisabilité</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Dimensionnement et conception du système</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Installation par des techniciens certifiés</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Mise en service et tests de conformité</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Maintenance préventive et dépannage 24/7</span>
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
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Sécurité Maximale</h4>
                    <p className="text-gray-600">Évacuation garantie en cas d'urgence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-green-50 transition-colors">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Conformité Totale</h4>
                    <p className="text-gray-600">Respect de toutes les normes ERP/IGH</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-orange-50 transition-colors">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Test Automatique</h4>
                    <p className="text-gray-600">Systèmes SATI avec tests intégrés</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-purple-50 transition-colors">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Expertise Technique</h4>
                    <p className="text-gray-600">Techniciens spécialisés et formés</p>
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
                  <p className="text-sm">Email: contact@Nova SSI.fr</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Références</h4>
                <div className="space-y-2 text-gray-600 text-sm">
                  <p>• Établissements recevant du public (ERP)</p>
                  <p>• Immeubles de grande hauteur (IGH)</p>
                  <p>• Locaux industriels et commerciaux</p>
                  <p>• Établissements de santé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContact && <ContactModal serviceName="BAES" onClose={() => setShowContact(false)} />}
      <Footer />
    </main>
  )
}
