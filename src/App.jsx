import React, { useState } from 'react';

const Portfolio = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

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
                            <p>LinkedIn: linkedin.com/in/khushidhir3</p>
                            <p>GitHub: github.com/khushidhir3</p>
                            <p>Email: dhir.khushi.2005@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex-shrink-0">
                        <div className="w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px] bg-gradient-to-br from-[#8B6B6B] to-[#6B4F4F] rounded-sm relative overflow-hidden shadow-2xl flex items-center justify-center">
                            <div className="text-white text-lg opacity-30">YOUR PHOTO HERE</div>
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
                        expandedSection === 'about' ? 'w-full' : expandedSection === 'skills' ? 'w-full md:w-0 overflow-hidden' : 'w-full md:w-1/2'
                    }`}
                    onClick={() => toggleSection('about')}
                >
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
                                    <div className="w-full h-full flex items-center justify-center text-white text-sm opacity-30">
                                        YOUR PHOTO HERE
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    className={`transition-all duration-500 bg-[#C4A5A0] flex items-center justify-center p-6 md:p-12 cursor-pointer ${
                        expandedSection === 'skills' ? 'w-full' : expandedSection === 'about' ? 'w-full md:w-0 overflow-hidden' : 'w-full md:w-1/2'
                    }`}
                    onClick={() => toggleSection('skills')}
                >
                    <div className="max-w-[700px] w-full">
                        <h3 className={`text-[#5C1F1F] font-bold mb-6 md:mb-12 leading-none transition-all duration-500 ${expandedSection === 'skills' ? 'text-5xl md:text-[100px]' : 'text-4xl md:text-6xl'}`} style={{fontFamily: 'serif'}}>
                            SKILLS
                        </h3>
                        <div className="grid grid-cols-2 gap-6 md:gap-8">
                            <div>
                                <p className={`text-white font-bold mb-4 md:mb-6 bg-[#5C1F1F] px-4 md:px-6 py-2 md:py-3 rounded-sm inline-block transition-all duration-500 ${expandedSection === 'skills' ? 'text-base md:text-lg' : 'text-xs md:text-sm'}`}>LANGUAGES</p>
                                <ul className={`text-[#5C1F1F] space-y-2 md:space-y-4 mt-4 md:mt-8 font-medium transition-all duration-500 ${expandedSection === 'skills' ? 'text-base md:text-lg' : 'text-xs md:text-sm'}`}>
                                    <li className="border-b-2 border-[#5C1F1F] pb-1 md:pb-2">C++</li>
                                    <li className="border-b-2 border-[#5C1F1F] pb-1 md:pb-2">JAVA</li>
                                    <li className="border-b-2 border-[#5C1F1F] pb-1 md:pb-2">JAVASCRIPT</li>
                                    <li className="border-b-2 border-[#5C1F1F] pb-1 md:pb-2">SQL</li>
                                    <li className="border-b-2 border-[#5C1F1F] pb-1 md:pb-2">DART</li>
                                </ul>
                            </div>
                            <div>
                                <p className={`text-white font-bold mb-4 md:mb-6 bg-[#5C1F1F] px-4 md:px-6 py-2 md:py-3 rounded-sm inline-block transition-all duration-500 ${expandedSection === 'skills' ? 'text-base md:text-lg' : 'text-xs md:text-sm'}`}>TECH</p>
                                <ul className={`text-[#5C1F1F] space-y-2 md:space-y-4 mt-4 md:mt-8 font-medium transition-all duration-500 ${expandedSection === 'skills' ? 'text-base md:text-lg' : 'text-xs md:text-sm'}`}>
                                    <li className="border-b-2 border-[#5C1F1F] pb-1 md:pb-2">FLUTTER</li>
                                    <li className="border-b-2 border-[#5C1F1F] pb-1 md:pb-2">REACT.JS</li>
                                    <li className="border-b-2 border-[#5C1F1F] pb-1 md:pb-2">NODE.JS</li>
                                    <li className="border-b-2 border-[#5C1F1F] pb-1 md:pb-2">FIREBASE</li>
                                    <li className="border-b-2 border-[#5C1F1F] pb-1 md:pb-2">MONGODB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects */}
            <div className={`transition-all duration-500 ${expandedSection === 'projects1' || expandedSection === 'projects2' ? 'min-h-screen' : 'min-h-screen md:h-screen'} flex flex-col md:flex-row`}>
                <div
                    className={`transition-all duration-500 bg-[#E8DDD3] flex items-center justify-center p-6 md:p-12 cursor-pointer ${
                        expandedSection === 'projects1' ? 'w-full' : expandedSection === 'projects2' ? 'w-full md:w-0 overflow-hidden' : 'w-full md:w-1/2'
                    }`}
                    onClick={() => toggleSection('projects1')}
                >
                    <div className="max-w-[700px] w-full">
                        <h3 className={`text-[#5C1F1F] font-bold mb-2 md:mb-4 leading-none transition-all duration-500 ${expandedSection === 'projects1' ? 'text-3xl md:text-[70px]' : 'text-3xl md:text-5xl'}`} style={{fontFamily: 'serif'}}>
                            NOTESHEET TRACKER
                        </h3>
                        <p className={`text-[#5C1F1F] mb-6 md:mb-8 font-light tracking-wide transition-all duration-500 ${expandedSection === 'projects1' ? 'text-lg md:text-2xl' : 'text-base md:text-xl'}`}>Academic Workflow Automation</p>
                        {expandedSection === 'projects1' && (
                            <div className="space-y-4 animate-fade-in">
                                <p className="text-[#5C1F1F] text-sm md:text-base">
                                    Digital platform for students to submit note sheets and for HODs to review, approve, and track them.
                                </p>
                                <div className="bg-[#5C1F1F] text-white p-4 md:p-6 rounded-sm">
                                    <ul className="space-y-2 text-xs md:text-sm">
                                        <li>• Secure login & role-based access</li>
                                        <li>• Real-time status tracking</li>
                                        <li>• Automated notifications</li>
                                        <li>• Responsive design</li>
                                    </ul>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-[#5C1F1F] text-white px-3 py-1 rounded-sm text-xs">Flutter</span>
                                    <span className="bg-[#5C1F1F] text-white px-3 py-1 rounded-sm text-xs">Firebase</span>
                                    <span className="bg-[#5C1F1F] text-white px-3 py-1 rounded-sm text-xs">Supabase</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div
                    className={`transition-all duration-500 bg-[#5C1F1F] flex items-center justify-center p-6 md:p-12 cursor-pointer ${
                        expandedSection === 'projects2' ? 'w-full' : expandedSection === 'projects1' ? 'w-full md:w-0 overflow-hidden' : 'w-full md:w-1/2'
                    }`}
                    onClick={() => toggleSection('projects2')}
                >
                    <div className="max-w-[700px] w-full">
                        <h3 className={`text-white font-bold mb-2 md:mb-4 leading-none transition-all duration-500 ${expandedSection === 'projects2' ? 'text-3xl md:text-[70px]' : 'text-3xl md:text-5xl'}`} style={{fontFamily: 'serif'}}>
                            MIND HORIZON
                        </h3>
                        <p className={`text-white mb-6 md:mb-8 font-light tracking-wide transition-all duration-500 ${expandedSection === 'projects2' ? 'text-lg md:text-2xl' : 'text-base md:text-xl'}`}>Mental Health Awareness</p>
                        {expandedSection === 'projects2' && (
                            <div className="space-y-4 animate-fade-in">
                                <p className="text-white text-sm md:text-base">
                                    Interactive quiz platform to identify early signs of stress, anxiety, and emotional imbalance.
                                </p>
                                <div className="bg-[#E8DDD3] text-[#5C1F1F] p-4 md:p-6 rounded-sm">
                                    <ul className="space-y-2 text-xs md:text-sm">
                                        <li>• Automated scoring & analysis</li>
                                        <li>• Personalized self-care suggestions</li>
                                        <li>• Early intervention support</li>
                                        <li>• Intuitive & accessible UI</li>
                                    </ul>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-[#E8DDD3] text-[#5C1F1F] px-3 py-1 rounded-sm text-xs">HTML</span>
                                    <span className="bg-[#E8DDD3] text-[#5C1F1F] px-3 py-1 rounded-sm text-xs">CSS</span>
                                    <span className="bg-[#E8DDD3] text-[#5C1F1F] px-3 py-1 rounded-sm text-xs">JavaScript</span>
                                    <span className="bg-[#E8DDD3] text-[#5C1F1F] px-3 py-1 rounded-sm text-xs">MySQL</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Achievements + Education */}
            <div className={`transition-all duration-500 ${expandedSection === 'achievements' || expandedSection === 'education' ? 'min-h-screen' : 'min-h-screen md:h-screen'} flex flex-col md:flex-row`}>
                <div
                    className={`transition-all duration-500 bg-[#C4A5A0] flex items-center justify-center p-6 md:p-12 cursor-pointer ${
                        expandedSection === 'achievements' ? 'w-full' : expandedSection === 'education' ? 'w-full md:w-0 overflow-hidden' : 'w-full md:w-1/2'
                    }`}
                    onClick={() => toggleSection('achievements')}
                >
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
                                <h4 className="font-bold mb-3 text-lg md:text-xl">Innovate X Hackathon</h4>
                                <p className="text-sm md:text-base">
                                    <strong>Top 10 Team</strong> among 250+ teams
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`transition-all duration-500 bg-[#E8DDD3] flex items-center justify-center p-6 md:p-12 cursor-pointer ${
                        expandedSection === 'education' ? 'w-full' : expandedSection === 'achievements' ? 'w-full md:w-0 overflow-hidden' : 'w-full md:w-1/2'
                    }`}
                    onClick={() => toggleSection('education')}
                >
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
                </div>
            </div>

            {/* Highlights + Certificates */}
            <div className={`transition-all duration-500 ${expandedSection === 'highlights' || expandedSection === 'certificates' ? 'min-h-screen' : 'min-h-screen md:h-screen'} flex flex-col md:flex-row`}>
                <div
                    className={`transition-all duration-500 bg-[#E8DDD3] flex items-center justify-center p-6 md:p-12 cursor-pointer ${
                        expandedSection === 'highlights' ? 'w-full' : expandedSection === 'certificates' ? 'w-full md:w-0 overflow-hidden' : 'w-full md:w-1/2'
                    }`}
                    onClick={() => toggleSection('highlights')}
                >
                    <div className="max-w-[700px] w-full">
                        <h3 className={`text-[#5C1F1F] font-bold mb-6 md:mb-12 leading-none transition-all duration-500 ${expandedSection === 'highlights' ? 'text-5xl md:text-[100px]' : 'text-4xl md:text-6xl'}`} style={{fontFamily: 'serif'}}>
                            HIGHLIGHTS
                        </h3>
                        <div className={`grid gap-4 md:gap-6 transition-all duration-500 ${expandedSection === 'highlights' ? 'grid-cols-4' : 'grid-cols-3'}`}>
                            {[1,2,3,4,5,6].map((i) => (
                                <div key={i} className="aspect-square rounded-full overflow-hidden hover:scale-110 transition-transform shadow-xl">
                                    <div className={`w-full h-full ${i % 3 === 0 ? 'bg-gradient-to-br from-[#5C1F1F] to-[#3A1010]' : i % 2 === 0 ? 'bg-gradient-to-br from-[#8B6B6B] to-[#6B4F4F]' : 'bg-gradient-to-br from-[#C4A5A0] to-[#A6857F]'}`}></div>
                                </div>
                            ))}
                            {expandedSection === 'highlights' && [7,8].map((i) => (
                                <div key={i} className="aspect-square rounded-full overflow-hidden hover:scale-110 transition-transform shadow-xl animate-fade-in">
                                    <div className={`w-full h-full ${i % 3 === 0 ? 'bg-gradient-to-br from-[#5C1F1F] to-[#3A1010]' : i % 2 === 0 ? 'bg-gradient-to-br from-[#8B6B6B] to-[#6B4F4F]' : 'bg-gradient-to-br from-[#C4A5A0] to-[#A6857F]'}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className={`transition-all duration-500 bg-[#C4A5A0] flex items-center justify-center p-6 md:p-12 cursor-pointer ${
                        expandedSection === 'certificates' ? 'w-full' : expandedSection === 'highlights' ? 'w-full md:w-0 overflow-hidden' : 'w-full md:w-1/2'
                    }`}
                    onClick={() => toggleSection('certificates')}
                >
                    <div className="max-w-[700px] w-full">
                        <h3 className={`text-[#5C1F1F] font-bold mb-6 md:mb-12 leading-none transition-all duration-500 ${expandedSection === 'certificates' ? 'text-5xl md:text-[80px]' : 'text-4xl md:text-6xl'}`} style={{fontFamily: 'serif'}}>
                            CERTIFICATES
                        </h3>
                        <div className="grid gap-4 md:gap-6">
                            <div className="bg-[#2A1212] text-white p-6 md:p-10 rounded-sm hover:scale-105 transition-transform shadow-2xl">
                                <p className="text-sm mb-4 opacity-70">July 2025</p>
                                <p className="text-base md:text-lg mb-4">Mobile Application Development Using Flutter</p>
                                <p className="text-xs font-bold tracking-widest">CIPHERSCHOOLS</p>
                            </div>
                            {expandedSection === 'certificates' && (
                                <>
                                    <div className="bg-[#2A1212] text-white p-6 md:p-10 rounded-sm hover:scale-105 transition-transform shadow-2xl animate-fade-in">
                                        <p className="text-sm mb-4 opacity-70">January 2025</p>
                                        <p className="text-base md:text-lg mb-4">Data Structures and Algorithm</p>
                                        <p className="text-xs font-bold tracking-widest">IAMNEO</p>
                                    </div>
                                    <div className="bg-white text-[#5C1F1F] p-6 md:p-10 rounded-sm hover:scale-105 transition-transform shadow-2xl animate-fade-in">
                                        <p className="text-sm mb-4 opacity-70">May 2025</p>
                                        <p className="text-base md:text-lg mb-4">Social Networks</p>
                                        <p className="text-xs font-bold tracking-widest">NPTEL</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-[#5C1F1F] text-white py-8 md:py-12 text-center">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <p className="text-xl md:text-2xl mb-4 tracking-widest">KHUSHI DHIR</p>
                    <div className="text-sm md:text-base space-y-1 opacity-70">
                        <p>LinkedIn: linkedin.com/in/khushidhir3</p>
                        <p>GitHub: github.com/khushidhir3</p>
                        <p>Email: dhir.khushi.2005@gmail.com</p>
                        <p>Mobile: +91-6284827233</p>
                    </div>
                </div>
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