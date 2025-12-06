import './globals.css'

export const metadata = {
  title: 'کافه دانش - پلتفرم آموزشی تخصصی',
  description: 'ارائه خدمات تخصصی دیجیتال از طراحی وب تا راه‌اندازی سیستم‌های پیشرفته',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {/* هدر اصلی سایت با مگامنو */}
        <header className="header">
          <div className="container header-inner">
            <a href="/" className="logo">
              <div className="logo-icon">KD</div>
              <span className="logo-text">کافه‌دانش</span>
            </a>

            <nav className="desktop-menu">
              <a href="/" className="menu-item">خانه</a>
              
              {/* مگامنوی خدمات */}
              <div className="mega-menu">
                <a href="/services" className="menu-item">
                  خدمات
                  <span style={{ fontSize: '0.8rem', marginRight: '0.5rem' }}>▼</span>
                </a>
                
                <div className="mega-submenu">
                  <a href="/services#web-design" className="submenu-item">
                    طراحی وب‌سایت
                  </a>
                  <a href="/services#cafe-net" className="submenu-item">
                    کافی‌نت آنلاین
                  </a>
                  <a href="/services#broker" className="submenu-item">
                    خدمات بروکر
                  </a>
                  <a href="/services#consulting" className="submenu-item">
                    مشاوره دیجیتال
                  </a>
                </div>
              </div>
              
              <a href="/blog" className="menu-item">مقالات</a>
              <a href="/contact" className="menu-item">تماس با ما</a>
            </nav>

            <a href="/contact" className="cta-button">درخواست مشاوره</a>
          </div>
        </header>

        {/* محتوای صفحات */}
        <main>
          {children}
        </main>

        {/* فوتر اصلی سایت */}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-section">
                <a href="/" className="footer-logo">
                  <div className="logo-icon">KD</div>
                  <span className="footer-logo-text">کافه‌دانش</span>
                </a>
                <p className="footer-about">
                  ارائه دهنده خدمات تخصصی دیجیتال با سال‌ها تجربه در طراحی و توسعه راهکارهای نوین
                </p>
              </div>

              <div className="footer-section">
                <h4 className="footer-heading">لینک‌های سریع</h4>
                <div className="footer-links">
                  <a href="/" className="footer-link">خانه</a>
                  <a href="/services" className="footer-link">خدمات</a>
                  <a href="/blog" className="footer-link">مقالات</a>
                  <a href="/contact" className="footer-link">تماس با ما</a>
                </div>
              </div>

              <div className="footer-section">
                <h4 className="footer-heading">خدمات</h4>
                <div className="footer-links">
                  <a href="/services" className="footer-link">طراحی وب‌سایت</a>
                  <a href="/services" className="footer-link">کافی‌نت آنلاین</a>
                  <a href="/services" className="footer-link">خدمات بروکر</a>
                </div>
              </div>

              <div className="footer-section">
                <h4 className="footer-heading">تماس با ما</h4>
                <div className="footer-contact">
                   <div>📞 ۰۹۱۶-۵۸۰-۶۲۰۷</div>
                  <div>📧 info@cafedanesh.com</div>
                  <div>📍 تهران، خیابان ولیعصر</div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© ۲۰۲۴ کافه دانش. تمام حقوق محفوظ است.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}