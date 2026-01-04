'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [visibleCount, setVisibleCount] = useState(4)

  const faqs = [
    {
      question: "What fire protection services do you offer?",
      answer: "We offer comprehensive fire protection services including fire risk assessments, fire alarm installation and maintenance, fire extinguisher supply and servicing, emergency lighting (BAES), smoke extraction systems (Désenfumage), fire hydrants (RIA), and fire safety training. All our services comply with UK and European standards."
    },
    {
      question: "Are your technicians certified and qualified?",
      answer: "Yes, all our technicians are fully certified and qualified. We are BAFE certified, NSI Gold accredited, UKAS approved, and ISO 9001 certified. Our team undergoes regular training to stay updated with the latest regulations and technologies."
    },
    {
      question: "How quickly can you respond to emergency callouts?",
      answer: "We offer 24/7 emergency support and can typically respond to urgent callouts within 2-4 hours depending on your location. For critical situations, we prioritize immediate response to ensure your safety and compliance."
    },
    {
      question: "What is included in a fire risk assessment?",
      answer: "Our fire risk assessments include a comprehensive evaluation of your premises, identification of fire hazards, assessment of existing fire safety measures, evaluation of evacuation procedures, and a detailed report with recommendations for compliance. The assessment follows the Regulatory Reform (Fire Safety) Order 2005."
    },
    {
      question: "How often should fire extinguishers be serviced?",
      answer: "Fire extinguishers should be serviced annually by a qualified engineer. Additionally, they require a basic service check every month (which can be done in-house) and an extended service every 5 years. We offer maintenance contracts to ensure your extinguishers are always in compliance."
    },
    {
      question: "Do you provide fire safety training?",
      answer: "Yes, we provide comprehensive fire safety training including hands-on fire extinguisher training, evacuation procedures, fire warden training, and online courses. Training can be conducted on-site at your premises or at our training facility."
    },
    {
      question: "What is the difference between BAES and emergency lighting?",
      answer: "BAES (Blocs Autonomes d'Éclairage de Sécurité) are self-contained emergency lighting units with their own battery backup. Emergency lighting can refer to both BAES units and central battery systems. BAES units are ideal for smaller installations, while central systems are better for larger buildings."
    },
    {
      question: "How much does a fire alarm system cost?",
      answer: "The cost of a fire alarm system varies depending on the size of your premises, the type of system required (conventional or addressable), and specific requirements. We provide free, no-obligation quotes tailored to your needs. Contact us for a detailed estimate."
    },
    {
      question: "What maintenance is required for fire alarm systems?",
      answer: "Fire alarm systems require weekly testing (which you can do in-house), quarterly servicing by a qualified engineer, and annual comprehensive inspections. We offer maintenance contracts that include all required servicing, testing, and certification to ensure full compliance with BS 5839 standards."
    },
    {
      question: "Can you help with fire safety compliance?",
      answer: "Absolutely. We provide complete fire safety compliance services including risk assessments, installation of compliant systems, regular maintenance, staff training, and documentation. Our team ensures your premises meet all current fire safety regulations and standards."
    },
    {
      question: "Do you work with commercial and residential properties?",
      answer: "Yes, we work with a wide range of properties including commercial buildings, residential properties, industrial facilities, educational institutions, healthcare facilities, and hospitality venues. Our services are tailored to meet the specific requirements of each property type."
    },
    {
      question: "What areas do you cover?",
      answer: "We provide fire protection services across the UK, with our main operations based in Preston, Lancashire. We have teams strategically located to serve clients nationwide. Contact us to confirm coverage in your specific area and discuss your requirements."
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our fire protection services
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
                Show More Questions
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}


