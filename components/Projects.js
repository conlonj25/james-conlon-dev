import React from 'react'
import ProjectWindow from './ProjectWindow'

const proj1 = {
  title: "PYNQ Crowd Counting",
  subtitle: "Python, OpenCV, Xilinx PYNQ",
  description: "Hardware application designed to count people on CCTV footage in real-time",
  image: "./cctv.gif",
  liveLink: "https://github.com/conlonj25/Masters_Project_EE595",
  codeLink: "https://github.com/conlonj25/Masters_Project_EE595"
}

const proj2 = {
  title: "Bookshelf",
  subtitle: "Java, JDBC, MySQL",
  description: "Mock-up web application. Online book retailer",
  image: "./bookshelf.png",
  liveLink: "",
  codeLink: "https://github.com/conlonj25/Bookshelf"
}

const proj3 = {
  title: "Minecraft Clone",
  subtitle: "Javascript, JQuery, OSG.JS",
  description: "In-browser clone of the popular video game",
  image: "./minecraft.gif",
  liveLink: "https://conlonj25.github.io",
  codeLink: "https://github.com/conlonj25/Minecraft_Clone"
}

const Projects = () => {
  return (
    <section id='projects'>
      <div className='bg-slate-500 text-center text-3xl font-medium text-white'>
        Projects FaPaintBrush
      </div>
      <div className='bg-slate-500 flex flex-row justify-center'>
        <div className='flex flex-wrap w-4/5'>
          <ProjectWindow projectData={proj1} />
          <ProjectWindow projectData={proj2} />
          <ProjectWindow projectData={proj3} />
        </div>
      </div>
    </section>
  )
}

export default Projects
