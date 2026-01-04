'use client'

import { useState } from 'react'
import { Phone, FileText, ArrowRight } from 'lucide-react'

export default function ImageServices() {
  const services = [
    {
      id: 1,
      title: "EXTINCTEURS",
      image: "/services/extincteurs.png",
      description: "Installation et vérification d'extincteurs pour garantir la sécurité incendie de vos locaux.",
      page: "/extincteurs"
    },
    {
      id: 2,
      title: "BAES",
      image: "/services/baes.png",
      description: "Éclairage de sécurité et systèmes d'éclairage d'évacuation pour les bâtiments.",
      page: "/baes"
    },
    {
      id: 3,
      title: "DÉSENFUMAGE",
      image: "/services/desenfumage.png",
      description: "Systèmes de désenfumage pour l'évacuation des fumées en cas d'incendie.",
      page: "/desenfumage"
    },
    {
      id: 4,
      title: "RIA",
      image: "/services/ria.png",
      description: "Robinets d'Incendie Armés pour la lutte contre les incendies professionnels.",
      page: "/ria"
    },
    {
      id: 5,
      title: "MAINTENANCE",
      image: "/services/maintenance.png",
      description: "Maintenance et entretien complet de tous vos équipements de sécurité incendie.",
      page: "/maintenance"
    },
    {
      id: 6,
      title: "RECHARGE",
      image: "/services/recharge.png",
      description: "Recharge et remplissage d'extincteurs conformément aux normes en vigueur.",
      page: "/recharge"
    },
    {
      id: 7,
      title: "ÉQUIPEMENTS",
      image: "/services/equipements.png",
      description: "Fourniture et installation de tous types d'équipements de protection incendie.",
      page: "/equipements"
    },
    {
      id: 8,
      title: "ÉPREUVE",
      image: "/services/epreuve.png",
      description: "Épreuve hydraulique des extincteurs pour vérifier leur résistance et fiabilité.",
      page: "/epreuve"
    },
    {
      id: 9,
      title: "PLANS",
      image: "/services/plans.png",
      description: "Élaboration de plans de sécurité incendie pour la conformité réglementaire.",
      page: "/plans"
    }
  ]

  const handleServiceClick = (page: string) => {
    window.location.href = page
  }

  return (
    <section className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 mb-6 sm:mb-8 leading-tight px-4 uppercase">
            Protégez vos vies. Sauvez votre activité. Soyez aux normes.
            <br className="hidden sm:block" />
            L'expertise incendie au service de votre sérénité.
          </h2>
        </div>

        {/* Services Grid - Responsive */}
        <div className="space-y-8 sm:space-y-12">
          {/* First row - 5 services */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {services.slice(0, 5).map((service) => (
              <div key={service.id} className="text-center flex flex-col items-center group">
                {/* Service image */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-3 sm:mb-4 cursor-pointer" onClick={() => handleServiceClick(service.page)}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover rounded-xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300"
                  />
                  {/* Click indicator */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
                        <span className="hidden sm:inline">Voir détails</span>
                        <span className="sm:hidden">Voir</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Service title and description */}
                <div className="flex-1 max-w-[120px] sm:max-w-xs text-center">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-900 mb-2 sm:mb-3 group-hover:text-blue-700 transition-colors cursor-pointer" onClick={() => handleServiceClick(service.page)}>
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 4 services */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-center">
            {services.slice(5).map((service) => (
              <div key={service.id} className="text-center flex flex-col items-center group">
                {/* Service image */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-3 sm:mb-4 cursor-pointer" onClick={() => handleServiceClick(service.page)}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover rounded-xl shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300"
                  />
                  {/* Click indicator */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
                        <span className="hidden sm:inline">Voir détails</span>
                        <span className="sm:hidden">Voir</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Service title and description */}
                <div className="flex-1 max-w-[120px] sm:max-w-xs text-center">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-900 mb-2 sm:mb-3 group-hover:text-blue-700 transition-colors cursor-pointer" onClick={() => handleServiceClick(service.page)}>
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 px-4">
          <button className="bg-blue-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-blue-500/50 transform hover:scale-105">
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm sm:text-base">Parler à un expert</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="bg-green-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-green-500/50 transform hover:scale-105">
            <FileText className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm sm:text-base">Faire un devis</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
