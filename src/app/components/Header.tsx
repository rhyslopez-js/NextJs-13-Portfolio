"use:client";

import React, {useState} from 'react'

export const Header = () => {
    const [menuIcon, setMenuIcon] = useState(false)
    const mobileMenuIcon = () =>{
        setMenuIcon(!menuIcon)
    }
  
    return (
        <header>
            <nav className='border flex justify-between py-6 px-8'>
                <a>LOGO</a>

                {/* <ul className='flex space-x-6 sm:hidden'>
                    <li className='font-bold'><a>Projects</a></li>
                    <li className='font-bold'><a>About</a></li>
                    <li className='font-bold'><a>Contact</a></li>
                </ul> */}
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </nav>
        </header>
    )
}
