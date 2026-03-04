"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const reviews = [
  {
    name: "Алексей Воронов",
    role: "Директор по логистике",
    company: "ТК «РусТранс»",
    vehicles: "85 ТС",
    text: "Перешли на Benzigo 2 года назад. Экономия на топливе составила около 18% в месяц — это очень ощутимо при нашем автопарке. Особенно ценим персонального менеджера: всегда на связи, решает вопросы быстро.",
    rating: 5,
    saving: "18%",
  },
  {
    name: "Марина Сергеева",
    role: "Финансовый директор",
    company: "ООО «СтройМаш»",
    vehicles: "32 ТС",
    text: "Раньше тратили по 3 дня на сбор чеков и сверку топливных расходов. Теперь всё автоматически: ежедневные отчёты, закрывающие документы, акты — всё приходит в срок. Бухгалтерия довольна.",
    rating: 5,
    saving: "15%",
  },
  {
    name: "Дмитрий Козлов",
    role: "Генеральный директор",
    company: "ИП Козлов Д.А.",
    vehicles: "8 ТС",
    text: "Думал, что такие условия только для крупных компаний. Подключился с 8 машинами и получил скидку сразу. Карты выпустили за один день, настроили лимиты по каждому водителю. Рекомендую.",
    rating: 5,
    saving: "12%",
  },
  {
    name: "Сергей Михайлов",
    role: "Руководитель автопарка",
    company: "АО «МедиаЛогистик»",
    vehicles: "120 ТС",
    text: "Работаем с Benzigo уже 3 года. За это время ни одной серьёзной проблемы. Покрытие по всей России — водители заправляются без задержек даже в регионах. Отчётность прозрачная.",
    rating: 5,
    saving: "20%",
  },
  {
    name: "Ольга Павлова",
    role: "Операционный директор",
    company: "ООО «АгроТрейд»",
    vehicles: "45 ТС",
    text: "Контроль расходов — то, что нам было нужно. Можно ограничить определённые виды топлива, задать суточный лимит. За полгода расходы сократились, злоупотреблений стало значительно меньше.",
    rating: 5,
    saving: "16%",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-3.5 h-3.5 ${i < count ? "fill-[#DC2626] text-[#DC2626]" : "text-neutral-300"}`} />
      ))}
    </div>
  )
}

export default function Reviews() {
  const [active, setActive] = useState(0)
  const prev = () => setActive((a) => (a - 1 + reviews.length) % reviews.length)
  const next = () => setActive((a) => (a + 1) % reviews.length)
  const r = reviews[active]

  return (
    <section id="reviews" className="py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 sm:mb-14">
          <div>
            <div className="text-[11px] font-black text-[#DC2626] uppercase tracking-[0.2em] mb-3">Отзывы клиентов</div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0d0d0d] text-balance font-serif leading-tight">
              Нам доверяют<br />
              <span className="text-[#DC2626]">тысячи компаний</span>
            </h2>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-center">
              <div className="text-3xl font-black text-[#0d0d0d] font-serif leading-none mb-1">4.9</div>
              <Stars count={5} />
              <div className="text-xs text-neutral-400 mt-1">средний рейтинг</div>
            </div>
            <div className="w-px h-10 bg-neutral-200" />
            <div className="text-center">
              <div className="text-3xl font-black text-[#0d0d0d] font-serif leading-none mb-1">1000+</div>
              <div className="text-xs text-neutral-400 mt-1">клиентов</div>
            </div>
          </div>
        </div>

        {/* Review layout */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-5 lg:gap-6 mb-6">

          {/* Main card */}
          <div className="bg-[#0d0d0d] rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-white/4" />
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
              <div>
                <div className="font-serif font-black text-white text-lg mb-0.5">{r.name}</div>
                <div className="text-neutral-500 text-sm">{r.role}</div>
                <div className="text-neutral-600 text-sm">{r.company} · {r.vehicles}</div>
              </div>
              <div className="flex-shrink-0 bg-[#DC2626] rounded-2xl px-4 py-3 text-center self-start">
                <div className="text-white font-black text-2xl font-serif leading-none">{r.saving}</div>
                <div className="text-red-200 text-[10px] font-bold uppercase tracking-widest mt-0.5">экономия</div>
              </div>
            </div>
            <Stars count={r.rating} />
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mt-4 text-pretty">
              {`"${r.text}"`}
            </p>
          </div>

          {/* Sidebar list — desktop only */}
          <div className="hidden lg:flex flex-col gap-2">
            {reviews.map((rev, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left rounded-2xl px-4 py-3.5 border transition-all duration-200 ${
                  i === active
                    ? "bg-[#DC2626] border-[#DC2626]"
                    : "bg-neutral-50 border-neutral-100 hover:border-neutral-200"
                }`}
              >
                <div className={`text-sm font-bold mb-0.5 ${i === active ? "text-white" : "text-[#0d0d0d]"}`}>
                  {rev.name}
                </div>
                <div className={`text-xs ${i === active ? "text-red-200" : "text-neutral-400"}`}>
                  {rev.company} · {rev.vehicles}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center hover:border-[#DC2626] hover:text-[#DC2626] transition-all flex-shrink-0"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2 flex-1 justify-center">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${i === active ? "w-7 h-2.5 bg-[#DC2626]" : "w-2.5 h-2.5 bg-neutral-200 hover:bg-neutral-400"}`}
                aria-label={`Отзыв ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center hover:border-[#DC2626] hover:text-[#DC2626] transition-all flex-shrink-0"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
