'use client'

import { Cookie, Settings, Shield, Eye, Database, CheckCircle, XCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CookiePolicy() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-10 h-10 text-red-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Politique de Cookies</h1>
            <p className="text-lg text-gray-600">
              Comment Nova SSI utilise les cookies pour améliorer votre expérience
            </p>
            <p className="text-sm text-gray-500 mt-2">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            {/* What are Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Cookie className="w-6 h-6 text-red-600" />
                Qu'est-ce qu'un Cookie ?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez notre site. 
                Il nous permet de reconnaître votre navigateur et de mémoriser certaines informations 
                pour améliorer votre expérience de navigation.
              </p>
            </section>

            {/* Types of Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Settings className="w-6 h-6 text-red-600" />
                Types de Cookies Utilisés
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold text-gray-900">Cookies Essentiels</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Indispensables au fonctionnement du site
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-xs space-y-1">
                    <li>Authentification et sécurité</li>
                    <li>Panier d'achat et devis</li>
                    <li>Préférences de confidentialité</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Cookies de Performance</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Pour analyser et améliorer le site
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-xs space-y-1">
                    <li>Statistiques de visite anonymes</li>
                    <li>Temps de chargement des pages</li>
                    <li>Navigation et parcours utilisateur</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="w-5 h-5 text-yellow-600" />
                    <h3 className="font-semibold text-gray-900">Cookies Fonctionnels</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Pour personnaliser votre expérience
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-xs space-y-1">
                    <li>Mémorisation des préférences</li>
                    <li>Contenu personnalisé</li>
                    <li>Historique des consultations</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <h3 className="font-semibold text-gray-900">Cookies Publicitaires</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Pour des publicités pertinentes (optionnels)
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-xs space-y-1">
                    <li>Publicités ciblées</li>
                    <li>Suivi des conversions</li>
                    <li>Partenaires publicitaires</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookie Management */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-red-600" />
                Gestion des Cookies
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Comment Gérer Vos Préférences</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Depuis notre site</h4>
                      <p className="text-gray-600 text-sm">
                        Utilisez notre panneau de configuration des cookies 
                        disponible en bas de chaque page pour accepter ou refuser 
                        les différentes catégories de cookies.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Depuis votre navigateur</h4>
                      <p className="text-gray-600 text-sm">
                        Vous pouvez configurer votre navigateur pour bloquer 
                        les cookies, supprimer les cookies existants ou 
                        recevoir une notification avant l'installation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Third-party Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-red-600" />
                Cookies Tiers
              </h2>
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Services Tiers Utilisés</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-800">Google Analytics</h4>
                      <p className="text-gray-600 text-sm">Analyse de l'audience et performance du site</p>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Performance</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-800">Google Maps</h4>
                      <p className="text-gray-600 text-sm">Affichage de notre localisation et itinéraires</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Fonctionnel</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-800">HubSpot</h4>
                      <p className="text-gray-600 text-sm">Gestion des formulaires de contact et devis</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Essentiel</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Duration */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Durée de Conservation</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-1">Session</div>
                  <p className="text-gray-600 text-sm">Cookies techniques</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-1">30 jours</div>
                  <p className="text-gray-600 text-sm">Cookies fonctionnels</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-1">2 ans</div>
                  <p className="text-gray-600 text-sm">Cookies analytics</p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vos Droits</h2>
              <div className="space-y-3">
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-semibold text-gray-900">Consentement Éclairé</h3>
                  <p className="text-gray-600 text-sm">
                    Vous pouvez consentir ou refuser les cookies non essentiels à tout moment
                  </p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-semibold text-gray-900">Transparence</h3>
                  <p className="text-gray-600 text-sm">
                    Nous informons clairement sur l'utilisation et la finalité de chaque cookie
                  </p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-semibold text-gray-900">Contrôle</h3>
                  <p className="text-gray-600 text-sm">
                    Vous conservez le contrôle total sur vos préférences de cookies
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-600 mb-4">
                Pour toute question concernant notre politique de cookies :
              </p>
              <div className="space-y-2">
                <p className="text-gray-600"><strong>Email :</strong> contact@nova-ssi.fr</p>
                <p className="text-gray-600"><strong>Téléphone :</strong> 06 07 11 78 38</p>
                <p className="text-gray-600"><strong>DPO :</strong> dpo@nova-ssi.fr</p>
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
