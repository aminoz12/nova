'use client'

import { FileText, CheckCircle, Calculator, Send, Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DevisPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    projectDescription: '',
    urgency: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Quote request submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const services = [
    "Évaluation des Risques d'Incendie",
    "Installation d'Extincteurs",
    "BAES (Éclairage de Secours)",
    "Désenfumage",
    "RIA (Robinets d'Incendie Armés)",
    "Installation d'Alarmes Incendie",
    "Maintenance d'Alarmes Incendie",
    "Systèmes de Sécurité Intégrés",
    "Formation Incendie",
    "Autre"
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Devis Gratuit",
                description: "Estimation détaillée sans engagement"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Réponse Rapide",
                description: "Réponse sous 24-48 heures"
              },
              {
                icon: <Calculator className="w-8 h-8" />,
                title: "Prix Transparents",
                description: "Pas de frais cachés, tout est clair"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-red-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Formulaire de Demande de Devis</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Informations Personnelles</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Informations de l'Entreprise</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom de l'Entreprise *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        placeholder="Votre Entreprise Ltd"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Adresse
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        placeholder="Adresse complète"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Coordonnées</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        placeholder="06 07 11 78 38"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Détails du Projet</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Demandé *
                      </label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Description du Projet *
                      </label>
                      <textarea
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all resize-none"
                        placeholder="Décrivez votre projet en détail..."
                      ></textarea>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Urgence
                        </label>
                        <select 
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="urgent">Urgent sous 48h</option>
                          <option value="normal">Normal 1 semaine</option>
                          <option value="flexible">Flexible +1 semaine</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button 
                    type="submit" 
                    className="w-full bg-red-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-red-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    Envoyer la Demande de Devis
                  </button>
                  <p className="text-center text-gray-500 text-sm mt-4">
                    Nous vous répondrons dans les 24-48 heures suivant votre demande
                  </p>
                </div>
              </form>
            </div>

            {/* Contact Alternative */}
            <div className="mt-12 bg-white rounded-3xl shadow-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Préférez-vous nous appeler ?</h3>
              <p className="text-gray-600 mb-6">
                Notre équipe est disponible pour discuter de votre projet
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:08007313630" 
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  06 07 11 78 38
                </a>
                <a 
                  href="mailto:contact@nova-ssi.fr" 
                  className="inline-flex items-center justify-center gap-2 bg-gray-200 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  contact@nova-ssi.fr
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

