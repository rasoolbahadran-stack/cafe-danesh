'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewPost() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    status: 'پیش‌نویس',
    image: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ذخیره پست - اینجا می‌تونی به API وصل شی
    console.log('پست جدید:', formData)
    alert('پست با موفقیت ایجاد شد!')
    router.push('/admin/posts')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e293b' }}>
          ایجاد پست جدید
        </h1>
        <p style={{ color: '#64748b' }}>پست جدید خود را ایجاد و مدیریت کنید</p>
      </div>

      <form onSubmit={handleSubmit} style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e2e8f0'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* عنوان */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
              عنوان پست *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
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
              placeholder="عنوان پست را وارد کنید..."
            />
          </div>

          {/* دسته‌بندی */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
              دسته‌بندی *
            </label>
            <select
              name="category"
              value={formData.category}
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
            >
              <option value="">انتخاب دسته‌بندی</option>
              <option value="برنامه‌نویسی">برنامه‌نویسی</option>
              <option value="طراحی">طراحی</option>
              <option value="سئو">سئو</option>
              <option value="مدیریت">مدیریت</option>
            </select>
          </div>

          {/* آدرس تصویر */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
              آدرس تصویر
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem',
                fontFamily: 'Vazir, Tahoma, sans-serif'
              }}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* وضعیت */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
              وضعیت انتشار
            </label>
            <select
              name="status"
              value={formData.status}
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
              <option value="پیش‌نویس">پیش‌نویس</option>
              <option value="منتشر شده">منتشر شده</option>
            </select>
          </div>

          {/* محتوا */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
              محتوای پست *
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={12}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem',
                fontFamily: 'Vazir, Tahoma, sans-serif',
                resize: 'vertical'
              }}
              placeholder="محتوای پست را اینجا بنویسید..."
            />
          </div>

          {/* دکمه‌ها */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start' }}>
            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                color: 'white',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              ذخیره پست
            </button>
            <button
              type="button"
              onClick={() => router.push('/admin/posts')}
              style={{
                background: 'transparent',
                color: '#64748b',
                border: '1px solid #d1d5db',
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              انصراف
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}