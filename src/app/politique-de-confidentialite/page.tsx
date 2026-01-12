'use client'

import { Shield, Eye, Lock, Database, User, Globe } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-red-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Politique de Confidentialité</h1>
            <p className="text-lg text-gray-600">
              Nova SSI s'engage à protéger la confidentialité de vos données personnelles
            </p>
            <p className="text-sm text-gray-500 mt-2">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-red-600" />
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Chez Nova SSI, nous prenons la protection de vos données personnelles très au sérieux. 
                Cette politique de confidentialité explique quelles informations nous collectons, 
                comment nous les utilisons, et les droits dont vous disposez concernant vos données.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-red-600" />
                Collecte des Données
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Données Personnelles Collectées</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Nom, prénom et coordonnées professionnelles</li>
                    <li>Adresse e-mail et numéro de téléphone</li>
                    <li>Informations sur votre entreprise et vos besoins</li>
                    <li>Données de connexion et d'utilisation du site</li>
                    <li>Documents techniques et plans de sécurité</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Usage */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-red-600" />
                Utilisation des Données
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Utilisation Principale</h3>
                  <p className="text-gray-600 text-sm">
                    Fournir nos services de sécurité incendie, 
                    établir des devis, et assurer la maintenance
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Communication</h3>
                  <p className="text-gray-600 text-sm">
                    Vous informer sur nos services, 
                    formations et actualités réglementaires
                  </p>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-red-600" />
                Protection des Données
              </h2>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Mesures de Sécurité</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Chiffrement des données sensibles</li>
                  <li>Accès sécurisé et authentifié</li>
                  <li>Sauvegardes régulières et sécurisées</li>
                  <li>Conformité RGPD et normes européennes</li>
                </ul>
              </div>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <User className="w-6 h-6 text-red-600" />
                Vos Droits
              </h2>
              <div className="space-y-3">
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-semibold text-gray-900">Droit d'accès</h3>
                  <p className="text-gray-600 text-sm">Consulter vos données personnelles</p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-semibold text-gray-900">Droit de modification</h3>
                  <p className="text-gray-600 text-sm">Mettre à jour vos informations</p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-semibold text-gray-900">Droit de suppression</h3>
                  <p className="text-gray-600 text-sm">Demander la suppression de vos données</p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-600 mb-4">
                Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits :
              </p>
              <div className="space-y-2">
                <p className="text-gray-600"><strong>Email :</strong> contact@nova-ssi.fr</p>
                <p className="text-gray-600"><strong>Téléphone :</strong> 06 07 11 78 38</p>
                <p className="text-gray-600"><strong>Adresse :</strong> île de France, Paris</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}
