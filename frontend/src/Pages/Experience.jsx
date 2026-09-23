import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Experience = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="w-full text-[#F5F7FA] font-sans">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-stretch">
        
        {/* Left Column - Content */}
        <div className="lg:w-[70%] flex flex-col justify-center">
          
          <div className="flex flex-col xl:flex-row gap-6 mb-8 items-start xl:items-center">
            {/* Text Content */}
            <div className="flex-1">
              <h4 className="text-[#00D9A5] text-[12px] font-bold tracking-[0.2em] uppercase mb-4">
                My Experience
              </h4>
              <h1 className="text-4xl md:text-[48px] font-[800] leading-[1.1] mb-5 tracking-tight">
                A journey of <br className="hidden sm:block" />
                continuous <span className="text-[#00D9A5]">learning.</span>
              </h1>
              <p className="text-[#94A3B8] text-[15px] md:text-[16px] leading-relaxed max-w-[500px]">
                From building real-world applications to solving complex problems, 
                my professional journey has helped me grow as a developer and 
                a problem solver.
              </p>
            </div>

            {/* Quote Block */}
            <div className="xl:w-[320px] shrink-0 border border-[#18283D] bg-[#050A14]/80 p-5 rounded-2xl relative">
              <span className="text-[30px] text-[#00D9A5] font-serif leading-none absolute top-2 left-3">“</span>
              <p className="text-[#F5F7FA] text-[14px] font-medium leading-relaxed mt-2 relative z-10 px-2">
                Every experience adds a new perspective, and every challenge builds a stronger me.
              </p>
              <span className="text-[30px] text-[#00D9A5] font-serif leading-none absolute bottom-0 right-3 rotate-180">“</span>
              <div className="w-[30px] h-[2px] bg-[#00D9A5] mt-3 ml-2"></div>
            </div>
          </div>
          
          {/* Stats Grid - Horizontal */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-2 p-3 border border-[#18283D] rounded-xl bg-[#0A111D]/40 backdrop-blur-sm">
              <div className="w-[32px] h-[32px] rounded-lg bg-[#00D9A5]/10 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px] text-[#00D9A5]">
                  <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm3 0v.205a48.815 48.815 0 013 0V5.25a1.5 1.5 0 00-1.5-1.5h-3a1.5 1.5 0 00-1.5 1.5z" clipRule="evenodd" />
                  <path d="M3 16.06V18c0 1.434 1.022 2.7 2.476 2.917.917.137 1.84.249 2.774.334v-1.5a.75.75 0 011.5 0v1.5a48.14 48.14 0 005.5 0v-1.5a.75.75 0 011.5 0v1.5c.933-.085 1.857-.197 2.774-.334C20.978 20.7 22 19.434 22 18v-1.94c-2.585 1.002-5.4 1.564-8.35 1.666a.75.75 0 01-.3 0C10.4 17.624 7.585 17.062 5 16.06z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-[800] text-[14px] leading-tight">4+</span>
                <span className="text-[#94A3B8] text-[9px] mt-0.5 leading-tight">Years of Experience</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-2 p-3 border border-[#18283D] rounded-xl bg-[#0A111D]/40 backdrop-blur-sm">
              <div className="w-[32px] h-[32px] rounded-lg bg-[#00D9A5]/10 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px] text-[#00D9A5]">
                  <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 01.527.921l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.527zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-[800] text-[14px] leading-tight">10+</span>
                <span className="text-[#94A3B8] text-[9px] mt-0.5 leading-tight">Projects Contributed</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-2 p-3 border border-[#18283D] rounded-xl bg-[#0A111D]/40 backdrop-blur-sm">
              <div className="w-[32px] h-[32px] rounded-lg bg-[#00D9A5]/10 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px] text-[#00D9A5]">
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-[800] text-[14px] leading-tight">3+</span>
                <span className="text-[#94A3B8] text-[9px] mt-0.5 leading-tight">Teams Worked With</span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-2 p-3 border border-[#18283D] rounded-xl bg-[#0A111D]/40 backdrop-blur-sm">
              <div className="w-[32px] h-[32px] rounded-lg bg-[#00D9A5]/10 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px] text-[#00D9A5]">
                  <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-[800] text-[14px] leading-tight">Continuous</span>
                <span className="text-[#94A3B8] text-[9px] mt-0.5 leading-tight">Learning & Growth</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column - Illustration */}
        <div className="hidden lg:flex lg:w-[30%] relative mt-8 lg:mt-0 flex-col items-center justify-center">
          
          {/* Experience Banner Illustration */}
          <div className="w-full max-w-[380px] flex items-center justify-center relative">
            <img 
              src="/Banner/experience-banner.png" 
              alt="Experience Illustration" 
              className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-500 drop-shadow-[0_0_15px_rgba(0,217,165,0.1)]"
              style={{ WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)', maskImage: 'radial-gradient(circle, black 60%, transparent 100%)' }}
            />
          </div>

        </div>
      </div>

      {/* Work Experience Section */}
      <div className="mt-24">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-[#00D9A5]/10 p-3 rounded-xl border border-[#00D9A5]/20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[24px] h-[24px] text-[#00D9A5]">
              <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm3 0v.205a48.815 48.815 0 013 0V5.25a1.5 1.5 0 00-1.5-1.5h-3a1.5 1.5 0 00-1.5 1.5z" clipRule="evenodd" />
              <path d="M3 16.06V18c0 1.434 1.022 2.7 2.476 2.917.917.137 1.84.249 2.774.334v-1.5a.75.75 0 011.5 0v1.5a48.14 48.14 0 005.5 0v-1.5a.75.75 0 011.5 0v1.5c.933-.085 1.857-.197 2.774-.334C20.978 20.7 22 19.434 22 18v-1.94c-2.585 1.002-5.4 1.564-8.35 1.666a.75.75 0 01-.3 0C10.4 17.624 7.585 17.062 5 16.06z" />
            </svg>
          </div>
          <div>
            <h2 className="text-[24px] font-[700]">Work Experience</h2>
            <p className="text-[#94A3B8] text-[14px] mt-1 max-w-[500px]">
              A timeline of my professional journey, the roles I've taken, and the impact I've made.
            </p>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-0">
          
          {/* Mobile Timeline Vertical Line */}
          <div className="md:hidden absolute left-[6px] top-2 bottom-0 w-[2px] bg-[#18283D]"></div>

          {/* Timeline Items Wrapper */}
          <div className="space-y-12">
            
            {/* Freelance Experience Item */}
            <div id="freelance" className="flex flex-col md:flex-row md:gap-12 relative group scroll-mt-24">
              {/* Desktop Timeline Line */}
              <div className="hidden md:block absolute left-[150px] lg:left-[180px] top-[14px] bottom-[-48px] w-[2px] bg-[#18283D] group-last:bottom-0 group-last:bg-gradient-to-b group-last:from-[#18283D] group-last:to-transparent"></div>
              
              {/* Date Column */}
              <div className="md:w-[150px] lg:w-[180px] shrink-0 md:pt-1 mb-4 md:mb-0 relative">
                {/* Mobile Dot */}
                <div className="md:hidden absolute -left-[27px] top-[8px] w-[12px] h-[12px] rounded-full bg-[#00D9A5] shadow-[0_0_0_4px_rgba(0,217,165,0.15)] z-10"></div>
                
                <h3 className="text-white font-[700] text-[16px] md:text-[18px]">Sep 2025<span className="md:hidden"> – </span><br className="hidden md:block" />Present</h3>
                <p className="text-[#94A3B8] text-[13px] mt-1">1 year 1 month</p>
              </div>
              
              {/* Desktop Dot */}
              <div className="hidden md:block absolute left-[146px] lg:left-[176px] top-[8px] w-[10px] h-[10px] rounded-full bg-[#00D9A5] shadow-[0_0_0_4px_rgba(0,217,165,0.15)] z-10"></div>
              
              {/* Content Card */}
              <div className="flex-1 border border-[#18283D] bg-[#0A111D]/60 rounded-2xl p-6 lg:p-8 transition-colors hover:border-[#00D9A5]/30 group-hover:shadow-[0_4px_24px_-8px_rgba(0,217,165,0.1)]">
                
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-4 mb-6">
                  
                  <div className="flex gap-4 items-center lg:items-start">
                    <div className="w-[48px] h-[48px] bg-white rounded-xl flex items-center justify-center shrink-0 shadow-inner overflow-hidden border-2 border-white/10 p-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#00D9A5]">
                        <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 01.527.921l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.527zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[18px] lg:text-[20px] font-[700] text-white leading-tight">Freelance</h3>
                      <p className="text-[#00D9A5] text-[15px] font-[500] mt-1">Full-Stack Developer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 lg:flex-col lg:items-end">
                    <div className="flex items-center text-[#94A3B8] text-[13px] gap-1.5 font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                      Remote / Global
                    </div>
                    <span className="px-3 py-1 bg-[#00D9A5]/10 text-[#00D9A5] text-[11px] font-[600] rounded-full border border-[#00D9A5]/20 uppercase tracking-wider">
                      Self-Employed
                    </span>
                  </div>
                </div>
                
                <p className="text-[#94A3B8] text-[14px] lg:text-[15px] leading-relaxed mb-8">
                  As a Freelance Full-Stack Developer, I design, develop, test, deploy, and deliver complete web and mobile applications for clients. I specialize in MERN-stack web applications, building scalable frontend and backend systems, REST APIs, database architectures, and seamless integrations while leveraging modern AI-assisted development tools to improve efficiency and delivery time.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-white text-[14px] font-[700] mb-4">Roles and Responsibilities</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug"><strong>Full-Stack Development:</strong> Design and develop complete web applications using the MERN stack, covering frontend, backend, APIs, databases, and application integrations.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug"><strong>Frontend Development:</strong> Build responsive and user-friendly interfaces for desktop and mobile devices using React and modern frontend technologies.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug"><strong>Backend Development:</strong> Develop secure and scalable backend services using Node.js, Express.js, and RESTful API architectures.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug"><strong>API Development & Integration:</strong> Design, develop, document, and integrate API endpoints to enable seamless communication between frontend, backend, and external services.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug"><strong>Database Design:</strong> Design database models, schemas, relationships, indexes, and structures based on application requirements and data flow.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug"><strong>Data Management:</strong> Write optimized database queries, aggregations, filtering, sorting, and data-processing logic to efficiently retrieve and manage application data.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug"><strong>Frontend–Backend Integration:</strong> Connect frontend applications with backend APIs, handle API states and errors, and ensure reliable end-to-end data flow.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug"><strong>Authentication & Security:</strong> Implement authentication, authorization, validation, secure API access, and other application-level security practices.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug"><strong>Testing & Quality Assurance:</strong> Test applications across functional flows, edge cases, API responses, validation scenarios, and error conditions to ensure reliability.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug"><strong>Deployment & Configuration:</strong> Deploy applications and configure hosting environments, databases, APIs, environment variables, and production builds.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug"><strong>Client Delivery:</strong> Manage the development lifecycle from initial requirements through development, testing, deployment, and final delivery to clients.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug"><strong>AI-Assisted Development:</strong> Use modern AI development tools such as ChatGPT Codex, Gemini, Claude, and other AI-assisted workflows to accelerate development, debugging, research, and problem-solving while maintaining code quality.</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-white text-[14px] font-[700] mb-4 lg:text-left">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 lg:justify-start">
                      {['React', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'SQL', 'Supabase', 'Generative AI', 'Git', 'GitHub', 'AWS', 'Vercel', 'Render', 'Heroku', 'cPanel'].map(tech => (
                        <span key={tech} className="px-3 py-1.5 bg-[#18283D]/40 border border-[#18283D] rounded-full text-[#00D9A5] text-[12px] font-[500] hover:bg-[#18283D] transition-colors cursor-default">
                           {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Item 1 */}
            <div id="servion" className="flex flex-col md:flex-row md:gap-12 relative group scroll-mt-24">
              {/* Desktop Timeline Line */}
              <div className="hidden md:block absolute left-[150px] lg:left-[180px] top-[14px] bottom-[-48px] w-[2px] bg-[#18283D] group-last:bottom-0 group-last:bg-gradient-to-b group-last:from-[#18283D] group-last:to-transparent"></div>
              
              {/* Date Column (Left on Desktop, Top on Mobile) */}
              <div className="md:w-[150px] lg:w-[180px] shrink-0 md:pt-1 mb-4 md:mb-0 relative">
                {/* Mobile Dot */}
                <div className="md:hidden absolute -left-[27px] top-[8px] w-[12px] h-[12px] rounded-full bg-[#00D9A5] shadow-[0_0_0_4px_rgba(0,217,165,0.15)] z-10"></div>
                
                <h3 className="text-white font-[700] text-[16px] md:text-[18px]">Mar 2022<span className="md:hidden"> – </span><br className="hidden md:block" />Feb 2025</h3>
                <p className="text-[#94A3B8] text-[13px] mt-1">3 years</p>
              </div>
              
              {/* Desktop Dot */}
              <div className="hidden md:block absolute left-[146px] lg:left-[176px] top-[8px] w-[10px] h-[10px] rounded-full bg-[#00D9A5] shadow-[0_0_0_4px_rgba(0,217,165,0.15)] z-10"></div>
              
              {/* Content Card */}
              <div className="flex-1 border border-[#18283D] bg-[#0A111D]/60 rounded-2xl p-6 lg:p-8 transition-colors hover:border-[#00D9A5]/30 group-hover:shadow-[0_4px_24px_-8px_rgba(0,217,165,0.1)]">
                
                {/* Header (Company, Role, Location, Badge) */}
                <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-4 mb-6">
                  
                  <div className="flex gap-4 items-center lg:items-start">
                    <div className="w-[48px] h-[48px] bg-white rounded-xl flex items-center justify-center shrink-0 shadow-inner overflow-hidden border-2 border-white/10">
                      <img src="/Logos/servion-logo.png" alt="Servion Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-[18px] lg:text-[20px] font-[700] text-white leading-tight">Servion Global Solutions</h3>
                      <p className="text-[#00D9A5] text-[15px] font-[500] mt-1">Software Engineer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 lg:flex-col lg:items-end">
                    <div className="flex items-center text-[#94A3B8] text-[13px] gap-1.5 font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                      Chennai, India
                    </div>
                    <span className="px-3 py-1 bg-[#00D9A5]/10 text-[#00D9A5] text-[11px] font-[600] rounded-full border border-[#00D9A5]/20 uppercase tracking-wider">
                      Full-time
                    </span>
                  </div>
                </div>
                
                <p className="text-[#94A3B8] text-[14px] lg:text-[15px] leading-relaxed mb-8">
                  Worked on enterprise web applications, developed and maintained scalable features, collaborated with cross-functional teams, and contributed to product improvements.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-white text-[14px] font-[700] mb-4">Roles and Responsibilities</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug">Participated in requirement-gathering meetings with stakeholders to collect and document business and technical needs.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug">Validated the documented requirements to ensure they were accurate, complete, and served as a solid foundation for the project's design and development.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug">Developed application scripts, including modules for authentication, authorization, and self-service functionalities, aligned with project requirements and best practices.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug">Led a team of 4 engineers and 2 testers in developing a React.js and TypeScript application, increasing user engagement by 20%.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug">Designed and optimized RESTful APIs and API calls, ensuring efficient frontend-backend communication and improving page load speed by 15%.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug">Prepared and executed unit test cases, ensuring functionality and reliability by validating each component against the defined specifications.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug">Collaborated with cross-functional teams and resolved application issues through debugging, troubleshooting, and performance optimization to enhance reliability and user experience.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug">Improved application performance and reliability through code optimization and efficient API handling.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-[6px] h-[6px] mt-[7px] rounded-full bg-[#00D9A5] shrink-0"></span>
                        <span className="text-[#94A3B8] text-[14px] leading-snug">Handled the end-to-end deployment process, staging the application for User Acceptance Testing (UAT) and subsequently releasing it to the production environment.</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-white text-[14px] font-[700] mb-4 lg:text-left">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 lg:justify-start">
                      {['React', 'Node.js', 'REST APIs', 'Genesys Cloud', 'Google Dialogflow', 'Microsoft Azure Power Apps', 'Git', 'Agile', 'Jira'].map(tech => (
                        <span key={tech} className="px-3 py-1.5 bg-[#18283D]/40 border border-[#18283D] rounded-full text-[#00D9A5] text-[12px] font-[500] hover:bg-[#18283D] transition-colors cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Call to Action Section */}
      <div className="mt-8 mb-8 border border-[#00D9A5]/20 bg-[#00D9A5]/[0.03] backdrop-blur-sm rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6 hover:bg-[#00D9A5]/[0.05] transition-colors">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <div className="w-[60px] h-[60px] rounded-2xl bg-gradient-to-br from-[#00D9A5]/20 to-transparent flex items-center justify-center shrink-0 border border-[#00D9A5]/30 shadow-[0_0_15px_rgba(0,217,165,0.15)]">
            <span className="text-3xl">🚀</span>
          </div>
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-[18px] lg:text-[20px] font-[700] text-[#00D9A5]">Always open to new opportunities</h3>
            <p className="text-[#94A3B8] text-[14px] lg:text-[15px] mt-1.5">
              I'm excited to work on challenging problems, learn new technologies, and be part of impactful teams.
            </p>
          </div>
        </div>
        <Link to="/contact#message-form" className="whitespace-nowrap px-6 py-3 bg-transparent border border-[#00D9A5] text-[#00D9A5] hover:bg-[#00D9A5] hover:text-[#050A14] rounded-lg font-[600] transition-all flex items-center gap-2 group w-full sm:w-auto justify-center">
          Let's Connect
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[16px] h-[16px] group-hover:translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

    </div>
  );
};

export default Experience;
