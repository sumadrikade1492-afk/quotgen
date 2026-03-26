import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Start creating quotes today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg opacity-90">
            Join over 500,000 creators who use QuotGen to inspire their audience
            every day. Get started for free.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 px-8 text-foreground"
            >
              Get started free
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
