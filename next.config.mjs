import createNextIntlPlugin from "next-intl/plugin";

// Configuración del plugin NextIntl
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Cualquier otra configuración de Next.js
};

export default withNextIntl(nextConfig);
