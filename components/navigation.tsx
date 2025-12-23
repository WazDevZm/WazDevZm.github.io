"use client"

import { Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Navigation() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 pt-8 pb-4">
        <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>

          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity cursor-pointer"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity cursor-pointer"
            >
              Experience
            </button>
          </div>

          <Button className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0">
            <Mail className="w-10 h-10" strokeWidth={2.5} />
          </Button>
        </nav>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-black/90 transition-all duration-300 z-50 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  )
}
