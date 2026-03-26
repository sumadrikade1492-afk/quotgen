"use client";

import { useState, useEffect } from "react";
import { Quote, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const sampleQuotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Believe you can and you&apos;re halfway there.",
    author: "Theodore Roosevelt",
  },
];

export function QuotePreview() {
  const [currentQuote, setCurrentQuote] = useState(sampleQuotes[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateNewQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * sampleQuotes.length);
      setCurrentQuote(sampleQuotes[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      generateNewQuote();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-lg sm:p-12">
          <div className="absolute -right-4 -top-4 text-accent/10">
            <Quote className="h-32 w-32" />
          </div>

          <div
            className={`relative transition-opacity duration-300 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <blockquote className="text-balance text-2xl font-medium leading-relaxed sm:text-3xl md:text-4xl">
              {`"${currentQuote.text}"`}
            </blockquote>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-lg font-medium text-muted-foreground">
                {"— "}
                {currentQuote.author}
              </p>

              <Button
                variant="outline"
                size="sm"
                onClick={generateNewQuote}
                className="gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                New Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
