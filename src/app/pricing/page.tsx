import CtaSection from '@/containers/home-page/cta-section'
import TrustBar from '@/containers/home-page/trust-bar'
import AdditionalServices from '@/containers/pricing/additional-services'
import ChooseYourPlan from '@/containers/pricing/choose-your-plan'
import PricingHero from '@/containers/pricing/hero'
import PricingPhilosophy from '@/containers/pricing/price-philosophy'
import React from 'react'

function PricingPage() {
  return (
    <div>
        <PricingHero />
        <TrustBar />
        <PricingPhilosophy />
        <ChooseYourPlan />
        <AdditionalServices />
        <CtaSection />
    </div>
  )
}

export default PricingPage
