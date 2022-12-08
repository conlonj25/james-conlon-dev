import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-600 md:sticky top-0 flex flex-row'>
      <div className='text-2xl font-bold text-white px-20 py-5'>
        <a href="#" className='px-5 border-r-2 border-gray-300'>
          James Conlon
        </a>
      </div>
      <div className='grow flex flex-row text-xl text-gray-300'>
        <a href="#about" className='px-5 py-5 hover:text-white'>
          About
        </a>
        <a href="#projects" className='px-5 py-5 hover:text-white'>
          Projects
        </a>
        <a href="#skills" className='px-5 py-5 hover:text-white'>
          Skills
        </a>
        <a href="#contact" className='px-5 py-5 hover:text-white'>
          Contact
        </a>
      </div>
    </div>
  )
}

export default Navbar
