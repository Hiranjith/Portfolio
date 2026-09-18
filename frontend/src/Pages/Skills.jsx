import { useState, cloneElement } from 'react';
import { motion } from 'framer-motion';
// Icons
import { FiMonitor, FiSettings, FiDatabase, FiTool, FiStar, FiZap } from 'react-icons/fi';
import { 
  SiReact, SiJavascript, SiTailwindcss, SiHtml5, SiCss, SiRedux,
  SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub, SiDocker,
  SiVercel, SiRender, SiPostman, SiFigma
} from 'react-icons/si';
import { TbApi, TbPlugConnected, TbBrandVscode } from 'react-icons/tb';
import { FaDatabase, FaAws } from 'react-icons/fa';

const skillCategories = [
  {
    id: "Frontend",
    title: "Frontend Development",
    subtitle: "Building responsive and interactive user interfaces",
    icon: <FiMonitor className="text-[#00D9A5] text-xl" />,
    skills: [
      { name: "React.js", icon: <SiReact className="text-[#61DAFB] text-xl" />, percentage: 90 },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] text-xl" />, percentage: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-xl" />, percentage: 85 },
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26] text-xl" />, percentage: 80 },
      { name: "CSS3", icon: <SiCss className="text-[#1572B6] text-xl" />, percentage: 80 },
      { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC] text-xl" />, percentage: 75 },
    ]
  },
  {
    id: "Backend",
    title: "Backend Development",
    subtitle: "Building robust and scalable server-side applications",
    icon: <FiSettings className="text-[#00D9A5] text-xl" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933] text-xl" />, percentage: 85 },
      { name: "Express.js", icon: <SiExpress className="text-white text-xl" />, percentage: 80 },
      { name: "REST APIs", icon: <TbApi className="text-[#00D9A5] text-xl" />, percentage: 80 },
      { name: "WebSockets", icon: <TbPlugConnected className="text-[#00D9A5] text-xl" />, percentage: 70 },
    ]
  },
  {
    id: "Database",
    title: "Database",
    subtitle: "Storing and managing data efficiently",
    icon: <FiDatabase className="text-[#00D9A5] text-xl" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] text-xl" />, percentage: 85 },
      { name: "SQL", icon: <FaDatabase className="text-[#00758F] text-xl" />, percentage: 70 },
    ]
  },
  {
    id: "Tools & DevOps",
    title: "Tools & DevOps",
    subtitle: "Development tools and deployment platforms",
    icon: <FiTool className="text-[#00D9A5] text-xl" />,
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032] text-xl" />, percentage: 80 },
      { name: "GitHub", icon: <SiGithub className="text-white text-xl" />, percentage: 80 },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED] text-xl" />, percentage: 70 },
      { name: "AWS", icon: <FaAws className="text-[#FF9900] text-xl" />, percentage: 65 },
      { name: "Vercel", icon: <SiVercel className="text-white text-xl" />, percentage: 70 },
      { name: "Render", icon: <SiRender className="text-[#46E3B7] text-xl" />, percentage: 65 },
    ]
  },
  {
    id: "Other",
    title: "Other Skills",
    subtitle: "Additional tools and libraries",
    icon: <FiStar className="text-[#00D9A5] text-xl" />,
    skills: [
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37] text-xl" />, percentage: 70 },
      { name: "VS Code", icon: <TbBrandVscode className="text-[#007ACC] text-xl" />, percentage: 85 },
      { name: "Figma", icon: <SiFigma className="text-[#F24E1E] text-xl" />, percentage: 65 },
    ]
  }
];

const filters = ["All", "Frontend", "Backend", "Database", "Tools & DevOps", "Other"];

