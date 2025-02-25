/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    // For Local Server
    URL: "http://uzapi.dokaner.com/api/admin",
    storageURL: "http://uzapi.dokaner.com",
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http://uzapi.dokaner.com/",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "laravel.pixelstrap.net/fastkart",
      },
      {
        protocol: "https",
        hostname: "laravel.pixelstrap.net/fastkart",
      },
    ],
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
