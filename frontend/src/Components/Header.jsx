import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Experience', path: '/experience' }, // Based on mobile feedback
    { name: 'Contact', path: '/contact' } // Based on mobile feedback
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050A14]/90 backdrop-blur-md border-b border-[#18283D]">
      <div className="max-w-[1280px] mx-auto px-[24px] md:px-[80px] h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-[32px] w-[32px] md:h-[40px] md:w-[40px] flex items-center justify-center">
            <img src="/Logos/Hiranjith%20Logo.png" alt="Hiranjith Logo" className="h-full w-full object-contain" />
          </div>
          <span className="text-[15px] font-[700] text-[#F5F7FA]">Hiranjith E M</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-[32px]">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`relative text-[14px] font-medium transition-colors ${
                (location.pathname === link.path || (link.path === '/' && location.pathname === '/'))
                  ? 'text-[#00D9A5]' 
                  : 'text-[#F5F7FA] hover:text-[#00D9A5]'
              }`}
            >
              {link.name}
              {(location.pathname === link.path || (link.path === '/' && location.pathname === '/')) && (
                <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-full h-[2px] bg-[#00D9A5]"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Right side (Theme + Resume + Mobile Menu) */}
        <div className="flex items-center gap-[16px]">
          <button 
            onClick={toggleTheme}
            className="text-[#F5F7FA] hover:text-[#00D9A5] transition-colors"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] text-[#FFC107]">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 1 1-16.949-11.84.75.75 0 0 1 .833.268Z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[20px] h-[20px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            )}
          </button>

          <button className="hidden sm:flex items-center gap-2 px-[16px] py-[8px] border border-[#00B98B] bg-[#00B98B]/10 hover:bg-[#00B98B]/20 text-[#00D9A5] rounded-[6px] text-[13px] font-[600] transition-colors">
            <span>Download Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[14px] h-[14px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </button>
          
          {/* Hamburger Mobile */}
          <button 
            className="lg:hidden text-[#F5F7FA] p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[24px] h-[24px]">
              <path fillRule="evenodd" d="M3 5.5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 4.5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 4.5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 4.5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 w-full bg-[#050A14] border-b border-[#18283D] flex flex-col p-[24px] space-y-[16px]">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-[16px] font-[600] ${
                (location.pathname === link.path || (link.path === '/' && location.pathname === '/'))
                  ? 'text-[#00D9A5]' 
                  : 'text-[#F5F7FA]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="flex justify-center items-center gap-2 mt-4 py-3 bg-[#00D9A5] text-[#050A14] rounded-[8px] text-[14px] font-bold w-full">
            Download Resume
          </button>
        </div>
      )}
    </header>
  )
}

export default Header