function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCategories = activeFilter === "All" 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeFilter);

  return (
    <div className="animate-fade-in w-full">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 md:items-center justify-between mb-12 md:mb-16">
        <div className="md:w-1/2">
          <div className="text-[#00D9A5] font-[700] text-[12px] md:text-[14px] tracking-widest uppercase mb-3">
            MY SKILLS
          </div>
          <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-[800] text-[#F5F7FA] leading-[1.2] mb-6">
            Tools & Technologies <br className="hidden md:block" />
            <span className="text-[#00D9A5]">I Work With</span>
          </h1>
          <p className="text-[#A0B3C6] text-[16px] md:text-[18px] leading-[1.6] max-w-lg">
            A collection of technologies, tools and frameworks I use to build modern, scalable and user-friendly web applications.
          </p>
        </div>
        
        {/* Banner Image - Hidden on mobile */}
        <div className="hidden md:block md:w-1/2">
          <div className="relative w-full max-w-[400px] lg:max-w-[500px] ml-auto">
            <img 
              src="/Banner/skill-banner.png"
              alt="Skills Banner" 
              className="w-full object-contain"
            />
            {/* Gradient Overlays for seamless blending */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-[#050A14] to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-[#050A14] to-transparent pointer-events-none"></div>
            <div className="absolute inset-x-0 top-0 h-16 md:h-24 bg-gradient-to-b from-[#050A14] to-transparent pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-[#050A14] to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-10 md:mb-12">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === filter 
                ? "bg-[#00D9A5] text-[#0A0F16]" 
                : "bg-[#111A24] text-[#A0B3C6] hover:bg-[#1A2634] hover:text-[#00D9A5] border border-[#1F2937]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Categories Grid */}
      <div className="columns-1 lg:columns-2 gap-6 space-y-6">
        {filteredCategories.map((category) => (
          <div 
            key={category.id} 
            className="break-inside-avoid border border-[#1F2937] bg-[#0A0F16]/50 rounded-2xl p-5 md:p-6"
          >
            {/* Category Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00D9A5]/10 flex items-center justify-center border border-[#00D9A5]/20 shrink-0">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{category.title}</h3>
                  <p className="text-[#A0B3C6] text-sm mt-1">{category.subtitle}</p>
                </div>
              </div>
              <div className="text-[#A0B3C6] text-sm font-medium whitespace-nowrap">
                {category.skills.length} Skills
              </div>
            </div>

            {/* Skills Grid */}
            <div className={`grid gap-3 md:gap-4 ${
              (category.id === 'Backend' || category.id === 'Database') ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            }`}>
              {category.skills.map(skill => (
                <div 
                  key={skill.name} 
                  className="bg-[#0A0F16] border border-[#1F2937] rounded-xl p-4 hover:border-[#00D9A5]/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300 shrink-0">
                      {cloneElement(skill.icon, { className: skill.icon.props.className.replace('text-xl', 'text-[28px] md:text-[32px]') })}
                    </div>
                    <span className="text-[#F5F7FA] text-sm font-bold leading-tight">{skill.name}</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full">
                    <div className="flex justify-end mb-1">
                      <span className="text-[#A0B3C6] text-[11px] font-semibold">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-[#1F2937] h-1.5 rounded-full">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-[#00D9A5] rounded-full shadow-[0_0_8px_rgba(0,217,165,0.5)]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Banner */}
      <div className="mt-12 md:mt-16 bg-gradient-to-r from-[#00D9A5]/10 to-transparent border border-[#00D9A5]/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 text-center md:text-left">
          <div className="w-12 h-12 rounded-xl bg-[#00D9A5]/20 flex items-center justify-center shrink-0">
            <FiZap className="text-[#00D9A5] text-xl" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg md:text-xl mb-2">Always exploring new technologies</h3>
            <p className="text-[#A0B3C6] text-sm md:text-base max-w-2xl">
              Technology is constantly evolving, and I love staying updated with new tools and best practices.
            </p>
          </div>
        </div>
        <button className="shrink-0 px-6 py-3 rounded-full bg-transparent border border-[#00D9A5] text-[#00D9A5] font-medium hover:bg-[#00D9A5] hover:text-[#0A0F16] transition-colors duration-300 flex items-center gap-2">
          Let's Connect <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
}

export default Skills;
