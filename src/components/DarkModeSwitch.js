import React, { useState, useEffect } from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";

export const DarkModeSwitch = ({ showText = false, ...rest }) => {
    const loadedDarkMode = document.documentElement.classList.contains("dark");
    const [darkMode, setDarkMode] = useState(loadedDarkMode);
    const toggleDarkMode = () => { setDarkMode(!darkMode); };
    useEffect(()=> { 
        if (darkMode) document.documentElement.classList.add("dark");
        if (!darkMode) document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", darkMode ? "dark" : "light"); 
    }, [darkMode])
    return (
        <button onClick={toggleDarkMode} {...rest}>
            <div className="flex flex-row space-x-2 p-2 items-center">
            {darkMode ? <BsMoonStarsFill size={20} className="m-0.5" /> : <BsSun size={24} />}
            {showText ? <span>{ darkMode ? "Dark" : "Light" }</span> : <></> }
            </div>
        </button>
    );
};
