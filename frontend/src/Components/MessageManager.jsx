import React, { useState, useEffect } from 'react'
import * as XLSX from 'xlsx'
import { FiDownload, FiTrash2, FiMail, FiPhone, FiCalendar, FiClock } from 'react-icons/fi'

function MessageManager() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [deletingId, setDeletingId] = useState(null)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/forms')
      if (!res.ok) throw new Error('Failed to fetch messages')
      const data = await res.json()
      // Sort messages by createdAt descending (newest first)
      const sortedData = Array.isArray(data) ? data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) : []
      setMessages(sortedData)
    } catch (err) {
      console.error(err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return

    try {
      setDeletingId(id)
      const res = await fetch(`/api/forms/${id}`, {
        method: 'DELETE'
      })
      if (!res.ok) throw new Error('Failed to delete message')
      
      setMessages(messages.filter(msg => msg._id !== id))
    } catch (err) {
      console.error(err)
      alert('Error deleting message')
    } finally {
      setDeletingId(null)
    }
  }

  const exportToExcel = () => {
    if (messages.length === 0) {
      alert('No messages to export')
      return
    }

    // Format data for Excel
    const dataToExport = messages.map((msg, index) => {
      const dateObj = msg.createdAt ? new Date(msg.createdAt) : null
      return {
        'SL No': index + 1,
        'Name': msg.name,
        'Email': msg.email,
        'Mobile No': msg.number,
        'Message': msg.message,
        'Date': dateObj ? dateObj.toLocaleDateString() : 'N/A',
        'Time': dateObj ? dateObj.toLocaleTimeString() : 'N/A'
      }
    })

    // Create a new workbook and add the worksheet
    const worksheet = XLSX.utils.json_to_sheet(dataToExport)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Messages')

    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, `Portfolio_Messages_${new Date().toISOString().split('T')[0]}.xlsx`)
  }

  if (loading) {
    return <div className="text-center py-10 text-slate-500">Loading messages...</div>
  }

  if (error && messages.length === 0) {
    return (
      <div className="text-center py-10 text-rose-500">
        <p>Error: {error}</p>
        <button onClick={fetchMessages} className="mt-4 px-4 py-2 bg-slate-200 dark:bg-slate-800 rounded-lg">Retry</button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white dark:bg-[#1a233a] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Contact Messages</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            You have {messages.length} total messages
          </p>
        </div>
        <button
          onClick={exportToExcel}
          disabled={messages.length === 0}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FiDownload />
          Export to Excel
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {messages.length === 0 ? (
          <div className="text-center py-10 bg-white dark:bg-[#1a233a] rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400">No messages found.</p>
          </div>
        ) : (
          messages.map(msg => {
            const dateObj = msg.createdAt ? new Date(msg.createdAt) : null
            return (
              <div key={msg._id} className="bg-white dark:bg-[#1a233a] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-6 hover:border-emerald-500/30 transition-colors">
                
                {/* Info Section */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{msg.name}</h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-600 dark:text-slate-400">
                        <a href={`mailto:${msg.email}`} className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors">
                          <FiMail className="w-4 h-4" /> {msg.email}
                        </a>
                        <a href={`tel:${msg.number}`} className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors">
                          <FiPhone className="w-4 h-4" /> {msg.number}
                        </a>
                      </div>
                    </div>
                    {dateObj && (
                      <div className="flex flex-col items-end text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg">
                        <span className="flex items-center gap-1.5"><FiCalendar /> {dateObj.toLocaleDateString()}</span>
                        <span className="flex items-center gap-1.5 mt-0.5"><FiClock /> {dateObj.toLocaleTimeString()}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-[#0e172e]/50 p-4 rounded-xl text-sm text-slate-700 dark:text-slate-300 leading-relaxed border border-slate-100 dark:border-slate-800/50">
                    {msg.message || <span className="italic text-slate-400">No message content.</span>}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex md:flex-col justify-end gap-2 shrink-0 md:pl-6 md:border-l border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => handleDelete(msg._id)}
                    disabled={deletingId === msg._id}
                    className="flex items-center justify-center gap-2 w-full md:w-auto px-4 py-2 bg-rose-50 text-rose-600 hover:bg-rose-100 dark:bg-rose-500/10 dark:text-rose-400 dark:hover:bg-rose-500/20 rounded-xl font-medium transition-colors disabled:opacity-50"
                  >
                    <FiTrash2 />
                    {deletingId === msg._id ? 'Deleting...' : 'Delete'}
                  </button>
                </div>

              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default MessageManager
