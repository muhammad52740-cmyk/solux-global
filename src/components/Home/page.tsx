import CoreServiceSection from '@/containers/home-page/core-sevices';
import CtaSection from '@/containers/home-page/cta-section';
import FaqSection from '@/containers/home-page/faq';
import Footer from '@/containers/home-page/footer';
import Header from '@/containers/home-page/header'
import HeroSection from '@/containers/home-page/hero'
import { OurServices } from '@/containers/home-page/our-services';
import { Testimonials } from '@/containers/home-page/testimonial';
import TrustBar from '@/containers/home-page/trust-bar';
import { WhyChooseUs } from '@/containers/home-page/why-choose-us';
import React from 'react'

function HomePage() {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <WhyChooseUs />
      <OurServices />
      <FaqSection />
      <Testimonials />
      <CtaSection />
    </div>
  );
}

export default HomePage