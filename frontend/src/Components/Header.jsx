import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Header() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )
  const location = useLocation()
  const navigate = useNavigate()
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
  const [adminName, setAdminName] = useState('')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userStr = localStorage.getItem('adminUser')
    if (token) {
      setIsAdminLoggedIn(true)
      try {
        const user = userStr ? JSON.parse(userStr) : null
        setAdminName(user?.name || 'Admin')
      } catch {
        setAdminName('Admin')
      }
    } else {
      setIsAdminLoggedIn(false)
      setAdminName('')
    }
  }, [location])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'GET' }).catch(() => {})
    } catch (e) {
      console.error(e)
    }
    localStorage.removeItem('token')
    localStorage.removeItem('adminUser')
    setIsAdminLoggedIn(false)
    setAdminName('')
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-[#080d1a] border-b border-slate-100 dark:border-slate-900/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        
        <nav className="flex items-center gap-6 md:gap-8">
          <Link 
            to='/' 
            className={`${
              location.pathname === '/' 
                ? 'text-violet-600 dark:text-emerald-400' 
                : 'text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-emerald-400'
            } font-semibold text-[15px] transition-colors duration-200`}
          >
            Home
          </Link>
          <Link 
            to={isAdminLoggedIn ? '/dashboard' : '/login'} 
            className={`${
              location.pathname === '/dashboard' 
                ? 'text-violet-600 dark:text-emerald-400' 
                : 'text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-emerald-400'
            } font-semibold text-[15px] transition-colors duration-200`}
          >
            Dashboard
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {isAdminLoggedIn ? (
            location.pathname === '/dashboard' ? (
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 border border-rose-200 dark:border-rose-900/40 text-rose-600 dark:text-rose-400 bg-white dark:bg-[#111827]/60 hover:bg-rose-50 dark:hover:bg-[#1f2937]/80 rounded-lg text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.8} 
                  stroke="currentColor" 
                  className="w-4 h-4 text-rose-500"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
                <span>Logout</span>
              </button>
            ) : (
              <div className="flex items-center gap-2 px-4 py-2 border border-violet-100 dark:border-emerald-900/30 text-violet-700 dark:text-emerald-300 bg-violet-50/30 dark:bg-emerald-950/10 rounded-lg text-sm font-semibold">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.8} 
                  stroke="currentColor" 
                  className="w-4 h-4 text-violet-500 dark:text-emerald-500"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <span>{adminName}</span>
              </div>
            )
          ) : (
            <Link 
              to='/login'
              className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 bg-white dark:bg-[#111827]/60 hover:bg-slate-50 dark:hover:bg-[#1f2937]/80 rounded-lg text-sm font-semibold shadow-sm hover:shadow transition-all duration-200"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.8} 
                stroke="currentColor" 
                className="w-4 h-4 text-slate-500 dark:text-slate-400"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span>Admin Login</span>
            </Link>
          )}

          <button 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors duration-200 flex items-center justify-center cursor-pointer"
          >
            {theme === 'light' ? (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-5 h-5 text-amber-500 hover:text-amber-600 transition-colors duration-200"
              >
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.16 5.1a.75.75 0 0 1 1.06 0l1.59 1.59a.75.75 0 1 1-1.06 1.06L6.16 6.16a.75.75 0 0 1 0-1.06ZM3 12a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12ZM5.1 17.84a.75.75 0 0 1 0-1.06l1.59-1.59a.75.75 0 1 1 1.06 1.06l-1.59 1.59a.75.75 0 0 1-1.06 0ZM12 17.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V18a.75.75 0 0 1 .75-.75ZM16.25 16.25a.75.75 0 0 1 1.06-1.06l1.59 1.59a.75.75 0 1 1-1.06 1.06l-1.59-1.59ZM20.25 12a.75.75 0 0 1-.75-.75H17.25a.75.75 0 0 1 0 1.5h2.25a.75.75 0 0 1 .75-.75ZM16.25 7.75a.75.75 0 0 1 0-1.06l1.59-1.59a.75.75 0 1 1 1.06 1.06l-1.59 1.59a.75.75 0 0 1-1.06 0ZM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" />
              </svg>
            ) : (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-5 h-5 text-amber-400 hover:text-amber-300 transition-colors duration-200"
              >
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 1 1-16.949-11.84.75.75 0 0 1 .833.268Z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          <button 
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 dark:from-emerald-600 dark:to-teal-600 dark:hover:from-emerald-700 dark:hover:to-teal-700 text-white rounded-lg text-sm font-semibold shadow-md shadow-violet-500/10 hover:shadow-lg hover:shadow-violet-500/20 dark:shadow-emerald-500/10 dark:hover:shadow-emerald-500/20 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>Download Resume</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.2} 
              stroke="currentColor" 
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </button>

        </div>
      </div>
    </header>
  )
}

export default Header