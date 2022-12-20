import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import millify from "millify";
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import brazil from '../../img/Brazil.png';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import MainDisplay from '../mainDisplay/MainDisplay';
import { useKeyGen } from 'react-key-from-object'
import axios from 'axios';
import { AppContext } from '../../App';


function Details() {
    window.scroll(0, 0);
    
    const { country, dispOption, myregion, setMode } = useContext(AppContext);
    //const [borderurl, setBorderurl] = useState("")
    const [bord, setBord] = useState("") //state for storing border countries cca3 code.
    //const [bordi, setBordi] = useState("")

    const keyGen = useKeyGen();//Asign auto generated keys to mapped items

    const { name } = useParams()
    //filter through the entire data set to get the data of any country whose "name" matches the name parameter
    const FilterReg = country.filter((targetCountry) => targetCountry.name.common === name);

    //get the data of the country whose cca3 code matches the data in the bord state
    const borderCountry = country.filter((nam) => nam.cca3 === bord);
    //extract the name parameter from the data stored in bordCountry for creating the href of the border country concern
    const borderLink = borderCountry.map(({ name }) => (
        name.common
    ))

    const mapKey = dispOption ? country : FilterReg;

    return (
        <div className="details-container min-h-[fit] pt-8 pb-18 mb-8 lg:mt-16 dark:text-white overflow-hidden">
            <div className='container flex flex-col justify-center   '>
                <Link to='/' className='flex w-fit items-center gap-x-1 shadow-lg text-sm text-LtModTxtmdInp bg-gray-200 dark:bg-DarkmdEl dark:text-white px-4 py-3 md:px-9 md:py-4 dark:hover:opacity-50   hover:bg-gray-300 hover:text-black  duration-300 ease-in-out'><ArrowLongLeftIcon className='w-5 text-black dark:text-white' /> Back</Link>
                {/* <button onClick={() => backHome(-1)} className='flex w-fit items-center gap-x-1 shadow-lg text-sm text-LtModTxtmdInp bg-white dark:bg-DarkmdEl dark:text-white px-4 py-1 md:px-9 md:py-4 dark:hover:opacity-50   hover:bg-gray-300 hover:text-black  duration-300 ease-in-out'><ArrowLongLeftIcon className='w-5 text-black dark:text-white' /> Back</button> */}
                {FilterReg.map(({ name, region, subregion, population, capital, flags, currencies, borders, languages, nativeName, tld }) => (
                    <div key={keyGen.getKey(region)} className="about-country pb-[9rem] lg:flex flex-col xl:flex-row items-center justify-center gap-x-5 lg:gap-x-10 ">
                        <img className='my-8 lg:h-[320px] lg:max-w-[500px] 2xl:h-[320px] ' src={flags.svg} alt="" />
                        <div className="details  w-fit ml-4 lg:ml-4 flex flex-col   justify-between  space-y-4 max-h-[300px] ">
                            <div className="topLevel md:gap-x-14 md:flex">
                                <div className="desc1 flex-1 flex flex-col  items-start text-left space-y-1 mb-6">
                                    <h1 className='text-xl font-bold mb-2'>{Object.values(name.common)}</h1>
                                    <div className="nativeName flex "><p className='font-semibold text-md '>Native Name:</p><p className='text-md  ml-2'>{Object.values(name.nativeName)[0].common}</p></div>
                                    <div className="population flex "><p className='font-semibold text-md '>Population:</p><p className='text-md  ml-2'>{millify(population)}</p></div>
                                    <div className="region flex"><p className='font-semibold text-md inline'>Region:</p><p className='text-md inline ml-2'>{region}</p></div>
                                    <div className="sub-region flex"><p className='font-semibold text-md inline'>Sub Region:</p><p className='text-md inline ml-2'>{subregion}</p></div>
                                    <div className="capital flex"> <p className='font-semibold text-md'>Capital:</p><p className='text-md inline ml-2'>{capital}</p></div>
                                </div>
                                <div className="desc2 space-y-1  mb-6 md:mt-9">
                                    <div className="nativeName flex "><p className='font-semibold text-md '>Top Level Domain:</p><p className='text-md  ml-2'>{Object.values(tld)}</p></div>

                                    <div className="nativeName flex "><p className='font-semibold text-md '>Currencies:</p><p className='text-md  ml-2'>{Object.values(currencies)[0].name}</p></div>
                                    <div className="languages font-semibold flex ">Language(s):
                                        <ul className='flex flex-wrap'>
                                            {Object.values(languages).map((language, index) => (
                                                <li key={index} className='text-md  relative after:content-[","] last:after:content-[""] ml-2'>{language}</li>

                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="desc3 flex flex-col items-start">
                                <h1 className='text-md font-semibold mb-2'>Border Countries:</h1>

                                <ul className='max-w-[650px] flex flex-wrap gap-x-2 gap-y-4'>
                                    {!borders ? "No border" : borders.map((border, index) => (
                                        // <Link onClick={() => { setBord(border) }} key={index} className='text-sm px-3 py-1 shadow-md bg-slate-100  dark:bg-DarkmdEl capitalize' to={`/${borderLink}`}> {border}</Link>
                                        <li onClick={() => { setBord(border) }} key={index}><a className='text-sm px-3 py-1 shadow-md bg-slate-100  dark:bg-DarkmdEl capitalize' href={borderLink}> {border}</a></li>

                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div >
    )
}

export default Details