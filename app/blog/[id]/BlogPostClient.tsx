"use client"

import Link from 'next/link'

interface BlogPostClientProps {
  id: string
}

export default function BlogPostClient({ id }: BlogPostClientProps) {

  // داده پست نمونه
  const samplePost = {
    id,
    title: 'آموزش Next.js برای مبتدیان',
    content: `
      <h2>مقدمه‌ای بر Next.js</h2>
      <p>Next.js یک فریمورک React است که امکانات پیشرفته‌ای مانند رندرینگ سمت سرور، تولید استاتیک و بهینه‌سازی خودکار را ارائه می‌دهد.</p>
      
      <h2>مزایای استفاده از Next.js</h2>
      <ul>
        <li>سئوی بهتر با رندرینگ سمت سرور</li>
        <li>سرعت لود بالاتر</li>
        <li>توسعه سریع‌تر</li>
        <li>بهینه‌سازی خودکار</li>
      </ul>

      <h2>نصب Next.js</h2>
      <p>برای نصب Next.js می‌توانید از دستور زیر استفاده کنید:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>این فریمورک به شما کمک می‌کند تا برنامه‌های وب مدرن و قدرتمندی بسازید.</p>
    `,
    category: 'برنامه‌نویسی',
    date: '۱۴۰۲/۱۰/۱۵',
    author: 'مدیر سایت',
    readTime: '۵ دقیقه',
    image: '/api/placeholder/800/400'
  }

  const post = samplePost

  return (
    <div style={{ fontFamily: 'Vazir, Tahoma, sans-serif', direction: 'rtl' }}>
      
      {/* هدر پست */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '8rem 2rem 4rem'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <span style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              {post.category}
            </span>
            <span style={{ opacity: 0.9 }}>📅 {post.date}</span>
            <span style={{ opacity: 0.9 }}>⏱️ {post.readTime}</span>
            <span style={{ opacity: 0.9 }}>👤 {post.author}</span>
          </div>

          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            lineHeight: '1.3'
          }}>
            {post.title}
          </h1>
        </div>
      </section>

      {/* محتوای پست */}
      <section style={{ padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <article style={{
            background: 'white',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            padding: '3rem'
          }}>

            {/* تصویر پست */}
            <div style={{
              height: '400px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '2rem'
            }}>
              تصویر پست: {post.title}
            </div>

            {/* محتوای HTML */}
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: '1.8',
                color: '#374151',
                fontSize: '1.1rem'
              }}
            />

            {/* دکمه بازگشت */}
            <div style={{
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid #e2e8f0'
            }}>
              <Link
                href="/blog"
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                ← بازگشت به بلاگ
              </Link>
            </div>

          </article>
        </div>
      </section>
    </div>
  )
}
