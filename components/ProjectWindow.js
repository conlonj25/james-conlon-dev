import React from 'react'

const ProjectWindow = ({projectData}) => {
  console.log(projectData);
  return (
    <div className='flex flex-col border-2 w-1/3'>
      <div className='flex object-fill h-1/2'>
        <img
          className='object-fill'
          src={projectData.image}
        />
      </div>
      <div className='flex flex-grow flex-col justify-around'>
        <p className='text-center'>{projectData.title}</p>
        <p className='text-center'>{projectData.subtitle}</p>
        <p className='text-center'>{projectData.description}</p>
        <div className='flex flex-row justify-around'>
          <a href={projectData.codeLink}>Code</a>
          <a href={projectData.liveLink}>Deployed</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectWindow
