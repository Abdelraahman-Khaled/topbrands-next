"use client"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
    { key: "products", href: "/products" },
    { key: "coverage", href: "/market-coverage" },
    { key: "blog", href: "/blog" },
    { key: "contact", href: "/contact" }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: 20, filter: "blur(5px)" },
    open: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navContainerVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,padding,shadow] duration-500 ease-out border-b ${isScrolled 
        ? "bg-white/85 backdrop-blur-xl shadow-lg border-gray-100/30 py-3" 
        : "bg-transparent border-transparent py-5"
        } ${isOpen ? "bg-white/95 !backdrop-blur-3xl" : ""}`}
    >
      <div className="w-full px-6 lg:px-16 mx-auto">
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

          {/* Desktop Action Buttons */}
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

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-lg font-bold flex items-center gap-1 ${isScrolled || isOpen ? "text-gray-800" : "text-white"}`}
            >
              {i18n.language === "en" ? "AR" : "EN"}
            </button>
            <button
              onClick={toggleMenu}
              className={`text-3xl focus:outline-none transition-colors ${isScrolled || isOpen ? "text-gray-800" : "text-white"}`}
            >
              <i className={isOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 h-screen w-screen bg-white z-[100] lg:hidden flex flex-col"
          >
            {/* Mobile Menu Header (Logo + Close) */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <img
                src="/images/logo.png"
                alt="Top Brands"
                className="h-10 w-auto"
              />
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleLanguage}
                  className="px-3 py-1 bg-gray-100 rounded-lg font-bold text-gray-800"
                >
                  {i18n.language === "en" ? "AR" : "EN"}
                </button>
                <button
                  onClick={toggleMenu}
                  className="text-4xl text-gray-800 focus:outline-none"
                >
                  <i className="ri-close-line"></i>
                </button>
              </div>
            </div>

            {/* Links and Actions Container */}
            <div className="flex-1 flex flex-col justify-between px-8 py-10 overflow-y-auto">
              {/* Main Links */}
              <div className="flex flex-col space-y-2">
                {links.map((link) => (
                  <motion.a
                    key={link.key}
                    href={link.href}
                    variants={mobileItemVariants}
                    className="text-2xl font-bold text-gray-900 py-4 border-b border-gray-50 flex items-center justify-between group px-4"
                  >
                    <span>{t(link.key)}</span>
                    <motion.i 
                      whileHover={{ x: 5 }}
                      className="ri-arrow-right-s-line text-brand-yellow text-3xl transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                    ></motion.i>
                  </motion.a>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-12 flex flex-col space-y-4">
                <motion.a
                  variants={mobileItemVariants}
                  href="/become-a-partner"
                  className="w-full py-4 text-center rounded-2xl border-2 border-gray-900 font-extrabold text-gray-900 shadow-sm"
                >
                  {t("become_partner")}
                </motion.a>
                <motion.a
                  variants={mobileItemVariants}
                  href="/contact"
                  className="w-full py-4 text-center rounded-2xl bg-brand-yellow font-extrabold text-gray-900 shadow-xl shadow-yellow-500/30"
                >
                  {t("get_in_touch")}
                </motion.a>
                
                <motion.div 
                  variants={mobileItemVariants}
                  className="pt-10 text-center"
                >
                  <p className="text-gray-400 text-sm font-medium">
                    &copy; {new Date().getFullYear()} Top Brands Syria
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
