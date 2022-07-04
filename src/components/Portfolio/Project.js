import React from 'react'

const Project = ({item}) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
        <div className={`${item.pointer ? 'cursor-pointer' : ''} mb-8 relative ease-out hover:ease-in `}>
            <img className='rounded-xl' src={item.image} alt=''/>
            <video className="clip rounded-xl absolute opacity-0 z-1 top-0 object-cover h-full hover:opacity-100 " loop muted autoPlay controls = ''>
                      <source src={item.clip} type="video/mp4"/>
                      <source src={item.clip} type="video/ogg"/>
            </video>
        </div>
        <p className='capitalize text-accent text-sm mb-3'>{item.description}</p>
        <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
    </div>
  )
}

export default Project