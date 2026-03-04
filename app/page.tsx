import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"

// Thin skeleton shown while each section JS chunk loads on mobile
const SectionSkeleton = () => <div className="w-full py-24 bg-white animate-pulse" aria-hidden="true" />
const DarkSectionSkeleton = () => <div className="w-full py-24 bg-[#080808] animate-pulse" aria-hidden="true" />

// Lazy-load all below-the-fold sections — reduces initial JS bundle on mobile
const Advantages = dynamic(() => import("@/components/advantages"), { loading: SectionSkeleton })
const Calculator = dynamic(() => import("@/components/calculator"), { loading: SectionSkeleton })
const HowItWorks = dynamic(() => import("@/components/how-it-works"), { loading: SectionSkeleton })
const About = dynamic(() => import("@/components/about"), { loading: DarkSectionSkeleton })
const Reviews = dynamic(() => import("@/components/reviews"), { loading: SectionSkeleton })
const Contacts = dynamic(() => import("@/components/contacts"), { loading: SectionSkeleton })
const Footer = dynamic(() => import("@/components/footer"), { loading: DarkSectionSkeleton })

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Advantages />
      <Calculator />
      <HowItWorks />
      <About />
      <Reviews />
      <Contacts />
      <Footer />
    </main>
  )
}
