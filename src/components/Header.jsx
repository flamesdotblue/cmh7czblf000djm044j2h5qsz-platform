import React from "react";
import { Rocket, Github, Link } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 grid place-items-center shadow-md shadow-indigo-500/30">
            <Rocket className="h-5 w-5" />
          </div>
          <div className="font-semibold tracking-tight">Project Workflow</div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#how-it-works" className="hover:text-white transition">How it works</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium hover:bg-white/10 transition"
            aria-label="Live demo"
          >
            <Link className="h-4 w-4" />
            Live Demo
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-2 text-sm font-semibold shadow-lg shadow-indigo-500/30 hover:opacity-90 transition"
            aria-label="View source on GitHub"
          >
            <Github className="h-4 w-4" />
            Source
          </a>
        </div>
      </div>
    </header>
  );
}
