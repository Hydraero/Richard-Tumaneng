import React from 'react'

import { useState } from "react";
import { navLinks } from "../constants/constants.index";
import logo from "../assets/logo.svg"
import resume from "../assets/Richard_Tumaneng_Resume.pdf"

type Props = {}

const Navbar = (props: Props) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className= "w-full flex py-6 justify-between items-center navbar">
            <a href= '#home'>
                <img src={logo} alt="richard-tumaneng" className="hover:scale-110 transition duration-300 ease-in-out cursor-pointer w-[124px] h-[32px]"></img>
            </a>

            <ul className="list-none sm: flex justify-end items-center flex-1">
                {navLinks.map((nav,index) => (
                    <li
                        key={nav.id}
                        className="hover:text-slate-500 font-robotomono mr-10"
                    >
                        
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
                <li className='font-robotomono mr-10'>
                    <button className="bg-black hover:bg-slate-500 text-white py-2 px-4 rounded-full hover:scale-110 transition duration-300 ease-in-out">
                        <a href= {resume} download>
                            Resume
                        </a>
                    </button>
                </li>
            </ul>
            
            {/** 
            * TODO:
            * Navbar/Hamburger button for Mobile
            */}
            <div></div>

            
        </nav>
    )
}

export default Navbar