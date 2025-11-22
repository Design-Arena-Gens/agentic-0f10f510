"use client";

import { motion } from "framer-motion";

export type TimelineEvent = {
  title: string;
  phase: string;
  description: string;
  highlight?: string;
};

type InteractiveTimelineProps = {
  events: TimelineEvent[];
};

export function InteractiveTimeline({ events }: InteractiveTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-1 top-0 h-full w-px bg-gradient-to-b from-primary-400/60 via-primary-400/30 to-transparent sm:left-1/2" />
      <ol className="space-y-8 pl-6 sm:pl-0">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.li
              key={event.title}
              className="relative sm:grid sm:grid-cols-2 sm:gap-8"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`${
                  isLeft ? "sm:col-start-1" : "sm:col-start-2"
                } rounded-2xl border border-white/5 bg-slate-900/60 p-6 shadow-lg shadow-black/30 backdrop-blur`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-200/70">
                  {event.phase}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {event.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  {event.description}
                </p>
                {event.highlight ? (
                  <p className="mt-4 rounded-lg border border-primary-300/40 bg-primary-500/10 px-4 py-3 text-sm text-primary-100">
                    {event.highlight}
                  </p>
                ) : null}
              </div>
              <div
                className={`absolute -left-5 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-primary-400/60 bg-slate-950 text-sm font-semibold text-primary-200 shadow-lg shadow-primary-900/40 sm:left-1/2 sm:-translate-x-1/2`}
              >
                {index + 1}
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
