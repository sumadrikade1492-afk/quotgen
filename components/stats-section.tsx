const stats = [
  { value: "10M+", label: "Quotes generated" },
  { value: "500K+", label: "Active users" },
  { value: "150+", label: "Design templates" },
  { value: "4.9", label: "Average rating" },
];

export function StatsSection() {
  return (
    <section className="border-y border-border bg-secondary/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
