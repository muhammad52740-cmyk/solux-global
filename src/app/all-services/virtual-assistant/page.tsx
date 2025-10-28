
import VirtualAssistanceHero from "@/containers/all-services/virtual-assistant/hero";
import VirtualAssistanceServices from "@/containers/all-services/virtual-assistant/service-include";
import WhyChooseVirtualAssistance from "@/containers/all-services/virtual-assistant/why-choose-ar";

import ContactFormSection from "@/containers/audit/form";
import CtaSection from "@/containers/home-page/cta-section";
import React from "react";

function VirtualAssistantPage() {
  return (
    <div>
      <VirtualAssistanceHero />
      <VirtualAssistanceServices />
      <ContactFormSection />
      <WhyChooseVirtualAssistance />
      <CtaSection />
    </div>
  );
}

export default VirtualAssistantPage;
