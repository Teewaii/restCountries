import React from 'react'
import { MoonIcon } from '@heroicons/react/24/outline';
import { SunIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

function Nav({ mode, setMode, setName, }) {



    return (
        <nav className=' font-800 h-20 dark:bg-DarkmdEl dark:text-white shadow-md '>
            <div className='flex justify-between items-center h-[100%] container'>
                <Link to='/' ><h1 className='font-bold text-sm lg:text-lg'>Where in the world?</h1></Link>
                {!mode ? <div onClick={() => setMode(prev => !prev)} className="mode cursor-pointer flex items-center gap-2"><MoonIcon className="w-5 " /><small className='font-[600]'>Dark Mode</small></div> :
                    <div onClick={() => { setMode(prev => !prev); }} className="mode cursor-pointer flex items-center gap-2"><SunIcon className="w-5 " /><small className='font-[600]'>Light Mode</small></div>}
            </div>
        </nav>
    )
}

export default Nav