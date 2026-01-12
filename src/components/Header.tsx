'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-2 sm:py-3 border-b border-gray-700">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            {/* Location */}
            <div className="flex items-center gap-2 text-xs sm:text-sm order-2 sm:order-1">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
              <span className="font-medium truncate uppercase">île de France, Paris</span>
            </div>
            
            {/* Hours */}
            <div className="flex items-center gap-2 text-xs sm:text-sm order-1 sm:order-2">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
              <span className="font-medium hidden sm:inline">Lun-Sam 8h-18h</span>
              <span className="font-medium sm:hidden">Lun-Sam 8h-18h</span>
            </div>
            
            {/* Contact */}
            <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm order-3">
              <div className="hidden sm:flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="font-medium">contact@nova-ssi.fr</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
                <a href="tel:0607117838" className="font-bold text-red-300 hover:text-red-200 transition-colors">
                  <span className="hidden sm:inline">06 07 11 78 38</span>
                  <span className="sm:hidden">06 07 11 78 38</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="block">
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className="h-8 sm:h-10 md:h-12 w-auto"
                />
              </a>
            </div>

            {/* Mobile Brand Name - Only visible on mobile */}
            <div className="lg:hidden">
              <h1 className="text-xl font-bold" style={{ color: '#696969' }}>
                NOVA SSI
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a href="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Accueil</a>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-red-600 transition-colors flex items-center gap-1 font-medium">
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 xl:w-96 bg-white shadow-xl rounded-lg p-4 xl:p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Protection Incendie</h4>
                    <ul className="space-y-2">
                      <li><a href="/#services" className="text-sm text-gray-600 hover:text-red-600 transition-colors block">Évaluation des Risques Incendie</a></li>
                      <li><a href="/#services" className="text-sm text-gray-600 hover:text-red-600 transition-colors block">Maintenance</a></li>
                      <li><a href="/#services" className="text-sm text-gray-600 hover:text-red-600 transition-colors block">Intervention Rapide en Cas d'Urgence</a></li>
                      <li><a href="/#services" className="text-sm text-gray-600 hover:text-red-600 transition-colors block">Installation Matériaux de Protection Incendie</a></li>
                      <li><a href="/#services" className="text-sm text-gray-600 hover:text-red-600 transition-colors block">Formation Utilisation Extincteur</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <a href="#testimonials" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Témoignages</a>
              <a href="/contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Contact</a>
              <a href="/devis" className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50">
                Devis
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="container-custom py-4 space-y-2">
              <a href="/" className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors font-medium">Accueil</a>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full px-4 py-3 text-left text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors font-medium flex items-center justify-between"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 pr-4 py-2 space-y-1 bg-gray-50 rounded-lg mt-1">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-xs uppercase tracking-wide">Protection Incendie</h4>
                      <div className="space-y-1">
                        <a href="/#services" className="block px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-white rounded transition-colors">Évaluation des Risques Incendie</a>
                        <a href="/#services" className="block px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-white rounded transition-colors">Maintenance</a>
                        <a href="/#services" className="block px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-white rounded transition-colors">Intervention Rapide en Cas d'Urgence</a>
                        <a href="/#services" className="block px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-white rounded transition-colors">Installation Matériaux de Protection Incendie</a>
                        <a href="/#services" className="block px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-white rounded transition-colors">Formation Utilisation Extincteur</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <a href="#testimonials" className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors font-medium">Témoignages</a>
              <a href="/contact" className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors font-medium">Contact</a>
              <a href="/devis" className="block mx-4 bg-red-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50 text-center">
                Devis
              </a>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 mt-4 border-t border-gray-200 space-y-2 px-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-red-400" />
                  <span>contact@nova-ssi.fr</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-red-400" />
                  <a href="tel:0607117838" className="font-bold text-red-600">06 07 11 78 38</a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
