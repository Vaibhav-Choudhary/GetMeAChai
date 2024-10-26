"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const { data: session } = useSession();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut({ redirect: false });
        router.push('/login');
    };

    return (
        <nav className="py-3 bg-blue-950 text-white flex justify-between items-center px-4 lg:px-8">
            <Link href={session ? '/dashboard' : '/'}>
                <div className="logo flex items-center gap-1 md:gap-2 font-bold text-lg">
                    GetMeAChai
                    <img className='rounded-full' src='/Tea.png' width={20} alt='Logo' />
                </div>
            </Link>

            {/* Navbar Items */}
            <div className={`flex md lg:flex-row lg:flex gap-2 md:gap-4 lg:gap-6 items-center `}>
                {/* Login Button */}
                {!session && (
                    <Link href={'/login'}>
                        <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center'>
                            Login
                        </button>
                    </Link>
                )}

                {/* Dropdown and Sign Out */}
                {session && (
                    <div
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                        className="relative inline-block text-left"
                    >
                        <button
                            className='flex items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 md:px-5 lg:px-5 py-2 text-center'
                            type="button"
                        >
                            Explore
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                    <li>
                                        <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                    </li>
                                    {/* <li>
                                        <Link href="" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                                    </li> */}
                                    <li>
                                        <Link href="/search" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Search Creator</Link>
                                    </li>
                                    <li>
                                        <Link href="" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleSignOut}>Sign out</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {/* Sign Out Button */}
                {session && (
                    <button onClick={handleSignOut} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 md:px-5 lg:px-5 py-2 text-center'>
                        Log out
                    </button>
                )}
            </div>
        </nav>
    )
}

export default Navbar
