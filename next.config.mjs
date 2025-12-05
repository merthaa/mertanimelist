/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  devIndicators: false,

  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
      }
    ]
  },
};

export default nextConfig;
