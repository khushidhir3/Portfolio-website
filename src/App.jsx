import SplashScreen from './Splash';
import Portfolio from './Portfolio';
import React from 'react'
import {useState, useEffect} from 'react'

function App() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showSplash && <SplashScreen />}
            <Portfolio />
        </>
    );
}

export default App;