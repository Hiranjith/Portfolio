import React, { useState, useEffect } from 'react'

function ProjectManager() {
  const [projects, setProjects] = useState([])
  const [title, setTitle] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [detailedDescription, setDetailedDescription] = useState('')
  const [liveLink, setLiveLink] = useState('')
  const [githubLink, setGithubLink] = useState('')
  const [logo, setLogo] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [technologies, setTechnologies] = useState('')
  const [features, setFeatures] = useState('')
  const [requirements, setRequirements] = useState('')
  
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
      detailedDescription: detailedDescription.trim(),
      liveLink: liveLink.trim(),
      githubLink: githubLink.trim(),
      logo: logo.trim(),
      thumbnail: thumbnail.trim(),
      technologies: technologies.split(',').map(t => t.trim()).filter(Boolean),
      features: features.split('\n').map(f => f.trim()).filter(Boolean),
      requirements: requirements.split('\n').map(r => r.trim()).filter(Boolean)
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
    setDetailedDescription(project.detailedDescription || '')
    setLiveLink(project.liveLink || '')
    setGithubLink(project.githubLink || '')
    setLogo(project.logo || '')
    setThumbnail(project.thumbnail || '')
    setTechnologies(project.technologies ? project.technologies.join(', ') : '')
    setFeatures(project.features ? project.features.join('\n') : '')
    setRequirements(project.requirements ? project.requirements.join('\n') : '')
    setError('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const resetForm = () => {
    setEditingProjectId(null)
    setTitle('')
    setShortDescription('')
    setDetailedDescription('')
    setLiveLink('')
    setGithubLink('')
    setLogo('')
    setThumbnail('')
    setTechnologies('')
    setFeatures('')
    setRequirements('')
  }

  return (
    <div className="space-y-8">
      {(error || successMsg) && (
        <div className="space-y-2 mb-6">
          {error && (
            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/40 text-rose-600 dark:text-rose-400 text-sm flex items-center gap-3 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
              </svg>
              <span>{error}</span>
            </div>
          )}
          {successMsg && (
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-sm flex items-center gap-3 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              <span>{successMsg}</span>
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Form Container */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 bg-white/80 dark:bg-[#0b1329]/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden group">
          <div className="absolute top-0 left-0 -ml-20 -mt-20 w-64 h-64 rounded-full bg-violet-500/10 dark:bg-emerald-500/10 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"></div>

          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-violet-100 to-indigo-50 dark:from-emerald-900/40 dark:to-teal-900/20 text-violet-600 dark:text-emerald-400 shadow-sm border border-violet-100 dark:border-emerald-800/30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {editingProjectId ? 'Edit Project' : 'Add Project'}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  {editingProjectId ? 'Modify existing' : 'Publish a new project'}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Project Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Portfolio Website"
                  disabled={actionLoading}
                  className="w-full px-4 py-3 text-sm rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white/50 dark:bg-[#0e172e]/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 dark:focus:ring-emerald-500/10 dark:focus:border-emerald-500 disabled:opacity-50 transition-all duration-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Short Description *
                </label>
                <textarea
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  placeholder="Brief summary of the project..."
                  disabled={actionLoading}
                  rows={2}
                  className="w-full px-4 py-3 text-sm rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white/50 dark:bg-[#0e172e]/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 dark:focus:ring-emerald-500/10 dark:focus:border-emerald-500 disabled:opacity-50 transition-all duration-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-600 resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Detailed Description
                </label>
                <textarea
                  value={detailedDescription}
                  onChange={(e) => setDetailedDescription(e.target.value)}
                  placeholder="Full description shown in the project modal..."
                  disabled={actionLoading}
                  rows={4}
                  className="w-full px-4 py-3 text-sm rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white/50 dark:bg-[#0e172e]/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 dark:focus:ring-emerald-500/10 dark:focus:border-emerald-500 disabled:opacity-50 transition-all duration-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-600 resize-y"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Features (One per line)
                </label>
                <textarea
                  value={features}
                  onChange={(e) => setFeatures(e.target.value)}
                  placeholder="User authentication&#10;Real-time chat&#10;Responsive design"
                  disabled={actionLoading}
                  rows={4}
                  className="w-full px-4 py-3 text-sm rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white/50 dark:bg-[#0e172e]/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 dark:focus:ring-emerald-500/10 dark:focus:border-emerald-500 disabled:opacity-50 transition-all duration-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-600 resize-y"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Requirements (One per line)
                </label>
                <textarea
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Node.js 18+&#10;MongoDB cluster&#10;API keys"
                  disabled={actionLoading}
                  rows={3}
                  className="w-full px-4 py-3 text-sm rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white/50 dark:bg-[#0e172e]/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 dark:focus:ring-emerald-500/10 dark:focus:border-emerald-500 disabled:opacity-50 transition-all duration-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-600 resize-y"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Live URL
                </label>
                <input
                  type="url"
                  value={liveLink}
                  onChange={(e) => setLiveLink(e.target.value)}
                  placeholder="e.g. https://myproject.com"
                  disabled={actionLoading}
                  className="w-full px-4 py-3 text-sm rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white/50 dark:bg-[#0e172e]/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 dark:focus:ring-emerald-500/10 dark:focus:border-emerald-500 disabled:opacity-50 transition-all duration-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  GitHub Repository URL
                </label>
                <input
                  type="url"
                  value={githubLink}
                  onChange={(e) => setGithubLink(e.target.value)}
                  placeholder="e.g. https://github.com/user/repo"
                  disabled={actionLoading}
                  className="w-full px-4 py-3 text-sm rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white/50 dark:bg-[#0e172e]/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 dark:focus:ring-emerald-500/10 dark:focus:border-emerald-500 disabled:opacity-50 transition-all duration-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Project Logo URL
                </label>
                <input
                  type="url"
                  value={logo}
                  onChange={(e) => setLogo(e.target.value)}
                  placeholder="e.g. https://myproject.com/logo.png"
                  disabled={actionLoading}
                  className="w-full px-4 py-3 text-sm rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white/50 dark:bg-[#0e172e]/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 dark:focus:ring-emerald-500/10 dark:focus:border-emerald-500 disabled:opacity-50 transition-all duration-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Project Thumbnail URL
                </label>
                <input
                  type="url"
                  value={thumbnail}
                  onChange={(e) => setThumbnail(e.target.value)}
                  placeholder="e.g. https://myproject.com/thumbnail.png"
                  disabled={actionLoading}
                  className="w-full px-4 py-3 text-sm rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white/50 dark:bg-[#0e172e]/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 dark:focus:ring-emerald-500/10 dark:focus:border-emerald-500 disabled:opacity-50 transition-all duration-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Technologies
                </label>
                <input
                  type="text"
                  value={technologies}
                  onChange={(e) => setTechnologies(e.target.value)}
                  placeholder="e.g. React, Node.js, MongoDB"
                  disabled={actionLoading}
                  className="w-full px-4 py-3 text-sm rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white/50 dark:bg-[#0e172e]/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 dark:focus:ring-emerald-500/10 dark:focus:border-emerald-500 disabled:opacity-50 transition-all duration-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-600"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={actionLoading}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 dark:from-emerald-600 dark:to-teal-600 dark:hover:from-emerald-500 dark:hover:to-teal-500 text-white rounded-2xl text-sm font-semibold shadow-[0_8px_20px_rgb(139,92,246,0.2)] dark:shadow-[0_8px_20px_rgb(16,185,129,0.2)] active:scale-95 disabled:opacity-50 transition-all duration-300 flex justify-center items-center gap-2"
                >
                  {actionLoading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : editingProjectId ? (
                    'Save Changes'
                  ) : (
                    'Publish Project'
                  )}
                </button>
                {editingProjectId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    disabled={actionLoading}
                    className="px-6 py-3 border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 bg-white dark:bg-[#111827]/60 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer shadow-sm hover:shadow active:scale-95"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Projects List Container */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between bg-white/50 dark:bg-[#0b1329]/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 px-6 py-4 rounded-3xl">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-violet-500 dark:text-emerald-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                </svg>
               Project Portfolio
            </h3>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              {projects.length} {projects.length === 1 ? 'Project' : 'Projects'}
            </span>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="border border-slate-200/60 dark:border-slate-800/60 p-6 rounded-3xl bg-white/50 dark:bg-[#0b1329]/50 animate-pulse h-56"></div>
              ))}
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20 border-2 border-dashed border-slate-200 dark:border-slate-800/80 rounded-3xl bg-white/30 dark:bg-black/10">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.685-.34-1.39-.744-2.085-1.202M6.16 11.739c.325.215.65.418.975.61M2.25 12c0 4.28 3.47 7.75 7.75 7.75 1.135 0 2.222-.243 3.203-.683M21.75 12c0-4.28-3.47-7.75-7.75-7.75-1.135 0-2.222.243-3.203.683M12 21.75c-4.28 0-7.75-3.47-7.75-7.75M21.75 12c0 4.28-3.47 7.75-7.75 7.75m-6.75-6.75A9.004 9.004 0 0 1 12 3c1.24 0 2.417.25 3.493.704M12 12V3" />
                </svg>
              </div>
              <h4 className="text-slate-900 dark:text-white font-semibold mb-1 text-lg">Portfolio is empty</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">Use the form on the left to add your first project and build out your portfolio.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project._id}
                  className="bg-white/80 dark:bg-[#0b1329]/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-xl hover:border-violet-200 dark:hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        {(project.logo || project.title?.toLowerCase().includes('fitness')) ? (
                          <img 
                            src={project.logo || '/projects/ff logo.png'} 
                            alt={`${project.title} logo`} 
                            className="w-10 h-10 rounded-xl object-cover border border-slate-200 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/50 shrink-0" 
                          />
                        ) : project.thumbnail ? (
                          <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="w-10 h-10 rounded-xl object-cover border border-slate-200 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/50 shrink-0" />
                        ) : null}
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white break-words line-clamp-2 group-hover:text-violet-600 dark:group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h4>
                      </div>
                      <div className="flex gap-1.5 flex-shrink-0 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => startEdit(project)}
                          disabled={actionLoading}
                          className="p-1.5 text-slate-500 hover:text-violet-600 dark:hover:text-emerald-400 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-all cursor-pointer shadow-sm hover:shadow"
                          title="Edit Project"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(project._id)}
                          disabled={actionLoading}
                          className="p-1.5 text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-all cursor-pointer shadow-sm hover:shadow"
                          title="Delete Project"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 break-words line-clamp-3 mb-5 leading-relaxed">
                      {project.shortDescription}
                    </p>
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-slate-100 dark:bg-[#1a233a] text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-700/50 mt-auto">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-emerald-400 flex items-center gap-1.5 transition-colors group/link"
                      >
                        <svg className="w-4 h-4 text-slate-400 group-hover/link:text-violet-600 dark:group-hover/link:text-emerald-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
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
                        className="text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-emerald-400 flex items-center gap-1.5 transition-colors ml-auto group/link"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-slate-400 group-hover/link:text-violet-600 dark:group-hover/link:text-emerald-400 transition-colors">
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
