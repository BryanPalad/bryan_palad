import React from 'react'

//import social data 
import { social } from '../../data';


const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                {/* social icons    */}
                <div className='flex space-x-6 items-center'>
                {social.map((item, index) => {
                    const {href, icon} = item;
                    return (
                        <a className='text-white text-3xl text-base hover:text-accent-hover' href={href} target='_blank' rel='noreferrer' key={index}>
                            {icon}
                        </a>
                    )
                })}
                </div>
                {/* LOGO */}
                <div>
                    <p className='text-3xl font-logo text-white'>Bryan Palad</p>
                </div>
                {/* copyright */}
                <p className='text-white'>&copy; 2022 Bryan Palad. All rights reserved.</p>
            </div> 
        </div>
    </footer>
  )
}

export default Footer