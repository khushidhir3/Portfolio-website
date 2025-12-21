import React from 'react';

const SplashScreen = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#5C1F1F] via-[#8B6B6B] to-[#5C1F1F] overflow-hidden splash-screen">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-[#C4A5A0] rounded-full blur-3xl opacity-20 animate-float hover:opacity-30 transition-opacity duration-1000"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#E8DDD3] rounded-full blur-3xl opacity-20 animate-float-delayed hover:opacity-30 transition-opacity duration-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A67B7B] rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full animate-sparkle hover:w-3 hover:h-3 transition-all duration-300"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="relative z-10 text-center px-6 group">
                <div className="flex items-center justify-center mb-8 animate-slide-down">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#E8DDD3] to-transparent group-hover:w-32 transition-all duration-500"></div>
                    <div className="mx-4 text-[#E8DDD3] text-2xl hover:scale-125 hover:rotate-90 transition-all duration-500 cursor-pointer">✦</div>
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#E8DDD3] to-transparent group-hover:w-32 transition-all duration-500"></div>
                </div>

                <div className="mb-6">
                    <h1 className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-2 animate-fade-in-scale hover:tracking-[0.3em] hover:text-[#E8DDD3] transition-all duration-700 cursor-default" style={{fontFamily: 'serif', fontWeight: '900'}}>
                        KHUSHI
                    </h1>
                    <h2 className="text-[#E8DDD3] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.3em] animate-fade-in-scale-delayed hover:tracking-[0.4em] hover:text-white transition-all duration-700 cursor-default">
                        DHIR
                    </h2>
                </div>

                <div className="animate-fade-in-up-delayed">
                    <p className="text-[#C4A5A0] text-lg sm:text-xl md:text-2xl font-light tracking-widest mb-8 cursor-default">
                        <span className="inline-block hover:text-white hover:scale-110 transition-all duration-300 mx-1">DEVELOPER</span>
                        <span className="inline-block mx-2">•</span>
                        <span className="inline-block hover:text-white hover:scale-110 transition-all duration-300 mx-1">DESIGNER</span>
                        <span className="inline-block mx-2">•</span>
                        <span className="inline-block hover:text-white hover:scale-110 transition-all duration-300 mx-1">DREAMER</span>
                    </p>
                </div>

                <div className="flex items-center justify-center animate-slide-up-delayed">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#E8DDD3] to-transparent group-hover:w-32 transition-all duration-500"></div>
                    <div className="mx-4 text-[#E8DDD3] text-2xl hover:scale-125 hover:rotate-90 transition-all duration-500 cursor-pointer">✦</div>
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#E8DDD3] to-transparent group-hover:w-32 transition-all duration-500"></div>
                </div>

                <div className="mt-12 flex justify-center items-center gap-2 animate-fade-in-late">
                    <div className="w-2 h-2 bg-[#E8DDD3] rounded-full animate-bounce hover:w-3 hover:h-3 hover:bg-white transition-all duration-300 cursor-pointer"></div>
                    <div className="w-2 h-2 bg-[#C4A5A0] rounded-full animate-bounce hover:w-3 hover:h-3 hover:bg-white transition-all duration-300 cursor-pointer" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-[#A67B7B] rounded-full animate-bounce hover:w-3 hover:h-3 hover:bg-white transition-all duration-300 cursor-pointer" style={{animationDelay: '0.4s'}}></div>
                </div>

                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <p className="text-[#E8DDD3] text-sm tracking-widest animate-fade-in">
                        Welcome to my world ✨
                    </p>
                </div>
            </div>

            <div className="absolute top-8 left-8 text-[#E8DDD3] text-4xl opacity-30 animate-spin-slow hover:opacity-80 hover:scale-150 hover:text-white transition-all duration-500 cursor-pointer">✦</div>
            <div className="absolute top-8 right-8 text-[#C4A5A0] text-4xl opacity-30 animate-spin-slow hover:opacity-80 hover:scale-150 hover:text-white transition-all duration-500 cursor-pointer" style={{animationDelay: '1s'}}>✦</div>
            <div className="absolute bottom-8 left-8 text-[#A67B7B] text-4xl opacity-30 animate-spin-slow hover:opacity-80 hover:scale-150 hover:text-white transition-all duration-500 cursor-pointer" style={{animationDelay: '2s'}}>✦</div>
            <div className="absolute bottom-8 right-8 text-[#E8DDD3] text-4xl opacity-30 animate-spin-slow hover:opacity-80 hover:scale-150 hover:text-white transition-all duration-500 cursor-pointer" style={{animationDelay: '1.5s'}}>✦</div>

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl opacity-0 hover:opacity-5 transition-opacity duration-500" style={{
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    top: '50%'
                }}></div>
            </div>

            <style jsx>{`
                @keyframes fade-in-scale {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                @keyframes slide-down {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                @keyframes float-delayed {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(20px);
                    }
                }
                @keyframes sparkle {
                    0%, 100% {
                        opacity: 0;
                        transform: scale(0);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                @keyframes pulse-slow {
                    0%, 100% {
                        opacity: 0.1;
                    }
                    50% {
                        opacity: 0.2;
                    }
                }
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                .animate-fade-in-scale {
                    animation: fade-in-scale 0.8s ease-out forwards;
                }
                .animate-fade-in-scale-delayed {
                    animation: fade-in-scale 0.8s ease-out 0.3s forwards;
                    opacity: 0;
                }
                .animate-slide-down {
                    animation: slide-down 0.6s ease-out forwards;
                }
                .animate-slide-up-delayed {
                    animation: slide-up 0.6s ease-out 0.9s forwards;
                    opacity: 0;
                }
                .animate-fade-in-up-delayed {
                    animation: fade-in-up 0.6s ease-out 0.6s forwards;
                    opacity: 0;
                }
                .animate-fade-in-late {
                    animation: fade-in-up 0.6s ease-out 1.2s forwards;
                    opacity: 0;
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 6s ease-in-out infinite;
                }
                .animate-sparkle {
                    animation: sparkle 3s ease-in-out infinite;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default SplashScreen;