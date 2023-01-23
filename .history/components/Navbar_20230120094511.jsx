'use client';
import Logo from "./Logo";
import { navLinks } from "@/constants";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 bg-[#fff] z-20 flex justify-between items-center py-2 px-2 shadow-lg dark:bg-slate-900 sm:py-3 sm:px-8">
      <div className='flex grow-0 justify-center md:justify-start'>
        <Logo /> 
      </div> 
 
    </header>
  )
}

export default Navbar;