import React from 'react';
import { MapPin, Users, Zap, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from '../../components/ScrollReveal';
import StaggerContainer from '../../components/StaggerContainer';
import StaggerItem from '../../components/StaggerItem';

const FeatureCard = ({ icon: Icon, id, isYellow }) => {
    const { t } = useTranslation()
    return (
        <StaggerItem className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_50px_-12px_rgba(0,0,0,0.15)] transition-shadow duration-300 block h-full">
            {/* Icon Container */}
            <div className={`w-20 h-20 flex items-center justify-center rounded-2xl mb-6 ${isYellow ? 'bg-[#F7E326] text-black' : 'bg-[#4B4B4B] text-white'}`}>
                <Icon size={28} strokeWidth={2} />
            </div>

            {/* Text Content */}
            <h4 className="text-2xl font-bold text-black mb-3 tracking-tight">
                {t(`feat${id}_title`)}
            </h4>

            <p className="text-brand-charcoal text-base  leading-relaxed max-w-[200px]">
                {t(`feat${id}_desc`)}
            </p>
        </StaggerItem>
    );
};

const ExcellenceSection = () => {
    const {t} = useTranslation()
    const features = [
        { id: 1, icon: MapPin, isYellow: false },
        { id: 2, icon: Users, isYellow: true },
        { id: 3, icon: Zap, isYellow: false },
        { id: 4, icon: Tag, isYellow: true },
    ];

    return (
        <section className="w-full bg-[#DEE3EB] py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <ScrollReveal>
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
                            {t("excellence_title")}
                        </h2>
                        <p className="text-brand-charcoal text-xl font-normal">
                            {t("excellence_subtitle")}
                        </p>
                    </div>
                </ScrollReveal>

                {/* Grid */}
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            {...feature}
                            t={t}
                        />
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};

export default ExcellenceSection;