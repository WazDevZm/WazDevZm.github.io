"use client"

import { Mail, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/footer-logo.jpeg"
                    alt="Wazingwa Mugala Logo"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="text-lg md:text-xl font-bold">Wazingwa Mugala</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Software Engineer from Zambia passionate about creating innovative solutions and building impactful technology.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors text-left">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors text-left">
                    About
                  </button>
                </li>
                <li>
                  <a href="mailto:wazingwamugala90@gmail.com" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors text-left">
                    Portfolio
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('experience')} className="hover:text-white transition-colors text-left">
                    Experience
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact us</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:wazingwamugala90@gmail.com" className="hover:text-white transition-colors">
                    wazingwamugala90@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+260763299861" className="hover:text-white transition-colors">
                    +260763299861
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 By Wazingwa Mugala - Software Engineer</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
