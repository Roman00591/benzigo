"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react"

const contactItems = [
  {
    icon: Phone,
    label: "Телефон",
    value: "8 963 344-26-54",
    href: "tel:+79633442654",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@benzigo.ru",
    href: "mailto:info@benzigo.ru",
  },
]

export default function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", company: "", vehicles: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacts" className="py-16 sm:py-24 lg:py-32 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10 sm:mb-14">
          <div>
            <div className="text-[11px] font-black text-[#DC2626] uppercase tracking-[0.2em] mb-3">Контакты</div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0d0d0d] text-balance font-serif leading-tight">
              Начните экономить сегодня
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-xs leading-relaxed lg:text-right">
            Менеджер перезвонит в течение 15 минут и ответит на все вопросы
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-12">

          {/* Left — contact info */}
          <div className="lg:col-span-2 flex flex-col gap-3">

            {contactItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border border-neutral-100 hover:border-[#DC2626]/25 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#DC2626] transition-colors">
                    <Icon className="w-5 h-5 text-[#DC2626] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-base font-bold text-[#0d0d0d]">{item.value}</div>
                  </div>
                </a>
              )
            })}

            <div className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border border-neutral-100">
              <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#DC2626]" />
              </div>
              <div>
                <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-0.5">Работаем</div>
                <div className="text-base font-bold text-[#0d0d0d]">По всей России</div>
                <div className="text-xs text-neutral-400 mt-0.5">Пн–Пт: 9:00–18:00 МСК</div>
              </div>
            </div>

            {/* Image — tablet/desktop only, skip on mobile to save bandwidth */}
            <div className="relative rounded-2xl overflow-hidden h-48 hidden md:block bg-[#0d0d0d]">
              <Image
                src="/images/fuel-station-night.jpg"
                alt="АЗС партнёры Benzigo по всей России"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
                quality={60}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="relative z-10 p-5 h-full flex flex-col justify-end">
                <p className="text-white font-bold text-sm font-serif mb-0.5">Более 5 000 АЗС по всей России</p>
                <p className="text-white/55 text-xs leading-relaxed">
                  Заправляйтесь на любой трассе — наши партнёры есть в каждом регионе.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-neutral-100">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0d0d0d] mb-2 font-serif">Заявка отправлена!</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                    Менеджер свяжется с вами в ближайшие 15 минут в рабочее время.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#0d0d0d] font-serif mb-1">Оставить заявку</h3>
                    <p className="text-sm text-neutral-400">Заполните форму — мы свяжемся с вами</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    {[
                      { key: "name",     label: "Ваше имя",  placeholder: "Иван Иванов",        type: "text", required: true  },
                      { key: "phone",    label: "Телефон",    placeholder: "+7 (___) ___-__-__", type: "tel",  required: true  },
                      { key: "company",  label: "Компания",   placeholder: "ООО Ваша компания",  type: "text", required: false },
                      { key: "vehicles", label: "Кол-во ТС",  placeholder: "Например: 10",       type: "text", required: false },
                    ].map((field) => (
                      <div key={field.key}>
                        <label className="block text-sm font-semibold text-neutral-600 mb-1.5">
                          {field.label} {field.required && <span className="text-[#DC2626]">*</span>}
                        </label>
                        <input
                          required={field.required}
                          type={field.type}
                          placeholder={field.placeholder}
                          value={form[field.key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-[#0d0d0d] text-sm focus:outline-none focus:border-[#DC2626] focus:ring-2 focus:ring-red-100 transition-all placeholder:text-neutral-300"
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#DC2626] text-white font-bold py-4 rounded-2xl hover:bg-[#b91c1c] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base mt-2"
                  >
                    Отправить заявку
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-xs text-neutral-400 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
