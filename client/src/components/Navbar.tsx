import React from 'react'

import Switcher from '../components/Switcher'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useState } from "react";
import { navLinks } from "../constants/constants.index";
import logo from "../assets/logo.svg"
import resume from "../assets/Richard_Tumaneng_Resume.pdf"

//import { logo, resume } from "../assets";

type Props = {}

const Navbar = (props: Props) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className= "w-full flex flex-row mb-0 pl-5 md:pt-6 md:pb-2 justify-between items-center navbar">
            
            <div>
                <a href= '#home' className="">
                    {/* Inline Logo SVG optimized with: https://jakearchibald.github.io/svgomg/ .*/}
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-slate-900 dark:fill-slate-100 hover:scale-110 transition duration-300 ease-in-out cursor-pointer w-[124px] h-[32px]" version="1.0" viewBox="341.39 325.08 842.5 307.93">
                        <path d="M546.8 326.1c-6.6 1.5-15.1 6.6-20.5 12.1-8.9 9.2-177.2 226.8-180.4 233.3-5.9 12-6 24.3-.4 37.1 2.7 6.2 11.1 15.5 17.1 19 9.8 5.8-12.6 5.4 313.4 5.4 164.7 0 301.2-.4 303.2-.9 6.3-1.5 12.8-5.2 18.4-10.5 8.4-8 178.8-227.8 182.6-235.5 2.5-5.2 3.2-8.1 3.6-15.1 1.2-21.5-10.7-38.2-31.7-44.6-3.9-1.2-50.3-1.4-303.1-1.3-168.8.1-300.1.5-302.2 1zM847 352.4c0 .2-31.8 39.9-70.6 88.3-38.9 48.3-84.7 105.2-101.8 126.5L643.5 606l-132.7-.3c-132.1-.2-132.7-.2-135.4-2.3-6.5-4.8-8.7-15.4-4.3-21.5 1.3-1.9 32.1-41.7 68.4-88.4 36.3-46.8 75.2-96.8 86.4-111.3 19.8-25.6 21.7-27.6 27-29.3 2.6-.7 294.1-1.3 294.1-.5zm302.6 2.2c5.3 3.9 6.9 7.1 6.9 13.4 0 4.6-.5 6.5-2.4 9.2-1.4 1.8-41.5 53.5-89.1 114.8-55.9 72-87.6 112-89.4 112.8-2.1.9-34.9 1.2-149.6 1.2-80.9 0-147-.3-147-.6 0-.6 197.9-246.5 201.8-250.7l2.6-2.7 131.7.2c131.3.3 131.8.3 134.5 2.4z"/>
                        <path d="M593.4 421.5c-9.1 3.1-13.4 5.6-21.3 12.4-3.5 3.1-6.6 5.1-6.8 4.6-2.4-7.2-6.5-10.4-11.5-9.2-4 1-5 4.7-4.2 15.7l.7 9.7-3.2 4.6c-3.9 5.7-4.1 9.8-.5 12.6 1.4 1.1 3 2.1 3.6 2.3.6.2 1.1 5.4 1.3 13.3.2 7.2.8 15.7 1.4 19 .5 3.3 1.4 12.5 2.1 20.5 1.1 14.2 1.1 14.6 4.1 17.2 3.8 3.6 8.2 3.7 10.5.3 1.7-2.6 1.7-7.7-.2-28.8l-.6-6.7h15.8c20.7 0 45.9 1.5 66.1 4 19.6 2.4 25.1 2.5 28.1.4 3.2-2.2 3-7.8-.4-10-2.9-1.9-6.4-2.3-56.9-5.4-18.7-1.2-37.4-2.4-41.5-2.8l-7.4-.7 18.4-14c27.3-20.6 32.1-26.1 36.4-40.4 2.5-8.5 2.1-11.8-1.7-15.6-1.8-1.8-5.1-3.8-7.2-4.4-6.8-1.9-17.3-1.3-25.1 1.4zm19.4 12.9c.6 2.7-2.4 9.8-7 16.6-3.5 5.3-6.1 7.4-21 17.5-9.4 6.3-17.5 11.2-18 10.9-.4-.3-.8-5.1-.8-10.7l.1-10.2 7.8-6.9c10-8.7 21.3-16.3 27.1-18.1 6.1-1.9 11.4-1.5 11.8.9zM936 430.1c-16.4 4-20.3 4.5-23.1 2.5-3.7-2.5-6.5-2-9.4 1.9-1.5 1.9-3.7 3.7-4.8 4.1-15.8 4.6-28.4 9.1-29.9 10.6-2.7 2.7-2.3 7.2.9 9.8 3.6 2.8 7.3 2.4 21.8-2.3 6.2-2 11.4-3.1 11.9-2.6.9.8 2.8 17.4 7.1 63.9 2.4 25.9 2.5 26.6 5 28.7 3.9 3.4 8.1 3 10.5-1 2.5-4 2.5-8 .1-29.4-1.7-14.8-3.4-31.2-6-57.6-.4-4.2-.5-8.1-.2-8.5.4-.5 8.9-2.9 19-5.5 10.2-2.6 19.3-5.5 20.3-6.4 2.7-2.4 2.3-6.8-.8-9.2-3.6-2.8-8.2-2.6-22.4 1z"/>
                    </svg>
                </a>
            </div>

            <div className="pt-8 absolute left-1/2 md:left-36"><Switcher/></div>
            <ul className="list-none sm:flex items-center flex-1 justify-end text-primarydark dark:text-primdarktext">
                {navLinks.map((nav,index) => (
                    <li
                        key={nav.id}
                        className="hover:text-slate-500 font-robotomono mr-10 invisible md:visible"
                    >
                        
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            <a href= {resume} download>
                <button className="font-robotomono mr-7 md:mr-10 bg-gradient-to-br bg-slate-900 hover:bg-slate-500 dark:bg-primary text-white dark:text-black  py-2 px-4 rounded-full hover:animate-jello-vertical">
                    Resume
                </button>
            </a>
            

            
        </nav>
    )
}

export default Navbar