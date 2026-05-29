import React, { useState, useEffect } from 'react'
import Experience from './Experience'
import Contact from './Contact'

function MainBody() {
  const [skills, setSkills] = useState([])
  const [projects, setProjects] = useState([])
  const [loadingSkills, setLoadingSkills] = useState(true)
  const [loadingProjects, setLoadingProjects] = useState(true)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('/api/skills')
        const data = await response.json()
        if (response.ok) {
          setSkills(Array.isArray(data) ? data : [])
        } else {
          setSkills([])
        }
      } catch (err) {
        console.error('Error fetching skills:', err)
        setSkills([])
      } finally {
        setLoadingSkills(false)
      }
    }
    fetchSkills()
  }, [])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects')
        const data = await response.json()
        if (response.ok) {
          setProjects(Array.isArray(data) ? data : [])
        } else {
          setProjects([])
        }
      } catch (err) {
        console.error('Error fetching projects:', err)
        setProjects([])
      } finally {
        setLoadingProjects(false)
      }
    }
    fetchProjects()
  }, [])



  return (
    <div className="space-y-16">
      
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-violet-600 dark:bg-emerald-500 flex items-center justify-center text-white shadow-sm transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
              <path fillRule="evenodd" d="M12.516 2.185a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.97a.75.75 0 0 0-.722-.515 11.209 11.209 0 0 1-7.877-3.08Z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Skills</h2>
        </div>

        {loadingSkills ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 animate-pulse">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="h-12 bg-slate-100 dark:bg-[#0b1329]/50 rounded-xl border border-slate-200/40 dark:border-slate-800/40"></div>
            ))}
          </div>
        ) : skills.length === 0 ? (
          <div className="py-8 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
            <p className="text-sm text-slate-400 dark:text-slate-500">No skills added yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {skills.map((skillItem) => (
              <div 
                key={skillItem._id}
                className="bg-white dark:bg-[#0b1329]/50 border border-slate-200/60 dark:border-slate-800/60 py-3.5 px-4 rounded-xl flex items-center justify-center font-semibold text-slate-700 dark:text-slate-200 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-violet-500/30 dark:hover:border-emerald-500/30 transition-all duration-300"
              >
                <span className="text-sm text-center tracking-wide">{skillItem.skill}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-violet-600 dark:bg-emerald-500 flex items-center justify-center text-white shadow-sm transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
              <path fillRule="evenodd" d="M7.5 4.5a3 3 0 0 0-3 3v.75H3.75a1.5 1.5 0 0 0-1.5 1.5v8.25a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5V9.75a1.5 1.5 0 0 0-1.5-1.5H19.5V7.5a3 3 0 0 0-3-3h-9Zm3 3.75v-.75a1.5 1.5 0 0 1 3 0v.75h-3Z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Projects</h2>
        </div>

        {loadingProjects ? (
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-none animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex-shrink-0 w-[85vw] sm:w-[380px] h-48 bg-slate-100 dark:bg-[#0b1329]/50 rounded-2xl border border-slate-200/40 dark:border-slate-800/40"></div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="py-12 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-white/40 dark:bg-[#0b1329]/10">
            <p className="text-sm text-slate-400 dark:text-slate-500">No projects added yet.</p>
          </div>
        ) : (
          <div className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory -mx-6 px-6 md:-mx-8 md:px-8 lg:-mx-0 lg:px-0 scrollbar-thin">
            {projects.map((project) => (
              <div 
                key={project._id}
                className="flex-shrink-0 w-[85vw] sm:w-[380px] snap-start bg-white dark:bg-[#0b1329]/50 border border-slate-200/60 dark:border-slate-800/60 p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-md flex flex-col justify-between hover:border-violet-500/20 dark:hover:border-emerald-500/20 transition-all duration-300"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight break-words mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 dark:text-slate-400 break-words line-clamp-3 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-2.5 py-0.5 text-[11px] font-bold rounded-md bg-violet-50 dark:bg-emerald-950/40 text-violet-600 dark:text-emerald-400 border border-violet-100/50 dark:border-emerald-900/30 uppercase tracking-wide transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-emerald-400 flex items-center gap-1.5 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <div />
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 border transition-all duration-300
                        bg-violet-50 hover:bg-violet-100 text-violet-700 border-violet-200/60
                        dark:bg-emerald-950/40 dark:hover:bg-emerald-950/60 dark:text-emerald-400 dark:border-emerald-800/50"
                    >
                      <span>Live Demo</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Experience />
      <Contact />

    </div>
  )
}

export default MainBody
