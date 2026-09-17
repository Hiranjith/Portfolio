import React, { useState } from 'react'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaUserAlt, FaLinkedin, FaGithub, FaQuoteLeft } from 'react-icons/fa'
import { FiUser, FiMail, FiPhone, FiArrowRight, FiMessageSquare, FiMapPin } from 'react-icons/fi'

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
    <section id="contact" className="space-y-[24px]">
      
      {/* DESKTOP HEADER */}
      <div className="hidden lg:flex items-center gap-3">
        <div className="w-[32px] h-[32px] bg-[#00B98B] rounded-[7px] flex items-center justify-center text-[#050A14]">
          <MdEmail size={16} />
        </div>
        <h2 className="text-[22px] font-[750] text-[#F5F7FA] tracking-tight">Contact Me</h2>
      </div>

      {/* MOBILE HEADER */}
      <div className="lg:hidden flex flex-col gap-[12px]">
        <div className="flex items-center gap-3">
          <div className="w-[32px] h-[32px] bg-[#00D9A5] rounded-[7px] flex items-center justify-center text-[#050A14]">
            <FaUserAlt size={16} />
          </div>
          <h2 className="text-[20px] font-[750] text-[#F5F7FA] tracking-tight flex items-center gap-2">
            Contact Me <div className="w-[6px] h-[6px] bg-[#00D9A5] rounded-full mt-1"></div>
          </h2>
        </div>
        <p className="text-[14px] text-[#8FA7C4] leading-relaxed">
          Let's connect! I'd love to hear about opportunities or interesting projects.
        </p>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-[32px] items-start">
        
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

          <div className="mt-auto pt-[8px]">
            {/* Quote Box */}
            <div className="bg-[#00D9A5]/5 border border-[#00D9A5]/20 rounded-[12px] p-[16px] flex gap-[12px] items-start">
              <FaQuoteLeft className="text-[#00D9A5] shrink-0 mt-1" size={16} />
              <p className="text-[13px] text-[#8FA7C4] leading-relaxed font-[500]">
                Open to new opportunities and exciting collaborations.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* MOBILE LAYOUT */}
      <div className="lg:hidden flex flex-col gap-[32px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-[16px] bg-transparent border border-[#18283D] p-[16px] rounded-[16px]">
          <div className="grid grid-cols-2 gap-[12px]">
            {/* Name Input */}
            <div className="relative">
              <FiUser className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#8FA7C4]" size={16} />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full h-[48px] pl-[40px] pr-[12px] bg-transparent border border-[#18283D] rounded-[8px] text-[13px] text-[#F5F7FA] placeholder-[#8FA7C4] focus:outline-none focus:border-[#00D9A5] transition-colors"
              />
            </div>
            {/* Email Input */}
            <div className="relative">
              <FiMail className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#8FA7C4]" size={16} />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full h-[48px] pl-[40px] pr-[12px] bg-transparent border border-[#18283D] rounded-[8px] text-[13px] text-[#F5F7FA] placeholder-[#8FA7C4] focus:outline-none focus:border-[#00D9A5] transition-colors"
              />
            </div>
          </div>
          
          {/* Phone Input */}
          <div className="relative">
            <FiPhone className="absolute left-[14px] top-1/2 -translate-y-1/2 text-[#8FA7C4]" size={16} />
            <input
              type="text"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full h-[48px] pl-[40px] pr-[16px] bg-transparent border border-[#18283D] rounded-[8px] text-[13px] text-[#F5F7FA] placeholder-[#8FA7C4] focus:outline-none focus:border-[#00D9A5] transition-colors"
            />
          </div>

          {/* Message Input */}
          <div className="relative">
            <FiMessageSquare className="absolute left-[14px] top-[16px] text-[#8FA7C4]" size={16} />
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full pl-[40px] pr-[16px] pt-[14px] pb-[14px] bg-transparent border border-[#18283D] rounded-[8px] text-[13px] text-[#F5F7FA] placeholder-[#8FA7C4] focus:outline-none focus:border-[#00D9A5] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full h-[48px] bg-[#00D9A5] hover:bg-[#00B98B] text-[#050A14] rounded-[8px] text-[14px] font-[700] flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
          >
            {submitting ? 'Sending...' : 'Send Message'}
            <FiArrowRight />
          </button>

          {/* Status messages for mobile */}
          <div className="text-center">
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

        {/* Contact Details & Footer Card */}
        <div className="flex flex-col gap-[24px]">
          <div className="bg-transparent border border-[#18283D] p-[24px] rounded-[16px] flex flex-col gap-[32px]">
            
            {/* Contact Items */}
            <div className="flex flex-col gap-[24px]">
              
              <div className="flex items-center gap-[16px]">
                <div className="w-[44px] h-[44px] shrink-0 rounded-[12px] bg-[#00D9A5]/10 border border-[#00D9A5]/20 text-[#00D9A5] flex items-center justify-center">
                  <FiMail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-[700] text-[#8FA7C4] uppercase tracking-wider mb-[2px]">Email</span>
                  <span className="text-[14px] font-[500] text-[#F5F7FA]">hiranjithofficial@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center gap-[16px]">
                <div className="w-[44px] h-[44px] shrink-0 rounded-[12px] bg-[#00D9A5]/10 border border-[#00D9A5]/20 text-[#00D9A5] flex items-center justify-center">
                  <FiPhone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-[700] text-[#8FA7C4] uppercase tracking-wider mb-[2px]">Phone</span>
                  <span className="text-[14px] font-[500] text-[#F5F7FA]">+91 9074697393</span>
                </div>
              </div>

              <div className="flex items-center gap-[16px]">
                <div className="w-[44px] h-[44px] shrink-0 rounded-[12px] bg-[#00D9A5]/10 border border-[#00D9A5]/20 text-[#00D9A5] flex items-center justify-center">
                  <FiMapPin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-[700] text-[#8FA7C4] uppercase tracking-wider mb-[2px]">Location</span>
                  <span className="text-[14px] font-[500] text-[#F5F7FA]">Thrissur, Kerala, India - 680306</span>
                </div>
              </div>
            </div>

            {/* Follow Me */}
            <div className="flex flex-col gap-[16px]">
              <h3 className="text-[16px] font-[750] text-[#F5F7FA]">Follow Me</h3>
              <div className="flex items-center gap-[12px]">
                <a href="https://linkedin.com/in/hiranjith" target="_blank" rel="noopener noreferrer" className="w-[48px] h-[48px] rounded-[12px] bg-transparent border border-[#18283D] flex items-center justify-center text-[#F5F7FA] hover:border-[#00D9A5] hover:text-[#00D9A5] transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://github.com/hiranjith" target="_blank" rel="noopener noreferrer" className="w-[48px] h-[48px] rounded-[12px] bg-transparent border border-[#18283D] flex items-center justify-center text-[#F5F7FA] hover:border-[#00D9A5] hover:text-[#00D9A5] transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-[48px] h-[48px] rounded-[12px] bg-transparent border border-[#18283D] flex items-center justify-center text-[#F5F7FA] hover:border-[#00D9A5] hover:text-[#00D9A5] transition-colors">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>

            {/* Quote Box */}
            <div className="bg-[#00D9A5]/5 border border-[#00D9A5]/20 rounded-[12px] p-[16px] flex gap-[12px] items-start">
              <FaQuoteLeft className="text-[#00D9A5] shrink-0 mt-1" size={16} />
              <p className="text-[13px] text-[#8FA7C4] leading-relaxed font-[500]">
                Open to new opportunities and exciting collaborations.
              </p>
            </div>

          </div>

          <p className="text-center text-[12px] text-[#8FA7C4] pb-4">
            © 2026 Hiranjith E M.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Contact
