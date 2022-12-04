import React from 'react'
import { useState } from 'react';
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

    return (
        <div className="search-container mb-10 lg:mb-16">
            <div className="wrapper  flex flex-col  space-y-8  items-start lg:items-center 
            lg:flex-row lg:justify-between">
                <div className='input mt-4 lg:mt-12  flex flex-col items-center relative w-[100%] lg:w-[40%] '><MagnifyingGlassIcon className='w-5 text-LtModTxtmdInp opacity-50 absolute left-8 top-[30%] ' /><input className='shadow-lg border dark:bg-DarkmdEl dark:border-0 dark:placeholder{-}opacity-100 dark:text-white focus:shadow-xl w-[100%] text-LtModTxtmdInp rounded-md placeholder-LtModTxtmdInp pl-16 placeholder:text-sm placeholder:opacity-50 py-3 px-4 focus:outline-none' type="text" value={name} onChange={OnChangeurl} placeholder='Search for a country...' /></div>

                <div onClick={ToggleReion} className="filter dark:bg-DarkmdEl dark:border-0 px-5 w-[180px] shadow-lg hover:shadow-xl border py-3 rounded-md flex items-center justify-between relative cursor-pointer">
                    <p className='text-sm dark:text-white'>{regionFilter}</p> <span className=' caret'>{toggleRegion ? <ChevronDownIcon className='h-4 font-800 text-LtModTxtmdInp' /> : <ChevronUpIcon className='h-4 font-800 text-LtModTxtmdInp' />}</span>
                    <ul className={toggleRegion ? 'absolute top-14 right-0 left-0 shadow-md bg-white  px-5 rounded-md py-3 text-left text-sm space-y-3 ' : 'hidden'}>
                        <li onClick={() => { window.location.reload(); setdispOption(true) }}>All</li>
                        {regions.map((region, index) => (
                            <li key={index} onClick={() => { setMyregion(region); setdispOption(false); setRegionFilter(region) }}>{region}</li>
                        ))}
                    </ul>
                </div>
                {/* 
                <div className="select px-5 w-[fit] shadow-lg py-3 rounded-md flex items-center space-x-3 justify-between relative cursor-pointer outline-none">
                 
                    <select className="regions outline-none" id="cars">
                        <option value="">Filter by Region</option>
                        <option value="All">All</option>
                        {regions.map((region, index) => (
                            <option value={region} key={index} onClick={() => { setMyregion(region); setdispOption(false) }}>{region} </option>
                        ))}
                    </select>
                </div>
                 */}
            </div>
        </div >
    )
}

export default Search