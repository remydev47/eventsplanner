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
      <nav className="pt-4 pb-6 bg-primary-black border border-gray-200 rounded-md shadow-md lg:hidden">
      
            <Image
              src={ toggle ? '/images/close.svg' : '/images/menu.svg'}
              alt='menu'
              width={60}
              height={60}
              className={styles.mobileItem}
              onClick={() => setToggle((prev) => !prev)}
            />
            {/* toggle menu */}
            
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
