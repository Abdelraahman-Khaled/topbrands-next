import React from 'react';
import { Truck, Store, Award, FastForward, Map, ShoppingCart, Ship } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import StaggerContainer from '../../components/StaggerContainer';
import StaggerItem from '../../components/StaggerItem';
import ScrollReveal from '../../components/ScrollReveal';

const ServiceCard = ({ icon: Icon, id, isYellow }) => {
    const { t } = useTranslation()
    return (
        <ScrollReveal>
            <StaggerItem className="flex flex-col gap-5 p-8 md:p-12 rounded-3xl border-2 border-gray-200 bg-white h-full">
                {/* Icon with dynamic background */}
                <div className={`w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm ${isYellow ? 'bg-[#F7E326] text-black' : 'bg-[#4B4B4B] text-white'}`}>
                    <Icon size={30} strokeWidth={2.5} />
                </div>

                <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-black leading-snug tracking-tight">
                        {t(`service${id}_title`)}
                    </h3>

                    <p className="text-brand-charcoal text-base leading-relaxed font-normal">
                        {t(`service${id}_desc`)}
                    </p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 pt-2">
                    {[1, 2, 3, 4].map((num) => (
                        <li key={num} className="flex items-center gap-3 text-sm text-brand-charcoal font-normal tracking-wide">
                            <span className={`w-2 h-2 rounded-full shrink-0 ${isYellow ? 'bg-brand-yellow' : 'bg-brand-charcoal'}`} />
                            {t(`service${id}_p${num}`)}
                        </li>
                    ))}
                </ul>
            </StaggerItem>
        </ScrollReveal>

    );
};

const ServicesGrid = ({ t }) => {
    const services = [
        { id: 1, icon: Truck, isYellow: false },
        { id: 2, icon: Store, isYellow: true },
        { id: 3, icon: Award, isYellow: false },
        { id: 4, icon: FastForward, isYellow: true },
        { id: 5, icon: Map, isYellow: false },
        { id: 6, icon: ShoppingCart, isYellow: true },
        { id: 7, icon: Ship, isYellow: false },
    ];

    return (
        <section className="w-full bg-[#DEE3EB] py-16 px-6">
            <StaggerContainer className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        {...service}
                        t={t}
                    />
                ))}
            </StaggerContainer>
        </section>
    );
};

export default ServicesGrid;