import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import { Home } from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/Signup";
import Appointment from "../../Pages/Appointment/Appointment";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import AddDoctors from "../../Pages/Dashboard/AddDoctors/AddDoctors";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import AddReview from "../../Pages/Dashboard/AddReview/AddReview";
import Info from "../../Pages/Dashboard/Info/Info";
import About from "../../Pages/About/About";
import AppointmentRequest from "../../Pages/Dashboard/AppointmentRequest/AppointmentRequest";
import DoctorProfile from "../../Pages/Dashboard/DoctorProfile/DoctorProfile";
import AdminProfile from "../../Pages/Dashboard/AdminProfile/AdminProfile";





export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
          
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/appointment',
                element:
                    <PrivateRoute>
                        <Appointment></Appointment>
                    </PrivateRoute>

            },
           

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout />
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard/appointmentList',
                element: <MyAppointment />
            },
            {
                path: '/dashboard/appointmentRequest',
                element: <AppointmentRequest></AppointmentRequest>
            },
            {
                path: '/dashboard/givereview',
                element: <AddReview />
            },
            {
                path: '/dashboard/info',
                element: <Info/>
            },
            {
                path: '/dashboard/docProfile',
                element: <DoctorProfile/>
            },
            {
                path: '/dashboard/adminProfile',
                element: <AdminProfile/>
            },
            {
                path: '/dashboard/addDoctors',
                element: <AdminRoute><AddDoctors /></AdminRoute>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute> <AllUsers /></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute> <ManageDoctors /></AdminRoute>
            }
        ]
    }
])

export default router;