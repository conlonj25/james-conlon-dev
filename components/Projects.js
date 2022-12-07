import React from 'react'
import ProjectWindow from './ProjectWindow'

const Projects = () => {

  const proj1 = {
    title: "PYNQ Crowd Counting",
    subtitle: "Python, OpenCV, Xilinx PYNQ",
    description: "Hardware application designed to count people on CCTV footage in real-time",
    image: "./cctv.gif",
    liveLink: "https://github.com/conlonj25/Masters_Project_EE595",
    codeLink: "https://github.com/conlonj25/Masters_Project_EE595"
  }

  return (
    <section id='projects'>
      <div className='bg-slate-500 text-center text-3xl font-medium text-white'>
          Projects
      </div>
      <div className='bg-slate-500 flex flex-row justify-center'>
        <div className='flex flex-wrap w-4/5'>
          <ProjectWindow projectData={proj1}/>
        </div>
      </div>
    </section>
  )
}

export default Projects
