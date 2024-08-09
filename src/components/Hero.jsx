import React from 'react'
import profilePic from "../assets/profile.jpg";
const Hero = () => {
  return (
    <div className='border-b border-neutral-900  pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <h1
                 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Dilpreet Kaur</h1>
                <span
                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl
                tracking-light text-transparent'>Full Stack Developer</span>
                <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>I specialize in designing and building robust, scalable web applications from the ground up.
                     With a strong foundation in both front-end and back-end technologies, I excel in creating seamless user experiences and efficient server-side solutions. 
                     My expertise includes working with modern frameworks and languages such as React, Node.js, and Express, coupled with proficiency in databases like MongoDB and SQL.
                      I am adept at integrating APIs, implementing responsive designs, and optimizing performance to deliver high-quality, user-centric applications.
                       Passionate about problem-solving and staying abreast of industry trends,
                     I am committed to leveraging my skills to drive innovation and success in every project I undertake.</p>
            </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex justify-center'>
            <img style={{ height: '450px' }}  src={profilePic} alt="Dilpreet Kaur"/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
