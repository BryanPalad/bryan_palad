import React from 'react'

// import social data
import {social} from '../../data';

const Socials = () => {
  return (
    <ul className='flex space-x-6'>
        {social.map((item, index) => {
            return (
                <li className='flex justify-center items-center text-black dark:text-white hover:text-accent-hover dark:hover:text-accent-hover' key={index}>
                    <a className='text-base' href={item.href} target="_blank" rel='noreferrer'>
                        {item.icon}
                    </a>
                </li>
            )
        })}
    </ul>
  )
}

export default Socials