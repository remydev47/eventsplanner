'use client';
import Image from "next/image";

const Logo = () => {
  return (
    <div>
        <Image 
          alt="events-planner"
          src='/images/logo_black.png'
          width={150}
          height={75}
          className='ml-2 m-4'
        />
    </div>
  )
}

export default Logo