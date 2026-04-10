"use client"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navContainerVariants = {
    hidden: { opacity: 0, y: -40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.4, // Increased from 0.8
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15, // Increased from 0.08
        delayChildren: 0.4 // Increased from 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -15, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 200, damping: 30 } // Softened spring
    }
  };

  const links = [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "services", href: "/services" },
    { key: "brands", href: "/brands" },
    { key: "coverage", href: "/market-coverage" },
    { key: "blog", href: "/blog" },
    { key: "contact", href: "/contact" }
  ];

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navContainerVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,padding,shadow] duration-500 ease-out border-b ${isScrolled 
        ? "bg-white/85 backdrop-blur-xl shadow-lg border-gray-100/30 py-3" 
        : "bg-transparent border-transparent py-5"
        }`}
    >
      <div className="w-full px-8 lg:px-16 mx-auto">
        <div className="flex items-center justify-between h-14">
          <motion.a 
            href="/" 
            className="flex items-center cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src="/images/logo.png"
              alt="Top Brands Syria"
              className="h-12 w-auto"
            />
          </motion.a>

          {/* Staggered Navigation Links */}
          <div className="hidden lg:flex items-center space-x-10 rtl:space-x-reverse">
            {links.map((link) => (
              <motion.a
                key={link.key}
                href={link.href}
                variants={itemVariants}
                className={`relative text-base font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer group ${isScrolled
                  ? "text-gray-800 hover:text-brand-yellow"
                  : "text-white hover:text-brand-yellow"
                  }`}
              >
                {t(link.key)}
                <motion.span 
                  className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-brand-yellow rounded-full transition-all duration-300 group-hover:w-full"
                />
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div 
            className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse"
            variants={itemVariants}
          >
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-2 shadow-sm ${isScrolled
                ? "text-gray-800 bg-gray-100 hover:bg-gray-200"
                : "text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20"
                }`}
            >
              <i className="ri-global-line"></i>
              {i18n.language === "en" ? "AR" : "EN"}
            </motion.button>
            <motion.a
              href="/become-a-partner"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full border-2 font-bold transition-all whitespace-nowrap cursor-pointer ${isScrolled
                ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                : "border-white text-white hover:bg-white hover:text-gray-900 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                }`}
            >
              {t("become_partner")}
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(234, 179, 8, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-brand-yellow text-gray-900 rounded-full font-bold shadow-md hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
            >
              {t("get_in_touch")}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
