import React from 'react';
import usder from '../assets/istockphoto-1348157796-612x612.jpg'
import { Link } from 'react-router';

const Allmovies = () => {
    return (
        <div>

            <img className='w-full h-[600px] mx-auto' src={usder} alt="" />
            <div className='flex justify-center my-4'>
                <Link to='/'>
                    <a class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                        <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                        <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                            <span class="relative text-white">Back Home</span>
                        </span>
                    </a>

                </Link>
            </div>
        </div>
    );
};

export default Allmovies;