'use client';

import { navLinks } from '@/constants';
import Image from 'next/image';
import React, {useState} from 'react'
import Logo from './Logo';

const Navigation = () => {
    const [toggle, setToggle] = useState(false);

  return (
   <header>
     header
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
