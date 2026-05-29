import React from 'react'
import SkillManager from '../Components/SkillManager'
import ProjectManager from '../Components/ProjectManager'

function AdminDashboard() {
  return (
    <div className="space-y-10 py-4">
      <div className="border-b border-slate-100 dark:border-slate-800/60 pb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-white">
            Admin Control Center
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Control center to manage your skills and projects.
          </p>
        </div>
        
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
          Live Admin Session
        </span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
        <div className="xl:col-span-1">
          <SkillManager />
        </div>

        <div className="xl:col-span-2">
          <ProjectManager />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard