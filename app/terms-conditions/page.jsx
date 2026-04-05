

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section with Image */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Professional%20legal%20documents%20and%20contracts%20on%20elegant%20wooden%20desk%20with%20pen%20and%20glasses%20soft%20natural%20lighting%20business%20agreement%20corporate%20partnership%20professional%20office%20setting%20clean%20minimalist%20style&width=1920&height=600&seq=terms1&orientation=landscape"
            alt="Terms & Conditions"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#F7E326]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-[#14B8A6]/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#F7E326]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <i className="ri-file-text-line text-[#F7E326]"></i>
            <span className="text-white text-sm font-medium" style={{ fontFamily: 'Quicksand' }}>Business Agreement</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Quicksand' }}>
            Terms & Conditions
          </h1>
          <p className="text-lg text-white/80 font-medium" style={{ fontFamily: 'Quicksand' }}>
            Last Updated: March 2025
          </p>
        </div>
      </section>

      <section className="py-16 bg-white relative">
        {/* Background Decorations */}
        <div className="absolute top-40 right-0 w-64 h-64 bg-[#F7E326]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-0 w-64 h-64 bg-[#14B8A6]/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="space-y-10">
            {/* Section 1 */}
            <div className="bg-gradient-to-br from-[#14B8A6]/5 to-transparent p-8 rounded-2xl border border-[#14B8A6]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-xl flex items-center justify-center">
                  <i className="ri-handshake-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  1. Agreement to Terms
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                By accessing and using B2B Distribution services, you agree to be bound by these Terms and Conditions. These terms apply to all business partners, retailers, distributors, and users of our services. If you do not agree with any part of these terms, you may not use our services.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-gradient-to-br from-[#F7E326]/10 to-transparent p-8 rounded-2xl border border-[#F7E326]/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F7E326] to-[#EAB308] rounded-xl flex items-center justify-center">
                  <i className="ri-building-line text-black text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  2. Business Partnership Requirements
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                To become a business partner with B2B Distribution, you must:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {['Be a legally registered business entity in Syria', 'Provide valid business registration and tax documentation', 'Maintain appropriate licenses for retail or distribution activities', 'Meet our credit and financial requirements', 'Comply with all applicable laws and regulations', 'Maintain professional business standards and ethics'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <i className="ri-checkbox-circle-fill text-[#EAB308] mt-1 flex-shrink-0"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 */}
            <div className="bg-gradient-to-br from-[#FF6B6B]/5 to-transparent p-8 rounded-2xl border border-[#FF6B6B]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B6B] to-[#EF4444] rounded-xl flex items-center justify-center">
                  <i className="ri-truck-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  3. Orders and Delivery
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                Order processing and delivery terms:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {['All orders are subject to product availability and acceptance', 'Minimum order quantities may apply for certain products', 'Delivery schedules are estimates and may vary based on location', 'Partners must inspect deliveries upon receipt and report issues within 24 hours', 'B2B Distribution reserves the right to modify delivery routes', 'Special handling requirements must be communicated in advance'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <i className="ri-checkbox-circle-fill text-[#FF6B6B] mt-1 flex-shrink-0"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4 */}
            <div className="bg-gradient-to-br from-[#8B5CF6]/5 to-transparent p-8 rounded-2xl border border-[#8B5CF6]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-xl flex items-center justify-center">
                  <i className="ri-money-dollar-circle-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  4. Pricing and Payment
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                Payment terms and conditions:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {['Prices are subject to change without prior notice', 'Payment terms are established based on creditworthiness', 'Late payments may incur additional charges', 'All prices are exclusive of applicable taxes unless stated', 'Promotional pricing subject to specific terms', 'Currency fluctuations may affect pricing for imported products'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <i className="ri-checkbox-circle-fill text-[#8B5CF6] mt-1 flex-shrink-0"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 5 */}
            <div className="bg-gradient-to-br from-[#EC4899]/5 to-transparent p-8 rounded-2xl border border-[#EC4899]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#EC4899] to-[#DB2777] rounded-xl flex items-center justify-center">
                  <i className="ri-shield-star-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  5. Product Quality and Returns
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                Quality assurance and return policies:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {['All products meet applicable quality and safety standards', 'Damaged products must be reported within 24 hours', 'Returns accepted only for valid quality issues', 'Expired products due to partner storage not eligible for return', 'Return authorization must be obtained before returning', 'Partners responsible for proper storage and handling'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <i className="ri-checkbox-circle-fill text-[#EC4899] mt-1 flex-shrink-0"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 6 */}
            <div className="bg-gradient-to-br from-[#14B8A6]/5 to-transparent p-8 rounded-2xl border border-[#14B8A6]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-xl flex items-center justify-center">
                  <i className="ri-copyright-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  6. Intellectual Property
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                All brand names, trademarks, logos, and intellectual property associated with the products distributed by B2B Distribution remain the property of their respective owners. Partners may not use these marks without proper authorization. B2B Distribution's own trademarks and business materials are protected and may not be used without written permission.
              </p>
            </div>

            {/* Section 7 */}
            <div className="bg-gradient-to-br from-[#F59E0B]/5 to-transparent p-8 rounded-2xl border border-[#F59E0B]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-xl flex items-center justify-center">
                  <i className="ri-lock-password-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  7. Confidentiality
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                Partners agree to maintain confidentiality of all business information, pricing structures, customer data, and proprietary information shared during the course of the business relationship. This obligation continues even after the termination of the partnership.
              </p>
            </div>

            {/* Section 8 */}
            <div className="bg-gradient-to-br from-[#F7E326]/10 to-transparent p-8 rounded-2xl border border-[#F7E326]/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F7E326] to-[#EAB308] rounded-xl flex items-center justify-center">
                  <i className="ri-error-warning-line text-black text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  8. Limitation of Liability
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                B2B Distribution's liability is limited to the value of the specific transaction in question. We are not liable for indirect, consequential, or incidental damages. Partners are responsible for their own business operations, customer relationships, and compliance with applicable laws.
              </p>
            </div>

            {/* Section 9 */}
            <div className="bg-gradient-to-br from-[#FF6B6B]/5 to-transparent p-8 rounded-2xl border border-[#FF6B6B]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B6B] to-[#EF4444] rounded-xl flex items-center justify-center">
                  <i className="ri-close-circle-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  9. Termination
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                Either party may terminate the business relationship with appropriate notice as specified in partnership agreements. B2B Distribution reserves the right to immediately terminate partnerships in cases of breach of terms, non-payment, or unethical business practices. Outstanding obligations must be settled upon termination.
              </p>
            </div>

            {/* Section 10 */}
            <div className="bg-gradient-to-br from-[#8B5CF6]/5 to-transparent p-8 rounded-2xl border border-[#8B5CF6]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-xl flex items-center justify-center">
                  <i className="ri-scales-3-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  10. Governing Law
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                These Terms and Conditions are governed by the laws of the Syrian Arab Republic. Any disputes arising from these terms or business relationships shall be resolved through negotiation or, if necessary, through the appropriate courts in Damascus, Syria.
              </p>
            </div>

            {/* Section 11 */}
            <div className="bg-gradient-to-br from-[#14B8A6]/5 to-transparent p-8 rounded-2xl border border-[#14B8A6]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-xl flex items-center justify-center">
                  <i className="ri-edit-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  11. Changes to Terms
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                B2B Distribution reserves the right to modify these Terms and Conditions at any time. Partners will be notified of significant changes through email or official communications. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </div>

            {/* Section 12 - Contact */}
            <div className="bg-gradient-to-br from-black to-[#1a1a1a] p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F7E326]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#14B8A6]/20 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F7E326] to-[#14B8A6] rounded-xl flex items-center justify-center">
                    <i className="ri-question-answer-line text-black text-xl"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Quicksand' }}>
                    12. Contact Information
                  </h2>
                </div>
                <p className="text-white/80 font-medium leading-relaxed mb-6" style={{ fontFamily: 'Quicksand' }}>
                  For questions about these Terms and Conditions, please contact:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <p className="text-[#F7E326] font-bold mb-2" style={{ fontFamily: 'Quicksand' }}>B2B Distribution</p>
                    <div className="space-y-2">
                      <p className="text-white/80 font-medium flex items-center gap-2" style={{ fontFamily: 'Quicksand' }}>
                        <i className="ri-mail-line text-[#14B8A6]"></i>
                        legal@b2bdistribution.sy
                      </p>
                      <p className="text-white/80 font-medium flex items-center gap-2" style={{ fontFamily: 'Quicksand' }}>
                        <i className="ri-phone-line text-[#14B8A6]"></i>
                        +963 11 123 4567
                      </p>
                      <p className="text-white/80 font-medium flex items-center gap-2" style={{ fontFamily: 'Quicksand' }}>
                        <i className="ri-map-pin-line text-[#14B8A6]"></i>
                        Damascus, Syria
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-center justify-center">
                    <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F7E326] to-[#14B8A6] text-black font-bold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-[#F7E326]/30 transition-all duration-300 cursor-pointer whitespace-nowrap" style={{ fontFamily: 'Quicksand' }}>
                      <i className="ri-send-plane-line"></i>
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
