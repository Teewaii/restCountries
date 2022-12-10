import React from 'react'
import { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

function Search({ country, dispOption, setdispOption, myregion, setMyregion, OnChangeurl, name, setBaseurl, setName }) {
    //set state for toggling regions list
    const [regionFilter, setRegionFilter] = useState("Filter by Region") //Set state for the region filter label. The region filter label is expected to change state/title to the specific region selected from the list of regions
    const [toggleRegion, setToggleRegion] = useState(false)

    const FilterReg = country.filter(({ region }) => region === myregion);
    //Function for toggling regions list
    function ToggleReion() {
        setToggleRegion(prev => !prev)
    }
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
    const mapKey = dispOption ? country : FilterReg;

    //console.log(Object.values(country.name))
    //console.log(regions.includes("Africa"))
    return (
        <div className="search-container flex flex-col mb-10 lg:mb-16">
            <div className="wrapper relative  flex flex-col  space-y-8  items-start lg:items-center 
            lg:flex-row lg:justify-between">
                <div className='input mt-4 lg:mt-12  flex flex-col items-center relative w-[100%] lg:w-[40%] '><MagnifyingGlassIcon className='w-5 text-LtModTxtmdInp opacity-50 absolute left-8 top-[30%] ' />
                    <input
                        type='search'
                        name='search'
                        id='search'
                        value={name}
                        onChange={OnChangeurl}
                        placeholder='Search for a country...'
                        className='shadow-lg border dark:bg-DarkmdEl dark:border-0 dark:placeholder{-}opacity-100 dark:text-white focus:shadow-xl w-[100%] text-LtModTxtmdInp rounded-md placeholder-LtModTxtmdInp pl-16 placeholder:text-sm placeholder:opacity-50 py-3 px-4 focus:outline-none' />

                </div>
                {/* {regions.includes("Africa")?null: <h1 className='absolute left-8 top-24'>No content found</h1>} */}
                <div onClick={ToggleReion} className="filter dark:bg-DarkmdEl dark:border-0 px-5 w-[180px] shadow-lg hover:shadow-xl border py-3 rounded-md flex items-center justify-between relative cursor-pointer">
                    <p className='text-sm dark:text-white '>{regionFilter}</p> <span className=' caret'>{toggleRegion ? <ChevronDownIcon className='h-4 font-800 text-LtModTxtmdInp' /> : <ChevronUpIcon className='h-4 font-800 text-LtModTxtmdInp' />}</span>
                    <ul className={toggleRegion ? 'absolute top-12 right-0 left-0 shadow-md bg-white dark:bg-DarkmdEl dark:text-white  rounded-md text-left text-sm ' : 'hidden'}>
                        <li onClick={() => { setRegionFilter("Filter by Region"); setdispOption(true) }} className="dark:hover:bg-DarkmdBk px-5 py-2 duration-300 ease-in-out">All</li>
                        {regions.map((region, index) => (
                            <li key={index} onClick={() => { setMyregion(region); setdispOption(false); setRegionFilter(region) }} className="px-5 py-2 hover:bg-LtModTxtmdInp dark:hover:bg-DarkmdBk ">{region}</li>
                        ))}
                    </ul>
                </div>

            </div>
            <div className="err mt-6"> </div>
        </div >
    )
}

export default Search