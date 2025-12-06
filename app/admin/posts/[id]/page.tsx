'use client';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import React from 'react';

export default function EditPost() {
  const params = useParams();
  const router = useRouter();
  const postId = params.id as string;

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    status: 'پیش‌نویس',
  });

  useEffect(() => {
    // داده نمونه - در حالت واقعی از API می‌گیری
    const sample = {
      title: 'آموزش Next.js برای مبتدیان',
      content: 'محتوای کامل پست...',
      category: 'برنامه‌نویسی',
      status: 'منتشر شده',
    };

    setFormData(sample);
  }, [postId]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('تغییرات ذخیره شد!');
    router.push('/admin/posts');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
        ویرایش پست
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          background: 'white',
          padding: '2rem',
          borderRadius: 12,
          border: '1px solid #e2e8f0',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div>
            <label>عنوان *</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              style={input}
            />
          </div>

          <div>
            <label>دسته‌بندی *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              style={input}
            >
              <option value="">انتخاب</option>
              <option value="برنامه‌نویسی">برنامه‌نویسی</option>
              <option value="طراحی">طراحی</option>
              <option value="سئو">سئو</option>
            </select>
          </div>

          <div>
            <label>وضعیت انتشار</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              style={input}
            >
              <option value="پیش‌نویس">پیش‌نویس</option>
              <option value="منتشر شده">منتشر شده</option>
            </select>
          </div>

          <div>
            <label>محتوا *</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={10}
              required
              style={input}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button type="submit" style={btnPrimary}>
              ذخیره
            </button>

            <button
              type="button"
              onClick={() => router.push('/admin/posts')}
              style={btnSecondary}
            >
              انصراف
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

const input = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: 8,
  border: '1px solid #d1d5db',
};

const btnPrimary = {
  background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
  color: 'white',
  padding: '0.75rem 2rem',
  border: 'none',
  borderRadius: 8,
  cursor: 'pointer',
};

const btnSecondary = {
  background: 'transparent',
  color: '#64748b',
  border: '1px solid #d1d5db',
  padding: '0.75rem 2rem',
  borderRadius: 8,
  cursor: 'pointer',
};