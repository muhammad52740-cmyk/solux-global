import ContactFormSection from "@/containers/audit/form";
import ContactFooter from "@/containers/contact-us/contact-footer";
import ContactInfoCard from "@/containers/contact-us/contact-info";
import ContactUsHero from "@/containers/contact-us/hero";
import CtaSection from "@/containers/home-page/cta-section";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactUsHero />
      <ContactInfoCard />
      <ContactFormSection />
      <CtaSection />
    </main>
  );
}


