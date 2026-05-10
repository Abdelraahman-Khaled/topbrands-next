"use client"
import React from 'react';
import { Route, Database, Users, TrendingUp } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';
import StaggerContainer from '../../components/StaggerContainer';
import StaggerItem from '../../components/StaggerItem';

const OurEdgeSection = ({ data }) => {
    if (!data) return null;

    const headerTitle = data["Element 1"]?.value;
    const headerSubtitle = data["Element 2"]?.value;

    const edges = [
        {
            icon: <Route size={26} strokeWidth={1.5} className="text-black" />,
            title: data["Element 3"]?.value,
            description: data["Element 4"]?.value,
            iconBg: "bg-brand-yellow",
        },
        {
            icon: <Database size={26} strokeWidth={1.5} className="text-white" />,
            title: data["Element 5"]?.value,
            description: data["Element 6"]?.value,
            iconBg: "bg-brand-charcoal",
        },
        {
            icon: <Users size={26} strokeWidth={1.5} className="text-white" />,
            title: data["Element 7"]?.value,
            description: data["Element 8"]?.value,
            iconBg: "bg-brand-charcoal",
        },
        {
            icon: <TrendingUp size={26} strokeWidth={1.5} className="text-black" />,
            title: data["Element 9"]?.value,
            description: data["Element 10"]?.value,
            iconBg: "bg-brand-yellow",
        }
    ].filter(e => e.title);

    return (
        <section className="py-12 md:py-20 bg-[#DEE3EB]">
            <div className="max-w-7xl mx-auto px-8 ">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-jet mb-4">
                            {headerTitle}
                        </h2>
                        <p className="text-lg md:text-xl text-brand-charcoal max-w-3xl mx-auto font-medium">
                            {headerSubtitle}
                        </p>
                    </div>
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 gap-8">
                    {edges.map((edge, index) => (
                        <StaggerItem
                            key={index}
                            className="group card-hover bg-white rounded-2xl p-6 md:p-8 border-s-3 border-gray-200 hover:border-brand-yellow hover:shadow-lg transition-all duration-500 ease-in-out shadow-sm"
                        >
                            <div className={`icon-hover w-14 h-14 flex items-center justify-center ${edge.iconBg} rounded-xl mb-6`}>
                                {edge.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-brand-jet mb-4">
                                {edge.title}
                            </h3>
                            <p className="text-base text-brand-charcoal leading-relaxed font-medium">
                                {edge.description}
                            </p>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}

export default OurEdgeSection;
