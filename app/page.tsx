'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [activeService, setActiveService] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const services = [
    {
      icon: '🖥️',
      title: 'طراحی وب‌سایت اختصاصی',
      description: 'طراحی وب‌سایت‌های شرکتی، فروشگاهی و شخصی با جدیدترین تکنولوژی‌ها',
      features: ['طراحی ریسپانسیو', 'سئوی حرفه‌ای', 'پنل مدیریت فارسی', 'پشتیبانی ۲۴/۷']
    },
    {
      icon: '🌐',
      title: 'کافی‌نت آنلاین',
      description: 'سیستم‌های مدیریت کافی‌نت پیشرفته با امکانات کامل',
      features: ['نرم‌افزار مدیریت', 'سیستم پرداخت', 'کنترل والدین', 'گزارش‌گیری']
    },
    {
      icon: '📊',
      title: 'خدمات بروکر و مالی',
      description: 'راهکارهای نوین در حوزه بازارهای مالی و خدمات کارگزاری',
      features: ['تحلیل بازار', 'پلتفرم معاملاتی', 'مشاوره سرمایه‌گذاری', 'پرداخت بین‌المللی']
    }
  ]

  return (
    <div>
      {/* هیرو سکشن */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="text-right">
              <div className="hero-badge">
                🚀 سرویس‌های تخصصی دیجیتال
              </div>
              <h1 className="hero-title">
                 تبدیل ایده‌های شما به
                <span className="gradient-text"> راهکارهای دیجیتال</span>
              </h1>
              <p className="hero-subtitle">
                ارائه جامع‌ترین خدمات دیجیتال از طراحی وب‌سایت تا راه‌اندازی سیستم‌های پیشرفته
              </p>

              {/* دکمه‌های هیرو - نسخه اصلاح شده */}
              <div className="hero-buttons">
                <a href="/contact" className="cta-button">
                  شروع پروژه
                </a>
                <a href="/portfolio" className="cta-button-outline">
                  ▶️ مشاهده دمو
                </a>
              </div>

              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-number">+150</div>
                  <div className="stat-label">پروژه موفق</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">+98%</div>
                  <div className="stat-label">رضایت مشتریان</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">۵⭐</div>
                  <div className="stat-label">امتیاز کیفیت</div>
                </div>
              </div>
            </div>

            {!isMobile && (
              <div className="hero-card">
                <div className="hero-card-image">🎨 فضای نمایش نمونه کار</div>
                <div className="text-center">
                  <h3>نمونه طراحی مدرن</h3>
                  <p>طراحی شده با آخرین تکنولوژی‌های روز دنیا</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* بخش خدمات */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">خدمات تخصصی ما</h2>
            <p className="section-description">
              راهکارهای جامع دیجیتال برای رشد و توسعه کسب‌وکار شما
            </p>
          </div>

          <div className="service-tabs">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`service-tab ${activeService === index ? 'active' : ''}`}
              >
                <span>{service.icon}</span>
                {service.title}
              </button>
            ))}
          </div>

          <div className="service-content">
            <div className="service-grid">
              <div className="service-info">
                <h3 className="service-title">{services[activeService].title}</h3>
                <p className="service-description">{services[activeService].description}</p>
                <ul className="feature-list">
                  {services[activeService].features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="/services" className="cta-button">اطلاعات بیشتر</a>
              </div>
              
              <div className="service-display">
                {services[activeService].icon} فضای نمایش خدمت
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA پایانی */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">آماده شروع تحول دیجیتال هستید؟</h2>
          <p className="cta-description">
            با خیال راحت پروژه خود را به متخصصان ما بسپارید و شاهد رشد کسب‌وکار خود باشید
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button cta-button-white">
              درخواست مشاوره رایگان
            </a>
            <a href="/contact" className="cta-button-outline-white">
              تماس با پشتیبانی
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}