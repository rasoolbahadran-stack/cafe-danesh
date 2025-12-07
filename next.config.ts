import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* تنظیمات اصلی برای Vercel */
  output: 'export', // خروجی استاتیک برای بهینه‌سازی
  
  /* رفع مشکلات استایل و ارتفاع */
  compiler: {
    styledComponents: true, // اگر از styled-components استفاده می‌کنی
  },
  
  /* بهینه‌سازی تصاویر - ضروری برای Vercel */
  images: {
    unoptimized: true, // برای static export در Vercel ضروری است
    domains: [], // اگر تصاویر خارجی داری، دامنه‌ها رو اینجا اضافه کن
  },
  
  /* رفع مشکل فونت‌ها و CSS */
  experimental: {
    optimizeCss: true, // بهینه‌سازی CSS
    optimizeFonts: true, // بهینه‌سازی فونت‌ها - مهم!
  },
  
  /* رفع خطاهای رندر و هیدراسیون */
  reactStrictMode: true,
  
  /* تنظیمات برای رفع مشکل ارتفاع هیرو سکشن */
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },
  
  /* رفع مشکل مسیرها در Vercel */
  trailingSlash: false, // مسیرها بدون اسلش انتهایی
   
  /* برای سازگاری بهتر با Vercel */
  poweredByHeader: false,
  generateEtags: true,
  
  /* رفع خطاهای build */
  typescript: {
    ignoreBuildErrors: false, // تغییر به false برای دیدن خطاها
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
