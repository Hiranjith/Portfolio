import React, { useState, useEffect } from 'react'

function SkillManager() {
  const [skills, setSkills] = useState([])
  const [newSkill, setNewSkill] = useState('')
  const [loading, setLoading] = useState(false)
  const [actionLoading, setActionLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchSkills = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/skills')
      const data = await response.json()

      if (!response.ok) {
        if (response.status === 400 && (data.error === 'No skills found' || data.message === 'No skills found')) {
          setSkills([])
          return
        }
        throw new Error(data.message || data.error || 'Failed to fetch skills')
      }

      setSkills(Array.isArray(data) ? data : [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSkills()
  }, [])

  const handleAddSkill = async (e) => {
    e.preventDefault()
    if (!newSkill.trim()) return

    setActionLoading(true)
    setError('')
    try {
      const response = await fetch('/api/skills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ skill: newSkill.trim() }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Failed to add skill')
      }

      setNewSkill('')
      fetchSkills()
    } catch (err) {
      setError(err.message)
    } finally {
      setActionLoading(false)
    }
  }

  const handleRemoveSkill = async (skillId) => {
    setActionLoading(true)
    setError('')
    try {
      const response = await fetch(`/api/skills/${skillId}`, {
        method: 'DELETE',
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Failed to remove skill')
      }

      fetchSkills()
    } catch (err) {
      setError(err.message)
    } finally {
      setActionLoading(false)
    }
  }

  return (
    <div className="bg-white/80 dark:bg-[#0b1329]/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden group">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-violet-500/10 dark:bg-emerald-500/10 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"></div>

      <div className="relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-violet-100 to-indigo-50 dark:from-emerald-900/40 dark:to-teal-900/20 text-violet-600 dark:text-emerald-400 shadow-sm border border-violet-100 dark:border-emerald-800/30">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 21l8.982-5.025a9 9 0 0 0 4.162-7.999V6.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v3.602c0 3.224 1.704 6.22 4.51 7.998L9.813 15.904Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6h19.5M12 5.25v2.25M9 6h6" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Skills Library</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Manage your technical expertise</p>
            </div>
          </div>
          <div className="inline-flex text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 w-fit">
            {skills.length} {skills.length === 1 ? 'Skill' : 'Skills'} Added
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/40 text-rose-600 dark:text-rose-400 text-sm flex items-center gap-3 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-shrink-0">
              <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
            </svg>
            <span className="break-all">{error}</span>
          </div>
        )}

        <form onSubmit={handleAddSkill} className="relative flex items-center mb-8">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="e.g. React.js, TailwindCSS, Node.js"
            disabled={actionLoading}
            className="w-full pl-5 pr-32 py-3.5 text-sm rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white/50 dark:bg-[#0e172e]/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 dark:focus:ring-emerald-500/10 dark:focus:border-emerald-500 disabled:opacity-50 transition-all duration-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-600"
          />
          <button
            type="submit"
            disabled={actionLoading || !newSkill.trim()}
            className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 dark:from-emerald-600 dark:to-teal-600 dark:hover:from-emerald-500 dark:hover:to-teal-500 text-white rounded-xl text-sm font-semibold shadow-md active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
          >
            {actionLoading ? (
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add
              </>
            )}
          </button>
        </form>

        {loading ? (
          <div className="flex flex-wrap gap-3 animate-pulse">
            <div className="h-10 w-28 bg-slate-200 dark:bg-slate-800/80 rounded-2xl"></div>
            <div className="h-10 w-32 bg-slate-200 dark:bg-slate-800/80 rounded-2xl"></div>
            <div className="h-10 w-24 bg-slate-200 dark:bg-slate-800/80 rounded-2xl"></div>
            <div className="h-10 w-36 bg-slate-200 dark:bg-slate-800/80 rounded-2xl"></div>
          </div>
        ) : skills.length === 0 ? (
          <div className="text-center py-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl bg-slate-50/50 dark:bg-[#0b1329]/30">
            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm3.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Z" />
              </svg>
            </div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-1">No skills yet</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">Type a skill above and press Enter to add it to your profile.</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3">
            {skills.map((skillItem) => (
              <div
                key={skillItem._id}
                className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-2xl text-sm font-semibold bg-white dark:bg-[#151f38] text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 group transition-all duration-300"
              >
                <span>{skillItem.skill}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skillItem._id)}
                  disabled={actionLoading}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-rose-500 dark:hover:bg-rose-600 disabled:opacity-50 transition-colors duration-200"
                  title="Remove Skill"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SkillManager
