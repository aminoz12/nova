'use client'

import { FileText, Scale, AlertCircle, Users, Gavel, Clock } from 'lucide-react'

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-red-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Termes & Conditions</h1>
            <p className="text-lg text-gray-600">
              Conditions générales d'utilisation des services Nova SSI
            </p>
            <p className="text-sm text-gray-500 mt-2">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            {/* Acceptation */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Gavel className="w-6 h-6 text-red-600" />
                Acceptation des Conditions
              </h2>
              <p className="text-gray-600 leading-relaxed">
                L'utilisation des services de Nova SSI implique l'acceptation pleine et entière 
                des présentes conditions générales. Ces conditions régissent l'ensemble de nos 
                relations contractuelles concernant la fourniture de services de sécurité incendie.
              </p>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-red-600" />
                Services Fournis
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Installation & Maintenance</h3>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    <li>Alarmes incendie type 4</li>
                    <li>Extincteurs et BAES</li>
                    <li>Systèmes de désenfumage</li>
                    <li>RIA et colonnes sèches</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Conformité & Formation</h3>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    <li>Évaluations des risques</li>
                    <li>Plans d'intervention</li>
                    <li>Formation incendie</li>
                    <li>Assistance réglementaire</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Obligations */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-red-600" />
                Obligations des Parties
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-semibold text-gray-900">Obligations de Nova SSI</h3>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mt-2">
                    <li>Fournir des services conformes aux normes ERP</li>
                    <li>Respecter les délais d'intervention convenus</li>
                    <li>Maintenir les certifications professionnelles</li>
                    <li>Assurer la confidentialité des informations clients</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-900">Obligations du Client</h3>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mt-2">
                    <li>Fournir un accès sécurisé aux installations</li>
                    <li>Communiquer les informations techniques nécessaires</li>
                    <li>Respecter les conditions de paiement</li>
                    <li>Signaler toute anomalie rapidement</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tarifs et Paiement */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Clock className="w-6 h-6 text-red-600" />
                Tarifs et Conditions de Paiement
              </h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Modalités de Paiement</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Devis et Prestations</h4>
                    <p className="text-gray-600 text-sm">
                      Les devis sont valables 30 jours. Tout acompte versé est non remboursable 
                      en cas d'annulation de la part du client.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Contrats de Maintenance</h4>
                    <p className="text-gray-600 text-sm">
                      Paiement annuel ou semestriel par anticipation. 
                      Toute interruption de service suspend les obligations contractuelles.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-red-600" />
                Limitation de Responsabilité
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Nova SSI ne peut être tenue responsable des dommages indirects, 
                  pertes d'exploitation ou conséquences résultant d'une mauvaise 
                  utilisation des équipements ou du non-respect des obligations 
                  réglementaires par le client. Notre responsabilité est limitée 
                  au montant des prestations fournies.
                </p>
              </div>
            </section>

            {/* Durée et Résiliation */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Durée et Résiliation</h2>
              <div className="space-y-3">
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Contrats de Maintenance</h3>
                  <p className="text-gray-600 text-sm">
                    Durée initiale de 12 mois, reconduction tacitive annuelle. 
                    Résiliation avec préavis de 3 mois par lettre recommandée.
                  </p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Prestations Ponctuelles</h3>
                  <p className="text-gray-600 text-sm">
                    Résiliation possible jusqu'à 48h avant l'intervention 
                    sans frais. Au-delà, frais d'annulation de 50% du montant.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Juridique</h2>
              <p className="text-gray-600 mb-4">
                Pour toute question concernant ces conditions générales :
              </p>
              <div className="space-y-2">
                <p className="text-gray-600"><strong>Email :</strong> juridique@nova-ssi.fr</p>
                <p className="text-gray-600"><strong>Téléphone :</strong> 01 XX XX XX XX</p>
                <p className="text-gray-600"><strong>Adresse :</strong> Votre adresse, Paris, France</p>
                <p className="text-gray-600"><strong>SIRET :</strong> XXX XXX XXX XXXXX</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
