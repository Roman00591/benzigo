import Image from "next/image"
import {
  FileText, Tag, BarChart3, ClipboardList,
  UserCheck, MapPin, ShieldCheck, Zap,
} from "lucide-react"

const smallCards = [
  {
    icon: BarChart3,
    title: "Контроль расходов",
    description: "Суточные и общие лимиты. Выбор видов топлива и АЗС для каждой карты и каждого ТС.",
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: ClipboardList,
    title: "Ежедневные отчёты",
    description: "Детальные отчёты: где, когда, сколько литров и по какой цене заправлено.",
    accent: "bg-sky-50 text-sky-600",
  },
  {
    icon: FileText,
    title: "Бухгалтерские документы",
    description: "Счета, акты, закрывающие документы за любой период — всё автоматически.",
    accent: "bg-orange-50 text-orange-600",
  },
  {
    icon: UserCheck,
    title: "Персональный менеджер",
    description: "Личный менеджер на связи 24/7. Ответ за 15 минут, помощь в оформлении карт.",
    accent: "bg-amber-50 text-amber-600",
  },
  {
    icon: Zap,
    title: "Запуск за 1 день",
    description: "Договор, счёт и карты — за один рабочий день. Начните экономить уже завтра.",
    accent: "bg-red-50 text-[#DC2626]",
  },
  {
    icon: ShieldCheck,
    title: "Защита и безопасность",
    description: "PIN-код, мгновенная блокировка из личного кабинета или через менеджера.",
    accent: "bg-teal-50 text-teal-600",
  },
]

export default function Advantages() {
  return (
    <section id="advantages" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <div className="text-[11px] font-black text-[#DC2626] uppercase tracking-[0.2em] mb-3">Преимущества</div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0d0d0d] leading-tight text-balance font-serif">
              Всё для управления<br className="hidden sm:block" /> топливными расходами
            </h2>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-xs text-pretty lg:text-right">
            Одно решение — от первой заправки до закрывающих бухгалтерских документов
          </p>
        </div>

        {/* Bento hero row */}
        <div className="grid sm:grid-cols-3 gap-4 mb-4">

          {/* Wide card — fuel station image */}
          <div className="sm:col-span-2 relative rounded-2xl overflow-hidden min-h-[200px] sm:min-h-[260px] flex flex-col justify-end bg-[#0d0d0d]">
            <div className="absolute inset-0 hidden sm:block">
              <Image
                src="/images/fuel-station-night.jpg"
                alt="АЗС партнёры Benzigo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                loading="lazy"
                quality={65}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/50 to-black/10" />
            <div className="relative z-10 p-6 sm:p-8">
              <div className="inline-flex items-center gap-1.5 bg-[#DC2626] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                <Tag className="w-3 h-3" />
                Ключевое преимущество
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-serif mb-2 text-balance leading-tight">
                Скидка до 25% с первого литра
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                Экономия начинается сразу — без накопительных периодов, бонусов и скрытых условий.
              </p>
            </div>
          </div>

          {/* Narrow card — map */}
          <div className="relative rounded-2xl overflow-hidden min-h-[200px] sm:min-h-[260px] flex flex-col justify-end bg-[#0a0a0a]">
            <div className="absolute inset-0 hidden sm:block">
              <Image
                src="/images/map-russia.jpg"
                alt="Сеть АЗС по России"
                fill
                className="object-cover opacity-50"
                sizes="(max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                quality={55}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
            <div className="relative z-10 p-6 sm:p-7">
              <div className="w-10 h-10 rounded-xl bg-[#DC2626]/15 border border-[#DC2626]/25 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-[#DC2626]" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white font-serif mb-1.5 leading-snug">Покрытие — вся Россия</h3>
              <p className="text-white/55 text-sm leading-relaxed">
                5 000+ АЗС-партнёров на всех федеральных трассах и в крупных городах.
              </p>
            </div>
          </div>
        </div>

        {/* Small feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {smallCards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="group rounded-2xl p-5 sm:p-6 bg-white border border-neutral-100 hover:border-[#DC2626]/15 hover:shadow-sm transition-all duration-200"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${card.accent.split(" ")[0]}`}>
                  <Icon className={`w-5 h-5 ${card.accent.split(" ")[1]}`} />
                </div>
                <h3 className="text-sm font-bold mb-1.5 text-[#0d0d0d]">{card.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-400">{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
