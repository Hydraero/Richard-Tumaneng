import React from 'react'

import { useState } from "react";
import { navLinks } from "../constants/constants.index";
//import logo

type Props = {}

const Navbar = (props: Props) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className= "w-full flex py-6 justify-between items-center navbar">
            {/*add logo here for richard tumaneng <img src={logo} alt="richard-tumaneng"></img>*/}

            <ul className="list-none sm: flex justify-end items-center flex-1">
                {navLinks.map((nav,index) => (
                    <li
                        key={nav.id}
                        className="font-robotomono mr-10"
                    >
                        
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
                <li className='font-robotomono mr-10'>
                    <button className="bg-black hover:bg-slate-500 text-white py-2 px-4 rounded-full">
                        Resume
                    </button>
                </li>
            </ul>
            
            {/*Navbar/Hamburger button for Mobile*/}
            <div></div>

            
        </nav>
    )
}

export default Navbar