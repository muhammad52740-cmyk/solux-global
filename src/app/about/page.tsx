"use client";

import AboutHero from '@/containers/about-page/hero'
import { AboutWhyChooseUs } from '@/containers/about-page/why-choose-us'
import AboutTrustBar from '@/containers/about-page/trust-bar'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutTrustBar />
      <AboutWhyChooseUs />
    </main>
  )
}