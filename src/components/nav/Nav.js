import React from 'react'
import { Link } from 'react-router-dom';
import Toggle_mode from '../Toggle_mode';

function Nav({ mode, setMode, setName, }) {



    return (
        <nav className=' font-800 h-20 dark:bg-DarkmdEl dark:text-white shadow-md '>
            <div className='flex justify-between items-center h-[100%] container'>
                <Link to='/' ><h1 className='font-bold text-sm lg:text-lg'>Where in the world?</h1></Link>
               <Toggle_mode mode={mode} setMode={setMode}/>
            </div>
        </nav>
    )
}

export default Nav