'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // شبیه‌سازی ارسال فرم
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {/* هیرو بخش تماس */}
      <section className="blog-hero">
        <div className="container">
          <h1 className="hero-title">تماس با ما</h1>
          <p className="hero-subtitle">
            آماده‌ایم تا به شما در تحقق ایده‌هایتان کمک کنیم
          </p>
        </div>
      </section>

      {/* بخش اطلاعات تماس و فرم */}
      <section style={{ padding: '4rem 0', background: '#ffffff' }}>
        <div className="container">
          <div className="service-grid">
            {/* اطلاعات تماس */}
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1e293b' }}>
                اطلاعات تماس
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem'
                  }}>
                    📞
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e293b' }}>تلفن</h3>
                    <p style={{ color: '#64748b', fontSize: '1.1rem' }}>۰۲۱-۱۲۳۴۵۶۷۸</p>
                    <p style={{ color: '#64748b', fontSize: '1.1rem' }}>۰۹۱۶۵۸۰۶۲۰۷</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem'
                  }}>
                    📧
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e293b' }}>ایمیل</h3>
                    <p style={{ color: '#64748b', fontSize: '1.1rem' }}>info@cafedanesh.com</p>
                    <p style={{ color: '#64748b', fontSize: '1.1rem' }}>support@cafedanesh.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem'
                  }}>
                    📍
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e293b' }}>آدرس</h3>
                    <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: '1.6' }}>
                      تهران، خیابان ولیعصر، تقاطع طالقانی<br />
                      برج مهر، طبقه ۸، واحد ۱۲
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem'
                  }}>
                    🕒
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e293b' }}>ساعات کاری</h3>
                    <p style={{ color: '#64748b', fontSize: '1.1rem' }}>شنبه تا چهارشنبه: ۸:۰۰ - ۱۷:۰۰</p>
                    <p style={{ color: '#64748b', fontSize: '1.1rem' }}>پنجشنبه: ۸:۰۰ - ۱۴:۰۰</p>
                  </div>
                </div>
              </div>
            </div>

            {/* فرم درخواست مشاوره */}
            <div style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1e293b' }}>
                درخواست مشاوره رایگان
              </h2>
              
              {isSubmitted ? (
                <div style={{
                  background: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  borderRadius: '12px',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                  <h3 style={{ color: '#166534', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    درخواست شما ثبت شد!
                  </h3>
                  <p style={{ color: '#166534' }}>
                    همکاران ما در اسرع وقت با شما تماس خواهند گرفت.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    style={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '0.75rem 2rem',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      marginTop: '1rem'
                    }}
                  >
                    ارسال درخواست جدید
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                      نام و نام خانوادگی *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontFamily: 'Vazir, Tahoma, sans-serif'
                      }}
                      placeholder="نام خود را وارد کنید"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                      ایمیل *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontFamily: 'Vazir, Tahoma, sans-serif'
                      }}
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                      شماره تماس
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontFamily: 'Vazir, Tahoma, sans-serif'
                      }}
                      placeholder="۰۹۱۶۵۸۰۶۲۰۷"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                      نوع خدمات مورد نیاز
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontFamily: 'Vazir, Tahoma, sans-serif'
                      }}
                    >
                      <option value="">انتخاب خدمات</option>
                      <option value="web-design">طراحی وب‌سایت</option>
                      <option value="cafe-net">کافی‌نت آنلاین</option>
                      <option value="broker">خدمات بروکر</option>
                      <option value="consulting">مشاوره تخصصی</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
                      توضیحات پروژه *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontFamily: 'Vazir, Tahoma, sans-serif',
                        resize: 'vertical'
                      }}
                      placeholder="در مورد پروژه خود توضیح دهید..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      background: isSubmitting 
                        ? '#9ca3af' 
                        : 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '1rem 2rem',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  >
                    {isSubmitting ? 'در حال ارسال...' : 'ارسال درخواست مشاوره'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}