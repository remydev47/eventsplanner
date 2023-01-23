import Navbar from '@/components/Navbar'
import Navigation from '@/components/Navigation'
import { Hero, Plan } from '@/sections'

export default function Home() {
  return (
   <div className='bg-primary-black'>
    <Navbar />
    <Hero />
    <Plan />
  
   </div>
  )
}
