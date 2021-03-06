import React from 'react'

// import navigation data
import {navigation} from '../../core/utils/Header';
//import link
import {Link} from 'react-scroll';
//import for dark mode / light mode
import ThemeSwitch from '../ThemeSwitch';

const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-6 capitalize text-[17px] items-center'>
        {navigation.map((item, index) => {
          return (
            <li className='text-black dark:text-white hover:text-accent dark:hover:text-accent cursor-pointer' key={index}>
              <Link to={item.href} activeClass='active' spy={true} smooth={true} duration={500} offset={-70} className='transition-all duration-300'>
              {item.name}
              </Link>
            </li>
          )
        })}
        <ThemeSwitch/>
      </ul>
    </nav>
  )
}


export default Nav