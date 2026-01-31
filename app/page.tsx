import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Specialties from '@/components/Specialties'
import Support from '@/components/Support'
import Meet from '@/components/Meet'
import OurOffice from '@/components/OurOffice'
import ProfessionalBackground from '@/components/ProfessionalBackground'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Specialties />
      <Support />
      <Meet />
      <OurOffice />
      <ProfessionalBackground />
      <CTA />
      <Footer />
    </main>
  )
}