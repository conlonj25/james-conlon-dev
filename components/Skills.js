import React from 'react'
import { SiAmazonaws, SiJava, SiJavascript, SiMysql, SiNginx, SiPython, SiReact, SiTailwindcss } from "react-icons/si";
import { RxCode } from "react-icons/rx";

const Skills = () => {
  return (
    <section id='skills' className='bg-slate-500 pb-16'>

      <div className='text-center text-3xl font-medium text-white mb-5 flex flex-row justify-center items-center gap-5 p-4'>
        <RxCode />
        Skills
      </div>

      <div className='flex justify-center'>

        <div className='w-4/5 flex flex-wrap justify-center gap-5'>
          <div className='bg-slate-600 w-5/12 flex flex-row p-3  rounded-xl items-center'>
            <SiPython className='text-4xl text-green-500' />
            <div className='text-2xl inline-block align-middle ml-5 text-white'>Python</div>
          </div>
          <div className='bg-slate-600 w-5/12 flex flex-row p-3  rounded-xl items-center'>
            <SiJava className='text-4xl text-green-500' />
            <div className='text-2xl inline-block align-middle ml-5 text-white'>Java</div>
          </div>
          <div className='bg-slate-600 w-5/12 flex flex-row p-3  rounded-xl items-center'>
            <SiJavascript className='text-4xl text-green-500' />
            <div className='text-2xl inline-block align-middle ml-5 text-white'>Javascript</div>
          </div>
          <div className='bg-slate-600 w-5/12 flex flex-row p-3  rounded-xl items-center'>
            <SiReact className='text-4xl text-green-500' />
            <div className='text-2xl inline-block align-middle ml-5 text-white'>React</div>
          </div>
          <div className='bg-slate-600 w-5/12 flex flex-row p-3  rounded-xl items-center'>
            <SiTailwindcss className='text-4xl text-green-500' />
            <div className='text-2xl inline-block align-middle ml-5 text-white'>Tailwind CSS</div>
          </div>
          <div className='bg-slate-600 w-5/12 flex flex-row p-3  rounded-xl items-center'>
            <SiMysql className='text-4xl text-green-500' />
            <div className='text-2xl inline-block align-middle ml-5 text-white'>MySQL</div>
          </div>
          <div className='bg-slate-600 w-5/12 flex flex-row p-3  rounded-xl items-center'>
            <SiNginx className='text-4xl text-green-500' />
            <div className='text-2xl inline-block align-middle ml-5 text-white'>Nginx</div>
          </div>
          <div className='bg-slate-600 w-5/12 flex flex-row p-3  rounded-xl items-center'>
            <SiAmazonaws className='text-4xl text-green-500' />
            <div className='text-2xl inline-block align-middle ml-5 text-white'>AWS</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
