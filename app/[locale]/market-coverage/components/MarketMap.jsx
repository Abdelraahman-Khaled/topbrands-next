"use client"
import React from 'react';
import { motion } from "framer-motion";
import StaggerContainer from "../../components/StaggerContainer";
import StaggerItem from "../../components/StaggerItem";

const MarketMap = ({ mapData, areasData, areas, locale }) => {
    const isAr = locale === 'ar';
    
    // Icon mapping based on city index (matching original design)
    const icons = [
        "ri-building-line",
        "ri-building-2-line",
        "ri-building-3-line",
        "ri-ship-line",
        "ri-building-4-line",
        "ri-anchor-line"
    ];

    return (
        <section className="py-16 md:py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
                    {/* Visual Map Side */}
                    <div className="relative aspect-[4/5] sm:aspect-video md:aspect-auto md:h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl">
                        <motion.img
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1.2 }}
                            src={mapData?.image_url || "/images/market-coverage/map.webp"}
                            alt="Syria Market Coverage Map"
                            className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
                            <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-xl border border-white/20">
                                <p className="text-xs md:text-sm text-brand-charcoal font-bold mb-1 md:mb-2 uppercase tracking-wider">
                                    {mapData?.["Text Element 3"]?.value}
                                </p>
                                <p className="text-lg md:text-2xl font-bold text-black leading-tight">
                                    {mapData?.["Text Element 2"]?.value}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Areas List Side */}
                    <div className="space-y-8">
                        <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black text-black leading-tight ${isAr ? 'text-right' : 'text-left'}`}>
                            {mapData?.["Text Element 1"]?.value}
                        </h2>
                        <StaggerContainer className="space-y-4 md:space-y-6">
                            {areas.map((area, index) => (
                                <StaggerItem key={index}>
                                    <motion.div
                                        whileHover={{ x: isAr ? -10 : 10 }}
                                        className="group bg-brand-paleblue rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-yellow cursor-default"
                                    >
                                        <div className={`flex items-center space-x-4 ${isAr ? 'flex-row-reverse space-x-reverse' : ''}`}>
                                            <div className="w-14 h-14 flex items-center justify-center bg-brand-yellow rounded-xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                                                <i className={`${icons[index % icons.length]} text-2xl text-black`}></i>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-black mb-1">
                                                    {area.val0}
                                                </h3>
                                                <p className="text-sm text-brand-charcoal">
                                                    {area.val1}
                                                </p>
                                            </div>
                                            <div className={`flex items-center space-x-2 ${isAr ? 'flex-row-reverse space-x-reverse' : ''}`}>
                                                <motion.div
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ repeat: Infinity, duration: 2 }}
                                                    className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                                                ></motion.div>
                                                <span className="text-sm font-medium text-green-600">
                                                    {area.val2}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketMap;
