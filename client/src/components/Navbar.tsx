import React from 'react'

import { useState } from "react";
import { navLinks } from "../constants/constants.index";
import logo from "../assets/logo.svg"
import resume from "../assets/Richard_Tumaneng_Resume.pdf"

//import { logo, resume } from "../assets";

type Props = {}

const Navbar = (props: Props) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className= "w-full flex pt-0 pb-0 pl-5 md:pt-6 md:pb-2 justify-between items-center navbar">
            <a href= '#home' className="">
                <img src={logo} alt="richard-tumaneng" className="hover:scale-110 transition duration-300 ease-in-out cursor-pointer w-[124px] h-[32px]"></img>
            </a>

            <ul className="list-none sm:flex justify-end items-center flex-1">
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
            <button className="font-robotomono mr-7 md:mr-10 bg-gradient-to-br from-gray-900 to-gray-700 hover:bg-slate-500 text-white py-2 px-4 rounded-full hover:animate-jello-vertical">
                <a href= {resume} download>
                    Resume
                </a>
            </button>
            

            
        </nav>
    )
}

export default Navbar