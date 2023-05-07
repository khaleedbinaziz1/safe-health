import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider'
import { useQuery } from '@tanstack/react-query';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    console.log(user.name);
    

    const url = `https://doctors-server-sage.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className="text-3xl mb-5">My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Doctor</th>
                            <th>Date</th>
                            <th>Time</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(bookings) && bookings.length > 0 ? // Add conditional check here
                                bookings.map((booking, i) => <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>

                                </tr>)
                                :
                                <tr>
                                    <td colSpan="5">No appointments found.</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;
