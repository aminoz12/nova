'use client'

import Link from 'next/link'

interface ServiceNavigationProps {
  currentService?: string
}

const services = [
  { name: 'BAES', href: '/baes', description: 'Éclairage de sécurité' },
  { name: 'Désenfumage', href: '/desenfumage', description: 'Évacuation des fumées' },
  { name: 'Extincteurs', href: '/extincteurs', description: 'Protection incendie' },
  { name: 'RIA', href: '/ria', description: 'Robinets incendie armés' }
]

export default function ServiceNavigation({ currentService }: ServiceNavigationProps) {
  return (
    <nav className="bg-blue-600 border-b border-blue-700">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-between py-4">
          <div className="flex items-center space-x-2 mb-2 lg:mb-0">
            <Link href="/" className="text-white hover:text-blue-200 transition-colors">
              Accueil
            </Link>
            <span className="text-blue-200">/</span>
            <span className="text-white font-semibold">Services</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentService === service.name
                    ? 'bg-white text-blue-600'
                    : 'bg-blue-500 text-white hover:bg-blue-400'
                }`}
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className={`text-center p-3 rounded-lg transition-colors ${
                currentService === service.name
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-700 text-blue-100 hover:bg-blue-600'
              }`}
            >
              <div className="font-semibold text-sm">{service.name}</div>
              <div className="text-xs mt-1 opacity-90">{service.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
