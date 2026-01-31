/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@repo/ui'],
  compiler: {
    emotion: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
};

export default nextConfig;
