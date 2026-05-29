import React, { useState, useEffect } from 'react'

function ProjectManager() {
  const [projects, setProjects] = useState([])
  const [title, setTitle] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [liveLink, setLiveLink] = useState('')
  const [githubLink, setGithubLink] = useState('')
  const [technologies, setTechnologies] = useState('')
  
  const [editingProjectId, setEditingProjectId] = useState(null)
  
  const [loading, setLoading] = useState(false)
  const [actionLoading, setActionLoading] = useState(false)
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const fetchProjects = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/projects')
      const data = await response.json()

      if (!response.ok) {
        if (response.status === 400 && (data.error === 'No projects found' || data.message === 'No projects found')) {
          setProjects([])
          return
        }
        throw new Error(data.message || data.error || 'Failed to fetch projects')
      }

      setProjects(Array.isArray(data) ? data : [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim() || !shortDescription.trim()) {
      setError('Title and Description are required')
      return
    }

    setActionLoading(true)
    setError('')
    setSuccessMsg('')

    const payload = {
      title: title.trim(),
      shortDescription: shortDescription.trim(),
      liveLink: liveLink.trim(),
      githubLink: githubLink.trim(),
      technologies: technologies.split(',').map(t => t.trim()).filter(Boolean)
    }

    try {
      let url = '/api/projects'
      let method = 'POST'

      if (editingProjectId) {
        url = `/api/projects/${editingProjectId}`
        method = 'PUT'
      }

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || data.error || `Failed to ${editingProjectId ? 'update' : 'add'} project`)
      }

      setSuccessMsg(editingProjectId ? 'Project updated successfully!' : 'Project added successfully!')
      resetForm()
      fetchProjects()

      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMsg(''), 3000)
    } catch (err) {
      setError(err.message)
    } finally {
      setActionLoading(false)
    }
  }

  const handleDelete = async (projectId) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return

    setActionLoading(true)
    setError('')
    setSuccessMsg('')

    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'DELETE',
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Failed to delete project')
      }

      setSuccessMsg('Project deleted successfully!')
      fetchProjects()
      if (editingProjectId === projectId) {
        resetForm()
      }

      setTimeout(() => setSuccessMsg(''), 3000)
    } catch (err) {
      setError(err.message)
    } finally {
      setActionLoading(false)
    }
  }

  const startEdit = (project) => {
    setEditingProjectId(project._id)
    setTitle(project.title)
    setShortDescription(project.shortDescription)
    setLiveLink(project.liveLink || '')
    setGithubLink(project.githubLink || '')
    setTechnologies(project.technologies ? project.technologies.join(', ') : '')
    setError('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const resetForm = () => {
    setEditingProjectId(null)
    setTitle('')
    setShortDescription('')
    setLiveLink('')
    setGithubLink('')
    setTechnologies('')
  }

  return (
    <div className="space-y-8">
      {(error || successMsg) && (
        <div className="space-y-2">
          {error && (
            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 text-rose-600 dark:text-rose-400 text-sm flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
              </svg>
              <span>{error}</span>
            </div>
          )}
          {successMsg && (
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              <span>{successMsg}</span>
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-1 bg-white dark:bg-[#0b1329]/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 p-6 rounded-2xl shadow-lg h-fit transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-violet-50 dark:bg-emerald-950/30 text-violet-600 dark:text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {editingProjectId ? 'Edit Project' : 'Add Project'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {editingProjectId ? 'Modify existing project details' : 'Publish a new project'}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Project Title *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Portfolio Website"
                disabled={actionLoading}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0e172e]/40 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 dark:focus:ring-emerald-500/20 dark:focus:border-emerald-500 disabled:opacity-50 transition-all duration-200"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Short Description *
              </label>
              <textarea
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                placeholder="Brief summary of the project..."
                disabled={actionLoading}
                rows={4}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0e172e]/40 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 dark:focus:ring-emerald-500/20 dark:focus:border-emerald-500 disabled:opacity-50 transition-all duration-200 resize-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Live URL
              </label>
              <input
                type="url"
                value={liveLink}
                onChange={(e) => setLiveLink(e.target.value)}
                placeholder="e.g. https://myproject.com"
                disabled={actionLoading}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0e172e]/40 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 dark:focus:ring-emerald-500/20 dark:focus:border-emerald-500 disabled:opacity-50 transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                GitHub Repository URL
              </label>
              <input
                type="url"
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
                placeholder="e.g. https://github.com/user/repo"
                disabled={actionLoading}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0e172e]/40 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 dark:focus:ring-emerald-500/20 dark:focus:border-emerald-500 disabled:opacity-50 transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Technologies (comma-separated)
              </label>
              <input
                type="text"
                value={technologies}
                onChange={(e) => setTechnologies(e.target.value)}
                placeholder="e.g. React, Node.js, MongoDB"
                disabled={actionLoading}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0e172e]/40 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 dark:focus:ring-emerald-500/20 dark:focus:border-emerald-500 disabled:opacity-50 transition-all duration-200"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={actionLoading}
                className="flex-1 py-2.5 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 dark:from-emerald-600 dark:to-teal-600 dark:hover:from-emerald-700 dark:hover:to-teal-700 text-white rounded-xl text-sm font-semibold shadow-md shadow-violet-500/10 hover:shadow-lg hover:shadow-violet-500/20 dark:shadow-emerald-500/10 dark:hover:shadow-emerald-500/20 active:scale-95 disabled:opacity-50 transition-all duration-200 cursor-pointer"
              >
                {actionLoading ? 'Saving...' : editingProjectId ? 'Update' : 'Add Project'}
              </button>
              {editingProjectId && (
                <button
                  type="button"
                  onClick={resetForm}
                  disabled={actionLoading}
                  className="px-4 py-2.5 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 bg-white dark:bg-[#111827]/60 hover:bg-slate-50 dark:hover:bg-[#1f2937]/80 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Existing Projects</h3>
            <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
              {projects.length} {projects.length === 1 ? 'Project' : 'Projects'}
            </span>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map((n) => (
                <div key={n} className="border border-slate-200/60 dark:border-slate-800/60 p-5 rounded-2xl bg-white dark:bg-[#0b1329]/50 animate-pulse h-48"></div>
              ))}
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-white/40 dark:bg-black/10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto text-slate-400 dark:text-slate-600 mb-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.685-.34-1.39-.744-2.085-1.202M6.16 11.739c.325.215.65.418.975.61M2.25 12c0 4.28 3.47 7.75 7.75 7.75 1.135 0 2.222-.243 3.203-.683M21.75 12c0-4.28-3.47-7.75-7.75-7.75-1.135 0-2.222.243-3.203.683M12 21.75c-4.28 0-7.75-3.47-7.75-7.75M21.75 12c0 4.28-3.47 7.75-7.75 7.75m-6.75-6.75A9.004 9.004 0 0 1 12 3c1.24 0 2.417.25 3.493.704M12 12V3" />
              </svg>
              <p className="text-sm text-slate-400 dark:text-slate-500">No projects added yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <div
                  key={project._id}
                  className="bg-white dark:bg-[#0b1329]/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 p-5 rounded-2xl shadow-sm hover:shadow transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="font-bold text-slate-900 dark:text-white break-words line-clamp-1">{project.title}</h4>
                      <div className="flex gap-1.5 flex-shrink-0">
                        <button
                          onClick={() => startEdit(project)}
                          disabled={actionLoading}
                          className="p-1.5 text-slate-400 hover:text-violet-600 dark:hover:text-emerald-400 rounded-md hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer"
                          title="Edit Project"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(project._id)}
                          disabled={actionLoading}
                          className="p-1.5 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 rounded-md hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer"
                          title="Delete Project"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 break-words line-clamp-3 mb-4 leading-relaxed">
                      {project.shortDescription}
                    </p>
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-0.5 text-[10px] font-bold rounded bg-violet-50 dark:bg-emerald-950/40 text-violet-600 dark:text-emerald-400 border border-violet-100/50 dark:border-emerald-900/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-emerald-400 flex items-center gap-1 transition-colors"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                        </svg>
                        Repository
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-emerald-400 flex items-center gap-1 transition-colors ml-auto"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                        Live Link
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default ProjectManager
