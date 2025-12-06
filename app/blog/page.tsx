'use client'

import { useState } from 'react'
import Link from 'next/link'

const samplePosts = [
  {
    id: 1,
    title: 'آموزش Next.js برای مبتدیان',
    excerpt: 'یادگیری Next.js از صفر تا صد با مثال‌های عملی و پروژه‌های واقعی. در این مقاله به بررسی مباحث پایه تا پیشرفته می‌پردازیم.',
    category: 'برنامه‌نویسی',
    date: '۱۴۰۲/۱۰/۱۵',
    author: 'مدیر سایت',
    readTime: '۵ دقیقه'
  },
  {
    id: 2,
    title: 'راهنمای کامل طراحی ریسپانسیو',
    excerpt: 'اصول طراحی واکنش‌گرا برای همه دستگاه‌ها و نمایشگرها. یادگیری Flexbox, Grid و Media Queries.',
    category: 'طراحی', 
    date: '۱۴۰۲/۱۰/۱۴',
    author: 'مدیر سایت',
    readTime: '۷ دقیقه'
  },
  {
    id: 3,
    title: '۱۰ تکنیک برتر سئو در سال ۲۰۲۴',
    excerpt: 'بهترین روش‌های بهینه‌سازی موتورهای جستجو برای رتبه‌بندی بهتر در گوگل و سایر موتورهای جستجو.',
    category: 'سئو',
    date: '۱۴۰۲/۱۰/۱۳',
    author: 'مدیر سایت',
    readTime: '۱۰ دقیقه'
  }
]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('همه')
  const categories = ['همه', 'برنامه‌نویسی', 'طراحی', 'سئو', 'مدیریت']

  const filteredPosts = selectedCategory === 'همه' 
    ? samplePosts 
    : samplePosts.filter(post => post.category === selectedCategory)

  return (
    <div>
      {/* هیرو بخش بلاگ */}
      <section className="blog-hero">
        <div className="container">
          <h1 className="hero-title">وبلاگ کافه‌دانش</h1>
          <p className="hero-subtitle">
            جدیدترین مقالات و آموزش‌های تخصصی در زمینه طراحی، برنامه‌نویسی و فناوری
          </p>
        </div>
      </section>

      {/* فیلتر دسته‌بندی */}
      <section className="blog-filters">
        <div className="container">
          <div className="service-tabs">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`service-tab ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* لیست پست‌ها */}
      <section className="blog-posts-section">
        <div className="container">
          <div className="blog-posts-grid">
            {filteredPosts.map(post => (
              <article key={post.id} className="blog-post-card">
                <div className="blog-post-image">
                  {post.category}
                </div>

                <div className="blog-post-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span className="blog-category-badge">
                      {post.category}
                    </span>
                    <span style={{ color: '#64748b', fontSize: '0.9rem' }}>
                      {post.date}
                    </span>
                  </div>

                  <h3 className="blog-post-title">
                    {post.title}
                  </h3>

                  <p className="blog-post-excerpt">
                    {post.excerpt}
                  </p>

                  <div className="blog-post-meta">
                    <div className="blog-post-info">
                      <span>👤 {post.author}</span>
                      <span>⏱️ {post.readTime}</span>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="cta-button-small"
                    >
                      مطالعه مقاله
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* پیام عدم وجود پست */}
          {filteredPosts.length === 0 && (
            <div className="empty-state">
              <div className="empty-state-icon">📝</div>
              <h3 className="empty-state-title">هنوز پستی در این دسته‌بندی وجود ندارد</h3>
              <p className="empty-state-description">اولین نفری باشید که در این دسته‌بندی مطلب می‌نویسد!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}