"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Phone, LogIn } from "lucide-react"

const navLinks = [
  { label: "Преимущества", href: "#advantages" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Как это работает", href: "#how-it-works" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_1px_12px_rgba(0,0,0,0.07)] border-b border-neutral-100"
          : "bg-[#080808]/85 backdrop-blur-lg border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-LT6M4m9l3CTsUYmW7YfKNvgV9NgNwC.png"
              alt="Benzigo"
              width={160}
              height={64}
              className="h-12 lg:h-14 object-contain"
              style={{ width: "auto" }}
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium px-4 py-2.5 rounded-lg transition-all ${
                  scrolled
                    ? "text-[#111] hover:text-[#DC2626] hover:bg-red-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA group */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+79633442654"
              className={`flex items-center gap-2 text-sm font-bold transition-colors ${
                scrolled ? "text-[#111] hover:text-[#DC2626]" : "text-white hover:text-red-300"
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${scrolled ? "bg-red-50" : "bg-white/10"}`}>
                <Phone className="w-3.5 h-3.5 text-[#DC2626]" />
              </div>
              8 963 344-26-54
            </a>
            <a
              href="https://lk.benzigo.ru/login"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-sm font-bold px-4 py-2.5 rounded-full border transition-all ${
                scrolled
                  ? "border-neutral-200 text-[#111] hover:border-[#DC2626] hover:text-[#DC2626]"
                  : "border-white/20 text-white hover:border-white/50 hover:bg-white/10"
              }`}
            >
              <LogIn className="w-4 h-4" />
              Войти в ЛК
            </a>
            <a
              href="#contacts"
              className="bg-[#DC2626] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#b91c1c] transition-all hover:shadow-lg hover:shadow-red-900/30 hover:-translate-y-0.5"
            >
              Получить карту
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled ? "text-[#111] hover:bg-neutral-100" : "text-white hover:bg-white/10"}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-neutral-100 px-4 pb-6 pt-3 shadow-2xl">
          <nav className="flex flex-col mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-base font-medium text-[#111] hover:text-[#DC2626] border-b border-neutral-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a href="tel:+79633442654" className="flex items-center gap-2 text-base font-bold text-[#DC2626] mb-3 px-2">
            <Phone className="w-5 h-5" />
            8 963 344-26-54
          </a>
          <a
            href="https://lk.benzigo.ru/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-neutral-200 text-[#111] text-base font-bold px-5 py-3 rounded-full mb-3 hover:border-[#DC2626] hover:text-[#DC2626] transition-all"
          >
            <LogIn className="w-4 h-4" />
            Войти в личный кабинет
          </a>
          <a
            href="#contacts"
            onClick={() => setOpen(false)}
            className="block bg-[#DC2626] text-white text-center text-base font-bold px-5 py-3.5 rounded-full hover:bg-[#b91c1c] transition-all"
          >
            Получить карту бесплатно
          </a>
        </div>
      )}
    </header>
  )
}
