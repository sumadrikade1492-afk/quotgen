'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { ServiceTabs } from '@/components/pricing/service-tabs'
import { Button } from '@/components/ui/button'
import { ArrowRight, BadgeCheck, CalendarCheck, CopyCheck, FileSearch, Paintbrush, Phone } from 'lucide-react'

const VIDEO_QUANTITY_OPTIONS = [4, 8, 12, 16, 20]
const VIDEO_PRICE_PER_UNIT = 37.25

function calculateVideoPrice(quantity: number) {
  return Math.round(VIDEO_PRICE_PER_UNIT * quantity)
}

export default function ShortFormVideosPage() {
  const [quantityIndex, setQuantityIndex] = useState(0)

  const quantity = VIDEO_QUANTITY_OPTIONS[quantityIndex] ?? VIDEO_QUANTITY_OPTIONS[0]
  const price = calculateVideoPrice(quantity)

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <nav className="pt-32 px-4 sm:px-6 lg:px-8 bg-[#F5F9FF]">
        <div className="max-w-7xl mx-auto mb-8">
          <Breadcrumb
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Videos', href: '/services/videos' },
              { label: 'Short-Form Videos' },
            ]}
          />
        </div>
      </nav>

      {/* Service Tabs */}
      <ServiceTabs />

      {/* Hero Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FF] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-4">
            Short-Form Videos
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Professional short-form video content for TikTok, Instagram Reels, and YouTube Shorts
          </p>
        </div>
      </section>

      {/* Configurator Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-blue-100 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-blue-100">
                  <div className="flex items-start justify-between gap-6 mb-4">
                    <div className="min-w-0">
                      <h2 className="text-xl font-bold text-[#0B2A4A]">Short-Form Videos</h2>
                      <p className="text-sm text-[#6B7280]">{quantity} videos</p>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="text-2xl font-bold text-[#0B2A4A]">${price}</span>
                      <span className="text-[#6B7280]">/mo</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#6B7280] mb-6">
                    Engaging 15-60 second short-form videos for TikTok, Reels, and Shorts. Edited with premium stock
                    footage or raw footage provided by client.
                  </p>

                  <div className="mb-2 flex items-center justify-between text-sm">
                    <p className="font-semibold text-[#0B2A4A]">Select monthly number of videos</p>
                    <p className="text-[#6B7280]">{quantity}</p>
                  </div>

                  {/* Slider */}
                  <div className="py-4">
                    <input
                      aria-label="Monthly number of videos"
                      type="range"
                      min={0}
                      max={VIDEO_QUANTITY_OPTIONS.length - 1}
                      step={1}
                      value={quantityIndex}
                      onChange={(e) => setQuantityIndex(Number(e.target.value))}
                      className="w-full accent-[#1E5AA8]"
                    />
                    <div className="mt-2 flex justify-between text-xs text-[#6B7280]">
                      {VIDEO_QUANTITY_OPTIONS.map((q) => (
                        <span key={q} className={q === quantity ? 'text-[#0B2A4A] font-semibold' : undefined}>
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`mt-4 p-3 rounded-lg text-sm ${
                      price >= 149 ? 'bg-[#1E5AA8]/10 text-[#1E5AA8]' : 'bg-gray-50 text-[#6B7280]'
                    }`}
                  >
                    {price >= 149
                      ? '✓ Your order qualifies for onboarding & monthly calls'
                      : 'Orders over $149 qualify for onboarding & monthly calls'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-blue-100 rounded-2xl p-6 sticky top-28">
                <h3 className="text-lg font-bold text-[#0B2A4A] mb-4">Short-Form Videos</h3>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-sm text-[#6B7280]">
                    <Paintbrush className="w-4 h-4 text-[#1E5AA8]" />
                    Videos in your branding
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#6B7280]">
                    <FileSearch className="w-4 h-4 text-[#1E5AA8]" />
                    Captions & hashtags
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#6B7280]">
                    <CalendarCheck className="w-4 h-4 text-[#1E5AA8]" />
                    Posted for you (optional)
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#6B7280]">
                    <Phone className="w-4 h-4 text-[#1E5AA8]" />
                    Onboarding call (optional)
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#6B7280]">
                    <BadgeCheck className="w-4 h-4 text-[#1E5AA8]" />
                    1 social channel included
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#6B7280]">
                    <CopyCheck className="w-4 h-4 text-[#1E5AA8]" />
                    $10/mo each extra channel
                  </li>
                </ul>

                <p className="text-xs text-[#6B7280] mb-6">
                  <strong>Pricing is in USD.</strong> Your selected plan renews automatically each month but you can{' '}
                  <strong>cancel anytime</strong>.
                </p>

                <Link href={`/checkout?plan=Short-Form%20Videos&price=${price}&qty=${quantity}`} className="block">
                  <Button className="w-full bg-[#1E5AA8] text-white hover:bg-[#154080] group">
                    Checkout
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <button className="w-full mt-3 text-sm text-[#6B7280] hover:text-[#0B2A4A] underline">
                  How the service works
                </button>

                <div className="mt-4 pt-4 border-t border-blue-100 text-center">
                  <button className="text-sm text-[#1E5AA8] hover:underline">Schedule a demo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </main>
  )
}
