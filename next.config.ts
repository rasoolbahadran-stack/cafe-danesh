/** @type {import('next').NextConfig} */ 
const nextConfig = { 
  experimental: { 
    optimizeCss: true, 
  }, 
  typescript: { 
    ignoreBuildErrors: true, 
  }, 
} 
export default nextConfig 
