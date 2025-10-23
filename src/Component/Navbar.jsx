import React, { useContext } from 'react';
import { TbLogout } from 'react-icons/tb';
import { Link, NavLink } from 'react-router';
import { valueContext } from '../Rootlayout/Rootlayout';

const Navbar = () => {

    const { userprofile } = useContext(valueContext)
    // console.log(userprofile);

    const { handelLogout } = useContext(valueContext)

    

    return (
        <>
          
            <div className="navbar shadow-sm justify-between   mx-auto  md:px-12 lg:px-16 ">


                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 space-x-2 mt-3 w-52 p-2 shadow">
                            <NavLink to='/' className='btn'>Home</NavLink>
                        {
                            userprofile?.email && <NavLink to='/download' className='btn'>Download</NavLink>
                        }
                         {
                           userprofile?.email && <NavLink to='/Watch' className='btn'>Your Videos</NavLink>
                        }
                        {
                            userprofile?.email && <NavLink to='/profile' className='btn'>Your-Profile</NavLink>
                        }
                       
                        </ul>
                    </div>


                    <h1 className="font-bold text-xl ">MovieVerse</h1>

                </div>





                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal space-x-2 px-1">
                        <NavLink to='/' className='btn'>Home</NavLink>
                        {
                            userprofile?.email && <NavLink to='/download' className='btn'>Download</NavLink>
                        }
                         {
                           userprofile?.email && <NavLink to='/Watch' className='btn'>Your Videos</NavLink>
                        }
                        {
                            userprofile?.email && <NavLink to='/profile' className='btn'>Your-Profile</NavLink>
                        }
                       
                    </ul>
                </div>





                <div className="navbar-end">


                    <div className='flex items-center'>


                        {
                            userprofile?.email && <div className="flex">
                                <div className="relative group ml-4">
                                    <div className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt='user Pic'
                                                src={userprofile.photoURL}
                                            />
                                        </div>
                                    </div>
                                    <ul
                                        className="menu menu-sm absolute right-0 bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200"
                                    >
                                        <li><a>{
                                            userprofile?.email
                                        }</a></li>
                                    </ul>
                                </div>


                            </div>
                        }

                        {
                            !userprofile?.email && <div className='flex items-center gap-3.5'>
                                <Link to='/login'><button className="relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                                    <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                                    <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                        <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                        <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                                    </span>
                                    <span class="relative text-white">Login</span>
                                </button></Link>
                                <Link to='/signup' ><button className="relative  items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                                    <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                                    <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                        <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                        <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                                    </span>
                                    <span class="relative text-white">SignUp</span>
                                </button></Link>

                            </div>
                        }
                        {
                            userprofile?.email && <button onClick={handelLogout} class="inline-flex btn-warning items-center justify-center w-full px-5 py-2 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                <TbLogout />
                            </button>
                        }


                    </div>


                </div>
            </div>


        </>
    );
};

export default Navbar;
