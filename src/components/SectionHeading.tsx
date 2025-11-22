"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

const textVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <motion.div
      className={clsx(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.15, duration: 0.4 }}
    >
      {eyebrow ? (
        <motion.p
          variants={textVariants}
          className="text-sm tracking-[0.2em] uppercase text-primary-300/80"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        variants={textVariants}
        className="mt-2 text-3xl font-semibold text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={textVariants}
          className="mt-4 text-lg text-slate-300"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
