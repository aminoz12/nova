import { Phone, Shield, AlertTriangle } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Simple clean background */}
      <div className="absolute inset-0 bg-gray-900"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2">
          <img 
            src="/hero.png" 
            alt="Fire protection professional" 
            className="w-full h-full object-cover object-right lg:object-right contrast-110 brightness-105"
            style={{ minHeight: '100vh' }}
          />
        </div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent lg:from-gray-900 lg:via-gray-900/60 lg:to-transparent"></div>
      </div>

      <div className="relative container-custom z-10">
        <div className="grid lg:grid-cols-2 gap-0 items-center min-h-screen">
          {/* Left side content */}
          <div className="flex items-center px-4 sm:px-6 lg:px-0 py-12 lg:py-0">
            <div className="flex items-center gap-4 sm:gap-8">
              {/* Enhanced vertical colored bar - responsive */}
              <div className="hidden sm:flex flex-col gap-1.5">
                <div className="w-2 sm:w-3 h-16 sm:h-20 bg-gradient-to-b from-cyan-400 to-cyan-500 shadow-lg shadow-cyan-400/40 rounded-t-sm"></div>
                <div className="w-2 sm:w-3 h-16 sm:h-20 bg-gradient-to-b from-orange-500 to-orange-600 shadow-lg shadow-orange-500/40"></div>
                <div className="w-2 sm:w-3 h-16 sm:h-20 bg-gradient-to-b from-cyan-400 to-cyan-500 shadow-lg shadow-cyan-400/40"></div>
                <div className="w-2 sm:w-3 h-16 sm:h-20 bg-gradient-to-b from-red-600 to-red-700 shadow-lg shadow-red-600/40 rounded-b-sm"></div>
              </div>
              
              {/* Enhanced main text */}
              <div className="w-full">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6 sm:mb-8 tracking-tight">
                  <span className="block mb-1">VOTRE SÉCURITÉ.</span>
                  <span className="block mb-1">VOS NORMES.</span>
                  <span className="block bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">NOTRE MÉTIER.</span>
                </h1>
                
                {/* Enhanced call-to-action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
                  <a href="tel:08007313630" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Appeler 0800 731 3630</span>
                  </a>
                  <a href="/devis" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center">
                    <span className="text-sm sm:text-base">Devis Gratuit</span>
                  </a>
                </div>
                
                {/* Enhanced trust badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="flex items-center gap-3 group">
                    <div className="bg-white/15 backdrop-blur-md p-2 sm:p-3 rounded-lg border border-white/25 shadow-lg group-hover:bg-white/25 group-hover:border-white/35 transition-all duration-300">
                      <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xs sm:text-sm mb-1">Certifié BAFE</h3>
                      <p className="text-xs text-white/90 hidden sm:block">UKAS & ISO 9001</p>
                      <p className="text-xs text-white/90 sm:hidden">Certifié</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="bg-white/15 backdrop-blur-md p-2 sm:p-3 rounded-lg border border-white/25 shadow-lg group-hover:bg-white/25 group-hover:border-white/35 transition-all duration-300">
                      <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xs sm:text-sm mb-1">75+ Ans</h3>
                      <p className="text-xs text-white/90 hidden sm:block">Dans le Secteur</p>
                      <p className="text-xs text-white/90 sm:hidden">Expérience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="bg-white/15 backdrop-blur-md p-2 sm:p-3 rounded-lg border border-white/25 shadow-lg group-hover:bg-white/25 group-hover:border-white/35 transition-all duration-300">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xs sm:text-sm mb-1">Support 24/7</h3>
                      <p className="text-xs text-white/90 hidden sm:block">Intervention d'Urgence</p>
                      <p className="text-xs text-white/90 sm:hidden">Urgence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - empty for image */}
          <div className="relative">
            {/* This space is for the background image */}
          </div>
        </div>
      </div>
    </section>
  )
}
