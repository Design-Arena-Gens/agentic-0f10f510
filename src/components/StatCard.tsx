"use client";

import { motion } from "framer-motion";

type StatCardProps = {
  label: string;
  value: string;
  context: string;
};

export function StatCard({ label, value, context }: StatCardProps) {
  return (
    <motion.div
      className="flex flex-col rounded-2xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-black/30 backdrop-blur"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
    >
      <span className="text-xs uppercase tracking-[0.25em] text-primary-200/70">
        {label}
      </span>
      <span className="mt-4 text-3xl font-semibold text-white">{value}</span>
      <span className="mt-3 text-sm text-slate-300">{context}</span>
    </motion.div>
  );
}
