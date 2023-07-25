import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Navbar from '@/components/ui/Navbar'
import NavbarResponsive from '@/components/ui/NavbarResponsive'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar className="hidden sm:flex" />
    <NavbarResponsive />
    <Hero/>
    </>
  )
}
