'use client'

import { Shield, Users, Award, Clock, CheckCircle, Target } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-red-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">À Propos de Nous</h1>
            <p className="text-lg text-gray-600">
              Votre partenaire de confiance en protection incendie et systèmes de sécurité
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            {/* Introduction */}
            <section className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Nova SSI est une entreprise spécialisée dans la protection incendie et les systèmes de sécurité incendie. 
                Avec une expérience de plus de 12 ans, nos techniciens et commerciaux vous accompagnent dans l'installation, 
                la maintenance et la mise en conformité de leurs équipements de sécurité incendie.
              </p>
            </section>

            {/* Expertise Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-3">
                <Award className="w-7 h-7 text-red-600" />
                Notre Expertise Technique
              </h2>
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Forts d'une expertise technique, nous mettons en place des solutions fiables et adaptées à chaque environnement :
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-6 text-center hover:bg-red-100 transition-colors">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Extincteurs</h3>
                  <p className="text-gray-600 text-sm">Installation et maintenance d'extincteurs certifiés</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-colors">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Blocs Lumineux BAES</h3>
                  <p className="text-gray-600 text-sm">Éclairage de secours et blocs autonomes</p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6 text-center hover:bg-green-100 transition-colors">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">RIA</h3>
                  <p className="text-gray-600 text-sm">Robinets d'Incendie Armés et colonnes sèches</p>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-6 text-center hover:bg-yellow-100 transition-colors">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Désenfumage</h3>
                  <p className="text-gray-600 text-sm">Systèmes de désenfumage et extraction de fumée</p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-6 text-center hover:bg-purple-100 transition-colors">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Plans de Secours</h3>
                  <p className="text-gray-600 text-sm">Plans d'évacuation et d'intervention</p>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-6 text-center hover:bg-orange-100 transition-colors">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Alarmes Incendie</h3>
                  <p className="text-gray-600 text-sm">Installation et maintenance d'alarmes type 4</p>
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nos Valeurs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sécurité des Personnes</h3>
                    <p className="text-gray-600 text-sm">
                      La protection des vies humaines est notre priorité absolue dans chaque projet que nous réalisons.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Protection des Biens</h3>
                    <p className="text-gray-600 text-sm">
                      Nous préservons vos actifs et assurons la continuité de vos activités grâce à des solutions fiables.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Commitment Section */}
            <section className="text-center bg-gradient-to-r from-red-50 to-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Engagement</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Faire confiance à Nova SSI, c'est choisir un partenaire engagé, compétent et à l'écoute, 
                au service de votre sécurité incendie.
              </p>
              
              <div className="flex justify-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-1">12+</div>
                  <p className="text-gray-600 text-sm">Années d'expérience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-1">100%</div>
                  <p className="text-gray-600 text-sm">Certifications à jour</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-1">24/7</div>
                  <p className="text-gray-600 text-sm">Support d'urgence</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prêt à Collaborer ?</h2>
              <p className="text-gray-600 mb-6">
                Contactez-nous dès aujourd'hui pour une évaluation gratuite de vos besoins en sécurité incendie.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#contact" className="btn-primary">
                  Nous Contacter
                </a>
                <a href="#services" className="btn-secondary">
                  Découvrir nos Services
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
