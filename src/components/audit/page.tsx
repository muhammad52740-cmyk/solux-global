import ContactFormSection from '@/containers/audit/form'
import AuditHero from '@/containers/audit/hero'
import WhatIncluded from '@/containers/audit/what-included';
import WhyChooseSoluxAudit from '@/containers/audit/why-choose-audit';
import React from 'react'

function AuditPage() {
  return (
    <div>
      <AuditHero />
      <WhatIncluded />
      <ContactFormSection />
      <WhyChooseSoluxAudit />
      
    </div>
  );
}

export default AuditPage