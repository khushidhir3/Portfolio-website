import React, { useState } from 'react';
import SplashScreen from './Splash';
import Portfolio from './Portfolio';

function App() {
    const [showSplash, setShowSplash] = useState(true);

    return (
        <main className="min-h-screen bg-[#5C1F1F] text-white">
            {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
            <Portfolio />
        </main>
    );
}

export default App;