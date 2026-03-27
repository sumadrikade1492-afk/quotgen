'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { ServiceTabs } from '@/components/pricing/service-tabs'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowRight, Video, Users, Info } from 'lucide-react'

const services = [
  {
    id: 'short-form',
    title: 'Short-Form Videos',
    description: 'Simple 20-60 second videos for TikTok, Reels, and Shorts.',
    icon: Video,
    category: 'SOCIAL MEDIA',
    basePrice: 199,
    options: [
      { label: '5 videos', price: 199 },
      { label: '10 videos', price: 349 },
      { label: '15 videos', price: 499 },
      { label: '20 videos', price: 649 },
    ],
    href: '/services/videos/short-form-videos',
  },
  {
    id: 'ugc',
    title: 'UGC Videos',
    description: 'Engaging video content created by real users for authentic brand promotion.',
    icon: Users,
    category: 'PAID SOCIAL',
    basePrice: 599,
    options: [
      { label: '1 video', price: 599 },
      { label: '2 videos', price: 1099 },
      { label: '3 videos', price: 1499 },
    ],
    href: '/services/videos/ugc-videos',
  },
]

export default function ShortFormVideosPage() {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, number>>({
    'short-form': 0,
    'ugc': 0,
  })

  const handleOptionChange = (serviceId: string, optionIndex: number) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [serviceId]: optionIndex,
    }))
  }

  return (
    <main className="min-h-screen bg-background">
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
      <section className="pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FF] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Short-Form Videos
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Get your creative &amp; marketing work done without the hassle of unreliable freelancers, costly agencies. Pay a fixed, monthly, and predictable rate, with no contracts or surprises.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
              const Icon = service.icon
              const selectedIndex = selectedOptions[service.id] ?? 0
              const selectedOption = service.options[selectedIndex]
              const price = selectedOption?.price ?? service.basePrice

              return (
                <div
                  key={service.id}
                  className="bg-white border border-border rounded-xl p-5 flex flex-col hover:border-primary/50 hover:shadow-sm transition-all"
                >
                  {/* Header with icon and category badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <Icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-wide px-2 py-1 rounded bg-muted text-muted-foreground">
                      {service.category}
                    </span>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="mb-1">
                    <span className="text-2xl font-bold text-foreground">${price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">Pricing from</p>

                  {/* Quantity Selector */}
                  <div className="mb-4">
                    <Select
                      value={String(selectedIndex)}
                      onValueChange={(value) => handleOptionChange(service.id, Number(value))}
                    >
                      <SelectTrigger className="w-full h-9 text-xs bg-muted/50 border-border">
                        <SelectValue>
                          {selectedOption?.label} - ${selectedOption?.price}/mo
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {service.options.map((option, index) => (
                          <SelectItem key={index} value={String(index)} className="text-xs">
                            {option.label} - ${option.price}/mo
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Checkout Button */}
                  <Link
                    href={`/checkout?plan=${encodeURIComponent(service.title)}&price=${price}&qty=${selectedOption?.label}`}
                    className="block mb-3"
                  >
                    <Button className="w-full h-9 text-sm bg-foreground text-background hover:bg-foreground/90">
                      Checkout
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </Link>

                  {/* Learn More Link */}
                  <Link
                    href={service.href}
                    className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Learn more
                    <Info className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
