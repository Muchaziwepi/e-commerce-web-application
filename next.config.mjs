/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/e-commerce-web-application",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

