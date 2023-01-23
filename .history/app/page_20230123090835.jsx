import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Navigation from '@/components/Navigation'
import { Hero } from '@/sections'
import Image from 'next/image'


export default function Home() {
  return (
   <div className='bg-primary-black'>
    <Navbar />
    <Hero />
   </div>
  )
}
