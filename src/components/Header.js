'use client'

import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { useTheme } from './context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();


  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24'>
        <div className="">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <Link href="#">Mohamed Jalloh</Link>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
                Front-End Web Developer
                </h2>
                <p className="mt-4 max-w-xs leading-normal">I present my ideas with my code. creating web sites and apps that bring about solutions to our problems in these days of fast growing technology</p>

                
                <Nav />

                </div>


                <ul className="social-ul ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 shrink-0 text-xs">
                <a className="block" href="https://github.com/OneCode-AA" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                <span className="sr-only">GitHub</span>
                <GitHub/>
                </a>
                </li>
                <li className="mr-5 shrink-0 text-xs">
                  <a className="block" href="https://www.linkedin.com/in/abooabdillaahmbj/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                  <span className="sr-only">LinkedIn</span>
                  <LinkedIn/>
                  </a>
                </li>
              

              {/* <button className={`themeBtn p-[4px] w-[3rem] h-[4vh] bg-slate-800 rounded-[100px] `}>
                <span className={`relative w-[20px] h-[20px] rounded-[50px] block status-indicator`}></span>
              </button> */}

          <button
        className={`theme-btn`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <span
          className={`status-indicator ${
            theme === 'light-theme' ? 'day' : ''
          }`}
        ></span>
          </button>

            </ul>

            
       
    </header>
  )
}

export default Header