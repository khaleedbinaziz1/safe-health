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
                path: '/dashboard/addDoctors',
                element: <AddDoctors />
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute> <AllUsers /></AdminRoute>
            }
        ]
    }
])

export default router;