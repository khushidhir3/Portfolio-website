import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import profile from './assets/profile.png';
import about from './assets/about.png';
import resumePreview from './assets/resumePreview.png';
import portfolio from './assets/portfolio.png';
import MAD from './assets/MAD.jpg'
import emailjs from '@emailjs/browser';
import CT from './assets/CT.jpg';
import OOP from './assets/OOP.jpg';
import DSA from './assets/DSA.jpg';
import JP from './assets/JP.jpg';
import Notesheet from './assets/Notesheet.png';
import Mindhorizon from './assets/MindHorizon.png';
import Whiskarts from './assets/Whiskarts.png';
import Lifestream from './assets/Lifestream.png';
const Portfolio = () => {
    const [expandedSection, setExpandedSection] = useState(null);
    const [expandedProject, setExpandedProject] = useState(null);
    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const toggleProject = (project) => {
        setExpandedProject(expandedProject === project ? null : project);
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        emailjs.send(
            'service_6d1kbj7',
            'template_pq6oqxs',
            {
                from_name: formData.name,
                reply_to: formData.email,
                message: formData.message,
            },
            'wMDswmuF8o8YusqIS'
        )
            .then(() => {
                alert('✅ Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error(error);
                alert('❌ Failed to send message. Try again.');
            });
    };

    const projects = [
        {
            id: 'notesheet',
            name: 'NOTESHEET TRACKER',
            image:  Notesheet,
            subtitle: 'Academic Workflow Automation',
            description:
                'A structured digital platform that streamlines the submission, review, and approval of academic note sheets, enabling efficient coordination between students and HODs.',
            features: [
                'Secure authentication with role-based access (Student, HOD)',
                'Real-time note sheet status tracking',
                'Automated approval and rejection workflow',
                'Email and in-app notifications',
                'Responsive UI for mobile and web'
            ],
            tech: ['Flutter', 'Dart', 'Firebase', 'Supabase', 'REST API'],
            github: 'https://github.com/khushidhir3/Notesheet_Tracker',
            demo: '#'
        },
        {
            id: 'mindhorizon',
            name: 'MIND HORIZON',
            image: Mindhorizon,
            subtitle: 'Mental Health Awareness Platform',
            description:
                'An interactive quiz-based web platform designed to identify early indicators of stress, anxiety, and emotional imbalance, offering personalized insights and guidance.',
            features: [
                'Quiz-based mental health assessment',
                'Automated scoring and behavior analysis',
                'Personalized self-care recommendations',
                'Focus on early awareness and prevention',
                'Simple and accessible user interface'
            ],
            tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
            github: 'https://github.com/khushidhir3/Mental-health-awareness-among-children',
            demo: '#'
        },
        {
            id: 'whiskarts',
            name: 'WHISKARTS',
            image: Whiskarts,
            subtitle: 'E-commerce Platform',
            description:
                'A cute modern e-commerce web application built to deliver a smooth shopping experience with product browsing, cart management, and user-friendly navigation.',
            features: [
                'Product listing with category-based filtering',
                'Dynamic cart and checkout flow',
                'Responsive design for all screen sizes',
                'Clean and modern UI focused on usability',
                'Scalable frontend architecture'
            ],
            tech: ['React', 'JavaScript', 'CSS', 'Node.js'],
            github: 'https://github.com/khushidhir3/Whiskarts',
            demo: '#'
        },
        {
            id: 'lifestream',
            name: 'LIFESTREAM',
            image: Lifestream,
            subtitle: 'Blood Donation & Health Awareness',
            description:
                'A purpose-driven platform aimed at connecting blood donors with recipients while promoting health awareness and emergency readiness.',
            features: [
                'Donor and recipient information management',
                'User-friendly interface for quick access',
                'Focus on real-time availability and outreach',
                'Designed for emergency use cases',
                'Scalable foundation for future enhancements'
            ],
            tech: ['React', 'JavaScript', 'CSS', 'Node.js','MongoDB'],
            github: 'https://github.com/khushidhir3/LifeStream',
            demo: '#'
        },
        {
            id: 'portfolio',
            name: 'PORTFOLIO WEBSITE',
            image: portfolio,
            subtitle: 'Personal Brand & Showcase',
            description:
                'A visually rich, interactive portfolio website designed to showcase projects, skills, achievements, and professional growth with smooth animations and responsive design.',
            features: [
                'Interactive section-based layout',
                'Smooth animations and transitions',
                'Fully responsive across devices',
                'Clean typography and visual hierarchy',
                'Optimized for performance and readability'
            ],
            tech: ['React', 'Tailwind CSS', 'JavaScript'],
            github: 'https://github.com/khushidhir3/Portfolio-website',
            demo: '#'
        }
    ];

    const certificates = [
        {
            id: 1,
            title: 'Mobile App Development using Flutter',
            issuer: 'CipherSchools',
            date: 'July 2025',
            image: MAD,
            link: 'https://www.cipherschools.com/certificate/preview?id=687e16e27efd6d5090703c3f'
        },
        {
            id: 2,
            title: 'Data Structures & Algorithm',
            issuer: 'IamNeo',
            date: 'January 2025',
            image: DSA,
            link: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BrLbF7s0kcmBWo4uLb0gS4LpUyDfr%2FlMc%3D'
        },
        {
            id: 3,
            title: 'Social Networks',
            issuer: 'NPTEL',
            date: 'May 2025',
            image: MAD,
            link: 'https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS65S64750098204446322'
        },
        {
            id: 4,
            title: 'Object Oriented Programming',
            issuer: 'IamNeo',
            date: 'January 2025',
            image: OOP,
            link: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX19rwmrlqZAufSa7quyGxZs%2FBG2riTom0gc%3D'
        },
        {
            id: 5,
            title: 'Java Programming',
            issuer: 'IamNeo',
            date: 'May 2025',
            image: JP,
            link: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BVpzdjk45vwHNMojAPgmk4PcOmlaJWNkc%3D'
        },
        {
            id: 6,
            title: 'Computational Theory : Language Principle and Finite Automata Theory',
            issuer: 'Infosys Springboard',
            date: 'August 2025',
            image: CT,
            link: 'https://verify.onwingspan.com/'
        }
    ];

    return (
        <div className="bg-[#A67B7B]">
            <Analytics />
            <div className="min-h-screen bg-[#5C1F1F] flex items-center justify-center relative overflow-hidden">
                <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-white text-[60px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-bold leading-none tracking-wider mb-6 md:mb-12 hover-lift" style={{fontFamily: 'serif', fontWeight: '900'}}>
                            PORTFOLIO
                        </h1>
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-widest hover-glow">KHUSHI</h2>
                            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-widest hover-glow">DHIR </h2>
                        </div>
                        <div className="text-white text-sm md:text-base font-light mt-6 md:mt-12 space-y-1">
                            <a href="https://www.linkedin.com/in/khushidhir3/" target="_blank" rel="noopener noreferrer" className="block text-lg hover:text-[#C4A5A0] transition-all duration-300 hover:translate-x-2">LinkedIn: khushidhir3</a>
                            <a href="https://github.com/khushidhir3" target="_blank" rel="noopener noreferrer" className="block hover:text-[#C4A5A0] text-lg transition-all duration-300 hover:translate-x-2">GitHub: khushidhir3</a>
                            <a href="mailto:dhir.khushi.2005@gmail.com" className="block hover:text-[#C4A5A0] transition-all duration-300 text-lg hover:translate-x-2">Email: dhir.khushi.2005@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex-shrink-0">
                        <div className="w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px] bg-gradient-to-br from-[#8B6B6B] to-[#6B4F4F] rounded-sm relative overflow-hidden shadow-2xl flex items-center justify-center hover-scale">
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

            <div className={`transition-all duration-500 ${expandedSection === 'about' || expandedSection === 'skills' ? 'min-h-screen' : 'min-h-screen md:h-screen'} flex flex-col md:flex-row`}>
                <div
                    className={`transition-all duration-500 bg-[#E8DDD3] flex items-center justify-center p-6 md:p-12 cursor-pointer hover-bg-shift ${
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
                                    <h3 className={`text-[#5C1F1F] font-bold mb-4 md:mb-8 leading-none transition-all duration-500 hover-lift ${expandedSection === 'about' ? 'text-5xl md:text-[100px]' : 'text-4xl md:text-6xl'}`} style={{fontFamily: 'serif'}}>
                                        ABOUT<br/>ME
                                    </h3>
                                    <p
                                        className={`text-[#5C1F1F] leading-relaxed mb-4 md:mb-8 transition-all duration-500 ${
                                            expandedSection === 'about'
                                                ? 'text-base md:text-xl'
                                                : 'text-sm md:text-base'
                                        }`}
                                    >
                                        Computer Science & Engineering student with a strong foundation in programming and problem-solving,<br className="hidden md:block"/>
                                        deeply passionate about building scalable mobile and web applications
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
                                    <div className="w-full md:w-[450px] h-[400px] md:h-[550px] bg-gradient-to-br from-[#8B6B6B] to-[#6B4F4F] rounded-sm flex-shrink-0 shadow-2xl animate-fade-in mt-6 md:mt-0 hover-scale">
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
                    className={`transition-all duration-500 bg-[#C4A5A0] flex items-center justify-center p-6 md:p-12 cursor-pointer hover-bg-shift ${
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
                            <h3 className={`text-[#5C1F1F] font-bold mb-6 md:mb-12 leading-none transition-all duration-500 hover-lift ${expandedSection === 'skills' ? 'text-5xl md:text-[100px]' : 'text-4xl md:text-6xl'}`} style={{fontFamily: 'serif'}}>
                                SKILLS
                            </h3>
                            <div className={`grid gap-6 md:gap-8 transition-all duration-500 ${expandedSection === 'skills' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2'}`}>
                                <div>
                                    <p className={`text-white font-bold mb-4 bg-[#5C1F1F] px-4 py-2 rounded-sm inline-block transition-all duration-500 hover-lift ${expandedSection === 'skills' ? 'text-sm md:text-base' : 'text-xs'}`}>LANGUAGES</p>
                                    <ul className={`text-[#5C1F1F] space-y-2 mt-4 font-medium transition-all duration-500 ${expandedSection === 'skills' ? 'text-sm md:text-base' : 'text-xs'}`}>
                                        <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">C++</li>
                                        <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">Java</li>
                                        <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">JavaScript</li>
                                        <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">SQL</li>
                                        <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">Dart</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className={`text-white font-bold mb-4 bg-[#5C1F1F] px-4 py-2 rounded-sm inline-block transition-all duration-500 hover-lift ${expandedSection === 'skills' ? 'text-sm md:text-base' : 'text-xs'}`}>FRONTEND</p>
                                    <ul className={`text-[#5C1F1F] space-y-2 mt-4 font-medium transition-all duration-500 ${expandedSection === 'skills' ? 'text-sm md:text-base' : 'text-xs'}`}>
                                        <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">HTML & CSS</li>
                                        <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">React.js</li>
                                        <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">Bootstrap</li>
                                        <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">Flutter</li>
                                    </ul>
                                </div>
                                {expandedSection === 'skills' && (
                                    <>
                                        <div className="animate-fade-in">
                                            <p className="text-white font-bold mb-4 bg-[#5C1F1F] px-4 py-2 rounded-sm inline-block text-sm md:text-base hover-lift">BACKEND</p>
                                            <ul className="text-[#5C1F1F] space-y-2 mt-4 font-medium text-sm md:text-base">
                                                <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">Node.js</li>
                                                <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">REST API</li>
                                            </ul>
                                        </div>
                                        <div className="animate-fade-in">
                                            <p className="text-white font-bold mb-4 bg-[#5C1F1F] px-4 py-2 rounded-sm inline-block text-sm md:text-base hover-lift">DATABASES</p>
                                            <ul className="text-[#5C1F1F] space-y-2 mt-4 font-medium text-sm md:text-base">
                                                <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">PostgreSQL</li>
                                                <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">MongoDB</li>
                                                <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">Firebase</li>
                                                <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">Supabase</li>
                                            </ul>
                                        </div>
                                        <div className="animate-fade-in">
                                            <p className="text-white font-bold mb-4 bg-[#5C1F1F] px-4 py-2 rounded-sm inline-block text-sm md:text-base hover-lift">TOOLS</p>
                                            <ul className="text-[#5C1F1F] space-y-2 mt-4 font-medium text-sm md:text-base">
                                                <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">Figma</li>
                                                <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">VSCode</li>
                                                <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">Git</li>
                                                <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">GitHub</li>
                                                <li className="border-b border-[#5C1F1F] pb-1 hover:translate-x-2 transition-transform duration-300">Android Emulator</li>
                                            </ul>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="min-h-screen bg-[#5C1F1F] flex items-center justify-center p-6 md:p-12">
                <div className="max-w-[1400px] w-full">
                    <h3 className="text-white font-bold mb-8 md:mb-16 text-center leading-none text-5xl md:text-[100px] hover-lift" style={{fontFamily: 'serif'}}>
                        PROJECTS
                    </h3>
                    <div className="space-y-4">
                        {projects.map((project) => (
                            <div key={project.id} className={`transition-all duration-500 ${expandedProject === project.id ? '' : expandedProject ? 'opacity-50 scale-95' : ''}`}>
                                <div
                                    className={`bg-[#E8DDD3] rounded-sm cursor-pointer transition-all duration-500 hover-card ${
                                        expandedProject === project.id ? 'p-8 md:p-12' : 'p-6 md:p-8 hover:bg-[#D4C4B8]'
                                    }`}
                                    onClick={() => toggleProject(project.id)}
                                >
                                    {expandedProject === project.id ? (
                                        <div className="animate-fade-in">
                                            <div className="flex flex-col md:flex-row gap-8">
                                                <div className="w-full md:w-1/3">
                                                    <div className="aspect-video rounded-sm overflow-hidden shadow-xl hover-scale">
                                                        <img
                                                            src={project.image}
                                                            alt={project.name}
                                                            className="w-full h-full object-cover"
                                                        />
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
                                                                <li key={idx} className="hover:translate-x-2 transition-transform duration-300">• {feature}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 mb-6">
                                                        {project.tech.map((tech) => (
                                                            <span key={tech} className="bg-[#5C1F1F] text-white px-4 py-2 rounded-sm text-xs md:text-sm font-medium hover-lift">{tech}</span>
                                                        ))}
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-[#5C1F1F] text-white px-6 py-3 rounded-sm hover:bg-[#3A1010] transition-all duration-300 text-sm md:text-base font-medium hover-lift">
                                                            Try It
                                                        </a>
                                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-white text-[#5C1F1F] px-6 py-3 rounded-sm hover:bg-gray-100 transition-all duration-300 text-sm md:text-base font-medium hover-lift">
                                                            GitHub
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-[#5C1F1F] font-bold text-2xl md:text-4xl" style={{fontFamily: 'serif'}}>{project.name}</h4>
                                            <svg className="w-6 h-6 text-[#5C1F1F] transition-transform duration-300 hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

            <div className={`transition-all duration-500 ${expandedSection === 'achievements' || expandedSection === 'education' ? 'min-h-screen' : 'min-h-screen md:h-screen'} flex flex-col md:flex-row`}>
                <div
                    className={`transition-all duration-500 bg-[#C4A5A0] flex items-center justify-center p-6 md:p-12 cursor-pointer hover-bg-shift ${
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
                            <h3 className={`text-[#5C1F1F] font-bold mb-6 md:mb-12 leading-none transition-all duration-500 hover-lift ${expandedSection === 'achievements' ? 'text-5xl md:text-[90px]' : 'text-4xl md:text-6xl'}`} style={{fontFamily: 'serif'}}>
                                ACHIEVEMENTS
                            </h3>
                            <div className="space-y-4 md:space-y-6">
                                <div className="bg-[#5C1F1F] text-white p-6 md:p-8 rounded-sm hover:scale-105 transition-transform shadow-xl hover-card">
                                    <h4 className="font-bold mb-3 text-lg md:text-xl">Competitive Programming</h4>
                                    <p className="text-sm md:text-base">
                                        <strong>1632 Rating</strong> on LeetCode<br/>
                                        <strong>1048 Rating</strong> on CodeChef<br/>
                                        Solved <strong>500+ DSA Problems</strong><br/>
                                        <strong>300+ day streak</strong>
                                    </p>
                                </div>
                                <div className="bg-[#E8DDD3] text-[#5C1F1F] p-6 md:p-8 rounded-sm hover:scale-105 transition-transform shadow-xl hover-card">
                                    <h4 className="font-bold mb-3 text-lg md:text-xl">Hackathons & Events</h4>
                                    <p className="text-sm md:text-base">
                                        <strong>Top 10 Team</strong> at Innovate X Hackathon<br/>
                                        Among <strong>250+ teams</strong>
                                    </p>
                                </div>
                                <div className="bg-white text-[#5C1F1F] p-6 md:p-8 rounded-sm hover:scale-105 transition-transform shadow-xl hover-card">
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
                    className={`transition-all duration-500 bg-[#E8DDD3] flex items-center justify-center p-6 md:p-12 cursor-pointer hover-bg-shift ${
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
                            <h3 className={`text-[#5C1F1F] font-bold mb-6 md:mb-12 leading-none transition-all duration-500 hover-lift ${expandedSection === 'education' ? 'text-5xl md:text-[90px]' : 'text-4xl md:text-6xl'}`} style={{fontFamily: 'serif'}}>
                                EDUCATION
                            </h3>
                            <div className="grid gap-4 md:gap-6">
                                <div className="bg-[#5C1F1F] text-white p-6 md:p-10 rounded-sm hover:scale-105 transition-transform shadow-2xl hover-card">
                                    <p className="text-sm mb-4 opacity-70">2023 - Present</p>
                                    <p className="text-base md:text-lg mb-2">
                                        <strong>B.Tech - Computer Science</strong><br/>
                                        Lovely Professional University
                                    </p>
                                    <p className="text-sm opacity-80">CGPA: 7.48</p>
                                </div>
                                {expandedSection === 'education' && (
                                    <>
                                        <div className="bg-white text-[#5C1F1F] p-6 md:p-8 rounded-sm hover:scale-105 transition-transform shadow-2xl animate-fade-in hover-card">
                                            <p className="text-sm mb-4 opacity-70">2021 - 2023</p>
                                            <p className="text-base md:text-lg mb-2">
                                                <strong>Senior Secondary</strong><br/>
                                                Shivalik Public School
                                            </p>
                                            <p className="text-sm opacity-80">73.2%</p>
                                        </div>
                                        <div className="bg-white text-[#5C1F1F] p-6 md:p-8 rounded-sm hover:scale-105 transition-transform shadow-2xl animate-fade-in hover-card">
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

            <div className={`transition-all duration-500 ${expandedSection === 'certificates' || expandedSection === 'resume' ? 'min-h-screen' : 'min-h-screen md:h-screen'} flex flex-col md:flex-row`}>
                <div
                    className={`transition-all duration-500 bg-[#E8DDD3] flex items-center justify-center p-6 md:p-12 cursor-pointer hover-bg-shift ${
                        expandedSection === 'certificates' ? 'w-full' : expandedSection === 'resume' ? 'w-0 md:w-16 overflow-hidden' : 'w-full md:w-1/2'
                    }`}
                    onClick={() => toggleSection('certificates')}
                >
                    {expandedSection === 'resume' ? (
                        <div className="transform -rotate-90 whitespace-nowrap">
                            <h3 className="text-[#5C1F1F] font-bold text-2xl md:text-4xl" style={{fontFamily: 'serif'}}>CERTIFICATES</h3>
                        </div>
                    ) : (
                        <div className="w-full max-w-[1200px] mx-auto">
                            <h3 className={`text-[#5C1F1F] font-bold mb-6 md:mb-12 leading-none transition-all duration-500 hover-lift ${expandedSection === 'certificates' ? 'text-5xl md:text-[100px]' : 'text-4xl md:text-6xl'}`} style={{fontFamily: 'serif'}}>
                                CERTIFICATES
                            </h3>
                            <div
                                className={`grid gap-12 justify-items-center transition-all duration-500
                                ${
                                    expandedSection === 'certificates'
                                        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                                        : 'grid-cols-2 md:grid-cols-3'
                                }
                            `}
                            >

                                {certificates.map((cert) => (
                                    <div key={cert.id}>
                                        <div
                                            className={`transition-all duration-500 overflow-hidden shadow-xl bg-white hover-scale
                                            ${
                                                expandedSection === 'certificates'
                                                    ?  'w-[260px] h-[260px] sm:w-[300px] sm:h-[300px]'
                                                    : 'w-[200px] h-[200px] md:w-[240px] md:h-[240px]'
                                            }
                                       `}
                                        >
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="w-full h-full object-contain p-3"
                                            />
                                        </div>

                                        {expandedSection === 'certificates' && (
                                            <div className="mt-3 text-center animate-fade-in">
                                                <p className="text-[#5C1F1F] font-bold text-sm">{cert.title}</p>
                                                <p className="text-[#5C1F1F] text-xs opacity-70 mt-1">{cert.issuer} - {cert.date}</p>
                                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-[#5C1F1F] text-xs underline hover:text-[#3A1010] transition-colors duration-300">
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
                    className={`transition-all duration-500 bg-[#C4A5A0] flex items-center justify-center p-6 md:p-12 cursor-pointer hover-bg-shift ${
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
                            <h3 className={`text-[#5C1F1F] font-bold mb-6 md:mb-12 leading-none transition-all duration-500 hover-lift ${expandedSection === 'resume' ? 'text-5xl md:text-[100px]' : 'text-4xl md:text-6xl'}`} style={{fontFamily: 'serif'}}>
                                RESUME
                            </h3>
                            <div className="flex flex-col items-center">
                                <div className="w-full max-w-md aspect-[11/11] bg-white rounded-sm shadow-2xl mb-6 overflow-hidden hover-scale">
                                    <div className="w-full h-full flex items-center justify-center text-[#5C1F1F] text-sm">
                                        <img src={resumePreview} alt="ResumePreview" />
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="bg-[#5C1F1F] text-white px-8 py-4 rounded-sm hover:bg-[#3A1010] transition-all duration-300 text-base md:text-lg font-medium shadow-xl text-center hover-lift"
                                    >
                                        View Resume
                                    </a>
                                    <a
                                        href="/resume.pdf"
                                        download
                                        onClick={(e) => e.stopPropagation()}
                                        className="bg-white text-[#5C1F1F] border-2 border-[#5C1F1F] px-8 py-4 rounded-sm hover:bg-gray-100 transition-all duration-300 text-base md:text-lg font-medium shadow-xl text-center hover-lift"
                                    >
                                        Download Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div id="contact" className="min-h-screen bg-[#5C1F1F] flex items-center justify-center p-6 md:p-12">
                <div className="max-w-[800px] w-full">
                    <h3 className="text-white font-bold mb-8 md:mb-16 text-center leading-none text-5xl md:text-[100px] hover-lift" style={{fontFamily: 'serif'}}>
                        CONTACT
                    </h3>
                    <div className="bg-[#E8DDD3] p-8 md:p-12 rounded-sm shadow-2xl hover-card">
                        <div className="bg-[#E8DDD3] p-8 md:p-12 rounded-sm shadow-2xl max-w-[700px] mx-auto">
                            <form className="space-y-6" onSubmit={handleSubmit}>
  <div>
    <label className="block text-[#5C1F1F] font-medium mb-2">
      Name
    </label>
    <input
      type="text"
      required
      value={formData.name}
      onChange={(e) =>
        setFormData({ ...formData, name: e.target.value })
      }
      className="w-full px-4 py-3 rounded-sm border-2 border-[#5C1F1F] bg-transparent focus:outline-none focus:border-[#3A1010]"
    />
  </div>

  <div>
    <label className="block text-[#5C1F1F] font-medium mb-2">
      Email
    </label>
    <input
      type="email"
      required
      value={formData.email}
      onChange={(e) =>
        setFormData({ ...formData, email: e.target.value })
      }
      className="w-full px-4 py-3 rounded-sm border-2 border-[#5C1F1F] bg-transparent focus:outline-none focus:border-[#3A1010]"
    />
  </div>

  <div>
    <label className="block text-[#5C1F1F] font-medium mb-2">
      Message
    </label>
    <textarea
      required
      rows="6"
      value={formData.message}
      onChange={(e) =>
        setFormData({ ...formData, message: e.target.value })
      }
      className="w-full px-4 py-3 rounded-sm border-2 border-[#5C1F1F] bg-transparent focus:outline-none focus:border-[#3A1010] resize-none"
    />
  </div>

  <button
    type="submit"
    className="w-full bg-[#5C1F1F] text-white px-8 py-4 rounded-sm hover:bg-[#3A1010] transition-all duration-300 text-lg font-medium"
  >
    Send Message
  </button>
</form>

                        </div>

                        <div className="mt-8 pt-8 border-t-2 border-[#C4A5A0]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#5C1F1F]">
                                <div className="hover:translate-x-2 transition-transform duration-300">
                                    <h4 className="font-bold mb-2">Email</h4>
                                    <a href="mailto:dhir.khushi.2005@gmail.com" className="hover:text-[#3A1010] transition-colors duration-300">dhir.khushi.2005@gmail.com</a>
                                </div>
                                <div className="hover:translate-x-2 transition-transform duration-300">
                                    <h4 className="font-bold mb-2">Phone</h4>
                                    <a href="tel:+916284827233" className="hover:text-[#3A1010] transition-colors duration-300">+91-6284827233</a>
                                </div>
                                <div className="hover:translate-x-2 transition-transform duration-300">
                                    <h4 className="font-bold mb-2">LinkedIn</h4>
                                    <a href="https://www.linkedin.com/in/khushidhir3/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3A1010] transition-colors duration-300">linkedin.com/in/khushidhir3</a>
                                </div>
                                <div className="hover:translate-x-2 transition-transform duration-300">
                                    <h4 className="font-bold mb-2">GitHub</h4>
                                    <a href="https://github.com/khushidhir3" target="_blank" rel="noopener noreferrer" className="hover:text-[#3A1010] transition-colors duration-300">github.com/khushidhir3</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

                .hover-lift {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .hover-lift:hover {
                    transform: translateY(-5px);
                }

                .hover-scale {
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                }
                .hover-scale:hover {
                    transform: scale(1.03);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                }

                .hover-glow {
                    transition: text-shadow 0.3s ease;
                }
                .hover-glow:hover {
                    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
                }

                .hover-card {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .hover-card:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
                }

                .hover-bg-shift {
                    transition: background-color 0.4s ease;
                }
                .hover-bg-shift:hover {
                    filter: brightness(1.05);
                }
            `}</style>
        </div>
    );
};
export default Portfolio;
