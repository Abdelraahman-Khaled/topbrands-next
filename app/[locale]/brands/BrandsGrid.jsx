"use client";

import { useState, useRef, useCallback } from "react";
import LocalizedLink from "../components/LocalizedLink";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function fetchBrands(locale, page) {
  const res = await fetch(`${BASE_URL}/web_site/get_page?page=brands&current_page=${page}`, {
    headers: { locale, "Content-Type": "application/json" },
  });
  if (!res.ok) return null;
  return res.json();
}

export default function BrandsGrid({ initialBrands, initialPagination, locale }) {
  const [brands, setBrands] = useState(initialBrands);
  const [pagination, setPagination] = useState(initialPagination);
  const [loading, setLoading] = useState(false);
  const gridRef = useRef(null);

  const goToPage = useCallback(async (page) => {
    if (loading) return;
    setLoading(true);

    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    const data = await fetchBrands(locale, page);
    if (data?.brands) {
      setBrands(data.brands);
      setPagination(data.pagination);
    }

    setLoading(false);
  }, [loading, locale]);

  return (
    <div ref={gridRef} className="scroll-mt-24">
      {/* Grid */}
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${loading ? "opacity-40 pointer-events-none" : "opacity-100"}`}
      >
        {brands.map((brand) => (
          <LocalizedLink
            key={brand.id}
            href={`/brands/${brand.id}`}
            className="block h-full group card-hover bg-white rounded-3xl overflow-hidden border-2 border-transparent shadow-sm cursor-pointer"
          >
            <div className="flex flex-col h-full">
              <div className="w-full h-56 flex items-center justify-center bg-white p-10 border-b border-gray-100">
                <img
                  src={brand.image_url}
                  alt={brand.alt_text || brand.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-brand-jet mb-3 group-hover:text-black transition-colors">
                  {brand.title}
                </h3>
                {brand.description && (
                  <p className="text-brand-charcoal text-base leading-relaxed line-clamp-3">
                    {brand.description}
                  </p>
                )}
                <div className="mt-auto pt-6 flex items-center text-brand-jet font-bold gap-2 group-hover:gap-3 transition-all">
                  {locale === "ar" ? "عرض المنتجات" : "View Products"}
                  <i className="ri-arrow-right-line rtl:rotate-180"></i>
                </div>
              </div>
            </div>
          </LocalizedLink>
        ))}
      </div>

      {/* Pagination */}
      {pagination && pagination.total_pages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-16">
          {pagination.prev_page ? (
            <button
              onClick={() => goToPage(pagination.current_page - 1)}
              className="flex items-center justify-center w-10 h-10 rounded-xl font-bold transition-all bg-white text-brand-jet hover:bg-brand-yellow hover:text-black shadow-sm"
            >
              <i className="ri-arrow-left-s-line rtl:rotate-180"></i>
            </button>
          ) : (
            <span className="flex items-center justify-center w-10 h-10 rounded-xl font-bold bg-white/40 text-brand-charcoal/40 cursor-not-allowed">
              <i className="ri-arrow-left-s-line rtl:rotate-180"></i>
            </span>
          )}

          {Array.from({ length: pagination.total_pages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => goToPage(p)}
              className={`flex items-center justify-center w-10 h-10 rounded-xl font-bold transition-all shadow-sm ${
                p === pagination.current_page
                  ? "bg-brand-yellow text-black shadow-md"
                  : "bg-white text-brand-jet hover:bg-brand-yellow hover:text-black"
              }`}
            >
              {p}
            </button>
          ))}

          {pagination.next_page ? (
            <button
              onClick={() => goToPage(pagination.current_page + 1)}
              className="flex items-center justify-center w-10 h-10 rounded-xl font-bold transition-all bg-white text-brand-jet hover:bg-brand-yellow hover:text-black shadow-sm"
            >
              <i className="ri-arrow-right-s-line rtl:rotate-180"></i>
            </button>
          ) : (
            <span className="flex items-center justify-center w-10 h-10 rounded-xl font-bold bg-white/40 text-brand-charcoal/40 cursor-not-allowed">
              <i className="ri-arrow-right-s-line rtl:rotate-180"></i>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
