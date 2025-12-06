'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  const menuItems = [
    { href: '/admin', label: 'داشبورد', icon: '📊' },
    { href: '/admin/posts', label: 'مدیریت پست‌ها', icon: '📝' },
    { href: '/admin/settings', label: 'تنظیمات', icon: '⚙️' },
  ];

  return (
    <div style={{ fontFamily: 'Vazir, Tahoma, sans-serif', direction: 'rtl' }}>
      
      {/* هدر ثابت بالای پنل */}
      <header
        style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          color: 'white',
          padding: '1rem 2rem',
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          zIndex: 50,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '70px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: 'white',
              padding: '0.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1.2rem',
            }}
          >
            ☰
          </button>

          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            پنل مدیریت کافه‌دانش
          </h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            href="/"
            style={{
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '0.9rem',
            }}
          >
            بازگشت به سایت
          </Link>
        </div>
      </header>

      {/* سایدبار + محتوا */}
      <div
        style={{
          display: 'flex',
          marginTop: '70px',
          minHeight: 'calc(100vh - 70px)',
        }}
      >
        {/* سایدبار */}
        {isSidebarOpen && (
          <aside
            style={{
              width: '280px',
              background: '#f8fafc',
              borderLeft: '1px solid #e2e8f0',
              padding: '2rem 1rem',
              position: 'fixed',
              top: '70px',
              right: 0,
              bottom: 0,
              overflowY: 'auto',
            }}
          >
            <nav
              style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color:
                      pathname === item.href ? '#2563eb' : '#4b5563',
                    background:
                      pathname === item.href
                        ? 'rgba(37, 99, 235, 0.1)'
                        : 'transparent',
                    fontWeight: pathname === item.href ? 600 : 400,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        )}

        {/* محتوا */}
        <main
          style={{
            flex: 1,
            padding: '2rem',
            marginRight: isSidebarOpen ? '280px' : '0',
            transition: 'margin-right 0.3s ease',
            background: '#ffffff',
            minHeight: 'calc(100vh - 70px)',
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
