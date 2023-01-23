'use client';

import Image from "next/image";

const services =[
    {
        image:'/images/hindu-wedding.png',
        name:'Wedding',
        description:'Consectetur adipiscing elit praesent eu purus scelerisque.' 
     },
    {
       image:'/images/happy-birthday.png',
       name:'Birthday Parties',
       description:'Ipsum dolor sit amet, consectetur adipiscing elit praesent eu.' 
    },
    {
        image:'/images/wine.png',
        name:'Wining & Dining',
        description:'Dolor sit amet, consectetur adipiscing elit praesent eu purus.' 
     },
     {
        image:'/images/party.png',
        name:'Official Parties',
        description:'Lorem ipsum dolor sit amet, consectetur nec adipiscing elit.' 
     },
]

const Plan = () => {
    return(
        <section className="bg-[#fff] sm:py-8 lg:py-20 mt-6">
     
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
         <div className="max-w-2xl mx-auto text-center">
          <h2 className=" font-bold  text-xl leading-tight text-black">WE DO EVERYTHING</h2>
          <h1 className="font-semibold font-serif text-black text-3xl">Welcome to PlanMyDay Wedding Agency!</h1>
         </div>
    
         <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
          {services.map((item, i) => (
         <div className="overflow-hidden bg-white border-gray-300">             
              <div className="flex flex-col items-center justify-center">
               
                  <Image
                   src={item.image} 
                   width={150}
                   height={150}
                   
                 />
                 
                 <h2 className='font-semibold  text-2xl text-black text-center mt-2'>
                   {item.name}
                 </h2>
                 <p className='text-base font-serif text-noraml text-center '>
                  {item.description}
                 </p>
              </div>                     
         </div>
         ))}
        </div>
       </div>
      </section>
    )
}

export default Plan;