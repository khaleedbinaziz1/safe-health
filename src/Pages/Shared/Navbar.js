import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut =()=>{
        logOut()
        .then(()=>{})
        .catch(err => console.error(err));
    }

    const menuItem = <React.Fragment>

        <li className="pr-10"><Link to="/">HOME</Link></li>
        <li className="pr-10"><Link>SERVICES</Link></li>
        <li className="pr-10"><Link to="/appointment">APPOINTMENT</Link></li>
        <li className="pr-10"><Link to="">CONTACT US</Link></li>
        {user?.uid ?
            <>
                 <li><Link to="/dashboard">DASHBOARD</Link></li>
                 
            </>
                    :      <></>
                }


    </React.Fragment>
    return (
        <div className="navbar bg-base-100 px-10  bg-primary text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">


                        {menuItem}
                    </ul>
                </div>
                <Link to="/" className=" normal-case text-xl font-bold">SAFE <span className="text-accent font-bold">HEALTH</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>
            <label htmlFor='dashboard-drawer' tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
            <div className="navbar-end">

                {user?.uid ?
            <>
                    <button className="btn btn-outline btn-white text-white" onClick={handleLogOut}>Log out</button>
            </>
                    : <Link to="/login" className="btn btn-outline btn-white text-white">Login</Link>
                }

            </div>
        </div>
    )
}

export default Navbar