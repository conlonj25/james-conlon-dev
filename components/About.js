import React from 'react'

const About = () => {
  return (
    <section id='about'>
      <div className='bg-slate-500 flex flex-row justify-center p-10'>
        <div className='flex flex-col justify-center mr-96'>
          <p className='text-3xl font-medium text-white mb-10'>
            Hi, I'm James.<br />
            Check out some of my projects!
          </p>
          <p className='text-xl font-medium text-white mb-10'>
            I'm an Irish web developer currently based in Barcelona.
          </p>
          <div className='flex flex-row justify-center'>
            <a className='bg-green-400 px-10 py-5 rounded-xl text-xl text-medium text-white hover:bg-green-500 mr-20'>
              Hire Me
            </a>
            <a className='bg-slate-400 px-10 py-5 rounded-xl text-xl text-medium text-white hover:bg-slate-500'>
              Projects
            </a>
          </div>
        </div>
        <div className=''>
          <img
            height="500"
            width="500"
            className='rounded-full'
            alt='Profile Picture'
            src='./mugshot.jpeg'
          />
        </div>
      </div>
    </section>
  )
}

export default About
