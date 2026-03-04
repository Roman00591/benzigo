"use client"

import { useState, useMemo } from "react"
import { TrendingDown, Fuel, Truck, ArrowRight, Pencil, Check, X } from "lucide-react"

const defaultFuels = [
  { label: "АИ-92", price: 52.5 },
  { label: "АИ-95", price: 56.8 },
  { label: "АИ-98", price: 64.2 },
  { label: "ДТ",    price: 61.3 },
]

function SliderRow({
  label,
  icon: Icon,
  value,
  min,
  max,
  step,
  onChange,
  display,
  marks,
}: {
  label: string
  icon: React.ElementType
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  display: string
  marks: string[]
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <label className="flex items-center gap-2 text-sm font-semibold text-neutral-300">
          <Icon className="w-4 h-4 text-[#DC2626] flex-shrink-0" />
          {label}
        </label>
        <span className="text-xl sm:text-2xl font-black text-white font-serif">{display}</span>
      </div>
      <div className="relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 h-2 rounded-full bg-[#DC2626]/30 pointer-events-none" style={{ width: `${pct}%` }} />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full relative z-10"
        />
      </div>
      <div className="flex justify-between text-xs text-neutral-600 mt-2">
        {marks.map((m) => <span key={m}>{m}</span>)}
      </div>
    </div>
  )
}

