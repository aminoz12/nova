'use client'

import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgent: false
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
          name: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          urgent: false
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
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative container-custom px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight">
              Contactez-nous
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed px-4">
              Nous sommes là pour répondre à toutes vos questions et besoins en protection incendie
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Contact Methods Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/33607117838" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border-2 border-transparent hover:border-green-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-green-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Contactez-nous directement</p>
                  <p className="text-lg sm:text-xl font-bold text-green-600 break-all">+33 6 07 11 7838</p>
                  <div className="mt-3 sm:mt-4 flex items-center text-green-600 text-xs sm:text-sm font-semibold">
                    <span>Envoyer un message</span>
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a 
                href="tel:0607117838" 
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Téléphone</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Appelez-nous maintenant</p>
                  <p className="text-lg sm:text-xl font-bold text-blue-600">06 07 11 78 38</p>
                  <p className="text-xs sm:text-sm text-red-600 font-semibold mt-2">24/7 pour les urgences</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:contact@nova-ssi.fr" 
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border-2 border-transparent hover:border-red-500 overflow-hidden sm:col-span-2 lg:col-span-1"
              >
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-red-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Envoyez-nous un message</p>
                  <p className="text-base sm:text-lg font-bold text-red-600 break-all">contact@nova-ssi.fr</p>
                </div>
              </a>
            </div>

            {/* Contact Form Section */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100">
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-100 to-red-200 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-red-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Envoyez-nous un Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {submitStatus.type && (
                    <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                      <p className="text-sm font-medium">{submitStatus.message}</p>
                    </div>
                  )}
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-sm sm:text-base"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-sm sm:text-base"
                        placeholder="Nom de l'entreprise"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-sm sm:text-base"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-sm sm:text-base"
                        placeholder="06 07 11 78 38"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type de Service</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-sm sm:text-base bg-white"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="evaluation">Évaluation des risques</option>
                      <option value="installation">Installation d'alarmes</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="extincteurs">Extincteurs</option>
                      <option value="baes">Éclairage BAES</option>
                      <option value="desenfumage">Désenfumage</option>
                      <option value="ria">RIA</option>
                      <option value="formation">Formation</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all resize-none text-sm sm:text-base"
                      placeholder="Décrivez votre besoin ou votre projet..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="urgent"
                      name="urgent"
                      checked={formData.urgent}
                      onChange={handleChange}
                      className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                    />
                    <label htmlFor="urgent" className="text-sm text-gray-700">
                      Demande urgente
                    </label>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 sm:py-4 px-6 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-red-500/50 flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
                  </button>
                </form>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4 sm:space-y-6">
                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-red-200">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Rapide</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <a 
                      href="tel:0607117838"
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl hover:bg-red-50 transition-all duration-300 group shadow-sm hover:shadow-md"
                    >
                      <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all shadow-sm">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">Appel d'urgence</p>
                        <p className="text-blue-600 font-bold text-sm sm:text-base break-all">06 07 11 78 38</p>
                      </div>
                    </a>
                    
                    <a 
                      href="mailto:contact@nova-ssi.fr"
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl hover:bg-red-50 transition-all duration-300 group shadow-sm hover:shadow-md"
                    >
                      <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center group-hover:from-red-200 group-hover:to-red-300 transition-all shadow-sm">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">Email</p>
                        <p className="text-red-600 font-bold text-xs sm:text-sm break-all">contact@nova-ssi.fr</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm">
                      <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Heures d'Ouverture</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <div>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">Lundi - Samedi</p>
                      </div>
                      <p className="text-gray-600 font-medium text-sm sm:text-base">8h - 18h</p>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <div>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">Dimanche</p>
                      </div>
                      <p className="text-gray-600 font-medium text-sm sm:text-base">Fermé</p>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <div>
                        <p className="font-semibold text-red-600 text-sm sm:text-base">Urgences</p>
                      </div>
                      <p className="text-gray-600 font-medium text-sm sm:text-base">Disponible 24/7</p>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-green-200">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Temps de Réponse</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                      <p className="text-sm sm:text-base text-gray-700"><strong>Email:</strong> Moins de 2 heures</p>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <p className="text-sm sm:text-base text-gray-700"><strong>Téléphone:</strong> Immédiat</p>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                      <p className="text-sm sm:text-base text-gray-700"><strong>Urgences:</strong> Intervention rapide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-red-600/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">Besoin d'un Devis ?</h2>
                  <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
                    Remplissez notre formulaire en ligne pour obtenir une estimation personnalisée et gratuite
                  </p>
                </div>
                <div className="flex justify-center">
                  <a 
                    href="/devis" 
                    className="inline-flex items-center gap-2 sm:gap-3 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
                  >
                    <span>Demander un Devis Gratuit</span>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
