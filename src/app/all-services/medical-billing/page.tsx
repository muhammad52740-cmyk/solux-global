"use client";

import MedicalBillingHero from '@/containers/all-services/medical-billing/hero'
import BillingSolutions from '@/containers/all-services/medical-billing/service-include'
import WhyOutsourceBilling from '@/containers/all-services/medical-billing/why-choose-ar'
import ContactFormSection from '@/containers/audit/form'
import CtaSection from '@/containers/home-page/cta-section'
import React from 'react'

export default function MedicalBillingPage() {
  return (
    <main>
        <MedicalBillingHero />
        <BillingSolutions />
        <ContactFormSection />
        <WhyOutsourceBilling />
        <CtaSection /> 
    </main>
  )
}