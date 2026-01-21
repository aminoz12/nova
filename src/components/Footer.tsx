import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    services: [
      { name: "Évaluation des Risques d'Incendie", href: "#" },
      { name: "installation et maintenance d'alarme type 4", href: "#" },
      { name: "Plan de secours ( évacuation et intervention )", href: "/plans" },
      { name: "Extincteur et pièces détachées", href: "/extincteurs" },
      { name: "Éclairage de Secours (BAES)", href: "/baes" },
      { name: "Désenfumage", href: "/desenfumage" },
      { name: "RIA (Robinets d'Incendie Armés)", href: "/ria" },
      { name: "Formation Incendie", href: "#" }
    ],
    industries: [
      { name: "Commerce & Commercial", href: "#" },
      { name: "Établissements d'Enseignement", href: "#" },
      { name: "Locaux de Santé", href: "#" },
      { name: "Industriel & Fabrication", href: "#" },
      { name: "Hôtellerie & Loisirs", href: "#" }
    ],
    company: [
      { name: "À Propos de Nous", href: "/apropos" },
      { name: "Témoignages", href: "#testimonials" },
      { name: "Contactez-nous", href: "#contact" },
      { name: "Politique de Confidentialité", href: "/politique-de-confidentialite" },
      { name: "Termes & Conditions", href: "/termes-conditions" },
      { name: "Politique de Cookies", href: "/politique-cookies" }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-6">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-8 sm:h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
              Nova SSI est votre partenaire de confiance pour tous vos besoins en protection incendie. Avec plus de 12 ans d'expérience, nous offrons des services complets et certifiés.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
                <a href="tel:0607117838" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base break-all">
                  06 07 11 78 38
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
                <a href="mailto:contact@nova-ssi.fr" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base break-all">
                  contact@nova-ssi.fr
                </a>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm sm:text-base">
                  Île-de-France, Paris
                </span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110" aria-label="Facebook">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110" aria-label="Twitter">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110" aria-label="Instagram">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          
          {/* Fire Protection Services */}
          <div className="lg:col-span-1 sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-red-500">Protection Incendie</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.services.slice(0, 5).map((link, index) => (
                    <li key={`service-${index}-${link.href}`}>
                      <a 
                        href={link.href} 
                        className="text-gray-300 hover:text-red-400 transition-colors text-sm sm:text-base block py-1"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.services.slice(5).map((link, index) => (
                    <li key={`service-${index + 5}-${link.href}`}>
                      <a href={link.href} className="text-gray-300 hover:text-red-400 transition-colors text-sm sm:text-base block py-1">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 sm:col-span-1 hidden lg:block"></div>

          {/* Company Links */}
          <div className="lg:col-span-1 sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-red-500">Entreprise</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-red-400 transition-colors text-sm sm:text-base block py-1">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © 2024 Services de Protection Incendie. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-end text-xs sm:text-sm">
              <a href="/politique-de-confidentialite" className="bg-gray-800 hover:bg-red-600 px-3 py-2 rounded-lg transition-colors whitespace-nowrap">
                Politique de Confidentialité
              </a>
              <a href="/termes-conditions" className="bg-gray-800 hover:bg-red-600 px-3 py-2 rounded-lg transition-colors whitespace-nowrap">
                Termes & Conditions
              </a>
              <a href="/politique-cookies" className="bg-gray-800 hover:bg-red-600 px-3 py-2 rounded-lg transition-colors whitespace-nowrap">
                Politique de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
