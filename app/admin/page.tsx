export default function AdminDashboard() {
  const stats = [
    { label: 'تعداد پست‌ها', value: '۱۲', icon: '📝', color: '#3b82f6' },
    { label: 'بازدید امروز', value: '۲۴۵', icon: '👁️', color: '#10b981' },
    { label: 'کاربران', value: '۱,۲۳۴', icon: '👥', color: '#8b5cf6' },
    { label: 'نظرات', value: '۴۵', icon: '💬', color: '#f59e0b' },
  ]

  const recentPosts = [
    { id: 1, title: 'آموزش Next.js', date: '۱۴۰۲/۱۰/۱۵', status: 'منتشر شده' },
    { id: 2, title: 'راهنمای طراحی وب', date: '۱۴۰۲/۱۰/۱۴', status: 'پیش‌نویس' },
    { id: 3, title: 'بهینه‌سازی سئو', date: '۱۴۰۲/۱۰/۱۳', status: 'منتشر شده' },
  ]

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e293b' }}>
          داشبورد مدیریت
        </h1>
        <p style={{ color: '#64748b' }}>به پنل مدیریت کافه‌دانش خوش آمدید</p>
      </div>

      {/* آمار */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              background: stat.color,
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              color: 'white'
            }}>
              {stat.icon}
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e293b' }}>
                {stat.value}
              </div>
              <div style={{ color: '#64748b', fontSize: '0.9rem' }}>
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* پست‌های اخیر */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e2e8f0',
        padding: '1.5rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b' }}>
            پست‌های اخیر
          </h2>
          <a 
            href="/admin/posts"
            style={{
              background: '#2563eb',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '500'
            }}
          >
            مشاهده همه
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {recentPosts.map((post) => (
            <div
              key={post.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                background: '#f8fafc',
                borderRadius: '8px',
                border: '1px solid #e2e8f0'
              }}
            >
              <div>
                <div style={{ fontWeight: '600', color: '#1e293b', marginBottom: '0.25rem' }}>
                  {post.title}
                </div>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: '#64748b' }}>
                  <span>تاریخ: {post.date}</span>
                  <span style={{
                    background: post.status === 'منتشر شده' ? '#10b981' : '#f59e0b',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem'
                  }}>
                    {post.status}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a
                  href={`/admin/posts/${post.id}`}
                  style={{
                    background: '#3b82f6',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '0.875rem'
                  }}
                >
                  ویرایش
                </a>
                <button style={{
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  cursor: 'pointer'
                }}>
                  حذف
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}