'use client'

import { Phone, FileText, ArrowRight, Shield, Clock, Award, Users, CheckCircle, Map, FileText as FileTextIcon, FileCheck } from 'lucide-react'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PlansService() {
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
                  src="/services/plans.png" 
                  alt="Plans - Protection Incendie"
                  className="w-full h-full object-contain bg-gradient-to-br from-indigo-50 to-white p-8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8 md:p-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Plans de secours</h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Élaboration de plans de sécurité incendie pour la conformité réglementaire
                </p>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6 py-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Description Complète</h3>
                    <p className="text-gray-600 leading-relaxed">
                     Nous élaborons des plans de secours complets pour garantir la conformité réglementaire de vos établissements. Nos plans incluent les plans d’intervention et les plans d’évacuation avec l’implantation des équipements de protection incendie, conforme aux normes ERP et à la réglementation incendie.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6 py-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Types de Plans de secours</h3>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Plan d’intervention</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Plan d’évacuation</span>
                      </li>
                     </ul>
                  </div>

                  <div className="border-l-4 border-orange-600 pl-6 py-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Processus d'Intervention</h3>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Analyse des plans architecturaux existants</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Relevé sur site des installations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Conception des plans selon normes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Validation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Livraison et installation</span>
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
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-indigo-50 transition-colors">
                  <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-7 h-7 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Plans Conformes</h4>
                    <p className="text-gray-600">Respect des réglementations ERP/IGH</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-green-50 transition-colors">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Sécurité Optimale</h4>
                    <p className="text-gray-600">Évacuation efficace garantie</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Map className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Précision Maximale</h4>
                    <p className="text-gray-600">Plans détaillés et à jour</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-orange-50 transition-colors">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileTextIcon className="w-7 h-7 text-orange-600" />
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Parler à un expert Plans</h3>
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
