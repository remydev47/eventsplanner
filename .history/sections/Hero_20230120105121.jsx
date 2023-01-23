'use client';
import { slideIn } from "@/utils/motion";
import { motion } from "framer-motion";

const Hero = () => {
    return(
    <section className='relative pt-48 pb-12 xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56'>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
         >
          <div className="absolute inset-0">
           <img className="object-cover w-full h-full" src="/images/hero.jpg" alt="" />
          </div>
        </motion.div>
        
     <div className='relative'>
       <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="w-full lg:w-2/3 xl:w-1/2">
         <h1 className="font-serif text-xl font-bold tracking-tight text-white text-opacity-70 text-center">Proffesional Events Planners</h1>
          <p className="mt-6 tracking-tighter text-[#000]">
            <span className="font-sans font-bold text-4xl">WELCOME TO OUR </span><br />
            <span className="font-serif italic font-BOLD text-5xl">WORLD CLASS PROFFESIONAL PLAANING</span>
         </p>
         <p className="mt-8 font-erif text-xl font-serif text-[#fff]">
          Hiring A Proffesional Planner for Weddings, Family Dinners & Gatherings, Date Nights & Branchs, Parties & Get-togethers, and even Meal for entire Families !
         </p>
        </div>
      </div>
     </div>
     </section>
    )
}

export default Hero;