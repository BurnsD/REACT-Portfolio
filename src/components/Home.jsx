import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-yellow-600'>Howdy, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Dustin Burns</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Full Stack Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil delectus, est
                    odit culpa pariatur aperiam impedit a atque animi, nobis laboriosam cupiditate
                    consequatur enim, quod aliquam. At ducimus sed laudantium!</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'>View Projects
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