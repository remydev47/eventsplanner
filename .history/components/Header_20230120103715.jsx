'use client';
import React, {useState} from 'react';
import { motion } from "framer-motion";
import { navLinks } from '../constants';
import Logo from './Logo';
import Image from 'next/image';
import { navVariants } from '@/utils/motion';

const Header = () => {
    const [toggle, setToggle] = useState(false)

  return (
  <motion.nav
   variants={navVariants}
   initial="hidden"
   whileInView="show"
   className={`relative`}
  >
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
        {/* mobile */}
        <div className={styles.mobile}>
            <Image
              src={ toggle ? '/images/close.svg' : '/images/menu.svg'}
              alt='menu'
              width={60}
              height={60}
              className={styles.mobileItem}
              onClick={() => setToggle((prev) => !prev)}
            />
            {/* toggle menu */}
            <motion.nav
              variants={navVariants}
              initial="hidden"
              whileInView="show"
              className={`relative`}
               >
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
            </motion.nav>

        </div>
    </nav>
  </motion.nav>
  )
}

export default Header;

const styles = {
    container:`w-full py-6 justify-between items-center navbar`,
    navWrapper:`list-none sm:flex hidden justify-end items-center flex-1`,
    navWrapper2:`list-none flex flex-col justify-end items-center flex-1`,
    mobile:`sm:hidden flex flex-1 justify-end items-center`,
    mobileItem:`h-[28px] w-[28px] object-contain`,
    toggleContainer:`p-6 bg-primary-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`
}