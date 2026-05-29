import React from 'react'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="w-full border-t border-slate-200/60 dark:border-slate-800/40 bg-white/30 dark:bg-[#080d1a]/20 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-center sm:justify-end relative gap-4 sm:gap-0">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 tracking-wide text-center sm:absolute sm:left-1/2 sm:-translate-x-1/2">
          &copy; {new Date().getFullYear()} Hiranjith E M. All Rights Reserved.
        </p>
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-emerald-400 hover:border-violet-500 dark:hover:border-emerald-500 hover:bg-violet-50/30 dark:hover:bg-emerald-950/10 flex items-center justify-center transition-all duration-300 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-md cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>

      </div>
    </footer>
  )
}

export default Footer
