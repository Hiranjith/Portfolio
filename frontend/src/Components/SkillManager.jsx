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
    <div className="bg-white dark:bg-[#0b1329]/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 p-6 rounded-2xl shadow-lg transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-violet-50 dark:bg-emerald-950/30 text-violet-600 dark:text-emerald-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 21l8.982-5.025a9 9 0 0 0 4.162-7.999V6.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v3.602c0 3.224 1.704 6.22 4.51 7.998L9.813 15.904Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6h19.5M12 5.25v2.25M9 6h6" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Manage Skills</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Add or remove your professional skills</p>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0">
            <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
          </svg>
          <span className="break-all">{error}</span>
        </div>
      )}

      <form onSubmit={handleAddSkill} className="flex gap-2 mb-6">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="e.g. React.js, Tailwind, Node.js"
          disabled={actionLoading}
          className="flex-1 px-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0e172e]/40 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 dark:focus:ring-emerald-500/20 dark:focus:border-emerald-500 disabled:opacity-50 transition-all duration-200"
        />
        <button
          type="submit"
          disabled={actionLoading || !newSkill.trim()}
          className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 dark:from-emerald-600 dark:to-teal-600 dark:hover:from-emerald-700 dark:hover:to-teal-700 text-white rounded-xl text-sm font-semibold shadow-md shadow-violet-500/10 hover:shadow-lg hover:shadow-violet-500/20 dark:shadow-emerald-500/10 dark:hover:shadow-emerald-500/20 active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 cursor-pointer flex items-center gap-1"
        >
          {actionLoading ? 'Adding...' : 'Add'}
        </button>
      </form>

      {loading ? (
        <div className="flex flex-wrap gap-2 animate-pulse">
          <div className="h-8 w-20 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
          <div className="h-8 w-24 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
          <div className="h-8 w-16 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
        </div>
      ) : skills.length === 0 ? (
        <div className="text-center py-6 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
          <p className="text-sm text-slate-400 dark:text-slate-500">No skills added yet.</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skillItem) => (
            <div
              key={skillItem._id}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-violet-50 dark:bg-emerald-950/20 text-violet-700 dark:text-emerald-300 border border-violet-100 dark:border-emerald-900/30 group transition-all duration-200"
            >
              <span>{skillItem.skill}</span>
              <button
                type="button"
                onClick={() => handleRemoveSkill(skillItem._id)}
                disabled={actionLoading}
                className="w-4 h-4 rounded-full flex items-center justify-center text-violet-400 dark:text-emerald-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 cursor-pointer transition-colors duration-150"
                title="Remove Skill"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SkillManager
