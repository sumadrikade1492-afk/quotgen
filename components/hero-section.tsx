"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
          <Sparkles className="h-4 w-4" />
          <span>New: AI-Powered Quote Generation</span>
        </div>

        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Generate beautiful quotes instantly
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Create inspiring, motivational, and custom quotes with QuotGen.
          Perfect for social media, presentations, and daily inspiration.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="gap-2 px-8">
            Try for free
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            See examples
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          No credit card required. Start generating quotes in seconds.
        </p>
      </div>
    </section>
  );
}
