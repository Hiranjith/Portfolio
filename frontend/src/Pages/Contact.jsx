import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#message-form') {
      const element = document.getElementById('message-form');
      if (element) {
        // slight delay to ensure layout is complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submission logic placeholder
    console.log("Form data:", formData);
  };

  return (
    <div className="w-full text-[#F5F7FA] font-sans">
      
      {/* Top Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 lg:mb-10">
        <div className="lg:w-1/2 flex flex-col">
          <h4 className="text-[#00D9A5] text-[12px] font-bold tracking-[0.2em] uppercase mb-4">
            Get in touch
          </h4>
          <h1 className="text-4xl md:text-[48px] font-[800] leading-[1.1] mb-5 tracking-tight">
            Let's build <br className="hidden sm:block" />
            something great <br className="hidden sm:block" />
            <span className="text-[#00D9A5]">together.</span>
          </h1>
          <p className="text-[#94A3B8] text-[15px] md:text-[16px] leading-relaxed max-w-[500px]">
            I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology.
          </p>
        </div>

        {/* Illustration Banner */}
        <div className="hidden lg:flex lg:w-1/2 justify-end relative mt-8 lg:mt-0">
          <div className="w-full max-w-[480px] flex items-center justify-end relative">
            <img 
              src="/Banner/contact-banner.png" 
              alt="Contact Illustration" 
              className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-500 drop-shadow-[0_0_15px_rgba(0,217,165,0.1)]"
              style={{ WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)', maskImage: 'radial-gradient(circle, black 60%, transparent 100%)' }}
            />
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
        
        {/* Left Column: Contact Cards & Socials */}
        <div className="w-full lg:w-[45%] flex flex-col">
          
          {/* Contact Detail Cards & Socials */}
          <div className="flex flex-col gap-4 bg-[#0A111D]/40 backdrop-blur-sm border border-[#18283D] p-6 rounded-2xl h-full">
            
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[44px] rounded-xl bg-[#00D9A5]/10 flex items-center justify-center shrink-0 border border-[#00D9A5]/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] text-[#00D9A5]">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-white font-[700] text-[14px]">Email</span>
                <span className="text-[#F5F7FA] text-[15px] mt-1 break-all">hiranjithofficial@gmail.com</span>
                <span className="text-[#94A3B8] text-[12px] mt-0.5">I usually reply within 24 hours.</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#18283D]/50 my-2"></div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[44px] rounded-xl bg-[#00D9A5]/10 flex items-center justify-center shrink-0 border border-[#00D9A5]/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] text-[#00D9A5]">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-white font-[700] text-[14px]">Phone</span>
                <span className="text-[#F5F7FA] text-[15px] mt-1">+91 9074697393</span>
                <span className="text-[#94A3B8] text-[12px] mt-0.5">Feel free to call or WhatsApp.</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#18283D]/50 my-2"></div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[44px] rounded-xl bg-[#00D9A5]/10 flex items-center justify-center shrink-0 border border-[#00D9A5]/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] text-[#00D9A5]">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-white font-[700] text-[14px]">Location</span>
                <span className="text-[#F5F7FA] text-[15px] mt-1">Bengaluru, Karnataka</span>
                <span className="text-[#94A3B8] text-[12px] mt-0.5">Open to remote opportunities worldwide.</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#18283D]/50 my-2"></div>

            {/* Availability */}
            <div className="flex items-start gap-4">
              <div className="w-[44px] h-[44px] rounded-xl bg-[#00D9A5]/10 flex items-center justify-center shrink-0 border border-[#00D9A5]/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] text-[#00D9A5]">
                  <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm3 0v.205a48.815 48.815 0 013 0V5.25a1.5 1.5 0 00-1.5-1.5h-3a1.5 1.5 0 00-1.5 1.5z" clipRule="evenodd" />
                  <path d="M3 16.06V18c0 1.434 1.022 2.7 2.476 2.917.917.137 1.84.249 2.774.334v-1.5a.75.75 0 011.5 0v1.5a48.14 48.14 0 005.5 0v-1.5a.75.75 0 011.5 0v1.5c.933-.085 1.857-.197 2.774-.334C20.978 20.7 22 19.434 22 18v-1.94c-2.585 1.002-5.4 1.564-8.35 1.666a.75.75 0 01-.3 0C10.4 17.624 7.585 17.062 5 16.06z" />
                </svg>
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-white font-[700] text-[14px]">Availability</span>
                <span className="text-[#F5F7FA] text-[15px] mt-1">Open to new opportunities</span>
                <span className="text-[#94A3B8] text-[12px] mt-0.5">Full-time | Remote | Freelance</span>
              </div>
            </div>

            {/* Divider Before Socials */}
            <div className="w-full h-[1px] bg-[#18283D]/50 my-2"></div>

            {/* Social Connect */}
            <div className="pt-2">
              <h4 className="text-white font-[700] text-[16px] mb-1">Connect with me</h4>
              <p className="text-[#94A3B8] text-[13px] mb-4">Find me on these platforms.</p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/hiranjithem" target="_blank" rel="noopener noreferrer" className="w-[44px] h-[44px] flex items-center justify-center rounded-xl border border-[#18283D] hover:border-[#00D9A5] hover:text-[#00D9A5] transition-colors bg-[#0A111D]/40 text-[#94A3B8]">
                  {/* LinkedIn SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://github.com/Hiranjith" target="_blank" rel="noopener noreferrer" className="w-[44px] h-[44px] flex items-center justify-center rounded-xl border border-[#18283D] hover:border-[#00D9A5] hover:text-[#00D9A5] transition-colors bg-[#0A111D]/40 text-[#94A3B8]">
                  {/* GitHub SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://x.com/hiranjithem?s=11" target="_blank" rel="noopener noreferrer" className="w-[44px] h-[44px] flex items-center justify-center rounded-xl border border-[#18283D] hover:border-[#00D9A5] hover:text-[#00D9A5] transition-colors bg-[#0A111D]/40 text-[#94A3B8]">
                  {/* X SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/hiranjith_?stkn=dmN2N2o5OThvZnBm&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-[44px] h-[44px] flex items-center justify-center rounded-xl border border-[#18283D] hover:border-[#00D9A5] hover:text-[#00D9A5] transition-colors bg-[#0A111D]/40 text-[#94A3B8]">
                  {/* Instagram SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="mailto:hiranjithofficial@gmail.com" className="w-[44px] h-[44px] flex items-center justify-center rounded-xl border border-[#18283D] hover:border-[#00D9A5] hover:text-[#00D9A5] transition-colors bg-[#0A111D]/40 text-[#94A3B8]">
                  {/* Email Outline SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[18px] h-[18px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Form */}
        <div id="message-form" className="w-full lg:w-[55%] flex flex-col bg-[#0A111D]/40 backdrop-blur-sm border border-[#18283D] p-6 lg:p-8 rounded-2xl h-fit">
          <div className="mb-6">
            <h3 className="text-white font-[750] text-[20px] lg:text-[22px]">Send a message</h3>
            <p className="text-[#94A3B8] text-[13px] lg:text-[14px] mt-1">Fill out the form below and I'll get back to you soon.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-white text-[13px] font-medium">Your Name <span className="text-[#00D9A5]">*</span></label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  className="bg-[#050A14] border border-[#18283D] rounded-xl px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#00D9A5] transition-colors"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-white text-[13px] font-medium">Your Email <span className="text-[#00D9A5]">*</span></label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  className="bg-[#050A14] border border-[#18283D] rounded-xl px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#00D9A5] transition-colors"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white text-[13px] font-medium">Mobile Number</label>
              <input 
                type="tel" 
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+1 234 567 8900" 
                className="bg-[#050A14] border border-[#18283D] rounded-xl px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#00D9A5] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white text-[13px] font-medium">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..." 
                rows={5}
                className="bg-[#050A14] border border-[#18283D] rounded-xl px-4 py-3 text-[14px] text-white focus:outline-none focus:border-[#00D9A5] transition-colors resize-y"
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-[#00D9A5] hover:bg-[#00D9A5]/90 text-[#050A14] font-[700] rounded-xl py-3.5 mt-2 transition-colors flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
              Send Message
            </button>
          </form>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="border border-[#18283D] bg-[#0A111D]/40 backdrop-blur-sm rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row justify-between gap-8 lg:items-center">
        
        {/* Quote */}
        <div className="flex items-start gap-3 lg:max-w-[400px]">
          <span className="text-[#00D9A5] text-[36px] font-serif leading-none mt-1">“</span>
          <div className="flex flex-col pt-2">
            <p className="text-white font-[700] text-[14px] mb-2">"Great conversations lead to amazing opportunities."</p>
            <p className="text-[#94A3B8] text-[13px] leading-relaxed">Whether you have a project in mind, a job opportunity, or just want to connect, I'd love to hear from you.</p>
          </div>
        </div>

        {/* Vertical Divider (Desktop) / Horizontal Divider (Mobile) */}
        <div className="hidden lg:block w-[1px] h-[60px] bg-[#18283D]"></div>
        <div className="block lg:hidden w-full h-[1px] bg-[#18283D]"></div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 flex-1">
          
          <div className="flex flex-col gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[24px] h-[24px] text-[#00D9A5]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            <div>
              <p className="text-white font-[700] text-[13px]">New Opportunities</p>
              <p className="text-[#94A3B8] text-[12px] mt-0.5">Let's work together</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[24px] h-[24px] text-[#00D9A5]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
            <div>
              <p className="text-white font-[700] text-[13px]">Collaboration</p>
              <p className="text-[#94A3B8] text-[12px] mt-0.5">Open to interesting ideas</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[24px] h-[24px] text-[#00D9A5]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
            <div>
              <p className="text-white font-[700] text-[13px]">Just a Chat</p>
              <p className="text-[#94A3B8] text-[12px] mt-0.5">Always happy to connect</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;
