import React from 'react'
import { SiAmazonaws, SiJava, SiJavascript, SiMysql, SiNginx, SiPython, SiReact, SiTailwindcss } from "react-icons/si";
import { MdCode } from "react-icons/md";

const Skills = () => {
  return (
    <section id='skills' className='bg-slate-500 flex flex-col justify-center'>

      <div className='text-center text-3xl font-medium text-white m-10'>
        Skills
        <MdCode />
      </div>

      <div className='w-4/5 flex flex-wrap justify-center m-10'>
        <div className='bg-slate-600 w-5/12 flex flex-row p-2 mr-10 mb-5 rounded-xl'>
          <SiPython className='text-5xl text-green-400' />
          <div className='text-2xl inline-block align-middle ml-5 text-white'>Python</div>
        </div>
        <div className='bg-slate-600 w-5/12 flex flex-row p-2 mr-10 mb-5 rounded-xl'>
          <SiJava className='text-5xl text-green-400' />
          <div className='text-2xl inline-block align-middle ml-5 text-white'>Java</div>
        </div>
        <div className='bg-slate-600 w-5/12 flex flex-row p-2 mr-10 mb-5 rounded-xl'>
          <SiJavascript className='text-5xl text-green-400' />
          <div className='text-2xl inline-block align-middle ml-5 text-white'>Javascript</div>
        </div>
        <div className='bg-slate-600 w-5/12 flex flex-row p-2 mr-10 mb-5 rounded-xl'>
          <SiReact className='text-5xl text-green-400' />
          <div className='text-2xl inline-block align-middle ml-5 text-white'>React</div>
        </div>
        <div className='bg-slate-600 w-5/12 flex flex-row p-2 mr-10 mb-5 rounded-xl'>
          <SiTailwindcss className='text-5xl text-green-400' />
          <div className='text-2xl inline-block align-middle ml-5 text-white'>Tailwind CSS</div>
        </div>
        <div className='bg-slate-600 w-5/12 flex flex-row p-2 mr-10 mb-5 rounded-xl'>
          <SiMysql className='text-5xl text-green-400' />
          <div className='text-2xl inline-block align-middle ml-5 text-white'>MySQL</div>
        </div>
        <div className='bg-slate-600 w-5/12 flex flex-row p-2 mr-10 mb-5 rounded-xl'>
          <SiNginx className='text-5xl text-green-400' />
          <div className='text-2xl inline-block align-middle ml-5 text-white'>Nginx</div>
        </div>
        <div className='bg-slate-600 w-5/12 flex flex-row p-2 mr-10 mb-5 rounded-xl'>
          <SiAmazonaws className='text-5xl text-green-400' />
          <div className='text-2xl inline-block align-middle ml-5 text-white'>AWS</div>
        </div>
      </div>
    </section>
  )
}

export default Skills
