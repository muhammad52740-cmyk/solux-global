import ArHero from "@/containers/all-services/ar-management/hero";
import ArSolutions from "@/containers/all-services/ar-management/service-include";
import WhyChooseSoluxAr from "@/containers/all-services/ar-management/why-choose-ar";

import ContactFormSection from "@/containers/audit/form";
import CtaSection from "@/containers/home-page/cta-section";
import React from "react";

function ArPage() {
  return (
    <div>
      <ArHero />
      <ArSolutions />
      <ContactFormSection />
      <WhyChooseSoluxAr />
      <CtaSection />
    </div>
  );
}

export default ArPage;
