'use client'

import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation, ExternalLink } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  // Google Maps embed URL for the address
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.5!2d-2.7123!3d53.7654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b727f1c1b5d4b%3A0x1e3a8b8c8b8c8b8c!2sUnit%2081%2C%20Roman%20Way%20Industrial%20Estate%2C%20Preston%20PR2%205BB%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
  
  // Google Maps directions URL
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Unit+81+Roman+Way+Industrial+Estate,+Preston,+Lancashire+PR2+5BB,+UK"

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Nous sommes là pour répondre à toutes vos questions et besoins en protection incendie
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom px-4">
          <div className="max-w-7xl mx-auto">
            {/* Contact Methods Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/33644224076" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-green-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600 mb-4">Contactez-nous directement</p>
                  <p className="text-xl font-bold text-green-600">+33 6 44 22 40 76</p>
                  <div className="mt-4 flex items-center text-green-600 text-sm font-semibold">
                    <span>Envoyer un message</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a 
                href="tel:08007313630" 
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Téléphone</h3>
                  <p className="text-gray-600 mb-4">Appelez-nous maintenant</p>
                  <p className="text-xl font-bold text-blue-600">06 07 11 78 38</p>
                  <p className="text-sm text-red-600 font-semibold mt-2">24/7 pour les urgences</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:contact@nova-ssi.fr" 
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-red-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 mb-4">Envoyez-nous un message</p>
                  <p className="text-lg font-bold text-red-600 break-all">contact@nova-ssi.fr</p>
                </div>
              </a>
            </div>

            {/* Map and Location Section */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Map */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="relative h-96 md:h-[500px]">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <div className="p-6 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Notre Localisation</h3>
                        <p className="text-sm text-gray-600">Unité 81 Roman Way, Preston</p>
                      </div>
                    </div>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
                    >
                      <Navigation className="w-5 h-5" />
                      Itinéraire
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Address Card */}
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Notre Adresse</h2>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      <span className="font-semibold text-gray-900">Unité 81 Roman Way Industrial Estate</span><br />
                      Preston, Lancashire<br />
                      PR2 5BB, Royaume-Uni
                    </p>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors mt-4"
                    >
                      <Navigation className="w-5 h-5" />
                      Obtenir l'itinéraire
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Clock className="w-7 h-7 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Heures d'Ouverture</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <div>
                        <p className="font-semibold text-gray-900">Lundi - Samedi</p>
                      </div>
                      <p className="text-gray-600 font-medium">8h - 18h</p>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <div>
                        <p className="font-semibold text-gray-900">Dimanche</p>
                      </div>
                      <p className="text-gray-600 font-medium">Fermé</p>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <div>
                        <p className="font-semibold text-red-600">Urgences</p>
                      </div>
                      <p className="text-gray-600 font-medium">Disponible 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Besoin d'un Devis ?</h2>
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Remplissez notre formulaire en ligne pour obtenir une estimation personnalisée et gratuite
                  </p>
                </div>
                <div className="flex justify-center">
                  <a 
                    href="/devis" 
                    className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
                  >
                    <span>Demander un Devis Gratuit</span>
                    <ExternalLink className="w-5 h-5" />
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
