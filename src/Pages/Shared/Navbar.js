import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import logo from '../../assets/images/logo.svg';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/about">About</Link></li>
        
        {user?.uid ?
            <>
                <li><Link to="/dashboard/info">Dashboard</Link></li>
                <button className="btn btn-outline btn-primary text-black" onClick={handleLogOut}>Log out</button>
            </>
            : <Link to="/login" className="btn btn-outline btn-primary text-white">Login</Link>}
    </React.Fragment>

    return (
        <div className="navbar bg-accent flex justify-between pl-5 pr-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content text-black  mt-3 pl-5 shadow bg-base-100 rounded-box w-52 ">
                        {menuItems}
                    </ul>
                </div>
             
                <Link to="/" className=" normal-case text-xl font-bold">  <img src={logo} alt="" style={{width: '220px'}} /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal ">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;
