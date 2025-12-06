'use client';
import type { CSSProperties } from 'react';
import { useState } from 'react';
import Link from 'next/link';

// تعریف نوع پست‌ها (برای جلوگیری از خطاهای تایپ در build)
interface BlogPost {
  id: number;
  title: string;
  category: string;
  status: string;
  date: string;
  views: number;
}

export default function PostsList() {
  const samplePosts: BlogPost[] = [
    { id: 1, title: 'آموزش Next.js برای مبتدیان', category: 'برنامه‌نویسی', status: 'منتشر شده', date: '۱۴۰۲/۱۰/۱۵', views: 1245 },
    { id: 2, title: 'راهنمای کامل طراحی ریسپانسیو', category: 'طراحی', status: 'پیش‌نویس', date: '۱۴۰۲/۱۰/۱۴', views: 0 },
    { id: 3, title: '۱۰ تکنیک برتر سئو در سال ۲۰۲۴', category: 'سئو', status: 'منتشر شده', date: '۱۴۰۲/۱۰/۱۳', views: 2890 },
    { id: 4, title: 'مدیریت پروژه‌های وب', category: 'مدیریت', status: 'منتشر شده', date: '۱۴۰۲/۱۰/۱۲', views: 876 },
  ];

  const [posts, setPosts] = useState<BlogPost[]>(samplePosts);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(
    (post) =>
      post.title.includes(searchTerm) || post.category.includes(searchTerm)
  );

  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '2rem',
        }}
      >
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e293b' }}>
            مدیریت پست‌ها
          </h1>
          <p style={{ color: '#64748b' }}>مدیریت و ویرایش پست‌ها</p>
        </div>

        <Link
          href="/admin/posts/new"
          style={{
            background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: 8,
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          پست جدید
        </Link>
      </div>

      <div
        style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: 12,
          border: '1px solid #e2e8f0',
          marginBottom: '2rem',
        }}
      >
        <input
          type="text"
          placeholder="جستجو..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            borderRadius: 8,
            border: '1px solid #d1d5db',
          }}
        />
      </div>

      <div
        style={{
          background: 'white',
          borderRadius: 12,
          border: '1px solid #e2e8f0',
          overflow: 'hidden',
        }}
      >
        <table style={{ width: '100%' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={th}>عنوان</th>
              <th style={th}>دسته‌بندی</th>
              <th style={th}>وضعیت</th>
              <th style={th}>تاریخ</th>
              <th style={th}>بازدید</th>
              <th style={th}>عملیات</th>
            </tr>
          </thead>

          <tbody>
            {filteredPosts.map((post) => (
              <tr key={post.id}>
                <td style={td}>{post.title}</td>
                <td style={td}>{post.category}</td>
                <td style={td}>
                  <span
                    style={{
                      background:
                        post.status === 'منتشر شده' ? '#10b981' : '#f59e0b',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: 20,
                      fontSize: '0.875rem',
                    }}
                  >
                    {post.status}
                  </span>
                </td>
                <td style={td}>{post.date}</td>
                <td style={td}>{post.views.toLocaleString()}</td>

                <td style={td}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Link
                      href={`/admin/posts/${post.id}`}
                      style={{
                        background: '#3b82f6',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: 6,
                        textDecoration: 'none',
                      }}
                    >
                      ویرایش
                    </Link>

                    <button
                      onClick={() => deletePost(post.id)}
                      style={{
                        background: '#ef4444',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: 6,
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      حذف
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const th: CSSProperties = {
  padding: '1rem',
  textAlign: 'center',
  borderBottom: '1px solid #e2e8f0',
  fontWeight: 600,
};

const td: CSSProperties = {
  padding: '1rem',
  textAlign: 'center',
  borderBottom: '1px solid #e2e8f0',
};

