// ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import styles from './ThemeToggle.module.scss';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); // Initial theme

    useEffect(() => {
        // Check for stored preference or system preference on mount
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        // Apply theme class to body or root element
        document.documentElement.setAttribute('data-theme', theme);
        // localStorage.setItem('theme', theme); // Store preference
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme} style={{backgroundColor: theme === 'light' ? "#e5e5e5" : "#2c2c2c", color: theme === 'light' ? '#000' : '#fff'}} className={styles.toggleButton}>
            {/* Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode */}
            {theme === 'light' ?
                <Sun /> :
                <Moon />
            }
        </button>
    );

}