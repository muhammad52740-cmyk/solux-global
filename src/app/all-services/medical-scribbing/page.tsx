import CredentiallingHero from "@/containers/all-services/credentialling/hero";
import CredentialingIncluded from "@/containers/all-services/credentialling/service-include";
import WhyChooseAr from "@/containers/all-services/credentialling/why-choose-ar";
import MedicalScribbingHero from "@/containers/all-services/medical-scribbing/hero";
import ScribbingSolutions from "@/containers/all-services/medical-scribbing/service-include";
import WhyOutsourceScribbing from "@/containers/all-services/medical-scribbing/why-choose-ar";
import ContactFormSection from "@/containers/audit/form";
import CtaSection from "@/containers/home-page/cta-section";
import React from "react";

function CredentiallingPage() {
  return (
    <div>
      <MedicalScribbingHero />
      <ScribbingSolutions />
      <ContactFormSection />
      <WhyOutsourceScribbing />
      <CtaSection />
    </div>
  );
}

export default CredentiallingPage;
