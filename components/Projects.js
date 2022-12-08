import React from 'react'
import ProjectWindow from './ProjectWindow'
import { FaPaintBrush } from 'react-icons/fa';

import Data from "../pages/api/data.json";
const ProjectData = Data.ProjectData;

const Projects = () => {
  return (
    <section id='projects'>
      <div className='bg-slate-500 text-center flex justify-center text-3xl font-medium text-white'>
          Projects 
          <FaPaintBrush />
      </div>

      <div className='bg-slate-500 flex flex-row justify-center'>
        <div className='flex flex-wrap w-4/5 justify-center'>
          {
            ProjectData.map((item) => {
              return (<ProjectWindow ProjectData={item} />)
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Projects
