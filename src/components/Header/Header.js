import React, {useState, useEffect} from 'react'
import {SiNintendogamecube} from 'react-icons/si';

//components 
import Nav from './Nav';
import NavMobile from './NavMobile';
import Socials from './Socials';

const Header = () => {
    const [bg,setBg] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });
  return (
    <header className={`${bg ? 'bg-secondaryWhite dark:bg-secondary h-20' : 'bg-primaryWhite dark:bg-primary h-24'} flex items-center fixed top-0 w-full text-black dark:text-white z-10 transition-all duration-300`}>
        <div className='container mx-auto h-full flex items-center justify-between'>
           {/* LOGO */}
            <p className='text-2xl font-subtitle lg:text-3xl flex items-center gap-2'><SiNintendogamecube/>BRYAN</p>
            {/* NAV */}
            <div className='hidden lg:block'>
                <Nav />
            </div>
            {/* SOCIALS */}
            <div className='hidden lg:block'>
                <Socials />
            </div>
             {/* NAV MOBILE */}
             <div className='lg:hidden'>
                <NavMobile />
            </div>
        </div>
    </header>
  )
}

export default Header