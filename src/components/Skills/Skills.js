import React from 'react'

// import skills data
import {skills} from '../../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
        <div className='container mx-auto px-1'>
            <div className='grid grid-cols-2 md:grid-flow-row md:grid-cols-6 lg:grid-cols-12 gap-x-5 gap-y-5'>
                {skills.map((item, index) => {
                    return (
                       <div className='flex item-center justify-center' key={index}>
                        <img className='h-24 w-24 lg:h-full lg:w-full' src={item.image} alt='skill'/>
                       </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills