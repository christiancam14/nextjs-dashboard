/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    ppr: "incremental",
  },
  /*
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  */
};

export default nextConfig;
