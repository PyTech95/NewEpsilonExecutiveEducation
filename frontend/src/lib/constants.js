// Site constants - brand, contact, social, course data
export const BRAND = {
  name: "Epsilon",
  full: "Epsilon Executive Education",
  tagline: "Applied AI & Machine Learning, for decision-makers.",
  phone: "+91 87963 39323",
  phoneDigits: "918796339323",
  whatsapp: "918796339323",
  email: "hello@epsiloned.com",
};

export const SOCIAL = {
  instagram: "https://instagram.com/epsiloneducation",
  facebook: "https://facebook.com/epsiloneducation",
  linkedin: "https://linkedin.com/company/epsiloneducation",
  youtube: "https://youtube.com/@epsiloneducation",
};

export const COURSE = {
  title: "Applied AI & Machine Learning",
  subtitle: "for decision-makers",
  duration: "12 weeks",
  effort: "15–20 hrs / wk",
  format: "Live online",
  fee: "₹89,000",
};

// logo.dev public token — used to render official brand logos sitewide
export const LOGO_TOKEN = "pk_X-1ZO13GSgeOoUrIuJ6GMQ";
export const logoUrl = (domain, size = 256) =>
  `https://img.logo.dev/${domain}?token=${LOGO_TOKEN}&size=${size}&format=png`;
