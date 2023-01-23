'use client';
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="pb-6 bg-white lg:pb-0">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
                <Logo />
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
             <ul className="list-none sm:flex hidden justify-center items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                key={nav.id}
                className={`font-bold cursor-pointer text-[16px] 
                   ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                  text-black `}
                >
                    <a>{nav.title}</a>
                </li>
              ))}
             </ul>
            </div>

          
        </nav>

       
        <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
             <ul className="list-none sm:flex hidden justify-center items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                key={nav.id}
                className={`font-bold cursor-pointer text-[16px] 
                   ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                  text-black `}
                >
                    <a>{nav.title}</a>
                </li>
              ))}
              </ul>
            </div>

           
        </nav>
    </div>
</header>
  )
}

export default Header