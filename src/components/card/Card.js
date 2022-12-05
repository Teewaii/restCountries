import React from 'react'
//import brazil from '../../img/Brazil.png';
import { Link } from 'react-router-dom'

function Card({ country, dispOption, myregion }) {
    const FilterReg = country.filter(({ region }) => region === myregion);
    const mapKey = dispOption ? country : FilterReg;
    return (
        <div className='card wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10  justify-items-center'>
            {/* <div className='card wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10  justify-items-center'> */}
            {/* <div className='card wrapper flex flex-col lg:flex-row lg:flex-wrap gap-x-7 gap-y-10'> */}

            {mapKey.map(({ name, region, flags, population, capital }, index) => (
                <div key={name.common} className='Card  lg:w-[250px] shadow-lg  hover:shadow-xl hover:scale-105 duration-300 ease-in-out '>
                    <Link className='cursor-pointer list-none' to={`details/${name.common}`}>
                        <div className="card bg-white dark:bg-DarkmdEl dark:text-white rounded-lg w-[100%]  md:min-w-[250px]">
                            <div className="flag min-h-[200px] lg:h-[150px]  overflow-hidden">
                                <img className='rounded-t-lg  w-[100%]  object-contain' src={flags.png} alt="" />
                            </div>
                            <div className="desc py-6 lg:py-0 lg:pb-8 flex flex-col items-start  ml-6 ">
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