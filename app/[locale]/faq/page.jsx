'use client'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import LocalizedLink from '../components/LocalizedLink';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const accordionVariants = {
  open: { 
    height: "auto", 
    opacity: 1, 
    marginTop: 16,
    transition: { height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.3, delay: 0.1 } }
  },
  closed: { 
    height: 0, 
    opacity: 0, 
    marginTop: 0,
    transition: { height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.2 } }
  }
};

export default function FAQ() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openId, setOpenId] = useState(null);

  const faqData = [
    { id: 1, cat: 'Coverage' }, { id: 2, cat: 'Products' }, { id: 3, cat: 'Partnership' },
    { id: 4, cat: 'Orders' }, { id: 5, cat: 'Delivery' }, { id: 6, cat: 'Payment' },
    { id: 7, cat: 'Quality' }, { id: 8, cat: 'Returns' }, { id: 9, cat: 'Services' },
    { id: 10, cat: 'Orders' }, { id: 11, cat: 'Quality' }, { id: 12, cat: 'Returns' },
    { id: 13, cat: 'Partnership' }, { id: 14, cat: 'Company' }, { id: 15, cat: 'Support' }
  ];

  const categories = ['All', 'Coverage', 'Products', 'Partnership', 'Orders', 'Delivery', 'Payment', 'Quality', 'Returns', 'Services', 'Company', 'Support'];

  const filteredFAQs = selectedCategory === 'All'
    ? faqData
    : faqData.filter(faq => faq.cat === selectedCategory);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20customer%20support%20help%20desk%20modern%20office%20environment&width=1920&height=600&seq=faq-hero-main&orientation=landscape"
            alt="FAQ"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#DEE3EB] to-[#FFFFFF]"></div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative max-w-4xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            {t('faq_hero_title')}
          </h1>
          <p className="text-lg lg:text-xl text-brand-charcoal font-medium">
            {t('faq_hero_subtitle')}
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <ScrollReveal>
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-wrap gap-3 justify-center"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 cursor-pointer rounded-full font-bold transition-all whitespace-nowrap ${selectedCategory === category
                    ? 'bg-[#F7E326] text-black shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-[#F7E326] hover:text-black'
                    }`}
                >
                  {category === 'All' ? t('faq_all') : category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredFAQs.map((faq) => (
                <motion.div
                  key={faq.id}
                  layout
                  variants={staggerItem}
                  className={`bg-white border-2 rounded-xl overflow-hidden transition-all ${openId === faq.id ? 'border-[#F7E326] shadow-lg' : 'border-gray-100 hover:border-gray-200 shadow-sm'}`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left transition-all"
                  >
                    <div className="flex-1">
                      <span className="inline-block bg-[#F7E326] text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
                        {faq.cat}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900">
                        {t(`faq_q${faq.id}`)}
                      </h3>
                    </div>
                    <motion.div 
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      className="ml-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 flex-shrink-0"
                    >
                      <i className={`ri-${openId === faq.id ? 'subtract' : 'add'}-line text-xl cursor-pointer ${openId === faq.id ? 'text-black' : 'text-brand-yellow'}`}></i>
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openId === faq.id && (
                      <motion.div 
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={accordionVariants}
                        className="px-6 pb-6 border-t border-gray-50 overflow-hidden"
                      >
                        <p className="text-gray-600 font-medium leading-relaxed">
                          {t(`faq_a${faq.id}`)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <ScrollReveal>
        <section className="py-20 bg-[#DEE3EB]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto px-6 text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('faq_still_questions')}
            </h2>
            <p className="text-lg text-brand-charcoal mb-10 font-medium">
              {t('faq_team_help')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <LocalizedLink 
                  href="/contact" 
                  className="bg-[#F7E326] text-black px-10 py-4 rounded-lg font-bold hover:shadow-lg transition-all text-center duration-300 block"
                >
                  {t('faq_contact_btn')}
                </LocalizedLink>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <LocalizedLink 
                  href="/become-a-partner" 
                  className="bg-black text-white px-10 py-4 rounded-lg font-bold hover:shadow-lg transition-all text-center duration-300 block"
                >
                  {t('faq_partner_btn')}
                </LocalizedLink>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </ScrollReveal>
    </div>
  );
}