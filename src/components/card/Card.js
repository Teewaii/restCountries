import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import millify from "millify";
import { AppContext } from '../../App';

function Card() {

    const { country, dispOption, myregion } = useContext(AppContext);

    const FilterReg = country.filter(({ region }) => region === myregion);
    const mapKey = dispOption ? country : FilterReg;
    return (
        <div className='card wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10  justify-items-center '>
            {mapKey.map(({ name, region, flags, population, capital }, index) => (
                <div key={name.common} className='Card  lg:w-[250px] shadow-lg  hover:shadow-xl hover:scale-105 duration-300 ease-in-out '>
                    <Link className='cursor-pointer list-none' to={name.common}>
                        {/* <Link className='cursor-pointer list-none' to={`details/${name.common}`}> */}
                        <div className="card dark:bg-DarkmdEl dark:text-white rounded-b-lg w-[100%]  md:min-w-[250px] overflow-hidden">
                            <div className="flag h-[150px] lg:h-[150px]  overflow-hidden">
                                <img className='rounded-t-lg  w-[300px] h-[100%] object-cover' src={flags ? flags.svg : flags.png} alt="" />
                            </div>
                            <div className="desc py-6 lg:py-4 lg:pb-8 flex flex-col items-start  ml-6 ">
                                <h1 className='text-xl text-left font-bold mb-4'>{name.common}</h1>
                                <div className="population flex "><p className='font-[700] text-md '>Population:</p><p className='text-md  ml-2'>{millify(population)}</p></div>
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