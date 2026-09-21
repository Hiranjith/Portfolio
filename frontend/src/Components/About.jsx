import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineWork, MdLocationOn } from 'react-icons/md';
import { FiCode, FiTarget, FiUsers } from 'react-icons/fi';
import { FaUserAlt, FaRocket, FaGraduationCap, FaHeart, FaGamepad, FaFilm, FaBook, FaPlane, FaMapMarkedAlt, FaChevronDown, FaChevronUp, FaLightbulb, FaQuoteLeft, FaCompass, FaChartBar } from 'react-icons/fa';
import { BiFootball } from 'react-icons/bi';

function About() {
  const [storyExpanded, setStoryExpanded] = useState(false);

  return (
    <div id="about" className="space-y-[40px] md:space-y-[48px] pt-[10px] md:pt-[40px] pb-0">
      
      {/* Top Banner Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-[32px] md:gap-[40px]">
        {/* Left Column */}
        <div className="flex-1 text-left z-10 w-full">
          <h4 className="text-[#00D9A5] text-[12px] font-bold tracking-[0.2em] uppercase mb-4">ABOUT ME</h4>
          <h1 className="text-4xl md:text-[48px] font-[800] leading-[1.1] mb-5 tracking-tight text-white">
            More than just code,<br />I build <span className="text-[#00D9A5]">solutions.</span>
          </h1>
          
          <p className="text-[#94A3B8] text-[15px] md:text-[16px] leading-relaxed max-w-[500px]">
            I'm Hiranjith E M, a MERN stack developer passionate about building modern web applications and solving real-world problems. I enjoy turning ideas into useful products that create impact.
          </p>
        </div>

        {/* Right Column (Image + Stats) */}
        <div className="flex-1 relative flex flex-col md:flex-row items-center md:items-start justify-center md:justify-end mt-[10px] md:mt-0 w-full gap-[24px]">
          {/* Image */}
          <div className="relative z-10 w-[260px] md:w-[400px] lg:w-[480px]">
            <img 
              src="/Banner/about-banner.png" 
              alt="About Banner" 
              className="w-full h-auto object-contain" 
              style={{
                WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 100%)',
                maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 100%)'
              }}
            />
          </div>

          {/* Stats Side Panel */}
          <div className="grid grid-cols-2 md:flex md:flex-col justify-center items-stretch md:items-start gap-[12px] md:gap-[24px] z-20 w-full md:w-auto">
            {/* Age */}
            <div className="flex flex-row items-center gap-[12px] shrink-0 bg-[#09111F] md:bg-transparent border border-[#18283D] md:border-transparent rounded-2xl p-[12px] md:p-0">
              <div className="w-[36px] h-[36px] md:w-[48px] md:h-[48px] shrink-0 rounded-full bg-[#061814] flex items-center justify-center text-[#00D9A5] border border-[#092B21]">
                <FaUserAlt size={16} />
              </div>
              <div className="text-left">
                <div className="text-[15px] md:text-[18px] font-[700] text-[#F5F7FA] leading-tight">28</div>
                <div className="text-[11px] md:text-[12px] text-[#8FA7C4]">Years Old</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-row items-center gap-[12px] shrink-0 bg-[#09111F] md:bg-transparent border border-[#18283D] md:border-transparent rounded-2xl p-[12px] md:p-0">
              <div className="w-[36px] h-[36px] md:w-[48px] md:h-[48px] shrink-0 rounded-full bg-[#061814] flex items-center justify-center text-[#00D9A5] border border-[#092B21]">
                <MdLocationOn size={18} />
              </div>
              <div className="text-left">
                <div className="text-[15px] md:text-[18px] font-[700] text-[#F5F7FA] leading-tight">Kerala, India</div>
                <div className="text-[11px] md:text-[12px] text-[#8FA7C4]">Based In</div>
              </div>
            </div>

            {/* Experience */}
            <div className="flex flex-row items-center gap-[12px] shrink-0 bg-[#09111F] md:bg-transparent border border-[#18283D] md:border-transparent rounded-2xl p-[12px] md:p-0">
              <div className="w-[36px] h-[36px] md:w-[48px] md:h-[48px] shrink-0 rounded-full bg-[#061814] flex items-center justify-center text-[#00D9A5] border border-[#092B21]">
                <MdOutlineWork size={16} />
              </div>
              <div className="text-left">
                <div className="text-[15px] md:text-[18px] font-[700] text-[#F5F7FA] leading-tight">3+</div>
                <div className="text-[11px] md:text-[12px] text-[#8FA7C4]">Experience</div>
              </div>
            </div>

            {/* Projects */}
            <div className="flex flex-row items-center gap-[12px] shrink-0 bg-[#09111F] md:bg-transparent border border-[#18283D] md:border-transparent rounded-2xl p-[12px] md:p-0">
              <div className="w-[36px] h-[36px] md:w-[48px] md:h-[48px] shrink-0 rounded-full bg-[#061814] flex items-center justify-center text-[#00D9A5] border border-[#092B21]">
                <FiCode size={16} />
              </div>
              <div className="text-left">
                <div className="text-[15px] md:text-[18px] font-[700] text-[#F5F7FA] leading-tight">10+</div>
                <div className="text-[11px] md:text-[12px] text-[#8FA7C4]">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Features Row (Hidden on mobile as per design) */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[24px]">
        {/* Feature 1 */}
        <div className="flex flex-row items-center gap-[12px] bg-[#09111F] p-[16px] rounded-2xl border border-[#18283D]">
          <div className="w-[40px] h-[40px] shrink-0 rounded-full bg-[#00D9A5]/10 flex items-center justify-center text-[#00D9A5]">
            <FiTarget size={20} />
          </div>
          <div>
            <h3 className="text-[#F5F7FA] font-[600] text-[14px] lg:text-[15px]">Problem Solver</h3>
            <p className="text-[#8FA7C4] text-[11px] lg:text-[12px] leading-tight mt-[2px]">I enjoy solving complex challenges</p>
          </div>
        </div>
        
        {/* Feature 2 */}
        <div className="flex flex-row items-center gap-[12px] bg-[#09111F] p-[16px] rounded-2xl border border-[#18283D]">
          <div className="w-[40px] h-[40px] shrink-0 rounded-full bg-[#00D9A5]/10 flex items-center justify-center text-[#00D9A5]">
            <FaLightbulb size={20} />
          </div>
          <div>
            <h3 className="text-[#F5F7FA] font-[600] text-[14px] lg:text-[15px]">Continuous Learner</h3>
            <p className="text-[#8FA7C4] text-[11px] lg:text-[12px] leading-tight mt-[2px]">Always exploring new technologies</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-row items-center gap-[12px] bg-[#09111F] p-[16px] rounded-2xl border border-[#18283D]">
          <div className="w-[40px] h-[40px] shrink-0 rounded-full bg-[#00D9A5]/10 flex items-center justify-center text-[#00D9A5]">
            <FiUsers size={20} />
          </div>
          <div>
            <h3 className="text-[#F5F7FA] font-[600] text-[14px] lg:text-[15px]">Team Player</h3>
            <p className="text-[#8FA7C4] text-[11px] lg:text-[12px] leading-tight mt-[2px]">I love collaborating and sharing knowledge</p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-row items-center gap-[12px] bg-[#09111F] p-[16px] rounded-2xl border border-[#18283D]">
          <div className="w-[40px] h-[40px] shrink-0 rounded-full bg-[#00D9A5]/10 flex items-center justify-center text-[#00D9A5]">
            <FaRocket size={20} />
          </div>
          <div>
            <h3 className="text-[#F5F7FA] font-[600] text-[14px] lg:text-[15px]">Product Focused</h3>
            <p className="text-[#8FA7C4] text-[11px] lg:text-[12px] leading-tight mt-[2px]">I build with real users in mind</p>
          </div>
        </div>
      </div>

      {/* Main Content Sections (3 columns on desktop, 1 on mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] lg:gap-[40px]">
        
        {/* My Story */}
        <div className="lg:col-span-1 space-y-[16px]">
          <h2 className="text-[20px] lg:text-[22px] font-[750] text-[#F5F7FA] flex items-center gap-2">
            My Story <span className="w-2 h-2 rounded-full bg-[#00D9A5]"></span>
          </h2>
          <div className="space-y-[16px] text-[#A0B3C6] text-[14px] md:text-[15px] leading-[1.6]">
            <p>
              My journey into tech started during my engineering days when I developed a strong interest in problem solving and building things. Over time, I found my passion in web development, especially the MERN stack.
            </p>
            <AnimatePresence initial={false}>
              {(storyExpanded || typeof window !== 'undefined' && window.innerWidth >= 768) ? (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden md:!h-auto md:!opacity-100"
                >
                  <p className="mt-[16px]">
                    I enjoy working on real-world projects, learning new tools and continuously improving my skills. I believe in writing clean code, building scalable solutions and creating products that are simple, effective and user-friendly.
                  </p>
                  {storyExpanded && (
                    <button 
                      onClick={() => setStoryExpanded(false)}
                      className="flex items-center gap-1 text-[#00D9A5] font-semibold text-[14px] mt-[12px] md:hidden"
                    >
                      Read Less <FaChevronUp size={12} />
                    </button>
                  )}
                </motion.div>
              ) : null}
            </AnimatePresence>
            
            {/* Mobile Read More */}
            <AnimatePresence>
              {!storyExpanded && (
                <motion.div 
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  className="md:hidden"
                >
                  <button 
                    onClick={() => setStoryExpanded(true)}
                    className="flex items-center gap-1 text-[#00D9A5] font-semibold text-[14px]"
                  >
                    Read More <FaChevronDown size={12} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Education */}
        <div className="lg:col-span-1 space-y-[16px]">
          <h2 className="text-[20px] lg:text-[22px] font-[750] text-[#F5F7FA] flex items-center gap-3">
            <div className="w-[32px] h-[32px] bg-[#00D9A5] rounded-[7px] flex items-center justify-center text-[#050A14]">
              <FaGraduationCap size={16} />
            </div>
            Education
          </h2>
          
          <div className="relative pl-[16px] md:pl-[20px] border-l-2 border-[#18283D] space-y-[24px] mt-[16px]">
            {/* Timeline Item 1 */}
            <div className="relative">
              <div className="absolute -left-[23px] md:-left-[27px] top-[4px] w-[12px] h-[12px] rounded-full bg-[#00D9A5] ring-4 ring-[#050A14]"></div>
              <h3 className="text-[#F5F7FA] font-[600] text-[14px] md:text-[15px]">B.Tech - Metallurgical and Material Engg.</h3>
              <p className="text-[#A0B3C6] text-[12px] md:text-[13px] mt-[4px]">National Institute of Technology, Warangal</p>
              <p className="text-[#8FA7C4] text-[11px] md:text-[12px] mt-[2px]">2017 - 2021</p>
            </div>
            
            {/* Timeline Item 2 */}
            <div className="relative">
              <div className="absolute -left-[23px] md:-left-[27px] top-[4px] w-[12px] h-[12px] rounded-full bg-[#00D9A5] ring-4 ring-[#050A14]"></div>
              <h3 className="text-[#F5F7FA] font-[600] text-[14px] md:text-[15px]">Higher Secondary (Plus Two)</h3>
              <p className="text-[#A0B3C6] text-[12px] md:text-[13px] mt-[4px]">Kerala State Board</p>
              <p className="text-[#8FA7C4] text-[11px] md:text-[12px] mt-[2px]">2014 - 2016</p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative">
              <div className="absolute -left-[23px] md:-left-[27px] top-[4px] w-[12px] h-[12px] rounded-full bg-[#00D9A5] ring-4 ring-[#050A14]"></div>
              <h3 className="text-[#F5F7FA] font-[600] text-[14px] md:text-[15px]">SSLC</h3>
              <p className="text-[#A0B3C6] text-[12px] md:text-[13px] mt-[4px]">Central board of secondary education</p>
              <p className="text-[#8FA7C4] text-[11px] md:text-[12px] mt-[2px]">2012 - 2014</p>
            </div>
          </div>
        </div>

        {/* Beyond Work */}
        <div className="lg:col-span-1 space-y-[16px]">
          <h2 className="text-[20px] lg:text-[22px] font-[750] text-[#F5F7FA] flex items-center gap-3">
            <FaHeart className="text-[#FF5252]" size={20} />
            Beyond Work
          </h2>
          
          <div className="grid grid-cols-3 gap-[8px] md:gap-[12px]">
            {/* Football */}
            <div className="bg-[#09111F] border border-[#18283D] rounded-[10px] p-[8px] md:p-[12px] flex items-center gap-[8px]">
              <BiFootball className="text-[#00D9A5] shrink-0" size={18} />
              <span className="text-[#F5F7FA] text-[11px] md:text-[13px] font-[500] leading-tight">Football</span>
            </div>
            {/* Gaming */}
            <div className="bg-[#09111F] border border-[#18283D] rounded-[10px] p-[8px] md:p-[12px] flex items-center gap-[8px]">
              <FaGamepad className="text-[#00D9A5] shrink-0" size={18} />
              <span className="text-[#F5F7FA] text-[11px] md:text-[13px] font-[500] leading-tight">Gaming</span>
            </div>
            {/* Movies */}
            <div className="bg-[#09111F] border border-[#18283D] rounded-[10px] p-[8px] md:p-[12px] flex items-center gap-[8px]">
              <FaFilm className="text-[#00D9A5] shrink-0" size={18} />
              <span className="text-[#F5F7FA] text-[11px] md:text-[13px] font-[500] leading-tight">Movies</span>
            </div>
            {/* Reading */}
            <div className="bg-[#09111F] border border-[#18283D] rounded-[10px] p-[8px] md:p-[12px] flex items-center gap-[8px]">
              <FaBook className="text-[#00D9A5] shrink-0" size={18} />
              <span className="text-[#F5F7FA] text-[11px] md:text-[13px] font-[500] leading-tight">Reading</span>
            </div>
            {/* Traveling */}
            <div className="bg-[#09111F] border border-[#18283D] rounded-[10px] p-[8px] md:p-[12px] flex items-center gap-[8px]">
              <FaPlane className="text-[#00D9A5] shrink-0" size={18} />
              <span className="text-[#F5F7FA] text-[11px] md:text-[13px] font-[500] leading-tight">Traveling</span>
            </div>
            {/* Exploring */}
            <div className="bg-[#09111F] border border-[#18283D] rounded-[10px] p-[8px] md:p-[12px] flex items-center gap-[8px]">
              <FaCompass className="text-[#00D9A5] shrink-0" size={18} />
              <span className="text-[#F5F7FA] text-[11px] md:text-[13px] font-[500] leading-tight">Adventure</span>
            </div>
          </div>

          {/* Quote Card */}
          <div className="mt-[20px] p-[16px] rounded-[12px] border border-[#143026] bg-[#061814] flex gap-[16px]">
            <FaQuoteLeft className="text-[#00D9A5] shrink-0 text-[32px] md:text-[40px] mt-[4px]" />
            <div className="flex flex-col justify-center">
              <p className="text-[#A0B3C6] italic font-medium text-[13px] md:text-[15px] leading-relaxed">
                Consistency and curiosity can take you further than talent alone.
              </p>
              <div className="w-[80px] h-[2px] bg-[#00D9A5] mt-[16px] mx-auto md:mx-0"></div>
            </div>
          </div>
        </div>


        {/* My Approach (Mobile Only) */}
        <div className="md:hidden space-y-[16px] lg:col-span-1">
          <h2 className="text-[20px] font-[750] text-[#F5F7FA] flex items-center gap-3">
            <FiTarget className="text-[#00D9A5]" size={22} />
            My Approach
          </h2>

          <div className="bg-[#06101B] p-[16px] rounded-2xl border border-[#18283D] flex flex-row items-center gap-[12px] relative overflow-hidden">
            {/* Left Column (Steps) */}
            <div className="flex flex-col gap-[16px] flex-1 border-r border-[#18283D] pr-[12px] z-10">
              <div className="flex items-center gap-[10px]">
                <FaLightbulb className="text-[#00D9A5] shrink-0" size={16} />
                <div className="flex flex-col leading-tight">
                  <span className="text-[#F5F7FA] text-[13px] font-[700]">Learn</span>
                  <span className="text-[#A0B3C6] text-[11px]">Continuously</span>
                </div>
              </div>
              
              <div className="flex items-center gap-[10px]">
                <FiCode className="text-[#00D9A5] shrink-0" size={16} />
                <div className="flex flex-col leading-tight">
                  <span className="text-[#F5F7FA] text-[13px] font-[700]">Write</span>
                  <span className="text-[#A0B3C6] text-[11px]">Clean Code</span>
                </div>
              </div>
              
              <div className="flex items-center gap-[10px]">
                <FiUsers className="text-[#00D9A5] shrink-0" size={16} />
                <div className="flex flex-col leading-tight">
                  <span className="text-[#F5F7FA] text-[13px] font-[700]">Build</span>
                  <span className="text-[#A0B3C6] text-[11px]">Real Solutions</span>
                </div>
              </div>
              
              <div className="flex items-center gap-[10px]">
                <FaChartBar className="text-[#00D9A5] shrink-0" size={16} />
                <div className="flex flex-col leading-tight">
                  <span className="text-[#F5F7FA] text-[13px] font-[700]">Improve</span>
                  <span className="text-[#A0B3C6] text-[11px]">Step by Step</span>
                </div>
              </div>
            </div>

            {/* Right Column (Image) */}
            <div className="flex-1 flex justify-center items-center py-[10px] pl-[10px] z-10">
              <img 
                src="/Logos/banner-approach-section.png" 
                alt="My Approach" 
                className="w-full h-auto max-w-[140px] object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Background subtle radial gradient */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#00D9A5]/5 rounded-full blur-[40px] pointer-events-none"></div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default About;
