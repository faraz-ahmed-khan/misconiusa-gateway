/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    const isPreview =
      process.env.VERCEL_ENV === "preview" || process.env.VERCEL_ENV === "development";

    if (!isPreview) return [];

    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

module.exports = nextConfig;
