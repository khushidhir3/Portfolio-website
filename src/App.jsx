import React, { useState } from 'react';
import profile from './assets/profile.png';
import about from './assets/about.png';

const Portfolio = () => {
    const [expandedSection, setExpandedSection] = useState(null);
    const [expandedProject, setExpandedProject] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const toggleProject = (project) => {
        setExpandedProject(expandedProject === project ? null : project);
    };

    const projects = [
        {
            id: 'notesheet',
            name: 'NOTESHEET TRACKER',
            subtitle: 'Academic Workflow Automation',
            description: 'A structured digital platform for students to submit note sheets and for HODs to review, approve, and track them efficiently.',
            features: [
                'Secure login & role-based access',
                'Real-time status tracking',
                'Automated notifications',
                'Responsive design across devices'
            ],
            tech: ['Flutter', 'Dart', 'Firebase', 'Supabase', 'REST API'],
            github: 'https://github.com/khushidhir3/Notesheet_Tracker',
            demo: '#'
        },
        {
            id: 'mindhorizon',
            name: 'MIND HORIZON',
            subtitle: 'Mental Health Awareness',
            description: 'Interactive quiz-based platform to identify early signs of stress, anxiety, and emotional imbalance with personalized guidance.',
            features: [
                'Automated scoring & behavior analysis',
                'Personalized self-care suggestions',
                'Early intervention support',
                'Intuitive & accessible UI'
            ],
            tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
            github: 'https://github.com/khushidhir3/Mental-health-awareness-among-children',
            demo: '#'
        },
        {
            id: 'project3',
            name: 'PROJECT THREE',
            subtitle: 'Coming Soon',
            description: 'An exciting new project currently in development. Stay tuned for updates!',
            features: [
                'Feature 1 coming soon',
                'Feature 2 coming soon',
                'Feature 3 coming soon'
            ],
            tech: ['React', 'Node.js', 'MongoDB'],
            github: '#',
            demo: '#'
        },
        {
            id: 'project4',
            name: 'PROJECT FOUR',
            subtitle: 'Coming Soon',
            description: 'Another exciting project in the pipeline. More details will be added soon!',
            features: [
                'Feature 1 coming soon',
                'Feature 2 coming soon',
                'Feature 3 coming soon'
            ],
            tech: ['Flutter', 'Firebase'],
            github: '#',
            demo: '#'
        }
    ];

    const certificates = [
        {
            id: 1,
            title: 'Mobile App Development',
            issuer: 'CipherSchools',
            date: 'July 2025',
            link: 'https://www.cipherschools.com/certificate/preview?id=687e16e27efd6d5090703c3f'
        },
        {
            id: 2,
            title: 'Data Structures & Algorithm',
            issuer: 'IamNeo',
            date: 'January 2025',
            link: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BrLbF7s0kcmBWo4uLb0gS4LpUyDfr%2FlMc%3D'
        },
        {
            id: 3,
            title: 'Social Networks',
            issuer: 'NPTEL',
            date: 'May 2025',
            link: 'https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS65S64750098204446322'
        }
    ];

    return (
        <div className="bg-[#A67B7B]">
            {/* Hero Section */}
            <div className="min-h-screen bg-[#5C1F1F] flex items-center justify-center relative overflow-hidden">
                <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-white text-[60px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-bold leading-none tracking-wider mb-6 md:mb-12" style={{fontFamily: 'serif', fontWeight: '900'}}>
                            PORTFOLIO
                        </h1>
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-widest">KHUSHI</h2>
                            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-widest">DHIR</h2>
                        </div>
                        <div className="text-white text-sm md:text-base font-light mt-6 md:mt-12 space-y-1">
                            <a href="https://www.linkedin.com/in/khushidhir3/" target="_blank" rel="noopener noreferrer" className="block hover:text-[#C4A5A0] transition-colors">LinkedIn: linkedin.com/in/khushidhir3</a>
                            <a href="https://github.com/khushidhir3" target="_blank" rel="noopener noreferrer" className="block hover:text-[#C4A5A0] transition-colors">GitHub: github.com/khushidhir3</a>
                            <a href="#contact" className="block hover:text-[#C4A5A0] transition-colors">Email: dhir.khushi.2005@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex-shrink-0">
                        <div className="w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px] bg-gradient-to-br from-[#8B6B6B] to-[#6B4F4F] rounded-sm relative overflow-hidden shadow-2xl flex items-center justify-center">
                            <img src={profile} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm animate-bounce">
                    <div className="flex flex-col items-center gap-2">
                        <span className="tracking-widest">SCROLL</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* About Me + Skills */}
            <div className={`transition-all duration-500 ${expandedSection === 'about' || expandedSection === 'skills' ? 'min-h-screen' : 'min-h-screen md:h-screen'} flex flex-col md:flex-row`}>
                <div
                    className={`transition-all duration-500 bg-[#E8DDD3] flex items-center justify-center p-6 md:p-12 cursor-pointer ${
                        expandedSection === 'about' ? 'w-full' : expandedSection === 'skills' ? 'w-0 md:w-16 overflow-hidden' : 'w-full md:w-1/2'
                    }`}
                    onClick={() => toggleSection('about')}
                >
                    {expandedSection === 'skills' ? (
                        <div className="transform -rotate-90 whitespace-nowrap">
                            <h3 className="text-[#5C1F1F] font-bold text-2xl md:text-4xl" style={{fontFamily: 'serif'}}>ABOUT ME</h3>
                        </div>
                    ) : (
                        <div className="max-w-[700px] w-full">
                            <div className={`flex flex-col ${expandedSection === 'about' ? 'md:flex-row md:items-center md:justify-between md:gap-16' : ''}`}>
                                <div className="flex-1">
                                    <h3 className={`text-[#5C1F1F] font-bold mb-4 md:mb-8 leading-none transition-all duration-500 ${expandedSection === 'about' ? 'text-5xl md:text-[100px]' : 'text-4xl md:text-6xl'}`} style={{fontFamily: 'serif'}}>
                                        ABOUT<br/>ME
                                    </h3>
                                    <p className={`text-[#5C1F1F] leading-relaxed mb-4 md:mb-8 transition-all duration-500 ${expandedSection === 'about' ? 'text-base md:text-xl' : 'text-sm md:text-base'}`}>
                                        Computer Science & Engineering Student<br className="hidden md:block"/>
                                        passionate about mobile and web<br className="hidden md:block"/>
                                        development.
                                    </p>
                                    {expandedSection === 'about' && (
                                        <div className="mt-4 md:mt-8 text-[#5C1F1F] text-base md:text-lg leading-relaxed space-y-3 md:space-y-4 animate-fade-in">
                                            <p>
                                                Currently pursuing B.Tech in Computer Science at Lovely Professional University with a CGPA of 7.48.
                                            </p>
                                            <p>
                                                Completed specialized training in Mobile Application Development using Flutter and have hands-on experience building real-world applications.
                                            </p>
                                            <p className="font-semibold text-lg md:text-xl">
                                                My focus: Creating functional, user-friendly applications that solve real problems and enhance user experience.
                                            </p>
                                        </div>
                                    )}
                                </div>
                                {expandedSection === 'about' && (
                                    <div className="w-full md:w-[450px] h-[400px] md:h-[550px] bg-gradient-to-br from-[#8B6B6B] to-[#6B4F4F] rounded-sm flex-shrink-0 shadow-2xl animate-fade-in mt-6 md:mt-0">
                                        <div className="w-full h-full flex items-center justify-center text-white text-sm">
                                            <img src={about} alt="Profile" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <div
                    className={`transition-all duration-500 bg-[#C4A5A0] flex items-center justify-center p-6 md:p-12 cursor-pointer ${
                        expandedSection === 'skills' ? 'w-full' : expandedSection === 'about' ? 'w-0 md:w-16 overflow-hidden' : 'w-full md:w-1/2'
                    }`}
                    onClick={() => toggleSection('skills')}
                >
                    {expandedSection === 'about' ? (
                        <div className="transform -rotate-90 whitespace-nowrap">
                            <h3 className="text-[#5C1F1F] font-bold text-2xl md:text-4xl" style={{fontFamily: 'serif'}}>SKILLS</h3>
                        </div>
                    ) : (
                        <div className="max-w-[900px] w-full">
                            <h3 className={`text-[#5C1F1F] font-bold mb-6 md:mb-12 leading-none transition-all duration-500 ${expandedSection === 'skills' ? 'text-5xl md:text-[100px]' : 'text-4xl md:text-6xl'}`} style={{fontFamily: 'serif'}}>
                                SKILLS
                            </h3>
                            <div className={`grid gap-6 md:gap-8 transition-all duration-500 ${expandedSection === 'skills' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2'}`}>
                                <div>
                                    <p className={`text-white font-bold mb-4 bg-[#5C1F1F] px-4 py-2 rounded-sm inline-block transition-all duration-500 ${expandedSection === 'skills' ? 'text-sm md:text-base' : 'text-xs'}`}>LANGUAGES</p>
                                    <ul className={`text-[#5C1F1F] space-y-2 mt-4 font-medium transition-all duration-500 ${expandedSection === 'skills' ? 'text-sm md:text-base' : 'text-xs'}`}>
                                        <li className="border-b border-[#5C1F1F] pb-1">C++</li>
                                        <li className="border-b border-[#5C1F1F] pb-1">Java</li>
                                        <li className="border-b border-[#5C1F1F] pb-1">JavaScript</li>
                                        <li className="border-b border-[#5C1F1F] pb-1">SQL</li>
                                        <li className="border-b border-[#5C1F1F] pb-1">Dart</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className={`text-white font-bold mb-4 bg-[#5C1F1F] px-4 py-2 rounded-sm inline-block transition-all duration-500 ${expandedSection === 'skills' ? 'text-sm md:text-base' : 'text-xs'}`}>FRONTEND</p>
                                    <ul className={`text-[#5C1F1F] space-y-2 mt-4 font-medium transition-all duration-500 ${expandedSection === 'skills' ? 'text-sm md:text-base' : 'text-xs'}`}>
                                        <li className="border-b border-[#5C1F1F] pb-1">HTML & CSS</li>
                                        <li className="border-b border-[#5C1F1F] pb-1">React.js</li>
                                        <li className="border-b border-[#5C1F1F] pb-1">Bootstrap</li>
                                        <li className="border-b border-[#5C1F1F] pb-1">Flutter</li>
                                    </ul>
                                </div>
                                {expandedSection === 'skills' && (
                                    <>
                                        <div className="animate-fade-in">
                                            <p className="text-white font-bold mb-4 bg-[#5C1F1F] px-4 py-2 rounded-sm inline-block text-sm md:text-base">BACKEND</p>
                                            <ul className="text-[#5C1F1F] space-y-2 mt-4 font-medium text-sm md:text-base">
                                                <li className="border-b border-[#5C1F1F] pb-1">Node.js</li>
                                                <li className="border-b border-[#5C1F1F] pb-1">REST API</li>
                                            </ul>
                                        </div>
                                        <div className="animate-fade-in">
                                            <p className="text-white font-bold mb-4 bg-[#5C1F1F] px-4 py-2 rounded-sm inline-block text-sm md:text-base">DATABASES</p>
                                            <ul className="text-[#5C1F1F] space-y-2 mt-4 font-medium text-sm md:text-base">
                                                <li className="border-b border-[#5C1F1F] pb-1">PostgreSQL</li>
                                                <li className="border-b border-[#5C1F1F] pb-1">MongoDB</li>
                                                <li className="border-b border-[#5C1F1F] pb-1">Firebase</li>
                                                <li className="border-b border-[#5C1F1F] pb-1">Supabase</li>
                                            </ul>
                                        </div>
                                    </>
                                )}
                            </div>
                            {expandedSection === 'skills' && (
                                <div className="mt-6 md:mt-8 animate-fade-in">
                                    <p className="text-white font-bold mb-4 bg-[#5C1F1F] px-4 py-2 rounded-sm inline-block text-sm md:text-base">TOOLS</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {['Figma', 'VS Code', 'Git', 'GitHub', 'Android Emulator'].map(tool => (
                                            <span key={tool} className="bg-[#E8DDD3] text-[#5C1F1F] px-3 py-1 rounded-sm text-xs md:text-sm font-medium">{tool}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Projects Section */}
            <div className="min-h-screen bg-[#5C1F1F] flex items-center justify-center p-6 md:p-12">
                <div className="max-w-[1400px] w-full">
                    <h3 className="text-white font-bold mb-8 md:mb-16 text-center leading-none text-5xl md:text-[100px]" style={{fontFamily: 'serif'}}>
                        PROJECTS
                    </h3>
                    <div className="space-y-4">
                        {projects.map((project) => (
                            <div key={project.id} className={`transition-all duration-500 ${expandedProject === project.id ? '' : expandedProject ? 'opacity-50 scale-95' : ''}`}>
                                <div
                                    className={`bg-[#E8DDD3] rounded-sm cursor-pointer transition-all duration-500 ${
                                        expandedProject === project.id ? 'p-8 md:p-12' : 'p-6 md:p-8 hover:bg-[#D4C4B8]'
                                    }`}
                                    onClick={() => toggleProject(project.id)}
                                >
                                    {expandedProject === project.id ? (
                                        <div className="animate-fade-in">
                                            <div className="flex flex-col md:flex-row gap-8">
                                                <div className="w-full md:w-1/3">
                                                    <div className="aspect-video bg-gradient-to-br from-[#5C1F1F] to-[#3A1010] rounded-sm flex items-center justify-center shadow-xl">
                                                        <span className="text-white text-sm opacity-50">PROJECT IMAGE</span>
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-[#5C1F1F] font-bold text-3xl md:text-5xl mb-2" style={{fontFamily: 'serif'}}>{project.name}</h4>
                                                    <p className="text-[#5C1F1F] text-lg md:text-xl mb-4 font-light">{project.subtitle}</p>
                                                    <p className="text-[#5C1F1F] mb-6 text-sm md:text-base">{project.description}</p>
                                                    <div className="mb-6">
                                                        <h5 className="text-[#5C1F1F] font-bold mb-3">Key Features:</h5>
                                                        <ul className="space-y-2 text-[#5C1F1F] text-sm md:text-base">
                                                            {project.features.map((feature, idx) => (
                                                                <li key={idx}>• {feature}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 mb-6">
                                                        {project.tech.map((tech) => (
                                                            <span key={tech} className="bg-[#5C1F1F] text-white px-4 py-2 rounded-sm text-xs md:text-sm font-medium">{tech}</span>
                                                        ))}
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-[#5C1F1F] text-white px-6 py-3 rounded-sm hover:bg-[#3A1010] transition-colors text-sm md:text-base font-medium">
                                                            Try It
                                                        </a>
                                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-white text-[#5C1F1F] px-6 py-3 rounded-sm hover:bg-gray-100 transition-colors text-sm md:text-base font-medium">
                                                            GitHub
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-[#5C1F1F] font-bold text-2xl md:text-4xl" style={{fontFamily: 'serif'}}>{project.name}</h4>
                                            <svg className="w-6 h-6 text-[#5C1F1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Achievements + Education */}
            <div className={`transition-all duration-500 ${expandedSection === 'achievements' || expandedSection === 'education' ? 'min-h-screen' : 'min-h-screen md:h-screen'} flex flex-col md:flex-row`}>
                <div
                    className={`transition-all duration-500 bg-[#C4A5A0] flex items-center justify-center p-6 md:p-12 cursor-pointer ${
                        expandedSection === 'achievements' ? 'w-full' : expandedSection === 'education' ? 'w-0 md:w-16 overflow-hidden' : 'w-full md:w-1/2'
                    }`}
                    onClick={() => toggleSection('achievements')}
                >
                    {expandedSection === 'education' ? (
                        <div className="transform -rotate-90 whitespace-nowrap">
                            <h3 className="text-[#5C1F1F] font-bold text-2xl md:text-4xl" style={{fontFamily: 'serif'}}>ACHIEVEMENTS</h3>
                        </div>
                    ) : (
                        <div className="max-w-[700px] w-full">
                            <h3 className={`text-[#5C1F1F] font-bold mb-6 md:mb-12 leading-none transition-all duration-500 ${expandedSection === 'achievements' ? 'text-5xl md:text-[90px]' : 'text-4xl md:text-6xl'}`} style={{fontFamily: 'serif'}}>
                                ACHIEVEMENTS
                            </h3>
                            <div className="space-y-4 md:space-y-6">
                                <div className="bg-[#5C1F1F] text-white p-6 md:p-8 rounded-sm hover:scale-105 transition-transform shadow-xl">
                                    <h4 className="font-bold mb-3 text-lg md:text-xl">Competitive Programming</h4>
                                    <p className="text-sm md:text-base">
                                        <strong>1632 Rating</strong> on LeetCode<br/>
                                        <strong>1048 Rating</strong> on CodeChef<br/>
                                        Solved <strong>500+ DSA Problems</strong><br/>
                                        <strong>270+ day streak</strong>
                                    </p>
                                </div>
                                <div className="bg-[#E8DDD3] text-[#5C1F1F] p-6 md:p-8 rounded-sm hover:scale-105 transition-transform shadow-xl">
                                    <h4 className="font-bold mb-3 text-lg md:text-xl">Hackathons & Events</h4>
                                    <p className="text-sm md:text-base">
                                        <strong>Top 10 Team</strong> at Innovate X Hackathon<br/>
                                        Among <strong>250+ teams</strong>
                                    </p>
                                </div>
                                <div className="bg-white text-[#5C1F1F] p-6 md:p-8 rounded-sm hover:scale-105 transition-transform shadow-xl">
                                    <h4 className="font-bold mb-3 text-lg md:text-xl">Development Excellence</h4>
                                    <p className="text-sm md:text-base">
                                        Built <strong>2+ Production Apps</strong><br/>
                                        Completed <strong>Flutter Training</strong><br/>
                                        <strong>3 Professional Certificates</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div
                    className={`transition-all duration-500 bg-[#E8DDD3] flex items-center justify-center p-6 md:p-12 cursor-pointer ${
                        expandedSection === 'education' ? 'w-full' : expandedSection === 'achievements' ? 'w-0 md:w-16 overflow-hidden' : 'w-full md:w-1/2'
                    }`}
                    onClick={() => toggleSection('education')}
                >
                    {expandedSection === 'achievements' ? (
                        <div className="transform -rotate-90 whitespace-nowrap">
                            <h3 className="text-[#5C1F1F] font-bold text-2xl md:text-4xl" style={{fontFamily: 'serif'}}>EDUCATION</h3>
                        </div>
                    ) : (
                        <div className="max-w-[700px] w-full">
                            <h3 className={`text-[#5C1F1F] font-bold mb-6 md:mb-12 leading-none transition-all duration-500 ${expandedSection === 'education' ? 'text-5xl md:text-[90px]' : 'text-4xl md:text-6xl'}`} style={{fontFamily: 'serif'}}>
                                EDUCATION
                            </h3>
                            <div className="grid gap-4 md:gap-6">
                                <div className="bg-[#5C1F1F] text-white p-6 md:p-10 rounded-sm hover:scale-105 transition-transform shadow-2xl">
                                    <p className="text-sm mb-4 opacity-70">2023 - Present</p>
                                    <p className="text-base md:text-lg mb-2">
                                        <strong>B.Tech - Computer Science</strong><br/>
                                        Lovely Professional University
                                    </p>
                                    <p className="text-sm opacity-80">CGPA: 7.48</p>
                                </div>
                                {expandedSection === 'education' && (
                                    <>
                                        <div className="bg-white text-[#5C1F1F] p-6 md:p-8 rounded-sm hover:scale-105 transition-transform shadow-2xl animate-fade-in">
                                            <p className="text-sm mb-4 opacity-70">2021 - 2023</p>
                                            <p className="text-base md:text-lg mb-2">
                                                <strong>Senior Secondary</strong><br/>
                                                Shivalik Public School
                                            </p>
                                            <p className="text-sm opacity-80">73.2%</p>
                                        </div>
                                        <div className="bg-white text-[#5C1F1F] p-6 md:p-8 rounded-sm hover:scale-105 transition-transform shadow-2xl animate-fade-in">
                                            <p className="text-sm mb-4 opacity-70">2019 - 2021</p>
                                            <p className="text-base md:text-lg mb-2">
                                                <strong>Matriculation</strong><br/>
                                                Shivalik Public School
                                            </p>
                                            <p className="text-sm opacity-80">87.2%</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Certificates + Resume */}
            <div className={`transition-all duration-500 ${expandedSection === 'certificates' || expandedSection === 'resume' ? 'min-h-screen' : 'min-h-screen md:h-screen'} flex flex-col md:flex-row`}>
                <div
                    className={`transition-all duration-500 bg-[#E8DDD3] flex items-center justify-center p-6 md:p-12 cursor-pointer ${
                        expandedSection === 'certificates' ? 'w-full' : expandedSection === 'resume' ? 'w-0 md:w-16 overflow-hidden' : 'w-full md:w-1/2'
                    }`}
                    onClick={() => toggleSection('certificates')}
                >
                    {expandedSection === 'resume' ? (
                        <div className="transform -rotate-90 whitespace-nowrap">
                            <h3 className="text-[#5C1F1F] font-bold text-2xl md:text-4xl" style={{fontFamily: 'serif'}}>CERTIFICATES</h3>
                        </div>
                    ) : (
                        <div className="max-w-[700px] w-full">
                            <h3 className={`text-[#5C1F1F] font-bold mb-6 md:mb-12 leading-none transition-all duration-500 ${expandedSection === 'certificates' ? 'text-5xl md:text-[100px]' : 'text-4xl md:text-6xl'}`} style={{fontFamily: 'serif'}}>
                                CERTIFICATES
                            </h3>
                            <div className={`grid gap-4 md:gap-6 transition-all duration-500 ${expandedSection === 'certificates' ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-3'}`}>
                                {certificates.map((cert) => (
                                    <div key={cert.id}>
                                        <div className={`transition-all duration-500 ${expandedSection === 'certificates' ? 'aspect-[3/4] rounded-sm' : 'aspect-square rounded-full'} overflow-hidden hover:scale-110 transition-transform shadow-xl bg-gradient-to-br from-[#8B6B6B] to-[#6B4F4F] flex items-center justify-center`}>
                                            <span className="text-white text-xs opacity-50">CERT</span>
                                        </div>
                                        {expandedSection === 'certificates' && (
                                            <div className="mt-3 text-center animate-fade-in">
                                                <p className="text-[#5C1F1F] font-bold text-sm">{cert.title}</p>
                                                <p className="text-[#5C1F1F] text-xs opacity-70 mt-1">{cert.issuer} - {cert.date}</p>
                                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-[#5C1F1F] text-xs underline hover:text-[#3A1010]">
                                                    Verify →
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div
                    className={`transition-all duration-500 bg-[#C4A5A0] flex items-center justify-center p-6 md:p-12 cursor-pointer ${
                        expandedSection === 'resume' ? 'w-full' : expandedSection === 'certificates' ? 'w-0 md:w-16 overflow-hidden' : 'w-full md:w-1/2'
                    }`}
                    onClick={() => toggleSection('resume')}
                >
                    {expandedSection === 'certificates' ? (
                        <div className="transform -rotate-90 whitespace-nowrap">
                            <h3 className="text-[#5C1F1F] font-bold text-2xl md:text-4xl" style={{fontFamily: 'serif'}}>RESUME</h3>
                        </div>
                    ) : (
                        <div className="max-w-[700px] w-full">
                            <h3 className={`text-[#5C1F1F] font-bold mb-6 md:mb-12 leading-none transition-all duration-500 ${expandedSection === 'resume' ? 'text-5xl md:text-[100px]' : 'text-4xl md:text-6xl'}`} style={{fontFamily: 'serif'}}>
                                RESUME
                            </h3>
                            <div className="flex flex-col items-center">
                                <div className="w-full max-w-md aspect-[8.5/11] bg-white rounded-sm shadow-2xl mb-6 overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-[#5C1F1F] text-sm opacity-30">
                                        RESUME PREVIEW
                                    </div>
                                </div>
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        // Add your resume download logic here
                                        alert('Resume download will be implemented here');
                                    }}
                                    className="bg-[#5C1F1F] text-white px-8 py-4 rounded-sm hover:bg-[#3A1010] transition-colors text-base md:text-lg font-medium shadow-xl"
                                >
                                    Download Resume
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="min-h-screen bg-[#5C1F1F] flex items-center justify-center p-6 md:p-12">
                <div className="max-w-[800px] w-full">
                    <h3 className="text-white font-bold mb-8 md:mb-16 text-center leading-none text-5xl md:text-[100px]" style={{fontFamily: 'serif'}}>
                        CONTACT
                    </h3>
                    <div className="bg-[#E8DDD3] p-8 md:p-12 rounded-sm shadow-2xl">
                        <form className="space-y-6" onSubmit={(e) => {
                            e.preventDefault();
                            alert('Form submission will be implemented here');
                        }}>
                            <div>
                                <label className="block text-[#5C1F1F] font-medium mb-2">Name</label>
                                <input type="text" required className="w-full px-4 py-3 rounded-sm border-2 border-[#5C1F1F] focus:outline-none focus:border-[#3A1010]" />
                            </div>
                            <div>
                                <label className="block text-[#5C1F1F] font-medium mb-2">Email</label>
                                <input type="email" required className="w-full px-4 py-3 rounded-sm border-2 border-[#5C1F1F] focus:outline-none focus:border-[#3A1010]" />
                            </div>
                            <div>
                                <label className="block text-[#5C1F1F] font-medium mb-2">Message</label>
                                <textarea required rows="6" className="w-full px-4 py-3 rounded-sm border-2 border-[#5C1F1F] focus:outline-none focus:border-[#3A1010] resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-[#5C1F1F] text-white px-8 py-4 rounded-sm hover:bg-[#3A1010] transition-colors text-lg font-medium">
                                Send Message
                            </button>
                        </form>
                        <div className="mt-8 pt-8 border-t-2 border-[#C4A5A0]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#5C1F1F]">
                                <div>
                                    <h4 className="font-bold mb-2">Email</h4>
                                    <a href="mailto:dhir.khushi.2005@gmail.com" className="hover:text-[#3A1010]">dhir.khushi.2005@gmail.com</a>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">Phone</h4>
                                    <a href="tel:+916284827233" className="hover:text-[#3A1010]">+91-6284827233</a>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">LinkedIn</h4>
                                    <a href="https://www.linkedin.com/in/khushidhir3/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3A1010]">linkedin.com/in/khushidhir3</a>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">GitHub</h4>
                                    <a href="https://github.com/khushidhir3" target="_blank" rel="noopener noreferrer" className="hover:text-[#3A1010]">github.com/khushidhir3</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-[#2A1212] text-white py-6 text-center">
                <p className="text-sm opacity-70">© 2025 Khushi Dhir. All rights reserved.</p>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }
            `}</style>
        </div>
    );
};

export default Portfolio;