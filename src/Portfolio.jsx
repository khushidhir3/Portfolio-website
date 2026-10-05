import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import emailjs from '@emailjs/browser';
import {
    Sparkles,
    Disc,
    Code,
    Terminal,
    Trophy,
    GraduationCap,
    Award,
    Mail,
    ExternalLink,
    Github,
    Linkedin,
    Copy,
    Check,
    ChevronDown,
    ChevronRight,
    Layers,
    Star,
    Flame,
    Zap,
    ArrowUpRight,
    ArrowDown,
    FileText,
    Send,
    Volume2,
    VolumeX,
    Eye,
    X,
    FolderGit2,
    Cpu
} from 'lucide-react';

import DiscoLightsCanvas from './components/DiscoLightsCanvas';
import TiltCard from './components/TiltCard';
import { soundFX } from './utils/soundFX';

import profile from './assets/profile.png';
import about from './assets/about.png';
import resumePreview from './assets/resumePreview.png';
import portfolio from './assets/portfolio.png';
import MAD from './assets/MAD.jpg';
import CT from './assets/CT.jpg';
import OOP from './assets/OOP.jpg';
import DSA from './assets/DSA.jpg';
import JP from './assets/JP.jpg';
import Notesheet from './assets/Notesheet.png';
import Mindhorizon from './assets/MindHorizon.png';
import Whiskarts from './assets/Whiskarts.png';
import Lifestream from './assets/Lifestream.png';
import schneiderlink from './assets/schneiderlink.png';

