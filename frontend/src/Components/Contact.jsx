import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    const numberValue = Number(formData.phone.replace(/[^0-9]/g, ''))
    if (isNaN(numberValue) || !formData.phone) {
      setSubmitStatus('error')
      setErrorMessage('Please enter a valid phone number.')
      setSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          number: numberValue,
          message: formData.message
        })
      })

      const data = await response.json()
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error('Error submitting contact form:', err)
      setSubmitStatus('error')
      setErrorMessage('Failed to connect to the server. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-violet-600 dark:bg-emerald-500 flex items-center justify-center text-white shadow-sm transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
          Contact Me
          <span className="text-violet-600 dark:text-emerald-400 text-2xl leading-none">•</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-4 flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white dark:bg-[#0b1329]/30 border border-slate-200/70 dark:border-slate-800/80 rounded-xl text-sm text-slate-850 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-violet-500 dark:focus:border-emerald-500 transition-all shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)]"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white dark:bg-[#0b1329]/30 border border-slate-200/70 dark:border-slate-800/80 rounded-xl text-sm text-slate-850 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-violet-500 dark:focus:border-emerald-500 transition-all shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)]"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-white dark:bg-[#0b1329]/30 border border-slate-200/70 dark:border-slate-800/80 rounded-xl text-sm text-slate-850 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-violet-500 dark:focus:border-emerald-500 transition-all shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)]"
              />
            </div>
          </div>
          <div className="relative flex-1">
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full min-h-[120px] px-4 py-3 bg-white dark:bg-[#0b1329]/30 border border-slate-200/70 dark:border-slate-800/80 rounded-xl text-sm text-slate-850 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-violet-500 dark:focus:border-emerald-500 transition-all shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)] resize-none"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-3 rounded-xl text-sm font-bold text-white shadow-md flex items-center justify-center gap-2 transition-all duration-350 cursor-pointer disabled:opacity-50
                bg-violet-600 hover:bg-violet-700 hover:shadow-violet-200 dark:hover:shadow-none
                dark:bg-emerald-600 dark:hover:bg-emerald-500"
            >
              <span>{submitting ? 'Sending...' : 'Send Message'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>

            {submitStatus === 'success' && (
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 animate-fade-in">
                ✓ Thank you! Your message has been saved successfully.
              </span>
            )}
            {submitStatus === 'error' && (
              <span className="text-xs font-semibold text-rose-650 dark:text-rose-450 animate-fade-in">
                ✗ {errorMessage}
              </span>
            )}
          </div>
        </form>

        <div className="bg-white dark:bg-[#0b1329]/40 border border-slate-200/60 dark:border-slate-800/60 p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between space-y-6 transition-all duration-300">
          
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-violet-50 dark:bg-emerald-950/20 text-violet-600 dark:text-emerald-400 shrink-0 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500">Email</h4>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-350 break-all mt-0.5">hiranjithofficial@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-violet-50 dark:bg-emerald-950/20 text-violet-600 dark:text-emerald-400 shrink-0 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.187-4.165-8.007-6.994l1.293-.97a2.25 2.25 0 0 0 .417-1.173V6.963c0-.501-.399-.904-.9-.1l-4.423-1.106c-.5-.125-.852.325-.852.84v1.372Z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500">Phone</h4>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-350 mt-0.5">+91 9074697393</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-violet-50 dark:bg-emerald-950/20 text-violet-600 dark:text-emerald-400 shrink-0 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500">Location</h4>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-350 mt-0.5">Thrissur, Kerala, India - 680306</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
