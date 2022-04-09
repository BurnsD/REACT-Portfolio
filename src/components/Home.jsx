import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const description = 'Full Stack Developer'

const Home = () => {
    const [typedDescription, setTypedDescription] = useState('')
    useEffect(() => {
        const timeout = setTimeout(() => {
            setTypedDescription(description.slice(0, typedDescription.length + 1))
        }, 175)

        return () => clearTimeout(timeout)
    }, [typedDescription])

    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-yellow-300'>Howdy, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Dustin Burns</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] blinking-cursor'>{typedDescription}</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Ability to make your application come to life from the ground up! I am currently looking for an opportunity to apply creative, analytical, and communicative skills on a development team.
                    You can find some of my previous projects below or through this link. </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'>
                        <Link to='work' smooth={true} duration={500}>
                            View Work
                        </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home