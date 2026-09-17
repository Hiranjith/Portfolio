import React from 'react'
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'
import { MdOutlineWork, MdLocationOn } from 'react-icons/md'
import { FiCode, FiArrowRight } from 'react-icons/fi'

function Banner() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-[40px] pt-[10px] md:pt-[40px] pb-0">
      
      {/* Left Column */}
      <div className="flex-1 space-y-[24px] text-left z-10 w-full">
        <div className="space-y-[8px]">
          <div className="text-[#00D9A5] font-[700] text-[12px] md:text-[14px] tracking-widest uppercase">Mern Stack Developer</div>
          <h1 className="text-[40px] md:text-[64px] font-[800] text-[#F5F7FA] leading-[1.1] tracking-tight">
            Hiranjith <span className="text-[#00D9A5]">E M</span>
          </h1>
        </div>
        
        <p className="text-[#A0B3C6] text-[16px] md:text-[18px] leading-[1.6] max-w-[480px]">
          I build modern, responsive and scalable web applications using the MERN stack.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-row items-center justify-start gap-[12px] md:gap-[16px] w-full">
          <button className="flex-1 md:flex-none justify-center bg-[#00D9A5] text-[#050A14] px-[16px] md:px-[24px] py-[12px] rounded-xl font-[600] flex items-center gap-2 hover:bg-[#00B98D] transition-colors">
            View My Work <FiArrowRight size={16} />
          </button>
          <button className="flex-1 md:flex-none justify-center border border-[#18283D] text-[#A0B3C6] px-[16px] md:px-[24px] py-[12px] rounded-xl font-[600] hover:bg-[#18283D] transition-colors">
            Contact Me
          </button>
        </div>

        {/* Socials */}
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] rounded-xl bg-[#09111F] flex items-center justify-center text-[#A0B3C6] hover:text-[#00D9A5] hover:bg-[#00D9A5]/10 transition-colors border border-[#18283D]">
            <FaLinkedinIn size={18} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] rounded-xl bg-[#09111F] flex items-center justify-center text-[#A0B3C6] hover:text-[#00D9A5] hover:bg-[#00D9A5]/10 transition-colors border border-[#18283D]">
            <FaGithub size={18} />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] rounded-xl bg-[#09111F] flex items-center justify-center text-[#A0B3C6] hover:text-[#00D9A5] hover:bg-[#00D9A5]/10 transition-colors border border-[#18283D]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 relative flex items-center justify-center md:justify-end mt-[10px] md:mt-0 mb-[120px] md:mb-0 pr-0 md:pr-[80px] w-full">
        
        {/* Image */}
        <div className="relative z-10 w-[360px] md:w-[580px] left-[10px] md:left-auto md:right-[60px] pt-[0px] md:pt-[30px] pointer-events-none flex justify-center">
          <img 
            src="/profile%20picture.png" 
            alt="Hiranjith E M" 
            className="w-full h-auto object-cover" 
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
            }} 
          />
        </div>

        {/* Handwriting */}
        <div className="absolute right-[-10px] bottom-[0px] md:right-[60px] md:bottom-[40px] z-20 -rotate-12">
          <span className="font-['Caveat'] text-[24px] md:text-[40px] text-[#A0B3C6] leading-[1]">Keep<br/>Building</span>
          <div className="w-[40px] md:w-[60px] h-[2px] bg-[#A0B3C6] mt-1 -rotate-6"></div>
        </div>

        {/* Stats Vertical (Desktop) / Horizontal (Mobile) */}
        <div className="absolute -bottom-[100px] md:bottom-auto left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:-right-[40px] md:top-[5%] w-[calc(100vw-48px)] md:w-auto flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start gap-[8px] md:gap-[32px] z-20 bg-[#0A1613] md:bg-transparent border border-[#143026] md:border-transparent rounded-2xl md:rounded-none px-[16px] py-[16px] md:p-0 shadow-xl md:shadow-none">
          
          <div className="flex flex-row items-center md:items-start gap-[8px] md:gap-[16px]">
            <div className="w-auto h-auto md:w-[48px] md:h-[48px] md:rounded-full bg-transparent md:bg-[#061814] flex items-center justify-center text-[#00D9A5] shadow-none md:shadow-lg md:shadow-black/30 md:border md:border-[#092B21]">
              <MdOutlineWork size={20} className="md:w-[20px] md:h-[20px] w-[20px] h-[20px]" />
            </div>
            <div className="text-left pt-[2px] md:pt-[4px]">
              <div className="text-[14px] md:text-[18px] font-[700] text-[#F5F7FA] leading-tight">3+</div>
              <div className="text-[11px] md:text-[12px] text-[#8FA7C4]">Experience</div>
            </div>
          </div>

          <div className="flex flex-row items-center md:items-start gap-[8px] md:gap-[16px]">
            <div className="w-auto h-auto md:w-[48px] md:h-[48px] md:rounded-full bg-transparent md:bg-[#061814] flex items-center justify-center text-[#00D9A5] shadow-none md:shadow-lg md:shadow-black/30 md:border md:border-[#092B21]">
              <FiCode size={20} className="md:w-[20px] md:h-[20px] w-[20px] h-[20px]" />
            </div>
            <div className="text-left pt-[2px] md:pt-[4px]">
              <div className="text-[14px] md:text-[18px] font-[700] text-[#F5F7FA] leading-tight">10+</div>
              <div className="text-[11px] md:text-[12px] text-[#8FA7C4]">Projects</div>
            </div>
          </div>

          <div className="flex flex-row items-center md:items-start gap-[8px] md:gap-[16px]">
            <div className="w-auto h-auto md:w-[48px] md:h-[48px] md:rounded-full bg-transparent md:bg-[#061814] flex items-center justify-center text-[#00D9A5] shadow-none md:shadow-lg md:shadow-black/30 md:border md:border-[#092B21]">
              <MdLocationOn size={20} className="md:w-[20px] md:h-[20px] w-[20px] h-[20px]" />
            </div>
            <div className="text-left pt-[2px] md:pt-[4px]">
              <div className="text-[14px] md:text-[18px] font-[700] text-[#F5F7FA] leading-tight">India</div>
              <div className="text-[11px] md:text-[12px] text-[#8FA7C4]">Kerala</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Banner
