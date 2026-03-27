"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { ServiceTabs } from "@/components/pricing/service-tabs"
import { PricingPackages } from "@/components/pricing/pricing-packages"
import { ServiceCardsGrid } from "@/components/pricing/service-cards-grid"

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("posts")

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <PricingHero />
        <ServiceTabs 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          navigateOnClick={false}
        />
        <PricingPackages />
        <ServiceCardsGrid activeTab={activeTab} />
      </div>
      <Footer />
    </main>
  )
}
