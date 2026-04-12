import React from 'react';
import { useTranslation } from 'react-i18next';
import StaggerContainer from '../../components/StaggerContainer';
import StaggerItem from '../../components/StaggerItem';

const AboutMission = () => {
    const { t } = useTranslation();
    return (
        <section className="py-12 md:py-20 bg-brand-paleblue">
            <div className="max-w-7xl mx-auto px-8 ">
                <StaggerContainer className="grid lg:grid-cols-2 gap-12">
                    <StaggerItem className="bg-white rounded-3xl p-6 md:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="w-16 h-16 flex items-center justify-center bg-brand-yellow rounded-2xl mb-6">
                            <i className="ri-eye-line text-3xl text-brand-jet"></i>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-jet mb-6">
                            {t("vision")}
                        </h2>
                        <p className="text-lg md:text-xl text-brand-charcoal leading-relaxed font-medium">
                            {t("vision_desc1")}
                            <strong className="font-bold text-brand-jet">
                                {t("vision_desc2")}
                            </strong>
                            {t("vision_desc3")}
                        </p>
                    </StaggerItem>

                    <StaggerItem className="bg-white rounded-3xl p-6 md:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="w-16 h-16 flex items-center justify-center bg-brand-charcoal rounded-2xl mb-6">
                            <i className="ri-compass-3-line text-3xl text-brand-yellow"></i>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-jet mb-6">
                            {t("mission")}
                        </h2>
                        <p className="text-lg md:text-xl text-brand-charcoal leading-relaxed font-medium">
                            {t("mission_desc1")}
                            <strong className="font-bold text-brand-jet">
                                {t("mission_desc2")}
                            </strong>
                            {t("mission_desc3")}
                        </p>
                    </StaggerItem>
                </StaggerContainer>
            </div>
        </section>
    )
}

export default AboutMission