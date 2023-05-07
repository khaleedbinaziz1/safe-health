import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const AppointmentRequest = () => {
  const { user } = useContext(AuthContext);

  const url = `https://doctors-server-sage.vercel.app/bookings2`;

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email, user?.displayName],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      const filteredData = data.filter(booking => booking.treatment == user.displayName);
      return filteredData;
    }
  });
  

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
            {Array.isArray(bookings) && bookings.length > 0 ? (
              bookings.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.patient}</td>
                  <td>{booking.treatment}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>{booking.slot}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No appointments found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentRequest;
