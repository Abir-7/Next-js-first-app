import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const links = <>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/alldoctor'>All Doctors</Link></li>
        <li><Link href='#'>Dashboard</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-blue-500 text-white rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-blue-500 text-white rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Doctor Appointment</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-blue-700 hover:bg-blue-800  border-none text-white">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;