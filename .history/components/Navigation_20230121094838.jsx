'use client';

import { navLinks } from '@/constants';
import Image from 'next/image';
import React, {useState} from 'react'
import Logo from './Logo';

const Navigation = () => {
    const [toggle, setToggle] = useState(false);

  return (
   <header>
     <nav className={styles.container}>
        <Logo />
        <ul
          className={styles.navWrapper}
        >
            {navLinks.map((nav, index) => (
                <li
                 key={nav.id}
                 className={`font-poppins font-bold cursor-pointer text-[16px]
                   ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                  text-white `}
                >
                    <a href={`#${nav.id}`}>
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>
      </nav>
      {/* mobileView */}
      <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                    <img className="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
                </a>
            </div>
            {/*menupover starts  */}
            <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                
                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                </svg>

               
                <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
           {/* menupopover ends */}
            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>

                <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>

                <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </a>

                <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>
            </div>

            <a href="#" title="" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started now </a>
        </nav>

   </header>
  )
}

export default Navigation;
const styles = {
    container:`w-full py-6 justify-between items-center navbar`,
    navWrapper:`list-none sm:flex hidden justify-center items-center flex-1`,
    navWrapper2:`list-none flex flex-col justify-end items-center flex-1`,
    mobile:`sm:hidden flex flex-1 justify-end items-center`,
    mobileItem:`h-[28px] w-[28px] object-contain`,
    toggleContainer:`p-6 bg-primary-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`
}
