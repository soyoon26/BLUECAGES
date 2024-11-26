/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.aladin.co.kr", "file.koreafilm.or.kr"],
  },
  async rewrites() {
    return [
      {
        source: "/api/proxy",
        destination: "/api/proxy",
      },
    ];
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
