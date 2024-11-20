/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.aladin.co.kr", "file.koreafilm.or.kr"], // 추가된 도메인
  },
  async rewrites() {
    return [
      {
        source: "/api/proxy",
        destination: "/api/proxy",
      },
    ];
  },
};

module.exports = nextConfig;
