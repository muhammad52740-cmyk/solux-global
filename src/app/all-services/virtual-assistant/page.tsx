import ArSolutions from "@/containers/all-services/ar-management/service-include";
import WhyChooseSoluxAr from "@/containers/all-services/ar-management/why-choose-ar";
import ArHero from "@/containers/all-services/credentialling/hero";
import VirtualAssistanceHero from "@/containers/all-services/medical-billing/hero";
import VirtualAssistantServices from "@/containers/all-services/virtual-assistant/service-include";
import WhyChooseVirtualAssistants from "@/containers/all-services/virtual-assistant/why-choose-ar";
import ContactFormSection from "@/containers/audit/form";
import CtaSection from "@/containers/home-page/cta-section";
import React from "react";

function VirtualAssistantPage() {
  return (
    <div>
      <VirtualAssistanceHero />
      <VirtualAssistantServices />
      <ContactFormSection />
      <WhyChooseVirtualAssistants />
      <CtaSection />
    </div>
  );
}

export default VirtualAssistantPage;
