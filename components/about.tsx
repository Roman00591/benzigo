import Image from "next/image"
import { ArrowRight } from "lucide-react"

const metrics = [
  { num: "1 000+", label: "Клиентов по всей России" },
  { num: "300 млн ₽", label: "Сэкономлено клиентами" },
  { num: "7 лет", label: "На топливном рынке" },
  { num: "15 мин", label: "Время ответа менеджера" },
]

const features = [
  { title: "Оптовые цены на топливо", desc: "Доступ к межбанковским котировкам и партнёрским ценам сетей АЗС." },
  { title: "Прозрачный документооборот", desc: "Счета, акты и закрывающие документы формируются автоматически." },
  { title: "Интеграция с 1С и ERP", desc: "Автоматическая выгрузка данных в вашу учётную систему." },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Metrics strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden border border-white/6 mb-14 sm:mb-20">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="px-5 sm:px-8 py-6 sm:py-9 bg-[#0e0e0e] hover:bg-[#141414] transition-colors"
            >
              <div className="font-serif font-black text-white text-2xl sm:text-3xl lg:text-[2.25rem] mb-1.5 leading-none">{m.num}</div>
              <div className="text-neutral-500 text-xs sm:text-sm leading-snug">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">

          {/* Left — text */}
          <div>
            <div className="text-[11px] font-black text-[#DC2626] uppercase tracking-[0.2em] mb-3">О компании</div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white text-balance mb-6 font-serif leading-tight">
              Надёжный партнёр<br />в топливном процессинге
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-neutral-400 leading-relaxed text-pretty text-sm sm:text-base">
                Benzigo специализируется на выпуске и обслуживании топливных карт для корпоративных клиентов. За годы работы мы помогли тысячам компаний снизить затраты на ГСМ и упростить управление автопарком.
              </p>
              <p className="text-neutral-400 leading-relaxed text-pretty text-sm sm:text-base">
                Наша платформа интегрирована с ведущими сетями АЗС России. Оптовые цены, прозрачный документооборот и персональный сервис без лишних усилий.
              </p>
            </div>

            {/* Feature list */}
            <div className="flex flex-col gap-2 mb-8">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 bg-white/4 rounded-xl px-4 py-3.5 border border-white/5 hover:border-[#DC2626]/20 hover:bg-white/6 transition-all duration-200"
                >
                  <div className="w-2 h-2 rounded-full bg-[#DC2626] flex-shrink-0 mt-1.5" />
                  <div>
                    <div className="text-sm font-bold text-white mb-0.5">{item.title}</div>
                    <div className="text-xs text-neutral-500 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contacts"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white font-bold px-7 py-4 rounded-full hover:bg-[#b91c1c] transition-colors text-sm sm:text-base"
            >
              Начать сотрудничество
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right — images (desktop only) */}
          <div className="hidden lg:flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden h-48 bg-[#111]">
                <Image
                  src="/images/about-fleet.jpg"
                  alt="Автопарк клиентов Benzigo"
                  fill
                  className="object-cover"
                  sizes="20vw"
                  loading="lazy"
                  quality={60}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-bold text-white/80 bg-black/50 rounded-full px-2.5 py-1 border border-white/10">
                    Клиенты по всей России
                  </span>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-48 bg-[#111]">
                <Image
                  src="/images/card-mockup.jpg"
                  alt="Топливная карта Benzigo"
                  fill
                  className="object-cover"
                  sizes="20vw"
                  loading="lazy"
                  quality={60}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-bold text-white/80 bg-black/50 rounded-full px-2.5 py-1 border border-white/10">
                    Топливная карта
                  </span>
                </div>
              </div>
            </div>
            {/* Large image */}
            <div className="relative rounded-2xl overflow-hidden h-52 bg-[#111]">
              <Image
                src="/images/fuel-station-night.jpg"
                alt="АЗС партнёр Benzigo"
                fill
                className="object-cover"
                sizes="40vw"
                loading="lazy"
                quality={60}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <div className="text-white font-bold text-sm font-serif mb-0.5">5 000+ АЗС-партнёров</div>
                <div className="text-white/55 text-xs">Работаем по всей территории России</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
