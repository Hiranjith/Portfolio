import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaUserAlt, FaFolder, FaGithub } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTailwindcss, SiTypescript, SiGit, SiDocker } from 'react-icons/si'
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
          <Link to="/skills" className="flex items-center gap-2 text-[#00D9A5] font-semibold text-[13px] lg:text-[14px] hover:text-[#00B98B] transition-colors">
            <span className="hidden lg:inline">View All Skills</span>
            <span className="lg:hidden">View All</span>
            <FiArrowRight />
          </Link>
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
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-[12px] lg:gap-[16px]">
            {skills.slice(0, 9).map((skillItem) => {
              const skillName = skillItem.skill.toLowerCase()
              
              // Define mobile and desktop icons separately to handle sizes and original brand colors
              let IconMobile = <span className="font-mono text-[#00D9A5] text-[22px]">{'{}'}</span>
              let IconDesktop = <span className="font-mono text-[#00D9A5] text-[18px]">{'{}'}</span>

              if (skillName.includes('react')) {
                IconMobile = <SiReact className="text-[#61DAFB] text-[32px]" />
                IconDesktop = <SiReact className="text-[#00D9A5] text-[18px]" />
              }
              else if (skillName.includes('node')) {
                IconMobile = <SiNodedotjs className="text-[#339933] text-[32px]" />
                IconDesktop = <SiNodedotjs className="text-[#00D9A5] text-[18px]" />
              }
              else if (skillName.includes('express')) {
                IconMobile = <span className="text-[#8FA7C4] font-[400] text-[28px] leading-none tracking-tighter">ex</span>
                IconDesktop = <span className="text-[#A0B3C6] font-[500] text-[16px] leading-none">ex</span>
              }
              else if (skillName.includes('mongo')) {
                IconMobile = <SiMongodb className="text-[#47A248] text-[32px]" />
                IconDesktop = <SiMongodb className="text-[#00D9A5] text-[18px]" />
              }
              else if (skillName.includes('typescript') || skillName.includes('ts')) {
                IconMobile = <SiTypescript className="text-[#3178C6] text-[28px] rounded-[4px]" />
                IconDesktop = <SiTypescript className="text-[#1976d2] text-[16px]" />
              }
              else if (skillName.includes('java') || skillName.includes('js')) {
                IconMobile = <SiJavascript className="text-[#F7DF1E] text-[28px] rounded-[4px]" />
                IconDesktop = <SiJavascript className="text-[#FFD700] text-[16px]" />
              }
              else if (skillName.includes('tailwind')) {
                IconMobile = <SiTailwindcss className="text-[#06B6D4] text-[32px]" />
                IconDesktop = <SiTailwindcss className="text-[#47bfff] text-[18px]" />
              }
              else if (skillName.includes('git')) {
                IconMobile = <SiGit className="text-[#F05032] text-[32px]" />
                IconDesktop = <SiGit className="text-[#f4511e] text-[18px]" />
              }
              else if (skillName.includes('docker')) {
                IconMobile = <SiDocker className="text-[#2496ED] text-[32px]" />
                IconDesktop = <SiDocker className="text-[#0288d1] text-[18px]" />
              }

              return (
                <div key={skillItem._id}>
                  {/* --- MOBILE SKILL CARD DESIGN --- */}
                  <div className="lg:hidden flex flex-col items-center justify-center gap-[10px] bg-[#09111F] border border-[#18283D] rounded-[16px] aspect-square p-[12px] hover:border-[#00D9A5]/50 transition-all duration-300">
                    <div className="flex items-center justify-center h-[36px]">
                      {IconMobile}
                    </div>
                    <span className="text-[11px] font-[500] text-[#8FA7C4] whitespace-nowrap overflow-hidden text-ellipsis w-full text-center">
                      {skillItem.skill}
                    </span>
                  </div>

                  {/* --- DESKTOP SKILL CHIP DESIGN --- */}
                  <div className="hidden lg:flex bg-[#09111F] border border-[#18283D] h-[64px] px-[16px] rounded-[12px] items-center justify-center gap-3 hover:border-[#00D9A5]/50 transition-all duration-300">
                    <div className="flex items-center justify-center w-[24px]">
                      {IconDesktop}
                    </div>
                    <span className="text-[14px] font-[600] text-[#F5F7FA] whitespace-nowrap overflow-hidden text-ellipsis">
                      {skillItem.skill}
                    </span>
                  </div>
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
          <Link to="/projects" className="flex items-center gap-2 text-[#00D9A5] font-semibold text-[13px] lg:text-[14px] hover:text-[#00B98B] transition-colors">
            <span className="hidden lg:inline">View All Projects</span>
            <span className="lg:hidden">View All</span>
            <FiArrowRight />
          </Link>
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
                  className="w-full max-w-full lg:w-auto lg:max-w-none shrink-0 snap-center bg-transparent border-transparent lg:bg-[#09111F] lg:border-[#18283D] p-0 lg:p-[24px] rounded-[16px] h-auto lg:min-h-[320px] transition-all duration-300"
                >
                  
                  {/* --- MOBILE CARD DESIGN --- */}
                  <div className="w-full overflow-hidden lg:hidden flex flex-col justify-between h-full bg-[#061210] border border-[#142A22] rounded-[16px] p-[16px] hover:border-[#00D9A5]/30 transition-all duration-300">
                    <div className="flex flex-col gap-[12px]">
                      
                      {/* Thumbnail */}
                      {project.thumbnail && (
                        <div className="w-full h-[120px] rounded-[10px] overflow-hidden mb-[4px] border border-[#142A22]">
                          <img src={project.thumbnail} alt="thumbnail" className="w-full h-full object-cover" />
                        </div>
                      )}

                      {/* Logo and Title+Desc */}
                      <div className="flex gap-[12px] items-start w-full">
                        {(project.logo || project.title?.toLowerCase().includes('fitness')) && (
                          <div className={`h-[52px] w-[52px] rounded-[10px] overflow-hidden shrink-0 border border-[#142A22] ${project.title?.toLowerCase().includes('fitness') ? 'bg-transparent' : 'bg-white'}`}>
                            <img src={project.title?.toLowerCase().includes('fitness') ? '/projects/ff logo.png?v=2' : project.logo} alt="logo" className="w-full h-full object-contain" />
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
                      {/* Thumbnail */}
                      {project.thumbnail && (
                        <div className="w-full h-[140px] rounded-[10px] overflow-hidden mb-[16px] border border-[#18283D]">
                          <img src={project.thumbnail} alt="thumbnail" className="w-full h-full object-cover" />
                        </div>
                      )}

                      <div className="flex items-center gap-3 mb-[16px]">
                        {(project.logo || project.title?.toLowerCase().includes('fitness')) && (
                          <div className={`h-[36px] w-[36px] rounded-[8px] overflow-hidden shrink-0 ${project.title?.toLowerCase().includes('fitness') ? 'bg-transparent' : 'bg-white'}`}>
                            <img src={project.title?.toLowerCase().includes('fitness') ? '/projects/ff logo.png?v=2' : project.logo} alt="logo" className="w-full h-full object-contain" />
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
