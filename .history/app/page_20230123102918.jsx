import AboutUs from '@/components/AboutUs'
import CTA from '@/components/CTA'
import Navbar from '@/components/Navbar'
import Navigation from '@/components/Navigation'
import { Gallery, Hero, Plan, Testimonial } from '@/sections'

export default function Home() {
  return (
   <div className='bg-primary-black'>
    <Navbar />
    <Hero />
    <Plan />
    <AboutUs />
    <Testimonial />
    <Gallery />
    <CTA />
   </div>
  )
}
