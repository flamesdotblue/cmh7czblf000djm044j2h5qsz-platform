import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30" aria-hidden>
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute top-40 right-10 h-72 w-72 rounded-full bg-violet-600/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">
            Your Project, Explained Clearly
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            A clean, interactive walkthrough that shows how your system works from end to end. Inspired by modern product sites, optimized for clarity and speed.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:opacity-90 transition"
            >
              See how it works
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
