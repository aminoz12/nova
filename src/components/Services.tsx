import { FireExtinguisher, AlertTriangle, Shield, Camera, Users, Lightbulb, Phone } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Évaluations des Risques d'Incendie",
      description: "Protégez vos personnes. Restez conforme. Obtenez une évaluation des risques d'incendie approuvée par le gouvernement réalisée par des évaluateurs experts à travers le Royaume-Uni.",
      features: ["Remplir les obligations légales", "Éviter les amendes", "Garder les locaux sûrs"],
      link: "#"
    },
    {
      icon: <FireExtinguisher className="w-8 h-8" />,
      title: "Fourniture et Maintenance d'Extincteurs",
      description: "Produits de la plus haute qualité à des prix compétitifs. Du CO₂ et mousse à la poudre et l'eau, chaque extincteur est approuvé BS EN3.",
      features: ["Techniciens expérimentés et habilités", "Installation nationale", "Support complet de conformité"],
      link: "#"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Installation et Maintenance d'Alarmes Incendie",
      description: "Une réponse rapide commence par des alarmes expertes. Nous installons et entretenons des systèmes d'alarme incendie selon les normes britanniques (BS5839).",
           features: ["Conformité aux normes britanniques", "Adapté à votre bâtiment", "Maintenance de performance optimale"],
      link: "#"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Systèmes de Sécurité d'Entreprise Intégrés",
      description: "Conformité de sécurité sous un même toit. Des alarmes surveillées et CCTV au contrôle d'accès, nous concevons et installons des solutions de sécurité complètes.",
      features: ["Alarmes surveillées", "Systèmes CCTV", "Contrôle d'accès"],
      link: "#"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Formation Incendie",
      description: "Formez votre personnel. Renforcez votre réponse. Notre formation incendie pratique comprend l'utilisation d'extincteurs, les exercices d'évacuation et les responsabilités de préposé à l'incendie.",
      features: ["Formation sur site", "Cours en ligne", "Sessions pratiques"],
      link: "#"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Installation et Maintenance d'Éclairage de Secours",
      description: "Assurez une évacuation claire et sécurisée à tout moment. Nous fournissons, installons et entretenons l'éclairage de secours selon les normes BS5266.",
      features: ["Normes BS5266", "Sécurité en cas de panne de courant", "Support d'évacuation incendie"],
      link: "#"
    }
  ]

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Solutions complètes de protection incendie et de sécurité pour votre entreprise
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-red-100 w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6 text-red-600 flex-shrink-0">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-4 sm:mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={service.link} className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center gap-2 text-sm sm:text-base transition-colors">
                En savoir plus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="bg-red-600 text-white rounded-2xl p-8 sm:p-10 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4 leading-tight">NE RETARDEZ PAS APPELEZ-NOUS AUJOURD'HUI</h2>
          <a href="tel:0607117838" className="text-2xl sm:text-3xl md:text-4xl font-bold hover:text-red-200 transition-colors inline-flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="break-all">06 07 11 78 38</span>
          </a>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-red-100 px-4">Services experts de protection incendie quand vous en avez le plus besoin</p>
        </div>
      </div>
    </section>
  )
}
