'use client';

import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="py-6  sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div className="">
                <h1 className='text-3xl italic text-pink-400 text-center'>WHO WE ARE?</h1>
                <h2 className="text-4xl font-bold leading-tight text-white sm:text-4xl lg:text-4xl">A Few Words About Us.</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600 font-semibold">
                 Our home EventsPlanning services are designed to give you the peace of mind you deserve and the time you need to enjoy your life and loved ones..
                </p>
            </div>

            <div className=" pl-20 pr-6 sm:pl-6 md:px-0">
                <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                 <Image width={400} height={400} className="relative -top-4 -left-4" src="/images/about.jpg" alt="" />
                

                    
                    <div className="absolute -bottom-10 -left-16 m-2">
                        
                         
                          <div className="px-8 py-8 bg-pink-400">
                               <span className="block text-4xl font-bold text-white lg:text-5xl"> 100+ </span>
                                <span className="block mt-2 text-base leading-tight text-white"> Team<br />Member</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutUs