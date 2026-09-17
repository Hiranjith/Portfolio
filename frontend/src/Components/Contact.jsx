import React, { useState } from 'react'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

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
    <section id="contact" className="hidden md:block space-y-[24px]">
      <div className="flex items-center gap-3">
        <div className="w-[32px] h-[32px] bg-[#00B98B] rounded-[7px] flex items-center justify-center text-[#050A14]">
          <MdEmail size={16} />
        </div>
        <h2 className="text-[22px] font-[750] text-[#F5F7FA] tracking-tight">Contact Me</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px] items-start">
        
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-[16px] bg-[#09111F] p-[24px] rounded-[16px] border border-[#18283D]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px]">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full h-[48px] px-[16px] bg-[#050A14] border border-[#18283D] rounded-[8px] text-[14px] text-[#F5F7FA] placeholder-[#8FA7C4] focus:outline-none focus:border-[#00D9A5] transition-colors"
            />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full h-[48px] px-[16px] bg-[#050A14] border border-[#18283D] rounded-[8px] text-[14px] text-[#F5F7FA] placeholder-[#8FA7C4] focus:outline-none focus:border-[#00D9A5] transition-colors"
            />
            <input
              type="text"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full h-[48px] px-[16px] bg-[#050A14] border border-[#18283D] rounded-[8px] text-[14px] text-[#F5F7FA] placeholder-[#8FA7C4] focus:outline-none focus:border-[#00D9A5] transition-colors"
            />
          </div>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-[16px] bg-[#050A14] border border-[#18283D] rounded-[8px] text-[14px] text-[#F5F7FA] placeholder-[#8FA7C4] focus:outline-none focus:border-[#00D9A5] transition-colors resize-none"
          />
          <div className="flex items-center gap-[16px]">
            <button
              type="submit"
              disabled={submitting}
              className="h-[48px] px-[24px] bg-[#00D9A5] hover:bg-[#00B98B] text-[#050A14] rounded-[8px] text-[14px] font-[700] transition-colors cursor-pointer disabled:opacity-50"
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <span className="text-[13px] font-[600] text-[#00D9A5]">
                ✓ Message sent successfully.
              </span>
            )}
            {submitStatus === 'error' && (
              <span className="text-[13px] font-[600] text-rose-500">
                ✗ {errorMessage}
              </span>
            )}
          </div>
        </form>

        <div className="bg-[#09111F] border border-[#18283D] p-[24px] rounded-[16px] flex flex-col gap-[24px] h-full">
          
          <div className="flex items-start gap-[16px]">
            <div className="w-[40px] h-[40px] shrink-0 rounded-[8px] bg-[#050A14] border border-[#18283D] text-[#00D9A5] flex items-center justify-center">
              <MdEmail size={20} />
            </div>
            <div>
              <h4 className="text-[12px] font-[700] text-[#8FA7C4] uppercase tracking-wider">Email</h4>
              <p className="text-[14px] font-[600] text-[#F5F7FA] mt-[4px]">hiranjithofficial@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-[16px]">
            <div className="w-[40px] h-[40px] shrink-0 rounded-[8px] bg-[#050A14] border border-[#18283D] text-[#00D9A5] flex items-center justify-center">
              <MdPhone size={20} />
            </div>
            <div>
              <h4 className="text-[12px] font-[700] text-[#8FA7C4] uppercase tracking-wider">Phone</h4>
              <p className="text-[14px] font-[600] text-[#F5F7FA] mt-[4px]">+91 9074697393</p>
            </div>
          </div>

          <div className="flex items-start gap-[16px]">
            <div className="w-[40px] h-[40px] shrink-0 rounded-[8px] bg-[#050A14] border border-[#18283D] text-[#00D9A5] flex items-center justify-center">
              <MdLocationOn size={20} />
            </div>
            <div>
              <h4 className="text-[12px] font-[700] text-[#8FA7C4] uppercase tracking-wider">Location</h4>
              <p className="text-[14px] font-[600] text-[#F5F7FA] mt-[4px] leading-snug">Thrissur, Kerala, India - 680306</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
