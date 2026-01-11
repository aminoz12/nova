import { Phone, Shield, AlertTriangle } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden">
      {/* Simple clean background */}
      <div className="absolute inset-0 bg-gray-900"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2">
          <img 
            src="/hero.png" 
            alt="Fire protection professional" 
            className="w-full h-full object-cover object-center lg:object-right contrast-110 brightness-105"
            style={{ minHeight: '100vh' }}
          />
        </div>
        {/* Enhanced overlay for better text readability on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-transparent lg:from-gray-900 lg:via-gray-900/60 lg:to-transparent"></div>
        {/* Additional dark overlay for mobile for better contrast */}
        <div className="absolute inset-0 bg-gray-900/40 lg:hidden"></div>
      </div>

      <div className="relative container-custom z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[85vh] sm:min-h-screen py-16 sm:py-20 lg:py-0">
          {/* Left side content */}
          <div className="flex items-center px-4 sm:px-6 lg:px-0">
            <div className="flex items-start sm:items-center gap-3 sm:gap-4 md:gap-8 w-full">
              {/* Enhanced vertical colored bar - show compact version on mobile */}
              <div className="flex flex-col gap-1 flex-shrink-0">
                <div className="w-1.5 sm:w-2 md:w-3 h-12 sm:h-16 md:h-20 bg-gradient-to-b from-cyan-400 to-cyan-500 shadow-lg shadow-cyan-400/40 rounded-t-sm"></div>
                <div className="w-1.5 sm:w-2 md:w-3 h-12 sm:h-16 md:h-20 bg-gradient-to-b from-orange-500 to-orange-600 shadow-lg shadow-orange-500/40"></div>
                <div className="w-1.5 sm:w-2 md:w-3 h-12 sm:h-16 md:h-20 bg-gradient-to-b from-cyan-400 to-cyan-500 shadow-lg shadow-cyan-400/40"></div>
                <div className="w-1.5 sm:w-2 md:w-3 h-12 sm:h-16 md:h-20 bg-gradient-to-b from-red-600 to-red-700 shadow-lg shadow-red-600/40 rounded-b-sm"></div>
              </div>
              
              {/* Enhanced main text */}
              <div className="w-full flex-1">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] sm:leading-tight mb-5 sm:mb-6 md:mb-8 tracking-tight">
                  <span className="block mb-1 sm:mb-2">VOTRE SÉCURITÉ.</span>
                  <span className="block bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">NOTRE PRIORITÉ.</span>
                </h1>
                
                {/* Enhanced call-to-action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12">
                  <a href="tel:0607117838" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center text-sm sm:text-base w-full sm:w-auto">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="whitespace-nowrap">Appeler 06 07 11 78 38</span>
                  </a>
                  <a href="/devis" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center text-sm sm:text-base w-full sm:w-auto">
                    <span>Devis Gratuit</span>
                  </a>
                </div>
                
                {/* Enhanced trust badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  <div className="flex items-center gap-2 sm:gap-3 group">
                    <div className="bg-white/20 backdrop-blur-md p-2 sm:p-2.5 md:p-3 rounded-lg border border-white/30 shadow-lg group-hover:bg-white/30 group-hover:border-white/40 transition-all duration-300 flex-shrink-0">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-white text-xs sm:text-sm mb-0.5 sm:mb-1 leading-tight">conformité et sécurité</h3>
                      <p className="text-xs text-white/90 hidden sm:block">UKAS & ISO 9001</p>
                      <p className="text-xs text-white/90 sm:hidden">Certifié</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 group">
                    <div className="bg-white/20 backdrop-blur-md p-2 sm:p-2.5 md:p-3 rounded-lg border border-white/30 shadow-lg group-hover:bg-white/30 group-hover:border-white/40 transition-all duration-300 flex-shrink-0">
                      <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-white text-xs sm:text-sm mb-0.5 sm:mb-1 leading-tight">+12 Ans</h3>
                      <p className="text-xs text-white/90 hidden sm:block">Dans le Secteur</p>
                      <p className="text-xs text-white/90 sm:hidden">Expérience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 group">
                    <div className="bg-white/20 backdrop-blur-md p-2 sm:p-2.5 md:p-3 rounded-lg border border-white/30 shadow-lg group-hover:bg-white/30 group-hover:border-white/40 transition-all duration-300 flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-white text-xs sm:text-sm mb-0.5 sm:mb-1 leading-tight">Support 24/7</h3>
                      <p className="text-xs text-white/90 hidden sm:block">Intervention d'Urgence</p>
                      <p className="text-xs text-white/90 sm:hidden">Urgence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - empty for image */}
          <div className="relative hidden lg:block">
            {/* This space is for the background image */}
          </div>
        </div>
      </div>
    </section>
  )
}
