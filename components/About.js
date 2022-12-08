import React from 'react'

const About = () => {
  return (
    <section id='about' className='bg-slate-500 pb-16'>

      <div className='flex flex-row justify-center gap-80 p-10'>
        <div className='flex flex-col justify-center gap-8'>
          <p className='text-3xl font-medium text-white'>
            Hi, I'm James.<br />
            Check out some of my projects!
          </p>
          <p className='text-xl font-medium text-white'>
            I'm an Irish web developer based in Barcelona.
          </p>
          <div className='flex flex-row justify-center gap-14'>
            <a href='#contact' className='bg-green-500 px-10 py-4 rounded-xl text-xl text-medium text-white hover:bg-green-600'>
              Hire Me
            </a>
            <a href='#projects' className='bg-slate-600 px-10 py-4 rounded-xl text-xl text-medium text-white hover:bg-slate-700'>
              Projects
            </a>
          </div>
        </div>

        <div className=''>
          <img
            height="450"
            width="450"
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
