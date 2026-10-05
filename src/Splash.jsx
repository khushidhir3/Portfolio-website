import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, ArrowRight } from 'lucide-react';

const SplashScreen = ({ onComplete }) => {
    const [count, setCount] = useState(3);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsExiting(true);
                        setTimeout(() => {
                            if (onComplete) onComplete();
                        }, 600);
                    }, 400);
                    return 0;
                }
                return prev - 1;
            });
        }, 800);

        return () => clearInterval(interval);
    }, [onComplete]);

    const handleSkip = () => {
        setIsExiting(true);
        setTimeout(() => {
            if (onComplete) onComplete();
        }, 300);
    };

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center bg-[#2A1212] bg-grid-pattern transition-all duration-700 ${
                isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
            }`}
        >
            {/* Ambient Disco Spotlight Cones */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-[#5C1F1F] rounded-full blur-[120px] opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] bg-[#C4A5A0] rounded-full blur-[140px] opacity-35 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8B6B6B] rounded-full blur-[160px] opacity-20"></div>
            </div>

            {/* Micro Dot Matrix Overlay */}
            <div className="absolute inset-0 bg-dot-matrix opacity-30 pointer-events-none"></div>

            {/* Corner Cyber Brackets */}
            <div className="absolute top-6 left-6 font-mono-tech text-xs text-[#C4A5A0]/60 tracking-widest hidden sm:block">
                [ SYS_INIT // 2026.0 ]
            </div>
            <div className="absolute top-6 right-6 font-mono-tech text-xs text-[#C4A5A0]/60 tracking-widest hidden sm:block">
                [ LAT: 31.25°N // LON: 75.70°E ]
            </div>
            <div className="absolute bottom-6 left-6 font-mono-tech text-xs text-[#C4A5A0]/60 tracking-widest hidden sm:block">
                [ ARCHITECTURE: REACT + DISCO_VFX ]
            </div>
            <div className="absolute bottom-6 right-6 z-20">
                <button
                    onClick={handleSkip}
                    className="font-mono-tech text-xs text-[#E8DDD3] bg-[#5C1F1F]/80 hover:bg-[#5C1F1F] border border-[#C4A5A0]/40 px-4 py-2 rounded-sm transition-all duration-300 flex items-center gap-2 hover:translate-x-1 block-shadow-sm cursor-pointer"
                >
                    SKIP INTRO <ArrowRight className="w-3.5 h-3.5" />
                </button>
            </div>

            {/* Main Stage Content */}
            <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
                {/* Tech Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#5C1F1F]/70 border border-[#C4A5A0]/40 text-[#E8DDD3] font-mono-tech text-xs tracking-wider mb-8 block-shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#FFE29A] animate-ping"></span>
                    <span>INITIALIZING PORTFOLIO ENGINE</span>
                    <span className="text-[#C4A5A0]">[{count > 0 ? `0${count}` : 'READY'}]</span>
                </div>

                {/* Decorative Laser Bar */}
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-[2px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#C4A5A0] to-transparent"></div>
                    <div className="text-[#FFE29A] text-xl animate-spin" style={{ animationDuration: '8s' }}>
                        ✦
                    </div>
                    <div className="h-[2px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#C4A5A0] to-transparent"></div>
                </div>

                {/* Big Bold Editorial Name */}
                <h1 
                    className="text-white text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-2 uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" 
                    style={{ fontFamily: 'Playfair Display, serif' }}
                >
                    KHUSHI DHIR
                </h1>

                <p className="text-[#E8DDD3] font-mono-tech text-xs sm:text-sm tracking-[0.25em] uppercase mb-8">
                    Software Engineer <span className="text-[#FFE29A]">✦</span> Full Stack <span className="text-[#FFE29A]">✦</span> Flutter
                </p>

                {/* Blocky Progress Bar */}
                <div className="w-64 sm:w-80 h-2 bg-[#1A0A0A] mx-auto rounded-none border border-[#C4A5A0]/40 p-[2px] relative overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-[#5C1F1F] via-[#C4A5A0] to-[#FFE29A] transition-all duration-700 ease-out"
                        style={{ width: `${((4 - count) / 3) * 100}%` }}
                    ></div>
                </div>

                {/* Bottom Welcome Subtitle */}
                <div className="mt-8 flex justify-center items-center gap-3 text-xs font-mono-tech text-[#C4A5A0]">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFE29A] animate-bounce" />
                    <span>ENTERING DIGITAL SPACE</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#FFE29A] animate-bounce" style={{ animationDelay: '0.3s' }} />
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;