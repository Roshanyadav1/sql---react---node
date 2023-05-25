"use client"
import '../globals.css'
import Image from 'next/image';

import tree from '../../assests/tree.jpg'

export default function AuthRootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen  ">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            className='absolute z-0 w-full h-full object-cover'
            src={tree}
            alt="Picture of the author"
          />
          {children}
        </div>
      </body>
    </html>
  )
}