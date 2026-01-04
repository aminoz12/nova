'use client'

import { Shield, Award, Users, Clock, CheckCircle, Target, TrendingUp, Heart, Sparkles } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité Avant Tout",
      description: "Votre sécurité est notre priorité absolue. Nous nous engageons à fournir des solutions de protection incendie de la plus haute qualité.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence Certifiée",
      description: "Certifiés BAFE, NSI Gold, UKAS & ISO 9001. Nous respectons les normes les plus strictes de l'industrie.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expertise Éprouvée",
      description: "Plus de 75 ans d'expérience dans la protection incendie et la sécurité. Notre équipe d'experts est à votre service.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Disponibilité 24/7",
      description: "Support d'urgence disponible 24 heures sur 24, 7 jours sur 7. Nous sommes là quand vous en avez besoin.",
      color: "from-orange-500 to-orange-600"
    }
  ]

  const stats = [
    { number: "75+", label: "Années d'Expérience", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "10,000+", label: "Clients Satisfaits", icon: <Users className="w-6 h-6" /> },
    { number: "50+", label: "Techniciens Certifiés", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Disponible", icon: <Clock className="w-6 h-6" /> }
  ]

  const certifications = [
    { name: "BAFE Certified", description: "British Approvals for Fire Equipment" },
    { name: "NSI Gold", description: "National Security Inspectorate" },
    { name: "UKAS Accredited", description: "United Kingdom Accreditation Service" },
    { name: "ISO 9001 Certified", description: "Quality Management System" }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="relative container-custom px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold">Depuis 1949</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              À Propos de Nous
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
              Votre partenaire de confiance pour la protection incendie et la sécurité depuis plus de 75 ans
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative -mt-12">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center justify-center w-14 h-14 bg-red-100 rounded-2xl mb-4 text-red-600">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-semibold text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Notre Histoire
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Plus de 75 Ans d'Excellence
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
                <p>
                  Depuis plus de 75 ans, nous sommes un leader reconnu dans le domaine de la protection incendie 
                  et de la sécurité. Notre engagement envers l'excellence et l'innovation nous a permis de devenir 
                  un partenaire de confiance pour des milliers de clients à travers le pays.
                </p>
                <p>
                  Nous offrons une gamme complète de services, de l'évaluation des risques d'incendie à l'installation 
                  et à la maintenance de systèmes de sécurité avancés. Notre équipe d'experts certifiés travaille 
                  sans relâche pour garantir votre sécurité et votre conformité.
                </p>
                <p>
                  Chez Nova Safety, nous croyons que la sécurité ne devrait jamais être un compromis. C'est pourquoi 
                  nous nous engageons à fournir des solutions de la plus haute qualité, certifiées et conformes aux 
                  normes les plus strictes de l'industrie.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Notre Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Protéger les vies et les biens en fournissant des solutions de protection incendie et de sécurité 
                      de classe mondiale, tout en maintenant les normes les plus élevées de qualité et de service.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Notre Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Devenir le leader incontesté de la protection incendie et de la sécurité, reconnu pour notre 
                      innovation, notre excellence et notre engagement envers la satisfaction client.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Nos Valeurs</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Intégrité, excellence, innovation et engagement client sont au cœur de tout ce que nous faisons. 
                      Nous construisons des relations durables basées sur la confiance et le respect mutuel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Nos Valeurs
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre travail chaque jour
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.color} opacity-10 group-hover:opacity-20 transition-opacity rounded-full blur-2xl -translate-y-1/2 translate-x-1/2`}></div>
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform text-white`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="relative container-custom px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
              Certifications
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Certifications & Accréditations
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Nous sommes fiers de nos certifications qui témoignent de notre engagement envers l'excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all transform hover:-translate-y-2 shadow-xl">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-white/80">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Pourquoi Nous Choisir
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les avantages qui font de nous votre meilleur choix
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Plus de 75 ans d'expérience dans l'industrie",
              "Équipe de techniciens certifiés et expérimentés",
              "Support 24/7 pour les urgences",
              "Certifications BAFE, NSI Gold, UKAS & ISO 9001",
              "Solutions personnalisées adaptées à vos besoins",
              "Service client exceptionnel et réactif"
            ].map((item, index) => (
              <div key={index} className="group flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-gray-700 text-lg font-semibold pt-1">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
