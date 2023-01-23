'use client';
import React, {useState} from 'react';
import { motion } from "framer-motion";
import { navLinks } from '../constants';
import Logo from './Logo';
import Image from 'next/image';
import { navVariants } from '@/utils/motion';
import Menupopover from './MenuPopover';


const Header = () => {
    const [toggle, setToggle] = useState(false)

  return (
  <motion.nav
   variants={navVariants}
   initial="hidden"
   whileInView="show"
   className={`relative`}
  >
   <header className="fixed inset-x-0 bg-[#fff] z-20 flex justify-between items-center py-2 px-2 shadow-lg dark:bg-slate-900 sm:py-3 sm:px-8">
            <div className='flex grow-0 basis-1/3 md:hidden'>
                <Menupopover />
            </div>

             <div className='flex grow-0 justify-center md:justify-start'>
                <Logo />
               
            </div> 


            <ul className="list-none sm:flex hidden justify-center items-center flex-1">
            {navLinks.map((nav, index) => (
                <li
                key={nav.id}
                className={`font-bold cursor-pointer text-[16px] hover:text-blue-400
                   ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                  text-black `}
                >
                    <a>{nav.title}</a>
                </li>
            ))}
           </ul>

        </header>
  </motion.nav>
  )
}

export default Header;

const styles = {
    container:`w-full py-6 justify-between items-center navbar`,
    navWrapper:`list-none sm:flex hidden justify-center items-center flex-1`,
    navWrapper2:`list-none flex flex-col justify-end items-center flex-1`,
    mobile:`sm:hidden flex flex-1 justify-end items-center`,
    mobileItem:`h-[28px] w-[28px] object-contain`,
    toggleContainer:`p-6 bg-primary-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`
}