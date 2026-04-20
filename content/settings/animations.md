---
title: "Premium Liquid Animation System"
status: "active"
engine: "framer-motion"
version: "2.0"
description: "Ultra-premium, fluid, liquid-motion typography and layout animations tailored for High-End Real Estate / Top Brands apps."

# 1. Global Page Transitions (app/template.tsx or similar)
# Creates a seamless fluid entry like premium native apps
global_transitions:
  initial: { opacity: 0, y: 30, filter: "blur(12px)", scale: 0.98 }
  animate: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }
  exit: { opacity: 0, y: -20, filter: "blur(8px)", scale: 0.98 }
  transition:
    duration: 0.8
    ease: [0.16, 1, 0.3, 1] # Custom Apple-like exponential out

# 2. Hero Sections & Typography (Liquid Text Reveal)
# Word or line stagger for premium storytelling
typography:
  headline_reveal:
    hidden: { y: "110%", opacity: 0, rotateX: 15 }
    visible: 
      y: "0%", 
      opacity: 1
      rotateX: 0
      transition:
        duration: 0.9
        ease: [0.25, 1, 0.5, 1]

# 3. Interactive Element States (Magnetic & Spring)
# For cards, primary buttons, and visual elements
interactions:
  hover_card:
    scale: 1.02
    y: -8
    filter: "brightness(1.05)"
    boxShadow: "0px 25px 50px rgba(0,0,0,0.12)"
    transition:
      type: "spring"
      stiffness: 300
      damping: 20
  tap_button:
    scale: 0.94
    transition:
      type: "spring"
      stiffness: 500
      damping: 25

# 4. List & Grid Reveal (Seamless Cascading Reveal)
# For product/brand grids, uses very smooth offset delays
stagger_system:
  container:
    hidden: { opacity: 0 }
    visible:
      opacity: 1
      transition: { staggerChildren: 0.08, delayChildren: 0.15 }
  item:
    hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }
    visible: 
      opacity: 1
      y: 0 
      scale: 1
      filter: "blur(0px)"
      transition:
        duration: 0.7
        ease: [0.16, 1, 0.3, 1]

# 5. Scroll Parallax & Reveal (The "Sticky" & "Fade" Effect)
scroll_reveal:
  fade_up_soft:
    initial: { opacity: 0, y: 50 }
    whileInView: { opacity: 1, y: 0 }
    viewport: { once: true, margin: "-100px" }
    transition:
      duration: 0.8
      ease: [0.22, 1, 0.36, 1]
---

## Instruction for AI IDE
When implementing these ultra-premium animations across the app pages (like `/brands`, `/products`, `/home`):
1. Import `motion` and `AnimatePresence` from `framer-motion`.
2. **Page Containers**: Always wrap main page content in `motion.main` or `motion.div` using `global_transitions`.
3. **Grids (Brands/Products)**: Use `stagger_system` for the parent container and `stagger_system.item` variants for children. This ensures a luxurious "cascade" effect.
4. **Hero Text**: Use the `typography` rules. Split text into spans and reveal them smoothly from a clipped bounding box (overflow-hidden) for a high-end editorial look.
5. **Cards**: Apply `interactions.hover_card` using Framer Motion's `whileHover` and `whileTap` properties.
6. **Scroll**: For sections lower on the page, utilize `scroll_reveal` with `whileInView` so they elegantly float into place.