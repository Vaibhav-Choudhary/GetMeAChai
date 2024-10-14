"use client"
import React from 'react'


import Link from 'next/link'
import { signIn } from 'next-auth/react'
const Navbar = () => {

  return (
    <nav className = "items-center py-3 bg-blue-950 text-white flex justify-between px-4">
      <div className="logo flex items-baseline gap-2 font-bold">GetMeAChai
      <img className='rounded-full'src='/Tea.png' width={20} alt=''></img>
      </div>
      {/* <ul className='flex justify-between gap-4 '>
        <li> Home </li>
        <li> About </li>
        <li> Projects </li>
        <li> Sign Up </li>
        <li> Login </li>
      </ul> */}
      <div className=''>
        <Link href={'/login'}>
      <button onClick={()=>{signIn("github")}} className=' text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center '>
          Login
        </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
