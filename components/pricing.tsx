import { Check, ArrowRight, Star } from "lucide-react"

const plans = [
  {
    name: "Старт",
    subtitle: "Для малого бизнеса",
    price: "Бесплатно",
    priceNote: "выпуск и обслуживание",
    highlight: false,
    features: [
      "До 5 карт",
      "Скидка до 10% на топливо",
      "Ежемесячные отчёты",
      "Email-поддержка",
      "Покрытие по всей РФ",
    ],
  },
  {
    name: "Бизнес",
    subtitle: "Для среднего автопарка",
    price: "Бесплатно",
    priceNote: "выпуск и обслуживание",
    highlight: true,
    badge: "Популярный",
    features: [
      "До 50 карт",
      "Скидка до 25% на топливо",
      "Ежедневные отчёты",
      "Персональный менеджер",
      "Бухгалтерские документы",
      "Настройка лимитов",
      "Покрытие по всей РФ",
    ],
  },
  {
    name: "Корпорация",
    subtitle: "Для крупного парка",
    price: "Индивидуально",
    priceNote: "под ваши задачи",
    highlight: false,
    features: [
      "Неограниченно карт",
      "Скидка до 25% на топливо",
      "Отчёты реального времени",
      "Менеджер 24/7",
      "Полный бухучёт",
      "API-интеграция",
      "Покрытие по всей РФ",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-32 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="text-[11px] font-bold text-[#DC2626] uppercase tracking-[0.2em] mb-3">Тарифы</div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0d0d0d] text-balance font-serif">
            Прозрачные условия
          </h2>
          <p className="text-neutral-400 mt-3 max-w-md mx-auto text-sm sm:text-base">
            Выберите подходящий тариф или свяжитесь для индивидуального предложения
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5 lg:items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-200 ${
                plan.highlight
                  ? "bg-[#0d0d0d] text-white shadow-2xl lg:-mt-4 ring-1 ring-[#DC2626]/30"
                  : "bg-white text-[#0d0d0d] border border-neutral-100 hover:border-neutral-200 hover:shadow-md"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-7 bg-[#DC2626] text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-white" />
                  {plan.badge}
                </div>
              )}

              <div className={`text-xs font-semibold mb-1.5 ${plan.highlight ? "text-neutral-500" : "text-[#DC2626]"}`}>
                {plan.subtitle}
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-5 font-serif">{plan.name}</h3>

              <div
                className="mb-6 pb-6 border-b border-dashed"
                style={{ borderColor: plan.highlight ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)" }}
              >
                <div className={`text-2xl sm:text-3xl font-black font-serif ${plan.highlight ? "text-[#DC2626]" : "text-[#0d0d0d]"}`}>
                  {plan.price}
                </div>
                <div className={`text-sm mt-1 ${plan.highlight ? "text-neutral-600" : "text-neutral-400"}`}>
                  {plan.priceNote}
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? "bg-[#DC2626]" : "bg-[#DC2626]/8"}`}>
                      <Check className={`w-3 h-3 ${plan.highlight ? "text-white" : "text-[#DC2626]"}`} />
                    </div>
                    <span className={`text-sm ${plan.highlight ? "text-neutral-300" : "text-neutral-600"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacts"
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-[#DC2626] text-white hover:bg-[#b91c1c]"
                    : "bg-[#0d0d0d] text-white hover:bg-[#1a1a1a]"
                }`}
              >
                Подключиться
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
