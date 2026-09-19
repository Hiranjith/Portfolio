import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaSearch } from 'react-icons/fa';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';

const categories = ["All", "MERN Stack", "Frontend", "Backend", "Database", "Web Apps", "Other"];

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        if (response.ok) {
          setProjects(Array.isArray(data) ? data : []);
        } else {
          setProjects([]);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.shortDescription?.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;

    if (activeFilter === "All") return true;
    
    const techString = project.technologies?.join(' ').toLowerCase() || "";
    
    switch(activeFilter) {
      case "Frontend": return techString.includes('react') || techString.includes('html') || techString.includes('css');
      case "Backend": return techString.includes('node') || techString.includes('express');
      case "Database": return techString.includes('mongo') || techString.includes('sql');
      case "MERN Stack": return techString.includes('mongo') && techString.includes('express') && techString.includes('react') && techString.includes('node');
      case "Web Apps": return true; // generic fallback
      case "Other": return !techString.includes('react') && !techString.includes('node');
      default: return true;
    }
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  return (
    <div className="animate-fade-in w-full pb-20">
      
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-start justify-between mb-12 md:mb-16">
        
        {/* Left Side: Text */}
        <div className="lg:w-1/2 pt-4">
          <div className="text-[#00D9A5] font-[700] text-[12px] md:text-[14px] tracking-widest uppercase mb-4 md:mb-6">
            MY PROJECTS
          </div>
          <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-[800] text-[#F5F7FA] leading-[1.2] mb-6">
            Turning ideas into <br className="hidden md:block" />
            <span className="text-[#00D9A5]">real-world solutions.</span>
          </h1>
          <p className="text-[#A0B3C6] text-[15px] md:text-[18px] leading-[1.6] max-w-lg mb-8">
            Here are some of the projects I've built, showcasing my skills in full-stack development and real-world application design.
          </p>
          
          {/* Quote Block Desktop */}
          <div className="hidden lg:block bg-[#09111F]/50 border border-[#18283D] rounded-[16px] p-[24px] max-w-[320px]">
            <p className="text-[#00D9A5] font-serif text-[32px] leading-[0.5] mb-2">"</p>
            <p className="text-[#F5F7FA] italic text-[16px] font-medium leading-[1.6] mb-4">
              Build. Learn. Improve. Repeat.
            </p>
            <p className="text-[#8FA7C4] text-[14px] flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#8FA7C4]"></span> Hiranjith E M
            </p>
          </div>
        </div>

        {/* Right Side: Visual & Quote Mobile */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          
          {/* Quote Block Mobile */}
          <div className="lg:hidden bg-[#09111F]/50 border border-[#18283D] rounded-[16px] p-[20px]">
            <p className="text-[#00D9A5] font-serif text-[32px] leading-[0.5] mb-2">"</p>
            <p className="text-[#F5F7FA] italic text-[15px] font-medium leading-[1.6] mb-4">
              Build. Learn. Improve. Repeat.
            </p>
            <p className="text-[#8FA7C4] text-[13px] flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#8FA7C4]"></span> Hiranjith E M
            </p>
          </div>

          {/* Projects Banner Image */}
          <div className="hidden lg:flex relative w-full max-w-[650px] ml-auto items-center justify-center">
            <img 
              src="/Banner/project-banner.png" 
              alt="More Projects Coming" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
        
        {/* Categories */}
        <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none w-full lg:w-auto order-last lg:order-first">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`whitespace-nowrap px-[18px] py-[8px] rounded-full text-[13px] font-[600] transition-all ${
                activeFilter === cat
                  ? 'bg-[#00D9A5] text-[#050A14]'
                  : 'bg-transparent border border-[#18283D] text-[#8FA7C4] hover:border-[#8FA7C4]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full lg:w-[300px]">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaSearch className="text-[#8FA7C4]" size={14} />
          </div>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#09111F] border border-[#18283D] rounded-[10px] py-[10px] pl-[40px] pr-[16px] text-[#F5F7FA] text-[14px] focus:outline-none focus:border-[#00D9A5]/50 transition-colors placeholder:text-[#8FA7C4]/70"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {loading ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] animate-pulse">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="w-full h-[360px] bg-[#09111F] rounded-[16px] border border-[#18283D]"></div>
          ))}
        </div>
      ) : visibleProjects.length === 0 ? (
        <div className="py-20 flex flex-col items-center justify-center border border-dashed border-[#18283D] rounded-xl text-center">
          <div className="text-[48px] mb-4 opacity-50">📂</div>
          <h3 className="text-[#F5F7FA] text-lg font-semibold mb-2">No projects found</h3>
          <p className="text-[#8FA7C4] text-sm max-w-sm">
            No projects match your current search or filter criteria. Try adjusting them.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={project._id}
                onClick={() => setActiveProject(project)}
                className="flex flex-col h-full bg-[#030812] border border-[#18283D] p-[16px] rounded-[16px] hover:border-[#00D9A5]/30 hover:bg-[#050A14] transition-all duration-300 group cursor-pointer"
              >
                  {/* Thumbnail */}
                  <div className="w-full h-[180px] rounded-[12px] overflow-hidden mb-[16px] border border-[#18283D]/50 relative">
                    <img 
                      src={
                        project.thumbnail || 
                        (project.title?.toLowerCase().includes('fitness') 
                          ? '/projects/ff-thumbnail.png' 
                          : project.title?.toLowerCase().includes('bharath') || project.title?.toLowerCase().includes('bharat')
                            ? '/projects/bm-thumbnail.png'
                            : project.title?.toLowerCase().includes('shopzee')
                              ? '/projects/sz-thumbnail.png'
                              : '/projects/dopz-thumbnail.png')
                      } 
                      alt="thumbnail" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030812] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="flex items-center gap-3 mb-[12px]">
                    {(project.logo || project.title?.toLowerCase().includes('fitness')) && (
                      <img 
                        src={project.logo || '/projects/ff logo.png'} 
                        alt={`${project.title} logo`}
                        className="w-[42px] h-[42px] rounded-[10px] object-cover bg-white"
                      />
                    )}
                    <h3 className="text-[20px] font-[700] text-[#F5F7FA] tracking-tight leading-tight line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-[14px] text-[#8FA7C4] line-clamp-3 leading-relaxed mb-[20px] break-words whitespace-normal">
                    {project.shortDescription}
                  </p>

                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-[8px] mb-[24px]">
                      {project.technologies.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-[12px] py-[4px] text-[12px] font-[500] rounded-full bg-[#00D9A5]/10 text-[#00D9A5] border border-[#00D9A5]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto flex items-center justify-between pt-2">
                    <a
                      href={project.githubLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`text-[14px] font-[600] flex items-center gap-2 transition-colors ${project.githubLink ? 'text-[#F5F7FA] hover:text-[#00D9A5]' : 'text-[#8FA7C4] pointer-events-none'}`}
                    >
                      <FaGithub size={20} />
                      <span>GitHub</span>
                    </a>
                    
                    <a
                      href={project.liveLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`h-[36px] px-[16px] rounded-[10px] text-[13px] font-[600] flex items-center gap-2 transition-all ${project.liveLink ? 'bg-transparent text-[#00D9A5] border border-[#00D9A5]/40 hover:bg-[#00D9A5]/10' : 'bg-transparent text-[#00D9A5] border border-[#00D9A5]/40 opacity-50 pointer-events-none'}`}
                    >
                      <span>Live Demo</span>
                      <FiArrowRight size={16} />
                    </a>
                  </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Load More Button */}
      {!loading && filteredProjects.length > visibleCount && (
        <div className="mt-12 flex justify-center">
          <button 
            onClick={handleLoadMore}
            className="flex items-center gap-2 px-[24px] py-[12px] rounded-[10px] border border-[#18283D] text-[#F5F7FA] text-[14px] font-[600] hover:border-[#00D9A5]/50 hover:text-[#00D9A5] transition-all duration-300"
          >
            Load More Projects
            <FiChevronDown size={18} />
          </button>
        </div>
      )}

      {/* Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-0 lg:p-6 bg-[#030812]/95 lg:bg-black/80 lg:backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full h-full lg:h-auto lg:max-h-[90vh] lg:max-w-4xl bg-[#050A14] lg:bg-[#030812] overflow-y-auto scrollbar-none lg:rounded-[24px] lg:border lg:border-[#18283D] flex flex-col relative shadow-2xl"
            >
              {/* Close Button */}
              <div className="absolute z-10 right-4 top-4 lg:right-6 lg:top-6">
                <button 
                  onClick={() => setActiveProject(null)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#050A14]/80 text-[#8FA7C4] hover:text-white hover:bg-rose-500/80 transition-all backdrop-blur-md border border-[#18283D]/50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex flex-col pb-10">
                {/* Header Image */}
                <div className="w-full h-[250px] lg:h-[350px] relative border-b border-[#18283D]">
                  <img 
                    src={
                      activeProject.thumbnail || 
                      (activeProject.title?.toLowerCase().includes('fitness') 
                        ? '/projects/ff-thumbnail.png' 
                        : activeProject.title?.toLowerCase().includes('bharath') || activeProject.title?.toLowerCase().includes('bharat')
                          ? '/projects/bm-thumbnail.png'
                          : activeProject.title?.toLowerCase().includes('shopzee')
                            ? '/projects/sz-thumbnail.png'
                            : '/projects/dopz-thumbnail.png')
                    }
                    alt={activeProject.title} 
                    className="w-full h-full object-cover object-top" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] lg:from-[#030812] to-transparent opacity-90"></div>
                  
                  <div className="absolute bottom-0 left-0 p-6 lg:p-10 w-full">
                    <h2 className="text-[28px] lg:text-[40px] font-[800] text-white leading-tight mb-4">
                      {activeProject.title}
                    </h2>
                    
                    <div className="flex flex-wrap gap-2 lg:gap-3">
                      {activeProject.technologies?.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-[14px] py-[6px] text-[12px] lg:text-[13px] font-[600] rounded-full bg-[#00D9A5]/10 text-[#00D9A5] border border-[#00D9A5]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Details Sections */}
                <div className="p-6 lg:p-10 space-y-10">
                  
                  {/* About / Description */}
                  <section>
                    <h3 className="text-[20px] font-[700] text-white mb-4 flex items-center gap-2">
                      <span className="w-6 h-[2px] bg-[#00D9A5]"></span> Overview
                    </h3>
                    <p className="text-[15px] lg:text-[16px] text-[#8FA7C4] leading-relaxed whitespace-pre-wrap">
                      {activeProject.detailedDescription || activeProject.shortDescription}
                    </p>
                  </section>

                  {/* Features / Points */}
                  {activeProject.features && activeProject.features.length > 0 && (
                    <section>
                      <h3 className="text-[20px] font-[700] text-white mb-4 flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-[#00D9A5]"></span> Key Features
                      </h3>
                      <ul className="space-y-3">
                        {activeProject.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[15px] lg:text-[16px] text-[#8FA7C4] leading-relaxed">
                            <span className="text-[#00D9A5] mt-1">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Requirements */}
                  {activeProject.requirements && activeProject.requirements.length > 0 && (
                    <section>
                      <h3 className="text-[20px] font-[700] text-white mb-4 flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-[#00D9A5]"></span> Requirements
                      </h3>
                      <ul className="space-y-3">
                        {activeProject.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[15px] lg:text-[16px] text-[#8FA7C4] leading-relaxed">
                            <span className="text-[#00D9A5] mt-1">✦</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Action Buttons */}
                  <div className="pt-6 border-t border-[#18283D] flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <a
                      href={activeProject.githubLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full sm:w-auto h-[48px] px-[24px] rounded-[12px] text-[15px] font-[600] flex items-center justify-center gap-3 transition-all ${activeProject.githubLink ? 'bg-[#09111F] text-white border border-[#18283D] hover:border-[#8FA7C4]/50' : 'bg-[#09111F] text-[#8FA7C4] border border-[#18283D] opacity-50 pointer-events-none'}`}
                    >
                      <FaGithub size={22} />
                      <span>View Source Code</span>
                    </a>
                    
                    <a
                      href={activeProject.liveLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full sm:w-auto h-[48px] px-[28px] rounded-[12px] text-[15px] font-[600] flex items-center justify-center gap-3 transition-all ${activeProject.liveLink ? 'bg-[#00D9A5] text-[#050A14] hover:bg-[#00D9A5]/90 hover:scale-[1.02]' : 'bg-[#00D9A5] text-[#050A14] opacity-50 pointer-events-none'}`}
                    >
                      <span>Visit Live Site</span>
                      <FiArrowRight size={18} />
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
