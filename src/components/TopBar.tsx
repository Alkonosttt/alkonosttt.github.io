import React from "react";
import { useState, useEffect } from "react";
import './TopBar.css';
import Clock from './Clock';

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

    // to open my github using a button instead of a link
    const githubLink = () => {
        window.open('https://github.com/Alkonosttt', '_blank', 'noopener, noreferrer');
    };

    return (
        // clock <Clock/>
        // home button #home
        // a button to switch between the light and dark mode #themeSwitcher
        // a button with a link to GitHub #githubLink
        <div className="headerContainer">            
            <header className="TopBar">
                <Clock/>
                <button id="home" />
                <button id="themeSwitcher" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/>
                <button id="githubLink" onClick={githubLink}/>                
            </header>
        </div>
    );
};

export default TopBar;