import Subscribe from "../components/Subscribe";
import BlogFilterGrid from "./components/BlogFilterGrid";
import { getBlogs } from "@/services/home.service";
import enCommon from "../i18n/local/en/common.js";
import arCommon from "../i18n/local/ar/common.js";

export default async function BlogPage({ params }) {
  const { locale } = await params;
  const blogsResponse = await getBlogs(locale, 1, 20);
  const blogs = blogsResponse?.data ?? [];
  const pagination = blogsResponse?.pagination ?? null;

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-[#000000] to-[#1a1a1a] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        </div>
      </section>

      {/* Interactive Blog Grid with Filtering */}
      <BlogFilterGrid
        blogs={blogs}
        initialPagination={pagination}
        locale={locale}
        translations={locale === 'ar' ? arCommon : enCommon}
      />

      <Subscribe />
    </div>
  );
}
