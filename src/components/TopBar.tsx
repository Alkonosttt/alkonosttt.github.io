import React from "react";
import { useState, useEffect } from "react";
import './TopBar.css';

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = () => {
    // dark and light theme, light theme is the default
    const [theme, setTheme] = useState<'dark'| 'light'>('light');

    // adding and removing the dark or light class to <html> make the page change theme
    // the themes are declared in App.css as .dark and .light classes respectively 
    useEffect(()=> {
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(theme);
    },[theme]);

    return (
        // a button to switch between the light and dark mode
        <header className="TopBar">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/>
        </header>
    );
};

export default TopBar;