import React from 'react'
import brazil from '../../img/Brazil.png';
import { Link } from 'react-router-dom'

function Card({ country, dispOption, myregion }) {
    const FilterReg = country.filter(({ region }) => region === myregion);
    const mapKey = dispOption ? country : FilterReg;
    return (
        <div className='card wrapper flex flex-col lg:flex-row lg:flex-wrap gap-x-7 gap-y-10'>
            {
                mapKey.map(({ name, region, flags, population, capital }, index) => (
                    <div key={name.common} className='Card lg:w-[250px]'>
                        <Link className='cursor-pointer list-none ' to={`details/${name.common}`}>
                            <div className="card shadow-lg rounded-lg w-[100%] lg:w-[230px] ">
                                <div className="flag h-[250px] lg:h-[150px]  overflow-hidden">
                                    <img className='rounded-t-lg border w-[350px]  object-contain' src={flags.svg} alt="" />
                                </div>
                                <div className="desc pb-6 lg:py-5 flex flex-col items-start  ml-6 ">
                                    <h1 className='text-xl font-bold mb-4'>{name.common}</h1>
                                    <div className="population flex "><p className='font-[700] text-md '>Population:</p><p className='text-md  ml-2'>{population}</p></div>
                                    <div className="region flex"><p className='font-[700] text-md inline'>Region:</p><p className='text-md inline ml-2'>{region}</p></div>
                                    <div className="capital flex"> <p className='font-[700] text-md'>Capital:</p><p className='text-md inline ml-2'>{capital}</p></div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Card