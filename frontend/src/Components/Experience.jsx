import React from 'react'
import { MdOutlineWork } from 'react-icons/md'
import { FiArrowRight } from 'react-icons/fi'

function Experience() {
  const experiences = [
    {
      id: 1,
      duration: '2022 - 2025',
      role: 'Software Engineer',
      company: 'Servion Global Solutions – Bengaluru, India',
      description: 'Working on real-world projects using the React. Collaborating with the team to build scalable web applications.'
    }
  ]

  return (
    <section id="experience" className="hidden md:block space-y-[24px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[32px] h-[32px] bg-[#00B98B] rounded-[7px] flex items-center justify-center text-[#050A14]">
            <MdOutlineWork size={16} />
          </div>
          <h2 className="text-[22px] font-[750] text-[#F5F7FA] tracking-tight">Experience</h2>
        </div>
        <button className="flex items-center gap-2 text-[#00D9A5] font-semibold text-[14px] hover:text-[#00B98B] transition-colors">
          <span>View All Experience</span>
          <FiArrowRight />
        </button>
      </div>
      
      <div className="space-y-0 pl-2">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="flex gap-[32px]">
            <div className="w-[120px] shrink-0 text-[#8FA7C4] text-[14px] font-[600] pt-1">
              {exp.duration}
            </div>

            <div className="relative flex flex-col items-center">
              <div className="w-[16px] h-[16px] rounded-full border-4 border-[#050A14] bg-[#00D9A5] z-10 shadow-[0_0_0_4px_rgba(0,217,165,0.1)]"></div>
              {index !== experiences.length - 1 && (
                <div className="w-[2px] flex-grow bg-[#18283D] my-2 min-h-[80px]"></div>
              )}
            </div>

            <div className="flex-1 pb-[32px]">
              <h3 className="text-[18px] font-[700] text-[#F5F7FA] leading-snug">
                {exp.role}
              </h3>
              <p className="text-[14px] font-[600] text-[#00D9A5] mt-[4px]">
                {exp.company}
              </p>
              <p className="text-[14px] text-[#8FA7C4] mt-[12px] leading-relaxed max-w-[800px]">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
