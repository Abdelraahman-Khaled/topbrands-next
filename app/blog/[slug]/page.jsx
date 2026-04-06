
'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Subscribe from '../../components/Subscribe';
import { useTranslation } from 'react-i18next';
const blogPosts = [
  {
    id: 1,
    title: 'Syrian FMCG Market Trends 2025: Growth Opportunities',
    excerpt: 'Explore the latest trends shaping the Syrian FMCG market, from consumer preferences to distribution innovations that are driving growth across the region.',
    category: 'Market Insights',
    date: 'March 15, 2025',
    readTime: '5 min read',
    image: 'https://readdy.ai/api/search-image?query=modern%20syrian%20market%20supermarket%20shelves%20with%20colorful%20FMCG%20products%20professional%20retail%20environment%20bright%20lighting%20organized%20display%20wide%20angle%20view&width=1200&height=600&seq=article-hero-001&orientation=landscape',
    author: 'Market Research Team',
    authorImage: 'https://readdy.ai/api/search-image?query=professional%20business%20analyst%20middle%20eastern%20person%20in%20modern%20office%20wearing%20business%20casual%20attire%20confident%20smile%20professional%20headshot%20bright%20lighting&width=200&height=200&seq=author1&orientation=squarish',
    content: `
      <p>The Syrian FMCG market is experiencing a remarkable transformation in 2025, driven by evolving consumer preferences, technological advancements, and innovative distribution strategies. As one of the leading distributors in the region, we've observed significant shifts that present unprecedented growth opportunities for businesses operating in this dynamic sector.</p>

      <h2>Understanding the Current Market Landscape</h2>
      <p>The Fast-Moving Consumer Goods sector in Syria has shown resilience and adaptability despite various challenges. Recent market analysis indicates a steady growth trajectory, with consumer spending on essential goods increasing by approximately 15% year-over-year. This growth is particularly pronounced in urban centers where modern retail formats are gaining traction.</p>

      <p>Key factors driving this growth include improved supply chain infrastructure, increased consumer purchasing power in certain segments, and a growing preference for branded products. The market is witnessing a shift from traditional trade to modern retail channels, with supermarkets and hypermarkets capturing an increasing share of consumer spending.</p>

      <h2>Emerging Consumer Trends</h2>
      <p>Today's Syrian consumers are more informed and discerning than ever before. They seek quality, value, and convenience in their purchasing decisions. Several notable trends are shaping consumer behavior:</p>

      <ul>
        <li><strong>Health and Wellness Focus:</strong> There's a growing demand for healthier product alternatives, including organic options, low-sugar beverages, and nutritious snacks.</li>
        <li><strong>Brand Loyalty:</strong> Established international and regional brands continue to command premium positioning.</li>
        <li><strong>Convenience Shopping:</strong> The rise of modern retail formats reflects consumers' desire for one-stop shopping experiences.</li>
        <li><strong>Value Consciousness:</strong> While quality remains important, price sensitivity persists.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The Syrian FMCG market in 2025 presents a compelling growth story characterized by evolving consumer preferences, improving infrastructure, and expanding distribution capabilities.</p>
    `,
    tags: ['FMCG', 'Market Trends', 'Syria', 'Distribution', 'Consumer Insights', 'Growth Strategy']
  },
  {
    id: 2,
    title: 'Seasonal Consumption Patterns in Syria: A Complete Guide',
    excerpt: 'Understanding seasonal demand fluctuations is crucial for effective inventory management. Learn how Syrian consumers shop throughout the year.',
    category: 'Consumer Behavior',
    date: 'March 10, 2025',
    readTime: '7 min read',
    image: 'https://readdy.ai/api/search-image?query=seasonal%20shopping%20calendar%20with%20fresh%20products%20fruits%20vegetables%20beverages%20snacks%20arranged%20by%20season%20colorful%20display%20professional%20photography%20wide%20angle&width=1200&height=600&seq=article-hero-002&orientation=landscape',
    author: 'Consumer Insights Team',
    authorImage: 'https://readdy.ai/api/search-image?query=professional%20marketing%20analyst%20woman%20in%20modern%20office%20wearing%20business%20attire%20confident%20smile%20professional%20headshot%20bright%20lighting&width=200&height=200&seq=author2&orientation=squarish',
    content: `
      <p>Understanding seasonal consumption patterns is essential for any business operating in the Syrian FMCG market. Consumer behavior shifts dramatically throughout the year, influenced by weather, holidays, and cultural events.</p>

      <h2>Spring Season (March - May)</h2>
      <p>Spring marks a transition period where consumers begin shifting from winter comfort foods to lighter options. Fresh produce consumption increases significantly, and outdoor activities drive demand for portable snacks and beverages.</p>

      <h2>Summer Season (June - August)</h2>
      <p>The hot summer months see a dramatic spike in beverage consumption, particularly water, juices, and soft drinks. Ice cream and frozen treats become essential categories, while demand for hot beverages decreases.</p>

      <h2>Autumn Season (September - November)</h2>
      <p>Back-to-school season drives demand for snacks, breakfast items, and lunch box essentials. Families stock up on pantry staples as they prepare for the cooler months ahead.</p>

      <h2>Winter Season (December - February)</h2>
      <p>Winter brings increased demand for hot beverages, comfort foods, and holiday-related products. The festive season creates opportunities for gift packaging and premium product offerings.</p>

      <h2>Key Takeaways</h2>
      <ul>
        <li><strong>Plan Ahead:</strong> Stock inventory 4-6 weeks before seasonal peaks</li>
        <li><strong>Monitor Trends:</strong> Track year-over-year patterns for accurate forecasting</li>
        <li><strong>Adapt Quickly:</strong> Be prepared to adjust based on weather variations</li>
      </ul>
    `,
    tags: ['Consumer Behavior', 'Seasonal Trends', 'Inventory Management', 'Syria', 'FMCG']
  },
  {
    id: 3,
    title: 'The Rise of Modern Trade in Syrian Cities',
    excerpt: 'Modern retail formats are transforming the Syrian market. Discover how supermarkets and hypermarkets are changing consumer shopping habits.',
    category: 'Retail Trends',
    date: 'March 5, 2025',
    readTime: '6 min read',
    image: 'https://readdy.ai/api/search-image?query=modern%20supermarket%20interior%20in%20middle%20eastern%20city%20wide%20aisles%20bright%20lighting%20shoppers%20with%20carts%20professional%20retail%20space%20clean%20organized%20wide%20angle&width=1200&height=600&seq=article-hero-003&orientation=landscape',
    author: 'Retail Strategy Team',
    authorImage: 'https://readdy.ai/api/search-image?query=professional%20retail%20manager%20middle%20eastern%20man%20in%20modern%20store%20wearing%20business%20casual%20confident%20smile%20professional%20headshot&width=200&height=200&seq=author3&orientation=squarish',
    content: `
      <p>The retail landscape in Syria is undergoing a significant transformation as modern trade formats continue to expand across major cities. This shift is reshaping how consumers shop and how brands reach their target audiences.</p>

      <h2>The Growth of Supermarkets</h2>
      <p>Supermarkets have become increasingly popular among Syrian consumers, offering a wide variety of products under one roof. The convenience of organized aisles, clear pricing, and air-conditioned environments appeals to modern shoppers.</p>

      <h2>Hypermarket Expansion</h2>
      <p>Larger format stores are emerging in suburban areas, offering even greater product selection and competitive pricing. These destinations attract families looking for weekly shopping trips.</p>

      <h2>Impact on Traditional Trade</h2>
      <p>While modern trade grows, traditional neighborhood stores maintain their importance, particularly for daily essentials and convenience purchases. The key is finding the right balance between both channels.</p>

      <h2>Opportunities for Brands</h2>
      <ul>
        <li><strong>Shelf Visibility:</strong> Modern trade offers better merchandising opportunities</li>
        <li><strong>Promotions:</strong> In-store promotions and sampling become more effective</li>
        <li><strong>Data Insights:</strong> Better tracking of sales and consumer preferences</li>
      </ul>
    `,
    tags: ['Retail Trends', 'Modern Trade', 'Supermarkets', 'Syria', 'Consumer Shopping']
  },
  {
    id: 4,
    title: 'Distribution Excellence: Best Practices for Syrian Market',
    excerpt: 'Learn the key strategies for successful FMCG distribution in Syria, from route optimization to maintaining product quality across the supply chain.',
    category: 'Distribution',
    date: 'February 28, 2025',
    readTime: '8 min read',
    image: 'https://readdy.ai/api/search-image?query=logistics%20trucks%20fleet%20on%20roads%20professional%20distribution%20vehicles%20organized%20warehouse%20loading%20dock%20efficient%20operations%20wide%20angle%20view&width=1200&height=600&seq=article-hero-004&orientation=landscape',
    author: 'Operations Team',
    authorImage: 'https://readdy.ai/api/search-image?query=professional%20logistics%20manager%20in%20warehouse%20wearing%20safety%20vest%20confident%20smile%20professional%20headshot%20bright%20lighting&width=200&height=200&seq=author4&orientation=squarish',
    content: `
      <p>Effective distribution is the backbone of any successful FMCG operation. In the Syrian market, where infrastructure and logistics present unique challenges, excellence in distribution can be a significant competitive advantage.</p>

      <h2>Route Optimization</h2>
      <p>Efficient route planning reduces costs and improves delivery times. Modern GPS tracking and route optimization software help maximize the number of deliveries per trip while minimizing fuel consumption.</p>

      <h2>Inventory Management</h2>
      <p>Maintaining optimal inventory levels across the distribution network ensures product availability without excessive carrying costs. Real-time inventory tracking systems are essential for this balance.</p>

      <h2>Quality Control</h2>
      <p>Maintaining product quality throughout the supply chain requires proper handling, storage conditions, and regular quality checks. This is particularly important for temperature-sensitive products.</p>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Technology Investment:</strong> Implement modern tracking and management systems</li>
        <li><strong>Staff Training:</strong> Regular training on handling and safety procedures</li>
        <li><strong>Partner Relationships:</strong> Build strong relationships with retailers</li>
        <li><strong>Continuous Improvement:</strong> Regularly review and optimize processes</li>
      </ul>
    `,
    tags: ['Distribution', 'Logistics', 'Supply Chain', 'Best Practices', 'Syria']
  },
  {
    id: 5,
    title: 'Snacks & Confectionery: The Fastest Growing Category',
    excerpt: 'The snacks segment is experiencing unprecedented growth in Syria. Explore the brands and products driving this expansion.',
    category: 'Product Categories',
    date: 'February 20, 2025',
    readTime: '5 min read',
    image: 'https://readdy.ai/api/search-image?query=colorful%20snacks%20and%20confectionery%20products%20chips%20chocolates%20candies%20arranged%20attractively%20on%20retail%20shelf%20vibrant%20packaging%20professional%20display%20wide%20angle&width=1200&height=600&seq=article-hero-005&orientation=landscape',
    author: 'Category Management Team',
    authorImage: 'https://readdy.ai/api/search-image?query=professional%20category%20manager%20woman%20in%20office%20setting%20confident%20smile%20professional%20headshot%20bright%20lighting&width=200&height=200&seq=author5&orientation=squarish',
    content: `
      <p>The snacks and confectionery category has emerged as one of the fastest-growing segments in the Syrian FMCG market. Driven by changing lifestyles and increasing demand for convenient food options, this category presents significant opportunities.</p>

      <h2>Market Growth Drivers</h2>
      <p>Several factors contribute to the robust growth of the snacks category, including urbanization, younger demographics, and the influence of global food trends.</p>

      <h2>Popular Product Segments</h2>
      <ul>
        <li><strong>Chips & Crisps:</strong> The largest segment with diverse flavor offerings</li>
        <li><strong>Chocolates:</strong> Premium and everyday options both performing well</li>
        <li><strong>Biscuits:</strong> A staple category with consistent demand</li>
        <li><strong>Nuts & Seeds:</strong> Growing health-conscious segment</li>
      </ul>

      <h2>Consumer Preferences</h2>
      <p>Syrian consumers show strong preferences for familiar flavors while remaining open to new taste experiences. Local and regional brands compete effectively with international players.</p>
    `,
    tags: ['Snacks', 'Confectionery', 'Product Categories', 'Market Growth', 'Consumer Trends']
  },
  {
    id: 6,
    title: 'Cold Chain Management: Ensuring Dairy Product Quality',
    excerpt: 'Temperature-controlled logistics are essential for dairy products. Learn how B2B maintains product integrity from warehouse to shelf.',
    category: 'Logistics',
    date: 'February 15, 2025',
    readTime: '6 min read',
    image: 'https://readdy.ai/api/search-image?query=refrigerated%20warehouse%20with%20dairy%20products%20temperature%20controlled%20storage%20professional%20cold%20chain%20facility%20organized%20shelving%20modern%20equipment%20wide%20angle&width=1200&height=600&seq=article-hero-006&orientation=landscape',
    author: 'Logistics Team',
    authorImage: 'https://readdy.ai/api/search-image?query=professional%20cold%20chain%20specialist%20in%20refrigerated%20warehouse%20wearing%20warm%20jacket%20confident%20smile%20professional%20headshot&width=200&height=200&seq=author6&orientation=squarish',
    content: `
      <p>Cold chain management is critical for maintaining the quality and safety of dairy products. In Syria's climate, proper temperature control throughout the distribution process is essential.</p>

      <h2>Temperature Requirements</h2>
      <p>Different dairy products require specific temperature ranges. Fresh milk and yogurt typically need 2-4°C, while cheese products may have slightly different requirements.</p>

      <h2>Infrastructure Investment</h2>
      <p>Maintaining an effective cold chain requires significant investment in refrigerated warehouses, temperature-controlled vehicles, and monitoring systems.</p>

      <h2>Quality Assurance</h2>
      <ul>
        <li><strong>Temperature Monitoring:</strong> Continuous tracking throughout the supply chain</li>
        <li><strong>Regular Audits:</strong> Frequent checks of storage and transport conditions</li>
        <li><strong>Staff Training:</strong> Proper handling procedures for cold products</li>
        <li><strong>Quick Response:</strong> Protocols for addressing temperature deviations</li>
      </ul>
    `,
    tags: ['Cold Chain', 'Dairy Products', 'Logistics', 'Quality Control', 'Temperature Management']
  },
  {
    id: 7,
    title: 'Building Strong Retail Partnerships in Syria',
    excerpt: 'Successful partnerships are built on trust and mutual growth. Discover how B2B supports retailers across Syria with merchandising excellence.',
    category: 'Partnerships',
    date: 'February 10, 2025',
    readTime: '7 min read',
    image: 'https://readdy.ai/api/search-image?query=business%20handshake%20partnership%20meeting%20in%20modern%20office%20professional%20team%20collaboration%20middle%20eastern%20business%20setting%20bright%20environment%20wide%20angle&width=1200&height=600&seq=article-hero-007&orientation=landscape',
    author: 'Partnership Team',
    authorImage: 'https://readdy.ai/api/search-image?query=professional%20business%20development%20manager%20middle%20eastern%20man%20in%20suit%20confident%20smile%20professional%20headshot%20bright%20lighting&width=200&height=200&seq=author7&orientation=squarish',
    content: `
      <p>Strong retail partnerships are the foundation of successful FMCG distribution. Building and maintaining these relationships requires consistent effort, mutual respect, and a focus on shared success.</p>

      <h2>Partnership Principles</h2>
      <p>Effective partnerships are built on transparency, reliability, and a commitment to helping retailers succeed. This means understanding their challenges and providing solutions.</p>

      <h2>Support Services</h2>
      <ul>
        <li><strong>Merchandising Support:</strong> Help with product placement and display</li>
        <li><strong>Training Programs:</strong> Product knowledge and sales techniques</li>
        <li><strong>Marketing Materials:</strong> Point-of-sale materials and promotions</li>
        <li><strong>Business Insights:</strong> Market data and trend information</li>
      </ul>

      <h2>Long-term Value</h2>
      <p>The best partnerships focus on long-term value creation rather than short-term gains. This approach builds trust and creates sustainable business relationships.</p>
    `,
    tags: ['Partnerships', 'Retail', 'Business Development', 'Merchandising', 'Syria']
  },
  {
    id: 8,
    title: 'E-commerce Impact on Traditional FMCG Distribution',
    excerpt: 'Digital transformation is reshaping how consumers buy FMCG products. Learn how B2B is adapting to the omnichannel reality.',
    category: 'Digital Trends',
    date: 'February 5, 2025',
    readTime: '6 min read',
    image: 'https://readdy.ai/api/search-image?query=online%20shopping%20on%20mobile%20phone%20with%20grocery%20products%20digital%20commerce%20modern%20technology%20ecommerce%20app%20interface%20professional%20photography%20wide%20angle&width=1200&height=600&seq=article-hero-008&orientation=landscape',
    author: 'Digital Innovation Team',
    authorImage: 'https://readdy.ai/api/search-image?query=professional%20digital%20marketing%20specialist%20young%20professional%20in%20modern%20tech%20office%20confident%20smile%20professional%20headshot&width=200&height=200&seq=author8&orientation=squarish',
    content: `
      <p>The rise of e-commerce is transforming the FMCG landscape globally, and Syria is beginning to see the early stages of this digital shift. Understanding these changes is crucial for future success.</p>

      <h2>Current State of E-commerce</h2>
      <p>While still in early stages, online grocery shopping is gaining traction in major Syrian cities. Consumers appreciate the convenience of home delivery and the ability to compare prices easily.</p>

      <h2>Omnichannel Strategy</h2>
      <p>The future lies in seamlessly integrating online and offline channels. Consumers expect to shop however they prefer, whether in-store, online, or a combination of both.</p>

      <h2>Preparing for the Future</h2>
      <ul>
        <li><strong>Digital Presence:</strong> Building online visibility and capabilities</li>
        <li><strong>Data Analytics:</strong> Understanding online consumer behavior</li>
        <li><strong>Logistics Adaptation:</strong> Preparing for direct-to-consumer delivery</li>
        <li><strong>Technology Investment:</strong> Systems to support omnichannel operations</li>
      </ul>
    `,
    tags: ['E-commerce', 'Digital Transformation', 'Omnichannel', 'Technology', 'Future Trends']
  },
  {
    id: 9,
    title: 'Food Safety Standards in Syrian FMCG Distribution',
    excerpt: 'Quality and safety are non-negotiable. Explore the certifications and standards that B2B maintains across its distribution network.',
    category: 'Quality & Safety',
    date: 'January 30, 2025',
    readTime: '5 min read',
    image: 'https://readdy.ai/api/search-image?query=quality%20control%20inspector%20checking%20food%20products%20safety%20standards%20certification%20professional%20warehouse%20environment%20organized%20clean%20facility%20wide%20angle&width=1200&height=600&seq=article-hero-009&orientation=landscape',
    author: 'Quality Assurance Team',
    authorImage: 'https://readdy.ai/api/search-image?query=professional%20quality%20assurance%20manager%20in%20lab%20coat%20confident%20smile%20professional%20headshot%20bright%20lighting&width=200&height=200&seq=author9&orientation=squarish',
    content: `
      <p>Food safety is paramount in FMCG distribution. Maintaining the highest standards protects consumers and builds trust in the brands we distribute.</p>

      <h2>Safety Standards</h2>
      <p>Our operations adhere to international food safety standards, including proper storage conditions, handling procedures, and traceability systems.</p>

      <h2>Quality Control Processes</h2>
      <ul>
        <li><strong>Incoming Inspection:</strong> All products checked upon receipt</li>
        <li><strong>Storage Monitoring:</strong> Regular checks of warehouse conditions</li>
        <li><strong>Expiry Management:</strong> FIFO systems and date tracking</li>
        <li><strong>Documentation:</strong> Complete records for traceability</li>
      </ul>

      <h2>Continuous Improvement</h2>
      <p>We regularly review and update our safety procedures to incorporate best practices and address emerging challenges in food safety.</p>
    `,
    tags: ['Food Safety', 'Quality Control', 'Standards', 'Certifications', 'FMCG']
  }
];

