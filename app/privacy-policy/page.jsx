

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section with Image */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Professional%20corporate%20office%20interior%20with%20modern%20minimalist%20design%20featuring%20clean%20white%20walls%20glass%20partitions%20elegant%20furniture%20soft%20natural%20lighting%20representing%20trust%20transparency%20and%20data%20protection%20business%20environment&width=1920&height=600&seq=privacy1&orientation=landscape"
            alt="Privacy Policy"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#14B8A6]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-[#F7E326]/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#14B8A6]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <i className="ri-shield-check-line text-[#14B8A6]"></i>
            <span className="text-white text-sm font-medium" style={{ fontFamily: 'Quicksand' }}>Your Data is Protected</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Quicksand' }}>
            Privacy Policy
          </h1>
          <p className="text-lg text-white/80 font-medium" style={{ fontFamily: 'Quicksand' }}>
            Last Updated: March 2025
          </p>
        </div>
      </section>

      <section className="py-16 bg-white relative">
        {/* Background Decorations */}
        <div className="absolute top-40 right-0 w-64 h-64 bg-[#14B8A6]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-0 w-64 h-64 bg-[#F7E326]/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="space-y-10">
            {/* Section 1 */}
            <div className="bg-gradient-to-br from-[#14B8A6]/5 to-transparent p-8 rounded-2xl border border-[#14B8A6]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-xl flex items-center justify-center">
                  <i className="ri-file-list-3-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  1. Information We Collect
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                B2B Distribution collects information necessary to provide our services and maintain business relationships. This includes:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {['Business contact information (company name, contact person, email, phone number)', 'Business registration details and tax information', 'Order and transaction history', 'Delivery addresses and logistics information', 'Payment and billing information', 'Communication records and correspondence'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <i className="ri-checkbox-circle-fill text-[#14B8A6] mt-1 flex-shrink-0"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 2 */}
            <div className="bg-gradient-to-br from-[#F7E326]/10 to-transparent p-8 rounded-2xl border border-[#F7E326]/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F7E326] to-[#EAB308] rounded-xl flex items-center justify-center">
                  <i className="ri-settings-3-line text-black text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  2. How We Use Your Information
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                We use the collected information for the following purposes:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {['Processing and fulfilling orders and deliveries', 'Managing business relationships and partnerships', 'Providing customer support and responding to inquiries', 'Improving our services and operations', 'Sending business communications and updates', 'Complying with legal and regulatory requirements', 'Analyzing market trends and business performance'].map((item, index) => (
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
                  <i className="ri-share-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  3. Information Sharing and Disclosure
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                B2B Distribution does not sell or rent your business information to third parties. We may share information with:
              </p>
              <ul className="space-y-3">
                {['Al Barengi Group companies for operational purposes', 'Service providers who assist in our operations (logistics, payment processing)', 'Legal authorities when required by law or to protect our rights', 'Business partners with your explicit consent'].map((item, index) => (
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
                  <i className="ri-lock-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  4. Data Security
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. This includes secure servers, encrypted communications, access controls, and regular security assessments.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-gradient-to-br from-[#14B8A6]/5 to-transparent p-8 rounded-2xl border border-[#14B8A6]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-xl flex items-center justify-center">
                  <i className="ri-time-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  5. Data Retention
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                We retain business information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Transaction records are maintained according to applicable tax and commercial laws.
              </p>
            </div>

            {/* Section 6 */}
            <div className="bg-gradient-to-br from-[#F7E326]/10 to-transparent p-8 rounded-2xl border border-[#F7E326]/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F7E326] to-[#EAB308] rounded-xl flex items-center justify-center">
                  <i className="ri-user-settings-line text-black text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  6. Your Rights
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                As a business partner, you have the right to:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {['Access and review your business information', 'Request corrections to inaccurate information', 'Request deletion of information (subject to legal requirements)', 'Opt-out of marketing communications', 'Receive information about how your data is processed'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <i className="ri-checkbox-circle-fill text-[#EAB308] mt-1 flex-shrink-0"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 7 */}
            <div className="bg-gradient-to-br from-[#EC4899]/5 to-transparent p-8 rounded-2xl border border-[#EC4899]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#EC4899] to-[#DB2777] rounded-xl flex items-center justify-center">
                  <i className="ri-pie-chart-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  7. Cookies and Tracking
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                Our website uses cookies and similar technologies to improve user experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings. For more details, please see our Cookie Policy.
              </p>
            </div>

            {/* Section 8 */}
            <div className="bg-gradient-to-br from-[#F59E0B]/5 to-transparent p-8 rounded-2xl border border-[#F59E0B]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-xl flex items-center justify-center">
                  <i className="ri-refresh-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  8. Changes to This Policy
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify business partners of significant changes through email or website announcements.
              </p>
            </div>

            {/* Section 9 - Contact */}
            <div className="bg-gradient-to-br from-black to-[#1a1a1a] p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#14B8A6]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#F7E326]/20 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#F7E326] rounded-xl flex items-center justify-center">
                    <i className="ri-customer-service-2-line text-black text-xl"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Quicksand' }}>
                    9. Contact Us
                  </h2>
                </div>
                <p className="text-white/80 font-medium leading-relaxed mb-6" style={{ fontFamily: 'Quicksand' }}>
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <p className="text-[#F7E326] font-bold mb-2" style={{ fontFamily: 'Quicksand' }}>B2B Distribution</p>
                    <div className="space-y-2">
                      <p className="text-white/80 font-medium flex items-center gap-2" style={{ fontFamily: 'Quicksand' }}>
                        <i className="ri-mail-line text-[#14B8A6]"></i>
                        privacy@b2bdistribution.sy
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
                    <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#14B8A6] to-[#F7E326] text-black font-bold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-[#14B8A6]/30 transition-all duration-300 cursor-pointer whitespace-nowrap" style={{ fontFamily: 'Quicksand' }}>
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
