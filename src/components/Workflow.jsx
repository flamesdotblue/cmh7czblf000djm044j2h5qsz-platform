import React, { useMemo, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Rocket,
  Server,
  Cloud,
  Shield,
  Plug,
  Database,
  Layers,
  Globe,
} from "lucide-react";
import StepCard from "./StepCard";

export default function Workflow() {
  const steps = useMemo(
    () => [
      {
        id: 1,
        title: "Client connects",
        description:
          "User hits your app and initializes a session. Lightweight SDK boots and negotiates a connection.",
        icon: Plug,
        accent: "from-emerald-500 to-teal-500",
        preview: "The client establishes a secure session and requests capabilities.",
      },
      {
        id: 2,
        title: "API & auth",
        description:
          "Your API authenticates the request and returns signed tokens with scoped permissions.",
        icon: Shield,
        accent: "from-blue-500 to-indigo-500",
        preview: "Auth service issues tokens and feature flags for the session.",
      },
      {
        id: 3,
        title: "Orchestration",
        description:
          "Control plane allocates resources, selects regions, and provisions compute for the workload.",
        icon: Server,
        accent: "from-violet-500 to-fuchsia-500",
        preview: "Control plane schedules workers and selects the optimal edge region.",
      },
      {
        id: 4,
        title: "Processing",
        description:
          "Workers stream, process, and persist data. Events are emitted for real-time updates.",
        icon: Database,
        accent: "from-amber-500 to-orange-500",
        preview: "Workers handle tasks, push metrics, and store results efficiently.",
      },
      {
        id: 5,
        title: "Delivery",
        description:
          "Results are delivered via WebSocket or HTTP to clients around the globe with edge caching.",
        icon: Globe,
        accent: "from-pink-500 to-rose-500",
        preview: "Edge network fans results out to clients with low latency.",
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState(steps[0].id);
  const active = steps.find((s) => s.id === activeId);

  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <PreviewPanel step={active} />
          </div>
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <StepObserver key={step.id} onActive={() => setActiveId(step.id)}>
                <StepCard index={idx} step={step} active={activeId === step.id} />
              </StepObserver>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-center gap-3">
                <Layers className="h-5 w-5 text-slate-300" />
                <p className="text-slate-300 text-sm">
                  This flow is modular. Swap any step with your own infrastructure while keeping the user experience consistent.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div id="features" className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard icon={Cloud} title="Scalable by default" desc="Designed to scale across regions and providers." />
          <FeatureCard icon={Shield} title="Secure" desc="Least-privilege tokens and end-to-end encryption options." />
          <FeatureCard icon={Rocket} title="Fast integration" desc="Drop-in SDKs and clear APIs to get started in minutes." />
        </div>
      </div>
    </section>
  );
}

function StepObserver({ children, onActive }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { margin: "-30% 0px -60% 0px", amount: 0.4 });

  React.useEffect(() => {
    if (inView) onActive?.();
  }, [inView, onActive]);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}

function PreviewPanel({ step }) {
  const Icon = step.icon;
  return (
    <motion.div
      key={step.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className={`absolute inset-0 -z-10 opacity-30 bg-gradient-to-br ${step.accent} blur-3xl`} />
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${step.accent} grid place-items-center shadow-lg shadow-black/40`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">Current step</p>
            <h3 className="text-xl font-semibold">{step.title}</h3>
          </div>
        </div>
        <p className="mt-4 text-slate-300 leading-relaxed">
          {step.preview}
        </p>
        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4">
          <div className="text-xs text-slate-400">Preview</div>
          <div className="mt-2 grid grid-cols-2 gap-3 text-sm">
            <PreviewBadge icon={Server} label="Region" value="auto" />
            <PreviewBadge icon={Database} label="Worker" value="3 pods" />
            <PreviewBadge icon={Cloud} label="Edge" value="enabled" />
            <PreviewBadge icon={Shield} label="Auth" value="token" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PreviewBadge({ icon: Ico, label, value }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
      <div className="flex items-center gap-2 text-slate-300">
        <Ico className="h-4 w-4" />
        <span className="text-xs">{label}</span>
      </div>
      <span className="text-xs text-slate-200 font-medium">{value}</span>
    </div>
  );
}

function FeatureCard({ icon: Ico, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg grid place-items-center bg-white/10">
          <Ico className="h-5 w-5" />
        </div>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <p className="mt-3 text-sm text-slate-300">{desc}</p>
    </motion.div>
  );
}
