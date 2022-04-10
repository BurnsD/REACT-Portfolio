import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-between px-6 py-4 bg-[#0a192f] dark:bg-gray-800 sm:flex-row">
            <p className="py-2 text-gray-800 dark:text-white sm:py-0">All rights reserved</p>
            <div className="flex -mx-2 ">
                <a className='flex justify-between items-center w-full  text-gray-300'
                    href="https://www.linkedin.com/in/dustin-burns-b176b1226/">
                    <FaLinkedin size={30} className='bg-blue-600 rounded-md'/>
                </a>
                <a className='flex justify-between items-center pl-5 w-full  text-gray-300'
                    href="https://github.com/BurnsD">
                    <FaGithub size={30} className='bg-gray-600 rounded-md' />
                </a>
                <a className='flex justify-between items-center pl-5 w-full  text-gray-300'
                    href="https://twitter.com/DustinBurnsDev">
                    <FaTwitter size={30} className='bg-blue-600 rounded-md ' />
                </a>
            </div>
        </footer>
    )
}

export default Footer