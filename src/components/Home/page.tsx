import CoreServiceSection from '@/containers/core-sevices';
import CtaSection from '@/containers/cta-section';
import FaqSection from '@/containers/faq';
import Footer from '@/containers/footer';
import Header from '@/containers/header'
import HeroSection from '@/containers/hero'
import { OurServices } from '@/containers/our-services';
import { Testimonials } from '@/containers/testimonial';
import TrustBar from '@/containers/trust-bar';
import { WhyChooseUs } from '@/containers/why-choose-us';
import React from 'react'

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TrustBar />
      <WhyChooseUs />
      <OurServices />
      <FaqSection />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default HomePage