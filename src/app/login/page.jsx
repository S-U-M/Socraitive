'use client'
import { useState } from 'react'

export default function LoginPage() {
  const [mode, setMode] = useState('login') // 'login' or 'signup'

  async function handleLogin(e) {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    if (res.ok) {
      window.location.href = '/'
    } else {
      alert('Login failed')
    }
  }

  async function handleSignup(e) {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    if (res.ok) {
      const data = await res.json()
      if (data.message) {
        alert(data.message)
        window.location.href = '/login?check_email=1'
      } else {
        window.location.href = '/'
      }
    } else {
      alert('Signup failed')
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: 36, width: 350, maxWidth: '90vw' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 24, fontWeight: 700, fontSize: 28, color: '#22223b', letterSpacing: 0.5 }}>{mode === 'login' ? 'Log in to your account' : 'Create an account'}</h2>
        {mode === 'login' ? (
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <label htmlFor="email" style={{ fontWeight: 500, color: '#4a4e69' }}>Email</label>
            <input id="email" name="email" type="email" required style={{ padding: 10, borderRadius: 8, border: '1px solid #c9c9c9', fontSize: 16 }} />
            <label htmlFor="password" style={{ fontWeight: 500, color: '#4a4e69' }}>Password</label>
            <input id="password" name="password" type="password" required style={{ padding: 10, borderRadius: 8, border: '1px solid #c9c9c9', fontSize: 16 }} />
            <button type="submit" style={{ marginTop: 12, background: 'linear-gradient(90deg, #4f8cff 0%, #6c63ff 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 0', fontWeight: 600, fontSize: 17, cursor: 'pointer', boxShadow: '0 2px 8px rgba(76,99,255,0.08)' }}>Log in</button>
          </form>
        ) : (
          <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <label htmlFor="email" style={{ fontWeight: 500, color: '#4a4e69' }}>Email</label>
            <input id="email" name="email" type="email" required style={{ padding: 10, borderRadius: 8, border: '1px solid #c9c9c9', fontSize: 16 }} />
            <label htmlFor="password" style={{ fontWeight: 500, color: '#4a4e69' }}>Password</label>
            <input id="password" name="password" type="password" required style={{ padding: 10, borderRadius: 8, border: '1px solid #c9c9c9', fontSize: 16 }} />
            <button type="submit" style={{ marginTop: 12, background: 'linear-gradient(90deg, #4f8cff 0%, #6c63ff 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 0', fontWeight: 600, fontSize: 17, cursor: 'pointer', boxShadow: '0 2px 8px rgba(76,99,255,0.08)' }}>Sign up</button>
          </form>
        )}
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          {mode === 'login' ? (
            <span style={{ color: '#4a4e69', fontSize: 15 }}>Don't have an account?{' '}
              <button type="button" onClick={() => setMode('signup')} style={{ background: 'none', border: 'none', color: '#6c63ff', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', fontSize: 15 }}>Sign up</button>
            </span>
          ) : (
            <span style={{ color: '#4a4e69', fontSize: 15 }}>Already have an account?{' '}
              <button type="button" onClick={() => setMode('login')} style={{ background: 'none', border: 'none', color: '#6c63ff', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline', fontSize: 15 }}>Log in</button>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
