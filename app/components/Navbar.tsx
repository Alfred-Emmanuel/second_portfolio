import React from 'react'
import { Borel } from 'next/font/google'

const borel = Borel({ 
  weight: '400',
  subsets: ['latin'],
})

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center text-[#9A3B3B] absolute top-12 left-0 px-6 md:px-32 w-full z-50'>
        <div className={borel.className}>
            <h1 className="text-4xl font-black">alfred</h1>
        </div>
        <span>A</span>
    </nav>
  )
}

