import CredentiallingHero from "@/containers/all-services/credentialling/hero";
import CredentialingIncluded from "@/containers/all-services/credentialling/service-include";
import WhyChooseAr from "@/containers/all-services/credentialling/why-choose-ar";
import DrugRehabBillingHero from "@/containers/all-services/drug-billing/hero";
import RehabBillingIncluded from "@/containers/all-services/drug-billing/service-include";
import RehabBillingBenefits from "@/containers/all-services/drug-billing/why-choose-ar";
import MedicalScribbingHero from "@/containers/all-services/medical-scribbing/hero";
import ScribbingSolutions from "@/containers/all-services/medical-scribbing/service-include";
import WhyOutsourceScribbing from "@/containers/all-services/medical-scribbing/why-choose-ar";
import ContactFormSection from "@/containers/audit/form";
import CtaSection from "@/containers/home-page/cta-section";
import React from "react";

function DrugBillingPage() {
  return (
    <div>
      <DrugRehabBillingHero />
      <RehabBillingIncluded/>
      <ContactFormSection />
      <RehabBillingBenefits />
      <CtaSection />
    </div>
  );
}

export default DrugBillingPage;
