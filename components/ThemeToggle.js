'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') || 'dark')
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
    setTheme(next)
  }

  if (!theme) return null

  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-toggle"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <i className={theme === 'dark' ? 'bx bx-sun' : 'bx bx-moon'} aria-hidden="true"></i>
    </button>
  )
}
