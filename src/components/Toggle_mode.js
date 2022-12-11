import React from 'react'

import { MoonIcon } from '@heroicons/react/24/outline';
import { SunIcon } from '@heroicons/react/24/outline'
import {  useState } from 'react';

function Toggle_mode({mode, setMode,}) {
    // const [mode, setMode] = useState(false)
    function toggle(){
        setMode(prev => !prev)
    }
  return (
    <div className='Toggle_mode'>
         {!mode ? <div onClick={toggle} className="mode cursor-pointer flex items-center gap-2"><MoonIcon className="w-5 " /><small className='font-[600]'>Dark Mode</small></div> :
                    <div onClick={toggle} className="mode cursor-pointer flex items-center gap-2"><SunIcon className="w-5 " /><small className='font-[600]'>Light Mode</small></div>}
    </div>
  )
}

export default Toggle_mode