const Portfolio = () => {
    // Disco lighting & ambient state
    const [discoMode, setDiscoMode] = useState('disco'); // 'disco' | 'luxe' | 'off'
    const [soundEnabled, setSoundEnabled] = useState(false);
    const [mousePos, setMousePos] = useState({ x: null, y: null });
    const [activeSection, setActiveSection] = useState('hero');
    const [scrollProgress, setScrollProgress] = useState(0);

    // Section collapse / expansion states
    const [expandedSection, setExpandedSection] = useState('about');
    const [expandedProject, setExpandedProject] = useState('schneiderlink');
    const [projectFilter, setProjectFilter] = useState('all');
    const [selectedCert, setSelectedCert] = useState(null);
    const [activeSkillCategory, setActiveSkillCategory] = useState('all');
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Form data for EmailJS
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Track mouse coordinates for dynamic spotlight
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Track scroll progress & active section
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            if (totalScroll > 0) {
                setScrollProgress((currentScroll / totalScroll) * 100);
            }

            const sections = ['hero', 'about-skills', 'projects', 'achievements-education', 'certificates-resume', 'contact'];
            for (const sectionId of sections) {
                const el = document.getElementById(sectionId);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSound = () => {
        const next = !soundEnabled;
        setSoundEnabled(next);
        soundFX.enabled = next;
        if (next) soundFX.playChime();
    };

    const cycleDiscoMode = () => {
        if (soundEnabled) soundFX.playDiscoBeam();
        setDiscoMode((prev) => {
            if (prev === 'disco') return 'luxe';
            if (prev === 'luxe') return 'off';
            return 'disco';
        });
    };

    const copyEmailToClipboard = () => {
        if (soundEnabled) soundFX.playPop(880);
        navigator.clipboard.writeText('dhir.khushi.2005@gmail.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    const toggleSection = (section) => {
        if (soundEnabled) soundFX.playPop(520);
        setExpandedSection(expandedSection === section ? null : section);
    };

    const toggleProject = (projectId) => {
        if (soundEnabled) soundFX.playPop(620);
        setExpandedProject(expandedProject === projectId ? null : projectId);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsSubmitting(true);
        setSubmitStatus(null);

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
                if (soundEnabled) soundFX.playChime();
                setIsSubmitting(false);
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSubmitStatus(null), 5000);
            })
            .catch((error) => {
                console.error(error);
                setIsSubmitting(false);
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

    const projects = [
        {
            id: 'schneiderlink',
            name: 'SCHNEIDLINK',
            category: 'fullstack',
            image: schneiderlink,
            subtitle: 'Field Service Dispatch & Tracking System',
            tag: 'FEATURED DISPATCH PLATFORM',
            description:
                'A comprehensive Uber-like platform for field service management and real-time coordination. Enables seamless job dispatching, live technician assignment, and role-based communication across admins, clients, and technicians.',
            features: [
                'Interactive role-based dashboards (Admin, Client, Technician) with live state synchronization',
                'Client-side WebSocket listeners (Laravel Echo) for live UI updates and instant push notifications on dispatch alerts',
                'Real-time job dispatching and intelligent technician matching algorithms',
                'Optimized frontend performance using Vite asset bundling and prefetching for fast load times',
                'Streamlined workflow coordination and status tracking'
            ],
            tech: ['React', 'Inertia.js', 'Laravel Echo', 'WebSockets', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite'],
            github: 'https://github.com/khushidhir3',
            demo: '#'
        },
        {
            id: 'lifestream',
            name: 'LIFESTREAM',
            category: 'fullstack',
            image: Lifestream,
            subtitle: 'Blood Donation Platform',
            tag: 'FULL STACK HEALTHCARE',
            description:
                'A full-stack blood donation platform enabling users to register as donors, locate them through client-side search and filtering, and connect with those in need via connection workflows and alerts.',
            features: [
                'Engineered user and admin dashboards with role-based access control to manage donor records',
                'Client-side search, filtering, and donor registration workflows',
                'Integrated geolocation and automated alerts to connect urgent requests with nearby donors',
                'Secure access to donor requests backed by Node.js, Prisma, and SQLite/MongoDB stack',
                'Responsive design optimized for emergency situations'
            ],
            tech: ['React', 'Vite', 'Node.js', 'Prisma', 'SQLite', 'Tailwind CSS', 'REST APIs'],
            github: 'https://github.com/khushidhir3/LifeStream',
            demo: '#'
        },
        {
            id: 'notesheet',
            name: 'NOTESHEET TRACKER',
            category: 'mobile',
            image: Notesheet,
            subtitle: 'Academic Workflow Automation',
            tag: 'MOBILE & CLOUD',
            description:
                'A structured digital platform that streamlines the submission, review, and approval of academic note sheets, enabling efficient coordination between students and HODs.',
            features: [
                'Secure authentication with role-based access (Student, HOD)',
                'Real-time note sheet status tracking and live state sync',
                'Automated approval and rejection workflow with audit trail',
                'Email and in-app notifications for instant stage updates',
                'Responsive UI for mobile and web built on Flutter'
            ],
            tech: ['Flutter', 'Dart', 'Firebase', 'Supabase', 'REST API'],
            github: 'https://github.com/khushidhir3/Notesheet_Tracker',
            demo: '#'
        },
        {
            id: 'mindhorizon',
            name: 'MIND HORIZON',
            category: 'web',
            image: Mindhorizon,
            subtitle: 'Mental Health Awareness Platform',
            tag: 'HEALTH ASSESSMENT',
            description:
                'An interactive quiz-based web platform designed to identify early indicators of stress, anxiety, and emotional imbalance, offering personalized insights and guidance.',
            features: [
                'Quiz-based mental health assessment with scoring models',
                'Automated scoring and behavior pattern analysis',
                'Personalized self-care recommendations & mental wellness insights',
                'Focus on early awareness, coping methods, and prevention',
                'Simple and accessible user interface tailored for all ages'
            ],
            tech: ['HTML5', 'CSS3', 'JavaScript', 'MySQL'],
            github: 'https://github.com/khushidhir3/Mental-health-awareness-among-children',
            demo: '#'
        },
        {
            id: 'whiskarts',
            name: 'WHISKARTS',
            category: 'web',
            image: Whiskarts,
            subtitle: 'E-commerce Platform',
            tag: 'RETAIL PLATFORM',
            description:
                'A cute modern e-commerce web application built to deliver a smooth shopping experience with product browsing, cart management, and user-friendly navigation.',
            features: [
                'Product listing with category-based multi-tier filtering',
                'Dynamic cart, promo code handler, and checkout flow',
                'Responsive design with animated micro-interactions across devices',
                'Clean and modern UI focused on usability and conversion',
                'Scalable frontend architecture with modular React components'
            ],
            tech: ['React', 'JavaScript', 'CSS3', 'Node.js'],
            github: 'https://github.com/khushidhir3/Whiskarts',
            demo: '#'
        },
        {
            id: 'portfolio',
            name: 'PORTFOLIO WEBSITE',
            category: 'web',
            image: portfolio,
            subtitle: 'Personal Brand & Showcase',
            tag: 'CYBER-LUXE EXPERIENCE',
            description:
                'A visually rich, interactive portfolio website designed to showcase projects, skills, achievements, and professional growth with smooth animations, custom disco lighting, and responsive design.',
            features: [
                'Interactive section-based neo-brutalist blocky layout',
                'Custom 2D Canvas disco lighting engine with mouse-tracked spotlight',
                'Fully responsive design with 3D tilt cards and retro HUD details',
                'Clean editorial typography, custom scrollbar, and visual hierarchy',
                'Optimized for performance, SEO, accessibility, and high visual impact'
            ],
            tech: ['React', 'Tailwind CSS', 'Canvas API', 'JavaScript (ES6+)'],
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
            badge: 'FLUTTER EXPERT',
            image: MAD,
            link: 'https://www.cipherschools.com/certificate/preview?id=687e16e27efd6d5090703c3f'
        },
        {
            id: 2,
            title: 'Data Structures & Algorithm',
            issuer: 'IamNeo',
            date: 'January 2025',
            badge: 'ALGORITHMS & DSA',
            image: DSA,
            link: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BrLbF7s0kcmBWo4uLb0gS4LpUyDfr%2FlMc%3D'
        },
        {
            id: 3,
            title: 'Social Networks',
            issuer: 'NPTEL',
            date: 'May 2025',
            badge: 'GRAPH & NETWORK THEORY',
            image: MAD,
            link: 'https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS65S64750098204446322'
        },
        {
            id: 4,
            title: 'Object Oriented Programming',
            issuer: 'IamNeo',
            date: 'January 2025',
            badge: 'SYSTEM DESIGN & OOP',
            image: OOP,
            link: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX19rwmrlqZAufSa7quyGxZs%2FBG2riTom0gc%3D'
        },
        {
            id: 5,
            title: 'Java Programming',
            issuer: 'IamNeo',
            date: 'May 2025',
            badge: 'CORE JAVA & CONCURRENCY',
            image: JP,
            link: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BVpzdjk45vwHNMojAPgmk4PcOmlaJWNkc%3D'
        },
        {
            id: 6,
            title: 'Computational Theory : Language Principle and Finite Automata Theory',
            issuer: 'Infosys Springboard',
            date: 'August 2025',
            badge: 'TOC & AUTOMATA',
            image: CT,
            link: 'https://verify.onwingspan.com/'
        }
    ];

    const skillCategories = [
        {
            id: 'languages',
            name: 'Languages',
            icon: Code,
            skills: ['Java', 'C++', 'JavaScript (ES6+)', 'SQL', 'C', 'Dart', 'TypeScript', 'HTML5/CSS3']
        },
        {
            id: 'frameworks',
            name: 'Frameworks & Libs',
            icon: Layers,
            skills: ['React.js', 'Next.js', 'SpringBoot', 'Node.js', 'Tailwind CSS', 'Flutter', 'Inertia.js']
        },
        {
            id: 'databases',
            name: 'Databases & Cloud',
            icon: Cpu,
            skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'MySQL', 'Prisma ORM', 'SQLite']
        },
        {
            id: 'tools',
            name: 'Tools & Ecosystem',
            icon: Terminal,
            skills: ['Postman', 'Git & GitHub', 'IntelliJ IDEA', 'VS Code', 'Figma', 'Vite', 'WebSockets']
        }
    ];

    const filteredProjects = projects.filter((p) => {
        if (projectFilter === 'all') return true;
        if (projectFilter === 'fullstack') return p.category === 'fullstack';
        if (projectFilter === 'mobile') return p.category === 'mobile';
        if (projectFilter === 'web') return p.category === 'web';
        return true;
    });

    return (
        <div className="relative bg-[#5C1F1F] text-[#FAF7F2] min-h-screen selection:bg-[#FFE29A] selection:text-[#3A1010]">
            <Analytics />

            {/* High Performance Disco Light Canvas */}
            <DiscoLightsCanvas mode={discoMode} enabled={discoMode !== 'off'} mousePos={mousePos} />

            {/* Floating Top HUD Status Bar */}
            <header className="fixed top-0 left-0 right-0 z-40 bg-[#2A1212]/90 backdrop-blur-md border-b border-[#C4A5A0]/20 text-[#E8DDD3] px-4 py-2.5 transition-all">
                {/* Scroll progress bar */}
                <div 
                    className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#C4A5A0] via-[#FFE29A] to-[#E8DDD3] transition-all duration-150"
                    style={{ width: `${scrollProgress}%` }}
                ></div>

                <div className="max-w-[1400px] mx-auto flex items-center justify-between text-xs font-mono-tech">
                    {/* Left: System Status */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-2.5 py-1 bg-[#3A1010] border border-[#5C1F1F] rounded-none block-shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="font-bold tracking-wider text-white">KHUSHI.GAZETTE</span>
                            <span className="text-[#C4A5A0] hidden sm:inline">[ONLINE]</span>
                        </div>
                        <span className="hidden md:inline text-[#C4A5A0]/60">
                            VOL. XXIV • NO. 105
                        </span>
                    </div>

                    {/* Center: Quick Nav Links */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {[
                            { id: 'hero', label: '01 // DISPATCH' },
                            { id: 'about-skills', label: '02 // DOSSIER' },
                            { id: 'projects', label: '03 // WORKS' },
                            { id: 'achievements-education', label: '04 // TROPHIES' },
                            { id: 'certificates-resume', label: '05 // DIPLOMAS' },
                            { id: 'contact', label: '06 // CONTACT' },
                        ].map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`px-2.5 py-1 transition-all rounded-none hover:text-white hover:bg-[#5C1F1F]/60 ${
                                    activeSection === item.id ? 'text-[#FFE29A] bg-[#5C1F1F] font-bold' : 'text-[#C4A5A0]'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right: Controls (Disco Lights + Sound) */}
                    <div className="flex items-center gap-2">
                        {/* Disco Light Mode Button */}
                        <button
                            onClick={cycleDiscoMode}
                            title="Toggle Disco Lights FX"
                            className="flex items-center gap-1.5 px-3 py-1 bg-[#5C1F1F] hover:bg-[#8B6B6B] border border-[#C4A5A0]/40 text-[#FFE29A] transition-all rounded-none block-shadow-sm active:translate-y-0.5 cursor-pointer"
                        >
                            <Disc className={`w-3.5 h-3.5 ${discoMode !== 'off' ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
                            <span className="font-bold tracking-wider">
                                {discoMode === 'disco' ? 'DISCO: ON' : discoMode === 'luxe' ? 'LUXE GLOW' : 'LIGHTS: OFF'}
                            </span>
                        </button>

                        {/* Sound Toggle */}
                        <button
                            onClick={toggleSound}
                            title={soundEnabled ? 'Mute micro-audio' : 'Enable audio feedback'}
                            className="p-1.5 bg-[#3A1010] hover:bg-[#5C1F1F] border border-[#C4A5A0]/40 text-[#E8DDD3] transition-all block-shadow-sm cursor-pointer"
                        >
                            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-[#FFE29A]" /> : <VolumeX className="w-3.5 h-3.5 text-[#C4A5A0]/60" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 1: HERO OVERVIEW & NEWSPAPER MASTHEAD
            ═══════════════════════════════════════════════════════════ */}
            <section
                id="hero"
                className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden bg-grid-pattern bg-stripes"
            >
                {/* Geometric ambient lighting discs */}
                <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#8B6B6B] rounded-full blur-[140px] opacity-30 pointer-events-none animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#C4A5A0] rounded-full blur-[160px] opacity-25 pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-[1360px] w-full mx-auto relative z-10">
                    {/* Newspaper Masthead Dateline Bar */}
                    <div className="border-t-4 border-b-2 border-[#E8DDD3]/40 py-2.5 mb-8 flex flex-wrap items-center justify-between gap-3 font-mono-tech text-xs text-[#E8DDD3] tracking-widest uppercase">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-[#FFE29A]">THE DAILY DISPATCH</span>
                            <span className="text-[#C4A5A0]">•</span>
                            <span>VOL. XXIV NO. 105</span>
                        </div>
                        <div className="hidden sm:block text-[#C4A5A0]">
                            PUNJAB, INDIA • SPECIAL REPUTATION EDITION • EST. 2023
                        </div>
                        <div className="flex items-center gap-2 text-[#FFE29A]">
                            <span className="w-2 h-2 rounded-full bg-[#FFE29A] animate-ping"></span>
                            <span>PRICE: EXCELLENCE</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                        {/* Left Column: Bold Editorial Typography & Pitch */}
                        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#2A1212]/80 border border-[#C4A5A0]/40 rounded-none text-xs font-mono-tech tracking-wider text-[#FFE29A] block-shadow-sm">
                                <Sparkles className="w-3.5 h-3.5 text-[#FFE29A] animate-spin" style={{ animationDuration: '6s' }} />
                                <span>B.TECH CSE @ LPU (CGPA 7.84)</span>
                                <span className="text-[#C4A5A0]">✦ FULL STACK & FLUTTER</span>
                            </div>

                            <div className="space-y-1">
                                <h1
                                    className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black tracking-tight leading-[0.92] uppercase"
                                    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                                >
                                    KHUSHI
                                    <span className="block text-[#E8DDD3] italic font-normal tracking-wide">
                                        DHIR
                                    </span>
                                </h1>
                            </div>

                            <p className="text-[#E8DDD3] text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Computer Science engineer with high algorithmic rigor and an eye for high-impact user experiences. Architecting reactive web platforms, mobile solutions, and scalable systems with modern frameworks.
                            </p>

                            {/* Blocky Quick Metric Cards with strict alignment */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono-tech">
                                {[
                                    { value: '1632', label: 'LEETCODE RATING', sub: 'Knight Contender' },
                                    { value: '500+', label: 'DSA PROBLEMS', sub: 'Solved across platforms' },
                                    { value: '300+', label: 'DAY STREAK', sub: 'Consistent coder' },
                                    { value: '7.84', label: 'B.TECH CGPA', sub: 'CS & Engineering' },
                                ].map((stat, i) => (
                                    <div
                                        key={i}
                                        className="p-3 bg-[#3A1010]/80 border-2 border-[#8B6B6B] rounded-none block-shadow-sm hover:border-[#FFE29A] transition-colors text-left"
                                    >
                                        <div className="text-xl sm:text-2xl font-bold text-[#FFE29A] font-syne">{stat.value}</div>
                                        <div className="text-[10px] sm:text-xs font-bold text-white tracking-wider mt-0.5">{stat.label}</div>
                                        <div className="text-[9px] text-[#C4A5A0] truncate">{stat.sub}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Call to Actions & Social Links */}
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
                                <a
                                    href="#projects"
                                    className="px-6 py-3.5 bg-[#E8DDD3] text-[#5C1F1F] font-bold text-sm tracking-wider uppercase rounded-none block-shadow hover:bg-white transition-all hover-press flex items-center gap-2"
                                >
                                    <FolderGit2 className="w-4 h-4" />
                                    EXPLORE PROJECTS
                                    <ArrowDown className="w-4 h-4" />
                                </a>

                                <a
                                    href="#contact"
                                    className="px-6 py-3.5 bg-[#2A1212] text-white border-2 border-[#C4A5A0] font-bold text-sm tracking-wider uppercase rounded-none block-shadow hover:bg-[#3A1010] transition-all hover-press flex items-center gap-2"
                                >
                                    <Mail className="w-4 h-4 text-[#FFE29A]" />
                                    GET IN TOUCH
                                </a>

                                <button
                                    onClick={copyEmailToClipboard}
                                    title="Copy email to clipboard"
                                    className="px-4 py-3.5 bg-[#3A1010] text-[#E8DDD3] border border-[#8B6B6B] text-xs font-mono-tech rounded-none block-shadow-sm hover:bg-[#5C1F1F] transition-all flex items-center gap-2 cursor-pointer"
                                >
                                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                                    <span>{copiedEmail ? 'COPIED!' : 'COPY EMAIL'}</span>
                                </button>
                            </div>

                            {/* Social Badges */}
                            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-mono-tech text-[#C4A5A0]">
                                <a
                                    href="https://www.linkedin.com/in/khushidhir3/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors flex items-center gap-1.5"
                                >
                                    <Linkedin className="w-3.5 h-3.5 text-[#FFE29A]" />
                                    <span>linkedin.com/in/khushidhir3</span>
                                </a>
                                <span>•</span>
                                <a
                                    href="https://github.com/khushidhir3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors flex items-center gap-1.5"
                                >
                                    <Github className="w-3.5 h-3.5 text-[#FFE29A]" />
                                    <span>github.com/khushidhir3</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Framed Portrait with Newspaper Cyber Accents */}
                        <div className="lg:col-span-5 flex justify-center">
                            <TiltCard
                                maxTilt={10}
                                className="w-full max-w-[380px] sm:max-w-[420px] bg-[#3A1010] border-4 border-[#E8DDD3] p-3 block-shadow-lg disco-card-border"
                            >
                                {/* Corner Accents */}
                                <div className="absolute top-1 left-1 text-[#FFE29A] text-[10px] font-mono-tech z-20">┌ [+]</div>
                                <div className="absolute top-1 right-1 text-[#FFE29A] text-[10px] font-mono-tech z-20">[+] ┐</div>
                                <div className="absolute bottom-1 left-1 text-[#FFE29A] text-[10px] font-mono-tech z-20">└ [+]</div>
                                <div className="absolute bottom-1 right-1 text-[#FFE29A] text-[10px] font-mono-tech z-20">[+] ┘</div>

                                {/* Portrait Container */}
                                <div className="relative w-full aspect-[4/5] overflow-hidden bg-gradient-to-b from-[#8B6B6B] to-[#2A1212] border-2 border-[#5C1F1F]">
                                    <img
                                        src={profile}
                                        alt="Khushi Dhir"
                                        className="w-full h-full object-cover object-[center_28%] transition-transform duration-700 hover:scale-105"
                                    />
                                    
                                    {/* Scanline overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A1212] via-transparent to-transparent opacity-80 pointer-events-none"></div>

                                    {/* Live Status Badge overlay */}
                                    <div className="absolute bottom-4 left-4 right-4 bg-[#2A1212]/95 border border-[#FFE29A]/40 p-3 text-left font-mono-tech block-shadow-sm">
                                        <div className="flex items-center justify-between text-xs text-[#FFE29A] font-bold mb-1">
                                            <span>PORTFOLIO SPEC v2026.1</span>
                                            <span className="flex items-center gap-1">
                                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                                                READY
                                            </span>
                                        </div>
                                        <p className="text-[11px] text-[#E8DDD3] leading-tight">
                                            Building cutting-edge applications with Flutter, React, SpringBoot & Node.js.
                                        </p>
                                    </div>
                                </div>
                            </TiltCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                INFINITE MARQUEE TICKER 1
            ═══════════════════════════════════════════════════════════ */}
            <div className="relative bg-[#2A1212] border-y-2 border-[#8B6B6B] py-3 overflow-hidden text-xs font-mono-tech tracking-widest text-[#E8DDD3] select-none">
                <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
                    {[
                        '✦ FULL-STACK ARCHITECTURE',
                        '■ FLUTTER & DART EXPERT',
                        '▲ REACT & NEXT.JS ECOSYSTEM',
                        '◆ SPRINGBOOT & NODE.JS',
                        '✦ POSTGRESQL & MONGODB',
                        '■ LEETCODE 1632 RATING',
                        '▲ 500+ DSA PROBLEMS SOLVED',
                        '◆ TOP 10 HACKATHON FINALIST',
                        '✦ LARAVEL ECHO & WEBSOCKETS',
                        '■ RESTFUL API DESIGN',
                    ].concat([
                        '✦ FULL-STACK ARCHITECTURE',
                        '■ FLUTTER & DART EXPERT',
                        '▲ REACT & NEXT.JS ECOSYSTEM',
                        '◆ SPRINGBOOT & NODE.JS',
                        '✦ POSTGRESQL & MONGODB',
                        '■ LEETCODE 1632 RATING',
                        '▲ 500+ DSA PROBLEMS SOLVED',
                        '◆ TOP 10 HACKATHON FINALIST',
                        '✦ LARAVEL ECHO & WEBSOCKETS',
                        '■ RESTFUL API DESIGN',
                    ]).map((item, idx) => (
                        <span key={idx} className="flex items-center gap-6">
                            <span className="hover:text-[#FFE29A] transition-colors">{item}</span>
                            <span className="text-[#C4A5A0]">/</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 2: ABOUT & SKILLS SPLIT INTERACTIVE STAGE
            ═══════════════════════════════════════════════════════════ */}
            <section id="about-skills" className="relative min-h-screen py-20 px-6 sm:px-10 lg:px-16 bg-[#A67B7B]/20">
                <div className="max-w-[1400px] mx-auto">
                    {/* Section Header with newspaper rule */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b-2 border-[#8B6B6B] font-mono-tech text-xs">
                        <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 bg-[#5C1F1F] text-[#FFE29A] font-bold">SEC 02</span>
                            <span className="text-white font-bold text-sm tracking-wider">// DOSSIER & TECHNICAL ARSENAL</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => toggleSection('about')}
                                className={`px-3 py-1 border transition-all rounded-none block-shadow-sm ${
                                    expandedSection === 'about' ? 'bg-[#5C1F1F] text-[#FFE29A] border-[#FFE29A]' : 'bg-[#2A1212] text-[#E8DDD3] border-[#8B6B6B]'
                                }`}
                            >
                                FOCUS: ABOUT
                            </button>
                            <button
                                onClick={() => toggleSection('skills')}
                                className={`px-3 py-1 border transition-all rounded-none block-shadow-sm ${
                                    expandedSection === 'skills' ? 'bg-[#5C1F1F] text-[#FFE29A] border-[#FFE29A]' : 'bg-[#2A1212] text-[#E8DDD3] border-[#8B6B6B]'
                                }`}
                            >
                                FOCUS: SKILLS
                            </button>
                        </div>
                    </div>

                    {/* Dual Blocky Cards Container */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* ── ABOUT ME CARD ── */}
                        <div
                            className={`transition-all duration-500 bg-[#E8DDD3] text-[#3A1010] p-6 sm:p-10 border-4 border-[#2A1212] block-shadow-lg ${
                                expandedSection === 'about' ? 'lg:col-span-7' : expandedSection === 'skills' ? 'lg:col-span-4' : 'lg:col-span-6'
                            }`}
                        >
                            <div className="flex items-center justify-between mb-4 border-b-2 border-[#5C1F1F]/20 pb-3 font-mono-tech text-xs text-[#5C1F1F]">
                                <span className="font-bold">[ FEATURE STORY // BIOGRAPHY ]</span>
                                <span className="bg-[#5C1F1F] text-white px-2 py-0.5 font-bold">B.TECH CSE</span>
                            </div>

                            <h3
                                className="text-4xl sm:text-6xl font-black text-[#5C1F1F] leading-none mb-6 uppercase"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                ABOUT<br />ME
                            </h3>

                            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#3A1010]">
                                <p className="font-medium text-lg text-[#5C1F1F] drop-cap">
                                    Computer Science & Engineering student with a strong foundation in programming and problem-solving, deeply passionate about building scalable mobile and web applications.
                                </p>

                                <p>
                                    Currently pursuing B.Tech in Computer Science at Lovely Professional University with a CGPA of 7.84. Completed specialized training in Mobile Application Development using Flutter and have hands-on experience building real-world applications.
                                </p>

                                <div className="p-4 bg-white/70 border-2 border-[#5C1F1F] font-mono-tech text-xs space-y-2 mt-4 block-shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[#5C1F1F] font-bold">FOCUS:</span>
                                        <span className="text-[#2A1212]">Creating functional, user-friendly applications that solve real problems.</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[#5C1F1F] font-bold">INSTITUTION:</span>
                                        <span className="text-[#2A1212]">Lovely Professional University (CGPA 7.84)</span>
                                    </div>
                                </div>

                                {expandedSection === 'about' && (
                                    <div className="mt-6 pt-6 border-t-2 border-[#5C1F1F]/20 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                                        <div className="space-y-3 text-sm">
                                            <h4 className="font-bold text-[#5C1F1F] font-mono-tech text-xs tracking-wider">ENGINEERING PILLARS:</h4>
                                            <ul className="space-y-1.5 text-xs text-[#5C1F1F] font-medium font-mono-tech">
                                                <li>✓ High-Performance Web & Mobile Apps</li>
                                                <li>✓ Distributed State & WebSockets</li>
                                                <li>✓ Relational & NoSQL Database Schema Design</li>
                                                <li>✓ Continuous Algorithmic Problem Solving</li>
                                            </ul>
                                        </div>
                                        <div className="aspect-square bg-gradient-to-br from-[#8B6B6B] to-[#5C1F1F] border-2 border-[#2A1212] overflow-hidden block-shadow-sm">
                                            <img src={about} alt="About Khushi" className="w-full h-full object-cover object-center" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* ── SKILLS CARD ── */}
                        <div
                            className={`transition-all duration-500 bg-[#C4A5A0] text-[#3A1010] p-6 sm:p-10 border-4 border-[#2A1212] block-shadow-lg ${
                                expandedSection === 'skills' ? 'lg:col-span-8' : expandedSection === 'about' ? 'lg:col-span-5' : 'lg:col-span-6'
                            }`}
                        >
                            <div className="flex items-center justify-between mb-4 border-b-2 border-[#5C1F1F]/20 pb-3 font-mono-tech text-xs text-[#5C1F1F]">
                                <span className="font-bold">[ TECHNICAL DIRECTORY // STACKS ]</span>
                                <span className="bg-[#5C1F1F] text-white px-2 py-0.5 font-bold">4 STACKS</span>
                            </div>

                            <h3
                                className="text-4xl sm:text-6xl font-black text-[#5C1F1F] leading-none mb-6 uppercase"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                SKILLS &<br />STACK
                            </h3>

                            {/* Category Filter Tabs */}
                            <div className="flex flex-wrap gap-2 mb-6 font-mono-tech text-xs">
                                {[
                                    { id: 'all', label: 'ALL' },
                                    { id: 'languages', label: 'LANGUAGES' },
                                    { id: 'frameworks', label: 'FRAMEWORKS' },
                                    { id: 'databases', label: 'DATABASES' },
                                    { id: 'tools', label: 'TOOLS' },
                                ].map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => {
                                            if (soundEnabled) soundFX.playPop(500);
                                            setActiveSkillCategory(cat.id);
                                        }}
                                        className={`px-3 py-1 border border-[#5C1F1F] font-bold rounded-none block-shadow-sm transition-all cursor-pointer ${
                                            activeSkillCategory === cat.id
                                                ? 'bg-[#5C1F1F] text-[#FFE29A]'
                                                : 'bg-white/80 text-[#5C1F1F] hover:bg-white'
                                        }`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {skillCategories
                                    .filter((cat) => activeSkillCategory === 'all' || cat.id === activeSkillCategory)
                                    .map((category) => {
                                        const Icon = category.icon;
                                        return (
                                            <div
                                                key={category.id}
                                                className="bg-white/90 p-4 border-2 border-[#5C1F1F] block-shadow-sm"
                                            >
                                                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#5C1F1F]/20 text-[#5C1F1F] font-mono-tech text-xs font-bold">
                                                    <Icon className="w-4 h-4 text-[#5C1F1F]" />
                                                    <span>{category.name.toUpperCase()}</span>
                                                </div>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {category.skills.map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="px-2.5 py-1 bg-[#5C1F1F] text-white font-mono-tech text-xs font-semibold rounded-none hover:bg-[#2A1212] transition-colors"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 3: FEATURED PROJECTS (GAZETTE ARCHIVES)
            ═══════════════════════════════════════════════════════════ */}
            <section id="projects" className="relative min-h-screen py-24 px-6 sm:px-10 lg:px-16 bg-[#5C1F1F] bg-grid-pattern">
                <div className="max-w-[1400px] mx-auto relative z-10">
                    {/* Section Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b-2 border-[#8B6B6B] font-mono-tech text-xs">
                        <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 bg-[#E8DDD3] text-[#5C1F1F] font-bold">SEC 03</span>
                            <span className="text-[#E8DDD3] font-bold text-sm tracking-wider">// PRODUCTION & ENGINEERING ARCHIVES</span>
                        </div>
                        <span className="text-[#FFE29A] font-bold">[ 06 TOTAL CASE STUDIES ]</span>
                    </div>

                    <div className="text-center mb-12">
                        <h2
                            className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                            PROJECTS
                        </h2>
                        <p className="text-[#E8DDD3] font-mono-tech text-xs sm:text-sm tracking-widest mt-2 uppercase">
                            Real-World Applications ✦ Live Workflows ✦ Production Architecture
                        </p>

                        {/* Project Category Filter Tabs */}
                        <div className="flex flex-wrap justify-center gap-2 mt-8 font-mono-tech text-xs">
                            {[
                                { id: 'all', label: 'ALL ARCHIVES (6)' },
                                { id: 'fullstack', label: 'FULL STACK (2)' },
                                { id: 'mobile', label: 'MOBILE APPS (1)' },
                                { id: 'web', label: 'WEB PLATFORMS (3)' },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => {
                                        if (soundEnabled) soundFX.playPop(560);
                                        setProjectFilter(tab.id);
                                    }}
                                    className={`px-4 py-2 border-2 transition-all rounded-none block-shadow-sm cursor-pointer ${
                                        projectFilter === tab.id
                                            ? 'bg-[#E8DDD3] text-[#5C1F1F] border-[#E8DDD3] font-bold'
                                            : 'bg-[#2A1212] text-[#E8DDD3] border-[#8B6B6B] hover:border-[#FFE29A]'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Project Cards Stack */}
                    <div className="space-y-6">
                        {filteredProjects.map((project, idx) => {
                            const isExpanded = expandedProject === project.id;
                            return (
                                <TiltCard
                                    key={project.id}
                                    maxTilt={isExpanded ? 2 : 4}
                                    scale={isExpanded ? 1 : 1.01}
                                    className={`transition-all duration-500 bg-[#E8DDD3] text-[#3A1010] border-4 border-[#2A1212] block-shadow-lg ${
                                        isExpanded ? 'ring-4 ring-[#FFE29A]/50' : 'hover:border-[#FFE29A]'
                                    }`}
                                >
                                    {/* Card Header */}
                                    <div
                                        onClick={() => toggleProject(project.id)}
                                        className="p-5 sm:p-7 flex flex-wrap items-center justify-between gap-4 cursor-pointer border-b-2 border-[#5C1F1F]/15 bg-gradient-to-r from-[#E8DDD3] to-[#DFD0C4]"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="w-9 h-9 bg-[#5C1F1F] text-[#FFE29A] font-mono-tech font-bold text-sm flex items-center justify-center block-shadow-sm">
                                                0{idx + 1}
                                            </span>
                                            <div>
                                                <h3
                                                    className="text-2xl sm:text-4xl font-black text-[#5C1F1F] uppercase tracking-wide"
                                                    style={{ fontFamily: 'Playfair Display, serif' }}
                                                >
                                                    {project.name}
                                                </h3>
                                                <p className="text-xs sm:text-sm text-[#5C1F1F]/80 font-mono-tech">
                                                    {project.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="hidden sm:inline-block px-3 py-1 bg-[#5C1F1F] text-white font-mono-tech text-xs font-bold">
                                                {project.tag}
                                            </span>
                                            <div className="p-2 bg-[#5C1F1F] text-white block-shadow-sm transition-transform duration-300">
                                                {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanded Deep Dive Content */}
                                    {isExpanded && (
                                        <div className="p-6 sm:p-10 border-t border-[#5C1F1F]/20 animate-fade-in">
                                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                                {/* Left: Preview */}
                                                <div className="lg:col-span-5">
                                                    <div className="relative aspect-video sm:aspect-[16/10] bg-[#2A1212] border-4 border-[#5C1F1F] overflow-hidden block-shadow">
                                                        <img
                                                            src={project.image}
                                                            alt={project.name}
                                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                                        />
                                                        <div className="absolute top-2 left-2 bg-[#2A1212]/90 text-[#FFE29A] px-2 py-0.5 font-mono-tech text-[10px] font-bold border border-[#FFE29A]/40">
                                                            LIVE READY
                                                        </div>
                                                    </div>

                                                    {/* Tech Stack Pills */}
                                                    <div className="mt-4 pt-4 border-t border-[#5C1F1F]/20">
                                                        <div className="text-xs font-mono-tech font-bold text-[#5C1F1F] mb-2">
                                                            TECHNOLOGY ARCHITECTURE:
                                                        </div>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            {project.tech.map((t) => (
                                                                <span
                                                                    key={t}
                                                                    className="px-2.5 py-1 bg-[#5C1F1F] text-white font-mono-tech text-xs font-semibold rounded-none block-shadow-sm hover:bg-[#3A1010] transition-colors"
                                                                >
                                                                    {t}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Right: Description & Features */}
                                                <div className="lg:col-span-7 space-y-5">
                                                    <div>
                                                        <h4 className="text-xs font-mono-tech font-bold text-[#5C1F1F] tracking-wider uppercase mb-1">
                                                            CASE OVERVIEW:
                                                        </h4>
                                                        <p className="text-sm sm:text-base text-[#3A1010] leading-relaxed">
                                                            {project.description}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <h4 className="text-xs font-mono-tech font-bold text-[#5C1F1F] tracking-wider uppercase mb-2">
                                                            KEY ENGINEERING HIGHLIGHTS:
                                                        </h4>
                                                        <ul className="space-y-2 font-mono-tech text-xs sm:text-sm text-[#3A1010]">
                                                            {project.features.map((feature, fIdx) => (
                                                                <li key={fIdx} className="flex items-start gap-2 bg-white/70 p-2.5 border-l-4 border-[#5C1F1F]">
                                                                    <span className="text-[#5C1F1F] font-bold mt-0.5">✦</span>
                                                                    <span>{feature}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Action Buttons */}
                                                    <div className="flex flex-wrap gap-3 pt-3">
                                                        <a
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="px-6 py-3 bg-[#5C1F1F] text-white font-mono-tech text-xs sm:text-sm font-bold tracking-wider uppercase rounded-none block-shadow hover:bg-[#3A1010] transition-all hover-press flex items-center gap-2"
                                                        >
                                                            <ExternalLink className="w-4 h-4 text-[#FFE29A]" />
                                                            TRY APPLICATION
                                                        </a>

                                                        <a
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="px-6 py-3 bg-white text-[#5C1F1F] border-2 border-[#5C1F1F] font-mono-tech text-xs sm:text-sm font-bold tracking-wider uppercase rounded-none block-shadow hover:bg-[#FAF7F2] transition-all hover-press flex items-center gap-2"
                                                        >
                                                            <Github className="w-4 h-4" />
                                                            SOURCE REPOSITORY
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </TiltCard>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                INFINITE MARQUEE TICKER 2 (REVERSE)
            ═══════════════════════════════════════════════════════════ */}
            <div className="relative bg-[#2A1212] border-y-2 border-[#8B6B6B] py-3 overflow-hidden text-xs font-mono-tech tracking-widest text-[#E8DDD3] select-none">
                <div className="animate-marquee-reverse flex items-center gap-6 whitespace-nowrap">
                    {[
                        '✦ CODECHEF 1048 RATING',
                        '■ FLUTTER CERTIFIED EXPERT',
                        '▲ OBJECT ORIENTED DESIGN',
                        '◆ PRISMA & SUPABASE',
                        '✦ RESTFUL API DEVELOPMENT',
                        '■ 1632 LEETCODE MILESTONE',
                        '▲ INNOVATE X TOP 10 FINALIST',
                        '◆ AUTOMATA & COMPUTATION THEORY',
                    ].concat([
                        '✦ CODECHEF 1048 RATING',
                        '■ FLUTTER CERTIFIED EXPERT',
                        '▲ OBJECT ORIENTED DESIGN',
                        '◆ PRISMA & SUPABASE',
                        '✦ RESTFUL API DEVELOPMENT',
                        '■ 1632 LEETCODE MILESTONE',
                        '▲ INNOVATE X TOP 10 FINALIST',
                        '◆ AUTOMATA & COMPUTATION THEORY',
                    ]).map((item, idx) => (
                        <span key={idx} className="flex items-center gap-6">
                            <span className="hover:text-[#FFE29A] transition-colors">{item}</span>
                            <span className="text-[#C4A5A0]">/</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 4: ACHIEVEMENTS & EDUCATION
            ═══════════════════════════════════════════════════════════ */}
            <section id="achievements-education" className="relative min-h-screen py-24 px-6 sm:px-10 lg:px-16 bg-[#C4A5A0]/25">
                <div className="max-w-[1400px] mx-auto">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b-2 border-[#8B6B6B] font-mono-tech text-xs">
                        <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 bg-[#5C1F1F] text-[#FFE29A] font-bold">SEC 04</span>
                            <span className="text-white font-bold text-sm tracking-wider">// MILESTONES & ACADEMIC RECORD</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => toggleSection('achievements')}
                                className={`px-3 py-1 border transition-all rounded-none block-shadow-sm ${
                                    expandedSection === 'achievements' ? 'bg-[#5C1F1F] text-[#FFE29A] border-[#FFE29A]' : 'bg-[#2A1212] text-[#E8DDD3] border-[#8B6B6B]'
                                }`}
                            >
                                ACHIEVEMENTS
                            </button>
                            <button
                                onClick={() => toggleSection('education')}
                                className={`px-3 py-1 border transition-all rounded-none block-shadow-sm ${
                                    expandedSection === 'education' ? 'bg-[#5C1F1F] text-[#FFE29A] border-[#FFE29A]' : 'bg-[#2A1212] text-[#E8DDD3] border-[#8B6B6B]'
                                }`}
                            >
                                EDUCATION
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* ── ACHIEVEMENTS BLOCK ── */}
                        <div
                            className={`transition-all duration-500 bg-[#C4A5A0] text-[#3A1010] p-6 sm:p-10 border-4 border-[#2A1212] block-shadow-lg ${
                                expandedSection === 'achievements' ? 'lg:col-span-7' : expandedSection === 'education' ? 'lg:col-span-5' : 'lg:col-span-6'
                            }`}
                        >
                            <div className="flex items-center justify-between mb-4 border-b-2 border-[#5C1F1F]/20 pb-3 font-mono-tech text-xs text-[#5C1F1F]">
                                <span className="font-bold">[ GAZETTE RECORD // AWARDS ]</span>
                                <Trophy className="w-4 h-4 text-[#5C1F1F]" />
                            </div>

                            <h3
                                className="text-4xl sm:text-6xl font-black text-[#5C1F1F] leading-none mb-8 uppercase"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                ACHIEVE<br />MENTS
                            </h3>

                            <div className="space-y-4 font-mono-tech">
                                {/* CP Card */}
                                <TiltCard maxTilt={5} className="bg-[#5C1F1F] text-white p-6 border-2 border-[#2A1212] block-shadow">
                                    <div className="flex items-center justify-between mb-3 text-xs text-[#FFE29A]">
                                        <span className="font-bold">COMPETITIVE PROGRAMMING</span>
                                        <Zap className="w-4 h-4" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 text-xs">
                                        <div className="p-2.5 bg-[#3A1010]">
                                            <div className="text-[#FFE29A] text-xl font-bold font-syne">1632</div>
                                            <div className="text-[10px] text-[#C4A5A0]">LeetCode Rating</div>
                                        </div>
                                        <div className="p-2.5 bg-[#3A1010]">
                                            <div className="text-[#FFE29A] text-xl font-bold font-syne">1048</div>
                                            <div className="text-[10px] text-[#C4A5A0]">CodeChef Rating</div>
                                        </div>
                                        <div className="p-2.5 bg-[#3A1010]">
                                            <div className="text-white text-xl font-bold font-syne">500+</div>
                                            <div className="text-[10px] text-[#C4A5A0]">DSA Problems</div>
                                        </div>
                                        <div className="p-2.5 bg-[#3A1010]">
                                            <div className="text-white text-xl font-bold font-syne">300+</div>
                                            <div className="text-[10px] text-[#C4A5A0]">Day Streak</div>
                                        </div>
                                    </div>
                                </TiltCard>

                                {/* Hackathon Card */}
                                <TiltCard maxTilt={5} className="bg-[#E8DDD3] text-[#3A1010] p-6 border-2 border-[#5C1F1F] block-shadow">
                                    <div className="flex items-center justify-between mb-2 text-xs text-[#5C1F1F] font-bold">
                                        <span>HACKATHONS & COMPETITIONS</span>
                                        <Award className="w-4 h-4" />
                                    </div>
                                    <div className="text-lg font-bold text-[#5C1F1F] mb-1">
                                        Top 10 Team — Innovate X Hackathon
                                    </div>
                                    <p className="text-xs text-[#5C1F1F]/80">
                                        Selected in the Top 10 finalists out of 250+ competing engineering teams.
                                    </p>
                                </TiltCard>

                                {/* Dev Excellence Card */}
                                <TiltCard maxTilt={5} className="bg-white text-[#3A1010] p-6 border-2 border-[#5C1F1F] block-shadow">
                                    <div className="flex items-center justify-between mb-2 text-xs text-[#5C1F1F] font-bold">
                                        <span>DEVELOPMENT EXCELLENCE</span>
                                        <Code className="w-4 h-4" />
                                    </div>
                                    <ul className="space-y-1.5 text-xs text-[#5C1F1F] font-medium">
                                        <li>✦ Built & deployed 2+ Production Grade Platforms</li>
                                        <li>✦ Specialized Flutter Mobile Development Program</li>
                                        <li>✦ 6 Professional Engineering Certifications</li>
                                    </ul>
                                </TiltCard>
                            </div>
                        </div>

                        {/* ── EDUCATION BLOCK ── */}
                        <div
                            className={`transition-all duration-500 bg-[#E8DDD3] text-[#3A1010] p-6 sm:p-10 border-4 border-[#2A1212] block-shadow-lg ${
                                expandedSection === 'education' ? 'lg:col-span-7' : expandedSection === 'achievements' ? 'lg:col-span-5' : 'lg:col-span-6'
                            }`}
                        >
                            <div className="flex items-center justify-between mb-4 border-b-2 border-[#5C1F1F]/20 pb-3 font-mono-tech text-xs text-[#5C1F1F]">
                                <span className="font-bold">[ ACADEMIC CHRONICLE // DEGREES ]</span>
                                <GraduationCap className="w-4 h-4 text-[#5C1F1F]" />
                            </div>

                            <h3
                                className="text-4xl sm:text-6xl font-black text-[#5C1F1F] leading-none mb-8 uppercase"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                EDUCA<br />TION
                            </h3>

                            <div className="space-y-4 font-mono-tech">
                                {/* B.Tech */}
                                <TiltCard maxTilt={5} className="bg-[#5C1F1F] text-white p-6 border-2 border-[#2A1212] block-shadow">
                                    <div className="flex items-center justify-between text-xs text-[#FFE29A] mb-2 font-bold">
                                        <span>2023 — PRESENT</span>
                                        <span className="bg-[#FFE29A] text-[#5C1F1F] px-2 py-0.5">CURRENT DEGREE</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-1">
                                        B.Tech in Computer Science & Engineering
                                    </h4>
                                    <p className="text-xs text-[#E8DDD3] mb-3">
                                        Lovely Professional University, Punjab
                                    </p>
                                    <div className="inline-block px-3 py-1 bg-[#3A1010] border border-[#FFE29A]/40 text-xs font-bold text-[#FFE29A]">
                                        CGPA: 7.84 / 10.0
                                    </div>
                                </TiltCard>

                                {/* Intermediate */}
                                <TiltCard maxTilt={5} className="bg-white text-[#3A1010] p-6 border-2 border-[#5C1F1F] block-shadow">
                                    <div className="flex items-center justify-between text-xs text-[#5C1F1F] mb-2 font-bold">
                                        <span>2022 — 2023</span>
                                        <span className="bg-[#E8DDD3] text-[#5C1F1F] px-2 py-0.5">SENIOR SECONDARY</span>
                                    </div>
                                    <h4 className="text-base font-bold text-[#5C1F1F] mb-1">
                                        Senior Secondary (Intermediate)
                                    </h4>
                                    <p className="text-xs text-[#5C1F1F]/80 mb-3">
                                        Shivalik Public School
                                    </p>
                                    <div className="inline-block px-3 py-1 bg-[#E8DDD3] text-xs font-bold text-[#5C1F1F]">
                                        Score: 73.2%
                                    </div>
                                </TiltCard>

                                {/* Matriculation */}
                                <TiltCard maxTilt={5} className="bg-white text-[#3A1010] p-6 border-2 border-[#5C1F1F] block-shadow">
                                    <div className="flex items-center justify-between text-xs text-[#5C1F1F] mb-2 font-bold">
                                        <span>2020 — 2021</span>
                                        <span className="bg-[#E8DDD3] text-[#5C1F1F] px-2 py-0.5">MATRICULATION</span>
                                    </div>
                                    <h4 className="text-base font-bold text-[#5C1F1F] mb-1">
                                        Matriculation (10th Standard)
                                    </h4>
                                    <p className="text-xs text-[#5C1F1F]/80 mb-3">
                                        Shivalik Public School
                                    </p>
                                    <div className="inline-block px-3 py-1 bg-[#E8DDD3] text-xs font-bold text-[#5C1F1F]">
                                        Score: 87.2%
                                    </div>
                                </TiltCard>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 5: CERTIFICATES & RESUME
            ═══════════════════════════════════════════════════════════ */}
            <section id="certificates-resume" className="relative min-h-screen py-24 px-6 sm:px-10 lg:px-16 bg-[#5C1F1F] bg-grid-pattern">
                <div className="max-w-[1400px] mx-auto">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b-2 border-[#8B6B6B] font-mono-tech text-xs">
                        <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 bg-[#E8DDD3] text-[#5C1F1F] font-bold">SEC 05</span>
                            <span className="text-[#E8DDD3] font-bold text-sm tracking-wider">// DIPLOMAS & OFFICIAL RECORD</span>
                        </div>
                        <span className="text-[#FFE29A] font-bold">[ 06 VERIFIED CERTIFICATES ]</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        {/* ── CERTIFICATES GALLERY ── */}
                        <div className="lg:col-span-7 bg-[#E8DDD3] text-[#3A1010] p-6 sm:p-10 border-4 border-[#2A1212] block-shadow-lg">
                            <div className="flex items-center justify-between mb-4 border-b-2 border-[#5C1F1F]/20 pb-3 font-mono-tech text-xs text-[#5C1F1F]">
                                <span className="font-bold">[ OFFICIAL CERTIFICATION ARCHIVE ]</span>
                                <Award className="w-4 h-4 text-[#5C1F1F]" />
                            </div>

                            <h3
                                className="text-4xl sm:text-6xl font-black text-[#5C1F1F] leading-none mb-8 uppercase"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                CERTIFI<br />CATES
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {certificates.map((cert) => (
                                    <TiltCard
                                        key={cert.id}
                                        maxTilt={6}
                                        className="bg-white p-4 border-2 border-[#5C1F1F] block-shadow-sm flex flex-col justify-between hover:border-[#FFE29A]"
                                    >
                                        <div>
                                            <div className="aspect-[4/3] bg-gray-100 border border-[#5C1F1F]/30 overflow-hidden mb-3 relative group">
                                                <img
                                                    src={cert.image}
                                                    alt={cert.title}
                                                    className="w-full h-full object-contain p-2"
                                                />
                                                <div 
                                                    onClick={() => setSelectedCert(cert)}
                                                    className="absolute inset-0 bg-[#2A1212]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono-tech text-xs cursor-pointer"
                                                >
                                                    <Eye className="w-4 h-4 text-[#FFE29A]" />
                                                    <span>PREVIEW</span>
                                                </div>
                                            </div>

                                            <div className="inline-block px-2 py-0.5 bg-[#5C1F1F] text-[#FFE29A] font-mono-tech text-[10px] font-bold mb-2">
                                                {cert.badge}
                                            </div>

                                            <h4 className="font-bold text-[#5C1F1F] text-xs sm:text-sm line-clamp-2 mb-1">
                                                {cert.title}
                                            </h4>
                                            <p className="text-[11px] text-[#5C1F1F]/70 font-mono-tech">
                                                {cert.issuer} • {cert.date}
                                            </p>
                                        </div>

                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 inline-flex items-center gap-1 text-xs font-mono-tech font-bold text-[#5C1F1F] hover:text-[#3A1010] hover:underline"
                                        >
                                            VERIFY CREDENTIAL <ArrowUpRight className="w-3.5 h-3.5" />
                                        </a>
                                    </TiltCard>
                                ))}
                            </div>
                        </div>

                        {/* ── RESUME HUB ── */}
                        <div className="lg:col-span-5 bg-[#C4A5A0] text-[#3A1010] p-6 sm:p-10 border-4 border-[#2A1212] block-shadow-lg">
                            <div className="flex items-center justify-between mb-4 border-b-2 border-[#5C1F1F]/20 pb-3 font-mono-tech text-xs text-[#5C1F1F]">
                                <span className="font-bold">[ OFFICIAL CV // CURRICULUM VITAE ]</span>
                                <FileText className="w-4 h-4 text-[#5C1F1F]" />
                            </div>

                            <h3
                                className="text-4xl sm:text-6xl font-black text-[#5C1F1F] leading-none mb-8 uppercase"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                RESUME
                            </h3>

                            <div className="flex flex-col items-center">
                                <TiltCard
                                    maxTilt={6}
                                    className="w-full max-w-sm aspect-[4/5] bg-white border-4 border-[#5C1F1F] p-2 block-shadow-lg mb-6 overflow-hidden"
                                >
                                    <img
                                        src={resumePreview}
                                        alt="Resume Preview"
                                        className="w-full h-full object-contain"
                                    />
                                </TiltCard>

                                <div className="w-full space-y-3 font-mono-tech">
                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-4 bg-[#5C1F1F] text-white font-bold text-sm tracking-wider uppercase text-center block-shadow hover:bg-[#3A1010] transition-all hover-press flex items-center justify-center gap-2"
                                    >
                                        <Eye className="w-4 h-4 text-[#FFE29A]" />
                                        VIEW RESUME IN BROWSER
                                    </a>

                                    <a
                                        href="/resume.pdf"
                                        download
                                        className="w-full py-4 bg-white text-[#5C1F1F] border-2 border-[#5C1F1F] font-bold text-sm tracking-wider uppercase text-center block-shadow hover:bg-[#FAF7F2] transition-all hover-press flex items-center justify-center gap-2"
                                    >
                                        <FileText className="w-4 h-4" />
                                        DOWNLOAD RESUME (PDF)
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 6: CONTACT & WORKING EMAILJS
            ═══════════════════════════════════════════════════════════ */}
            <section id="contact" className="relative min-h-screen py-24 px-6 sm:px-10 lg:px-16 bg-[#2A1212] bg-grid-pattern">
                <div className="max-w-[1000px] mx-auto relative z-10">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b-2 border-[#8B6B6B] font-mono-tech text-xs">
                        <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 bg-[#FFE29A] text-[#5C1F1F] font-bold">SEC 06</span>
                            <span className="text-[#E8DDD3] font-bold text-sm tracking-wider">// DISPATCH & DIRECT COMMUNIQUE</span>
                        </div>
                        <span className="text-[#FFE29A] font-bold">[ DIRECT LINE OPEN ]</span>
                    </div>

                    <div className="text-center mb-12">
                        <h2
                            className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                            CONTACT
                        </h2>
                        <p className="text-[#E8DDD3] font-mono-tech text-xs sm:text-sm tracking-widest mt-2 uppercase">
                            Let's Build Something Exceptional Together
                        </p>
                    </div>

                    <div className="bg-[#E8DDD3] text-[#3A1010] p-8 sm:p-14 border-4 border-[#5C1F1F] block-shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6 font-mono-tech">
                            <div>
                                <label className="block text-xs font-bold text-[#5C1F1F] uppercase mb-2">
                                    [ 01 ] YOUR NAME *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Jane Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-white border-2 border-[#5C1F1F] text-[#3A1010] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5C1F1F] text-sm block-shadow-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[#5C1F1F] uppercase mb-2">
                                    [ 02 ] YOUR EMAIL ADDRESS *
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="jane@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-white border-2 border-[#5C1F1F] text-[#3A1010] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5C1F1F] text-sm block-shadow-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[#5C1F1F] uppercase mb-2">
                                    [ 03 ] MESSAGE / INQUIRY *
                                </label>
                                <textarea
                                    required
                                    rows="5"
                                    placeholder="Hi Khushi, I loved your projects and would like to discuss..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-white border-2 border-[#5C1F1F] text-[#3A1010] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5C1F1F] text-sm block-shadow-sm resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-[#5C1F1F] text-white font-bold text-sm tracking-wider uppercase block-shadow hover:bg-[#3A1010] transition-all hover-press flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Sparkles className="w-4 h-4 animate-spin" />
                                        <span>TRANSMITTING MESSAGE...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 text-[#FFE29A]" />
                                        <span>SEND MESSAGE NOW</span>
                                    </>
                                )}
                            </button>

                            {/* Feedback Alert */}
                            {submitStatus === 'success' && (
                                <div className="p-4 bg-emerald-100 border-2 border-emerald-600 text-emerald-900 text-xs font-bold flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-600" />
                                    <span>✅ Message sent successfully! Khushi will get back to you shortly.</span>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="p-4 bg-rose-100 border-2 border-rose-600 text-rose-900 text-xs font-bold">
                                    ❌ Failed to send message. Please email directly at dhir.khushi.2005@gmail.com.
                                </div>
                            )}
                        </form>

                        {/* Direct Contacts Grid */}
                        <div className="mt-10 pt-8 border-t-2 border-[#5C1F1F]/20 grid grid-cols-1 md:grid-cols-3 gap-4 font-mono-tech text-xs">
                            <div
                                onClick={copyEmailToClipboard}
                                className="p-4 bg-white border-2 border-[#5C1F1F] block-shadow-sm cursor-pointer hover:bg-[#FAF7F2] transition-colors"
                            >
                                <div className="text-[#5C1F1F] font-bold mb-1 flex items-center gap-1.5">
                                    <Mail className="w-3.5 h-3.5" />
                                    <span>EMAIL (CLICK TO COPY)</span>
                                </div>
                                <div className="text-xs text-[#3A1010] truncate">dhir.khushi.2005@gmail.com</div>
                            </div>

                            <a
                                href="https://www.linkedin.com/in/khushidhir3/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white border-2 border-[#5C1F1F] block-shadow-sm hover:bg-[#FAF7F2] transition-colors block"
                            >
                                <div className="text-[#5C1F1F] font-bold mb-1 flex items-center gap-1.5">
                                    <Linkedin className="w-3.5 h-3.5" />
                                    <span>LINKEDIN</span>
                                </div>
                                <div className="text-xs text-[#3A1010] truncate">linkedin.com/in/khushidhir3</div>
                            </a>

                            <a
                                href="https://github.com/khushidhir3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white border-2 border-[#5C1F1F] block-shadow-sm hover:bg-[#FAF7F2] transition-colors block"
                            >
                                <div className="text-[#5C1F1F] font-bold mb-1 flex items-center gap-1.5">
                                    <Github className="w-3.5 h-3.5" />
                                    <span>GITHUB</span>
                                </div>
                                <div className="text-xs text-[#3A1010] truncate">github.com/khushidhir3</div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                BLOCKY LUXE FOOTER
            ═══════════════════════════════════════════════════════════ */}
            <footer className="bg-[#1A0A0A] border-t-2 border-[#8B6B6B] text-[#E8DDD3] py-8 px-6 sm:px-10 font-mono-tech text-xs">
                <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <span className="text-[#FFE29A] font-bold">KHUSHI DHIR</span>
                        <span className="text-[#C4A5A0] mx-2">•</span>
                        <span>© 2025 ALL RIGHTS RESERVED</span>
                    </div>

                    <div className="text-[#C4A5A0] text-center">
                        THE DAILY DISPATCH ✦ ENGINEERED WITH REACT & TAILWIND
                    </div>

                    <a
                        href="#hero"
                        className="px-3 py-1.5 bg-[#3A1010] border border-[#8B6B6B] text-[#FFE29A] hover:bg-[#5C1F1F] transition-all block-shadow-sm"
                    >
                        BACK TO TOP ↑
                    </a>
                </div>
            </footer>

            {/* ═══════════════════════════════════════════════════════════
                CERTIFICATE LIGHTBOX MODAL
            ═══════════════════════════════════════════════════════════ */}
            {selectedCert && (
                <div
                    onClick={() => setSelectedCert(null)}
                    className="fixed inset-0 z-50 bg-[#1A0A0A]/90 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-[#E8DDD3] text-[#3A1010] border-4 border-[#5C1F1F] max-w-2xl w-full p-6 block-shadow-lg relative animate-fade-in"
                    >
                        <button
                            onClick={() => setSelectedCert(null)}
                            className="absolute top-4 right-4 p-2 bg-[#5C1F1F] text-white hover:bg-[#3A1010] transition-colors block-shadow-sm cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="mb-4">
                            <span className="px-2.5 py-1 bg-[#5C1F1F] text-[#FFE29A] font-mono-tech text-xs font-bold">
                                {selectedCert.badge}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-black text-[#5C1F1F] mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                                {selectedCert.title}
                            </h3>
                            <p className="text-xs font-mono-tech text-[#5C1F1F]/70">
                                Issuer: {selectedCert.issuer} • Issued: {selectedCert.date}
                            </p>
                        </div>

                        <div className="aspect-[4/3] bg-white border-2 border-[#5C1F1F] overflow-hidden mb-6 flex items-center justify-center p-2">
                            <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-full object-contain" />
                        </div>

                        <div className="flex gap-3 font-mono-tech text-xs">
                            <a
                                href={selectedCert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-3 bg-[#5C1F1F] text-white font-bold text-center block-shadow hover:bg-[#3A1010] transition-all flex items-center justify-center gap-2"
                            >
                                <ExternalLink className="w-4 h-4 text-[#FFE29A]" />
                                VERIFY CREDENTIAL
                            </a>
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="px-6 py-3 bg-white text-[#5C1F1F] border-2 border-[#5C1F1F] font-bold block-shadow hover:bg-[#FAF7F2] transition-all cursor-pointer"
                            >
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
