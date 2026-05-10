"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerItemVariants, reducedMotionVariants } from "../lib/animations";

/**
 * Child item for cascading grid reveals.
 * Must be wrapped in a StaggerContainer.
 */
export default function StaggerItem({ children, className = "", href, target, rel }) {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? reducedMotionVariants : staggerItemVariants;

  if (href) {
    return (
      <motion.a variants={variants} className={className} href={href} target={target} rel={rel}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
