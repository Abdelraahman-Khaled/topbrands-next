"use client";
import React from 'react';
import { Truck, Store, Award, FastForward, Map, ShoppingCart, Ship } from 'lucide-react';
import StaggerContainer from '../../components/StaggerContainer';
import StaggerItem from '../../components/StaggerItem';
import ScrollReveal from '../../components/ScrollReveal';

const ServiceCard = ({ icon: Icon, data, isYellow }) => {
    if (!data) return null;

    const title = data["Element 1"]?.value;
    const description = data["Element 2"]?.value;
    
    // Extract bullets from Element 3 till Element 6
    const bullets = Object.keys(data)
        .filter(key => {
            const index = parseInt(key.split(" ")[1]);
            return key.startsWith("Element") && index >= 3 && index <= 6;
        })
        .map(key => data[key]?.value)
        .filter(Boolean);

    return (
        <ScrollReveal>
            <StaggerItem className="flex flex-col gap-5 p-8 md:p-12 rounded-3xl border-2 border-gray-200 bg-white h-full transition-all hover:border-[#F7E326] hover:shadow-xl">
                {/* Icon with dynamic background */}
                <div className={`w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm ${isYellow ? 'bg-[#F7E326] text-black' : 'bg-[#4B4B4B] text-white'}`}>
                    <Icon size={30} strokeWidth={2.5} />
                </div>

                <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-black leading-snug tracking-tight">
                        {title}
                    </h3>

                    <p className="text-brand-charcoal text-base leading-relaxed font-normal">
                        {description}
                    </p>
                </div>

                {/* Bullet Points */}
                {bullets.length > 0 && (
                    <ul className="space-y-2.5 pt-2">
                        {bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-brand-charcoal font-normal tracking-wide">
                                <span className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${isYellow ? 'bg-[#F7E326]' : 'bg-[#4B4B4B]'}`} />
                                {bullet}
                            </li>
                        ))}
                    </ul>
                )}
            </StaggerItem>
        </ScrollReveal>
    );
};

const ServicesGrid = ({ data }) => {
    if (!data) return null;

    const services = [
        { key: 'fmcgDist', icon: Truck, isYellow: false },
        { key: 'retailTrade', icon: Store, isYellow: true },
        { key: 'brandRep', icon: Award, isYellow: false },
        { key: 'salesExec', icon: FastForward, isYellow: true },
        { key: 'marketCov', icon: Map, isYellow: false },
        { key: 'merchVis', icon: ShoppingCart, isYellow: true },
        { key: 'importTrade', icon: Ship, isYellow: false },
    ];

    return (
        <section className="w-full bg-[#DEE3EB] py-16 px-6">
            <StaggerContainer className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        data={data[service.key]}
                        icon={service.icon}
                        isYellow={service.isYellow}
                    />
                ))}
            </StaggerContainer>
        </section>
    );
};

export default ServicesGrid;