import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineWork } from 'react-icons/md'
import { FiArrowRight } from 'react-icons/fi'
import { IoLocationOutline } from 'react-icons/io5'

function Experience() {
  const experiences = [
    {
      id: 2,
      durationStart: '2025',
      durationEnd: 'Present',
      role: 'Freelance Full-Stack Developer',
      company: 'Freelance',
      location: 'Remote / Global',
      link: '/experience#freelance',
      description: 'Designed and developed scalable MERN-stack web applications and REST APIs for clients, leveraging AI tools to accelerate delivery.',
      skills: ['React', 'Node.js', 'REST APIs', 'SQL', 'Supabase', 'Generative AI']
    },
    {
      id: 1,
      durationStart: '2022',
      durationEnd: '2025',
      role: 'Software Engineer',
      company: 'Servion Global Solutions',
      location: 'Bengaluru, India',
      link: '/experience#servion',
      description: 'Worked on real-world projects using React. Collaborated with the team to build scalable web applications.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS']
    }
  ]

  return (
    <section id="experience" className="space-y-[24px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[32px] h-[32px] bg-[#00D9A5] rounded-[7px] flex items-center justify-center text-[#050A14]">
            <MdOutlineWork size={16} />
          </div>
          <h2 className="text-[20px] lg:text-[22px] font-[750] text-[#F5F7FA] tracking-tight flex items-center gap-2">
            Experience <div className="w-[6px] h-[6px] bg-[#00D9A5] rounded-full mt-1"></div>
          </h2>
        </div>
        <Link to="/experience" className="flex items-center gap-2 text-[#00D9A5] font-semibold text-[13px] lg:text-[14px] hover:text-[#00B98B] transition-colors">
          <span className="hidden lg:inline">View All Experience</span>
          <span className="lg:hidden">View All</span>
          <FiArrowRight />
        </Link>
      </div>

      <p className="text-[14px] lg:text-[15px] text-[#8FA7C4]">
        My professional journey and key roles.
      </p>
      
      <div className="space-y-0 pt-4">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="flex gap-[16px] lg:gap-[32px]">
            {/* Left side (Years) */}
            <div className="w-[45px] lg:w-[80px] shrink-0 text-[#8FA7C4] text-[13px] lg:text-[14px] font-[500] pt-1 leading-tight lg:leading-normal">
              <span className="block lg:inline">{exp.durationStart} - </span>
              <span className="block lg:inline">{exp.durationEnd}</span>
            </div>

            {/* Middle Timeline */}
            <div className="relative flex flex-col items-center">
              <div className="w-[14px] h-[14px] rounded-full border-4 border-[#050A14] bg-[#00D9A5] z-10 mt-[6px]"></div>
              {/* Only show line if not the last item, or show it fading out. Assuming we want it to extend down to the card height */}
              <div className="w-[2px] flex-grow bg-gradient-to-b from-[#00D9A5]/50 to-transparent my-1 min-h-[200px]"></div>
            </div>

            {/* Right Card */}
            <div className="flex-1 pb-[32px]">
              <div className="bg-transparent border border-[#18283D] p-[16px] lg:p-[24px] rounded-[16px]">
                <h3 className="text-[16px] lg:text-[18px] font-[700] text-[#F5F7FA] leading-snug">
                  {exp.role}
                </h3>
                <p className="text-[14px] lg:text-[15px] font-[500] text-[#8FA7C4] mt-[4px]">
                  {exp.company}
                </p>
                
                <div className="flex items-center gap-[6px] text-[#8FA7C4] mt-[8px]">
                  <IoLocationOutline size={16} />
                  <span className="text-[13px]">{exp.location}</span>
                </div>

                <p className="text-[14px] text-[#8FA7C4] mt-[16px] leading-relaxed">
                  {exp.description}
                </p>

                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-[8px] mt-[20px]">
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-[12px] py-[6px] text-[12px] font-[500] rounded-[6px] bg-[#00D9A5]/10 text-[#00D9A5] border border-[#00D9A5]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 pt-4 border-t border-[#18283D] flex justify-end">
                  <Link to={exp.link} className="flex items-center gap-2 text-[13px] text-[#00D9A5] hover:text-[#00B98B] font-semibold transition-colors group">
                    View Details
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
