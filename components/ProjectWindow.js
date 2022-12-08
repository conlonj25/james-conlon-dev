import React from 'react'

const ProjectWindow = ({ProjectData}) => {
  return (
    <div className='flex flex-col border-2 w-1/3 m-5'>
      <div className='flex object-fill h-1/2'>
        <img
          className='object-fill'
          src={ProjectData.image}
        />
      </div>
      <div className='flex flex-grow flex-col justify-around'>
        <p className='text-center'>{ProjectData.title}</p>
        <p className='text-center'>{ProjectData.subtitle}</p>
        <p className='text-center'>{ProjectData.description}</p>
        <div className='flex flex-row justify-around'>
          {ProjectData.codeLink !== '' && <a href={ProjectData.liveLink}>Code</a>}
          {ProjectData.liveLink !== '' && <a href={ProjectData.liveLink}>Deployed</a>}
        </div>
      </div>
    </div>
  )
}

export default ProjectWindow
