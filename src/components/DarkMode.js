import React, { useState, useEffect } from "react";
import { ReactComponent as Sun } from "./DarkMode/Sun.svg";
import { ReactComponent as Moon } from "./DarkMode/Moon.svg";
import "./DarkMode/DarkMode.css";

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Initialize theme on component mount
    useEffect(() => {
        const selectedTheme = localStorage.getItem("selectedTheme");
        if (selectedTheme === "dark") {
            document.querySelector("body").setAttribute("data-theme", "dark");
            setIsDarkMode(true);
        } else {
            document.querySelector("body").setAttribute("data-theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = (e) => {
        if (e.target.checked) {
            document.querySelector("body").setAttribute("data-theme", "dark");
            localStorage.setItem("selectedTheme", "dark");
            setIsDarkMode(true);
        } else {
            document.querySelector("body").setAttribute("data-theme", "light");
            localStorage.setItem("selectedTheme", "light");
            setIsDarkMode(false);
        }
    };

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                checked={isDarkMode}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
