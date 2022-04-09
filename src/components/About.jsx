import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0d1c33] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-yellow-300'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Transitioning Full Time into the Tech World</p>
                    </div>
                    <div>
                        <p>
                            I've always had a niche for building things within the material world. Now I am following my love for technology and taking that thought process into the digital world.
                            Learning a variety of languages and technologies, I can help build your application from the ground up or be an asset to any development team.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About