export default function Calculator() {
  const [vehicles, setVehicles]         = useState(15)
  const [litersPerDay, setLiters]       = useState(150)
  const [fuelIndex, setFuelIndex]       = useState(3)
  const [discount, setDiscount]         = useState(25)
  const [prices, setPrices]             = useState(defaultFuels.map((f) => f.price))
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editValue, setEditValue]       = useState("")

  const startEdit = (i: number) => { setEditingIndex(i); setEditValue(prices[i].toFixed(1)) }
  const commitEdit = () => {
    if (editingIndex !== null) {
      const parsed = parseFloat(editValue.replace(",", "."))
      if (!isNaN(parsed) && parsed > 0) {
        const next = [...prices]; next[editingIndex] = Math.round(parsed * 10) / 10; setPrices(next)
      }
      setEditingIndex(null)
    }
  }
  const cancelEdit = () => setEditingIndex(null)

  const currentPrice = prices[fuelIndex]

  const savings = useMemo(() => {
    const dailyCost   = vehicles * litersPerDay * currentPrice
    const dailySave   = dailyCost * (discount / 100)
    const monthlySave = dailySave * 22
    const yearlySave  = monthlySave * 12
    return {
      daily: Math.round(dailySave), monthly: Math.round(monthlySave), yearly: Math.round(yearlySave),
      dailyCost: Math.round(dailyCost), withDiscount: Math.round(dailyCost - dailySave),
    }
  }, [vehicles, litersPerDay, currentPrice, discount])

  const fmt = (n: number) =>
    n >= 1_000_000
      ? (n / 1_000_000).toFixed(1).replace(".0", "") + " млн"
      : n.toLocaleString("ru-RU")

  return (
    <section id="calculator" className="py-16 sm:py-24 lg:py-32 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <div className="text-xs font-black text-[#DC2626] uppercase tracking-[0.2em] mb-3">Калькулятор</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-serif text-balance">
              Сколько вы сэкономите<br className="hidden sm:block" />
              <span className="text-[#DC2626]"> с картой Benzigo?</span>
            </h2>
            <p className="text-neutral-500 text-sm max-w-sm lg:text-right leading-relaxed">
              Задайте актуальные цены — нажмите карандаш рядом с ценой
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-6 lg:gap-8 lg:items-start">

          {/* ── Controls ── */}
          <div className="space-y-6 sm:space-y-8 bg-white/[0.04] rounded-3xl p-5 sm:p-8 border border-white/8">

            {/* Fuel selector */}
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-300 mb-4">
                <Fuel className="w-4 h-4 text-[#DC2626]" />
                Тип топлива и цена за литр
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {defaultFuels.map((f, i) => {
                  const active = i === fuelIndex
                  const editing = editingIndex === i
                  return (
                    <div
                      key={f.label}
                      role="button"
                      tabIndex={0}
                      onClick={() => { if (!editing) setFuelIndex(i) }}
                      onKeyDown={(e) => { if (!editing && (e.key === "Enter" || e.key === " ")) setFuelIndex(i) }}
                      className={`group relative rounded-2xl p-3 sm:p-4 text-left transition-all duration-200 border cursor-pointer ${
                        active
                          ? "bg-[#DC2626] border-[#DC2626] shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                          : "bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/8"
                      }`}
                    >
                      <div className={`text-base sm:text-lg font-black font-serif mb-2 ${active ? "text-white" : "text-neutral-200"}`}>
                        {f.label}
                      </div>
                      {editing ? (
                        <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                          <input
                            autoFocus
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            onKeyDown={(e) => { if (e.key === "Enter") commitEdit(); if (e.key === "Escape") cancelEdit() }}
                            onBlur={commitEdit}
                            className="w-full bg-black/30 text-white text-xs font-bold rounded-lg px-2 py-1 outline-none border border-white/30 focus:border-white/70"
                          />
                          <button onClick={(e) => { e.stopPropagation(); commitEdit() }} className="text-white/70 hover:text-white flex-shrink-0 p-0.5">
                            <Check className="w-3 h-3" />
                          </button>
                          <button onClick={(e) => { e.stopPropagation(); cancelEdit() }} className="text-white/50 hover:text-white flex-shrink-0 p-0.5">
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-semibold ${active ? "text-red-100" : "text-neutral-500"}`}>
                            {prices[i].toFixed(1)} ���/л
                          </span>
                          <button
                            onClick={(e) => { e.stopPropagation(); startEdit(i) }}
                            className={`opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-md ${active ? "hover:bg-white/15 text-red-100" : "hover:bg-white/10 text-neutral-500"}`}
                            title="Изменить цену"
                          >
                            <Pencil className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <SliderRow label="Количество ТС" icon={Truck} value={vehicles} min={1} max={500} step={1}
              onChange={setVehicles} display={String(vehicles)} marks={["1", "100", "250", "350", "500"]} />
            <SliderRow label="Литров на 1 ТС в день" icon={Fuel} value={litersPerDay} min={10} max={2000} step={10}
              onChange={setLiters} display={`${litersPerDay} л`} marks={["10 л", "500 л", "1 000 л", "1 500 л", "2 000 л"]} />
            <SliderRow label="Скидка по карте" icon={TrendingDown} value={discount} min={1} max={25} step={1}
              onChange={setDiscount} display={`${discount}%`} marks={["1%", "5%", "10%", "15%", "25%"]} />
          </div>

          {/* ── Results ── */}
          <div className="flex flex-col gap-4">

            {/* Monthly savings */}
            <div className="relative bg-[#DC2626] rounded-3xl p-6 sm:p-8 overflow-hidden">
              <div className="absolute -top-14 -right-14 w-52 h-52 rounded-full bg-white/10 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-black/10 pointer-events-none" />
              <div className="relative">
                <div className="text-red-200 text-[10px] font-black uppercase tracking-[0.22em] mb-2">Экономия в месяц</div>
                <div className="font-serif font-black text-white leading-none text-4xl sm:text-5xl">
                  {fmt(savings.monthly)} ₽
                </div>
                <div className="text-red-100/70 text-xs mt-1 mb-5">22 рабочих дня</div>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/20">
                  <div>
                    <div className="text-red-200 text-[10px] font-bold uppercase tracking-widest mb-1">Без карты / день</div>
                    <div className="text-white font-black text-lg font-serif">{fmt(savings.dailyCost)} ₽</div>
                  </div>
                  <div>
                    <div className="text-red-200 text-[10px] font-bold uppercase tracking-widest mb-1">С Benzigo / день</div>
                    <div className="text-white font-black text-lg font-serif">{fmt(savings.withDiscount)} ₽</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day / Year */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "В день", value: savings.daily },
                { label: "В год",  value: savings.yearly },
              ].map((item) => (
                <div key={item.label} className="bg-white/[0.04] rounded-2xl p-4 sm:p-5 border border-white/8 text-center">
                  <div className="text-neutral-500 text-[11px] font-black uppercase tracking-widest mb-2">{item.label}</div>
                  <div className="text-xl sm:text-2xl font-black text-white font-serif">{fmt(item.value)}</div>
                  <div className="text-neutral-600 text-xs font-semibold mt-0.5">рублей</div>
                </div>
              ))}
            </div>

            {/* Bar */}
            <div className="bg-white/[0.04] rounded-2xl p-4 sm:p-5 border border-white/8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-neutral-500 font-semibold">Доля экономии в расходах</span>
                <span className="text-sm font-black text-[#DC2626]">{discount}%</span>
              </div>
              <div className="h-2.5 bg-white/8 rounded-full overflow-hidden">
                <div className="h-full bg-[#DC2626] rounded-full transition-all duration-500" style={{ width: `${(discount / 25) * 100}%` }} />
              </div>
              <div className="flex justify-between text-[10px] text-neutral-700 mt-2">
                <span>0%</span><span>25%</span>
              </div>
            </div>

            <a
              href="#contacts"
              className="flex items-center justify-center gap-2 bg-white text-[#111] font-black py-4 rounded-2xl hover:bg-neutral-100 transition-all text-sm sm:text-base hover:-translate-y-0.5 hover:shadow-lg"
            >
              Начать экономить прямо сейчас
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
