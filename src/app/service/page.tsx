import Hero from '@/containers/service-page/hero'
import CoreServices from '@/containers/service-page/core-sevices'
import { WhyChooseUs } from '@/containers/home-page/why-choose-us'
import CtaSection from '@/containers/home-page/cta-section'

export default function ServicePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CoreServices />
      <WhyChooseUs />
      <CtaSection />
      
    </main>
  )
}
