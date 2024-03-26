/* eslint-disable no-unused-vars */

import { NavLink } from "react-router-dom";

const Navbar = () => {
    const listItem = <>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/listedBook">Listed Books</NavLink></li>
        <li><NavLink to="/readChart">Pages to Read</NavLink></li>
        <li><NavLink to="/kidsZone">Kids Zone</NavLink></li>
        <li><NavLink to="/readChart">Kids page</NavLink></li>
    </>
    return (
        <div className="xl:mx-32 lg:mx-28 sm:mx-20 ">
            <div className="navbar bg-base-100 workSans md:text-lg text-base ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            {listItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost md:text-3xl text-lg font-bold">BookLand</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {listItem}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <button className="btn lg:h-[55px]  md:text-lg md:px-7 min-h-[20px] h-10 text-white bg-[#23BE0A]">Sign in</button>
                    <button className="btn lg:h-[55px]  md:text-lg md:px-7 min-h-[20px] h-10 text-white bg-[#59C6D2]">Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;