import DigitalMarketing from "@/containers/all-services/digital-marketing/hero";
import DigitalMarketingIncluded from "@/containers/all-services/digital-marketing/service-include";
import DigitalMarketingBenefits from "@/containers/all-services/digital-marketing/why-choose-ar";

import ContactFormSection from "@/containers/audit/form";
import CtaSection from "@/containers/home-page/cta-section";
import React from "react";

function DrugBillingPage() {
  return (
    <div>
      <DigitalMarketing />
      <DigitalMarketingIncluded />
      <ContactFormSection />
      <DigitalMarketingBenefits />
      <CtaSection />
    </div>
  );
}

export default DrugBillingPage;
