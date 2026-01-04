import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ImageServices from '@/components/ImageServices'
import PromoSection from '@/components/PromoSection'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ImageServices />
      <PromoSection />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
