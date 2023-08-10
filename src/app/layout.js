"use client";


import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import { useState , useEffect } from 'react'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <html lang="en">
        <body className={isDarkMode ? 'dark' : 'light'}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        {children}
        <Footer isDarkMode={isDarkMode}/>
        </body>
        </html>
    );
}
