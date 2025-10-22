"use client";

import AuditHero from '@/containers/audit/hero'
import ContactFormSection from '@/containers/audit/form'
import WhatIncluded from '@/containers/audit/what-included'
import WhyChooseSoluxAudit from '@/containers/audit/why-choose-audit'

export default function AuditPage() {
  return (
    <main className="min-h-screen">
      <AuditHero />
      <WhatIncluded />
      <ContactFormSection />
      <WhyChooseSoluxAudit />
    </main>
  )
}