import Image from "next/image"
import { ArrowRight, LogIn } from "lucide-react"

const stats = [
  { value: "25%", label: "экономия на топливе" },
  { value: "5 000+", label: "АЗС по всей России" },
  { value: "1 000+", label: "компаний-клиентов" },
  { value: "1 день", label: "запуск карт" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808]">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.18]"
          priority
          sizes="(max-width: 640px) 640px, 100vw"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 via-transparent to-[#080808]" />
      </div>

      {/* Red top bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#DC2626]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-40 lg:pb-28 w-full">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase text-[#DC2626] mb-6 border border-[#DC2626]/25 px-4 py-2 rounded-full bg-[#DC2626]/8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] flex-shrink-0" />
          Топливный процессинг для бизнеса
        </div>

        {/* Headline + right panel */}
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-start mb-14 lg:mb-20">

          {/* Left */}
          <div>
            {/* Logo */}
            <div className="mb-8 inline-block bg-white rounded-xl px-4 py-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-LT6M4m9l3CTsUYmW7YfKNvgV9NgNwC.png"
                alt="Benzigo"
                width={200}
                height={80}
                className="h-12 sm:h-14 object-contain"
                style={{ width: "auto" }}
                priority
              />
            </div>

            <h1 className="font-serif font-black text-white leading-[1.06] text-balance text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] mb-6">
              Топливные карты —<br />
              <span className="text-[#DC2626]">экономия до 25%</span><br />
              по всей России
            </h1>

            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg text-pretty">
              Benzigo — топливный процессинг для компаний любого размера. Скидка с первого литра, лимиты на каждое ТС и прозрачная отчётность без лишних усилий.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contacts"
                className="inline-flex items-center justify-center gap-2.5 bg-[#DC2626] text-white font-bold text-sm sm:text-base px-7 sm:px-8 py-4 rounded-full hover:bg-[#b91c1c] transition-colors"
              >
                Получить карту бесплатно
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </a>
              <a
                href="https://lk.benzigo.ru/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white font-bold text-sm sm:text-base px-7 sm:px-8 py-4 rounded-full border border-white/15 hover:border-white/35 transition-colors"
              >
                <LogIn className="w-4 h-4 flex-shrink-0" />
                Войти в ЛК
              </a>
            </div>
          </div>

          {/* Right — info card, hidden on mobile */}
          <div className="hidden lg:flex flex-col gap-3">
            {/* Header card */}
            <div className="bg-[#DC2626] rounded-2xl px-6 py-5 flex items-center justify-between">
              <div className="bg-white rounded-lg px-3 py-1.5">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-LT6M4m9l3CTsUYmW7YfKNvgV9NgNwC.png"
                  alt="Benzigo"
                  width={90}
                  height={36}
                  className="h-7 object-contain"
                  style={{ width: "auto" }}
                />
              </div>
              <span className="text-white/90 text-xs font-bold bg-white/15 rounded-full px-3 py-1.5 tracking-wide">Топливные карты</span>
            </div>

            {/* Stats 2x2 */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#111] rounded-2xl p-5 border border-white/5">
                  <div className="font-serif font-black text-2xl text-white mb-1">{s.value}</div>
                  <div className="text-xs text-neutral-500 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Fuels */}
            <div className="bg-[#111] rounded-2xl p-5 border border-white/5">
              <div className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.15em] mb-3">Виды топлива</div>
              <div className="flex gap-2 mb-4">
                {["АИ-92", "АИ-95", "АИ-98", "ДТ"].map((f) => (
                  <span key={f} className="text-xs text-neutral-400 bg-white/5 border border-white/8 rounded-lg px-2.5 py-1 font-medium">{f}</span>
                ))}
              </div>
              <a
                href="#contacts"
                className="flex items-center justify-center gap-2 w-full bg-[#DC2626] text-white font-bold py-3 rounded-xl hover:bg-[#b91c1c] transition-colors text-sm"
              >
                Подключиться бесплатно
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar — visible on all screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8">
          {stats.map((s, i) => (
            <div key={s.label} className={`px-5 sm:px-7 py-5 sm:py-6 ${i % 2 === 0 ? "bg-[#101010]" : "bg-[#0d0d0d]"}`}>
              <div className="font-serif font-black text-white text-xl sm:text-2xl mb-0.5">{s.value}</div>
              <div className="text-xs text-neutral-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
