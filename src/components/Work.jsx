import React from 'react'
import DashBoard from '../assets/dashboard.png'
import Login from '../assets/login-scrnsht.png'
import CodeQuiz from '../assets/code-quiz.png'
import Background from '../assets/background2.jpg'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]' style={{ backgroundImage: `url(${Background})`}}>
            {/* Contianer */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-300'>Work</p>
                    <p className='py-6'>Some of my recent projects</p>
                </div>

                {/* Grid Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Card Item */}
                    <div style={{ backgroundImage: `url(${CodeQuiz})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto card-item'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                JavaScript Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://burnsd.github.io/coding-quiz/endquiz.html">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-indigo-300 text-white font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/BurnsD/coding-quiz">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-indigo-300 text-white font-bold '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Card Item */}
                    <div style={{ backgroundImage: `url(${Login})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto card-item'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                JavaScript Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://enigmatic-cove-92029.herokuapp.com/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-indigo-300 text-white font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/BurnsD/Ice-cream-store-blog">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-indigo-300 text-white font-bold '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Card Item */}
                    <div style={{ backgroundImage: `url(${DashBoard})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto card-item'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                JavaScript Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://burnsd.github.io/weather-dashboard/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-indigo-300 text-white font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/BurnsD/weather-dashboard">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-indigo-300 text-white font-bold '>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work