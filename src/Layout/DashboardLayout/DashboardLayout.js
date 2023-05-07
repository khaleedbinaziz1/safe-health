import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../../Pages/Shared/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaAddressCard, FaHome, FaUserAlt, FaMousePointer, FaThList, FaStarHalfAlt, FaUsers } from "react-icons/fa";


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user.email);
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch("https://doctors-server-sage.vercel.app/users")
            .then((response) => response.json())
            .then((data) => {
                const users = data.map(user => {
                    if (user.role === 'doctor') {
                        return { ...user, isDoctor: true };
                    } else {
                        return { ...user, isDoctor: false };
                    }
                });
                setUsers(users);
            })
            .catch((error) => console.error(error));
    }, []);

    const isDoctor = users.find(u => u.email === user.email)?.isDoctor ?? false;


//     const navigate = useNavigate();
//   if(isAdmin) {

//          navigate('adminprofile');
    
  
//   }

    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle " />
                <div className="drawer-content ">
                    <Outlet />

                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-primary bg-base-200">

                        {
                            isAdmin && <>
                                <li ><Link to="info"><FaUserAlt />Admin Profile</Link></li>
                                <li><Link to="allUsers"> <FaUsers />All Users</Link></li>
                                <li><Link to="addDoctors"><FaAddressCard />Add Doctor</Link></li>
                                <li><Link to="managedoctors"><FaMousePointer />Manage Doctors</Link></li>


                            </>
                        }

                        {
                            !isAdmin && !isDoctor &&<>
                           <li><Link to="info"><FaUserAlt />Patient Profile</Link></li>
                            <li><Link to="appointmentList"><FaThList />Appointment Lists</Link></li>
                            <li><Link to="givereview"><FaStarHalfAlt/>Give Review</Link></li>

                            <li> <Link to="/"> <FaHome />Home</Link></li>
                            </>
                        }
                        {
                            isDoctor && <>
                            <li ><Link to="info"><FaUserAlt />Doctor Profile</Link></li>
                            <li><Link to="appointmentRequest"><FaThList />Appointment Requests</Link></li>
                            
                             </>

                        }
                      
                    </ul>

                </div>
            </div>
        </div>
    );
};



export default DashboardLayout;