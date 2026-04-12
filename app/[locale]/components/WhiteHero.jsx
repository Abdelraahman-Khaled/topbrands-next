import React from 'react'

const WhiteHero = ({ title, description }) => {
    return (
        <section className="relative pt-24 pb-20 overflow-hidden bg-linear-to-r from-[#DEE3EB] to-[#FFFFFF]">
            <div className="relative max-w-7xl mx-auto px-6 text-start">
                <h1 className="text-5xl md:text-6xl font-bold text-black mb-6" style={{ fontFamily: 'Quicksand' }}>
                    {title}
                </h1>
                <p className="text-lg text-brand-charcoal font-medium" style={{ fontFamily: 'Quicksand' }}>
                    {description}
                </p>
            </div>
        </section>
    )
}

export default WhiteHero