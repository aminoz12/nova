'use client'

import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Gérant Magasin",
      text: "Excellent service de maintenance pour nos extincteurs réalisé par Nova SSI en 2025. Les techniciens sont très professionnels et ponctuels. Tous nos équipements sont maintenant conformes aux normes.",
      rating: 5,
      company: "Magasin Pièces Auto"
    },
    {
      name: "Propriétaire Restaurant",
      text: "Nova SSI a effectué la maintenance de nos extincteurs et BAES en 2026. Service impeccable, équipe réactive et conseils pertinents. Nous recommandons vivement leurs services pour la sécurité incendie.",
      rating: 5,
      company: "Restaurant"
    },
    {
      name: "Pharmacien",
      text: "Maintenance régulière de nos extincteurs et BAES par Nova SSI depuis 2025. Très satisfait de leur professionnalisme et de leur expertise. Ils nous accompagnent parfaitement dans notre démarche de conformité.",
      rating: 5,
      company: "Pharmacie"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonialsPerSlide = 3
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, currentIndex])

  const getCurrentTestimonials = () => {
    const start = currentIndex * testimonialsPerSlide
    return testimonials.slice(start, start + testimonialsPerSlide)
  }

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Témoignages</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ce que nos clients disent de nos services de protection incendie et de sécurité
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">
                    {testimonials
                      .slice(slideIndex * testimonialsPerSlide, (slideIndex + 1) * testimonialsPerSlide)
                      .map((testimonial, index) => (
                        <div 
                          key={index} 
                          className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 w-full max-w-md mx-auto"
                        >
                          <div className="flex items-start mb-3 sm:mb-4 md:mb-6">
                            <div className="bg-gradient-to-br from-red-500 to-red-600 p-2 sm:p-2.5 md:p-3 rounded-xl mr-2 sm:mr-3 md:mr-4 flex-shrink-0">
                              <Quote className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex mb-2 flex-wrap">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400 fill-current flex-shrink-0" />
                                ))}
                              </div>
                              <p className="text-xs sm:text-sm text-gray-500 font-medium truncate">{testimonial.company}</p>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-3 sm:mb-4 md:mb-6 italic leading-relaxed text-sm sm:text-base line-clamp-4 sm:line-clamp-none">
                            "{testimonial.text}"
                          </p>
                          
                          <div className="flex items-center pt-3 sm:pt-4 border-t border-gray-100">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mr-2 sm:mr-3 md:mr-4 flex-shrink-0">
                              <span className="text-red-600 font-bold text-xs sm:text-sm md:text-lg">
                                {testimonial.name.charAt(0)}
                              </span>
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{testimonial.name}</h4>
                              <p className="text-xs sm:text-sm text-gray-600">Client Vérifié</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-red-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16 px-4">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 sm:p-10 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Rejoignez des centaines d'entreprises satisfaites
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-red-100">
              Qui nous font confiance pour leurs besoins de protection incendie
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg text-sm sm:text-base"
            >
              Commencer Aujourd'hui
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
