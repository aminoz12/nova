'use client'

import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'contact'
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.' })
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Une erreur est survenue. Veuillez réessayer.' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Une erreur est survenue. Veuillez réessayer plus tard.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

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
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {submitStatus.type && (
                <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
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
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service d'Intérêt
                </label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base bg-white"
                >
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Details */}
            <div className="bg-red-600 text-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Informations de Contact</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1 sm:mt-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">Téléphone</h4>
                    <a href="tel:0607117838" className="text-lg sm:text-xl md:text-2xl font-bold hover:text-red-200 transition-colors break-all">
                      06 07 11 78 38
                    </a>
                  </div>
                </div>

                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1 sm:mt-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">Email</h4>
                    <a href="mailto:contact@nova-ssi.fr" className="text-sm sm:text-base hover:text-red-200 transition-colors break-all">
                      contact@nova-ssi.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">Heures d'Ouverture</h4>
                    <p className="text-sm sm:text-base text-red-100 leading-relaxed">
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
