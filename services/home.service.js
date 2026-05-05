const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getPageData(page, locale) {
  console.log("locale", locale);

  try {
    console.log(`Fetching ${page} data with locale: ${locale}`);
    const res = await fetch(`${BASE_URL}/web_site/get_page?page=${page}`, {
      method: "GET",
      headers: {
        locale,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Failed to fetch page data for ${page}: ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching page data for ${page}:`, error);
    return null;
  }
}

export async function getBrandProducts(id, locale) {
  try {
    const res = await fetch(`${BASE_URL}/web_site/show_brand_products/${id}`, {
      method: "GET",
      headers: {
        locale,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(
        `Failed to fetch brand products for ID ${id}: ${res.statusText}`,
      );
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching brand products for ID ${id}:`, error);
    return null;
  }
}

export async function getFaqs(locale) {
  try {
    const res = await fetch(`${BASE_URL}/web_site/get_all_faqs`, {
      method: "GET",
      headers: {
        locale,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) return [];
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
}

export async function getBlogs(locale, page = 1, items = 20) {
  try {
    const res = await fetch(
      `${BASE_URL}/web_site/get_all_blogs?page=${page}&items=${items}`,
      {
        method: "GET",
        headers: {
          locale,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      console.error(`Failed to fetch blogs: ${res.statusText}`);
      return { pagination: null, data: [] };
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { pagination: null, data: [] };
  }
}

export async function getCompanyData(locale) {
  try {
    const res = await fetch(`${BASE_URL}/web_site/get_company_data`, {
      method: "GET",
      headers: {
        locale,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Failed to fetch company data: ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching company data:`, error);
    return null;
  }
}
