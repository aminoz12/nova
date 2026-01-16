'use client'

import { Phone, FileText, ArrowRight, Shield, Clock, Award, Users, CheckCircle, RefreshCw, Droplet, Package } from 'lucide-react'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import ContactModal from '@/components/ContactModal'

export default function RechargeService() {
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
                  src="/services/recharge.png" 
                  alt="Recharge - Protection Incendie"
                  className="w-full h-full object-contain bg-gradient-to-br from-green-50 to-white p-8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8 md:p-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">RECHARGE</h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Recharge et remplissage d'extincteurs conformément aux normes en vigueur
                </p>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6 py-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Description Complète</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Notre service de recharge d'extincteurs garantit que vos équipements sont toujours prêts à intervenir. 
                      Nous réalisons le remplissage et la recharge de tous types d'extincteurs conformément aux normes NF S 61-900 
                      et réglementation ERP/IGH pour assurer leur efficacité en cas d'incendie.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6 py-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Types de Recharge</h3>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Recharge extincteur à poudre</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Recharge extincteur à eau pulvérisé + additif</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Échange standard extincteur CO2</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-600 pl-6 py-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Processus d'Intervention</h3>
                    <ul className="text-gray-600 space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Contrôle visuel de l'extincteur</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Vidange et nettoyage complet</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Remplissage avec agent extincteur certifié</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Repressurisation et contrôle d'étanchéité</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Mise à jour de l'étiquetage réglementaire</span>
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
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-green-50 transition-colors">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Efficacité Maximale</h4>
                    <p className="text-gray-600">Extincteurs toujours opérationnels</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Conformité Normes</h4>
                    <p className="text-gray-600">Respect NF S 61-900</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-orange-50 transition-colors">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-7 h-7 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Produits Certifiés</h4>
                    <p className="text-gray-600">Agents extincteurs homologués</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-purple-50 transition-colors">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Package className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Traçabilité</h4>
                    <p className="text-gray-600">Documentation complète</p>
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
      {showContact && <ContactModal serviceName="Recharge" onClose={() => setShowContact(false)} />}
      <Footer />
    </main>
  )
}
