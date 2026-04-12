import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Users, Zap, Tag, Truck, Box, Clock3, ShieldCheck, FileSignature, Headset } from 'lucide-react';

// Sub-component for the Yellow Service Ribbon (from Image 5)
const ServiceRibbonItem = ({ icon: Icon, text }) => (
    <div className="flex flex-col items-center gap-3 text-center w-[130px]">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black text-[#F7E326]">
            <Icon size={22} strokeWidth={2.5} />
        </div>
        <span className="text-[14px] font-semibold text-black leading-tight tracking-tight">
            {text}
        </span>
    </div>
);

const WhyPartnerSection = () => {
    const { t } = useTranslation();

    // Excellence features (alternating colors from Image 3 design)
    const features = [
        { id: 1, icon: MapPin, isYellow: false }, // Nationwide
        { id: 2, icon: Users, isYellow: true },   // Experienced
        { id: 3, icon: Zap, isYellow: false },     // Fast
        { id: 4, icon: Tag, isYellow: true },      // Competitive
    ];

    // Ribbon features (from Image 5)
    const ribbonItems = [
        { icon: Truck, text: t('ribbon_fleet') },
        { icon: Box, text: t('ribbon_bulk') },
        { icon: Clock3, text: t('ribbon_sameday') },
        { icon: ShieldCheck, text: t('ribbon_qc') },
        { icon: FileSignature, text: t('ribbon_doc') },
        { icon: Headset, text: t('ribbon_support') },
    ];

    return (
        <section className="w-full bg-[#E9EDF2]">
            {/* 2. Service Ribbon (from Image 5) - Full width yellow band */}
            <div className="w-full bg-[#F7E326] py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-x-12 gap-y-10">
                    {ribbonItems.map((item, index) => (
                        <ServiceRibbonItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyPartnerSection;