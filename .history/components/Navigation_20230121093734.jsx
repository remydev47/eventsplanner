'use client';

import { navLinks } from '@/constants';
import Image from 'next/image';
import React, {useState} from 'react'
import Logo from './Logo';

const Navigation = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <header class="pb-6 bg-white lg:pb-0">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <nav class="flex items-center justify-between h-16 lg:h-20">
            <div class="flex-shrink-0">
                <a href="#" title="" class="flex">
                    <Logo />
                </a>
            </div>
           
            <Image
              src={ toggle ? '/images/close.svg' : '/images/menu.svg'}
              alt='menu'
              width={60}
              height={60}
              className={styles.mobileItem}
              onClick={() => setToggle((prev) => !prev)}
            />
            <div className={`${toggle ? 'flex' : 'hidden'} ${styles.toggleContainer}`}
             >
              <ul
                className={styles.navWrapper2}
              >
                {navLinks.map((nav, index) => (
                    <li
                     key={nav.id}
                     className={` font-bold cursor-pointer text-[16px] 
                     mt-2 border-t border-slate-200 py-4 dark:border-slate-600
                     ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
                     text-white `}
                    >
                     <a href={`#${nav.id}`}>
                        {nav.title}
                     </a>
                    </li>
                 ))}
              </ul>
             </div>
         
            {/* <div class="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>

                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>

                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </a>

                <a href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>
            </div>

            <a href="#" title="" class="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started now </a> */}
        </nav>

       
        <nav class="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div class="flow-root">
                <div class="flex flex-col px-6 -my-2 space-y-1">
                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>

                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>

                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </a>

                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>
                </div>
            </div>

            <div class="px-6 mt-6">
                <a href="#" title="" class="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started now </a>
            </div>
        </nav>
    </div>
</header>
  )
}

export default Navigation;
const styles = {
    container:`w-full py-6 justify-between items-center navbar`,
    navWrapper:`list-none sm:flex hidden justify-end items-center flex-1`,
    navWrapper2:`list-none flex flex-col justify-end items-center flex-1`,
    mobile:`sm:hidden flex flex-1 justify-end items-center`,
    mobileItem:`h-[28px] w-[28px] object-contain`,
    toggleContainer:`p-6 bg-primary-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`
}
