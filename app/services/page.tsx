'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Video, Users } from 'lucide-react'
import { ServiceCategoryFilter } from '@/components/service-category-filter'

export default function ServicesPage() {
  const [activeServiceCategory, setActiveServiceCategory] = useState('posts')
  const services = [
    {
      id: 'videos',
      title: 'Videos',
      description: 'Professional short-form and user-generated video content',
      icon: Video,
      href: '/services/videos',
    },
    {
      id: 'ugc',
      title: 'UGC Videos',
      description: 'High-quality user-generated content by vetted creators',
      icon: Users,
      href: '/services/videos',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F9FF] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2A4A] mb-4">
            Our Services
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Explore our comprehensive range of professional services designed to grow your business
          </p>
        </div>
      </section>

      {/* Service Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ServiceCategoryFilter
            activeCategory={activeServiceCategory}
            onCategoryChange={setActiveServiceCategory}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.id} href={service.href}>
                  <div className="group h-full p-8 border border-blue-100 rounded-xl hover:border-[#1E5AA8] hover:shadow-lg transition-all bg-white cursor-pointer">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#1E5AA8]/10 flex items-center justify-center group-hover:bg-[#1E5AA8] transition-colors">
                        <Icon className="w-6 h-6 text-[#1E5AA8] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#0B2A4A] mb-2 group-hover:text-[#1E5AA8] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#6B7280] group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
