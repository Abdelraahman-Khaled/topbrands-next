"use client";

import React from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { headlineRevealVariants } from '../lib/animations';

const HeroSection = ({ subtitle, title, description1, yellowText, description2, img, yellowTitle }) => {
    const { t } = useTranslation();

    return (
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-[60vh] flex items-center">
            <div className="absolute inset-0">
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={img}
                    alt={t("contact_accent")}
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent rtl:bg-gradient-to-l rtl:from-black/80 rtl:via-black/40 rtl:to-transparent"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center space-x-4 rtl:space-x-reverse mb-6 lg:mb-8"
                >
                    <span className="text-xs md:text-sm font-semibold text-brand-yellow tracking-widest uppercase">
                      / {subtitle}
                    </span>
                    <div className="h-px w-10 md:w-16 bg-brand-yellow"></div>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold w-full text-white mb-6 lg:mb-8 leading-[1.1] overflow-hidden py-2">
                    <motion.div
                        variants={headlineRevealVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {title}
                        <span className="text-brand-yellow block mt-2 lg:inline lg:mt-0"> {yellowTitle}</span>
                    </motion.div>
                </h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl font-light"
                >
                    {description1}
                    <strong className="font-bold text-brand-yellow font-almarai">
                        {" "} {yellowText} {" "}
                    </strong>
                    {description2}
                </motion.p>
            </div>
        </section>
    )
}

export default HeroSection