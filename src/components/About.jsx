import React from 'react'
import aboutImg from "../assets/about.jpg"
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span> </h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex items-center justify-center'>
              <img className="rounded-2xl" src={aboutImg} alt="about"/>
            </div>
            </div>
            <div className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:justify-start'>
              <p className='my-2 max-w-xl py-6'>I am a passionate B.Tech CSE student specializing in the MERN stack, with a keen interest 
                in modern web technologies and full-stack development. My expertise includes developing scalable web applications 
                using MongoDB, Express.js, React, and Node.js, and 
                I am driven by a love for creating dynamic, user-centric solutions.In addition to my MERN stack proficiency, 
                I have a solid foundation in SAP development, which has provided me with valuable insights into enterprise resource planning and integration.
                 I am also skilled in Java, with a strong grasp of data structures and algorithms, which has enhanced my problem-solving abilities and technical acumen.I am always eager to learn
                  and adapt to new challenges, continuously seeking opportunities to apply my skills and contribute to innovative projects.</p>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
