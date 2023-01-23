'use client';
import Logo from "./Logo";
import { motion } from "framer-motion";
import { navLinks } from "@/constants";
import Menupopover from "./MenuPopover";
import { navVariants } from "@/utils/motion";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
     initial="hidden"
     whileInView="show"
     className={`relative`}
     >
     <header className="fixed inset-x-0 bg-pink-300 z-20 flex justify-between items-center py-2 px-2 shadow-lg dark:bg-slate-900 sm:py-3 sm:px-8">
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

export default Navbar;