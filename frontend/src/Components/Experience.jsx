import React from 'react'

function Experience() {
  const experiences = [
    {
      id: 1,
      duration: '2022 - 2025',
      role: 'Software Engineer ',
      company: 'Servion Global Solutions – Bengaluru, India',
      description: 'Working on real-world projects using the React. Collaborating with the team to build scalable web applications.'
    }
  ]

  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-violet-600 dark:bg-emerald-500 flex items-center justify-center text-white shadow-sm transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
            <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h19.5a.75.75 0 0 0 0-1.5H21V3.75a.75.75 0 0 0 0-1.5H3Zm2.25 18V5.25h13.5v15H5.25ZM9 7.5A.75.75 0 0 1 9.75 8.25v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 9 7.5ZM14.25 8.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5ZM9 12.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 9 12.75Zm5.25.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
          Experience
          <span className="text-violet-600 dark:text-emerald-400 text-2xl leading-none animate-pulse">•</span>
        </h2>
      </div>
      <div className="space-y-0 pl-1">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="flex gap-4 sm:gap-8">
                        <div className="w-24 sm:w-32 flex-shrink-0 text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-semibold pt-1 transition-colors duration-300">
              {exp.duration}
            </div>

            <div className="relative flex flex-col items-center">
              <div className="w-4 h-4 rounded-full border-4 border-violet-100 dark:border-emerald-950/60 bg-violet-600 dark:bg-emerald-500 z-10 shadow-sm transition-all duration-300"></div>
              
              <div className="w-[2px] flex-grow bg-violet-200 dark:bg-emerald-800/20 my-1 transition-colors duration-300 min-h-[80px]"></div>
            </div>

            <div className="flex-1 pb-8">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {exp.role}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5 transition-colors">
                {exp.company}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed break-words max-w-2xl transition-colors">
                {exp.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
