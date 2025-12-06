'use client'

import { useState } from 'react'

export default function Settings() {
  const [settings, setSettings] = useState({
    siteName: 'کافه‌دانش',
    siteDescription: 'پلتفرم آموزشی تخصصی',
    adminEmail: 'admin@cafedanesh.com',
    postsPerPage: '10',
    allowComments: true
  })

  const handleSave = () => {
    // ذخیره تنظیمات
    alert('تنظیمات با موفقیت ذخیره شد!')
  }

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e293b' }}>
          تنظیمات سایت
        </h1>
        <p style={{ color: '#64748b' }}>مدیریت تنظیمات و پیکربندی سایت</p>
      </div>

      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e2e8f0'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
              نام سایت
            </label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => setSettings({...settings, siteName: e.target.value})}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
              توضیحات سایت
            </label>
            <textarea
              value={settings.siteDescription}
              onChange={(e) => setSettings({...settings, siteDescription: e.target.value})}
              rows={3}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem',
                resize: 'vertical'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
              ایمیل مدیر
            </label>
            <input
              type="email"
              value={settings.adminEmail}
              onChange={(e) => setSettings({...settings, adminEmail: e.target.value})}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
              تعداد پست در هر صفحه
            </label>
            <select
              value={settings.postsPerPage}
              onChange={(e) => setSettings({...settings, postsPerPage: e.target.value})}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem'
              }}
            >
              <option value="5">۵ پست</option>
              <option value="10">۱۰ پست</option>
              <option value="15">۱۵ پست</option>
              <option value="20">۲۰ پست</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              id="allowComments"
              checked={settings.allowComments}
              onChange={(e) => setSettings({...settings, allowComments: e.target.checked})}
              style={{ width: '18px', height: '18px' }}
            />
            <label htmlFor="allowComments" style={{ fontWeight: '600', color: '#374151' }}>
             允许 نظرات
            </label>
          </div>

          <button
            onClick={handleSave}
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              color: 'white',
              border: 'none',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              alignSelf: 'flex-start'
            }}
          >
            ذخیره تنظیمات
          </button>
        </div>
      </div>
    </div>
  )
}