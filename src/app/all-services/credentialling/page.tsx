
import CredentiallingHero from '@/containers/all-services/credentialling/hero'
import CredentialingIncluded from '@/containers/all-services/credentialling/service-include'
import WhyChooseAr from '@/containers/all-services/credentialling/why-choose-ar'
import ContactFormSection from '@/containers/audit/form'
import CtaSection from '@/containers/home-page/cta-section'
import React from 'react'

function CredentiallingPage() {
  return (
    <div>
      <CredentiallingHero />
      <CredentialingIncluded />
      <ContactFormSection />
      <WhyChooseAr />
      <CtaSection />
    </div>
  );
}

export default CredentiallingPage;