import Image from "next/image"
import { FileEdit, FileCheck, SlidersHorizontal, Fuel, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: FileEdit,
    num: "01",
    title: "Оставьте заявку",
    description: "Заполните форму или позвоните нам. Менеджер свяжется с вами за 15 минут в рабочее время.",
    iconCls: "bg-red-50 text-[#DC2626]",
  },
  {
    icon: FileCheck,
    num: "02",
    title: "Заключите договор",
    description: "Быстрое оформление документов. Договор, счёт и карты готовы за один рабочий день.",
    iconCls: "bg-sky-50 text-sky-600",
  },
  {
    icon: SlidersHorizontal,
    num: "03",
    title: "Настройте лимиты",
    description: "Задайте суточные и общие лимиты, разрешённые виды топлива и АЗС для каждой карты.",
    iconCls: "bg-violet-50 text-violet-600",
  },
  {
    icon: Fuel,
    num: "04",
    title: "Заправляйтесь и экономьте",
    description: "Водители заправляются со скидкой с первого литра. Вы получаете ежедневные отчёты.",
    iconCls: "bg-emerald-50 text-emerald-600",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 lg:py-32 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 sm:mb-16">
          <div>
            <div className="text-[11px] font-black text-[#DC2626] uppercase tracking-[0.2em] mb-3">Начало работы</div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0d0d0d] text-balance font-serif leading-tight">
              Как подключиться
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-xs leading-relaxed lg:text-right">
            Запуск за один рабочий день. Без бюрократии и сложных условий.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-5 lg:gap-6 items-start">

          {/* Steps grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.num}
                  className="relative bg-white rounded-2xl p-6 border border-neutral-100 hover:border-neutral-200 hover:shadow-sm transition-all duration-200 overflow-hidden"
                >
                  {/* Large step number watermark */}
                  <div className="absolute top-3 right-4 text-[4rem] font-black text-neutral-100 leading-none font-serif select-none">
                    {step.num}
                  </div>
                  <div className={`relative w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${step.iconCls}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="relative text-base font-bold text-[#0d0d0d] mb-2 font-serif leading-snug">
                    {step.title}
                  </h3>
                  <p className="relative text-sm text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Right — dashboard image + CTA */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden h-56 sm:h-72 lg:h-[340px] bg-[#0d0d0d]">
              <Image
                src="/images/dashboard-mockup.jpg"
                alt="Личный кабинет Benzigo — аналитика расходов"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
                quality={65}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-white font-bold text-sm font-serif mb-0.5">Личный кабинет</div>
                <div className="text-white/55 text-xs">Контроль расходов и аналитика в реальном времени</div>
              </div>
            </div>

            <div className="bg-[#0d0d0d] rounded-2xl px-5 py-5 flex flex-col gap-3 border border-white/5">
              <div>
                <div className="text-white font-bold text-base font-serif mb-1">Готовы начать?</div>
                <div className="text-neutral-500 text-sm">Оставьте заявку — карты будут готовы уже завтра</div>
              </div>
              <a
                href="#contacts"
                className="flex items-center justify-center gap-2 bg-[#DC2626] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#b91c1c] transition-colors text-sm"
              >
                Оставить заявку
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
