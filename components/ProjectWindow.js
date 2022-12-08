import React from 'react'

const ProjectWindow = ({ProjectData}) => {
  return (
    <div className='bg-slate-600 flex flex-col w-1/4 items-center rounded-xl'>
      
      <div className='w-full h-48 my-4 px-4'>
        <img className='h-full w-full rounded-xl'
          src={ProjectData.image}
        />
      </div>

      <div className='flex flex-col justify-around gap-4 mx-4 mb-4 h-full'>
        <p className='text-center text-white text-xl font-medium'>{ProjectData.title}</p>
        <p className='text-center text-green-500 text-lg font-medium'>{ProjectData.subtitle}</p>
        <p className='text-center text-white text-lg'>{ProjectData.description}</p>
        <div className='flex flex-row justify-around justify-self-end'>
          {ProjectData.codeLink !== '' && <a 
            href={ProjectData.codeLink}
            className='text-white text-lg px-10 py-3 rounded-xl bg-slate-700 hover:bg-slate-800'
            >Code</a>
          }
          {ProjectData.liveLink !== '' && <a 
            href={ProjectData.liveLink}
            className='text-white text-lg px-10 py-3 rounded-xl bg-green-500 hover:bg-green-600'
            >Live</a>
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectWindow
