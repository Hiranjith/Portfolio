import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaUserAlt, FaFolder, FaGithub } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTailwindcss } from 'react-icons/si'
import Experience from './Experience'
import Contact from './Contact'

function MainBody() {
  const [skills, setSkills] = useState([])
  const [projects, setProjects] = useState([])
  const [loadingSkills, setLoadingSkills] = useState(true)
  const [loadingProjects, setLoadingProjects] = useState(true)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('/api/skills')
        const data = await response.json()
        if (response.ok) {
          setSkills(Array.isArray(data) ? data : [])
        } else {
          setSkills([])
        }
      } catch (err) {
        console.error('Error fetching skills:', err)
        setSkills([])
      } finally {
        setLoadingSkills(false)
      }
    }
    fetchSkills()
  }, [])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects')
        const data = await response.json()
        if (response.ok) {
          setProjects(Array.isArray(data) ? data : [])
        } else {
          setProjects([])
        }
      } catch (err) {
        console.error('Error fetching projects:', err)
        setProjects([])
      } finally {
        setLoadingProjects(false)
      }
    }
    fetchProjects()
  }, [])

  // Hardcoded icons or logic for specific skills could go here if needed
  // Assuming the DB returns the skill name and optionally logo

  return (
    <div className="space-y-[48px] lg:space-y-[80px]">
      
      {/* Skills Section */}
      <section id="skills" className="space-y-[24px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-[32px] h-[32px] bg-[#00D9A5] rounded-[7px] flex items-center justify-center text-[#050A14]">
              <FaUserAlt size={16} />
            </div>
            <h2 className="text-[20px] lg:text-[22px] font-[750] text-[#F5F7FA] tracking-tight">Skills</h2>
          </div>
          <button className="flex items-center gap-2 text-[#00D9A5] font-semibold text-[13px] lg:text-[14px] hover:text-[#00B98B] transition-colors">
            <span className="hidden lg:inline">View All Skills</span>
            <span className="lg:hidden">View All</span>
            <FiArrowRight />
          </button>
        </div>

        {loadingSkills ? (
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-[16px] animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-[64px] bg-[#09111F] rounded-[12px] border border-[#18283D]"></div>
            ))}
          </div>
        ) : skills.length === 0 ? (
          <div className="py-8 text-center border border-dashed border-[#18283D] rounded-xl">
            <p className="text-sm text-[#8FA7C4]">No skills added yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-[12px] lg:gap-[16px]">
            {skills.slice(0, 6).map((skillItem) => {
              const skillName = skillItem.skill.toLowerCase()
              let Icon = <span className="font-mono text-[#00D9A5]">{'{}'}</span>
              if (skillName.includes('react')) Icon = <SiReact className="text-[#00D9A5] text-[18px]" />
              else if (skillName.includes('node')) Icon = <SiNodedotjs className="text-[#00D9A5] text-[18px]" />
              else if (skillName.includes('express')) Icon = <span className="text-[#A0B3C6] font-[500] text-[16px] leading-none">ex</span>
              else if (skillName.includes('mongo')) Icon = <SiMongodb className="text-[#00D9A5] text-[18px]" />
              else if (skillName.includes('java') || skillName.includes('js')) Icon = <SiJavascript className="text-[#FFD700] text-[16px]" />
              else if (skillName.includes('tailwind')) Icon = <SiTailwindcss className="text-[#47bfff] text-[18px]" />

              return (
                <div 
                  key={skillItem._id}
                  className="bg-transparent lg:bg-[#09111F] border border-[#18283D] h-[48px] lg:h-[64px] px-[12px] lg:px-[16px] rounded-[10px] lg:rounded-[12px] flex items-center justify-start lg:justify-center gap-[10px] lg:gap-3 hover:border-[#00D9A5]/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-[24px]">
                    {Icon}
                  </div>
                  <span className="text-[13px] lg:text-[14px] font-[600] text-[#F5F7FA] whitespace-nowrap overflow-hidden text-ellipsis">
                    {skillItem.skill}
                  </span>
                </div>
              )
            })}
          </div>
        )}
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-[24px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-[32px] h-[32px] bg-[#00D9A5] rounded-[7px] flex items-center justify-center text-[#050A14]">
              <FaFolder size={16} />
            </div>
            <h2 className="text-[20px] lg:text-[22px] font-[750] text-[#F5F7FA] tracking-tight">Projects</h2>
          </div>
          <button className="flex items-center gap-2 text-[#00D9A5] font-semibold text-[13px] lg:text-[14px] hover:text-[#00B98B] transition-colors">
            <span className="hidden lg:inline">View All Projects</span>
            <span className="lg:hidden">View All</span>
            <FiArrowRight />
          </button>
        </div>

        {loadingProjects ? (
          <div className="flex gap-6 overflow-hidden pb-4 animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="w-full lg:w-1/3 h-[240px] bg-[#09111F] rounded-[16px] border border-[#18283D]"></div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="py-12 text-center border border-dashed border-[#18283D] rounded-xl">
            <p className="text-sm text-[#8FA7C4]">No projects added yet.</p>
          </div>
        ) : (
          <div className="relative">
            {/* Horizontal scroll container for mobile, grid for desktop */}
            <div className="flex lg:grid lg:grid-cols-3 gap-[24px] overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 lg:pb-0">
              {projects.slice(0, 3).map((project) => (
                <div 
                  key={project._id}
                  className="w-full max-w-full lg:w-auto lg:max-w-none shrink-0 snap-center bg-transparent border-transparent lg:bg-[#09111F] lg:border-[#18283D] p-0 lg:p-[24px] rounded-[16px] h-auto lg:h-[280px] transition-all duration-300"
                >
                  
                  {/* --- MOBILE CARD DESIGN --- */}
                  <div className="w-full overflow-hidden lg:hidden flex flex-col justify-between h-full bg-[#061210] border border-[#142A22] rounded-[16px] p-[16px] hover:border-[#00D9A5]/30 transition-all duration-300">
                    <div className="flex flex-col gap-[12px]">
                      
                      {/* Logo and Title+Desc */}
                      <div className="flex gap-[12px] items-start w-full">
                        {project.logo && (
                          <div className="h-[52px] w-[52px] rounded-[10px] bg-[#050A14] overflow-hidden shrink-0 border border-[#142A22]">
                            <img src={project.logo} alt="logo" className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0"> {/* min-w-0 prevents horizontal overflow crop */}
                          <h3 className="text-[15px] font-[700] text-[#F5F7FA] tracking-tight leading-[1.2] mb-[4px] line-clamp-2 break-words">
                            {project.title}
                          </h3>
                          <p className="text-[12px] text-[#8FA7C4] line-clamp-2 leading-[1.4] break-words whitespace-normal">
                            {project.shortDescription}
                          </p>
                        </div>
                      </div>

                      {/* Tech Tags */}
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-[6px]">
                          {project.technologies.slice(0, 4).map((tag, i) => (
                            <span 
                              key={i}
                              className="px-[10px] py-[4px] text-[10px] font-[600] rounded-[6px] bg-[#00D9A5]/10 text-[#00D9A5] border border-[#00D9A5]/20 tracking-wide"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Footer Links */}
                    <div className="flex items-center justify-between pt-[16px] mt-[16px]">
                      <a
                        href={project.githubLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-[13px] font-[500] flex items-center gap-[6px] transition-colors ${project.githubLink ? 'text-[#F5F7FA] hover:text-[#00D9A5]' : 'text-[#8FA7C4] pointer-events-none'}`}
                      >
                        <FaGithub size={16} />
                        <span>GitHub</span>
                      </a>
                      
                      <a
                        href={project.liveLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`h-[32px] px-[16px] rounded-full text-[12px] font-[600] flex items-center gap-[6px] transition-all ${project.liveLink ? 'bg-[#00D9A5]/10 text-[#00D9A5] border border-[#00D9A5]/30 hover:bg-[#00D9A5]/20' : 'bg-[#00D9A5]/10 text-[#00D9A5] border border-[#00D9A5]/30 opacity-70'}`}
                      >
                        <span>Live Demo</span>
                        <FiArrowRight size={14} />
                      </a>
                    </div>
                  </div>

                  {/* --- DESKTOP CARD DESIGN --- */}
                  <div className="hidden lg:flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-3 mb-[16px]">
                        {project.logo && (
                          <div className="h-[36px] w-[36px] rounded-[8px] bg-white overflow-hidden shrink-0">
                            <img src={project.logo} alt="logo" className="w-full h-full object-cover" />
                          </div>
                        )}
                        <h3 className="text-[16px] font-[700] text-[#F5F7FA] tracking-tight leading-tight line-clamp-2">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-[13px] text-[#8FA7C4] line-clamp-3 leading-relaxed mb-[16px] break-words whitespace-normal">
                        {project.shortDescription}
                      </p>

                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-[16px]">
                          {project.technologies.slice(0, 4).map((tag, i) => (
                            <span 
                              key={i}
                              className="px-[8px] py-[4px] text-[10px] font-[700] rounded-[4px] bg-[#00B98B]/10 text-[#00D9A5] border border-[#00B98B]/20 uppercase tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <a
                        href={project.githubLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-[13px] font-[600] flex items-center gap-2 transition-colors ${project.githubLink ? 'text-[#F5F7FA] hover:text-[#00D9A5]' : 'text-[#8FA7C4] pointer-events-none'}`}
                      >
                        <FaGithub size={16} />
                        <span>GitHub</span>
                      </a>
                      
                      <a
                        href={project.liveLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`h-[32px] px-[16px] rounded-full text-[12px] font-[700] flex items-center gap-2 transition-all ${project.liveLink ? 'bg-[#00B98B]/10 text-[#00D9A5] border border-[#00B98B]/30 hover:bg-[#00B98B]/20' : 'bg-[#00B98B]/10 text-[#00D9A5] border border-[#00B98B]/30 opacity-70'}`}
                      >
                        <span>Live Demo</span>
                        <FiArrowRight size={14} />
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
            
            {/* Mobile Pagination Dots */}
            <div className="lg:hidden flex justify-center items-center gap-[6px] mt-[12px]">
              <div className="w-[16px] h-[6px] rounded-full bg-[#00D9A5]"></div>
              <div className="w-[6px] h-[6px] rounded-full bg-[#18283D]"></div>
              <div className="w-[6px] h-[6px] rounded-full bg-[#18283D]"></div>
            </div>
          </div>
        )}
      </section>

      <Experience />
      <Contact />

    </div>
  )
}

export default MainBody
