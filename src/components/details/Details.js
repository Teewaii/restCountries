import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import brazil from '../../img/Brazil.png';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import MainDisplay from '../mainDisplay/MainDisplay';
import { useKeyGen } from 'react-key-from-object'



function Details({ country, dispOption, myregion }) {

    const [borderurl, setBorderurl] = useState('https://restcountries.com/v3.1/alpha/IND')

    // useEffect(() => {
    //     axios.get(borderurl)
    //       .then(response => {
    //         setCountry(response.data)
    //         console.log(country)
    //       })
    //   }, [name])

    const keyGen = useKeyGen();//Asign auto generated keys to mapped items

    const { name } = useParams()
    const FilterReg = country.filter((cont) => cont.name.common === name);
    const border = country.filter((cont) => cont.cca3 === "IND");

    // const native = border.name
    // console.log(Object.keys(border))

    // {
    //     border.map((bor) =>
    //         console.log(bor.name.nativeName.eng)
    //     )
    // }
    // console.log(FilterReg.region)
    // FilterReg.map((item) => {
    //     if (item.name = name) {
    //         return (
    //             console.log(item)
    //         )
    //     }
    //     console.log("Not found")
    // }
    // )


    const mapKey = dispOption ? country : FilterReg;
    // const theCountry = country.name = name
    // console.log(theCountry)
    // const { region, nativeName } = FilterReg
    // console.log(region)

    const backHome = useNavigate()
    return (
        <div className="details-container min-h-[100vh] mt-10 lg:mt-16 dark:text-white">
            <div className='container'>
                <button onClick={() => backHome(-1)} className='flex items-center gap-x-1 shadow-lg text-sm text-LtModTxtmdInp bg-white dark:bg-DarkmdEl dark:text-white px-4 py-1 md:px-9 md:py-4 dark:hover:opacity-50   hover:bg-gray-300 hover:text-black  duration-300 ease-in-out'><ArrowLongLeftIcon className='w-5 text-black dark:text-white' /> Back</button>
                {FilterReg.map(({ region, subregion, population, capital, flags, currencies, borders }) => (
                    <div key={keyGen.getKey(region)} className="about-country lg:flex items-center gap-x-5 lg:gap-x-10 ">
                        <img className='my-14 lg:h-[300px] ' src={flags.svg} alt="" />
                        <div className="details ml-4 ">
                            <div className="topLevel md:gap-x-12 lg:flex">
                                <div className="desc1 flex-1 flex flex-col  items-start text-left space-y-1 mb-6">
                                    <h1 className='text-xl font-bold mb-2'>{name}</h1>

                                    <div className="nativeName flex "><p className='font-[700] text-md '>Native Name:</p><p className='text-md  ml-2'>{name.nativeName}</p></div>
                                    <div className="population flex "><p className='font-[700] text-md '>Population:</p><p className='text-md  ml-2'>{population}</p></div>
                                    <div className="region flex"><p className='font-[700] text-md inline'>Region:</p><p className='text-md inline ml-2'>{region}</p></div>
                                    <div className="sub-region flex"><p className='font-[700] text-md inline'>Sub Region:</p><p className='text-md inline ml-2'>{subregion}</p></div>
                                    <div className="capital flex"> <p className='font-[700] text-md'>Capital:</p><p className='text-md inline ml-2'>{capital}</p></div>
                                </div>
                                <div className="desc2 space-y-1  mb-6 md:mt-9">
                                    <div className="nativeName flex "><p className='font-[700] text-md '>Currencies:</p><p className='text-md  ml-2'>{currencies.name}</p></div>

                                    <div className="nativeName flex "><p className='font-[700] text-md '>Languages:</p><p className='text-md  ml-2'>Dutch, French</p></div>
                                </div>

                            </div>

                            <div className="desc3 flex flex-col items-start">
                                <h1 className='text-md font-bold mb-1'>Border Countries</h1>
                                <ul className='flex gap-x-2'>
                                    {borders && borders.map((border, index) => (
                                        <li key={index}><a className='px-3 py-1 shadow-md dark:bg-DarkmdEl capitalize' href={borderurl}> {border}</a></li>
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