'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [visibleCount, setVisibleCount] = useState(4)

  const faqs = [
    {
      question: "Quels services de protection incendie proposez-vous ?",
      answer: "Nous proposons des services complets de protection incendie incluant l'évaluation des risques incendie, la conception et installation d'alarmes incendie, la maintenance d'alarmes, la fourniture d'extincteurs, l'éclairage de secours (BAES), le désenfumage, les RIA, et la formation incendie. Tous nos services sont conformes aux normes ERP et à la réglementation incendie."
    },
    {
      question: "Vos techniciens sont-ils certifiés et qualifiés ?",
      answer: "Oui, tous nos techniciens sont entièrement certifiés et qualifiés. Nous sommes certifiés BAFE, accrédités NSI Gold, approuvés UKAS et certifiés ISO 9001. Notre équipe suit des formations régulières pour rester à jour avec les dernières réglementations et technologies."
    },
    {
      question: "Quelle est votre rapidité d'intervention en cas d'urgence ?",
      answer: "Nous offrons un support d'urgence 24/7 et pouvons généralement intervenir sur les appels d'urgence dans un délai de 2-4 heures selon votre localisation. Pour les situations critiques, nous priorisons une intervention immédiate pour assurer votre sécurité et votre conformité."
    },
    {
      question: "Qu'est-ce qui est inclus dans une évaluation des risques incendie ?",
      answer: "Nos évaluations des risques incendie incluent une évaluation complète de vos locaux, l'identification des dangers d'incendie, l'évaluation des mesures de sécurité incendie existantes, l'évaluation des procédures d'évacuation, et un rapport détaillé avec des recommandations pour la conformité. L'évaluation suit les normes ERP et la réglementation incendie."
    },
    {
      question: "À quelle fréquence les extincteurs doivent-ils être entretenus ?",
      answer: "Les extincteurs doivent être entretenus annuellement par un ingénieur qualifié. De plus, ils nécessitent une vérification de service mensuelle (qui peut être faite en interne) et une service étendu tous les 5 ans. Nous proposons des contrats de maintenance pour garantir que vos extincteurs sont toujours conformes."
    },
    {
      question: "Proposez-vous des formations de sécurité incendie ?",
      answer: "Oui, nous proposons des formations complètes de sécurité incendie incluant la formation pratique sur extincteurs, les procédures d'évacuation, la formation de gardien incendie, et des cours en ligne. La formation peut être effectuée sur place dans vos locaux ou dans notre centre de formation."
    },
    {
      question: "Quelle est la différence entre BAES et éclairage de secours ?",
      answer: "Les BAES (Blocs Autonomes d'Éclairage de Sécurité) sont des unités d'éclairage de secours autonomes avec leur propre batterie de secours. L'éclairage de secours peut désigner à la fois les unités BAES et les systèmes à batterie centrale. Les unités BAES sont idéales pour les petites installations, tandis que les systèmes centraux conviennent mieux aux grands bâtiments."
    },
    {
      question: "Combien coûte un système d'alarme incendie ?",
      answer: "Le coût d'un système d'alarme incendie varie selon la taille de vos locaux, le type de système requis (conventionnel ou adressable) et les exigences spécifiques. Nous fournissons des devis gratuits et sans engagement adaptés à vos besoins. Contactez-nous pour une estimation détaillée."
    },
    {
      question: "Quelle maintenance est requise pour les systèmes d'alarme incendie ?",
      answer: "Les systèmes d'alarme incendie nécessitent des tests hebdomadaires (que vous pouvez faire en interne), un service trimestriel par un ingénieur qualifié, et des inspections annuelles complètes. Nous proposons des contrats de maintenance incluant tous les services, tests et certifications requis pour assurer une conformité totale avec les normes."
    },
    {
      question: "Pouvez-vous aider à la conformité de sécurité incendie ?",
      answer: "Absolument. Nous fournissons des services complets de conformité de sécurité incendie incluant les évaluations de risques, l'installation de systèmes conformes, la maintenance régulière, la formation du personnel et la documentation. Notre équipe garantit que vos locaux respectent toutes les réglementations et normes de sécurité incendie actuelles."
    },
    {
      question: "Travaillez-vous avec des propriétés commerciales et résidentielles ?",
      answer: "Oui, nous travaillons avec une large gamme de propriétés incluant les bâtiments commerciaux, les propriétés résidentielles, les installations industrielles, les établissements d'enseignement, les établissements de santé, et les lieux d'hébergement et de loisirs. Nos services sont adaptés pour répondre aux exigences spécifiques de chaque type de propriété."
    },
    {
      question: "Quelles zones couvrez-vous ?",
      answer: "Nous fournissons des services de protection incendie dans toute la région Île-de-France et Paris, avec nos opérations principales basées à Paris. Nous avons des équipes stratégiquement positionnées pour servir les clients dans toute la région. Contactez-nous pour confirmer la couverture dans votre zone spécifique et discuter de vos exigences."
    }
  ]

  const visibleFaqs = faqs.slice(0, visibleCount)
  const hasMore = visibleCount < faqs.length

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, faqs.length))
  }

  return (
    <section id="faq" className="py-16 sm:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Questions Fréquemment Posées</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez des réponses aux questions courantes sur nos services de protection incendie
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.slice(0, visibleCount).map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 sm:p-6 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4 pr-4">
                    <div className="bg-red-100 p-2 sm:p-3 rounded-lg">
                      <HelpCircle className="w-4 h-4 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg leading-tight">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>
              
              {openIndex === index && (
                <div className="bg-white rounded-xl shadow-md mt-2 p-4 sm:p-6 border-t border-gray-100">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}

          {visibleCount < faqs.length && (
            <div className="text-center mt-8">
              <button
                onClick={() => setVisibleCount(visibleCount + 4)}
                className="bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50"
              >
                Voir Plus de Questions
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}


