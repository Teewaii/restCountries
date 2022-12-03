import React from 'react'
import { MoonIcon } from '@heroicons/react/24/outline'


function Nav() {
    return (
        <nav className=' font-800 h-20 shadow-md '>
            <div className='flex justify-between items-center h-[100%] container'>
                <h1 className='font-bold text-sm'>Where in the world?</h1>
                <div className="mode flex items-center gap-2"><MoonIcon className="w-5 " /><small className='font-[600]'>Dark Mode</small></div>
            </div>
        </nav>
    )
}

export default Nav