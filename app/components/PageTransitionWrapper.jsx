"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageTransitionVariants, reducedMotionVariants } from "../lib/animations";

/**
 * Global wrapper for page transitions.
 * Wrapped in layout.js to animate Navbar + Content + Footer together.
 */
export default function PageTransitionWrapper({ children }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  // Determine which variants to use based on accessibility settings
  const variants = shouldReduceMotion ? reducedMotionVariants : pageTransitionVariants;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={pageTransitionVariants.transition}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
