"use client"
import { UserButton } from '@clerk/nextjs'
import {  Menu, Sparkle } from 'lucide-react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import MobileSidebar from './mobile-sidebar'



const font=Poppins({
weight:"600",
subsets:["latin"]

})
const Navbar = () => {
  return (
    <div className='fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16'>



      <div className='flex items-center '>
        <div className='flex md:hidden'>

        <MobileSidebar/>
        </div>

        <Link href="/">
          <h1 className={cn('hidden md:block text-xl md:text-3xl font-bold text-primary',font.className)}>Chat With Famous</h1>
        </Link>

      </div>
      <div className='flex items-center gap-3 '>
        <Button variant="premium">
          Upgrade
          <Sparkle className='ml-2 h-4 w-4 fill-white text-white'/>


        </Button>
        <ModeToggle/>
        <UserButton/>

      </div>
    </div>
  )
}

export default Navbar