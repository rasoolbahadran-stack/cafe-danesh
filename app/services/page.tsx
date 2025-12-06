export default function Services() {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="text-right">
              <h1 className="hero-title">
                خدمات تخصصی
                <span className="gradient-text">کافه دانش</span>
              </h1>
              <p className="hero-subtitle">
                ارائه جامع‌ترین خدمات دیجیتال با کیفیت و پشتیبانی عالی
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">خدمات ما</h2>
            <p className="section-description">
              راهکارهای جامع دیجیتال برای رشد و توسعه کسب‌وکار شما
            </p>
          </div>

          <div className="service-tabs">
            <button className="service-tab active">طراحی وب‌سایت</button>
            <button className="service-tab">کافی‌نت آنلاین</button>
            <button className="service-tab">خدمات بروکر</button>
          </div>
        </div>
      </section>
    </div>
  )
}