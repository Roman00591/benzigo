import Image from "next/image"
import { Phone, Mail, LogIn } from "lucide-react"

const navLinks = [
  { label: "Преимущества", href: "#advantages" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Как это работает", href: "#how-it-works" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">

          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="inline-block bg-white rounded-2xl px-4 py-3 mb-4 sm:mb-5">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-LT6M4m9l3CTsUYmW7YfKNvgV9NgNwC.png"
                alt="Benzigo"
                width={160}
                height={64}
                className="h-12 sm:h-16 object-contain"
                style={{ width: "auto" }}
                loading="lazy"
              />
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mb-4 sm:mb-5">
              Топливные карты для бизнеса. Экономия до 20%, покрытие по всей России, полный контроль расходов ГСМ.
            </p>
            <a
              href="https://lk.benzigo.ru/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-white border border-white/15 px-5 py-2.5 rounded-full hover:border-[#DC2626] hover:text-[#DC2626] transition-all"
            >
              <LogIn className="w-4 h-4" />
              Войти в личный кабинет
            </a>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.15em] mb-4 sm:mb-5">Навигация</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-neutral-500 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.15em] mb-4 sm:mb-5">Контакты</h4>
            <div className="space-y-3 sm:space-y-4">
              <a href="tel:+79633442654" className="flex items-center gap-3 text-sm text-neutral-500 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#DC2626]" />
                </div>
                8 963 344-26-54
              </a>
              <a href="mailto:info@benzigo.ru" className="flex items-center gap-3 text-sm text-neutral-500 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#DC2626]" />
                </div>
                info@benzigo.ru
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/6 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} Benzigo. Все права защищены.
          </p>
          <p className="text-xs text-neutral-700">
            Топливный процессинг для корпоративных клиентов
          </p>
        </div>
      </div>
    </footer>
  )
}
