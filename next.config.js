/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react']
  }
}

export default nextConfig