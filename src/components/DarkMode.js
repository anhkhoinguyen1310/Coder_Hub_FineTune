import React from "react";
import { ReactComponent as Sun } from "./DarkMode/Sun.svg";
import { ReactComponent as Moon } from "./DarkMode/Moon.svg";
import "./DarkMode/DarkMode.css";

const DarkMode = () => {
    const toggleDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("selectedTheme", "dark");

    };
    const toggleLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem("selectedTheme", "light");
    }
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme) {
        toggleDarkMode();
    }
    const toggleTheme = (e) => {
        if (e.target.checked) {
            toggleDarkMode();
        } else {
            toggleLightMode();
        }
    }
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
