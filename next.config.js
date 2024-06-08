/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [],
  },
  redirects: async () => {
    return [
      {
        source: "/admin",
        destination: "/admin/profile",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
