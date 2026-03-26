import { Sparkles, Zap, Share2, Palette, Download, Globe } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered",
    description:
      "Generate unique, meaningful quotes using advanced AI that understands context and emotion.",
  },
  {
    icon: Zap,
    title: "Instant Generation",
    description:
      "Get beautiful quotes in seconds. No waiting, no complicated setup required.",
  },
  {
    icon: Palette,
    title: "Customizable Styles",
    description:
      "Choose from dozens of templates and customize colors, fonts, and backgrounds.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description:
      "Share your quotes directly to social media or download for later use.",
  },
  {
    icon: Download,
    title: "Multiple Formats",
    description:
      "Export quotes as images, PDFs, or copy text for any platform you need.",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description:
      "Generate and translate quotes in over 50 languages to reach a global audience.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-secondary/50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to create amazing quotes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            QuotGen combines powerful AI with beautiful design tools to help you
            create quotes that inspire and engage.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