export default function BlogArticle() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    const articleId = parseInt(id || '1');
    const foundArticle = blogPosts.find(post => post.id === articleId);

    if (foundArticle) {
      setArticle(foundArticle);
      // Get related articles (same category or random if not enough)
      const related = blogPosts
        .filter(post => post.id !== articleId)
        .slice(0, 3);
      setRelatedArticles(related);
    }

    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [id]);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = article?.title || '';

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
    setShowShareMenu(false);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareMenu(false);
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <i className="ri-article-line text-6xl text-gray-300 mb-4"></i>
          <p className="text-xl text-gray-500" style={{ fontFamily: 'Quicksand' }}>Article not found</p>
          <Link href="/blog" className="mt-4 inline-block text-[#14B8A6] font-bold hover:underline" style={{ fontFamily: 'Quicksand' }}>
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#000000] to-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-[#F7E326] text-[#000000] rounded-full text-sm font-bold uppercase tracking-wider" style={{ fontFamily: 'Quicksand' }}>
              {article.category}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Quicksand' }}>
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-300">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-yellow">
                <img src={article.authorImage} alt={article.author} className="w-full h-full object-cover object-top" />
              </div>
              <span className="font-semibold" style={{ fontFamily: 'Quicksand' }}>{article.author}</span>
            </div>
            <span className="flex items-center gap-2">
              <i className="ri-calendar-line text-brand-charcoal"></i>
              {article.date}
            </span>
            <span className="flex items-center gap-2">
              <i className="ri-time-line text-brand-charcoal"></i>
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={article.image} alt={article.title} className="w-full h-[500px] object-cover object-top" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-12">
            {/* Sidebar - Social Share */}
            <div className="hidden lg:block w-16 flex-shrink-0">
              <div className="sticky top-32 space-y-4">
                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="w-12 h-12 flex items-center justify-center bg-brand-yellow text-black rounded-full hover:bg-black hover:text-white duration-300 transition-all shadow-lg cursor-pointer"
                  >
                    <i className="ri-share-line text-xl"></i>
                  </button>
                  {showShareMenu && (
                    <div className="absolute left-16 top-0 bg-white rounded-xl shadow-2xl p-4 space-y-2 border-2 border-[#DEE3EB] z-50">
                      <button
                        onClick={() => handleShare('facebook')}
                        className="w-12 h-12 flex items-center justify-center bg-[#1877F2] text-white rounded-lg hover:scale-110 transition-all cursor-pointer"
                      >
                        <i className="ri-facebook-fill text-xl"></i>
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="w-12 h-12 flex items-center justify-center bg-[#1DA1F2] text-white rounded-lg hover:scale-110 transition-all cursor-pointer"
                      >
                        <i className="ri-twitter-fill text-xl"></i>
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="w-12 h-12 flex items-center justify-center bg-[#0A66C2] text-white rounded-lg hover:scale-110 transition-all cursor-pointer"
                      >
                        <i className="ri-linkedin-fill text-xl"></i>
                      </button>
                      <button
                        onClick={() => handleShare('whatsapp')}
                        className="w-12 h-12 flex items-center justify-center bg-[#25D366] text-white rounded-lg hover:scale-110 transition-all cursor-pointer"
                      >
                        <i className="ri-whatsapp-fill text-xl"></i>
                      </button>
                      <button
                        onClick={copyLink}
                        className="w-12 h-12 flex items-center justify-center bg-[#4B4F54] text-white rounded-lg hover:scale-110 transition-all cursor-pointer"
                      >
                        <i className="ri-link text-xl"></i>
                      </button>
                    </div>
                  )}
                </div>
                {/* <button className="w-12 h-12 flex items-center justify-center bg-[#FF6B6B] text-white rounded-full hover:bg-[#FF5252] transition-all shadow-lg cursor-pointer">
                  <i className="ri-heart-line text-xl"></i>
                </button>
                <button className="w-12 h-12 flex items-center justify-center bg-[#F7E326] text-[#000000] rounded-full hover:bg-[#E5D324] transition-all shadow-lg cursor-pointer">
                  <i className="ri-bookmark-line text-xl"></i>
                </button> */}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <article
                className="prose prose-lg max-w-none"
                style={{ fontFamily: 'Quicksand' }}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              {/* <div className="mt-12 pt-8 border-t-2 border-[#DEE3EB]">
                <h3 className="text-xl font-bold text-[#000000] mb-4" style={{ fontFamily: 'Quicksand' }}>
                  Tags
                </h3>
                <div className="flex flex-wrap gap-3">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#DEE3EB] text-[#4B4F54] rounded-full text-sm font-semibold hover:bg-[#14B8A6] hover:text-white transition-all cursor-pointer"
                      style={{ fontFamily: 'Quicksand' }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div> */}

              {/* Author Bio */}
              {/* <div className="mt-12 p-8 bg-gradient-to-br from-[#DEE3EB]/50 to-white rounded-2xl border-2 border-[#DEE3EB]">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#14B8A6] flex-shrink-0">
                    <img src={article.authorImage} alt={article.author} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#000000] mb-2" style={{ fontFamily: 'Quicksand' }}>
                      {article.author}
                    </h3>
                    <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                      Our team consists of experienced analysts and industry experts dedicated to providing valuable insights into the Syrian FMCG market. With years of combined experience in market analysis, consumer behavior research, and distribution strategy, the team delivers actionable intelligence to help businesses thrive in this dynamic market.
                    </p>
                  </div>
                </div>
              </div> */}

              {/* Mobile Share Buttons */}
              <div className="lg:hidden mt-8 flex justify-center gap-4">
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-12 h-12 flex items-center justify-center bg-[#1877F2] text-white rounded-full hover:scale-110 transition-all cursor-pointer"
                >
                  <i className="ri-facebook-fill text-xl"></i>
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="w-12 h-12 flex items-center justify-center bg-[#1DA1F2] text-white rounded-full hover:scale-110 transition-all cursor-pointer"
                >
                  <i className="ri-twitter-fill text-xl"></i>
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="w-12 h-12 flex items-center justify-center bg-[#0A66C2] text-white rounded-full hover:scale-110 transition-all cursor-pointer"
                >
                  <i className="ri-linkedin-fill text-xl"></i>
                </button>
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="w-12 h-12 flex items-center justify-center bg-[#25D366] text-white rounded-full hover:scale-110 transition-all cursor-pointer"
                >
                  <i className="ri-whatsapp-fill text-xl"></i>
                </button>
                <button
                  onClick={copyLink}
                  className="w-12 h-12 flex items-center justify-center bg-[#4B4F54] text-white rounded-full hover:scale-110 transition-all cursor-pointer"
                >
                  <i className="ri-link text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gradient-to-br from-[#DEE3EB]/30 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#000000] mb-3" style={{ fontFamily: 'Quicksand' }}>
              Related Articles
            </h2>
            <p className="text-lg text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
              Continue exploring insights from the Syrian FMCG market
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle) => (
              <Link
                href={`/blog/${relatedArticle.id}`}
                key={relatedArticle.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-brand-yellow block"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#F7E326] text-[#000000] px-4 py-2 rounded-full text-sm font-bold shadow-lg" style={{ fontFamily: 'Quicksand' }}>
                      {relatedArticle.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-[#4B4F54] mb-3" style={{ fontFamily: 'Quicksand' }}>
                    <span className="flex items-center gap-1">
                      <i className="ri-calendar-line text-brand-charcoal"></i>
                      {relatedArticle.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-time-line text-brand-charcoal"></i>
                      {relatedArticle.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#000000] mb-3 transition-colors line-clamp-2" style={{ fontFamily: 'Quicksand' }}>
                    {relatedArticle.title}
                  </h3>
                  <span className="text-brand-charcoal font-bold flex items-center gap-2 group-hover:gap-3 transition-all whitespace-nowrap" style={{ fontFamily: 'Quicksand' }}>
                    Read More
                    <i className="ri-arrow-right-line"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <Subscribe title={t("Never_Miss_an_Update")} />




      {/* Custom Styles for Article Content */}
      <style>{`
        .prose {
          color: #4B4F54;
        }
        .prose h2 {
          color: #000000;
          font-size: 2rem;
          font-weight: 700;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          font-family: 'Quicksand', sans-serif;
        }
        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          font-size: 1.125rem;
        }
        .prose ul, .prose ol {
          margin-bottom: 1.5rem;
          padding-left: 2rem;
        }
        .prose li {
          margin-bottom: 1rem;
          line-height: 1.8;
        }
        .prose strong {
          color: #000000;
          font-weight: 700;
        }
        .prose a {
          color: #14B8A6;
          text-decoration: none;
          font-weight: 600;
        }
        .prose a:hover {
          color: #0D9488;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
