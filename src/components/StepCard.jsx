import React from "react";
import { motion } from "framer-motion";

export default function StepCard({ step, index, active }) {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      className={`relative overflow-hidden rounded-2xl border p-6 sm:p-7 transition ${
        active ? "border-white/30 bg-white/[0.08]" : "border-white/10 bg-white/[0.04]"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`shrink-0 h-11 w-11 rounded-xl grid place-items-center text-white shadow-lg shadow-black/40 bg-gradient-to-br ${step.accent}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
          </div>
          <p className="mt-2 text-slate-300 leading-relaxed">{step.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
