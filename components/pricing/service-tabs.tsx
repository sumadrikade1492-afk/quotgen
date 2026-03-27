"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ImageIcon,
  Video,
  LayoutGrid,
  Film,
  Mail,
  FileText,
  Link2,
  Target,
  Search,
  TrendingUp,
} from "lucide-react"

const services = [
  { id: "posts", label: "Posts", icon: ImageIcon, link: "/services/posts" },
  { id: "videos", label: "Videos", icon: Video, link: "/videos" },
  { id: "static-ads", label: "Static Ads", icon: LayoutGrid, link: "/static-ads" },
  { id: "video-ads", label: "Video Ads", icon: Film, link: "/video-ads" },
  { id: "emails", label: "Emails", icon: Mail, link: "/email-design" },
  { id: "blogs", label: "Blogs", icon: FileText, link: "/blog" },
  { id: "backlinks", label: "Backlinks", icon: Link2, link: "/seo" },
  { id: "meta-ads", label: "Meta Ads", icon: Target, link: "/meta-ads" },
  { id: "google-ads", label: "Google Ads", icon: Search, link: "/google-ads" },
  { id: "instagram-growth", label: "Instagram Growth", icon: TrendingUp, link: "/instagram-growth" },
]

export function ServiceTabs() {
  const pathname = usePathname()
  const [activeService, setActiveService] = useState(() => {
    const matched = services.find((service) => service.link === pathname)
    return matched?.id ?? "posts"
  })

  useEffect(() => {
    const matched = services.find((service) => service.link === pathname)
    setActiveService(matched?.id ?? "posts")
  }, [pathname])

  return (
    <section className="pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2">
          {services.map((service) => {
            const Icon = service.icon
            const isActive = activeService === service.id
            return (
              <Link key={service.id} href={service.link}>
                <button
                  onClick={() => setActiveService(service.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all
                    ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span>{service.label}</span>
                </button>
              </Link>
            )
          })}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">Combine any services & add-ons during checkout</p>
      </div>
    </section>
  )
}
