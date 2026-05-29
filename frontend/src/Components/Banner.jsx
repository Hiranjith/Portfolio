import React from 'react'

function Banner() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-2 pb-12 md:pt-4 md:pb-20 transition-all duration-300">
      
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="inline-block px-3.5 py-1.5 rounded-lg text-[11px] font-bold tracking-wider uppercase bg-violet-50 dark:bg-emerald-950/30 text-violet-600 dark:text-emerald-400 border border-violet-100 dark:border-emerald-900/30 transition-colors duration-300">
          MERN Stack Developer
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
         <span className="text-violet-600 dark:text-emerald-400 transition-colors duration-300">Hiranjith E M</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed transition-colors duration-300">
          I build modern, responsive and scalable web applications using the MERN stack.
        </p>
        
        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <span className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Follow me on
          </span>
          <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500">
            <a 
              href="https://www.linkedin.com/in/hiranjithem/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-50 dark:bg-[#0b1329]/40 border border-slate-100 dark:border-slate-800/40 hover:text-violet-600 dark:hover:text-emerald-400 hover:bg-violet-50/50 dark:hover:bg-emerald-950/10 transition-all duration-200"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/Hiranjith" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-50 dark:bg-[#0b1329]/40 border border-slate-100 dark:border-slate-800/40 hover:text-violet-600 dark:hover:text-emerald-400 hover:bg-violet-50/50 dark:hover:bg-emerald-950/10 transition-all duration-200"
              title="GitHub"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a 
              href="https://x.com/hiranjithem?s=21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-50 dark:bg-[#0b1329]/40 border border-slate-100 dark:border-slate-800/40 hover:text-violet-600 dark:hover:text-emerald-400 hover:bg-violet-50/50 dark:hover:bg-emerald-950/10 transition-all duration-200"
              title="X (Twitter)"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="relative flex items-center justify-center shrink-0">
        <div className="absolute w-72 h-72 rounded-full bg-violet-400/20 dark:bg-emerald-400/10 blur-3xl -z-10 animate-pulse"></div>
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] rounded-full p-1 bg-gradient-to-tr from-violet-500 to-indigo-500 dark:from-emerald-500 dark:to-teal-500 shadow-xl dark:shadow-emerald-950/20 overflow-hidden transition-all duration-300">
            <div className="w-full h-full rounded-full bg-slate-100 dark:bg-[#111827] overflow-hidden flex items-center justify-center border-4 border-white dark:border-[#080d1a] transition-all duration-300">
              <img src="https://shopzee-storage.s3.eu-north-1.amazonaws.com/Shopzee_test_images/ChatGPT+Image+May+29%2C+2026%2C+10_11_59+AM+(1).png" alt="" />
            </div>
          </div>

        <div 
          className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-violet-50/60 dark:bg-emerald-950/20 border border-violet-100/50 dark:border-emerald-800/20 backdrop-blur-sm -z-10 animate-bounce" 
          style={{ animationDuration: '6s' }}
        ></div>
        <div 
          className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-indigo-50/20 dark:bg-teal-950/10 border border-indigo-100/10 dark:border-teal-800/10 backdrop-blur-sm -z-10 animate-pulse"
        ></div>
        
      </div>

    </div>
  )
}

export default Banner
