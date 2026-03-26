const steps = [
  {
    step: "01",
    title: "Choose a theme",
    description:
      "Select from motivational, inspirational, funny, or create your own custom theme for your quote.",
  },
  {
    step: "02",
    title: "Generate or write",
    description:
      "Let our AI generate a unique quote for you, or write your own to personalize your message.",
  },
  {
    step: "03",
    title: "Customize the design",
    description:
      "Pick from beautiful templates, adjust colors, fonts, and add backgrounds to match your style.",
  },
  {
    step: "04",
    title: "Share everywhere",
    description:
      "Download your quote as an image or share directly to Instagram, Twitter, and more.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Creating beautiful quotes is simple with QuotGen. Just follow these
            four easy steps.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-8 hidden h-0.5 w-full -translate-x-1/2 bg-border lg:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-lg font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
