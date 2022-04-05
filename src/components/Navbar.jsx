import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.png'

export const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt="Dustin Burns Dev Logo" style={{ width: '50px' }} />
            </div>

            {/*  NavBar Menu */}
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* Hamburger */}
            <div className='hidden'>
                <FaBars />
            </div>
            {/* Mobile Menu */}
            <ul className='hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>


            {/* Social Icons */}
            <div></div>
        </div>
    )
}
