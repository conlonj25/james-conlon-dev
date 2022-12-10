import React from 'react'
import ProjectWindow from './ProjectWindow'
import { FaPaintBrush } from 'react-icons/fa';

import Data from "../pages/api/data.json";
const ProjectData = Data.ProjectData;

const Projects = () => {
  return (
    <section id='projects' className='bg-slate-500 pb-16'>

      <div className='text-center text-3xl font-medium text-white mb-5 flex flex-row justify-center items-center gap-5 p-4'>
        <FaPaintBrush />
        Projects
      </div>

      <div className='flex justify-center'>
        <div className='flex flex-wrap w-4/5 justify-center gap-5'>
          {
            ProjectData.map((item) => {
              return (<ProjectWindow key={item.title} ProjectData={item} />)
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Projects
