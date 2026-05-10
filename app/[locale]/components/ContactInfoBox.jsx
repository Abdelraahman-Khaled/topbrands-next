"use client";

import { useCompany } from "./CompanyProvider";

const DEFAULTS = {
  email:          "info@topbrands-sy.com",
  phone_number_1: "+963 11 6022",
  google_maps_url: "https://maps.app.goo.gl/qygBXpAisoK7TNnZ9",
  address:        "Damascus, Syria",
};

export default function ContactInfoBox() {
  const { companyData } = useCompany();

  const email   = companyData?.email          || DEFAULTS.email;
  const phone   = companyData?.phone_number_1 || DEFAULTS.phone_number_1;
  const mapsUrl = companyData?.google_maps_url || DEFAULTS.google_maps_url;
  const address = companyData?.address        || DEFAULTS.address;

  const rowClass =
    "flex items-center gap-3 text-gray-700 hover:text-black font-semibold text-sm md:text-base cursor-pointer transition-colors";

  return (
    <div className="bg-[#DEE3EB] p-6 md:p-8 rounded-2xl border border-gray-200 space-y-3">
      <a href={`mailto:${email}`} className={rowClass}>
        <i className="ri-mail-line text-black text-xl shrink-0" />
        {email}
      </a>
      <a href={`tel:${phone.replace(/\s/g, "")}`} className={rowClass}>
        <i className="ri-phone-line text-black text-xl shrink-0" />
        <span dir="ltr">{phone}</span>
      </a>
      <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={rowClass}>
        <i className="ri-map-pin-line text-black text-xl shrink-0" />
        {address}
      </a>
    </div>
  );
}
