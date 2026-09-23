import React, { useState } from 'react'
import SkillManager from '../Components/SkillManager'
import ProjectManager from '../Components/ProjectManager'
import MessageManager from '../Components/MessageManager'

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('projects')

  return (
    <div className="space-y-8 py-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800/60">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-white mb-2">
            Admin Control Center
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl">
            Manage your portfolio content. Add new projects, update existing ones, or refine your professional skills list.
          </p>
        </div>
        
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20 shadow-sm backdrop-blur-sm self-start md:self-auto">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Live Session Active
        </span>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 p-1.5 bg-slate-100/50 dark:bg-[#0e172e]/50 backdrop-blur-md rounded-2xl border border-slate-200/50 dark:border-slate-800/50 max-w-fit">
        <button
          onClick={() => setActiveTab('projects')}
          className={`flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
            activeTab === 'projects'
              ? 'bg-white dark:bg-[#1a233a] text-violet-600 dark:text-violet-400 shadow-sm border border-slate-200/50 dark:border-slate-700/50'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-white/5'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
          </svg>
          Projects
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
            activeTab === 'skills'
              ? 'bg-white dark:bg-[#1a233a] text-emerald-600 dark:text-emerald-400 shadow-sm border border-slate-200/50 dark:border-slate-700/50'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-white/5'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
             <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 21l8.982-5.025a9 9 0 0 0 4.162-7.999V6.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v3.602c0 3.224 1.704 6.22 4.51 7.998L9.813 15.904Z" />
             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6h19.5M12 5.25v2.25M9 6h6" />
          </svg>
          Skills
        </button>
        <button
          onClick={() => setActiveTab('messages')}
          className={`flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
            activeTab === 'messages'
              ? 'bg-white dark:bg-[#1a233a] text-blue-600 dark:text-blue-400 shadow-sm border border-slate-200/50 dark:border-slate-700/50'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-white/5'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          Messages
        </button>
      </div>

      <div className="mt-8 transition-all duration-500">
        {activeTab === 'projects' && <ProjectManager />}
        {activeTab === 'skills' && <SkillManager />}
        {activeTab === 'messages' && <MessageManager />}
      </div>
    </div>
  )
}

export default AdminDashboard