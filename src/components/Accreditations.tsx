import { Award, Building, CheckCircle } from 'lucide-react'

export default function Accreditations() {
  const accreditations = [
    "BAFE Certified",
    "NSI Gold",
    "UKAS Accredited", 
    "ISO 9001 Certified",
    "Fire Industry Association",
    "Security Systems and Alarms Inspection Board"
  ]

  const industries = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Commerce & Commercial",
      description: "Protéger les actifs et assurer la continuité des affaires"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Établissements d'Enseignement", 
      description: "Assurer la sécurité des étudiants et du corps professoral avec des solutions complètes"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Hôtellerie & Loisirs",
      description: "Maintenir la sécurité des invités sans compromettre l'expérience"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Industriel & Fabrication",
      description: "Aborder les risques complexes avec des systèmes spécialisés"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Accreditations Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Agréments et Adhésions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nova Safety est un nom en qui vous pouvez avoir confiance, soutenu par des agréments et adhésions de pointe de l'industrie.
              Ces certifications reflètent Notre dévouement à fournir des services de sécurité incendie et de sécurité fiables, conformes et de pointe de l'industrie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accreditations.map((accreditation, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-red-50 transition-colors">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{accreditation}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Secteurs que Nous Servons</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous fournissons des solutions spécialisées de protection incendie et de sécurité dans divers secteurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {industries.map((industry, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Secteurs Additionnels que Nous Servons</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Locaux de Transport",
                "Usines et Entrepôts", 
                "Locaux de Santé",
                "Hébergement",
                "Événements et Lieux en Plein Air",
                "Soins Résidentiels",
                "Théâtres et Cinémas",
                "Lieux de Rassemblement",
                "Bureaux et Boutiques"
              ].map((industry, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-700">{industry}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#contact" className="btn-primary">
              Voir Tous les Secteurs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
