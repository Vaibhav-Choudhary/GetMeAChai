"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation' // Import useRouter

const Navbar = () => {

    const { data: session } = useSession();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter(); // Get the router instance
  
    const handleSignOut = async () => {
      await signOut({ redirect: false }); // Sign out without automatic redirect
      router.push('/login'); // Redirect to /login after signing out
    };

  return (
    <nav className="items-center py-3 bg-blue-950 text-white flex justify-between px-4">
      <Link href={session?'/dashboard':'/'}>
      <div className="logo flex items-baseline gap-2 font-bold">GetMeAChai
        <img className='rounded-full' src='/Tea.png' width={20} alt='' />
      </div>
      </Link>
      <div className='flex gap-2'>

        {/*Login*/}
        {!session && (
          <Link href={'/login'}>
            <button className=' text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center '>
              Login
            </button>
          </Link>
        )}

        {/* Dropdown */}
        {session && (
          <div 
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)} 
            className="relative inline-block text-left"
          >
            <button
              className=' flex items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center '
              type="button"
            >
                Welcome {session.user.email}
              <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                  </li>
                  <li>
                    <Link href="" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                  </li>
                  <li>
                    <Link href="" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                  </li>
                  <li>
                    <Link href="" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleSignOut}>Sign out</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Logout */}
        {session && (
          <button onClick={handleSignOut} className=' text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center '>
            Sign out
          </button>
        )}

      </div>
    </nav>
  )
}

export default Navbar
