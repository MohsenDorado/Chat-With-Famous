
import { Menu } from 'lucide-react'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Sidebar from './Sidebar'

const MobileSidebar = () => {
  return (

    <Sheet>
        <SheetTrigger>
            <Menu/>
        </SheetTrigger>
        <SheetContent side="left" className='p-0 bg-secondary pt-10 w-32'>
            <Sidebar/>
        </SheetContent>

    </Sheet>

  )
}

export default MobileSidebar