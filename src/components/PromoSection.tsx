'use client'

import { ArrowRight } from 'lucide-react'

export default function PromoSection() {
  return (
    <section className="relative py-0 overflow-hidden bg-gray-900">
      <div className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px]">
        {/* Background Image - Full Width */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero2.png" 
            alt="Fire protection services" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Blue Overlay - Left Side */}
        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-2/3 bg-gradient-to-r from-blue-900 via-blue-900/95 to-transparent z-10"></div>

        {/* Content - Left Side */}
        <div className="relative z-20 w-full py-16 sm:py-20 md:py-24 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl lg:max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight uppercase">
                Vous etes une <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">grande</span> etablisement ?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed uppercase">
               Bénéficiez d'un forfait avec les recharge d'extincteur totalement gratuite 
              </p>
              <a 
                href="/devis" 
                className="inline-flex items-center gap-2 bg-[#ef4444] hover:bg-red-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-red-500/50"
              >
                <span>Demander un Devis</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

