

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section with Image */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Modern%20digital%20technology%20concept%20with%20abstract%20data%20visualization%20soft%20glowing%20particles%20and%20network%20connections%20representing%20website%20cookies%20and%20user%20tracking%20clean%20minimalist%20tech%20background%20professional%20corporate%20style&width=1920&height=600&seq=cookie1&orientation=landscape"
            alt="Cookie Policy"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#EC4899]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-[#F7E326]/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#EC4899]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <i className="ri-cookie-line text-[#EC4899]"></i>
            <span className="text-white text-sm font-medium" style={{ fontFamily: 'Quicksand' }}>Website Cookies</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Quicksand' }}>
            Cookie Policy
          </h1>
          <p className="text-lg text-white/80 font-medium" style={{ fontFamily: 'Quicksand' }}>
            Last Updated: March 2025
          </p>
        </div>
      </section>

      <section className="py-16 bg-white relative">
        {/* Background Decorations */}
        <div className="absolute top-40 right-0 w-64 h-64 bg-[#EC4899]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-0 w-64 h-64 bg-[#F7E326]/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="space-y-10">
            {/* What Are Cookies */}
            <div className="bg-gradient-to-br from-[#14B8A6]/5 to-transparent p-8 rounded-2xl border border-[#14B8A6]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-xl flex items-center justify-center">
                  <i className="ri-question-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  What Are Cookies?
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies help us understand how you use our website and improve your browsing experience.
              </p>
            </div>

            {/* How We Use Cookies */}
            <div className="bg-gradient-to-br from-[#F7E326]/10 to-transparent p-8 rounded-2xl border border-[#F7E326]/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F7E326] to-[#EAB308] rounded-xl flex items-center justify-center">
                  <i className="ri-settings-4-line text-black text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  How We Use Cookies
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                B2B Distribution uses cookies for the following purposes:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {['To remember your preferences and settings', 'To understand how you use our website', 'To analyze website traffic and user behavior', 'To provide personalized content and recommendations', 'To maintain security and prevent fraud', 'To enable essential website features and services'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <i className="ri-checkbox-circle-fill text-[#EAB308] mt-1 flex-shrink-0"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Types of Cookies */}
            <div className="bg-gradient-to-br from-[#EC4899]/5 to-transparent p-8 rounded-2xl border border-[#EC4899]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#EC4899] to-[#DB2777] rounded-xl flex items-center justify-center">
                  <i className="ri-stack-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  Types of Cookies We Use
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-[#14B8A6]/10 to-[#14B8A6]/5 p-5 rounded-xl border border-[#14B8A6]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#14B8A6] rounded-lg flex items-center justify-center">
                      <i className="ri-shield-check-line text-white"></i>
                    </div>
                    <h3 className="text-lg font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                      Essential Cookies
                    </h3>
                  </div>
                  <p className="text-[#4B4F54] font-medium text-sm leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                    Necessary for the website to function properly. They enable basic features like page navigation and access to secure areas.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#F7E326]/10 to-[#F7E326]/5 p-5 rounded-xl border border-[#F7E326]/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#F7E326] rounded-lg flex items-center justify-center">
                      <i className="ri-speed-line text-black"></i>
                    </div>
                    <h3 className="text-lg font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                      Performance Cookies
                    </h3>
                  </div>
                  <p className="text-[#4B4F54] font-medium text-sm leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                    Collect information about how visitors use our website, helping us improve performance and user experience.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#8B5CF6]/10 to-[#8B5CF6]/5 p-5 rounded-xl border border-[#8B5CF6]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#8B5CF6] rounded-lg flex items-center justify-center">
                      <i className="ri-magic-line text-white"></i>
                    </div>
                    <h3 className="text-lg font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                      Functionality Cookies
                    </h3>
                  </div>
                  <p className="text-[#4B4F54] font-medium text-sm leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                    Allow the website to remember your choices and provide enhanced, personalized features.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#FF6B6B]/5 p-5 rounded-xl border border-[#FF6B6B]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#FF6B6B] rounded-lg flex items-center justify-center">
                      <i className="ri-bar-chart-box-line text-white"></i>
                    </div>
                    <h3 className="text-lg font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                      Analytics Cookies
                    </h3>
                  </div>
                  <p className="text-[#4B4F54] font-medium text-sm leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                    Help us understand how visitors interact with our website to improve our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="bg-gradient-to-br from-[#F59E0B]/5 to-transparent p-8 rounded-2xl border border-[#F59E0B]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-xl flex items-center justify-center">
                  <i className="ri-share-forward-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  Third-Party Cookies
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                In addition to our own cookies, we may use third-party cookies from trusted partners:
              </p>
              <ul className="space-y-3">
                {['Google Analytics for website traffic analysis', 'Social media platforms for content sharing features', 'Marketing partners for targeted advertising (with your consent)', 'Service providers that help us operate our website'].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <i className="ri-checkbox-circle-fill text-[#F59E0B] mt-1 flex-shrink-0"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Managing Preferences */}
            <div className="bg-gradient-to-br from-[#14B8A6]/5 to-transparent p-8 rounded-2xl border border-[#14B8A6]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-xl flex items-center justify-center">
                  <i className="ri-toggle-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  Managing Your Cookie Preferences
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences through:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                  <i className="ri-checkbox-circle-fill text-[#14B8A6] mt-1 flex-shrink-0"></i>
                  <span><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings.</span>
                </li>
                <li className="flex items-start gap-2 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                  <i className="ri-checkbox-circle-fill text-[#14B8A6] mt-1 flex-shrink-0"></i>
                  <span><strong>Cookie Banner:</strong> Choose which types of cookies to accept through our consent banner.</span>
                </li>
                <li className="flex items-start gap-2 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                  <i className="ri-checkbox-circle-fill text-[#14B8A6] mt-1 flex-shrink-0"></i>
                  <span><strong>Opt-Out Tools:</strong> Opt out of third-party cookies through industry opt-out programs.</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-[#14B8A6]/10 rounded-xl border border-[#14B8A6]/20">
                <p className="text-[#4B4F54] font-medium text-sm" style={{ fontFamily: 'Quicksand' }}>
                  <i className="ri-information-line text-[#14B8A6] mr-2"></i>
                  Please note that blocking or deleting cookies may impact your experience on our website and limit certain features.
                </p>
              </div>
            </div>

            {/* Browser-Specific Management */}
            <div className="bg-gradient-to-br from-[#8B5CF6]/5 to-transparent p-8 rounded-2xl border border-[#8B5CF6]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-xl flex items-center justify-center">
                  <i className="ri-global-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  Browser-Specific Cookie Management
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                Here's how to manage cookies in popular browsers:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { browser: 'Google Chrome', path: 'Settings → Privacy and security → Cookies', icon: 'ri-chrome-line', color: '#4285F4' },
                  { browser: 'Mozilla Firefox', path: 'Options → Privacy & Security → Cookies', icon: 'ri-firefox-line', color: '#FF7139' },
                  { browser: 'Safari', path: 'Preferences → Privacy → Manage Website Data', icon: 'ri-safari-line', color: '#006CFF' },
                  { browser: 'Microsoft Edge', path: 'Settings → Privacy → Cookies and site permissions', icon: 'ri-edge-line', color: '#0078D7' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100">
                    <i className={`${item.icon} text-2xl`} style={{ color: item.color }}></i>
                    <div>
                      <p className="font-bold text-[#000000] text-sm" style={{ fontFamily: 'Quicksand' }}>{item.browser}</p>
                      <p className="text-[#4B4F54] text-xs" style={{ fontFamily: 'Quicksand' }}>{item.path}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cookie Duration */}
            <div className="bg-gradient-to-br from-[#FF6B6B]/5 to-transparent p-8 rounded-2xl border border-[#FF6B6B]/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B6B] to-[#EF4444] rounded-xl flex items-center justify-center">
                  <i className="ri-time-line text-white text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  Cookie Duration
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                Cookies may be either "session" cookies or "persistent" cookies. Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device until they expire or you delete them. The duration of persistent cookies varies depending on their purpose.
              </p>
            </div>

            {/* Updates */}
            <div className="bg-gradient-to-br from-[#F7E326]/10 to-transparent p-8 rounded-2xl border border-[#F7E326]/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F7E326] to-[#EAB308] rounded-xl flex items-center justify-center">
                  <i className="ri-refresh-line text-black text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-[#000000]" style={{ fontFamily: 'Quicksand' }}>
                  Updates to This Policy
                </h2>
              </div>
              <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. We encourage you to review this policy periodically to stay informed about how we use cookies.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-black to-[#1a1a1a] p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#EC4899]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#F7E326]/20 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#EC4899] to-[#F7E326] rounded-xl flex items-center justify-center">
                    <i className="ri-customer-service-2-line text-black text-xl"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Quicksand' }}>
                    Contact Us
                  </h2>
                </div>
                <p className="text-white/80 font-medium leading-relaxed mb-6" style={{ fontFamily: 'Quicksand' }}>
                  If you have questions about our use of cookies, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <p className="text-[#F7E326] font-bold mb-2" style={{ fontFamily: 'Quicksand' }}>B2B Distribution</p>
                    <div className="space-y-2">
                      <p className="text-white/80 font-medium flex items-center gap-2" style={{ fontFamily: 'Quicksand' }}>
                        <i className="ri-mail-line text-[#EC4899]"></i>
                        privacy@b2bdistribution.sy
                      </p>
                      <p className="text-white/80 font-medium flex items-center gap-2" style={{ fontFamily: 'Quicksand' }}>
                        <i className="ri-phone-line text-[#EC4899]"></i>
                        +963 11 123 4567
                      </p>
                      <p className="text-white/80 font-medium flex items-center gap-2" style={{ fontFamily: 'Quicksand' }}>
                        <i className="ri-map-pin-line text-[#EC4899]"></i>
                        Damascus, Syria
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-center justify-center">
                    <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EC4899] to-[#F7E326] text-black font-bold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-[#EC4899]/30 transition-all duration-300 cursor-pointer whitespace-nowrap" style={{ fontFamily: 'Quicksand' }}>
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
