"use client";

import SoluxDifference from '@/containers/about-page/difference';
import AboutHero from '@/containers/about-page/hero'
import MissionStoryVisionTabs from '@/containers/about-page/mission-story-vision-tabs';
import AboutService from '@/containers/about-page/services';

import { AboutWhyChooseUs } from '@/containers/about-page/why-choose-us';
import CtaSection from '@/containers/home-page/cta-section';
import TrustBar from '@/containers/home-page/trust-bar';

import React from 'react'

function AboutPage() {
  return (
    <main className="min-h-screen">
        <AboutHero />
        <TrustBar />
        <MissionStoryVisionTabs />
        <AboutWhyChooseUs />
        <AboutService />
        <SoluxDifference />
        <CtaSection />
    </main>
  )
}

export default AboutPage